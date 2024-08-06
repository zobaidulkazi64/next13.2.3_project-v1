"use client"
import { BlogType } from '@/types/BlogType';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const fetchBlogs = async (page: number, limit: number) => {
  const res = await fetch(`/api/blogs?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    nextPage: null,
    prevPage: null,
  });
  const limit = 10; // Number of blogs per page

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs(pagination.currentPage, limit);
        setBlogs(data.blogs);
        setPagination(data.pagination);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    loadBlogs();
  }, [pagination.currentPage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {blogs.map((blog) => (
          <div key={blog.bId} className="border rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.subtitle}</p>
            <Link href={`/blogs/${blog.bId}`}>
              <p className="text-blue-500 hover:underline">Read more</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          disabled={!pagination.prevPage}
          onClick={() => setPagination((prev) => ({
            ...prev,
            currentPage: pagination.prevPage || 1,
          }))}
          className={`px-4 py-2 border rounded ${!pagination.prevPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          disabled={!pagination.nextPage}
          onClick={() => setPagination((prev) => ({
            ...prev,
            currentPage: pagination.nextPage || pagination.currentPage,
          }))}
          className={`px-4 py-2 border rounded ${!pagination.nextPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
