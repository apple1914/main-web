import { fetchWithdrawalAddresses } from "../../lib/customerSupport";

const handler = async (req, res) => {
  try {
    const username = req.query.username;
    const results = await fetchWithdrawalAddresses({ username });
    return res.status(200).send(results);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default handler;
