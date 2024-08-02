import React from "react";
import InputField from "./InputField";
import CheckboxGroup from "./CheckboxGroup";
import TextareaField from "./TextareaField";
import CountryOpsigns from "./CountryOpsions";

export interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  services: string[];
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (formData: FormData) => Promise<void>;
  servicesItems: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  setFormData,
  onSubmit,
  servicesItems,
}) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="h-svh">
      <InputField
        label="Full name"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <div>
        <div className="font-medium mt-2  text-black dark:text-white">
          Phone number
          <span className="text-red-500 m-2 text-sm font-light">Optional</span>
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
            className="w-full pl-[5.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-purple-800 dark:text-gray-800 shadow-sm rounded-lg"
          />
        </div>
      </div>
      <CheckboxGroup
        label="Services"
        items={servicesItems}
        selectedItems={formData.services}
        onChange={handleServiceChange}
      />
      <TextareaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
      />
      <button
        type="submit"
        className="w-full mt-4 px-4 py-2 text-white font-medium bg-purple-500  dark:bg-purple-950 hover:bg-purple-700 dark:hover:bg-purple-500 active:bg-gray-900 rounded-lg duration-150"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
