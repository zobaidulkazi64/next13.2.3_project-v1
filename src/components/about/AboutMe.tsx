import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="  bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="lg:w-[80%] sm:w-[80%] xs:w-[90%] mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Image
            width={300}
            height={300}
            src="https://avatars.githubusercontent.com/u/105772384?v=4"
            alt="About Me"
            className="w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full shadow-xl border-green-400 border-4"
          />
        </div>
        {/* Article Section */}
        <div className="w-full lg:w-3/1 flex flex-col gap-4 text-dark dark:text-white p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30">
          <h5 className="text-sm text-green-500 font-semibold">About Me</h5>
          <h2 className="text-3xl font-semibold uppercase font-serif">
            Samuel Abera
          </h2>
          <hr className="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
          <p className="text-sm">
            Hello! I am Samuel Abera, a versatile developer specializing in
            bridging the gap between front-end design and back-end
            functionality. My expertise lies in creating seamless user
            experiences by transforming lines of code into interactive and
            intuitive digital solutions. I excel in solving complex problems and
            collaborating effectively with diverse teams to deliver innovative
            solutions.
          </p>
          <p className="text-sm">
            I thrive on embracing the latest technologies to build efficient and
            scalable applications. Passionate about coding and committed to
            excellence, I am dedicated to crafting the future of digital
            experiences. With a strong foundation in Node.js, JavaScript, and
            TypeScript, I consistently push the boundaries of what’s possible in
            web development, ensuring that each project not only meets but
            exceeds user expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
