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
  onButtonClick,
  buttonHref = '#agenda',
  overlayOpacity = 0.4,
}: HeroProps) => {
  const handleClick = () => {
    if (buttonHref.startsWith('#')) {
      const element = document.querySelector(buttonHref);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section
      className="hero"
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined
      }
    >
      <div className="hero__overlay" style={{ opacity: overlayOpacity }} />

      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        <button
          className="hero__button"
          onClick={handleClick}
          type="button"
        >
          {buttonLabel}
          <span className="hero__button-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
