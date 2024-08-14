// components/ScrollToTop.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { RocketIcon } from "@radix-ui/react-icons";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > window.innerHeight * 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleVisibility]);

  return (
    <div className="fixed bottom-4 right-4 p-2 z-50">
      {isVisible && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <RocketIcon className="w-11 h-11 p-2" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
