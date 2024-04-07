import { fetchWithdrawalTrackingInfo } from "../../lib/withdrawals";

const handler = async (req, res) => {
  try {
    const { withdrawalId } = req.query;
    if (!withdrawalId || withdrawalId == "null") {
      return res.status(400).send();
    }
    const result = await fetchWithdrawalTrackingInfo({ withdrawalId });
    return res.status(200).send(result);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default handler;
