import connectDB from '../../middleware/mongodb';

import {convert} from "../../lib/currencies"



const handler = async(req, res) => {
    try {
        // const url = new URL(req.url)
        const {fromCurrency,toCurrency,amount,discount} = req.query
        // const fromCurrency = url.searchParams.get("fromCurrency")
        // const toCurrency = url.searchParams.get("toCurrency")
        // const amount = Number(url.searchParams.get("amount"))
        // const discount = url.searchParams.get("discount") || "0.00"
        if (!amount || !fromCurrency || !toCurrency) {
            throw new Error("wrong inputs")
        }
       
        const result = await convert({fromCurrency,toCurrency,amount,discount})
        // await myNew.save()
        return res.status(200).send(result)
        
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }

  export default connectDB(handler)