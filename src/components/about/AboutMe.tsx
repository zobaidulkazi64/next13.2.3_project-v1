// components/AboutMe.tsx
import React from "react";

interface AboutMeProps {
  fullName: string;
  aboutText: string;
  profileImageUrl: string;
  coverImageUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  // Add more social media links as needed
}

const AboutMe: React.FC<AboutMeProps> = ({
  fullName,
  aboutText,
  profileImageUrl,
  coverImageUrl,
  linkedinUrl,
  twitterUrl,
  facebookUrl,
  youtubeUrl,
}) => {
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="w-full mx-auto">
        {/* User Cover IMAGE */}
        <img
          src={coverImageUrl}
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
        />

        {/* User Profile Image */}
        <div className="w-full mx-auto flex justify-center">
          <img
            src={profileImageUrl}
            alt="User Profile"
            className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
          />
        </div>

        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">
            {fullName}
          </h1>
          {/* About */}
          <p className="w-full text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
            {aboutText}
          </p>

          {/* Social Links */}
          <div className="px-2 flex rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-700 dark:bg-opacity-30 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className="p-2 hover:text-primary hover:dark:text-primary">
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* LinkedIn SVG */}
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
            </a>
            {/* Add other social links similarly */}
          </div>

          {/* Cards */}
          <div className="w-full flex gap-4 justify-center items-center mt-10">
            {/* Card 1 */}
            <div className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
              27
            </div>

            {/* Card 2 */}
            <div className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
              777
            </div>

            {/* Card 3 */}
            <div className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
              34
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
