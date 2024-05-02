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
import { convertFiatToUsdt } from "./clientServerUsable/convertWithoutDb";
import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "./currencies";

const blockchainToCryptoSettings = {
  //   bsc: {
  //     cryptocurrency: {
  //       cryptocurrency: "USDT",
  //       type: "token",
  //     },
  //     addressKey: "addressBep20",
  //     holdingAddress: process.env.BSC_INCOMING_ADDRESS_PUBLIC_KEY,
  //     usesHoldingAddress: true,
  //   },
  tron: {
    cryptocurrency: {
      token: "USDT",
      coin: "TRX",
    },
    addressKey: "addressTrc20",
    holdingAddress: null, //intentionally null to avoid accidentall errors - under current design this is not to be used
  },
  polygon: {
    cryptocurrency: {
      token: "USDT",
      coin: "MATIC",
    },
    addressKey: "addressMatic",
    holdingAddress: process.env.POLYGON_INCOMING_ADDRESS_PUBLIC_KEY,
  },
  ethereum: {
    cryptocurrency: {
      token: "USDT",
      coin: "ETH",
    },
    addressKey: "addressErc20",
    holdingAddress: process.env.ETHEREUM_INCOMING_ADDRESS_PUBLIC_KEY, //for test cases you still do need rthis
  },
};
export const fetchCurrentCryptoTransactionParamsFiats = async ({
  fiatCurrency,
  fiatAmount,
  isProd,
}) => {
  const depositPrices = await getDepositCurrenciesAndRates();
  const usdtAmount = convertFiatToUsdt({
    depositPrices: depositPrices,
    fiatAmount: fiatAmount,
    fiatCurrency: fiatCurrency,
  });
  return fetchCurrentCryptoTransactionParams({ usdtAmount, isProd });
};
//actually differentiate blockchainDeposit and blockchainWithdrawal
export const fetchCurrentCryptoTransactionParams = async ({
  usdtAmount,
  isProd,
}) => {
  const senderAddressHasEnoughToSend = await holdingAddressEnoughToSend();
  const useHoldingAddress = senderAddressHasEnoughToSend && usdtAmount < 75;
  const blockchainForProd = useHoldingAddress ? "tron" : "polygon";
  const blockchainForTest = "ethereum";
  const blockchain = isProd ? blockchainForProd : blockchainForTest;
  let blockchainDeposit;
  let blockchainFulfillment;
  switch (true) {
    case isProd === false && useHoldingAddress === true:
      blockchainDeposit = "ethereum";
      blockchainFulfillment = "polygon";
      break;
    case isProd === false && useHoldingAddress === false:
      blockchainDeposit = "ethereum";
      blockchainFulfillment = "ethereum";
      break;
    case isProd === true && useHoldingAddress === true:
      blockchainDeposit = "polygon";
      blockchainFulfillment = "polygon";
      break;
    case isProd === true && useHoldingAddress === false:
      blockchainDeposit = "tron";
      blockchainFulfillment = "tron";
      break;
    default:
      blockchainDeposit = "tron";
      blockchainFulfillment = "tron";
  }
  const depositCryptoSettings = blockchainToCryptoSettings[blockchainDeposit];
  const fulfillmentCryptoSettings =
    blockchainToCryptoSettings[blockchainFulfillment];

  const addressKeyFulfillment = fulfillmentCryptoSettings.addressKey;

  const globalDutySettingsDocRef = doc(
    db,
    "globalDutySettings",
    "globalDutySettings"
  ); //second globalDutySettings is index
  const globalDutySettingsDoc = await getDoc(globalDutySettingsDocRef);
  const dutySettingsData = globalDutySettingsDoc.data();
  const addressFulfillment = dutySettingsData[addressKeyFulfillment]; //where it must end up in the end

  const depositTargetAddress = useHoldingAddress
    ? depositCryptoSettings.holdingAddress
    : addressFulfillment;
  //effectively, if useHoldingAddress, then depositCryptoSettings (which inits mercuryo) sghould also tell me where to temporarily park that money. if false, then just give me the fulfillmentDestination
  if (!depositTargetAddress) {
    const errorLog = {
      addressFulfillment,
      holdingAddress: depositCryptoSettings.holdingAddress,
      useHoldingAddress,
    };
    throw new Error(
      "this shouldn't happen fetchCurrentCryptoTransactionParams" +
        JSON.stringify(errorLog)
    );
  }

  const cryptocurrencyDeposit = depositCryptoSettings.cryptocurrency.token; //assume they always buy the token

  const depositParams = {
    address: depositTargetAddress,
    blockchain: blockchainDeposit,
    cryptocurrency: cryptocurrencyDeposit,
  };

  const fulfillmentParams = useHoldingAddress
    ? {
        withdrawalTransferRequired: true,
        address: addressFulfillment,
        blockchain: blockchainFulfillment, //makes sense because must match adressWithdrawal
        cryptocurrency: fulfillmentCryptoSettings.cryptocurrency.coin, //assume we always fulfill in coin
      }
    : {
        withdrawalTransferRequired: false,
      }; //i.e. if useHoldingAddress false, then no fulfillment will take place

  return { depositParams, fulfillmentParams };
};

export const holdingAddressEnoughToSend = async () => {
  const globalHoldingAddressSettingsDocRef = doc(
    db,
    "globalHoldingAddressSettings",
    "globalHoldingAddressSettings"
  ); //second globalDutySettings is index
  const globalHoldingAddressSettingsDoc = await getDoc(
    globalHoldingAddressSettingsDocRef
  );
  const holdingAddressSettingsData = globalHoldingAddressSettingsDoc.data();
  const { hasEnoughToSend } = holdingAddressSettingsData;
  return hasEnoughToSend === true;
};
