import { useState } from "react";
import SentMessage from "./components/SentMessage";
import styles from "./styles/ChatHistory.module.scss";

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
      <ul className={styles.list}>
        {messageHistory.map((message) => (
          ///FIXME: update this to use a proper id
          <SentMessage key={message.id + Date.now} text={message.text} />
        ))}
      </ul>
    </>
  );
}
