import { useEffect, useState } from "react";
import { Message } from "../types";

export default function useConnection() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [readyState, setReadyState] = useState<0 | 1 | 2 | 3>(WebSocket.CLOSED);
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    const newWebSocket = new WebSocket(
      "wss://lgjdl0ucsf.execute-api.us-east-2.amazonaws.com/development/",
    );
    newWebSocket.onopen = () => {
      console.log("Connected!");
      setReadyState(WebSocket.OPEN);
      const name = prompt('Please enter your name')
      newWebSocket.send(JSON.stringify({action: 'name', type: 'add', name}))
    };
    newWebSocket.onclose = () => {
      console.log("Closed!");
      setReadyState(WebSocket.CLOSED);
    };
    newWebSocket.onmessage = (event) => {
      console.log("Received message!");
      setMessage(JSON.parse(event.data));
    };
    setWs(newWebSocket);

    return () => {
      //in strict mode, react will try to close the connection before it was even established.
      //This is to prevent that.
      if (newWebSocket.readyState === 1) {
        newWebSocket.onclose = null;
        newWebSocket.onopen = null;
        newWebSocket.onmessage = null;
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

