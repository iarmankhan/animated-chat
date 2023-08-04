import { IMessage } from "../types";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: IMessage;
  right?: boolean;
  onClick?: () => void;
  index: number;
  lastChangedIndex: number | null;
}

export function ChatMessage({
  index,
  lastChangedIndex,
  onClick,
  message,
  right,
}: ChatMessageProps) {
  return (
    <motion.button
      layout
      onClick={onClick}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.7 }}
      exit={{
        opacity: 0,
        scale: 0.7,
      }}
      transition={{
        opacity: { duration: 0.2 },
        layout: {
          type: "spring",
          bounce: 0.4,
          duration: lastChangedIndex ? index * 0.15 + 0.85 : 1,
        },
      }}
      style={{ originX: right ? 1 : 0 }}
      className={`flex flex-col p-1 ${right ? "items-end" : "items-start"}`}
      tabIndex={-1}
    >
      <div
        className={`break-all px-4 py-2 rounded-xl max-w-[70%] text-left ${
          right
            ? "bg-blue-500 text-white ml-auto"
            : "bg-gray-200 text-gray-800 mr-auto"
        }`}
      >
        {message.text}
      </div>
    </motion.button>
  );
}
