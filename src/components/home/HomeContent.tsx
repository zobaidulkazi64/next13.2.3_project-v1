'use client';

import React from "react";
import { motion } from "framer-motion";
import { homepageData } from "@/contexts/data/homepageData";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col xs:items-center sm:items-start xs:text-center sm:text-left p-4">
      <motion.h4
        className="text-lg font-semibold text-white xs:text-xl sm:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {homepageData.greeting}
      </motion.h4>
      <motion.h1
        className="font-semibold font-serif mt-2 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        As a <span>{homepageData.name.split(" ")[0]}</span>
      </motion.h1>
      <motion.h1
        className="font-semibold font-serif xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {homepageData.name.split(" ")[1]}
      </motion.h1>
      <motion.h4
        className="text-rose-500 mt-4 xs:text-lg sm:text-xl md:text-2xl lg:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {homepageData.title}
      </motion.h4>
      <motion.p
        className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:w-full xl:w-[70%] mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {homepageData.description}
      </motion.p>
      <div className="mt-6">
        <button className="px-6 py-2 bg-rose-500 text-lg text-white rounded-md xs:text-lg sm:text-xl md:text-2xl">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default MainContent;
