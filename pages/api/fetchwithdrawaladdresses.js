import {fetchWithdrawalAddresses} from '../../lib/withdrawalAddress';

const handler = async(req, res) => {
    try {
        const {username} = req.query
       
        const  results = await fetchWithdrawalAddresses({username})
        return res.status(200).send(results)
    
        } catch (e) {
            console.error(e);
            return res.status(500).send()
        }
  }

  export default handler