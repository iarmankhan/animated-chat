import { useState } from "react";
import { motion } from "framer-motion";

interface ComposerProps {
  onSend: (text: string) => void;
}

export function Composer(props: ComposerProps) {
  const { onSend } = props;
  const [text, setText] = useState("");

  const handleOnSend = (text: string) => {
    if (text.trim() === "") {
      return;
    }

    onSend(text);
    setText("");
  };

  return (
    <div className="p-1 flex">
      <input
        className="border border-gray-300 rounded-full px-4 py-2 w-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnSend(text);
          }
        }}
      />
      <motion.button
        onClick={() => {
          handleOnSend(text);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="ml-2 rounded-full bg-gray-200 hover:bg-gray-300 p-2 flex items-center justify-center hover:shadow-md transition duration-200 ease-in-out"
      >
        <svg
          className="w-6 h-6 rotate-90 ml-1 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </motion.button>
    </div>
  );
}
