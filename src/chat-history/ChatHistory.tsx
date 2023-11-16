import { useEffect, useState } from "react";
import SentMessage from "./components/SentMessage";
import styles from "./styles/ChatHistory.module.scss";
import { Message } from "../common/types";

export default function ChatHistory(
  { lastMessageState }: { lastMessageState: Message | null },
) {
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  useEffect(() => {
    if (lastMessageState) {
      const eventData = lastMessageState;
      setMessageHistory((prevHistory) => [...prevHistory, eventData]);
    }
  }, [lastMessageState, setMessageHistory]);

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
