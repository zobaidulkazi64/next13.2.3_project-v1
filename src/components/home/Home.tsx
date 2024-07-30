"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { homeData } from "@/contexts/data/homeData";
import ShellScript from "../common/card/ShellScript";

const HomePage: FC = () => {
  return (
    <div className="relative p-9 m-3 mt-12 dark:text-white shadow-lg rounded-2xl lg:p-12">
      <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <motion.div
          className="space-y-4 flex-1 sm:text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }} // Added hover effect
          whileTap={{ scale: 0.98 }} // Added click effect
        >
          <h1 className="text-dark dark:text-purple-600 font-bold text-4xl xl:text-5xl">
            {homeData.greeting}
            <span className="text-purple-400"> {homeData.appsBuilt}</span>
          </h1>
          <p className="text-gray-700 dark:text-white text-lg max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            {homeData.description}
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <motion.a
              href="/"
              className="px-7 py-3 w-full bg-white hover:bg-purple-300 text-gray-800 text-center rounded-md shadow-md block sm:w-auto dark:bg-gray-800 dark:hover:bg-purple-500 dark:text-gray-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {homeData.hButton1}
            </motion.a>
            <motion.a
              href="#"
              className="px-7 py-3 w-full bg-purple-400 hover:bg-purple-600 text-gray-200 text-center rounded-md block sm:w-auto dark:bg-purple-800 dark:hover:bg-purple-500 dark:text-gray-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {homeData.hButton2}
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }} // Added hover effect
          whileTap={{ scale: 0.98 }} // Added click effect
        >
          <div className="relative">
            <div className="">
              <ShellScript
                className="w-72 h-40"
                commands={["as a "]}
                status={homeData.name}
              />
            </div>

            <motion.div
              className="group origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 skew-x-0 hover:-translate-x-6 hover:translate-y-12"
              initial={{ rotate: -12, scale: 0.8 }}
              whileHover={{
                rotate: 0,
                scale: 1,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="duration-500 shadow-2xl shadow-purple-400 group-hover:duration-400 relative rounded-2xl w-72 h-40 bg-purple-400 dark:bg-purple-900 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] dark:before:bg-purple-700 before:bg-purple-900 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10 group-hover:before:-right-3 group-hover:before:skew-x-12 before:duration-500 group-hover:duration-500">
                <span className="text-5xl font-bold shadow-inner shadow-purple-400 dark:text-purple-100">
                  {homeData.nameTitle}
                </span>
                <p className="text-dark shadow-2xl dark:text-purple-100 font-bold effect-shadow text-xl">
                  {homeData.nameLast}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
