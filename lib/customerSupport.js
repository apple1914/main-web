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
  const globalDutySettingsDocRef = doc(
    db,
    "globalDutySettings",
    "globalDutySettings"
  ); //second globalDutySettings is index
  const globalDutySettingsDoc = await getDoc(globalDutySettingsDocRef);
  const { nickname } = globalDutySettingsDoc.data();
  const q = query(
    collection(db, "customerSupportAgents"),
    where("nickname", "==", nickname)
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

export const submitCustomerSupportTicket = async (payload) => {
  const { email, number, text, username } = payload;
  const myTicket = {
    email,
    number,
    text,
    createdAt: new Date(),
  };
  if (!!username) {
    myTicket["username"] = username;
  }
  await addDoc(collection(db, "customerSupportTickets"), myTicket);
  return;
};
