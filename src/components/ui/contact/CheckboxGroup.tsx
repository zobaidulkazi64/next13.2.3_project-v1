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
              className="checkbox-item peer hidden"
            />
            <label
              htmlFor={`service-${idx}`}
              className="relative flex w-5 h-5  peer-checked:bg-purple-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-black dark:after:border-white after:rotate-45"
            ></label>
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
