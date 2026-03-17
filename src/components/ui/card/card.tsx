import React from 'react';

// Aqui definimos as "regras" do que o Card pode receber (Props)
interface CardProps {
  title: string;          // O título é obrigatório (ex: Nome da Gira)
  subtitle?: string;       // O subtítulo é opcional (ex: Horário)
  children: React.ReactNode; // O conteúdo que vai dentro do card
  footer?: React.ReactNode;   // Um rodapé opcional (ex: um botão)
  variant?: 'default' | 'highlight'; // Se é um card comum ou destacado
}

export const Card = ({ title, subtitle, children, footer, variant = 'default' }: CardProps) => {

  // Estilos base usando Tailwind CSS
  const baseStyles = "rounded-2xl border p-6 shadow-sm transition-all duration-300";

  // Lógica de cores para o UX (Branco para o dia-a-dia, um tom suave para destaques)
  const variants = {
    default: "bg-white border-slate-200 hover:shadow-lg hover:border-slate-300",
    highlight: "bg-orange-50 border-orange-200 ring-1 ring-orange-100" // Cor quente para eventos especiais
  };

  return (
    <div className={`${baseStyles} ${variants[variant]}`}>
      {/* Cabeçalho do Card */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{title}</h3>
        {subtitle && (
          <p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>

      {/* Corpo do Card */}
      <div className="text-slate-600 text-base leading-relaxed">
        {children}
      </div>

      {/* Rodapé (Só aparece se tu passares alguma informação para ele) */}
      {footer && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          {footer}
        </div>
      )}
    </div>
  );
};