export type IMessage = {
  id: string;
  text: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
  }
}
