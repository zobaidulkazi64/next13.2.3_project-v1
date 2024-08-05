import React from "react";

interface InputFieldProps {
  id: string;
  className?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <div>
    <label className="font-medium">{label}</label>
    {required && <span className="text-red-500 m-2">*</span>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className=" mt-2 px-3 py-2 text-black font-mono dark:text-white bg-transparent outline-none border focus:border-purple-800 shadow-sm rounded-lg"
    />
  </div>
);

export default InputField;
