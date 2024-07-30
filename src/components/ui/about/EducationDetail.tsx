"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  AccessibilityIcon,
  CheckCircledIcon,
  LightningBoltIcon,
  BookmarkIcon,
  StarIcon,
} from "@radix-ui/react-icons";

interface EducationDetail {
  courseName: string;
  schoolName: string;
  location: string;
  subjects: string[];
  years: string;
  length: string;
  results: string;
  description: string;
}

interface EducationCardProps {
  educationDetails: EducationDetail[];
}

const EducationCard: React.FC<EducationCardProps> = ({ educationDetails }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const hoverEffects = {
    scale: 1.03,
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  const tapEffects = {
    scale: 0.98,
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 },
  };

  return (
    <motion.section
      className="container mx-auto p-4 relative    dark:text-purple-600 shadow-lg rounded-2xl lg:p-12 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="">
        {educationDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="container mx-auto bg-gray-100 dark:bg-gray-800-600 shadow-lg rounded-lg mb-8"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={hoverEffects}
            whileTap={tapEffects}
          >
            <div className="px-6 py-5 border-2 border-green-500 shadow-lg shadow-green-300/30 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start">
                {/* School Name and Course Name */}
                <div className="flex-grow">
                  {/* Card header */}
                  <div className="flex justify-between items-center mb-3">
                    {/* Title */}
                    <h2 className="text-2xl leading-snug font-extrabold text-gray-800 dark:text-gray-100 truncate mb-1 sm:mb-0">
                      <AccessibilityIcon />
                      {detail.schoolName}
                    </h2>
                    {/* Duration */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        <BookmarkIcon className="w-5 h-5 text-green-600" />
                        {detail.years}
                      </span>
                    </div>
                  </div>
                  {/* Course Name */}
                  <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    <CheckCircledIcon className="w-6 h-6 text-green-600" />
                    {detail.courseName}
                  </div>
                  {/* Location */}
                  <div className="mb-2 flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <LightningBoltIcon className="w-5 h-5 text-green-600" />
                    <span>{detail.location}</span>
                  </div>
                  {/* Subjects */}
                  <div className="mb-2">
                    {detail.subjects.map((subject, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-green-600 dark:text-purple-400 flex items-center space-x-1"
                      >
                        <span>{subject}</span>
                      </p>
                    ))}
                  </div>
                  {/* Results and Description */}
                  <div className="mb-2">
                    <p className="flex items-center space-x-1 text-gray-700 dark:text-gray-300">
                      <StarIcon className="w-5 h-5 text-yellow-500" />
                      <span>{detail.results}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationCard;
