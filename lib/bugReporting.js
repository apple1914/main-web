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

export const saveError = async ({ error, errContext, requestUrl }) => {
  const links = ["none"];
  if (!!requestUrl) {
    links.push(requestUrl);
  }
  const definition = {
    createdAt: new Date(),
    textPayload: error.toString(),
    links: links,
    username: errContext?.username || "none",
    errorDescription: JSON.stringify(errContext) || "none",
  };
  await addDoc(collection(db, "frontendBugs"), definition);
  return;
};
