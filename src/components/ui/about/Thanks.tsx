"use client";

import { motion } from "framer-motion";
import React from "react";

const Thanks = () => {
  return (
    <div className="w-full px-9 py-12 container m-auto dark:text-white shadow-lg rounded-2xl lg:p-12">
      <div className="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <motion.div
          className="flex flex-col gap-4 text-dark dark:text-white p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h5 className="text-sm text-purple-500 font-semibold">
            @zobaidulkazi
          </h5>
          <div className="w-full flex gap-2 items-center justify-around">
            <div className="text-5xl font-semibold uppercase font-serif">
              Thank You
            </div>
            <hr className="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
          </div>

          <p className="text-sm">
            Thank you sincerely for the immense support you have provided. Your
            unwavering encouragement and assistance have been invaluable. I am
            deeply grateful for your presence and the positive impact you have
            had on my journey. Your contributions have truly made a significant
            difference.
          </p>

          <div className="flex gap-4 justify-center">
            <motion.button
              className="w-full px-4 py-1 border-2 border-green-500 rounded-sm"
              whileHover={{ backgroundColor: "#d1f7d6", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
            </motion.button>
            <motion.button
              className="w-full text-white px-4 py-1 bg-green-500 rounded-sm"
              whileHover={{ backgroundColor: "#2f6f2e", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Thanks;
