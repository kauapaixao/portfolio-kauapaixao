import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, FileDown, Linkedin } from "lucide-react";

export default function PortfolioKauaPaixao() {
  const projects = [
    {
      name: "E-commerce - Vedapremix",
      link: "https://vedapremix.com.br",
      description:
        "Atuei como gestor do e-commerce: atualização de produtos, otimização de UI/UX, manutenção/restauração do site e suporte ao cliente.",
    },
    {
      name: "Sistema de Ocorrências (Java + Spring Boot)",
      link: "https://gitlab.com/gotis2/gotis-projeto-desenvolvimento-software",
      description:
        "CRUD completo com autenticação JWT, validação, serviços REST e banco de dados H2.",
    },
    {
      name: "Jogo de Educação Ambiental (Python)",
      link: "https://github.com/kauapaixao/Projetos-Jogos-Completamente-Digitais",
      description:
        "Jogo digital desenvolvido em equipe com fases, documentação, relatórios e programação completa.",
    },
    {
      name: "Webservice (Java + Spring Boot)",
      link: "https://github.com/kauapaixao/webservice",
      description:
        "Projeto introdutório para estudo de APIs, serviços REST e persistência.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 p-8 flex flex-col items-center">
      {/* Top Profile Section */}
      <section className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl font-bold mb-2">Kauã da Silva Paixão</h1>
        <p className="text-lg text-slate-700 mb-4">
          Estudante de <b>Sistemas de Informação</b> no Mackenzie.
        </p>

        {/* Top Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">

          {/* LinkedIn */}
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/kaua-paixao10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>

          {/* Currículo */}
          <Button variant="default" asChild>
            <a href="/curriculo-kaua-paixao.pdf" download>
              <FileDown className="mr-2 h-4 w-4" /> Baixar Currículo
            </a>
          </Button>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project) => (
          <Card key={project.name} className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-slate-600 mb-4">{project.description}</p>

              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-slate-500 text-sm">
        © {new Date().getFullYear()} Kauã Paixão. Todos os direitos reservados.
      </footer>
    </main>
  );
}
