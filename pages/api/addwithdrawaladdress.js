import { addWithdrawalAddress } from "../../lib/withdrawalAddress";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  const { address, blockchain, cryptocurrency, nickname, username } = req.body;
  console.log("inputs into addwithdrawaladdress are", {
    address,
    blockchain,
    cryptocurrency,
    nickname,
    username,
  });

  try {
    const withdrawalAddressId = await addWithdrawalAddress({
      address,
      blockchain,
      cryptocurrency,
      nickname,
      username,
    });
    return res.status(200).send({ withdrawalAddressId });
  } catch (err) {
    H.consumeError(err, req.body);
    return res.status(500).send();
  }
};
export default withPageRouterHighlight(handler);
