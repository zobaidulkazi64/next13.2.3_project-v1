"use client";
import Link from "next/link";
import React, { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Number of projects to display per page

  // Calculate the number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get the projects for the current page
  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Handle page changes
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-8 p-8 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] shadow-lg rounded-2xl lg:p-12">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="max-w-xs rounded-lg shadow-lg shadow-purple-500 border border-purple-500 p-1 overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <picture>
              <img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.name}
              />
            </picture>
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

      {/* Pagination Controls */}
      <div className="flex justify-between w-full max-w-md mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
