import styles from './styles/ChatSidebar.module.scss'
export default function ChatSidebar() {
  return (
    <div className={styles.container}>
      <h2>users</h2>
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
