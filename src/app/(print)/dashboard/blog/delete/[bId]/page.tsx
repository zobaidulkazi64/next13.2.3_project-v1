// src/app/dashboard/blog/delete/[bId]/page.tsx
import React from "react";

// Simulate fetching blog IDs (replace this with actual data fetching)
const fetchBlogIds = async () => {
  return ["blog1", "blog2", "blog3"]; // Replace with real blog IDs
};

export async function generateStaticParams() {
  const blogIds = await fetchBlogIds();

  return blogIds.map((bId) => ({
    bId,
  }));
}

const DeleteBlogPage = ({ params }: { params: { bId: string } }) => {
  return <div>Delete Blog ID: {params.bId}</div>;
};

export default DeleteBlogPage;
