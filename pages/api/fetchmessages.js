import { fetchMessages } from "../../lib/messages";

const handler = async (req, res) => {
  const { roomId } = req.quer;

  const result = await fetchMessages({
    roomId,
  });

  return res.status(200).send(result);
};

export default handler;
