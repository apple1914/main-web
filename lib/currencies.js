import { binaryClosestIdx } from "../utils/algos";
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

export const convert = async ({
  fromCurrency,
  toCurrency,
  amount,
  discount,
}) => {
  const depositPriceDocRef = doc(db, "depositPrices", fromCurrency);
  const withdrawValueDocRef = doc(db, "withdrawValues", toCurrency);
  const depositPriceDoc = await getDoc(depositPriceDocRef);
  const withdrawValueDoc = await getDoc(withdrawValueDocRef);

  if (!depositPriceDoc.data() || !withdrawValueDoc.data()) {
    return 0.0;
  }

  const { prices, fiatAmountMinimum } = depositPriceDoc.data();

  const multiplier = amount / fiatAmountMinimum;

  const parsedPrices = JSON.parse(JSON.stringify(prices));

  const levels = Object.keys(parsedPrices).map((priceLvlKey) =>
    parseFloat(priceLvlKey)
  );
  const closestLevel = levels[binaryClosestIdx(levels, multiplier)];

  const priceKey = closestLevel.toFixed(0).toString();

  const price = parsedPrices[priceKey];

  const { value } = withdrawValueDoc.data();
  const TOTAL_FEE = 0.06 - Number(discount);

  const answer = (Number(amount) * (1 - TOTAL_FEE) * value) / price;
  return answer;
};

export const getDepositCurrencies = async () => {
  const q = query(collection(db, "depositPrices"));

  const querySnapshot = await getDocs(q);
  const currencies = querySnapshot.docs.map((doc) => {
    return doc.id;
  });
  return currencies;
};

export const getWithdrawCurrencies = async () => {
  const q = query(collection(db, "withdrawValues"));

  const querySnapshot = await getDocs(q);
  const currencies = querySnapshot.docs.map((doc) => {
    return doc.id;
  });
  return currencies;
};

export const getDepositCurrenciesAndRates = async () => {
  const q = query(collection(db, "depositPrices"));

  const querySnapshot = await getDocs(q);
  const results = querySnapshot.docs.map((doc) => {
    const currency = doc.id;
    const { fiatAmountMinimum, prices } = doc.data();
    return { currency, fiatAmountMinimum, prices };
  });
  return results;
};

export const getWithdrawCurrenciesAndRates = async () => {
  const q = query(collection(db, "withdrawValues"));

  const querySnapshot = await getDocs(q);
  const results = querySnapshot.docs.map((doc) => {
    const currency = doc.id;
    const { value } = doc.data();
    return { currency, value };
  });
  return results;
};
