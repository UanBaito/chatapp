import styles from "../styles/SentMessage.module.scss";
export default function SentMessage(
  { data, userName }: {
    data: { message: string; author: string };
    userName: string;
  },
) {
  const isCurrentUser = data.author === userName ? true : false;
  const author = isCurrentUser ? "Me" : data.author;

  return (
    <li className={styles.container}>
      <p>
        <span data-isCurrentUser={isCurrentUser}>{author}: </span>
        {data.message}
      </p>
    </li>
  );
}
