export type Message = {
  type: string;
  data: any;
  id: string;
};
export type Connection = {
  ws: WebSocket | null;
  readyState: 0 | 2 | 1 | 3;
  message: Message | null;
  userInfo: {
    name: string;
  };
};
