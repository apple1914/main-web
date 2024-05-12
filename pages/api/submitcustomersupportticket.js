import { submitCustomerSupportTicket } from "../../lib/customerSupport";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";

const handler = async (req, res) => {
  try {
    const { email, number, text, username } = req.body;
    await submitCustomerSupportTicket({ email, number, text, username });
    return res.status(200).send();
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};

export default withPageRouterHighlight(handler);
