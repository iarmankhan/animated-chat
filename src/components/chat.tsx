import { IMessage } from "../types";
import { Composer } from "./composer.tsx";
import { ChatMessage } from "./chat-message.tsx";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ChatProps {
  currentUser: IMessage["user"];
  messages: IMessage[];
  onSend: (message: IMessage) => void;
  onRemove: (message: IMessage) => void;
}

export function Chat({ messages, currentUser, onSend, onRemove }: ChatProps) {
  const [lastChangedIndex, setLastChangedIndex] = useState<number | null>(null);
  const handleOnSend = (text: string) => {
    onSend({
      id: Math.random().toString(36).substring(7),
      text,
      user: currentUser,
      createdAt: new Date(),
    });
    setLastChangedIndex(messages.length);
  };

  const animatingMessages = messages.slice(lastChangedIndex ?? 0);

  return (
    <div className="bg-white rounded-xl py-2 w-full">
      <div
        className="flex items-center justify-center text-gray-500 text-sm px-2"
        style={{ height: "40px" }}
      >
        <span className="text-gray-500 text-sm">{currentUser.name}</span>
      </div>

      <div className="flex flex-col px-2 mb-2 h-[800px] overflow-y-auto">
        <AnimatePresence>
          {messages.map((message, index) => {
            return (
              <ChatMessage
                message={message}
                key={message.id}
                right={message.user.id === currentUser.id}
                onClick={() => {
                  onRemove(message);
                  setLastChangedIndex(index);
                }}
                index={animatingMessages.indexOf(message)}
                lastChangedIndex={lastChangedIndex}
              />
            );
          })}
        </AnimatePresence>
      </div>
      <Composer onSend={handleOnSend} />
    </div>
  );
}
