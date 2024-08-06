import BlogList from "@/components/ui/blog/BlogList";
import BlogUpdateForm from "@/components/ui/blog/BlogUpdateForm";
import React from "react";

const BlogUpdatePage = () => {
  return (
    <div>
      <BlogUpdateForm bId={2} />
    </div>
  );
};

export default BlogUpdatePage;
