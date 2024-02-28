import {binaryClosestIdx} from "../utils/algos"
import WithdrawValues from '../models/withdrawValues';
import DepositPrices from '../models/depositPrices';

export const convert = async ({fromCurrency,toCurrency,amount,discount}) => {

    console.log({fromCurrency,toCurrency,amount,discount})
    
       
        const fromCurrencyDoc = await DepositPrices.findOne({currency:fromCurrency})//
    
        const toCurrencyDoc = await WithdrawValues.findOne({currency:toCurrency})

        console.log("toCurrencyDoc fromCurrencyDoc are", {fromCurrencyDoc,toCurrencyDoc})


        if (!fromCurrencyDoc || !toCurrencyDoc) {
            return 0.0
        }


    
        const {prices,fiatAmountMinimum} = fromCurrencyDoc

        const multiplier = amount / fiatAmountMinimum;

        const parsedPrices = JSON.parse(JSON.stringify(prices))


        const levels = Object.keys(parsedPrices).map((priceLvlKey) => parseFloat(priceLvlKey));
        const closestLevel = levels[binaryClosestIdx(levels, multiplier)];

        const priceKey = closestLevel.toFixed(0).toString();

        const price = parsedPrices[priceKey];

        const {value} = toCurrencyDoc
        const TOTAL_FEE = 0.06 - Number(discount)

        const answer = Number(amount) * (1-TOTAL_FEE) * value / price
        console.log("answer is!", {fiatAmountMinimum,multiplier,levels,priceKey,prices,price,value,TOTAL_FEE,answer})
        return answer
}



export const getDepositCurrencies = async () => {

    const allDocs = await DepositPrices.find({})//

        return allDocs.map((doc)=>doc.currency)
}


export const getWithdrawCurrencies = async () => {

    const allDocs = await WithdrawValues.find({})//

        return allDocs.map((doc)=>doc.currency)
}