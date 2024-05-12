import { saveUserInfo } from "../../lib/users";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";
import { H } from "@highlight-run/node";

const handler = async (req, res) => {
  try {
    // Check if name, email or password is provided
    const { username, miscInfo, contactInfo } = req.body;
    saveUserInfo({ username, miscInfo, contactInfo });

    return res.status(200).send();
  } catch (e) {
    H.consumeError(e);
    return res.status(500).send();
  }
};

export default withPageRouterHighlight(handler);
