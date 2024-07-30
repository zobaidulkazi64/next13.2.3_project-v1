"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Toast from "@/components/common/Toast";
import FoolishVampire from "@/components/common/card/FoolishVampire";
import ContactForm, { FormData } from "./ContactForm";

interface ContactSectionProps {
  servicesItems: string[];
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

  const handleFormSubmit = async (formData: FormData) => {
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
    <main className="m-9 flex overflow-hidden flex-col lg:flex-row dark:text-white shadow-lg rounded-2xl justify-center">
      <motion.div
        className="flex-1 lg:flex lg:justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-lg flex-1 mx-auto px-4 text-black dark:text-white">
          <FoolishVampire />
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
            servicesItems={servicesItems}
          />
          {toast && (
            <Toast
              type={toast.type}
              message={toast.message}
              isVisible={!!toast}
              onClose={() => setToast(null)}
            />
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default ContactSection;
