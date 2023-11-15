import "./App.css";
import ChatHistory from "./chat-history/ChatHistory";
import ChatNewMessage from "./chat-newmessage/ChatNewMessage";
import ChatSidebar from "./chat-sidebar/ChatSidebar";

export default function App() {
  return (
    <>
      <ChatSidebar />
      <ChatHistory />
      <ChatNewMessage />
    </>
  );
}
