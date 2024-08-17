"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqVariants: Variants = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="py-5">
      <div
        className="flex text-xl font-semibold cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <DoubleArrowUpIcon className="h-6 w-6 text-purple-500 transition-transform duration-300" />
        ) : (
          <DoubleArrowDownIcon className="h-6 w-6 text-purple-500 transition-transform duration-300" />
        )}
      </div>
      <motion.div
        variants={faqVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="mt-3 text-purple-600"
      >
        {answer}
      </motion.div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqData = [
    {
      question: "What are your Hobbies?",
      answer:
        "To add new skills to my arsenal, keep the armoury stocked and from time to time, use the stockpile to create killer apps. I also love to paint and do photography in my spare time.",
    },
    {
      question: "What are your Strengths?",
      answer:
        "Passion for technology drives my day-to-day functions. My ability to see the big picture while making apps helps me in architectonic scalable approaches to problems.",
    },
    {
      question: "What are your Weaknesses?",
      answer:
        "Owing to a weak memory, I am forgetful. Along with some useful information, this weakness makes me forget useless information and helps me focus on what matters.",
    },
    {
      question: "What are your favorite computer system configurations?",
      answer:
        "Favorite OS: Debian Linux, Favorite IDE: Visual Studio Code, Favorite Browser: Google Chrome.",
    },
  ];

  return (
    <div className="relative w-full bg-white dark:bg-slate-900 px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-4xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-neutral-500 dark:text-purple-700 md:text-xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
