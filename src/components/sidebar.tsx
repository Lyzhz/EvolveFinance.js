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
  Search,
  Plus,
  SquarePen,
  Trash,
  Wallet,
  TrendingUp,
  TrendingDown,
  FileBarChart,
  CreditCard,
  Landmark,
  PiggyBank,
  Target,
  PieChart,
  BarChart3,
  Calculator,
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
    <div className="sidebar h-100% w-100% bg-white text-black border flex flex-col shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="flex pt-1">
        <Image
          src="/logo.png"
          alt="Evolvelogo"
          className="p-5 ml-5 mb-2"
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <nav className="flex-1 font-semibold overflow-y-auto border-y border-t-gray-200 py-3 px-2">
        <div className="flex flex-col pb-1.5">
          <SidebarItem href="/" icon={<Home size={20} />} label="Início" />
        </div>

        {/* Administração do Sistema (mantido) */}
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

        {/* Financeiro */}
        <DropdownSidebarItem
          index={1}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
          label="Financeiro"
          icon={<Wallet size={20} />}
          options={[
            {
              href: '/finance/receitas',
              label: 'Receitas',
              icon: <TrendingUp size={20} />,
            },
            {
              href: '/finance/despesas',
              label: 'Despesas',
              icon: <TrendingDown size={20} />,
            },
            {
              href: '/finance/relatorios',
              label: 'Relatórios',
              icon: <FileBarChart size={20} />,
            },
            {
              href: '/finance/categorias',
              label: 'Categorias',
              icon: <PieChart size={20} />,
            },
            {
              href: '/finance/orcamento',
              label: 'Orçamento',
              icon: <Calculator size={20} />,
            },
          ]}
        />

        {/* Contas Bancárias */}
        <DropdownSidebarItem
          index={2}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
          label="Contas Bancárias"
          icon={<Landmark size={20} />}
          options={[
            {
              href: '/contas/consulta',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/contas/novo',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/contas/editar',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/contas/excluir',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}  
        />
        {/* Cartões */}
        <DropdownSidebarItem
          index={3}
          isOpen={openIndex === 3}
          onToggle={handleToggle}
          label="Cartões"
          icon={<CreditCard size={20} />}
          options={[
            {
              href: '/cartoes/consulta',
              label: 'Consulta',
              icon: <Search size={20} />,
            },
            {
              href: '/cartoes/novo',
              label: 'Novo',
              icon: <Plus size={20} />,
            },
            {
              href: '/cartoes/editar',
              label: 'Editar',
              icon: <SquarePen size={20} />,
            },
            {
              href: '/cartoes/excluir',
              label: 'Excluir',
              icon: <Trash size={20} />,
            },
          ]}
        />

        {/* Investimentos */}
        <DropdownSidebarItem
          index={4}
          isOpen={openIndex === 4}
          onToggle={handleToggle}
          label="Investimentos"
          icon={<BarChart3 size={20} />}
          options={[
            {
              href: '/investimentos/carteira',
              label: 'Carteira',
              icon: <BarChart3 size={20} />,
            },
            {
              href: '/investimentos/renda-fixa',
              label: 'Renda Fixa',
              icon: <Landmark size={20} />,
            },
            {
              href: '/investimentos/acoes',
              label: 'Ações',
              icon: <TrendingUp size={20} />,
            },
            {
              href: '/investimentos/fundos',
              label: 'Fundos',
              icon: <FileBarChart size={20} />,
            },
            {
              href: '/investimentos/poupanca',
              label: 'Poupança',
              icon: <PiggyBank size={20} />,
            },
          ]}
        />

        {/* Planejamento */}
        <DropdownSidebarItem
          index={5}
          isOpen={openIndex === 5}
          onToggle={handleToggle}
          label="Planejamento"
          icon={<Target size={20} />}
          options={[
            {
              href: '/planejamento/metas',
              label: 'Metas',
              icon: <Target size={20} />,
            },
            {
              href: '/planejamento/reservas',
              label: 'Reservas',
              icon: <PiggyBank size={20} />,
            },
            {
              href: '/planejamento/simulacoes',
              label: 'Simulações',
              icon: <Calculator size={20} />,
            },
            {
              href: '/planejamento/relatorios',
              label: 'Relatórios',
              icon: <FileBarChart size={20} />,
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
      className={`flex items-center space-x-2 p-2 rounded-md transition-all duration-200 cursor-pointer ${
        isActive
          ? 'bg-blue-800 text-white dark:bg-blue-500 dark:text-white'
          : 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'
      }`}
    >
      {icon && (
        <span className={`text-lg ${isActive ? 'text-white dark:text-white' : ''}`}>{icon}</span>
      )}
      <span className={`text-xs ${isActive ? 'text-white dark:text-white' : ''}`}>{label}</span>
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
        className={`flex items-center justify-between w-full px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
          isChildActive
            ? 'bg-blue-800 text-white dark:bg-blue-500'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white '
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
          <SidebarItem key={option.href} href={option.href} icon={option.icon} label={option.label} />
        ))}
      </motion.div>
    </div>
  );
}

export { SidebarItem, DropdownSidebarItem };
