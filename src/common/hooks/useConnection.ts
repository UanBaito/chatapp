import { useEffect, useState } from "react";

export default function useConnection() {
  const [connection, setConnection] = useState<WebSocket>();
  useEffect(() => {
    const webSocket = new WebSocket(
      "wss://lgjdl0ucsf.execute-api.us-east-2.amazonaws.com/development/",
    );
    setConnection(webSocket);
    return () => {
      connection?.close();
    };
  }, []);
  return connection;
}
