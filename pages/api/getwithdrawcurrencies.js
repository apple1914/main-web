import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";




export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("serverless");
        const objects = await db
            .collection("withdrawValues")
            .find({})
            .limit(100)
            .toArray();
        const results = objects.map((obj)=>obj.currency)
        return res.json(results)
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }