"use client";
import React from "react";
import { motion } from "framer-motion";
import Tooltip from "@/components/common/Tooltip";
import { skills } from "@/contexts/skillsData";
interface Skill {
  name: string;
  src: string;
  alt: string;
  link: string;
}

const SkillsShow: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-purple-100 dark:bg-gray-900  justify-center gap-6 p-6">
      {Object.entries(skills).map(([category, skillsArray]) => (
        <motion.div
          key={category}
          className="rounded-lg p-4 w-full md:w-5/12 lg:w-1/4 xl:w-1/5 shadow-lg shadow-purple-400 drop-shadow-lg bg-purple-50 dark:bg-gray-800 dark:text-gray-200 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white capitalize mb-3">
            {category}
          </h2>
          <div className="flex justify-center flex-wrap gap-3">
            {skillsArray.map((skill: Skill, index) => (
              <Tooltip key={index} text={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <picture>
                    <img
                      className="inline-block border border-cyan-500 h-20 w-20 rounded-full ring-2 ring-white ring-opacity-50"
                      src={skill.src}
                      alt={skill.alt}
                    />
                  </picture>
                </a>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsShow;
