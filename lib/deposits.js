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
import { v4 as uuidv4 } from "uuid";
const BLOCKED = [
  "jNF1PoCD9WPhUH0UmX1FZe7JBn53",
  "OHMPOHLHYAQXQiBkrTm9IOxiQxd2",
];
export const createDeposit = async (input) => {
  const { username, fiatAmount, fiatCurrency, withdrawal } = input;
  if (BLOCKED.includes(username)) {
    throw new Error("error! idk what happened");
    return;
  }
  console.log("here at createDeposit lib");
  const depositId = uuidv4();

  const { onrampPayload, onrampName, cryptoPayload } = createOnramp({
    depositId: depositId,
    fiatAmount,
    fiatCurrency,
  }); //no need for this to be async as it is basically just manipulating constants

  const { blockchain, address, cryptocurrency } = cryptoPayload;

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
    depositId,
    onrampName,
  };

  await setDoc(doc(db, "deposits", depositId), definition);

  console.log("at the end of create deposit", { ...onrampPayload, depositId });

  return { depositId, onrampName, onrampPayload };
};
