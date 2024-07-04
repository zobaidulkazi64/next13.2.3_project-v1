'use client';
// components/BlogsComponent.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import IconButtons from "../ui-utils/IconButtons";

interface Post {
  _id: string;
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
}

interface Pagination {
  totalBlogs: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  nextLink?: string | null;
  prevLink?: string | null;
}

const BlogsComponent: React.FC = () => {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async (page: number, limit: number, search: string) => {
      try {
        let url = `/api/blogs?page=${page}&limit=${limit}`;
        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data.blogs);
          setPagination(data.data.pagination);
        } else {
          console.error("Failed to fetch blogs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(currentPage, postsPerPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination when searching
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-32 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className=" text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="font-medium">
            Blogs that are loved by the community. Updated every hour.
          </p>
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 mt-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <li
              key={post._id}
              className="w-full mx-auto group sm:max-w-sm rounded-lg border border-green-300 shadow-xl shadow-green-400/30"
            >
              <Link href={post.href} passHref>
                <a className="block overflow-hidden rounded-lg">
                  <div className="p-4 md:p-6">
                    <span className="block mb-2 font-medium text-sm">
                      {post.date}
                    </span>
                    <h3 className="mt-2 text-lg  duration-150 group-hover:text-green-500 font-semibold">
                      {post.title}
                    </h3>
                    <p className="mt-2  text-sm duration-150 group-hover:text-green-500">
                      {post.desc}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {pagination &&
            Array.from({ length: pagination.totalPages }, (_, i) => (
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
            ))}
        </div>
      </div>

      {/* <Thanks /> */}

      <IconButtons />
    </section>
  );
};

export default BlogsComponent;
