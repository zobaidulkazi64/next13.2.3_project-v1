// src/lib/blogs.ts

export async function fetchBlogs() {
  const response = await fetch("https://message-aether.onrender.com/api/blogs");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
}

export async function fetchBlogById(id: number) {
  const response = await fetch(
    `https://message-aether.onrender.com/api/blog/${id}`
  );
  if (!response.ok) {
    return null;
  }
  return response.json();
}
