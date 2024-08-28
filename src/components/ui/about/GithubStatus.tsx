"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const GithubStats = () => {
  const stats = [
    {
      type: "img",
      src: "https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=04FF3C&center=true&width=435&lines=Hi%2C+I+am+Zobaidul+Kazi;+Full+Stack+JavaScript+Developer",
      alt: "Typing SVG",
    },
    {
      type: "img",
      src: "https://komarev.com/ghpvc/?username=zobkazi&color=blue",
      alt: "GitHub profile views",
    },
    {
      type: "img",
      src: "https://img.shields.io/endpoint?style=social&color=222&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D25584%26project%3D%26in=0",
      alt: "CodeTime Badge",
    },
    {
      type: "img",
      src: "https://wakatime.com/badge/user/f22f5f67-c272-4052-bc4f-b9ee26dfabff.svg",
      alt: "GitHub Stats",
      height: "180em",
    },
    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=zobkazi&theme=2077",
      alt: "GitHub Top Languages Badge Cards",
    },

    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=zobkazi&theme=2077",
      alt: "Commits Card",
    },
    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=zobkazi&theme=2077",
      alt: "Contributions in last 30 days",
    },

    {
      type: "img",
      src: "https://github-readme-streak-stats.herokuapp.com/?user=zobkazi&theme=dark",
      alt: "GitHub Streak Stats",
      height: "180em",
    },
    {
      type: "img",
      src: "https://github-readme-stats.vercel.app/api/wakatime?username=zobaidulkazi&layout=compact&theme=algolia",
      alt: "Wakatime Stats",
      height: "180em",
    },
  ];

  const links = [
    {
      href: "https://www.linkedin.com/in/zobaidulkazi",
      imgSrc:
        "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/zobkazi",
      imgSrc:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=dark",
      alt: "GitHub",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="container mx-auto flex flex-col gap-8 mt-32 dark:text-purple-600 shadow-lg rounded-2xl lg:p-12 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold text-center"
        whileHover={itemVariants.hover}
        whileTap={itemVariants.tap}
      >
        GitHub Stats
      </motion.h1>
      {stats.map((stat, index) => (
        <motion.picture
          key={index}
          whileHover={itemVariants.hover}
          whileTap={itemVariants.tap}
        >
          <picture>
            <img
              className="w-screen justify-center mx-auto"
              key={index}
              src={stat.src}
              alt={stat.alt}
              height={stat.height || undefined}
            />
          </picture>
        </motion.picture>
      ))}
      {links.map((link, index) => (
        <Link key={index} href={link.href} target="_blank">
          <motion.picture
            whileHover={itemVariants.hover}
            whileTap={itemVariants.tap}
          >
            <picture>
              <img src={link.imgSrc} alt={link.alt} />
            </picture>
          </motion.picture>
        </Link>
      ))}
    </motion.div>
  );
};

export default GithubStats;
