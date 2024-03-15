// import {saveUserInfo} from "../backend/requests"
import { saveUserInfo } from "../lib/users";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { auth } from "../lib/firebase/firebase";
import { getBalance } from "../lib/balances";
import { fetchWithdrawalAddresses } from "../lib/withdrawalAddress";
import { getWithdrawals } from "../lib/withdrawals";

const useAuthStore = create((set) => ({
  user: null,
  authInProgress: true,
  authSignIn: async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const username = res.user.uid;
      toast.success("Success");
      return { success: true, username, user: res.uid };
    } catch (err) {
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("User not found");
      } else if (err.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Wrong Password");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return { success: false, err };
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
      const username = res.user.uid;
      saveUserInfo({ username, contactInfo: { email }, miscInfo });

      toast.success("Вы успешно зарегистрировались!");
      return { success: true, username, user: res.user };
    } catch (err) {
      console.log(err);
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid email");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return { success: false, err };
    }
  },
  authSignInWithGmail: async (miscInfo) => {
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      const username = res.user.uid;
      const email = res.user.email;
      Object.keys(miscInfo).forEach((key) => {
        if (!miscInfo[key] || miscInfo[key] === "") {
          delete miscInfo[key];
        }
      });
      saveUserInfo({ username, contactInfo: { email }, miscInfo });

      toast.success("Успешный вход!");
      return { success: true, username, user: res.user };
    } catch (err) {
      console.log(err);
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid email");
      } else {
        toast.error("Something went wrong, please try again later");
      }
      return { success: false, err };
    }
  },
  getBalance: async () => {
    try {
      if (auth.currentUser === null) {
        return null;
      }
      const username = auth.currentUser.uid;
      const value = await getBalance({ username });
      return value;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getWithdrawals: async () => {
    try {
      if (auth.currentUser === null) {
        return null;
      }
      const username = auth.currentUser.uid;
      const results = await getWithdrawals({ username });
      return results;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  fetchWithdrawalAddresses: async () => {
    try {
      if (auth.currentUser === null) {
        return null;
      }
      const username = auth.currentUser.uid;
      const results = await fetchWithdrawalAddresses({ username });
      return results;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
}));

auth.onAuthStateChanged((user) => {
  useAuthStore.setState({ user, authInProgress: false });
});

export default useAuthStore;
