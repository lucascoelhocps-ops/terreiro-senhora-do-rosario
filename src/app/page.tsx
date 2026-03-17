// Importamos os nossos componentes organizados por pastas
import { Header } from "@/components/layout/header/Header";
import { Hero } from "@/components/sections/hero/hero";
import { AgendaSection } from "@/components/sections/agenda-section/agenda-section";
import { LocationContact } from "@/components/features/LocationContact";
import { Footer } from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. O Cabeçalho fica fixo no topo */}
      <Header />

      {/* 2. A primeira dobra do site (Impacto) */}
      <Hero
        title="Portas abertas para a caridade e o Axé"
        subtitle="Um espaço de fé, amor e acolhimento espiritual sob a luz da Umbanda."
        ctaText="Ver Agenda de Giras"
        backgroundImage="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=1600"
      />

      {/* 3. Seção com as próximas giras */}
      <AgendaSection />

      {/* 4. Como chegar e contacto */}
      <LocationContact
        address="Rua das Flores, 123 - Centro, São Paulo - SP"
        phone="(11) 98765-4321"
        email="contato@terreirosenhadorosario.com.br"
        hours="Segunda a Sexta: 18h - 22h | Sábado e Domingo: 14h - 22h"
      />

      {/* 5. Rodapé com links e redes sociais */}
      <Footer />
    </main>
  );
}