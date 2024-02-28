import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb";
import createDeposit from "../../lib/deposits"


export default async function handler(req, res) {
    // try {      
        const { fiatAmount, fiatCurrency,username } = req.body;
        const { triggerWithdrawal, withdrawalAddressId } = req.body?.withdrawal;
        console.log("here at /api/createdeposit")
      
        // if (triggerWithdrawal === true) {
        //   if (!withdrawalAddressId) {
            
        //     return res.status(400);
        //   }
        // }
      
        const result = await createDeposit({
          username,
          fiatAmount,
          fiatCurrency,
          triggerWithdrawal,
          withdrawalAddressId,
        });
        console.log("result", result)

        return res.json(result);
    
        // return res.json(result)
    
        // } catch (e) {
        //     console.error("errror with createdposit api",e);
        //     return res.status(500)
        // }
  }