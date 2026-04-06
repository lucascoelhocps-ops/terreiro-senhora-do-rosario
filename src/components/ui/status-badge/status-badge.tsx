'use client';

import '../../../styles/status-badge.css';

export interface StatusBadgeProps {
  /** Status do pagamento */
  status: 'pago' | 'pendente' | 'atrasado';
  /** Texto customizado */
  label?: string;
  /** Tamanho do badge */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Badge de Status de Pagamento
 * Mostra visualmente o status da mensalidade
 */
export const StatusBadge = ({
  status,
  label,
  size = 'medium',
}: StatusBadgeProps) => {
  const statusConfig: Record<string, { icon: string; text: string; color: string }> = {
    pago: { icon: '🟢', text: 'Pago', color: 'success' },
    pendente: { icon: '🟡', text: 'Pendente', color: 'warning' },
    atrasado: { icon: '🔴', text: 'Atrasado', color: 'danger' },
  };

  const config = statusConfig[status];

  return (
    <span className={`status-badge status-badge--${status} status-badge--${size}`}>
      <span className="status-badge__icon">{config.icon}</span>
      <span className="status-badge__text">{label || config.text}</span>
    </span>
  );
};

export default StatusBadge;
