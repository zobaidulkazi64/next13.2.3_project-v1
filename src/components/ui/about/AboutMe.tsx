"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkedInIcon, TelegramIcons, XIcon } from "@/assets/icons";
import Link from "next/link";
import AboutTab from "./AboutTab";
import Image from "next/image";

interface AboutMeProps {
  fullName: string;
  aboutText: string;
  profileImageUrl: string;
  coverImageUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  telegramUrl: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  fullName,
  aboutText,
  profileImageUrl,
  linkedinUrl,
  twitterUrl,
  telegramUrl,
}) => {
  return (
    <section className="w-full overflow-hidden p-6">
      <div className="w-full mx-auto">
        {/* User Cover IMAGE */}
        <motion.picture
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] min-w-32 min-h-32"></div>
        </motion.picture>

        {/* User Profile Image */}
        <div className="w-full mx-auto flex justify-center">
          <motion.picture
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              width={200}
              height={200}
              src={profileImageUrl}
              alt="User Profile"
              className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[5rem] sm:h-[5rem] w-[8rem] h-[8rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-purple-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem] shadow-purple-400"
            />
          </motion.picture>
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-purple-600 text-4xl font-serif">
            {fullName}
          </h1>
          {/* About */}
          <p className="w-96 md:w-full lg:w-full text-purple-600 sm:text-lg text-pretty sm:text-center xs:text-justify">
            {aboutText}
          </p>

          {/* Social Links */}
          <div className="px-2 flex space-x-3 p-2 rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-700 dark:bg-opacity-30 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="w-8 h-8"
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcons />
              </Link>
            </motion.div>
          </div>

          {/* Cards */}
          <div>
            <AboutTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
