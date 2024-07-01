"use client";
import React, { useState } from "react";
import BlogPostData from "@/contexts/BlogPostData";
import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}

const BlogsComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to display per page

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BlogPostData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-32 bg-black dark:bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-white dark:text-black text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="text-gray-400 dark:text-gray-700">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <li
              key={index}
              className="w-full mx-auto group sm:max-w-sm rounded-lg border border-green-300 shadow-xl shadow-green-400/30"
            >
              <Link
                href={post.href}
                className="block overflow-hidden rounded-lg"
              >
                <Image
                  width={500}
                  height={300}
                  src={post.img}
                  loading="lazy"
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 bg-white dark:bg-gray-900">
                  <span className="block text-gray-500 dark:text-gray-400 text-sm">
                    {post.date}
                  </span>
                  <h3 className="mt-2 text-lg text-black dark:text-white duration-150 group-hover:text-green-500 font-semibold">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm duration-150 group-hover:text-green-500">
                    {post.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from(
            { length: Math.ceil(BlogPostData.length / postsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 rounded-md border border-green-300 shadow-md ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                } transition-colors duration-300`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsComponent;
