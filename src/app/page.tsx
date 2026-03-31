'use client';
 
import { Camera, Video, AlertTriangle, HardDrive, Activity, Eye, Server } from 'lucide-react';
import { useEffect, useState } from 'react';
 
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Bem-vindo ao Sistema de Monitoramento";
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);
 
  const items = [
    {
      title: "Câmeras Ativas",
      icon: <Camera size={40} className="text-green-600 dark:text-green-300" />,
      count: 128,
      link: "/cameras"
    },
    {
      title: "Câmeras Offline",
      icon: <AlertTriangle size={40} className="text-red-600 dark:text-red-300" />,
      count: 5,
      link: "/cameras/offline"
    },
    {
      title: "Gravações",
      icon: <Video size={40} className="text-blue-600 dark:text-blue-300" />,
      count: "2.4TB",
      link: "/recordings"
    },
    {
      title: "Armazenamento",
      icon: <HardDrive size={40} className="text-yellow-600 dark:text-yellow-300" />,
      count: "78%",
      link: "/storage"
    },
    {
      title: "Eventos / Alertas",
      icon: <AlertTriangle size={40} className="text-orange-600 dark:text-orange-300" />,
      count: 23,
      link: "/events"
    },
    {
      title: "Visualizações ao Vivo",
      icon: <Eye size={40} className="text-cyan-600 dark:text-cyan-300" />,
      count: 12,
      link: "/live"
    },
    {
      title: "Servidores VMS",
      icon: <Server size={40} className="text-purple-600 dark:text-purple-300" />,
      count: 3,
      link: "/servers"
    }
  ];
 
  return (
    <main className="p-6 flex min-h-screen flex-col bg-gradient-to-br from-white to-white dark:from-gray-900 dark:to-gray-900 transition-all duration-300">
      <div
        className={`scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 transition-all duration-700 ${
          isVisible ? 'opacity-100 animate-slideUpFade2' : 'opacity-0'
        }`}
      >
        <h1 className="text-black dark:text-white ml-3">
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            {fullText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animation: `typing 0.05s steps(1) ${index * 0.1}s forwards`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Monitore câmeras, gravações e eventos em tempo real.
        </p>
      </div>
 
      <div className="flex m-2 grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`space-y-3 opacity-0 ${isVisible ? `animate-slideUpFade` : ''}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-lg hover:scale-103 transition-transform duration-300 relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
            after:w-full after:h-[4px] after:blur-md dark:after:shadow-[0px_4px_10px_2px_rgba(59,130,246,0.7)]">
 
              <div className="p-4 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="tracking-tight text-black dark:text-white text-xl font-semibold">
                  <span className="font-press-start-2p">
                    {item.title.split("").map((char, index) => (
                      <span
                        key={index}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          animation: `typing 0.05s steps(1) ${index * 0.1}s forwards`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </h3>
                {item.icon}
              </div>
 
              <div className="p-4 pt-0">
                <div className="text-2xl text-black dark:text-white font-bold">
                  {item.count}
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Status atual do sistema
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
