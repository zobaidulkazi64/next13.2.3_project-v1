import React from "react";
import TypewriterEffect from "./TypingEffect";

// Define the shape of the props
interface ShellScriptProps {
  commands: string[];
  status: string;
  className: string;
}

const ShellScript: React.FC<ShellScriptProps> = ({
  commands,
  status,
  className,
}) => {
  return (
    <div className="p-4">
      <aside className="w-full shadow-xl shadow-purple-500 dark:shadow-purple-500 rounded-lg">
        <div className="flex justify-between items-center bg-gray-200 dark:bg-zinc-800 ">
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
            ></div>
          </div>
          <p className="text-purple-500  p-1 font-semibold p-x-3">{status}</p>
        </div>
        <div className="p-4 text-2xl h-[20vh] text-purple-600 shadow-md font-bold">
          <TypewriterEffect words={commands} />
        </div>
      </aside>
    </div>
  );
};

export default ShellScript;
