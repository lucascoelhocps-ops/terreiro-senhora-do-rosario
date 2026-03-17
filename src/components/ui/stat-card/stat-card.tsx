'use client';

import '../../styles/stat-card.css';

export interface StatCardProps {
  /** Ícone ou emoji do card */
  icon: string;
  /** Título do stat */
  title: string;
  /** Valor principal */
  value: string | number;
  /** Subtítulo ou descrição */
  subtitle?: string;
  /** Cor do card (tema) */
  variant?: 'default' | 'success' | 'warning' | 'danger';
  /** Callback ao clicar */
  onClick?: () => void;
}

/**
 * Card de Estatística
 * Pequeno card para exibir métricas do dashboard
 */
export const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  variant = 'default',
  onClick,
}: StatCardProps) => {
  return (
    <div className={`stat-card stat-card--${variant}`} onClick={onClick}>
      <div className="stat-card__icon">{icon}</div>
      <div className="stat-card__content">
        <p className="stat-card__title">{title}</p>
        <div className="stat-card__value">{value}</div>
        {subtitle && <p className="stat-card__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default StatCard;
