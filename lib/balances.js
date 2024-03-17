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

export const getBalance = async ({ username }) => {
  const virtualBalanceDocRef = doc(db, "virtualBalances", username);
  const depositPriceDoc = await getDoc(virtualBalanceDocRef);
  const { value } = depositPriceDoc.data();

  return value;
};
