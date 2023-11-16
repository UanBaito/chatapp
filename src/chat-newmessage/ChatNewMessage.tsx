import { useState } from "react";
import styles from './styles/ChatNewMessage.module.scss'

export default function ChatNewMessage(
  { connection }: { connection: WebSocket },
) {
  const [inputValue, setInputValue] = useState("");

  function sendMessage(message: string) {
    connection.send(JSON.stringify({ action: "message", message: message }));
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(inputValue);
        }}
        className={styles.container}
      >
        <section>
          <input
            name="message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </section>
        <button>Send</button>
      </form>
    </>
  );
}
