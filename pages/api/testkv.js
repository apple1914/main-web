import { kv } from "@vercel/kv";


const handler = async(req, res) => {
    try {
        const {key,collection} = req.query
        const results = await kv.get(collection+":"+key)
        return res.status(200).send(results)
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }

  export default connectDB(handler)