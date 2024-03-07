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


export const saveCustomEvent = async ({username,eventName}) => {
    
    await addDoc(collection(db, "userEvents"), {username,eventName,createdAt:new Date()});

    return
}


// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   }); for cases when you want auto id