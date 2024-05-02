import { createOnramp } from "./onramps";
import { db } from "./firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  setDoc,
  where,
  orderBy,
  startAfter,
} from "firebase/firestore";
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "./currencies";
import { convertFiatToUsdt } from "./clientServerUsable/convertWithoutDb";
import { lookupWithdrawalAddressById } from "./withdrawalAddress";
import { v4 as uuidv4 } from "uuid";
import { fetchCurrentCryptoTransactionParams } from "./cryptoSettings";
//-----IMPORTANT CONSTANT!!!!-----
const FULFILLMENT_OZIMIZ_ISTEMIZ = true;
//-----IMPORTANT CONSTANT!!!!-----

export const getWithdrawals = async ({ username }) => {
  const q = query(
    collection(db, "withdrawals"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(q);
  const withdrawals = querySnapshot.docs.map((doc) => {
    const allData = doc.data();
    return { ...allData, withdrawalId: doc.id };
  });
  return withdrawals;
};

export const fetchWithdrawalTrackingInfo = async ({ withdrawalId }) => {
  const withdrawalDocRef = doc(db, "withdrawals", withdrawalId);
  const withdrawalDoc = await getDoc(withdrawalDocRef);
  const { tusti, createdAt, withdrawalAddress, usdtAmount } =
    withdrawalDoc.data();

  return { tusti, createdAt, withdrawalAddress, usdtAmount };
};
export const createWithdrawalUnfunded = async (input) => {
  const { username, withdrawalAddressId, fiatAmount, fiatCurrency } = input;
  const depositPrices = await getDepositCurrenciesAndRates();
  // const withdrawValues = await getWithdrawCurrenciesAndRates();
  const usdtAmount = convertFiatToUsdt({
    depositPrices,
    fiatAmount: fiatAmount,
    fiatCurrency: fiatCurrency,
  });
  return createWithdrawal({ username, withdrawalAddressId, usdtAmount });
};

export const createWithdrawal = async (input) => {
  const { username, withdrawalAddressId, usdtAmount, isProd } = input;

  const { blockchain, cryptocurrency, address, nickname } =
    await lookupWithdrawalAddressById({ withdrawalAddressId });
  const withdrawalAddress = {
    address,
    blockchain,
    cryptocurrency,
  };

  const { fulfillmentParams } = await fetchCurrentCryptoTransactionParams({
    usdtAmount,
    isProd,
  });
  //when FULFILLMENT_OZIMIZ_ISTEMIZ=false, this above becomes obsolete (fetchCurrentCryptoTransactionParams should only retrun depositParams at that point

  const fulfillmentData = FULFILLMENT_OZIMIZ_ISTEMIZ
    ? fulfillmentParams
    : {
        withdrawalTransferRequired: true, //by definition
        address: withdrawalAddress.address,
        blockchain: withdrawalAddress.blockchain,
        cryptocurrency: withdrawalAddress.cryptocurrency,
      };

  const definition = {
    username,
    usdtAmount: usdtAmount, //how much should be debited from the virtual baalnce
    cryptocurrency: cryptocurrency,
    createdAt: new Date(),
    withdrawalAddress: {
      faux: { withdrawalAddressId },
      actual: fulfillmentData,
    },
    funded: false,
    transacted: false,
    tusti: false,
    ignoreBalance: true,
    testInputTriggered: isProd === false,
  };
  const withdrawalId = uuidv4();
  await setDoc(doc(db, "withdrawals", withdrawalId), definition);
  return { withdrawalId };
};
