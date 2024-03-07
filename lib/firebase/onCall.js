import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

export const createWithdrawal = async (payload) => {
  const createWdrwl = httpsCallable(functions, "createWithdrawal");
  const res = await createWdrwl(payload);
  return res.data;
};
