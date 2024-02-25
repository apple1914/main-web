import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";



export default async function handler(req, res) {
    try {
        // const url = new URL(req.url)
        const {address,blockchain,cryptocurrency,nickname,username} = req.body
       
        const client = await clientPromise;
        const db = client.db("serverless");
        const definition = {address,blockchain,cryptocurrency,nickname,username}
        const collection = db.collection("withdrawalAddress")
        const insertResult = await collection.insertOne(definition);
        // const newDoc = new WithdrawlAdress(definition)
        // await newDoc.save()
        // const result = {withdrawalAddressId:newDoc._id}
        console.log("insertResult",insertResult)
        const result = {withdrawalAddressId:insertResult.insertedId.toString()}
        
        console.log("SUCCESS!", result)
    
        return res.json(result)
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }