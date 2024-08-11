"use client";
import React, { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative inline-block"
    >
      {show && (
        <div className="absolute bottom-full mb-2 p-2 bg-purple-500 dark:bg-purple-900 text-white text-xl rounded">
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
