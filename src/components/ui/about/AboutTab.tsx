"use client";

import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import EducationCard from "./EducationDetail";
import { educationDetails } from "@/contexts/data/educationDetails";
import Certificate from "./Certificate";
import GithubStats from "./GithubStatus";
import { motion } from "framer-motion";

// Motion component for Tabs.Trigger
const MotionTabsTrigger = motion(Tabs.Trigger);

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutTab: React.FC = () => {
  return (
    <div className="relative w-full">
      <Tabs.Root defaultValue="Educations" className="">
        {/* Fixed Navigation Menu */}
        <div className="w-full mx-auto lg:bg-purple-100 dark:lg:bg-gray-800 lg:border-r lg:border-gray-300 lg:dark:border-gray-700">
          <Tabs.List className="flex justify-center gap-2 lg:gap-7 p-2 text-xl lg:text-3xl font-bold hover:text-purple-500 bg-gray-200 dark:bg-gray-800 lg:border-b lg:border-gray-300 lg:dark:border-gray-700">
            <MotionTabsTrigger
              value="Educations"
              className="p-2 text-purple-600 dark:text-purple-400 hover:bg-purple-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Educations
            </MotionTabsTrigger>
            <MotionTabsTrigger
              value="Certificates"
              className="p-2 text-purple-600 dark:text-purple-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Certificates
            </MotionTabsTrigger>
            <MotionTabsTrigger
              value="GithubStats"
              className="p-2 text-gray-600 dark:text-purple-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GithubStats
            </MotionTabsTrigger>
          </Tabs.List>
        </div>

        {/* Tab Content */}
        <div className="">
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Tabs.Content value="Educations">
              <EducationCard educationDetails={educationDetails} />
            </Tabs.Content>

            <Tabs.Content value="Certificates">
              <Certificate />
            </Tabs.Content>

            <Tabs.Content value="GithubStats">
              <GithubStats />
            </Tabs.Content>
          </motion.div>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default AboutTab;
