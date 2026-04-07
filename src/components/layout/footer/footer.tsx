import React from 'react';
import Link from 'next/link';

// SVGs Inline para não depender de pacotes externos na Home
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-sacred-red)]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[var(--font-body)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Sobre / Logo */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter mix-blend-screen opacity-90" style={{ fontFamily: 'var(--font-heading)' }}>
              TERREIRO<span style={{ color: 'var(--color-sacred-red)' }}> SENHORA</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Um espaço dedicado à caridade, ao amor e ao desenvolvimento espiritual através dos fundamentos da Umbanda e Guias de Luz.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-sm" style={{ color: 'var(--color-sacred-gold)' }}>Navegação</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="/" className="hover:text-[var(--color-sacred-gold)] transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-[var(--color-sacred-gold)] transition-colors">A Nossa Casa</Link></li>
              <li><Link href="/agenda" className="hover:text-[var(--color-sacred-gold)] transition-colors">Agenda de Giras</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--color-sacred-gold)] transition-colors">Fundamentos e Blog</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Área Administrativa */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-sm" style={{ color: 'var(--color-sacred-gold)' }}>Membros</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="/login" className="hover:text-[var(--color-sacred-gold)] transition-colors">Área do Filho</Link></li>
              <li><Link href="/financeiro" className="hover:text-[var(--color-sacred-gold)] transition-colors">Mensalidades</Link></li>
              <li><Link href="/materiais" className="hover:text-[var(--color-sacred-gold)] transition-colors">Materiais de Estudo</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-sm" style={{ color: 'var(--color-sacred-gold)' }}>Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-sm bg-[var(--color-dark-muted)] hover:bg-[var(--color-sacred-red)] text-[var(--color-cream)] transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-sm bg-[var(--color-dark-muted)] hover:bg-[var(--color-sacred-red)] text-[var(--color-cream)] transition-all duration-300">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Youtube" className="p-2 rounded-sm bg-[var(--color-dark-muted)] hover:bg-[var(--color-sacred-red)] text-[var(--color-cream)] transition-all duration-300">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60" style={{ borderColor: 'rgba(250,245,236,0.1)' }}>
          <p>© {currentYear} Terreiro Senhora do Rosário. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 italic">
            Desenvolvido com <HeartIcon /> para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
};