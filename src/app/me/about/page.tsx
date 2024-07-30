// pages/index.tsx
import React from "react";
import AboutMe from "@/components/ui/about/AboutMe";
import EducationCard from "@/components/ui/about/EducationDetail";

// Example data for education details
const educationDetails = [
  {
    courseName: "Diploma In Engineering",
    schoolName: "Mymensingh Polytechnic Institute",
    location: "Mymensingh, Bangladesh",
    subjects: ["Mechanical Engineering", "Tools Design", "Projects Management"],
    years: "2019 - 2023",
    length: "4 years",
    results: "GPA: 3.8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    courseName: "Secondary School Certificate",
    schoolName: "Example Institute of Technology",
    location: "Ulipur, Kurigram, Bangladesh",
    subjects: ["Mathematics", "Networking Basics", "Information Technology"],
    years: "2017 - 2019",
    length: "2 years",
    results: "GPA: 4.71",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    courseName: "Full Stack Army",
    schoolName: "Stack Learner",
    location: "Dhaka, Bangladesh",
    subjects: [
      "Web Development",
      "Advanced Javascript",
      "Data Structures",
      "Algorithms",
      "APIs",
      "Microservices",
      "System Design",
      "DevOps",
      "Cloud Computing",
    ],
    years: "2019 - remaining",
    length: "remaining",
    results: "Full Time",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more education details as needed
];

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
    facebookUrl: "https://www.facebook.com/zobkazi",
    youtubeUrl: "https://www.youtube.com/@zobaidulkazi",
  };

  return (
    <div className="min-h-screen">
      <AboutMe {...aboutMeData} />

      <EducationCard educationDetails={educationDetails} />
    </div>
  );
};

export default AboutPage;
