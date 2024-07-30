'use client';

// components/CookieNotice.tsx
import React, { useState, useEffect } from "react";

const CookieNotice: React.FC = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if the user has already made a decision about cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowNotice(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowNotice(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white w-80 shadow-lg rounded-2xl p-6 flex flex-col space-y-4">
      <span className="text-black text-2xl font-semibold">
        🍪 Cookie Notice
      </span>
      <p className="text-black">
        We use cookies to ensure that we give you the best experience on our
        website.{" "}
        <a href="#" className="text-blue-600 underline">
          Read cookies policies
        </a>
        .
      </p>
      <a href="#" className="text-blue-600 text-sm">
        Manage preferences
      </a>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleDecline}
          className="text-red-600 hover:text-white hover:bg-red-600 py-2 px-4 rounded-lg font-bold transition-all duration-300"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="text-green-600 hover:text-white hover:bg-green-600 py-2 px-4 rounded-lg font-bold transition-all duration-300"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
