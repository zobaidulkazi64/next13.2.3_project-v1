import React from "react";

interface CheckboxGroupProps {
  label: string;
  items: string[];
  selectedItems: string[];
  onChange: (item: string) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  items,
  selectedItems,
  onChange,
}) => (
  <div>
    <label className="font-medium">{label}</label>
    <span className="text-red-500 ">*</span>
    <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-x-3 text-sm">
          <div>
            <input
              id={`service-${idx}`}
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => onChange(item)}
              className="w-4 h-4 text-purple-600 bg-purple-700 border-purple-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-purple-800 focus:ring-2 dark:bg-purple-700 dark:border-purple-700"
            />
          </div>
          <label
            htmlFor={`service-${idx}`}
            className="cursor-pointer text-black dark:text-white"
          >
            {item}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default CheckboxGroup;
