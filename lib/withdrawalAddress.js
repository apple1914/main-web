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
    where,orderBy,startAfter,
  } from "firebase/firestore";




export const addWithdrawalAddress = async ({address,blockchain,cryptocurrency,nickname,username}) => {
    const definition = {address,blockchain,cryptocurrency,nickname,username}
    // console.log("here inside lib addWithdrawalAddress, definition:", definition)
    const docRef = await addDoc(collection(db, "withdrawalAddresses"), definition);
    // console.log("here inside lib addWithdrawalAddress, docRef result:", {docId:docRef.id})

    return docRef.id
}

export const fetchWithdrawalAddresses = async ({username}) => {

    const q = query(collection(db, "depositPrices"),where("username","==",username));

    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => {
        const {nickname} = doc.data()
        const withdrawalAddressId = doc.id
        return {withdrawalAddressId,nickname}
    });
    return results
}