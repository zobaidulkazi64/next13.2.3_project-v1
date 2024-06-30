// components/GlobalError.tsx
"use server";
import React from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold mb-4">Something went wrong!</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
