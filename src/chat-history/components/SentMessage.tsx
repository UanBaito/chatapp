import styles from "../styles/SentMessage.module.scss";
export default function SentMessage(
  { data, userName }: {
    data: { message: string; author: string };
    userName: string;
  },
) {
  const author = data.author === userName ? "Me" : data.author;
  return (
    <li className={styles.container}>
      {`${author}: ${data.message}`}
    </li>
  );
}
