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

const DEPOSIT_BLOCKCHAIN = "bsc";
const blockchainToDepositSettings = {
  bsc: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    address: process.env.BSC_DISTRIBUTOR_ADDRESS_PUBLIC_KEY,
  },
};

export const createDeposit = async (input) => {
  const { username, fiatAmount, fiatCurrency, withdrawal } = input;
  console.log("here at createDeposit lib");

  const blockchain = DEPOSIT_BLOCKCHAIN;
  const depositCryptoSettings = blockchainToDepositSettings[DEPOSIT_BLOCKCHAIN];
  const address = depositCryptoSettings.address;
  const cryptocurrency = depositCryptoSettings.cryptocurrency.cryptocurrency;

  const definition = {
    username,
    fiatAmount,
    fiatCurrency,
    completed: false,
    address: address,
    blockchain: blockchain,
    withdrawal: withdrawal,
    cryptocurrency: cryptocurrency,
    createdAt: new Date(),
  };

  const docRef = await addDoc(collection(db, "deposits"), definition);
  const depositId = docRef.id;

  const { onrampPayload, onrampName } = createOnramp({
    depositId: depositId,
    fiatAmount,
    fiatCurrency,
    address,
    blockchain,
    cryptocurrency,
  }); //no need for this to be async as it is basically just manipulating constants
  console.log("at the end of create deposit", { ...onrampPayload, depositId });

  return { depositId, onrampName, onrampPayload };
};
