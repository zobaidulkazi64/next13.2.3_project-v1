"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutMeData } from "@/contexts/data/aboutMeData";

const About = () => {
  // Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // Hover and tap effects
  const hoverEffects = {
    scale: 1.05,
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  const tapEffects = {
    scale: 0.98,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 },
  };

  return (
    <div className="container m-auto flex flex-col md:flex-row items-center gap-10 md:items-start p-6 md:p-12">
      <motion.div
        className="w-full bg-pink-100 dark:bg-zinc-900 shadow-2xl shadow-purple-900 dark:shadow-purple-500 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        whileHover={hoverEffects}
        whileTap={tapEffects}
      >
        <div className="flex justify-between items-center bg-gray-200 dark:bg-zinc-800 py-1 px-3 rounded-t-lg">
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
          <p className="text-green-500 font-semibold">About Me</p>
        </div>
        <div className="p-4 text-xl text-green-600 font-thin">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {aboutMeData.fullName}
          </h2>
          {aboutMeData.aboutText}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
