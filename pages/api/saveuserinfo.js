import { saveUserInfo } from "../../lib/users";
import { withPageRouterHighlight } from "../../lib/highlight/highlightBackendConfig";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if name, email or password is provided
    const { username, miscInfo, contactInfo } = req.body;
    saveUserInfo({ username, miscInfo, contactInfo });

    return res.status(200).send();
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default withPageRouterHighlight(handler);
