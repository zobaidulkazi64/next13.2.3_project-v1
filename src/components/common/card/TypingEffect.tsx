"use client";
import React, { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words }) => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setInterval(type, 200);
    return () => clearInterval(timer);
  }, [charIndex, isDeleting, index, words]);

  // Determine the longest word for setting a min-width
  const longestWordLength = Math.max(...words.map((word) => word.length));
  const estimatedCharWidth = 8; // Approximate character width in pixels
  const minWidth = longestWordLength * estimatedCharWidth;

  return (
    <div className="flex justify-center items-center">
      <h1 style={{ minWidth }} className="text-center text-2xl">
        {text || "\u00A0" /* Use a non-breaking space to maintain height */}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
