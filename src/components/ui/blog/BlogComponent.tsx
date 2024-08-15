import React from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

interface Blog {
  bId: number;
  author: {
    id: string;
    username: string;
    fullname: string;
  };
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  url?: string;
}

interface BlogComponentProps {
  blogs: Blog[];
  totalPages: number;
  currentPage: number;
  nextLink: string | null;
  prevLink: string | null;
  searchQuery: string;
  onSearch: (search: string) => void;
  onPageChange: (page: number) => void;
}

const BlogComponent: React.FC<BlogComponentProps> = ({
  blogs = [],
  totalPages,
  currentPage,
  nextLink,
  prevLink,
  searchQuery,
  onSearch,
  onPageChange,
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Search Bar */}
      <motion.div
        className="mb-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <motion.input
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </form>
        {searchQuery && (
          <motion.p
            className="mt-4 text-4xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Results for:<>_</> {searchQuery}
          </motion.p>
        )}
      </motion.div>

      {/* Blog List */}
      <div className="container m-auto">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <motion.div
              key={blog.bId}
              className="rounded-md p-4 transition-shadow"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href={`/blogs/${blog.bId}`}>
                <motion.h2
                  className="text-lg font-semibold"
                  whileHover={{ color: "#1E40AF" }} // Change color on hover
                >
                  {blog.title}
                </motion.h2>
                <p className="text-xl text-gray-600">{blog.subtitle}</p>
                <blockquote className="text-gray-500">
                  {blog.author.fullname}
                </blockquote>
              </Link>
            </motion.div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default BlogComponent;
