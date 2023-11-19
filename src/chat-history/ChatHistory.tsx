import { useEffect, useState } from "react";
import SentMessage from "./components/SentMessage";
import styles from "./styles/ChatHistory.module.scss";
import { Connection, Message } from "../common/types";

export default function ChatHistory(
  { connection }: { connection: Connection },
) {
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  useEffect(() => {
    if (connection.message) {
      if (connection.message.type === "message") {
        const eventData = connection.message;
        setMessageHistory((prevHistory) => [...prevHistory, eventData]);
      }
    }
  }, [connection.message, setMessageHistory]);

  return (
    <>
      <ul className={styles.list}>
        {messageHistory.map((message) => (
          ///FIXME: update this to use a proper id
          <SentMessage
            key={message.id + Date.now()}
            data={message.data}
            userName={connection.userInfo.name}
          />
        ))}
      </ul>
    </>
  );
}
