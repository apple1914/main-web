import { getWithdrawCurrencies } from "../../lib/currencies";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  try {
    const results = await getWithdrawCurrencies();
    return res.status(200).send(results);
  } catch (e) {
    H.consumeError(e);
    return res.status(500);
  }
};

export default withPageRouterHighlight(handler);
