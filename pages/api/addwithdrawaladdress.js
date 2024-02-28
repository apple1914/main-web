
import connectDB from '../../middleware/mongodb';
import WithdrawalAddress from '../../models/withdrawalAddress';

const handler = async (req, res)  => {
    try {
        const {address,blockchain,cryptocurrency,nickname,username} = req.body
        const definition = {address,blockchain,cryptocurrency,nickname,username}
        const newWA = new WithdrawalAddress(definition)
        const insertedResult = await newWA.save()
        const result = {withdrawalAddressId:insertedResult._id}
        
        console.log("SUCCESS!", result)
    
        return res.json(result)
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }

  export default connectDB(handler)