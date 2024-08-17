import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-transparent border-t-red-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
