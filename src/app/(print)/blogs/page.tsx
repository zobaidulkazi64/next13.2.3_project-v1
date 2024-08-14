"use client";

import { useState, useEffect } from "react";
import BlogComponent from "@/components/ui/blog/BlogComponent"; // Adjust the path as necessary
import { motion } from "framer-motion";

const BlogPage = () => {
  const [blogsData, setBlogsData] = useState({
    blogs: [],
    totalPages: 0,
    currentPage: 1,
    nextLink: null,
    prevLink: null,
    searchQuery: "",
  });

  const fetchBlogs = async (page = 1, search = "") => {
    try {
      const res = await fetch(
        `https://message-aether.onrender.com/api/blog?page=${page}&search=${encodeURIComponent(
          search
        )}`
      );
      const data = await res.json();
      if (data.success) {
        setBlogsData({
          blogs: data.data.blogs,
          totalPages: data.data.totalPages,
          currentPage: data.data.currentPage,
          nextLink: data.data.nextLink,
          prevLink: data.data.prevLink,
          searchQuery: search,
        });
      } else {
        console.error("Failed to fetch blogs:", data.message);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSearch = (search: string) => {
    fetchBlogs(1, search);
  };

  const handlePageChange = (page: number) => {
    fetchBlogs(page, blogsData.searchQuery);
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BlogComponent
        blogs={blogsData.blogs}
        totalPages={blogsData.totalPages}
        currentPage={blogsData.currentPage}
        nextLink={blogsData.nextLink}
        prevLink={blogsData.prevLink}
        searchQuery={blogsData.searchQuery}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
      />
    </motion.div>
  );
};

export default BlogPage;
