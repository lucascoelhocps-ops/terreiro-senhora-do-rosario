import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/footer";
import { Card } from "@/components/ui/card/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero Simples da Agenda */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif">Agenda de Trabalhos</h1>
          <p className="mt-2 text-orange-100 italic font-light">
            "A umbanda é a manifestação do espírito para a caridade."
          </p>
        </div>
      </section>

      {/* Seção Principal com Abas */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <Tabs defaultValue="giras" className="w-full">
          
          {/* Menu das Abas (UX: Facilita a navegação por categorias) */}
          <TabsList className="grid w-full grid-cols-2 max-w-md mb-12">
            <TabsTrigger value="giras">Giras Regulares</TabsTrigger>
            <TabsTrigger value="eventos">Eventos e Festas</TabsTrigger>
          </TabsList>

          {/* Conteúdo da Aba: Giras */}
          <TabsContent value="giras">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="Gira de Pretos Velhos" subtitle="13 de Maio • 19:30">
                Momento de sabedoria, passes de limpeza e conselhos dos nossos vovôs e vovós.
              </Card>
              <Card title="Gira de Caboclos" subtitle="20 de Maio • 19:30">
                Força da mata e cura espiritual com a falange dos caçadores.
              </Card>
              <Card title="Gira de Baianos" subtitle="27 de Maio • 19:30">
                Alegria e firmeza com o povo da Bahia.
              </Card>
            </div>
          </TabsContent>

          {/* Conteúdo da Aba: Eventos */}
          <TabsContent value="eventos">
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center">
              <h3 className="text-xl font-medium text-slate-500">
                Nenhum evento especial marcado para este mês.
              </h3>
              <p className="text-slate-400 mt-2">Fique atento às nossas redes sociais para atualizações.</p>
            </div>
          </TabsContent>

        </Tabs>
      </section>

      <Footer />
    </main>
  );
}