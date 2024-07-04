// pages/index.tsx
import React from "react";
import AboutMe from "@/components/about/AboutMe";

const IndexPage: React.FC = () => {
  // Example data
  const aboutMeData = {
    fullName: "Samuel Abera",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    profileImageUrl:
      "https://avatars.githubusercontent.com/u/105772384?s=400&u=df755c27d467d3921d4dc034868ed982d6ded9bb&v=4",
    coverImageUrl: "https://images.unsplash.com/...",
    linkedinUrl: "https://www.linkedin.com/in/samuel-abera-6593a2209/",
    twitterUrl: "https://twitter.com/Samuel7Abera7",
    facebookUrl: "https://www.facebook.com/",
    youtubeUrl: "https://www.youtube.com/@silentcoder7",
  };

  return (
    <div className="min-h-screen">
      <AboutMe {...aboutMeData} />
    </div>
  );
};

export default IndexPage;
