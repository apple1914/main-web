import { fetchWithdrawalTrackingInfo } from "../../lib/withdrawals";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  try {
    const { withdrawalId } = req.query;
    if (!withdrawalId || withdrawalId == "null") {
      return res.status(400).send();
    }
    const result = await fetchWithdrawalTrackingInfo({ withdrawalId });
    return res.status(200).send(result);
  } catch (e) {
    H.consumeError(e, req.query);
    return res.status(500).send();
  }
};

export default withPageRouterHighlight(handler);
