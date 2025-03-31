'use client';

import { Shield, Monitor, Image as ImageIcon, Bell, Boxes, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Pequeno atraso para começar a animação suavemente
    return () => clearTimeout(timer);
  }, []);

  const items = [
    { title: "Controle de Acesso", icon: <Shield size={40} className="text-blue-700 dark:text-blue-300" />, count: 89, link: "/AccessControl/AccessControlPerson" },
    { title: "Lockers", icon: <Monitor size={40} className="text-blue-700 dark:text-blue-300" />, count: 342, link: "/LockerControl/LockersSearch" },
    { title: "Solicitação de Imagens", icon: <ImageIcon size={40} className="text-blue-700 dark:text-blue-300" />, count: 89, link: "/ImageRequest/ImageReqSearch" },
    { title: "Alarmes", icon: <Bell size={40} className="text-blue-700 dark:text-blue-300" />, count: 76, link: "/Alarms/AlarmSearch" },
    { title: "Objetos Esquecidos", icon: <Boxes size={40} className="text-blue-700 dark:text-blue-300" />, count: 124, link: "/ForgettenObjects/FrgObjSearch" },
    { title: "CFTV", icon: <Bell size={40} className="text-blue-700 dark:text-blue-300" />, count: 3592, link: "/CFTV/CftvSearch" },
    { title: "Controle de Visitantes", icon: <Users size={40} className="text-blue-700 dark:text-blue-300" />, count: 583, link: "/VisitorControl/VisitorSearch" }
  ];

  return (
    <main className="p-6 flex min-h-screen flex-col bg-gradient-to-br from-white to-white dark:from-gray-900 dark:to-gray-900 transition-all duration-300">
      {/* Texto de Bem-vindo com suporte ao modo escuro */}
      <div
        className={`scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 transition-all duration-700 ${
          isVisible ? 'opacity-100 animate-slideUpFade2' : 'opacity-0'
        }`}
      >
        <h1 className="text-black dark:text-white ml-3">Bem-vindo ao Sistema de Gestão</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Visualize e gerencie todos os módulos do sistema em um único lugar.
        </p>
      </div>

      {/* Grid de itens com suporte ao modo escuro */}
      <div className="flex m-2 grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`space-y-3 opacity-0 ${
              isVisible ? `animate-slideUpFade` : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-lg hover:scale-103 transition-transform duration-300 relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
               after:w-full after:h-[4px] after:bg-blue-500 after:blur-md after:shadow-[0px_4px_10px_2px_rgba(59,130,246,0.7)]">
              {/* Imagem de fundo */}
              {/* Título e Ícone */}
              <div className="p-4 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3
                  className="tracking-tight text-black dark:text-white text-xl font-semibold"
                >
                  <span>{item.title}</span>
                </h3>
                {item.icon}
              </div>
              <div className="p-4 pt-0">
                <div className="text-2xl text-black dark:text-white font-bold">{item.count}</div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Total de Acessos Registrados
                </p>
                <div className="mt-4">
                  <a href={item.link} className="text-xs text-blue-700 dark:text-blue-400 font-medium hover:underline">
                    Ver detalhes →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
