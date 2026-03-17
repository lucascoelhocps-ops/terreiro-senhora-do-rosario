'use client';

import '../../styles/event-card.css';

export interface EventCardProps {
  /** Entidade ou Linha espiritual */
  entity: string;
  /** Título do evento */
  title: string;
  /** Data do evento (formato: DD/MM/YYYY) */
  date: string;
  /** Horário do evento (formato: HH:MM) */
  time: string;
  /** Status do evento */
  status: 'confirmada' | 'cancelada';
  /** Descrição adicional (opcional) */
  description?: string;
  /** Callback ao clicar no card */
  onClick?: () => void;
}

/**
 * Card de Evento/Gira
 * Componente visual principal para exibir informações de eventos espirituais
 */
export const EventCard = ({
  entity,
  title,
  date,
  time,
  status,
  description,
  onClick,
}: EventCardProps) => {
  const statusStyles = status === 'confirmada'
    ? 'event-card__status--confirmed'
    : 'event-card__status--cancelled';

  const statusLabel = status === 'confirmada' ? '✓ Confirmada' : '✗ Cancelada';

  return (
    <div
      className={`event-card ${status === 'cancelada' ? 'event-card--disabled' : ''}`}
      onClick={onClick}
      role="article"
    >
      <div className="event-card__header">
        <span className="event-card__entity">{entity}</span>
        <span className={`event-card__status ${statusStyles}`}>
          {statusLabel}
        </span>
      </div>

      <h3 className="event-card__title">{title}</h3>

      {description && (
        <p className="event-card__description">{description}</p>
      )}

      <div className="event-card__footer">
        <div className="event-card__info">
          <span className="event-card__date">📅 {date}</span>
          <span className="event-card__time">🕐 {time}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
