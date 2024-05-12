import { submitCustomerSupportTicket } from "../../lib/customerSupport";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    const { email, number, text, username } = req.body;
    await submitCustomerSupportTicket({ email, number, text, username });
    return res.status(200).send();
  } catch (err) {
    const errContext = req.body;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500);
  }
};

export default handler;
