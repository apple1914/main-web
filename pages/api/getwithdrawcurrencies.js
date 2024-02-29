
import {getWithdrawCurrencies} from "../../lib/currencies"


const handler = async(req, res) => {
    try {
        
        const results = await getWithdrawCurrencies()
        return res.status(200).send(results)
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
  }

  export default handler