import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";
import {binaryClosestIdx} from "../../utils/algos"



export default async function handler(req, res) {
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
    
        const client = await clientPromise;
        const db = client.db("serverless");
        const fromCurrencyDoc = await db
            .collection("depositPrices")
            .findOne({currency:fromCurrency})
    
        const toCurrencyDoc = await db
            .collection("withdrawValues")
            .findOne({currency:toCurrency})

        if (!fromCurrencyDoc || !toCurrencyDoc) {
            return res.json(0.0)
        }
    
        const {prices,fiatAmountMinimum} = fromCurrencyDoc

        const multiplier = amount / fiatAmountMinimum;

        const levels = Object.keys(prices).map((string_) => parseFloat(string_));
        const closestLevel = levels[binaryClosestIdx(levels, multiplier)];

        const priceKey = closestLevel.toFixed(0).toString();

        const price = prices[priceKey];

        const {value} = toCurrencyDoc

        const answer = Number(amount) * (1-0.06 + Number(discount)) * value / price
        return res.json(answer)
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }