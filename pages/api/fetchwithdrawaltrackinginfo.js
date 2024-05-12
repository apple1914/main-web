import { fetchWithdrawalTrackingInfo } from "../../lib/withdrawals";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    const { withdrawalId } = req.query;
    if (!withdrawalId || withdrawalId == "null") {
      return res.status(400).send();
    }
    const result = await fetchWithdrawalTrackingInfo({ withdrawalId });
    return res.status(200).send(result);
  } catch (err) {
    const errContext = req.query;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};

export default handler;
