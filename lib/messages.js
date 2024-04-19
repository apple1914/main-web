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

export const fetchMessages = async ({ roomId }) => {
  const q = query(
    collection(db, "messages"),
    where("roomId", "==", roomId),
    orderBy("createdAt", "desc"),
    limit(20)
  );

  const querySnapshot = await getDocs(q);
  const results = querySnapshot.docs.map((doc) => {
    const { body, role } = doc.data();
    return { body, role };
  });
  return results;
};
