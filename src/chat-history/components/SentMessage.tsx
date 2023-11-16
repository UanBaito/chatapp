import styles from "../styles/SentMessage.module.scss";
export default function SentMessage({ text }: { text: string }) {
  return (
    <li className={styles.container}>
      {text}
    </li>
  );
}
