"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const CertificateData = [
  {
    id: 1,
    name: "Node (Basic)",
    iframeLink:
      "https://media.licdn.com/dms/image/sync/D5627AQHc2k7EPJDB1w/articleshare-shrink_800/0/1719521327389?e=1722981600&v=beta&t=aCZIwfwgN7gPAPcC5cEEvqHPy6DsYgUSP996iWTSmbk",
    imageLink: "https://www.hackerrank.com/certificates/2b2bacbc6ea5",
  },
  {
    id: 2,
    name: "Software Engineer Certificate",
    iframeLink:
      "https://media.licdn.com/dms/image/sync/D5627AQG6NEZj61qD8w/articleshare-shrink_800/0/1722201878894?e=1722981600&v=beta&t=_gLML8PW8XCECWlcti8li_d3Ynj0Gv87mshJ8Eo89dk",
    imageLink: "https://www.hackerrank.com/certificates/0fc7fe965758",
  },
];

const Certificate = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

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
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        My HackerRank Certificates
      </motion.h1>
      <motion.div
        className="dark:text-purple-600 shadow-lg rounded-2xl lg:p-12 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-9 m-3 mt-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {CertificateData.map((cert) => (
            <motion.div
              key={cert.id}
              className="p-4"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover={hoverEffects}
              whileTap={tapEffects}
            >
              <aside className="bg-pink-100 dark:bg-zinc-900 shadow-2xl shadow-purple-900 dark:shadow-purple-500 rounded-lg">
                <div className="flex justify-between items-center bg-gray-200 dark:bg-zinc-800 py-1 px-4">
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
                  <p className=" text-green-500 font-semibold">@zobaidulkazi</p>
                </div>
                <div className="p-4 text-2xl text-green-600 font-thin">
                  <div className="border rounded-lg shadow-md overflow-hidden">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {cert.name}
                    </h2>
                    <picture>
                      <img
                        src={cert.iframeLink}
                        title={cert.name}
                        alt={cert.name}
                        className="w-full max-h-svh object-contain"
                      />
                    </picture>
                    <Link
                      href={cert.imageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-center text-purple-500 hover:underline p-4"
                    >
                      View Certificate
                    </Link>
                  </div>
                </div>
              </aside>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificate;
