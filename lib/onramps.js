const MERCURYO_WIDGET_ID = "123";
const {TRANSAK_API_KEY_PROD,TRANSAK_API_KEY_TEST} = require("../utils/serverConstants")
//for mercuryo you will need const cypherServices = require("./cypher"); for creating signature
export const createOnramp = (input) => {
    const {
      depositId,
      blockchain,
      address,
      cryptocurrency,
    } = input;
  
    const rawFiatCurrency = input.fiatCurrency
    const rawFiatAmount = input.fiatAmount
    const testInputTriggered = rawFiatAmount == 67 && rawFiatCurrency === 'SEK'
    const isProd = !testInputTriggered
    const fiatCurrency = isProd ? rawFiatCurrency : "USD"
    const fiatAmount = isProd ? rawFiatAmount : 6
    const onrampName = "transak"; //"advcash"
    const onrampPayload = createTransak({
      depositId,
      fiatAmount,
      fiatCurrency,
      cryptocurrency,
      blockchain,
      address,
      isProd 
    });
  
    return { onrampPayload, onrampName };
  };
  
  const createMercuryo =  (input) => {
    const {
      depositId,
      fiatAmount,
      fiatCurrency,
      cryptocurrency,
      blockchain,
      address,
    } = input;
    
  
    const signedAddress = cypherServices.sign({
      text: address,
      secret: "harrypotter",
    });
    const widgetId = MERCURYO_WIDGET_ID;
  
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
      address,isProd
    } = input;
  
    const environment = isProd ?  "PRODUCTION" : "STAGING"
  
    const apiKey = isProd === true ? TRANSAK_API_KEY_PROD : TRANSAK_API_KEY_TEST
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
  
    return transakSettings;
  };