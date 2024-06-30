// components/DarkModeToggle.tsx
"use client";
import React from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "@/hooks/useDarkMode"; // Check import path

const DarkModeToggle: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <Switch
      checked={colorTheme === "dark"}
      onChange={() => setTheme()}
      className={`${colorTheme === "dark" ? "bg-gray-300" : "bg-gray-900"}
        relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={`${colorTheme === "dark" ? "translate-x-6" : "translate-x-1"}
          inline-block w-4 h-4 transform bg-grey-200 rounded-full transition-transform`}
      >
        {colorTheme === "dark" ? (
          <MoonIcon className="w-4 h-4 text-yellow-500" />
        ) : (
          <SunIcon className="w-4 h-4 text-yellow-400" />
        )}
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
