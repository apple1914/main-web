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
import depositMinimumsMap from "../utils/depositMinimums.json";
import { amOrPmSchedNow } from "../utils/rotation";
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
const blockchainToDepositSettings = {
  bsc: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    addressKey: "addressBep20",
  },
  tron: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    addressKey: "addressTrc20",
  },
  polygon: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    addressKey: "addressMatic",
  },
  ethereum: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    addressKey: "addressErc20",
  },
};

export const createOnramp = async (input) => {
  const depositId = input.depositId;
  const fiatCurrency = input.fiatCurrency;
  const rawFiatAmount = input.fiatAmount;

  const testInputTriggered = rawFiatAmount == 1517;
  const isProd = !testInputTriggered;
  const fiatAmount = isProd ? rawFiatAmount : 40;
  const onrampName = "mercuryo";
  // const environment = isProd ? "production" : "staging";

  const fiatAmountMin = depositMinimumsMap[fiatCurrency] || 30;
  const multiplierOverMin = fiatAmount / fiatAmountMin;
  const isLargerAmount = multiplierOverMin > 3.5;

  //HARDCODE TRON - WE DONT HAVE EXTRA RN
  const blockchainForProd = "tron"; //isLargerAmount ? "tron" : "polygon";

  const blockchainForTest = "ethereum";

  const blockchain = isProd ? blockchainForProd : blockchainForTest;

  const depositCryptoSettings = blockchainToDepositSettings[blockchain];

  //hardcode for PM like a always here
  const addressKey = depositCryptoSettings.addressKey;

  const globalDutySettingsDocRef = doc(
    db,
    "globalDutySettings",
    "globalDutySettings"
  ); //second globalDutySettings is index
  const globalDutySettingsDoc = await getDoc(globalDutySettingsDocRef);
  const dutySettingsData = globalDutySettingsDoc.data();
  const address = dutySettingsData[addressKey];

  const cryptocurrency = depositCryptoSettings.cryptocurrency.cryptocurrency;
  const cryptoPayload = { blockchain, address, cryptocurrency };

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
