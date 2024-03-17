import { lookupWithdrawalAddressById } from "../../lib/withdrawalAddress";

const handler = async (req, res) => {
  try {
    const { withdrawalAddressId } = req.query;

    const result = await lookupWithdrawalAddressById({ withdrawalAddressId });
    return res.status(200).send(result);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
};

export default handler;
