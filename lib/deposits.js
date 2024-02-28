import {createOnramp} from "./onramps"
import Deposits from '../models/deposits';

const DEPOSIT_BLOCKCHAIN = "bsc";
const blockchainToDepositSettings = {
    bsc: {
      cryptocurrency: {
        cryptocurrency: "USDT",
        type: "token",
        contractAddress: "XYZ",
      },
      address: process.env.BSC_DISTRIBUTOR_ADDRESS_PUBLIC_KEY,
    },
  };

export const createDeposit = async (input) => {
    const {
        username,
        fiatAmount,
        fiatCurrency,
        triggerWithdrawal,
        withdrawalAddressId,
      } = input;
    
      const blockchain = DEPOSIT_BLOCKCHAIN;
      const depositCryptoSettings = blockchainToDepositSettings[DEPOSIT_BLOCKCHAIN];
      const address = depositCryptoSettings.address;    
      const cryptocurrency = depositCryptoSettings.cryptocurrency.cryptocurrency;
      const withdrawal =
        triggerWithdrawal === true
          ? { triggerWithdrawal, withdrawalAddressId }
          : { triggerWithdrawal: false };
    
      const definition = {
        username,
        fiatAmount,
        fiatCurrency,
        completed: false,
        address: address,
        blockchain: blockchain,
        withdrawal: withdrawal,
        cryptocurrency: cryptocurrency,
      };

    
      const newDeposit = new Deposits(definition);     
      await newDeposit.save()
      const depositId = newDeposit._id
    
      const { onrampPayload, onrampName } = createOnramp({
        depositId:depositId,
        fiatAmount,
        fiatCurrency,
        address,
        blockchain,
        cryptocurrency,
      });//no need for this to be async as it is basically just manipulating constants
      console.log("at the end of create deposit", {...onrampPayload,depositId })
    
      return { depositId, onrampName, onrampPayload };
}


