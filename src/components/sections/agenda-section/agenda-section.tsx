import React from 'react';
import { Card } from '../../ui/card/card'; // Importando o componente que você já criou!

export const AgendaSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Próximas Giras</h2>
            <p className="text-slate-500 mt-2">Programe sua visita e venha receber o axé.</p>
          </div>
          <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            Ver agenda completa →
          </button>
        </div>

        {/* Grid de Cards (UX: Responsividade) */}
        {/* 'grid-cols-1' para celular, 'md:grid-cols-3' para computador */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card
            title="Gira de Baianos"
            subtitle="15 de Março • 19:30"
            footer={<span className="text-xs font-bold text-green-600">ABERTO</span>}
          >
            Alegria e limpeza espiritual com o povo da Bahia. Pedimos trazer uma vela branca.
          </Card>

          <Card
            title="Gira de Marinheiros"
            subtitle="22 de Março • 19:30"
            footer={<span className="text-xs font-bold text-green-600">ABERTO</span>}
          >
            Trabalhos de descarrego e fluidez emocional com os marujos de alto mar.
          </Card>

          <Card
            title="Sessão de Exu"
            subtitle="29 de Março • 20:00"
            footer={<span className="text-xs font-bold text-orange-600">FECHADO PARA FILHOS</span>}
            variant="highlight"
          >
            Trabalho interno de sustentação e proteção da casa. Apenas para membros.
          </Card>

        </div>
      </div>
    </section>
  );
};