// components/ScrollToTop.tsx
"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 0.3) {
      // 30% of the viewport height
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-purple-500 dark:bg-purple-800 text-black rounded-full shadow-lg hover:bg-pink-600 dark:hover:bg-pink-900 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
