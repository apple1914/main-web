import crypto from "node:crypto";

export const sign = ({ text, secret }) => {
  const answer = crypto
    .createHash("sha512")
    .update(text + secret)
    .digest("hex");
  return answer;
};
