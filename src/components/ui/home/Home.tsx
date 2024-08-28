"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { homeData } from "@/contexts/data/homeData";
import ShellScript from "@/components/common/card/ShellScript";
import Link from "next/link";

const HomePage: FC = () => {
  return (
    <div className="container mx-auto p-4 relative   dark:text-purple-600 shadow-lg rounded-2xl lg:p-12 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <section className="mx-auto h-svh pb-12 px-4 items-center lg:flex md:px-8">
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
          <p className="text-purple-600 dark:text-purple-500 text-lg max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            {homeData.description}
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <motion.div
              className="px-7 py-3 w-full bg-purple-600 hover:bg-purple-700 text-gray-800 text-center rounded-md shadow-md block sm:w-auto  dark:hover:bg-purple-500 dark:text-purple-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Link href={homeData.hButton1.link}>
                {homeData.hButton1.name}
              </Link>
            </motion.div>
            <motion.div
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
              <Link href={homeData.hButton2.link}>
                {homeData.hButton2.name}
              </Link>
            </motion.div>
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
                commands={[
                  "console.log('Welcome to JavaScript!')",
                  "alert('As a Full Stack Developer')",
                  "window.alert('I can build web applications!')",
                  "document.write('Thanks for visiting!')",
                ]}
                status={homeData.name}
              />
            </div>

            <motion.div
              className="group origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 skew-x-0 hover:-translate-x-6 hover:translate-y-12"
              initial={{ rotate: -12, scale: 0.8 }}
              whileHover={{
                rotate: 0,
                scale: 1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="duration-500 shadow-2xl shadow-purple-400 group-hover:duration-400 relative rounded-2xl w-72 h-40 bg-purple-400 dark:bg-purple-900  flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] dark:before:bg-purple-700 before:bg-purple-900 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10 group-hover:before:-right-3 group-hover:before:skew-x-12 before:duration-500 group-hover:duration-500">
                <span className="text-5xl font-bold shadow-inner drop-shadow-2xl shadow-purple-400 dark:shadow-purple-300 p-1 text-yellow-500  dark:text-yellow-600 ">
                  {homeData.nameTitle}
                </span>
                <p className="text-2xl shadow-inner drop-shadow-2xl shadow-purple-400 dark:shadow-purple-300 p-1 text-yellow-500  dark:text-yellow-600  font-bold effect-shadow">
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
