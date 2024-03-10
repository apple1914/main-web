const MERCURYO_WIDGET_ID = "123";
const {
  TRANSAK_API_KEY_PROD,
  TRANSAK_API_KEY_TEST,
} = require("../utils/serverConstants");
//for mercuryo you will need const cypherServices = require("./cypher"); for creating signature
const blockchainTransakConventionMapper = {
  bsc: "BSC",
};

const DEPOSIT_BLOCKCHAIN_FROM_ONRAMP = { transak: "bsc", mercuryo: "polygon" };
const blockchainToDepositSettings = {
  bsc: {
    cryptocurrency: {
      cryptocurrency: "USDT",
      type: "token",
      contractAddress: "XYZ",
    },
    address: process.env.BSC_INCOMING_ADDRESS_PUBLIC_KEY,
  },
  polygon: {
    cryptocurrency: {
      cryptocurrency: "USDC",
      type: "token",
      contractAddress: "XYZ",
    },
    address: process.env.POLYGON_INCOMING_ADDRESS_PUBLIC_KEY,
  },
};

export const createOnramp = (input) => {
  const { depositId } = input;

  const rawFiatCurrency = input.fiatCurrency;
  const rawFiatAmount = input.fiatAmount;
  const testInputTriggered = rawFiatAmount == 1517;
  const isProd = !testInputTriggered;
  const fiatCurrency = isProd ? rawFiatCurrency : "USD";
  const fiatAmount = isProd ? rawFiatAmount : 6;
  const onrampName = rawFiatAmount > 30 ? "transak" : "mercuryo";

  const blockchain = DEPOSIT_BLOCKCHAIN_FROM_ONRAMP[onrampName];
  const depositCryptoSettings = blockchainToDepositSettings[DEPOSIT_BLOCKCHAIN];
  const address = depositCryptoSettings.address;
  const cryptocurrency = depositCryptoSettings.cryptocurrency.cryptocurrency;
  const cryptoPayload = { blockchain, address, cryptocurrency };

  const onrampPayload =
    onrampName === "mercuryo"
      ? createMercuryo({
          depositId,
          fiatAmount,
          fiatCurrency,
          cryptocurrency,
          blockchain,
          address,
          isProd,
        })
      : createTransak({
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
  const { depositId, fiatAmount, fiatCurrency, isProd } = input;

  const signedAddress = cypherServices.sign({
    text: address,
    secret: process.env.MERCURYO_SECRET,
  });
  const widgetId = process.env.MERCURYO_WIDGET_ID;

  const mercuryoPayload = {
    depositId: depositId,
    currency: cryptocurrency,
    network: blockchain,
    fiatCurrency: fiatCurrency,
    fiatAmount: fiatAmount,
    address: address,
    signedAddress: signedAddress,
    widgetId: widgetId,
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
