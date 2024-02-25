import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";



export default async function handler(req, res) {
    try {
        // const url = new URL(req.url)
        const {firstName,lastName,address1,city,state,zip,country,username} = req.body
       
        const client = await clientPromise;
        const db = client.db("serverless");
        const definition = {firstName,lastName,address1,city,state,zip,country,username}
        const TransakUserData = db.collection("transakUserData")
        const newDoc = new TransakUserData(definition)
        await newDoc.save()
    
        return res.status(200)
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }