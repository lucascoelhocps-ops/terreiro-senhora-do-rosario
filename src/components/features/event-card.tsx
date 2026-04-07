'use client';

import '../../styles/event-card.css';

export interface EventCardProps {
  entity: string;
  title: string;
  date: string;
  time: string;
  status: 'confirmada' | 'cancelada';
  description?: string;
  onClick?: () => void;
}

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const EventCard = ({
  entity,
  title,
  date,
  time,
  status,
  description,
  onClick,
}: EventCardProps) => {
  const isConfirmed = status === 'confirmada';

  return (
    <div
      className={`event-card ${!isConfirmed ? 'event-card--disabled' : ''}`}
      onClick={onClick}
      role="article"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="event-card__header">
        <span className="event-card__entity">{entity}</span>
        <span className={`event-card__status ${isConfirmed ? 'event-card__status--confirmed' : 'event-card__status--cancelled'}`}>
          {isConfirmed ? <CheckIcon /> : <XIcon />}
          {isConfirmed ? 'Confirmada' : 'Cancelada'}
        </span>
      </div>

      <h3 className="event-card__title">{title}</h3>

      {description && (
        <p className="event-card__description">{description}</p>
      )}

      <div className="event-card__footer">
        <div className="event-card__info">
          <span className="event-card__date">
            <CalendarIcon /> {date}
          </span>
          <span className="event-card__time">
            <ClockIcon /> {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

