import connectDB from '../../middleware/mongodb';
import WithdrawalAddress from '../../models/withdrawalAddress';

const handler = async(req, res) => {
    try {
        const {username} = req.query
       
        const myWithdrawlAdresses = await WithdrawalAddress
            .find({username})
            
        const results = myWithdrawlAdresses.map((data)=> {
            return {
                withdrawalAddressId:data._id,
                nickname:data.nickname
            }
        })    
        return res.status(200).send(results)
    
        } catch (e) {
            console.error(e);
            return res.status(500).send()
        }
  }

  export default connectDB(handler)