"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-2xl lg:text-6xl mb-4 text-red-500 dark:text-red-400"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          😭:🧑🏿‍🔧:👩🏿‍🏭:🧑🏿‍💻:🙅🏿
        </motion.div>
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400">
          Oops! Page Not Found!
        </p>
        <motion.div
          className="mt-8 inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 text-gray-200  rounded-md shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="block text-center">
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
