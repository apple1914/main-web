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
  const { tusti, createdAt } = withdrawalDoc.data();
  return { tusti, createdAt };
};
