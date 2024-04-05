import { fetchWithdrawalTrackingInfo } from "../../lib/withdrawals";

const handler = async (req, res) => {
  try {
    const result = await fetchWithdrawalTrackingInfo();
    return res.status(200).send(result);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default handler;
