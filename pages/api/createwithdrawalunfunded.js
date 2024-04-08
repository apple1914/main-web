import { createWithdrawalUnfunded } from "../../lib/withdrawals";

const handler = async (req, res) => {
  const { username, withdrawalAddressId, fiatAmount, fiatCurrency } = req.body;
  const result = await createWithdrawalUnfunded({
    username,
    withdrawalAddressId,
    fiatAmount,
    fiatCurrency,
  });
  return res.status(200).send(result);
};

export default handler;
