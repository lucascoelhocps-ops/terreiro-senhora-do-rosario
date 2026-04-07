'use client';

import '../../styles/agenda-section.css';
import { EventCard, type EventCardProps } from './event-card';

export interface AgendaSectionProps {
  /** Lista de eventos a exibir (máximo 3) */
  events: EventCardProps[];
  /** Título da seção */
  title?: string;
  /** Callback ao clicar em um evento */
  onEventClick?: (event: EventCardProps) => void;
  /** Texto para empty state */
  emptyStateText?: string;
  /** Mostrar botão "Ver Todas as Giras" */
  showViewAllButton?: boolean;
  /** Callback para ver todas as giras */
  onViewAllClick?: () => void;
}

const CalendarEmptyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="opacity-50 mx-auto mb-4"
    style={{ color: 'var(--color-sacred-gold, #C9A227)' }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M10 14h4" />
    <path d="M12 12v4" />
  </svg>
);

export const AgendaSection = ({
  events,
  title = 'Próximas Giras',
  onEventClick,
  emptyStateText = 'Nenhuma gira agendada no momento. Volte em breve!',
  showViewAllButton = true,
  onViewAllClick,
}: AgendaSectionProps) => {
  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-section__container">
        <div className="agenda-section__header">
          <h2 className="agenda-section__title" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h2>
          <p className="agenda-section__subtitle">
            Confira os próximos eventos no nosso terreiro
          </p>
        </div>

        {events && events.length > 0 ? (
          <>
            <div className="agenda-section__grid" role="list">
              {events.map((event, index) => (
                <div
                  key={`${event.title}-${event.date}-${index}`}
                  className="agenda-section__card"
                  onClick={() => onEventClick?.(event)}
                  role="listitem"
                >
                  <EventCard {...event} />
                </div>
              ))}
            </div>

            {showViewAllButton && (
              <div className="agenda-section__footer">
                <button
                  className="agenda-section__view-all"
                  onClick={onViewAllClick}
                  type="button"
                  style={{
                    backgroundColor: 'var(--color-sacred-red, #8B3A2A)',
                    color: 'var(--color-cream, #FAF5EC)',
                    padding: '12px 24px',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                  }}
                >
                  Ver Todas as Giras →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="agenda-section__empty-state">
            <div className="agenda-section__empty-icon">
              <CalendarEmptyIcon />
            </div>
            <p className="agenda-section__empty-text">{emptyStateText}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgendaSection;
