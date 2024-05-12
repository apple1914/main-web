import { lookupWithdrawalAddressById } from "../../lib/withdrawalAddress";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  try {
    const { withdrawalAddressId } = req.query;

    const result = await lookupWithdrawalAddressById({ withdrawalAddressId });
    return res.status(200).send(result);
  } catch (e) {
    H.consumeError(e);
    return res.status(500).send();
  }
};

export default withPageRouterHighlight(handler);
