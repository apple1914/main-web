import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {fbConfigFile} from "./firebaseCredentials"
import { getFirestore } from "firebase/firestore";

export const app = initializeApp(fbConfigFile);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(firebaseApp); this is for file uploads only