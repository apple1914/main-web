import { getOnDutyCustomerSupportNumber } from "../../lib/customerSupport";

const handler = async (req, res) => {
  try {
    const phoneNumber = await getOnDutyCustomerSupportNumber();
    return res.status(200).send(phoneNumber);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default handler;
