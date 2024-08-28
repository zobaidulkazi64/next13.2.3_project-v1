"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const mitting = [];

const Thanks = () => {
  return (
    <div className="m-auto container mx-auto p-4 relative     bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] shadow-lg rounded-2xl lg:p-12">
      <div className=" lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <motion.div
          className="flex flex-col gap-4 w-full p-4 rounded-lg border border-purple-300 shadow-xl shadow-purple-400/30"
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
            <div className="text-5xl text-purple-500 font-semibold uppercase font-serif">
              Thank You
            </div>
            <hr className="w-[50%] h-1 rounded-full border-t-purple-500 bg-purple-500" />
          </div>

          <p className="text-sm text-purple-500">
            Thank you sincerely for the immense support you have provided. Your
            unwavering encouragement and assistance have been invaluable. I am
            deeply grateful for your presence and the positive impact you have
            had on my journey. Your contributions have truly made a significant
            difference.
          </p>

          <div className="flex gap-4 justify-center">
            <motion.button
              className="w-full px-4 py-1 border-2 border-purple-500 rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://calendly.com/zobaidulkazi">
                Schedule Now Meeting
              </Link>
            </motion.button>
            <motion.button
              className="w-full px-4 py-1 bg-purple-500 rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://github.com/zobkazi">View My Github</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Thanks;
