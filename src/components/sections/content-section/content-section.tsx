import React from 'react';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export const ContentSection = ({ title, subtitle, text, image, reverse = false }: ContentSectionProps) => {
  return (
    <section className="py-24 md:py-32 relative bg-[var(--color-cream)] overflow-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Bloco de Imagem - Tratamento Sharp */}
        <div className="w-full md:w-5/12 relative group">
          <div className="absolute inset-0 bg-[var(--color-sacred-gold)] translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500 ease-out" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-dark)] shadow-xl z-20">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            {/* Gradiente subtil por cima da imagem para vincular à paleta */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B3A2A]/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bloco de Texto - Tipografia Dominante */}
        <div className="w-full md:w-7/12 text-left relative z-30">
          <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-sacred-gold)] mb-4 font-[var(--font-body)]">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] mb-8 font-[var(--font-heading)] leading-[1.1] tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-sacred-red)] mb-8" />
          <p className="text-lg md:text-xl text-[var(--color-dark-muted)] leading-relaxed whitespace-pre-line font-[var(--font-body)]">
            {text}
          </p>
        </div>

      </div>
    </section>
  );
};