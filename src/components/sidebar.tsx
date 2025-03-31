'use client';

import {
  Home,
  User,
  Settings,
  ChevronRight,
  Users,
  Cog,
  GitBranch,
  Layers,
  FileDigit,
  Bell,
  Search,
  Plus,
  SquarePen,
  Trash,
  Package,
  FileText,
  Camera,
  Key,
  Shield,
  Box,
  UserPlus,
  Car,
  ImageIcon,
  UserCircle2,
  LucideAppWindow,
  AlignHorizontalJustifyEndIcon,
  DoorClosed,
  AlignVerticalSpaceBetween,
  LayoutTemplate,
  ScreenShare,
  FilesIcon,
  Monitor,
  DoorClosedIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-100% w-100% bg-white text-black border flex flex-col shadow-lg rounded_lg">
      <div className="flex pt-1">
        <Image
          src="/infinity.png"
          alt="infinitylogo"
          className="p-2"
          width={200}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <nav className="flex-1 font-semibold overflow-y-auto border-y border-t-gray-200 py-3 px-2">
        <div className="flex flex-col pb-1.5">
          <SidebarItem href="/" icon={<Home size={20} />} label="Início" />
          <Link href="SidebarItem"></Link>
        </div>
        <DropdownSidebarItem
          index={0}
          isOpen={openIndex === 0}
          onToggle={handleToggle}
          label="Administração do Sistema"
          icon={<Settings size={20} />}
          options={[
            {
              href: '/SystemAdmin/AdminUsers',
              label: 'Usuários',
              icon: <User size={20} />,
            },
            {
              href: '/SystemAdmin/AdminGroup',
              label: 'Grupo de Acesso',
              icon: <Users size={20} />,
            },
            {
              href: '/SystemAdmin/AdminConfig',
              label: 'Configurações',
              icon: <Cog size={20} />,
            },
            {
              href: '/SystemAdmin/AdminIntegrations',
              label: 'Integrações',
              icon: <Layers size={20} />,
            },
            {
              href: '/SystemAdmin/AdminLogs',
              label: 'Logs',
              icon: <FileDigit size={20} />,
            },
            {
              href: '/SystemAdmin/version',
              label: 'Versão',
              icon: <GitBranch size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={1}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
          label="Alarmes"
          icon={<Bell size={20} />}
          options={[
            {
              href: '/Alarms/AlarmSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/Alarms/AlarmAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/Alarms/AlarmEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/Alarms/AlarmDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={2}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
          label="Almoxarifado"
          icon={<Package size={20} />}
          options={[
            {
              href: '/Warehouse/WarehouseSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/Warehouse/WarehouseAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/Warehouse/WarehouseEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/Warehouse/WarehouseDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={3}
          isOpen={openIndex === 3}
          onToggle={handleToggle}
          label="Brigadistas"
          icon={<FileText size={20} />}
          options={[
            {
              href: '/FireFighters/FireFighterSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/FireFighters/FireFighterAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/FireFighters/FireFighterEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/FireFighters/FireFighterDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={4}
          isOpen={openIndex === 4}
          onToggle={handleToggle}
          label="CFTV"
          icon={<Camera size={20} />}
          options={[
            {
              href: '/CFTV/CftvSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/CFTV/CftvAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/CFTV/CftvEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/CFTV/CftvDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={5}
          isOpen={openIndex === 5}
          onToggle={handleToggle}
          label="Claviculário"
          icon={<Key size={20} />}
          options={[
            {
              href: '/Storage/StorageSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/Storage/StorageAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/Storage/StorageEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/Storage/StorageDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={6}
          isOpen={openIndex === 6}
          onToggle={handleToggle}
          label="Controle de Acesso"
          icon={<Shield size={20} />}
          options={[
            {
              href: '/AccessControl/AccessControlPerson',
              label: 'Pessoa',
              icon: <UserCircle2 size={20} />,
            },
            {
              href: '/AccessControl/AccessControlGerenc',
              label: 'Gerenciadora',
              icon: <LucideAppWindow size={20} />,
            },
            {
              href: '/AccessControl/AccessControlController',
              label: 'Controladora',
              icon: <AlignHorizontalJustifyEndIcon size={20} />,
            },
            {
              href: '/AccessControl/AccessControlDoor',
              label: 'Portas',
              icon: <DoorClosed size={20} />,
            },
            {
              href: '/AccessControl/AccessControlAreas',
              label: 'Áreas',
              icon: <AlignVerticalSpaceBetween size={20} />,
            },
            {
              href: '/AccessControl/AccessControlTemplate',
              label: 'Template',
              icon: <LayoutTemplate size={20} />,
            },
            {
              href: '/AccessControl/AccessControlScreen',
              label: 'Telas',
              icon: <ScreenShare size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={7}
          isOpen={openIndex === 7}
          onToggle={handleToggle}
          label="Controle de Lockers"
          icon={<Box size={20} />}
          options={[
            {
              href: '/LockerControl/LockersSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/LockerControl/LockersPerson',
              label: 'Pessoa - Locker',
              icon: <UserCircle2 size={20} />,
            },
            {
              href: '/LockerControl/LockersTotens',
              label: 'Totens',
              icon: <Monitor size={20} />,
            },
            {
              href: '/LockerControl/LockersDoors',
              label: 'Portas',
              icon: <DoorClosedIcon size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={8}
          isOpen={openIndex === 8}
          onToggle={handleToggle}
          label="Controle de Provisórios"
          icon={<UserPlus size={20} />}
          options={[
            {
              href: '/ProvisionalControl/ProviControlSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/ProvisionalControl/ProviControlAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/ProvisionalControl/ProviControlEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/ProvisionalControl/ProviControlDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={9}
          isOpen={openIndex === 9}
          onToggle={handleToggle}
          label="Controle de Visitantes"
          icon={<Users size={20} />}
          options={[
            {
              href: '/VisitorControl/VisitorSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/VisitorControl/VisitorAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/VisitorControl/VisitorEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/VisitorControl/VisitorDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={10}
          isOpen={openIndex === 10}
          onToggle={handleToggle}
          label="Estacionamento"
          icon={<Car size={20} />}
          options={[
            {
              href: '/Parking/PlateSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/Parking/PlateAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/Parking/PlateEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/Parking/PlateDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={11}
          isOpen={openIndex === 11}
          onToggle={handleToggle}
          label="Objetos Esquecidos"
          icon={<Box size={20} />}
          options={[
            {
              href: '/ForgettenObjects/FrgObjSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/ForgettenObjects/FrgObjAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/ForgettenObjects/FrgObjEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/ForgettenObjects/FrgObjTransfer',
              label: 'Transferência',
              icon: <FilesIcon size={20} />,
            },
            {
              href: '/ForgettenObjects/FrgObjDelete',
              label: 'Deletar',
              icon: <Trash size={20} />,
            },
          ]}
        />

        <DropdownSidebarItem
          index={12}
          isOpen={openIndex === 12}
          onToggle={handleToggle}
          label="Solicitação de Imagens"
          icon={<ImageIcon size={20} />}
          options={[
            {
              href: '/ImageRequest/ImageReqSearch',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/ImageRequest/ImageReqAdd',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/ImageRequest/ImageReqEdit',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/ImageRequest/ImageReqDelete',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />
      </nav>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon?: React.ReactNode;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-200 ${
        isActive ? 'bg-blue-800 text-white' : 'hover:bg-gray-200'
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}

function DropdownSidebarItem({
  index,
  isOpen,
  onToggle,
  label,
  icon,
  options,
}: {
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  label: string;
  icon: React.ReactNode;
  options: { href: string; label: string; icon: React.ReactNode }[];
}) {
  const pathname = usePathname();
  const isChildActive = options.some((option) => option.href === pathname);

  return (
    <div>
      <button
        onClick={() => onToggle(index)}
        className={`flex items-center justify-between w-full px-4 py-2 rounded-md transition-all duration-200 ${
          isChildActive ? 'bg-blue-800 text-white' : 'hover:bg-gray-200'
        }`}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-xs">{label}</span>
        </div>
        <ChevronRight
          size={16}
          className={`ml-2 mt-1 transition-all duration-200 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="ml-4 overflow-hidden pt-1 space-y-1"
      >
        {options.map((option) => (
          <SidebarItem
            key={option.href}
            href={option.href}
            icon={option.icon}
            label={option.label}
          />
        ))}
      </motion.div>
    </div>
  );
}

export { SidebarItem, DropdownSidebarItem };
