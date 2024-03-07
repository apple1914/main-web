
import {createDeposit} from "../../lib/deposits"


const handler = async(req, res) => {
    // try {      
        const { fiatAmount, fiatCurrency,username } = req.body;
        const { triggerWithdrawal, withdrawalAddressId } = req.body?.withdrawal;
        console.log("here at /api/createdeposit")

    
       
      
        const result = await createDeposit({
          username,
          fiatAmount,
          fiatCurrency,
          withdrawal:{triggerWithdrawal, withdrawalAddressId }
        });
        console.log("result", result)

        return res.status(200).send(result);
    
        // return res.json(result)
    
        // } catch (e) {
        //     console.error("errror with createdposit api",e);
        //     return res.status(500)
        // }
  }

  export default handler