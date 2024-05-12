import { getWithdrawals } from "../../lib/withdrawals";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  try {
    const username = req.query.username;
    if (!username) return res.status(400).send();
    const results = await getWithdrawals({ username });
    return res.status(200).send(results);
  } catch (e) {
    H.consumeError(e, req.query);
    return res.status(500).send();
  }
};

export default withPageRouterHighlight(handler);
