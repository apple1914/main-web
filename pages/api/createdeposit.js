import { createDeposit } from "../../lib/deposits";

const handler = async (req, res) => {
  // try {
  const { fiatAmount, fiatCurrency, username } = req.body;
  const withdrawal = req.body.withdrawal;

  // { triggerWithdrawal, withdrawalAddressId }
  const triggerWithdrawal = withdrawal?.triggerWithdrawal || false;
  const withdrawalId = withdrawal?.withdrawalId || null;

  const testTriggered = req.body.isProd === false;
  const isProd = !testTriggered;

  const result = await createDeposit({
    username,
    fiatAmount,
    fiatCurrency,
    withdrawal: { triggerWithdrawal, withdrawalId },
    isProd,
  });
  console.log("result", result);

  return res.status(200).send(result);

  // return res.json(result)

  // } catch (e) {
  //     console.error("errror with createdposit api",e);
  //     return res.status(500)
  // }
};

export default handler;
