import React from "react";

interface TextareaFieldProps {
  id?: string;
  label?: string;
  name?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="font-medium">{label}</label>
    {required && <span className="text-red-500 m-2">*</span>}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder="Type your message here"
      className="w-full mt-2 h-36 px-3 text-black font-mono dark:text-white py-2 resize-none appearance-none bg-transparent outline-none border focus:border-purple-800 shadow-sm rounded-lg "
    ></textarea>
  </div>
);

export default TextareaField;
