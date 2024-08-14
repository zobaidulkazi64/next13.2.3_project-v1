"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import React from "react";
import CommentComponent from "@/components/ui/blog/CommentComponent";

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
  code: string;
  image: string;
  url: string;
  metadata: {
    tags: string[];
    category: string[];
  };
  permissions: {
    read: boolean;
    write: boolean;
    edit: boolean;
    delete: boolean;
  };
  createdAt: string;
}

async function fetchBlogDetails(bId: number): Promise<Blog | null> {
  try {
    const res = await fetch(
      `https://message-aether.onrender.com/api/blog/${bId}`
    );

    if (!res.ok) {
      console.error("Error fetching blog:", res.statusText);
      return null;
    }

    const data = await res.json();

    if (data.success && data.data) {
      return data.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

const BlogDetailPage: React.FC<{ params: { bId: string } }> = ({ params }) => {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const blogId = params.bId;

  useEffect(() => {
    const fetchData = async () => {
      const blogData = await fetchBlogDetails(Number(params.bId));
      if (!blogData) {
        notFound(); // Redirect to not found if blog doesn't exist
      }
      setBlog(blogData);
    };

    fetchData();
  }, [params.bId]);

  if (!blog) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(blog.createdAt));

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <h2 className="text-xl font-semibold mb-2">{blog.subtitle}</h2>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <p className="text-gray-500 mb-4">
        <strong>Author:</strong> {blog.author.fullname}
      </p>
      <p className="text-gray-500 mb-4">
        <strong>Created At:</strong> {formattedDate}
      </p>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-6 max-w-full h-auto"
        />
      )}
      <div className="bg-gray-700 w-11/12 h-[20vh] p-4 rounded">
        {blog.code}
      </div>
      <p className="mt-4">
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Read more
        </a>
      </p>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => router.push(`/blogs/${Number(params.bId) - 1}`)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/blogs/${Number(params.bId) + 1}`)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          Next
        </button>
      </div>
      <CommentComponent blogId={blogId} key={blogId} />
    </div>
  );
};

export default BlogDetailPage;
