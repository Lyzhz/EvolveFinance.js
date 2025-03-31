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
    { title: "Controle de Acesso", icon: <Shield size={40} className="text-blue-700" />, count: 89, link: "/AccessControl/AccessControlPerson" },
    { title: "Lockers", icon: <Monitor size={40} className="text-blue-700" />, count: 342, link: "/LockerControl/LockersSearch" },
    { title: "Solicitação de Imagens", icon: <ImageIcon size={40} className="text-blue-700" />, count: 89, link: "/ImageRequest/ImageReqSearch" },
    { title: "Alarmes", icon: <Bell size={40} className="text-blue-700" />, count: 76, link: "/Alarms/AlarmSearch" },
    { title: "Objetos Esquecidos", icon: <Boxes size={40} className="text-blue-700" />, count: 124, link: "/ForgettenObjects/FrgObjSearch" },
    { title: "CFTV", icon: <Bell size={40} className="text-blue-700" />, count: 3592, link: "/CFTV/CftvSearch" },
    { title: "Controle de Visitantes", icon: <Users size={40} className="text-blue-700" />, count: 583, link: "/VisitorControl/VisitorSearch" }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Animação para o texto de "Bem-vindo" */}
      <div
        className={`scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 transition-all duration-700 ${
          isVisible ? 'opacity-100 animate-slideUpFade2' : 'opacity-0'
        }`}
      >
        Bem-vindo ao Sistema de Gestão
        <p className="text-sm text-gray-600">
          Visualize e gerencie todos os módulos do sistema em um único lugar.
        </p>
      </div>

      {/* Animação para os outros itens */}
      <div className="flex m-2 grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`space-y-3 opacity-0 ${
              isVisible ? `animate-slideUpFade` : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }} // Definindo atraso escalonado
          >
            <div className="rounded-lg border bg-white bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="p-4 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="tracking-tight text-black text-xl font-semibold">
                  <span>{item.title}</span>
                </h3>
                {item.icon}
              </div>
              <div className="p-4 pt-0">
                <div className="text-2xl text-black font-bold">{item.count}</div>
                <p className="mt-1 text-xs text-black text-muted-foreground">
                  Total de Acessos Registrados
                </p>
                <div className="mt-4">
                  <a href={item.link} className="text-xs text-infinitybr-secondary text-blue-700 font-medium hover:underline">
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
