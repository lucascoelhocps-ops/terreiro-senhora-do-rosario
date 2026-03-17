import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Lado Esquerdo: Informações de Contacto */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Venha visitar-nos</h2>
            <p className="text-lg text-slate-600 mb-8">
              O nosso terreiro está de portas abertas para te receber. Consulta a nossa localização e os meios de contacto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Endereço</h4>
                  <p className="text-slate-600">Rua das Ervas Sagradas, 123 - Bairro da Fé</p>
                  <p className="text-slate-600">Cidade do Axé, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                  <p className="text-slate-600">Dias de Gira: Abertura às 19:00h</p>
                  <p className="text-slate-600">Secretaria: Sábados das 09:00 às 12:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(11) 99999-8888</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Mapa (UX: Placeholder visual para o Storybook) */}
          <div className="h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-50 relative group">
            {/* Simulamos um mapa aqui para o componente ser leve */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-46.633,-23.550,14,0/600x400?access_token=pk.example')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-slate-900 hover:bg-orange-600 hover:text-white transition-all"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};