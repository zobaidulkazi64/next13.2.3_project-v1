// src/app/(print)/blogs/[bId]/page.tsx
"use client";
import { BlogType, BlogSchema } from "@/types/BlogType";
import BlogDetail from "@/components/ui/blog/BlogDetails";
import { z } from "zod";

// Define the component to fetch and display blog data
const BlogDetailPage = async ({ params }: { params: { bId: string } }) => {
  const res = await fetch(`https://zobkazi.github.io/api/blogs/${params.bId}`);
  const blogData = await res.json();

  // Validate the fetched data
  const blog = BlogSchema.parse(blogData);

  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  const res = await fetch("https://zobkazi.github.io/api/blogs");
  const blogs: BlogType[] = await res.json();

  // Ensure that blogs conform to the schema
  const validatedBlogs = blogs.map((blog) => BlogSchema.parse(blog));

  // Generate paths with `bId`
  return validatedBlogs.map((blog) => ({
    bId: blog.bId?.toString(),
  }));
}
