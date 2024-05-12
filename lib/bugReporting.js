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

export const saveError = async (error) => {
  console.log(error);
  //   const { email, number, text, username } = payload;
  //   const myError = {
  //     email,
  //     number,
  //     text,
  //     createdAt: new Date(),
  //     agent: "zh",
  //     finished: false,
  //   };
  //   if (!!username) {
  //     myError["username"] = username;
  //   }
  //   await addDoc(collection(db, "frontendBugs"), myError);
  return;
};
