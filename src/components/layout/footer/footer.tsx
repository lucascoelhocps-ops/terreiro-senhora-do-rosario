import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Sobre / Logo */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-serif font-bold text-white tracking-tighter">
              TERREIRO<span className="text-orange-500">AXÉ</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Um espaço dedicado à caridade, ao amor e ao desenvolvimento espiritual através dos fundamentos da Umbanda.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-orange-500 transition-colors">Sobre a Casa</Link></li>
              <li><Link href="/agenda" className="hover:text-orange-500 transition-colors">Agenda de Giras</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Artigos e Blog</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Área Administrativa */}
          <div>
            <h4 className="text-white font-bold mb-6">Membros</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/login" className="hover:text-orange-500 transition-colors">Área do Filho</Link></li>
              <li><Link href="/financeiro" className="hover:text-orange-500 transition-colors">Mensalidades</Link></li>
              <li><Link href="/materiais" className="hover:text-orange-500 transition-colors">Materiais de Estudo</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Terreiro Axé. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 italic">
            Desenvolvido com <Heart size={12} className="text-orange-500 fill-orange-500" /> para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
};