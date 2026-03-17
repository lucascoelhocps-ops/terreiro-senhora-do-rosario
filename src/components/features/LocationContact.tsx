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
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src={googleMapsUrl}
              />
            </div>

            <div className="location-contact__info">
              <h3 className="location-contact__info-title">Informações</h3>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">📍</span>
                <div>
                  <p className="location-contact__info-label">Endereço</p>
                  <p className="location-contact__info-value">{address}</p>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">📞</span>
                <div>
                  <p className="location-contact__info-label">Telefone</p>
                  <a href={`tel:${phone}`} className="location-contact__info-link">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">✉️</span>
                <div>
                  <p className="location-contact__info-label">Email</p>
                  <a href={`mailto:${email}`} className="location-contact__info-link">
                    {email}
                  </a>
                </div>
              </div>

              <div className="location-contact__info-item">
                <span className="location-contact__info-icon">🕐</span>
                <div>
                  <p className="location-contact__info-label">Horário</p>
                  <p className="location-contact__info-value">{hours}</p>
                </div>
              </div>

              <div className="location-contact__buttons">
                <a href={wazeLink} target="_blank" rel="noopener noreferrer" className="location-contact__btn location-contact__btn--waze">
                  Abrir no Waze 🚗
                </a>
                <a href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="location-contact__btn location-contact__btn--maps">
                  Abrir no Maps 🗺️
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
