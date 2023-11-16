import { useState } from "react";

export default function ChatNewMessage(
  { connection }: { connection: WebSocket },
) {
  const [inputValue, setInputValue] = useState("");

  function sendMessage(message: string) {
    connection.send(JSON.stringify({ action: "message", message: message }));
  }

  return (
    <>
      <h2>Send message</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(inputValue);
        }}
      >
        <section>
          <input
            name="message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </section>
      </form>
    </>
  );
}
