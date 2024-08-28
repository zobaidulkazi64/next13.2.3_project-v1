// components/MyJourney.tsx
"use client";
import React from "react";
import { myJourneyData } from "@/contexts/data/MyJourneyData";
import { motion } from "framer-motion";
import Link from "next/link";

const MyJourney: React.FC = () => {
  return (
    <div className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-balance text-sm md:text-xl lg:text-3xl text-purple-600 font-semibold tracking-wide uppercase">
            {myJourneyData.title}
          </h2>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">{myJourneyData.introduction}</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
              {myJourneyData.paragraphs.map((paragraph, index) => (
                <p className="mt-8" key={index}>
                  {paragraph}
                </p>
              ))}
              <ul role="list" className="mt-8">
                {myJourneyData.listItems.map((item, index) => (
                  <li className="flex items-start m-5" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3>{myJourneyData.subheading}</h3>
            </div>
            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
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
                <Link href={myJourneyData.contactButton.link}>
                  {myJourneyData.contactButton.text}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <div className="relative bg-purple-100 dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <Link href="https://stacklearner.com/">
                  <picture>
                    <img
                      src={myJourneyData.testimonial.companyLogo}
                      alt="Workcation"
                      className="h-8"
                    />
                    Stack Learner
                  </picture>
                </Link>
                <div className="relative text-lg  font-medium mt-8">
                  <p className="relative">{myJourneyData.testimonial.quote}</p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-purple-500 dark:bg-purple-900 border border-gray-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border border-purple-600 sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <Link href="https://www.toptal.com/resume/hasan-mahmud-nayem">
                    <picture>
                      <img
                        className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-purple-200"
                        src={myJourneyData.testimonial.author.avatar}
                        alt={myJourneyData.testimonial.author.name}
                      />
                    </picture>
                  </Link>
                </div>
                <span className="relative ml-4 text-purple-200 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  {myJourneyData.testimonial.author.name}
                  <br />
                  <span className="sm:inline">
                    {myJourneyData.testimonial.author.title}
                  </span>
                </span>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
