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

  let withdrawalAddressId;

  try {
    withdrawalAddressId = await addWithdrawalAddress({
      address,
      blockchain,
      cryptocurrency,
      nickname,
      username,
    });
  } catch (err) {
    throw new Error("error with addWithdrawalAddress", err);
  }

  return res.status(200).send({ withdrawalAddressId });
};
export default withPageRouterHighlight(handler);
