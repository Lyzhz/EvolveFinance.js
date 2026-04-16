"use client";

import { MoonStar, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggle}
      className="relative rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-800 cursor-pointer"
    >
      {isDarkMode ?
        <SunDim size={30} className="transition-transform duration-200 hover:scale-120 dark:hover:bg-gray-700 rounded-4xl hover:text-gray-900 dark:hover:text-white" />
        :
        <MoonStar size={30} className="transition-transform duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
      }
    </button>
  );

};

export default ThemeToggle;
