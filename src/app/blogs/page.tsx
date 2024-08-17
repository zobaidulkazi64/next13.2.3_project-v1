import React from "react";
import Link from "next/link";

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

interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    nextLink: string | null;
    prevLink: string | null;
    blogs: Blog[];
  };
}

const BlogsPageClient: React.FC = async () => {
  const response = await fetch(
    "https://message-aether.onrender.com/api/blog/?page=1",
    {
      cache: "no-store",
    }
  );

  const data: BlogResponse = await response.json();
  const blogs = data?.data?.blogs || [];
  const { nextLink, prevLink, totalCount, currentPage } = data.data;

  return (
    <div className="container m-auto p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <p className="mb-6 text-gray-300">Total Blogs: {totalCount}</p>

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="mb-6 p-4 rounded-lg shadow-md bg-purple-100 dark:bg-gray-800 hover:bg-purple-300 dark:hover:bg-purple-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-lg">{blog.subtitle}</p>
            <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
              <p>By: {blog.author.fullname}</p>
              <p>Created on: {new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
            <Link href={`/blogs/${blog.bId}`}>
              <p className="text-blue-400 hover:text-blue-300 hover:underline mt-3 cursor-pointer">
                Read more
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-8">
        {prevLink ? (
          <Link href={prevLink}>
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300 focus:outline-none active:scale-95">
              Previous
            </button>
          </Link>
        ) : (
          <button className="bg-gray-600 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed">
            Previous
          </button>
        )}

        <span className="text-white">Page {currentPage}</span>

        {nextLink ? (
          <Link href={nextLink}>
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

export default BlogsPageClient;
