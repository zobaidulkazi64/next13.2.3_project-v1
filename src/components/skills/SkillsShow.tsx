import React from "react";
import skillsData from "@/contexts/skillsData.json"; // Adjust the path as per your project structure
import Link from "next/link";

type Technology = {
  id: number;
  name: string;
  icon: string;
  link: string;
};

type SkillsShowIcons = {
  databaseTec: Technology[];
  frontendTec: Technology[];
  backendTec: Technology[];
};

const SkillsShow: React.FC = () => {
  const { databaseTec, frontendTec, backendTec } =
    skillsData as SkillsShowIcons;

  const SkillIcon: React.FC<{ tech: Technology }> = ({ tech }) => (
    <Link href={tech.link} target="_blank" rel="noopener noreferrer">
      <picture>
        <img
          className="w-16 h-16"
          src={`https://skillicons.dev/icons?i=${tech.icon}`}
          alt={tech.name}
        />
      </picture>
    </Link>
  );

  return (
    <div className="flex h-screen flex-col items-center translate-x-3 justify-center gap-4 ">
      <h3 className="text-lg font-bold mb-2">Database Technologies</h3>
      <div className="flex gap-3 items-center group transition-all duration-500 hover:-translate-y-2 shadow shadow-purple-400 rounded-lg p-2">
        {databaseTec.map((tech) => (
          <SkillIcon key={tech.id} tech={tech} />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2">Frontend Technologies</h3>
      <div className="flex  gap-3 items-center group transition-all duration-500 hover:-translate-y-2 shadow shadow-purple-400 rounded-lg p-2">
        {frontendTec.map((tech) => (
          <SkillIcon key={tech.id} tech={tech} />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2">Backend Technologies</h3>
      <div className="flex gap-3 items-center group transition-all duration-500 hover:-translate-y-2 shadow shadow-purple-400 rounded-lg p-2">
        {backendTec.map((tech) => (
          <SkillIcon key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default SkillsShow;
