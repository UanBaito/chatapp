import { useEffect, useRef, useState } from "react";
import { Message } from "../types";

export default function useConnection() {
  const [readyState, setReadyState] = useState<0 | 1 | 2 | 3>(WebSocket.CLOSED);
  const [message, setMessage] = useState<Message | null>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const nameRef = useRef<string | null>("");

  useEffect(() => {
    const newWebSocket = new WebSocket(
      "wss://lgjdl0ucsf.execute-api.us-east-2.amazonaws.com/development/",
    );
    newWebSocket.onopen = () => {
      console.log("Connected!");
      setReadyState(WebSocket.OPEN);
      if (newWebSocket.readyState === 1) {
        nameRef.current = nameRef.current ? nameRef.current : prompt("name");
        newWebSocket.send(
          JSON.stringify({
            action: "name",
            name: nameRef.current,
          }),
        );
      }
    };

    newWebSocket.onclose = () => {
      console.log("Closed!");
      setReadyState(WebSocket.CLOSED);
    };

    newWebSocket.onmessage = (event) => {
      console.log("Received message!");
      console.log(event.data);
      setMessage(JSON.parse(event.data));
    };

    setWs(newWebSocket);

    return () => {
      //in strict mode, react will try to close the connection before it was even established.
      //This is to prevent that.
      newWebSocket.onmessage = null;
      newWebSocket.onclose = null;
      newWebSocket.onopen = null;
      if (newWebSocket.readyState === 1) {
        newWebSocket.close();
      } else {
        newWebSocket.addEventListener("open", () => {
          newWebSocket.close();
        });
      }
    };
  }, []);

  return { ws, readyState, message };
}
