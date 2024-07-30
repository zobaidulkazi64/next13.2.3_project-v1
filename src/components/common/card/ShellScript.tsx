
import React from "react";
import TypewriterEffect from "./TypingEffect";

// Define the shape of the props
interface ShellScriptProps {
  commands: string[];
  status: string;
  className: string;
}

const ShellScript: React.FC<ShellScriptProps> = ({ commands, status, className }) => {
  return (
    <div className="p-4">
      <aside className="bg-pink-100  dark:bg-zinc-900 shadow-2xl shadow-purple-900 dark:shadow-purple-500 rounded-lg">
        <div className="flex justify-between items-center bg-gray-200 dark:bg-zinc-800 py-1">
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500"
              aria-label="Close"
              role="button"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-yellow-500"
              aria-label="Minimize"
              role="button"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-green-500"
              aria-label="Maximize"
              role="button"
            >
              
            </div>
          </div>
          <p className="text-green-500 font-semibold p-x-3">{status}</p>
        </div>
        <div className="p-4 text-2xl text-green-600 font-thin">
        

          <TypewriterEffect words={commands} />
        </div>
      </aside>
    </div>
  );
};

export default ShellScript;
