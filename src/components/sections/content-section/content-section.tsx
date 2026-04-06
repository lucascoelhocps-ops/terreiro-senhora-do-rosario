import React from 'react';

interface ContentSectionProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean; // Se verdadeiro, a imagem fica à esquerda
}

export const ContentSection = ({ title, text, image, reverse = false }: ContentSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">{title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};