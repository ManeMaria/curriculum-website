import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon } from '@/components/github-icon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import portrait from '@/assets/portrait-matrix.webp'
import { projects, stack, workProjects } from '@/lib/projects'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featured = projects.slice(0, 4)

  return (
    <div className="flex flex-col gap-24 py-16 sm:py-24">
      <section id="inicio" className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6">
        <div>
          <p className="text-primary/70 mb-2 font-mono text-sm">$ whoami</p>
          <h1 className="text-glow text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            César Damasceno
          </h1>
          <p className="text-muted-foreground mt-4 max-w-prose text-base sm:text-lg">
            Desenvolvedor web — React, Node e TypeScript. Construindo interfaces e APIs em
            Pernambuco, Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/projetos">ver projetos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/" hash="contato">
                contato
              </Link>
            </Button>
          </div>
        </div>
        <div className="border-primary/30 shadow-primary/10 mx-auto w-full max-w-xs overflow-hidden rounded-lg border shadow-lg sm:max-w-sm">
          <img
            src={portrait}
            alt="Retrato de César Damasceno estilizado como chuva digital Matrix"
            className="w-full"
            width={900}
            height={1350}
          />
        </div>
      </section>

      <section id="projetos">
        <SectionHeading index="01" title="Projetos" subtitle="selecionados" />
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/projetos" className="text-primary text-sm hover:underline">
            ver todos os projetos →
          </Link>
        </div>
      </section>

      <section id="experiencia">
        <SectionHeading index="02" title="Experiência" subtitle="projetos na Loomi" />
        <div className="grid gap-4 sm:grid-cols-2">
          {workProjects.map((work) => (
            <Card key={work.name} className="border-border bg-card/60">
              <CardHeader>
                <CardTitle className="text-primary font-mono text-base">{work.name}</CardTitle>
                <CardDescription className="text-foreground/80">{work.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80 font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="sobre">
        <SectionHeading index="03" title="Stack" />
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="outline" className="border-primary/30 text-primary/80 font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="bg-border/60" />

      <section id="contato" className="scroll-mt-20">
        <SectionHeading index="04" title="Contato" />
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:mirandacesar598@gmail.com"
            className="border-border hover:border-primary hover:text-primary flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
          >
            <Mail className="size-4" /> mirandacesar598@gmail.com
          </a>
          <a
            href="https://github.com/ManeMaria"
            target="_blank"
            rel="noreferrer"
            className="border-border hover:border-primary hover:text-primary flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
          >
            <GithubIcon className="size-4" /> github.com/ManeMaria
          </a>
          <a
            href="https://www.linkedin.com/in/cesardamasceno-dev/"
            target="_blank"
            rel="noreferrer"
            className="border-border hover:border-primary hover:text-primary flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
          >
            linkedin.com/in/cesardamasceno-dev
          </a>
        </div>
      </section>
    </div>
  )
}
