import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, FileDown, Linkedin } from "lucide-react";

export default function PortfolioKauaPaixao() {
  const projects = [
    {
      name: "Site Vedapremix",
      link: "https://vedapremix.com.br",
      description: "Gestão técnica e manutenção contínua do e-commerce industrial, incluindo atualização de catálogo de produtos, configuração de plugins, otimização de SEO on-page e melhorias de UI/UX para experiência de busca do cliente.",
    },
    {
      name: "Site Porte Paixão Imóveis",
      link: "https://www.portepaixaoimoveis.com.br",
      description: "Administração de site institucional imobiliário, com atualização de conteúdo e imóveis, gestão de anúncios de imóveis, testes de usabilidade e ajustes de interface voltados à conversão de leads.",
    },
    {
      name: "App Tamo no Lance X1",
      link: "https://tamo-no-lance.vercel.app",
      description: "Site para uma equipe de futsal de várzea gerenciar apostas em eventos de X1, registrando apostador, valor e confronto para acerto financeiro pós-evento. Stack: Next.js, React, TypeScript, Tailwind CSS, Prisma, Supabase (PostgreSQL), Resend.",
    },
    {
      name: "Jogo de Educação Ambiental",
      link: "https://github.com/kauapaixao/Projetos-Jogos-Completamente-Digitais",
      description: "Todas as fases de implementação, relatórios, documentação e código completo do jogo desenvolvido em equipe.",
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 p-8 flex flex-col items-center">
      <section className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl font-bold mb-2">Kauã da Silva Paixão</h1>
        <p className="text-lg text-slate-700 mb-4">
          Estudante de <b>Sistemas de Informação</b> no Mackenzie. <br />
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Button variant="default" asChild>
            <a href="/CV - Kauã Paixão.pdf" download>
              <FileDown className="mr-2 h-4 w-4" /> Baixar Currículo
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/kaua-paixao10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project) => (
          <Card key={project.name} className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> Ver Projeto
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="mt-16 text-slate-500 text-sm">
        © {new Date().getFullYear()} Kauã Paixão.
      </footer>
    </main>
  );
}