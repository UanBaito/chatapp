export default function ChatNewMessage() {
  return (
    <section>
      <h2>Send message</h2>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <section>
          <input name="message" />
        </section>
      </form>
    </section>
  );
}
