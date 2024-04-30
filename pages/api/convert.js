import {
  getDepositCurrenciesAndRates,
  getWithdrawCurrenciesAndRates,
} from "../../lib/currencies";

import { convert } from "../../lib/clientServerUsable/convertWithoutDb";
const handler = async (req, res) => {
  try {
    // const url = new URL(req.url)
    const { depositCurrency, withdrawalCurrency, depositAmount, discount } =
      req.query;
    const depositPrices = await getDepositCurrenciesAndRates();
    const withdrawValues = await getWithdrawCurrenciesAndRates();

    const result = convert({
      myDepositAmount: depositAmount,
      myWithdrawalCurrency: withdrawalCurrency,
      myDepositCurrency: depositCurrency,
      discount,
      depositPrices,
      withdrawValues,
    });
    // await myNew.save()
    return res.status(200).send(result);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default handler;
