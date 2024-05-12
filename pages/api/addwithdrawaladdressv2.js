import { addWithdrawalAddress } from "../../lib/withdrawalAddress";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";

const handler = async (req, res) => {
  const { address, blockchain, cryptocurrency, nickname, username } = req.body;
  console.log("inputs into addwithdrawaladdress are", {
    address,
    blockchain,
    cryptocurrency,
    nickname,
    username,
  });

  if (!address) {
    // throw new Error("address must be defined");
    return res.status(500).send("errrrrrr");
  }

  let withdrawalAddressId = await addWithdrawalAddress({
    address,
    blockchain,
    cryptocurrency,
    nickname,
    username,
  });

  return res.status(200).send({ withdrawalAddressId });
};
export default withPageRouterHighlight(handler);
