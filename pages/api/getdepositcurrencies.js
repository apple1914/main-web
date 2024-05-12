import { getWithdrawCurrencies } from "../../lib/currencies";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    const results = await getWithdrawCurrencies();
    return res.status(200).send(results);
  } catch (err) {
    const errContext = {};
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500);
  }
};

export default handler;
