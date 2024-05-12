import { saveUserInfo } from "../../lib/users";
import { saveError } from "../../lib/bugReporting";

const handler = async (req, res) => {
  try {
    // Check if name, email or password is provided
    const { username, miscInfo, contactInfo } = req.body;
    await saveUserInfo({ username, miscInfo, contactInfo });

    return res.status(200).send();
  } catch (err) {
    const errContext = req.body;
    saveError({ err, errContext, requestUrl: req.url });
    return res.status(500).send();
  }
};

export default handler;
