// pages/dashboard/blog/update/[bId].tsx

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const BlogUpdateForm: React.FC = () => {
  const router = useRouter();
  const { bId } = router.query;

  const [blog, setBlog] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (bId) {
      fetchBlog(bId);
    }
  }, [bId]);

  const fetchBlog = async (id: string | string[]) => {
    try {
      const response = await fetch(`/api/blogs/${id}`);
      if (!response.ok) {
        toast.error("Failed to fetch blog");
        return;
      }
      const data = await response.json();
      setBlog(data);
      setTitle(data.title);
      setContent(data.content);
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error("Failed to fetch blog");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/blogs/${bId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        toast.error("Failed to update blog");
        return;
      }

      toast.success("Blog updated successfully");
      router.push("/dashboard/blog");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container p-7 lg:w-1/2 md:w-2/3 m-auto">
      <h1 className="text-3xl font-bold mb-4">Update Blog</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogUpdateForm;
