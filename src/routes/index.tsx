import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectCarousel } from '@/components/project-carousel'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon } from '@/components/github-icon'
import { InteractiveCube } from '@/components/interactive-cube'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { projects, stack, workProjects } from '@/lib/projects'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featured = projects.slice(0, 4)

  return (
    <div className="flex flex-col gap-24 py-16 sm:py-24">
      <section id="inicio" className="relative grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6">
        <div className="bg-grid pointer-events-none absolute -inset-x-6 -inset-y-10 sm:-inset-x-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative">
          <p className="text-primary/70 mb-2 font-mono text-sm">$ whoami</p>
          <h1 className="text-glow text-fluid-hero leading-tight font-bold tracking-tight">César Damasceno</h1>
          <p className="text-muted-foreground mt-4 max-w-prose text-base sm:text-lg">
            Desenvolvedor web — React, Node e TypeScript. Construindo interfaces e APIs em
            Pernambuco, Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chamfer-frame">
              <Button asChild size="lg" className="chamfer-clip h-12 rounded-none px-7 text-base">
                <Link to="/projetos">ver projetos</Link>
              </Button>
            </span>
            <Button asChild variant="outline" size="lg" className="chamfer-clip h-12 rounded-none px-7 text-base">
              <Link to="/" hash="contato">
                contato
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto hidden h-[26rem] w-full [mask-image:radial-gradient(circle_at_center,black_55%,transparent_80%)] sm:block sm:max-w-md sm:h-[30rem] lg:max-w-lg lg:h-[34rem]">
          <InteractiveCube />
          <p className="text-muted-foreground pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-widest">
            arraste · clique
          </p>
        </div>
      </section>

      <section id="sobre">
        <Reveal>
          <SectionHeading index="01" title="Stack" />
          <div className="marquee-viewport hidden sm:block">
            <div className="marquee-track flex w-max gap-3">
              {[...stack, ...stack].map((tech, i) => (
                <Badge
                  key={`${tech}-${i}`}
                  variant="outline"
                  className="chamfer-clip-sm bg-background border-primary/50 text-primary shrink-0 rounded-none px-4 py-2 font-mono text-lg"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 sm:hidden">
            {stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="chamfer-clip-sm bg-background border-primary/50 text-primary rounded-none px-4 py-2 font-mono text-lg"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="projetos">
        <Reveal>
          <SectionHeading index="02" title="Projetos" subtitle="selecionados" />
          <ProjectCarousel projects={featured} />
          <div className="mt-6">
            <Link to="/projetos" className="text-primary text-sm hover:underline">
              ver todos os projetos →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="experiencia">
        <Reveal>
          <SectionHeading index="03" title="Experiência" subtitle="projetos na Loomi" />
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
        </Reveal>
      </section>

      <Separator className="bg-border/60" />

      <section id="contato" className="scroll-mt-20">
        <Reveal>
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
        </Reveal>
      </section>
    </div>
  )
}
