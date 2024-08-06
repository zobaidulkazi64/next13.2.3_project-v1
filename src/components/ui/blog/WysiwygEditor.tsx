"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define a TypeScript interface for Blog
interface Blog {
  title: string;
  content: string;
}

// Define modules and formats for ReactQuill
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "code-block"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
];

const WysiwygDashboard = () => {
  // Initialize state with explicit typing
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [newBlog, setNewBlog] = useState<Blog>({
    title: "",
    content: "",
  });

  const saveBlog = () => {
    // Update state with the new blog
    setBlogs([...blogs, newBlog]);
    setNewBlog({
      title: "",
      content: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Dashboard</h1>

      <input
        type="text"
        placeholder="Blog Title"
        value={newBlog.title}
        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />

      <ReactQuill
        value={newBlog.content}
        onChange={(content) => setNewBlog({ ...newBlog, content })}
        modules={modules}
        formats={formats}
        className="mb-4"
      />

      <button
        onClick={saveBlog}
        className="px-4 py-2 bg-teal-500 text-white rounded mb-4"
      >
        Save Blog
      </button>

      <div>
        {blogs.map((blog, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WysiwygDashboard;
