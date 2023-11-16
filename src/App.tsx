import styles from "./App.module.scss";
import ChatHistory from "./chat-history/ChatHistory";
import ChatNewMessage from "./chat-newmessage/ChatNewMessage";
import ChatSidebar from "./chat-sidebar/ChatSidebar";
import useConnection from "./common/hooks/useConnection";

export default function App() {
  const connection = useConnection();
  if (connection?.readyState) {
    connection.onmessage = (event: MessageEvent) => {
      console.log(event);
    };
  }
  return (
    <main className={styles.chatbox}>
      {connection
        ? (
          <>
            <section className={styles.chat_sidebar}>
              <ChatSidebar />
            </section>
            <section aria-label="Chat history" className={styles.chat_history}>
              <ChatHistory connection={connection} />
            </section>
            <section className={styles.chat_newmessage}>
              <ChatNewMessage connection={connection} />
            </section>
          </>
        )
        : <span>loading...</span>}
    </main>
  );
}
