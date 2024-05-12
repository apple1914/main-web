import { createWithdrawalUnfunded } from "../../lib/withdrawals";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  const { username, withdrawalAddressId, fiatAmount, fiatCurrency } = req.body;

  const testTriggered = req.body.isProd === false;
  const isProd = !testTriggered;

  try {
    const result = await createWithdrawalUnfunded({
      username,
      withdrawalAddressId,
      fiatAmount,
      fiatCurrency,
      isProd,
    });
    return res.status(200).send(result);
  } catch (err) {
    H.consumeError(err, "STRINGS!");
    return res.status(500).send();
  }
};

export default withPageRouterHighlight(handler);
