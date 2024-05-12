import { createWithdrawalUnfunded } from "../../lib/withdrawals";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  const { username, withdrawalAddressId, fiatAmount, fiatCurrency } = req.body;

  const testTriggered = req.body.isProd === false;
  const isProd = !testTriggered;

  try {
    const result = await createWithdrawalUnfunded({
      username,
      withdrawalAddressId,
      fiatAmount,
      fiatCurrency,
      isProd,
    });
    return res.status(200).send(result);
  } catch (err) {
    const errContext = req.body;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};

export default handler;
