import { useEffect, useState } from "react";
import { Message } from "../common/types";
import styles from "./styles/ChatSidebar.module.scss";
export default function ChatSidebar(
  { lastMessageState }: { lastMessageState: Message | null },
) {
  const [userList, setUserlist] = useState<string[]>([]);
  useEffect(() => {
    if (lastMessageState) {
      if (lastMessageState.type === "names") {
        const names = lastMessageState;
        setUserlist(names.data);
      }
    }
  });
  return (
    <div className={styles.container}>
      <h2>Users</h2>
      <ul>
        {/*FIXME: again, add proper key */}
        {userList.map((name) => <li key={name + Date.now()}>{name}</li>)}
      </ul>
    </div>
  );
}
