import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { dropdownMenuData } from "@/contexts/data/dropdownMenuData";

const renderMenuItems = (items: any[]) => {
  return items.map((item, index) => {
    if (item.type === "separator") {
      return (
        <DropdownMenu.Separator
          key={index}
          className="my-1 "
        />
      );
    }

    if (item.type === "submenu") {
      return (
        <DropdownMenu.Sub key={index}>
          <DropdownMenu.SubTrigger className="px-4 py-2 text-sm bg-green-300 dark:bg-green-700 text-gray-700 dark:text-gray-300 hover:bg-purple-300 dark:hover:bg-purple-400">
            {item.label} <span className="ml-2">^</span>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent className="w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {renderMenuItems(item.items)}
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      );
    }

    return (
      <DropdownMenu.Item
        key={index}
        className={`px-4 py-2 text-sm ${
          item.color === "red"
            ? "text-red-600 dark:text-red-400"
            : "text-gray-700 dark:text-gray-300"
        } hover:bg-purple-300 dark:hover:bg-purple-400`}
      >
        {item.href ? (
          <Link href={item.href}>
            <samp className="flex items-center justify-between w-full">
              {item.label}
              {item.shortcut && (
                <span className="ml-auto text-gray-300">{item.shortcut}</span>
              )}
            </samp>
          </Link>
        ) : (
          <>
            {item.label}
            {item.shortcut && (
              <span className="ml-auto text-gray-500">{item.shortcut}</span>
            )}
          </>
        )}
      </DropdownMenu.Item>
    );
  });
};

const DropdownMenuComponent = () => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-purple-300 dark:hover:bg-purple-500">
            Hire Me
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="start"
          sideOffset={5}
          className="w-48 bg-slate-50 border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          {renderMenuItems(dropdownMenuData.items)}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuComponent;
