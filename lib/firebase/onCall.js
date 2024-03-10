import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

export const createWithdrawal = async (payload) => {
  console.log("here making onCall call createWithdrawal");
  const createWdrwl = httpsCallable(functions, "createWithdrawal");
  const res = await createWdrwl(payload);
  console.log("here making onCall call createWithdrawal, res is", res.data);

  return res.data;
};
