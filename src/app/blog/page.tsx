import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/footer";
import { BlogCard } from "@/components/features/blog-card/blog-card";

const POSTS = [
  {
    title: "O Significado das Ervas na Defumação",
    excerpt: "Descubra como as ervas quentes e mornas atuam no campo vibratório do terreiro e dos médiuns.",
    category: "Fundamentos",
    date: "05 Abr, 2026",
    image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?q=80&w=800"
  },
  {
    title: "A Hierarquia dos Orixás na Umbanda",
    excerpt: "Entenda a organização das sete linhas e como cada vibração atua na nossa caminhada espiritual.",
    category: "Estudos",
    date: "02 Abr, 2026",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800"
  },
  {
    title: "Como se preparar para uma Gira",
    excerpt: "Dicas de alimentação, banhos de ervas e preceitos para quem vai visitar a casa pela primeira vez.",
    category: "Guia",
    date: "28 Mar, 2026",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 font-serif">Blog do Terreiro</h1>
          <p className="text-slate-500 mt-2 text-lg">Artigos, ensinamentos e novidades da nossa comunidade.</p>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}