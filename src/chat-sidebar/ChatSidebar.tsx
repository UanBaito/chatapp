import styles from './styles/ChatSidebar.module.scss'
export default function ChatSidebar() {
export default function ChatSidebar(
  { lastMessageState }: { lastMessageState: Message | null },
) {
  return (
    <div className={styles.container}>
      <h2>Users</h2>
      <ul>
        <li>
          Alice
        </li>
        <li>
          Bob
        </li>
      </ul>
    </div>
  );
}
