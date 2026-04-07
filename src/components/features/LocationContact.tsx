'use client';

import { useState } from 'react';
import '../../styles/location-contact.css';

export interface LocationContactProps {
  /** Endereço do terreiro */
  address: string;
  /** Coordenadas de latitude */
  latitude?: number;
  /** Coordenadas de longitude */
  longitude?: number;
  /** Telefone para contato */
  phone?: string;
  /** Email para contato */
  email?: string;
  /** Horário de funcionamento */
  hours?: string;
  /** Links do Google Maps e Waze */
  mapsUrl?: string;
  wazeUrl?: string;
  /** Callback ao enviar formulário */
  onFormSubmit?: (data: { name: string; email: string; message: string }) => void;
}

/**
 * Seção de Localização e Contato
 * Exibe mapa (iframe Google Maps), informações de contato e formulário simples
 */
export const LocationContact = ({
  address,
  latitude = -23.5505,
  longitude = -46.6333,
  phone = '(11) 9999-9999',
  email = 'contato@terreiro.com.br',
  hours = 'Seg-Sex: 18h-22h | Sab-Dom: 14h-22h',
  mapsUrl,
  wazeUrl,
  onFormSubmit,
}: LocationContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const googleMapsUrl =
    mapsUrl ||
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTerreira!5e0!3m2!1spt-BR!2sbr!4v`;

  const wazeLink = wazeUrl || `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    setTimeout(() => {
      onFormSubmit?.(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 500);
  };

  return (
    <section className="location-contact" id="contact">
      <div className="location-contact__container">
        <h2 className="location-contact__title">Localização e Contato</h2>

        <div className="location-contact__grid">
          {/* Coluna do Mapa */}
          <div className="location-contact__map-column">
            <div className="location-contact__map-iframe">
              <iframe
                title="Localização do Terreiro"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src={googleMapsUrl}
              />
            </div>

            <div className="location-contact__info">
              <h3 className="location-contact__info-title" style={{ fontFamily: 'var(--font-heading)' }}>Informações</h3>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <p className="location-contact__info-label">Endereço</p>
                  <p className="location-contact__info-value">{address}</p>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <p className="location-contact__info-label">Telefone</p>
                  <a href={`tel:${phone}`} className="location-contact__info-link">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <p className="location-contact__info-label">Email</p>
                  <a href={`mailto:${email}`} className="location-contact__info-link">
                    {email}
                  </a>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <p className="location-contact__info-label">Horário</p>
                  <p className="location-contact__info-value">{hours}</p>
                </div>
              </div>

              <div className="location-contact__buttons">
                <a href={wazeLink} target="_blank" rel="noopener noreferrer" className="location-contact__btn location-contact__btn--waze" style={{ borderRadius: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  Abrir no Waze
                </a>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="location-contact__btn location-contact__btn--maps" style={{ borderRadius: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div className="location-contact__form-column">
            <form className="location-contact__form" onSubmit={handleSubmit}>
              <h3 className="location-contact__form-title">Entre em Contato</h3>
              <p className="location-contact__form-description">
                Envie-nos uma mensagem e entraremos em contato em breve.
              </p>

              <div className="location-contact__form-group">
                <label htmlFor="name" className="location-contact__form-label">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="location-contact__form-input"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="location-contact__form-group">
                <label htmlFor="email" className="location-contact__form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="location-contact__form-input"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="location-contact__form-group">
                <label htmlFor="message" className="location-contact__form-label">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="location-contact__form-textarea"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              {submitSuccess && (
                <div className="location-contact__success-message">
                  ✓ Mensagem enviada com sucesso! Obrigado pelo contato.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="location-contact__form-submit"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
