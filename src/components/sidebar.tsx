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
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
 
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
 
// =======================
// COMPONENTE PRINCIPAL
// =======================
export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [collapsed, setCollapsed] = useState(false);
 
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 260 }}
      className="h-full bg-white text-black border flex flex-col shadow-lg dark:bg-gray-800 dark:text-white"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-3">
        {!collapsed && (
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        )}
 
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </div>
 
      {/* NAV */}
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
 
        <SidebarItem collapsed={collapsed} href="/" icon={<Home size={20} />} label="Dashboard" />
 
        <DropdownSidebarItem
          collapsed={collapsed}
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
          collapsed={collapsed}
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
          collapsed={collapsed}
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
          collapsed={collapsed}
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
          collapsed={collapsed}
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
    </motion.div>
  );
}
 
// =======================
// ITEM SIMPLES
// =======================
function SidebarItem({ href, icon, label, collapsed }: any) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
 
      {!collapsed && <span>{label}</span>}
 
      {/* Tooltip */}
      {collapsed && (
        <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
          {label}
        </span>
      )}
    </Link>
  );
}
 
// =======================
// DROPDOWN
// =======================
function DropdownSidebarItem({ index, isOpen, onToggle, label, icon, options, collapsed }: any) {
  return (
    <div>
      <button
        onClick={() => onToggle(index)}
        className="group relative flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span>{label}</span>}
        </div>
 
        {!collapsed && (
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
            <ChevronRight size={18} />
          </motion.div>
        )}
 
        {/* Tooltip */}
        {collapsed && (
          <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
            {label}
          </span>
        )}
      </button>
 
      {!collapsed && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="ml-6 flex flex-col gap-1">
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
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
