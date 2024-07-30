import React from "react";
import Link from "next/link";
import { socialLinks } from "@/contexts/socialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              aria-label={name}
              className="shadow-lg shadow-gray-500/50 p-2 rounded-full dark:text-gray-700 hover:text-gray-400"
            >
              <Icon className="w-6 h-6" /> {/* Render the icon component */}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
