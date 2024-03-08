import { createDeposit } from "../../lib/deposits";

const handler = async (req, res) => {
  // try {
  const { fiatAmount, fiatCurrency, username } = req.body;
  const withdrawal = req.body?.withdrawal;
  // { triggerWithdrawal, withdrawalAddressId }
  const triggerWithdrawal = withdrawal?.triggerWithdrawal || false;
  const withdrawalAddressId = withdrawal?.withdrawalAddressId || null;
  console.log("here at createDeposit api", {
    username,
    fiatAmount,
    fiatCurrency,
    withdrawal: { triggerWithdrawal, withdrawalAddressId },
  });

  const result = await createDeposit({
    username,
    fiatAmount,
    fiatCurrency,
    withdrawal: { triggerWithdrawal, withdrawalAddressId },
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
