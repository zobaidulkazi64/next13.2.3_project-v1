// components/BlogDetail.tsx
"use client";
import { BlogType } from "@/types/BlogType";

const BlogDetail = ({ blog }: { blog: BlogType }) => {
  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <h2 className="text-xl font-semibold mb-2">{blog.subtitle}</h2>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      {blog.image && <img src={blog.image} alt={blog.title} className="mb-4" />}
      <pre className="bg-gray-100 p-4 rounded">{blog.code}</pre>
      <p className="text-gray-600 text-sm">
        Date and Time: {new Date(blog.createdAt as string).toLocaleString()}
      </p>
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default BlogDetail;
