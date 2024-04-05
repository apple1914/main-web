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

export const getOnDutyCustomerSupportNumber = async () => {
  const q = query(
    collection(db, "customerSupportAgents"),
    where("isOnDuty", "==", true)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return "15555555555";
  }
  const results = querySnapshot.docs.map((doc) => {
    const { phoneNumber } = doc.data();
    return phoneNumber;
  });
  return results[0];
};
