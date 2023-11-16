import { useEffect, useState } from "react";

export default function useConnection() {
  const [connection, setConnection] = useState<WebSocket | null>(null);
  useEffect(() => {
    if (connection === null) {
      setConnection(
        new WebSocket(
          "wss://lgjdl0ucsf.execute-api.us-east-2.amazonaws.com/development/",
        ),
      );
    }
    return () => {
      connection?.close();
    };
  }, [connection, setConnection]);
  return connection;
}
