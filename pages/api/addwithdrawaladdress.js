import {addWithdrawalAddress} from '../../lib/withdrawalAddress';

const handler = async (req, res)  => {
    try {
        const {address,blockchain,cryptocurrency,nickname,username} = req.body
        console.log("inputs into addwithdrawaladdress are", {address,blockchain,cryptocurrency,nickname,username})
        const withdrawalAddressId = await addWithdrawalAddress( {address,blockchain,cryptocurrency,nickname,username} )
    
        return res.status(200).send({withdrawalAddressId})
    
        } catch (e) {
            console.error(e);
            return res.status(500).send()
        }
  }

  export default handler