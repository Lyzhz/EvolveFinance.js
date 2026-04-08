'use client';

import { Bell, SunDim, MoonStar, UserCircle2Icon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TopBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function TopBar({ toggleTheme, isDarkMode }: TopBarProps) {
  const fullText = "Sistema de Cameras"; // Texto para animação
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Animação para o texto na topbar
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <header className="w-full border dark:bg-gray-800 shadow-md p-1 px-6 flex items-center justify-between">
      {/* Centraliza o texto */}
      <div className="flex-1 flex justify-center">
        <motion.span
          className="text-2xl font-semibold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.span>
      </div>

      {/* Botões: Notificação, Usuário e Tema */}
      <div className="flex py-2 items-center space-x-4">
        {/* Notificação */}
        <button className="relative p-2 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 rounded-4xl cursor-pointer hover:text-gray-900 dark:hover:text-white transition-transform duration-200 hover:scale-110">
          <Bell size={25} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Usuário */}
        <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition dark:hover:bg-gray-700 rounded-4xl cursor-pointer transition-transform duration-200 hover:scale-110">
          <UserCircle2Icon size={25} />
        </button>

        {/* Botão de Tema */}
        <button 
          onClick={toggleTheme} 
          className="relative rounded-full p-1 flex items-center justify-center transition-all duration-300 ease-out bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-800 cursor-pointer"
        >
          {isDarkMode ? 
            <SunDim size={30} className="transition-transform duration-200 hover:scale-120 dark:hover:bg-gray-700 rounded-4xl hover:text-gray-900 dark:hover:text-white" /> 
            : 
            <MoonStar size={30} className="transition-transform duration-200 hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
          }
        </button>
      </div>
    </header>
  );
}
