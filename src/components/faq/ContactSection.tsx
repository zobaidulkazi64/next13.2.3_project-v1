"use client";
import React, { useState } from "react";
import Toast from "@/components/common/Toast";
import CountryOpsigns from "./CountryOpsions";

interface ContactSectionProps {
  servicesItems: string[];
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  services: string[];
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ servicesItems }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: [],
    message: "",
  });

  const [toast, setToast] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prevState) => ({
      ...prevState,
      services: prevState.services.includes(service)
        ? prevState.services.filter((item) => item !== service)
        : [...prevState.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  console.log("Form Data Submitted:", formData);
    try {
        const response = await fetch("", {
            // Adjust the endpoint to your backend API
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        
        
      if (response.ok) {
        setToast({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          services: [],
          message: "",
        });
      } else {
        setToast({
          type: "error",
          message:
            "There was a problem sending your message. Please try again.",
        });
      }

      // Clear the toast message after 3 seconds
      setTimeout(() => {
        setToast(null);
      }, 3000);
    } catch (error) {
      setToast({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-screen object-cover"
          alt="Background"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We’d love to hear from you! Please fill out the form below.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 mt-12 lg:pb-12">
            <div>
              <label className="font-medium">Full name</label>
              <span className="text-red-500 m-2">*</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <span className="text-red-500 m-2">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <div className="font-medium">
                Phone number
                <span className="text-red-500 m-2">Optional</span>
              </div>
              <div className="relative mt-2">
                <div className="absolute inset-y-3 left-0 my-auto h-6 flex items-center border-r pr-2">
                  <CountryOpsigns />
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="+1 (555) 000-000"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-[5.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Services</label>
              <span className="text-red-500 m-2">*</span>
              <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                {servicesItems.map((item, idx) => (
                  <li key={idx} className="flex gap-x-3 text-sm">
                    <div>
                      <input
                        id={`service-${idx}`}
                        type="checkbox"
                        checked={formData.services.includes(item)}
                        onChange={() => handleServiceChange(item)}
                        className="checkbox-item peer hidden"
                      />
                      <label
                        htmlFor={`service-${idx}`}
                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                    </div>
                    <label
                      htmlFor={`service-${idx}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <span className="text-red-500 m-2">*</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
          {toast && (
            <Toast
              type={toast.type}
              message={toast.message}
              isVisible={!!toast}
              onClose={() => setToast(null)}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
