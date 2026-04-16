"use client";

import { Loader, MoonStar, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
  		<button
        className="relative rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-800 cursor-pointer"
      >
        <Loader className="animate-spin" />
      </button>
		);
	}

  return (
    <button
      onClick={theme == "dark" ? () => setTheme("light") : () => setTheme("dark")}
      className="relative rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-800 cursor-pointer"
    >
      {theme == "dark" ?
        <SunDim size={30} className="transition-transform duration-200 hover:scale-120 dark:hover:bg-gray-700 rounded-4xl hover:text-gray-900 dark:hover:text-white" />
        :
        <MoonStar size={30} className="transition-transform duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
      }
    </button>
  );

};

export default ThemeToggle;
