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
