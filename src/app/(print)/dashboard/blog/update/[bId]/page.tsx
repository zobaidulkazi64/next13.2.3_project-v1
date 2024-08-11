// src/app/dashboard/blog/update/[bId]/page.tsx
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

const UpdateBlogPage = ({ params }: { params: { bId: string } }) => {
  return <div>Update Blog ID: {params.bId}</div>;
};

export default UpdateBlogPage;
