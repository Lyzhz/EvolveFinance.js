'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '@/lib/utils'; // Se tiver uma função para compor classes, se não, substitua pelo template string

// Componente raiz do Dropdown
const DropdownMenu = DropdownMenuPrimitive.Root;

// Gatilho do Dropdown (botão, por exemplo)
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

// Conteúdo do Dropdown
const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-700 bg-gray-800 p-1 shadow-md animate-in slide-in-from-top-1',
      className
    )}
    {...props}
  />
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// Itens do Dropdown
const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuItemProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm hover:bg-gray-700 focus:bg-gray-700',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
