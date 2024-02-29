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


export const saveUserInfo = async ({username,contactInfo,miscInfo}) => {
    const {email} = contactInfo
    const definition = {username,email}
    for (const [key, value] of Object.entries(miscInfo)) {
        if (!!value) {
            definition[key] = value
        }
    }
    await setDoc(doc(db, "users", username), definition);
    return
}


// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   }); for cases when you want auto id