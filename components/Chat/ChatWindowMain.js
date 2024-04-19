import { useState, useEffect } from "react";
import useChat from "./useChat";
// const socket = socketIO.connect("http://localhost:5000");

const Chat = ({ roomId }) => {
  // State to store the messages
  const { messages, sendMessage } = useChat(roomId);

  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(currentMessage);
    setCurrentMessage("");
  };

  return (
    <div className="container bg-white">
      <div className="mx-auto w-50 p-5">
        {/* {JSON.stringify(messages)} */}
        {messages.map((message, index) => (
          <p key={index}>
            {message.body} from {message.ownedByCurrentUser ? "me" : "them"}
          </p>
        ))}

        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />

        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
export default Chat;
