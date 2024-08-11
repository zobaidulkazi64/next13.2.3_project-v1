// src/app/(print)/blogs/[bId]/page.tsx
import React from "react";

// Simulate fetching blog IDs (replace this with actual data fetching)
const fetchBlogIds = async () => {
  return ["blog1", "blog2", "blog3"];
};

export async function generateStaticParams() {
  const blogIds = await fetchBlogIds();

  return blogIds.map((bId) => ({
    bId,
  }));
}

const BlogPageById = ({ params }: { params: { bId: string } }) => {
  return <div>Blog ID: {params.bId}</div>;
};

export default BlogPageById;
