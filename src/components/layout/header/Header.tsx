import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo - Representando o Terreiro */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">
              TERREIRO<span className="text-orange-600">AXÉ</span>
            </span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Início</Link>
            <Link href="/sobre" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Sobre Nós</Link>
            <Link href="/agenda" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Giras</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Blog</Link>
          </nav>

          {/* Botão de Login (Área de Membros) */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="ml-8 inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
            >
              Área do Filho
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};