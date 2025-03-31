'use client';

import { Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="w-full bg-white shadow-md p-1 px-6 flex items-center justify-between">
      
      {/* Espaço para centralizar o texto */}
      <div className="flex-1 flex justify-center">
        <span className="text-lg font-semibold text-gray-800">
          ISS - Infinity Security System
        </span>
      </div>

      {/* Botões de Notificação e Usuário */}
      <div className="flex py-2 items-center space-x-4">
        
        {/* Botão de Notificação */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Botão de Usuário */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition">
          <User size={24} />
        </button>
      </div>
    </header>
  );
}
