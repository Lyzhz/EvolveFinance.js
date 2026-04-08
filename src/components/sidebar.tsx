'use client';
 
import {
  Home,
  Settings,
  ChevronRight,
  Users,
  Cog,
  Layers,
  FileDigit,
  GitBranch,
  Camera,
  Video,
  AlertTriangle,
  HardDrive,
  Activity,
  Eye,
  Server,
  Search,
  Plus,
  SquarePen,
  Trash,
  Shield,
  Bell,
} from 'lucide-react';
 
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
 
// =======================
// COMPONENTE PRINCIPAL
// =======================
export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <div className="sidebar h-full w-full bg-white text-black border flex flex-col shadow-lg dark:bg-gray-800 dark:text-white">
      
      <div className="flex pt-1">
        <Image
          src="/logo.png"
          alt="logo"
          className="p-5 ml-5 mb-2"
          width={200}
          height={200}
        />
      </div>
 
      <nav className="flex-1 font-semibold overflow-y-auto border-y border-t-gray-200 py-3 px-2">
 
        <SidebarItem href="/" icon={<Home size={20} />} label="Dashboard" />
 
        <DropdownSidebarItem
          index={0}
          isOpen={openIndex === 0}
          onToggle={handleToggle}
          label="Administração"
          icon={<Settings size={20} />}
          options={[
            { href: '/admin/users', label: 'Usuários', icon: <Users size={20} /> },
            { href: '/admin/config', label: 'Configurações', icon: <Cog size={20} /> },
            { href: '/admin/integrations', label: 'Integrações', icon: <Layers size={20} /> },
            { href: '/admin/logs', label: 'Logs', icon: <FileDigit size={20} /> },
            { href: '/admin/version', label: 'Versão', icon: <GitBranch size={20} /> },
          ]}
        />
 
        <DropdownSidebarItem
          index={1}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
          label="Monitoramento"
          icon={<Activity size={20} />}
          options={[
            { href: '/monitoramento/ao-vivo', label: 'Ao Vivo', icon: <Eye size={20} /> },
            { href: '/monitoramento/cameras', label: 'Câmeras', icon: <Camera size={20} /> },
            { href: '/monitoramento/offline', label: 'Offline', icon: <AlertTriangle size={20} /> },
            { href: '/monitoramento/alertas', label: 'Alertas', icon: <Bell size={20} /> },
          ]}
        />
 
        <DropdownSidebarItem
          index={2}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
          label="Dispositivos"
          icon={<Camera size={20} />}
          options={[
            { href: '/devices/list', label: 'Listar', icon: <Search size={20} /> },
            { href: '/devices/add', label: 'Adicionar', icon: <Plus size={20} /> },
            { href: '/devices/edit', label: 'Editar', icon: <SquarePen size={20} /> },
            { href: '/devices/remove', label: 'Remover', icon: <Trash size={20} /> },
          ]}
        />
 
        <DropdownSidebarItem
          index={3}
          isOpen={openIndex === 3}
          onToggle={handleToggle}
          label="Gravações"
          icon={<Video size={20} />}
          options={[
            { href: '/recordings/playback', label: 'Playback', icon: <Video size={20} /> },
            { href: '/recordings/storage', label: 'Armazenamento', icon: <HardDrive size={20} /> },
            { href: '/recordings/export', label: 'Exportar', icon: <Server size={20} /> },
          ]}
        />
 
        <DropdownSidebarItem
          index={4}
          isOpen={openIndex === 4}
          onToggle={handleToggle}
          label="Segurança"
          icon={<Shield size={20} />}
          options={[
            { href: '/security/events', label: 'Eventos', icon: <AlertTriangle size={20} /> },
            { href: '/security/logs', label: 'Logs', icon: <FileDigit size={20} /> },
            { href: '/security/access', label: 'Acessos', icon: <Users size={20} /> },
          ]}
        />
 
      </nav>
    </div>
  );
}
 
// =======================
// ITEM SIMPLES
// =======================
function SidebarItem({ href, icon, label }: any) {
  return (
    <Link href={href} className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
      {icon}
      {label}
    </Link>
  );
}
 
// =======================
// DROPDOWN
// =======================
function DropdownSidebarItem({ index, isOpen, onToggle, label, icon, options }: any) {
  return (
    <div>
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex items-center gap-2">
          {icon}
          {label}
        </div>
 
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          <ChevronRight size={18} />
        </motion.div>
      </button>
 
      {isOpen && (
        <div className="ml-6 mt-1 flex flex-col gap-1">
          {options.map((item: any, i: number) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
