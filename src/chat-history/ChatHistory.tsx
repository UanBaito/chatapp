import { useState } from "react";

type Message = {
  text: string;
  id: string;
};

export default function ChatHistory({ connection }: { connection: WebSocket }) {
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  connection.onmessage = (event) => {
    const eventData = JSON.parse(event.data);
    setMessageHistory((prevHistory) => [eventData, ...prevHistory]);
  };

  return (
    <>
      <ul>
        {messageHistory.map((message) => (
          ///FIXME: update this to use a proper id
          <li key={message.id + Date.now()}>{message.text}</li>
        ))}
      </ul>
    </>
  );
}
