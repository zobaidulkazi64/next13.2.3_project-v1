// src/app/blogs/[bId]/page.tsx

import { notFound } from "next/navigation";
import { fetchBlogById, fetchBlogs } from "@/lib/blogBid";

interface BlogProps {
  params: {
    bId: string;
  };
}

interface Blog {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
}

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((blog: Blog) => ({
    bId: blog.bId.toString(), // Use bId as a string
  }));
}

const BlogPage: React.FC<BlogProps> = async ({ params }) => {
  const bId = parseInt(params.bId, 10); // Convert bId to a number

  const blog = await fetchBlogById(bId);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {blog.title}
      </h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
        {blog.subtitle}
      </h2>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg mb-6 shadow-md"
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
      <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 relative">
        <h3 className="text-xl text-gray-900 dark:text-white mb-2">
          Code Example
        </h3>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-auto">
          {blog.code}
        </pre>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Author: {blog.author.fullname}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Created at: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogPage;
