const {
  TRANSAK_API_KEY_PROD,
  TRANSAK_API_KEY_TEST,
  MERCURYO_WIDGET_ID_TEST,
  MERCURYO_SECRET_TEST,
  MERCURYO_WIDGET_ID_PROD,
  MERCURYO_SECRET_PROD,
} = require("../utils/serverConstants");
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
import { sign } from "./cypher";
import { fetchCurrentCryptoTransactionParams } from "./cryptoSettings";

//for mercuryo you will need const cypherServices = require("./cypher"); for creating signature
const blockchainTransakConventionMapper = {
  bsc: "BSC",
};

const DEPOSIT_BLOCKCHAIN_FROM_ONRAMP = {
  transak: {
    production: "bsc",
    staging: "bsc",
  },
  mercuryo: {
    production: "polygon",
    staging: "ethereum",
  },
};

export const createOnramp = async (input) => {
  const depositId = input.depositId;
  const fiatCurrency = input.fiatCurrency;
  const isProd = input.isProd;

  const fiatAmount = isProd ? input.fiatAmount : 40;
  const onrampName = "mercuryo";

  //

  const { depositParams } = await fetchCurrentCryptoTransactionParams({
    fiatAmount,
    fiatCurrency,
    isProd,
  });
  const { address, blockchain, cryptocurrency } = depositParams;

  const cryptoPayload = { address, blockchain, cryptocurrency };

  const onrampPayload = createMercuryo({
    depositId,
    fiatAmount,
    fiatCurrency,
    cryptocurrency,
    blockchain,
    address,
    isProd,
  });

  return { onrampPayload, onrampName, cryptoPayload };
};

const createMercuryo = (input) => {
  const {
    depositId,
    fiatAmount,
    fiatCurrency,
    cryptocurrency,
    blockchain,
    address,
    isProd,
  } = input;
  const MERCURYO_SECRET = isProd ? MERCURYO_SECRET_PROD : MERCURYO_SECRET_TEST;
  const MERCURYO_WIDGET_ID = isProd
    ? MERCURYO_WIDGET_ID_PROD
    : MERCURYO_WIDGET_ID_TEST;

  const signature = sign({
    text: address,
    secret: MERCURYO_SECRET,
  });
  const widgetId = MERCURYO_WIDGET_ID;

  const mercuryoPayload = {
    depositId: depositId,
    currency: cryptocurrency,
    network: blockchain.toUpperCase(),
    fiatCurrency: fiatCurrency,
    fiatAmount: fiatAmount,
    address: address,
    signature: signature,
    widgetId: widgetId,
    isProd: isProd,
  }; //cuz we just feed this object straight into the widget, best to stick to theri notation here

  return mercuryoPayload;
};

const createTransak = (input) => {
  const {
    depositId,
    fiatAmount,
    fiatCurrency,
    cryptocurrency,
    blockchain,
    address,
    isProd,
  } = input;

  const environment = isProd ? "PRODUCTION" : "STAGING";

  const apiKey = isProd === true ? TRANSAK_API_KEY_PROD : TRANSAK_API_KEY_TEST;
  console.log(
    "transak blockchain is",
    blockchain,
    blockchainTransakConventionMapper[blockchain]
  );

  const transakSettings = {
    apiKey: apiKey, // Your API Key
    environment: environment, // STAGING/PRODUCTION
    // themeColor: "000000", // App theme color
    // hostURL: window.location.origin,
    // widgetHeight: "700px",
    // widgetWidth: "500px",
    fiatAmount: Number(fiatAmount),
    fiatCurrency: fiatCurrency,
    cryptoCurrencyCode: cryptocurrency,
    network: blockchainTransakConventionMapper[blockchain],
    walletAddress: address,
    // hideExchangeScreen: true,
    // disableWalletAddressForm: true,
    partnerOrderId: depositId,
  };
  console.log("returning following settings for transak", transakSettings);

  return transakSettings;
};
