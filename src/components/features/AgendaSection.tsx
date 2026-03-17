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

/**
 * Seção de Agenda Rápida
 * Exibe os 3 próximos eventos confirmados
 * Em produção: fará fetch do Supabase (order by data asc, limit 3)
 */
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
          <h2 className="agenda-section__title">{title}</h2>
          <p className="agenda-section__subtitle">
            Confira os próximos eventos no nosso terreiro
          </p>
        </div>

        {events.length > 0 ? (
          <>
            <div className="agenda-section__grid">
              {events.map((event, index) => (
                <div
                  key={`${event.title}-${event.date}-${index}`}
                  className="agenda-section__card"
                  onClick={() => onEventClick?.(event)}
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
                >
                  Ver Todas as Giras →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="agenda-section__empty-state">
            <div className="agenda-section__empty-icon">📅</div>
            <p className="agenda-section__empty-text">{emptyStateText}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgendaSection;
