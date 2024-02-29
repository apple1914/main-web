// import {saveUserInfo} from "../backend/requests"
import {saveUserInfo} from "../lib/users"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,signInWithPopup
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { app } from "./firebaseAuthenticationConfig";



const auth = getAuth(app);

const useAuthStore = create((set) => ({
  user: null,
  authInProgress: true,
  authSignIn: async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const username = res.user.uid
      toast.success("Success");
      return {success:true,username}
    } catch (err) {
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("User not found");
      } else if (err.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Wrong Password");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return {success:false,err};
    }
  },
  authSignOut: async () => {
    try {
      const res = await signOut(auth);
      toast.success("Successfully signed out");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  },
  authSignUp: async (email, password, miscInfo) => {
    try {
      Object.keys(miscInfo).forEach((key) => {
        if (!miscInfo[key] || miscInfo[key] === "") {
          delete miscInfo[key];
        }
      });
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const username = res.user.uid
      saveUserInfo({username,contactInfo:{email},miscInfo})

      toast.success("Вы успешно зарегистрировались!");
      return {success:true,username}
    } catch (err) {
      console.log(err);
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid email");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return {success:false,err};
    }
  },
  authSignInWithGmail: async (miscInfo) => {
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const username = res.user.uid
      const email = res.user.email
      Object.keys(miscInfo).forEach((key) => {
        if (!miscInfo[key] || miscInfo[key] === "") {
          delete miscInfo[key];
        }
      });
      saveUserInfo({username,contactInfo:{email},miscInfo})
      

      toast.success("Успешный вход!");
      return {success:true,username}
    } catch (err) {
      console.log(err);
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid email");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return  {success:false,err};
    }
  },
}));

auth.onAuthStateChanged((user) => {
  useAuthStore.setState({ user, authInProgress: false });
});

export default useAuthStore;
