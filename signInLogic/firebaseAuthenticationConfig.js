import { signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut as signout } from "firebase/auth";

import  {auth} from "../lib/firebase/firebase"

// export const app = initializeApp(fbConfigFile);
// console.log("here")
// export const auth = getAuth(app);
export async function signIn({ email, password }) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
export async function signOut() {
  let result = null,
    error = null;

  try {
    result = await signout(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
export async function signUp({ email, password }) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}


