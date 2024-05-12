import { lookupWithdrawalAddressById } from "../../lib/withdrawalAddress";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    const { withdrawalAddressId } = req.query;

    const result = await lookupWithdrawalAddressById({ withdrawalAddressId });
    return res.status(200).send(result);
  } catch (err) {
    const errContext = req.query;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};

export default handler;
