'use client'
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

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact/all?page=1&limit=10");
        setContacts(response.data.data);


        console.log(response.data.data);
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

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

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
    <div>
      <h1>All Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.company}</td>
              <td>{contact.message}</td>
              <td>
                <button onClick={() => handleEditClick(contact)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedContact && (
        <div>
          <h2>Update Contact</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Company:</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Message:</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Update Contact</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GetAllContact;
