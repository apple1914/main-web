import { fetchWithdrawalAddresses } from "../../lib/withdrawalAddress";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    const username = req.query.username;
    const results = await fetchWithdrawalAddresses({ username });
    return res.status(200).send(results);
  } catch (err) {
    const errContext = req.query;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};

export default handler;
