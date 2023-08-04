import { IMessage } from "./types";
import { useState } from "react";
import { Chat } from "./components/chat.tsx";

export function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const addMessage = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  const removeMessage = (message: IMessage) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <div className="min-w-full min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 flex flex-row gap-4">
        <Chat
          messages={messages}
          onSend={addMessage}
          currentUser={{
            id: "1",
            name: "John",
          }}
          onRemove={removeMessage}
        />
        <Chat
          messages={messages}
          onSend={addMessage}
          currentUser={{
            id: "2",
            name: "Jane",
          }}
          onRemove={removeMessage}
        />
      </div>
    </div>
  );
}
