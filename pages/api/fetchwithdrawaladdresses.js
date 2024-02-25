import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";



export default async function handler(req, res) {
    try {
        const {username} = req.query
        const client = await clientPromise;
        const db = client.db("serverless");
        const myWithdrawlAdresses = await db
            .collection("withdrawalAddress")
            .find({username})
            .limit(100)
            .toArray();
        const results = myWithdrawlAdresses.map((data)=> {
            return {
                withdrawalAddressId:data._id,
                nickname:data.nickname
            }
        })    
        return res.json(results)
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }