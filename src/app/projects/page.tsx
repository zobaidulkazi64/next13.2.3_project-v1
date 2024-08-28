import React from "react";
import ProjectShowcase from "@/components/ui-utils/ProjectShowcase";

const ProjectsPage = () => {
  const projects = [
    {
      name: "api.purr.rescues",
      description:
        "The User Pet Adoption and Rescue Platform is developed using a microservices architecture, with several main services responsible for different functionalities:",
      techStack: [
        "Microservice",
        "TypeScript",
        "Expressjs",
        "Docker",
        "PostgreSQL",
        "Redis",
      ],
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "https://github.com/zobkazi/api.purr.rescues",
      docsUrl:
        "https://www.postman.com/zobkaziapi/workspace/purrrescueapi/collection/21307415-6da98971-e243-4a25-99d1-d50ddd6abc7c",
      dockerUrl: "https://hub.docker.com/r/zobaidulkazihub/purrrescue",
    },
    {
      name: "Project Two",
      description:
        "A job board API for managing job postings and applications. This API allows users to post job listings, apply for jobs, and manage job applications using Express and Mongoose.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "kafka",
        "Docker",
      ],
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "https://github.com/zobkazi/job-board-api",
    },

    // Add more projects as needed
  ];

  return (
    <div>
      <h1 className="text-3xl text-purple-500 text-center font-bold my-8">
        My Projects
      </h1>
      <ProjectShowcase projects={projects} />
    </div>
  );
};

export default ProjectsPage;
