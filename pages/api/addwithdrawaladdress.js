import { addWithdrawalAddress } from "../../lib/withdrawalAddress";
import { saveError } from "../../lib/bugReporting";

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
    const errContext = req.body;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};
export default handler;
