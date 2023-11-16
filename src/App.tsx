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
            <ChatSidebar />
            <ChatHistory connection={connection} />
            <ChatNewMessage connection={connection}/>
          </>
        )
        : <span>loading...</span>}
    </main>
  );
}
