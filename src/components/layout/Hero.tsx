'use client';

import '../../styles/hero.css';

export interface HeroProps {
  /** Imagem de background (URL) */
  backgroundImage?: string;
  /** Título principal (H1) */
  title: string;
  /** Subtítulo descritivo */
  subtitle: string;
  /** Texto do botão primário */
  buttonLabel?: string;
  /** Callback do botão primário */
  onButtonClick?: () => void;
  /** Link do botão (alternativa ao callback) */
  buttonHref?: string;
  /** Overlay de escurecimento (intensidade 0-1) */
  overlayOpacity?: number;
}

/**
 * Hero Section
 * Componente de boas-vindas com imagem de fundo e call-to-action
 */
export const Hero = ({
  backgroundImage,
  title,
  subtitle,
  buttonLabel = 'Ver Agenda de Giras',
  buttonHref = '#agenda',
}: HeroProps) => {
  return (
    <section
      className="hero"
      aria-label="Introdução do Terreiro"
      style={
        backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined
      }
    >
      {/* Overlay com gradiente é aplicado via pseudo-elemento no CSS */}
      <div className="hero__content">
        <span className="hero__eyebrow">Serenidade e Axé</span>
        <h1 className="hero__title">{title}</h1>
        <div className="hero__divider" aria-hidden="true" />
        <p className="hero__subtitle">{subtitle}</p>

        <a className="hero__button" href={buttonHref}>
          {buttonLabel}
          <span className="hero__button-arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
