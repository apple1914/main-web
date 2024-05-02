import { createWithdrawalUnfunded } from "../../lib/withdrawals";

const handler = async (req, res) => {
  const { username, withdrawalAddressId, fiatAmount, fiatCurrency } = req.body;

  const testTriggered = req.body.isProd === false;
  const isProd = !testTriggered;

  const result = await createWithdrawalUnfunded({
    username,
    withdrawalAddressId,
    fiatAmount,
    fiatCurrency,
    isProd,
  });
  return res.status(200).send(result);
};

export default handler;
