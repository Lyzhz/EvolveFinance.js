'use client';

import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verifica se há preferência salva no localStorage quando o componente é carregado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkMode = savedTheme === 'dark';
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.body.classList.add('dark');
      }
    } else {
      // Se não houver preferência salva, verifica o sistema
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      if (prefersDarkMode) {
        document.body.classList.add('dark');
      }
    }
  }, []);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    // Alterando a classe 'dark' no body e salvando a preferência no localStorage
    if (newIsDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-opacity duration-300"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
}
