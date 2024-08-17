"use client"; // Add this line at the top

import React from "react";
import { motion } from "framer-motion";
import create from "zustand";
import Link from "next/link";
import NotFoundPage from "@/app/not-found";
import Loading from "@/components/common/Loading";

interface BlogStore {
  copied: boolean;
  setCopied: (value: boolean) => void;
}

const useBlogStore = create<BlogStore>((set) => ({
  copied: false,
  setCopied: (value) => set({ copied: value }),
}));

interface Author {
  id: string;
  username: string;
  fullname: string;
}

interface Blog {
  _id: string;
  bId: number;
  author: Author;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  image: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogDetailsProps {
  params: {
    bId: string;
  };
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ params }) => {
  const { bId } = params;
  const { copied, setCopied } = useBlogStore();
  const currentBlogId = parseInt(bId, 10); // Convert blog ID to a number

  const [blog, setBlog] = React.useState<Blog | null>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchBlogDetails = async (id: number) => {
    try {
      const response = await fetch(
        `https://message-aether.onrender.com/api/blog/${id}`
      );
      const data = await response.json();
      if (data.success && data.data) {
        setBlog(data.data);
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBlogDetails(currentBlogId);
  }, [currentBlogId]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  const nextBlogId = currentBlogId + 1;
  const prevBlogId = currentBlogId - 1;

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {blog.title}
      </motion.h1>
      <motion.h2
        className="text-2xl text-gray-600 dark:text-gray-300 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {blog.subtitle}
      </motion.h2>
      <motion.img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg mb-6 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
        {blog.description}
      </p>
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-400 hover:underline mb-6 block"
      >
        Read more
      </a>
      <motion.div
        className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl text-gray-900 dark:text-white mb-2">
          Code Example
        </h3>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-auto">
          {blog.code}
        </pre>
        <button
          onClick={() => copyToClipboard(blog.code)}
          className={`absolute top-4 right-4 text-sm py-2 px-4 rounded-lg ${
            copied ? "bg-green-500" : "bg-blue-500"
          } text-white hover:bg-blue-600 dark:hover:bg-blue-400 transition`}
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </motion.div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Author: {blog.author.fullname}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Created at: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div className="flex justify-between mt-8">
        {prevBlogId > 0 ? (
          <Link href={`/blogs/${prevBlogId}`}>
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300 focus:outline-none active:scale-95">
              Previous
            </button>
          </Link>
        ) : (
          <button className="bg-gray-600 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Previous
          </button>
        )}
        {true ? ( // Assuming there are always subsequent blogs; adjust based on actual data
          <Link href={`/blogs/${nextBlogId}`}>
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300 focus:outline-none active:scale-95">
              Next
            </button>
          </Link>
        ) : (
          <button className="bg-gray-600 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
