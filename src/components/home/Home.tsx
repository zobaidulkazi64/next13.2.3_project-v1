import Link from "next/link";
import React from "react";
import Footer from "@/components/footer/Footer";

const headline = "Ready to solve your complex project challenges.";
const subheadline = "";
const description =
  "I bridge the gap between front-end design and back-end functionality. I create seamless user experiences by transforming lines of code into interactive and intuitive digital solutions. I solve complex problems and collaborate effectively. I thrive on innovation, embracing the latest technologies to build efficient and scalable applications. Passionate about coding and committed to excellence, I am dedicated to crafting the future of digital experiences.";
const buttonText = "Get Started";
const forgetText = "How can I help as a full-stack developer ?";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen   flex flex-col items-center justify-center text-center px-4 py-20">
      <Link
        target="_blank"
        href=""
        className="border shadow-md border-green-300 dark:border-green-300 rounded-lg py-2 px-4 text-black dark:text-white text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-700"
      >
        {forgetText}
      </Link>
      <h1 className="mx-auto font-display text-sm lg:text-3xl md:text-2xl font-bold tracking-normal text-dark dark:text-white">
        {headline}
        <span className="relative whitespace-nowrap text-green-500">
          {subheadline}
        </span>
      </h1>
      <h2 className="mx-auto w-4/5 mt-12 text-sm lg:text-2xl md:text-xl font-medium text-justify leading-tight">
        {description}
      </h2>

      <Link
        target="_blank"
        className="bg-green-600 dark:bg-green-400 rounded-xl text-white dark:text-black font-medium px-4 py-3 shadow-xl shadow-slate-400 sm:mt-10 mt-8 hover:bg-green-600 dark:hover:bg-green-400 transition"
        href="https://calendly.com/zobaidulkazi/30min"
      >
        {buttonText}
      </Link>

      <Footer />

      <Link
        className=" bg-gray-100 dark:bg-gray-800"
        href="https://wakatime.com/@f22f5f67-c272-4052-bc4f-b9ee26dfabff"
        target="_blank"
      >
        <picture>
          <img
            src="https://wakatime.com/badge/user/f22f5f67-c272-4052-bc4f-b9ee26dfabff.svg"
            alt="Total time coded since May 31 2024"
          />
        </picture>
      </Link>
    </div>
  );
};

export default HomePage;
