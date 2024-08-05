'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { BlogSchema } from '@/types/BlogType';
// import { Toast } from '@/components/common/Toast';
import InputField from '../contact/InputField';
import TextareaField from '../contact/TextareaField';

type FormValues = z.infer<typeof BlogSchema>;

const BlogForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    title: '',
    subtitle: '',
    description: '',
    code: '',
    image: '',
    url: '',
    tags: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'tags' ? value.split(',').map(tag => tag.trim()) : value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = BlogSchema.parse(formData);
      console.log('Form Data Submitted:', validatedData);
      // Add the API call here to submit the data
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <InputField
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
            Subtitle
          </label>
          <InputField
            id="subtitle"
            name="subtitle"
            type="text"
            value={formData.subtitle}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <TextareaField
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Code
          </label>
          <TextareaField
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>handleFormSubmit
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            id="url"
            name="url"
            type="text"
            value={formData.url}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            name="tags"
            type="text"
            value={formData.tags.join(', ')}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
