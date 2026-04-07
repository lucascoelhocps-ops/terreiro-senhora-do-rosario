import React from 'react';

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-sacred-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-sacred-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-sacred-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

interface ValueCardProps {
  title: string;
  description: string;
  Icon: React.ReactNode;
}

const ValueCard = ({ title, description, Icon }: ValueCardProps) => (
  <div className="relative group p-8 lg:p-10 border border-[rgba(250,245,236,0.1)] bg-[var(--color-dark)] hover:bg-[var(--color-dark-muted)] transition-colors duration-300 rounded-sm overflow-hidden">
    {/* Decoração superior */}
    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-sacred-red)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
    
    <div className="mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      {Icon}
    </div>
    
    <h3 className="text-2xl font-bold text-[var(--color-cream)] mb-4 font-[var(--font-heading)] leading-tight">
      {title}
    </h3>
    
    <p className="text-[var(--color-cream)] opacity-70 font-[var(--font-body)] leading-relaxed text-sm md:text-base group-hover:opacity-90 transition-opacity">
      {description}
    </p>
  </div>
);

export const ValuesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-dark)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--color-sacred-red)_0%,_transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-sacred-gold)] mb-4 font-[var(--font-body)]">
            Nossos Pilares
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-cream)] mb-6 font-[var(--font-heading)]">
            O Tripé da Umbanda
          </h2>
          <div className="w-16 h-1 bg-[var(--color-sacred-red)] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ValueCard 
            title="Caridade" 
            description="O amor em ação. Acolhemos a todos sem distinção, entregando energia, passe e aconselhamento com o coração aberto."
            Icon={<HeartIcon />}
          />
          <ValueCard 
            title="Estudo" 
            description="A fé não é cega. Buscamos o entendimento dos mistérios, das ervas e da teologia umbandista para servir melhor."
            Icon={<BookOpenIcon />}
          />
          <ValueCard 
            title="Comunidade" 
            description="O terreiro é um quilombo moderno. Somos uma família que se apoia, trabalhando a evolução através da fraternidade."
            Icon={<UsersIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
