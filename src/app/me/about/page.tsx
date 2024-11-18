// pages/index.tsx
import React from "react";
import AboutMe from "@/components/ui/about/AboutMe";
import ChooseOne from "@/components/ui/projects/ChooseOne";
import Footer from "@/components/common/footer/Footer";


// Example data for education details


const AboutPage: React.FC = () => {
  // Example data
  const aboutMeData = {
    fullName: "Zobaidul Kazi",
    aboutText:
      "I am a passionate Full Stack Developer with a deep expertise in building scalable web applications and tackling complex problems.I am a dedicated and passionate Full Stack Developer with a strong background in creating scalable and efficient web applications. My expertise lies in both frontend and backend development, allowing me to build comprehensive digital solutions from the ground up. Here’s a bit more about who I am and where you can find me online. Here’s a bit more about me:",
    profileImageUrl:
      "https://avatars.githubusercontent.com/u/105772384?s=400&u=df755c27d467d3921d4dc034868ed982d6ded9bb&v=4",
    coverImageUrl:
      "https://github.com/zobkazi/zobkazi.github.io/blob/main/src/assets/images/@zobaidulkazi.jpg?raw=true",
    linkedinUrl: "https://www.linkedin.com/in/zobaidulkazi/",
    twitterUrl: "https://x.com/zobaidulkazi",
    telegramUrl: "https://t.me/zobaidulkazi",
  };

  return (
    <div className="min-h-screen">
      <AboutMe {...aboutMeData} />

      <hr className="my-8 border-t-2 border-dashed border-purple-500 opacity-50 w-full" />

      <ChooseOne />

      <Footer />
    </div>
  );
};

export default AboutPage;
