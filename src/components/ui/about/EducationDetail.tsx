// components/EducationCard.tsx

import Link from "next/link";
import React from "react";
import {} from "@radix-ui/react-icons"

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
  return (
    <section className="flex flex-col justify-center antialiased  bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
      <div className="h-full">
        {educationDetails.map((detail, index) => (
          <div
            key={index}
            className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800-600 shadow-lg rounded-lg mb-8"
          >
            <div className="px-6 py-5 border-2 border-green-500 shadow-lg shadow-green-300/30 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start">
                {/* School Name and Course Name */}
                <div className="flex-grow">
                  {/* Card header */}
                  <div className="flex justify-between items-center mb-3">
                    {/* Title */}
                    <h2 className="text-2xl leading-snug font-extrabold text-gray-800 dark:text-gray-100 truncate mb-1 sm:mb-0">
                     
                      {detail.schoolName}
                    </h2>
                    {/* Duration */}
                    <div className="flex items-center space-x-2">
                      
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {detail.years}
                      </span>
                    </div>
                  </div>
                  {/* Course Name */}
                  <div className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
                   
                    {detail.courseName}
                  </div>
                  {/* Location */}
                  <div className="mb-2 flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                   
                    <span>{detail.location}</span>
                  </div>
                  {/* Subjects */}
                  <div className="mb-2">
                    {detail.subjects.map((subject, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-green-600 dark:text-indigo-400 flex items-center space-x-1"
                      >
                       
                        <span>{subject}</span>
                      </p>
                    ))}
                  </div>
                  {/* Results and Description */}
                  <div className="mb-2">
                    <p className="flex items-center space-x-1 text-gray-700 dark:text-gray-300">
                      
                      <span>{detail.results}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCard;
