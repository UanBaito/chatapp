import styles from "./App.module.scss";
import ChatHistory from "./chat-history/ChatHistory";
import ChatNewMessage from "./chat-newmessage/ChatNewMessage";
import ChatSidebar from "./chat-sidebar/ChatSidebar";
import useConnection from "./common/hooks/useConnection";

export default function App() {
  const connection = useConnection();
  if (connection.ws === null) {
    return <span>Establishing connection...</span>;
  }

  return (
    <main className={styles.chatbox}>
      {connection.readyState === 1
        ? (
          <>
            <section className={styles.chat_sidebar} aria-label="List of users">
              <ChatSidebar />
            </section>
            <section aria-label="Chat history" className={styles.chat_history}>
              <ChatHistory lastMessageState={connection.message} />
            </section>
            <section
              className={styles.chat_newmessage}
              aria-label="Send new message"
            >
              <ChatNewMessage connection={connection.ws} />
            </section>
          </>
        )
        : <span>loading...</span>}
    </main>
  );
}
