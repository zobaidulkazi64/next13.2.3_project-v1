'use client';
import React from "react";
import { motion } from "framer-motion";
import { homepageData } from "@/contexts/data/homepageData";


const Statistics = () => {
  return (
    <div className="w-full flex flex-col xs:items-center sm:flex-row sm:justify-center sm:gap-8 xs:gap-4 p-4">
      {homepageData.stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="inline-flex gap-1 items-center">
            <h2 className="font-semibold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {stat.value}
            </h2>
            <h2 className="text-rose-500 font-extrabold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              +
            </h2>
          </div>
          <h4 className="text-sm xs:text-base sm:text-lg md:text-xl text-center mt-2">
            {stat.label}
          </h4>
        </motion.div>
      ))}
    </div>
  );
};

export default Statistics;
