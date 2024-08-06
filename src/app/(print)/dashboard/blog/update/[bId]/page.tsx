// app/dashboard/blog/update/[bId]/page.tsx

"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import BlogUpdateForm from "@/components/ui/blog/BlogUpdateForm";

const BlogUpdatePage: React.FC = () => {
  const { bId } = useParams(); // Get the route parameter

  // Ensure bId is available and is a valid number
  if (!bId) return <p>Loading...</p>;

  return (
    <div>
      <BlogUpdateForm bId={parseInt(bId as string, 10)} />
    </div>
  );
};

export default BlogUpdatePage;
