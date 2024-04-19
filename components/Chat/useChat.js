import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { fetchMessages } from "../../backend/requests";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(URL, {
      query: { roomId, role: "customer" },
    });

    socketRef.current.on("message_receive", (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);
  useEffect(() => {
    if (roomId) {
      fetchMessages({ roomId }).then((data) => {
        if (!data) {
          return;
        }
        const loadedMessages = data.map((el) => {
          return { body: el.body, ownedByCurrentUser: el.role === "customer" };
        });
        setMessages(loadedMessages);
        //one tiny caveta is the format is a bit different, so you will have to remap them such as ownedByUser
      });
    }
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit("message_send", {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
