'use client';
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type ContactType = {
  _id: string;
  name: string;
  email: string;
  company: string;
  message: string;
};

const GetAllContact = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    null
  );
  const [formData, setFormData] = useState<Omit<ContactType, "_id">>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact/all?page=1&limit=10");
        setContacts(response.data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!selectedContact) return;

    try {
      const response = await axios.put(
        `/api/contact?id=${selectedContact._id}`,
        formData
      );
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === selectedContact._id ? response.data.data : contact
        )
      );
      setSelectedContact(null);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleEditClick = (contact: ContactType) => {
    setSelectedContact(contact);
    setFormData({
      name: contact.name,
      email: contact.email,
      company: contact.company,
      message: contact.message,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Company</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td className="py-2 px-4 border-b">{contact.name}</td>
                <td className="py-2 px-4 border-b">{contact.email}</td>
                <td className="py-2 px-4 border-b">{contact.company}</td>
                <td className="py-2 px-4 border-b">{contact.message}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditClick(contact)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedContact && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Update Contact</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Company:</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Message:</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Contact
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GetAllContact;
