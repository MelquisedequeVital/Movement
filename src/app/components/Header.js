// components/Header.js
'use client';

import { useEffect } from 'react';
import ThemeToggle from '@/public/js/tema';  // Importando o ThemeToggle
import { Menu } from '@/public/js/menu';  // Importando a função do menu

export default function Header() {
  useEffect(() => {
    // Inicializa o menu mobile
    Menu();
  }, []);

  return (
    <header className="py-4 border-b flex flex-col gap-4 items-center justify-between px-4 md:flex-row">
      {/* Logo */}
      <img id="logo" src="/assets/logo-light.png" alt="Logo do site" className="h-12" />

      {/* Botão de alternância de tema */}
      <ThemeToggle />

      {/* Botão de menu mobile */}
      <button id="menu-toggle" className="text-2xl md:hidden">
        ☰
      </button>

      {/* Navbar - Visível apenas em telas grandes */}
      <nav id="mobile-menu" className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ease-in-out hidden md:static md:flex md:space-x-6 md:shadow-none">
        <ul className="flex flex-col md:flex-row md:items-center w-full">
          <li><a href="/" className="py-3 px-6 block text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">HOME</a></li>
          <li><a href="/front-body" className="py-3 px-6 block text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Corpo: Parte Frontal</a></li>
          <li><a href="/back-body" className="py-3 px-6 block text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Corpo: Parte Posterior</a></li>
        </ul>
      </nav>
    </header>
  );
}

