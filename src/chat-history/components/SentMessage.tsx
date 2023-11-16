import styles from "../styles/SentMessage.module.scss";
export default function SentMessage({ text }: { text: string }) {
  const author = "Someone";
  return (
    <li className={styles.container}>
      {`${author}: ${text}`}
    </li>
  );
}
