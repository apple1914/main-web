
import {addWithdrawalAddress} from '../../lib/withdrawalAddress';

const handler = async (req, res)  => {
    try {
        const {address,blockchain,cryptocurrency,nickname,username} = req.body
        const withdrawalAddressId = await addWithdrawalAddress( {address,blockchain,cryptocurrency,nickname,username} )
    
        return res.json({withdrawalAddressId})
    
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }

  export default handler