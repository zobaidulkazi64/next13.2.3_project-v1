import Link from "next/link";
import React from "react";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  docsUrl?: string;
  dockerUrl?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] shadow-lg rounded-2xl lg:p-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-xs rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            className="w-full h-48 object-cover"
            src={project.imageUrl}
            alt={project.name}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-purple-600 text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-600 transition-colors"
            >
              View Project
            </Link>
            {project.docsUrl && (
              <Link
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition-colors ml-2"
              >
                View Docs
              </Link>
            )}
            {project.dockerUrl && (
              <Link
                href={project.dockerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition-colors ml-2"
              >
                View Docker
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
