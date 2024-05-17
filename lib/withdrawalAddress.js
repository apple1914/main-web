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

export const addWithdrawalAddress = async ({
  address,
  blockchain,
  cryptocurrency,
  nickname,
  username,
}) => {
  const definition = {
    address,
    blockchain,
    cryptocurrency,
    nickname,
    username,
    createdAt: new Date(),
  };
  // console.log("here inside lib addWithdrawalAddress, definition:", definition)
  const docRef = await addDoc(
    collection(db, "withdrawalAddresses"),
    definition
  );
  // console.log("here inside lib addWithdrawalAddress, docRef result:", {docId:docRef.id})

  return docRef.id;
};

export const fetchWithdrawalAddresses = async ({ username }) => {
  const q = query(
    collection(db, "withdrawalAddresses"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(q);
  const results = querySnapshot.docs.map((doc) => {
    const { nickname, createdAt } = doc.data();
    const withdrawalAddressId = doc.id;
    return { withdrawalAddressId, nickname, createdAt };
  });
  return results;
};

export const lookupWithdrawalAddressById = async ({ withdrawalAddressId }) => {
  const withdrawalAddresDocRef = doc(
    db,
    "withdrawalAddresses",
    withdrawalAddressId
  );
  const withdrawalAddresDoc = await getDoc(withdrawalAddresDocRef);
  const withdrawalAddresObj = withdrawalAddresDoc.data();
  return { ...withdrawalAddresObj, withdrawalAddressId };
};
