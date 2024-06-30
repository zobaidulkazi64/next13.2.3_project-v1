// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

const useDarkMode = (): [string, () => void] => {
  const [colorTheme, setColorTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ?? "light";
    } else {
      return "light"; // Default to light theme during SSR
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(colorTheme);
    localStorage.setItem("theme", colorTheme);
  }, [colorTheme]);

  const toggleDarkMode = () => {
    const newTheme = colorTheme === "light" ? "dark" : "light";
    setColorTheme(newTheme);
  };

  return [colorTheme, toggleDarkMode];
};

export default useDarkMode;
