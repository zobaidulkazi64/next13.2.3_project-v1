"use client";

import React, { useState } from "react";
import { z } from "zod";
import { BlogSchema } from "@/types/BlogType";
import { toast } from "react-toastify";
import InputField from "../contact/InputField";
import TextareaField from "../contact/TextareaField";

type FormValues = z.infer<typeof BlogSchema>;

const BlogForm: React.FC = ({}) => {
  const [formData, setFormData] = useState<FormValues>({
    title: "",
    subtitle: "",
    description: "",
    code: "",
    image: "",
    url: "",
    tags: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = BlogSchema.parse(formData);
      console.log("Form Data Submitted:", validatedData);

      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        toast.error("There was a problem saving the blog. Please try again.");
        return;
      }

      const data = await response.json();

      // Reset the form
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        code: "",
        image: "",
        url: "",
        tags: [],
      });

      toast.success("Blog saved successfully");
    } catch (error) {
      console.error("Validation or submission failed:", error);
      toast.error("There was a problem saving the blog. Please try again.");
    }
  };

  return (
    <div className="container p-7 lg:w-1/2 md:w-2/3 m-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Input Form</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <InputField
              required
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block  border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle
            </label>
            <InputField
              required
              id="subtitle"
              name="subtitle"
              type="text"
              value={formData.subtitle}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="">
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <TextareaField
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              label={""}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Code
            </label>
            <TextareaField
              name="code"
              value={formData.code}
              onChange={handleChange}
              label={""}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <InputField
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            URL
          </label>
          <InputField
            id="url"
            name="url"
            type="text"
            value={formData.url}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags (comma separated)
          </label>
          <InputField
            id="tags"
            name="tags"
            type="text"
            placeholder="tag1, tag2, tag3"
            value={formData.tags.join(", ")}
            onChange={handleChange}
            className="block text-sm font-medium text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
