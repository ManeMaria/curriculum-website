import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { CornerFrame } from '@/components/corner-frame'
import { GithubIcon } from '@/components/github-icon'
import { ProjectCover } from '@/components/project-cover'
import { projects } from '@/lib/projects'

export const Route = createFileRoute('/projetos/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return project
  },
  component: CaseStudy,
})

function CaseStudy() {
  const project = Route.useLoaderData()

  return (
    <div className="py-16 sm:py-24">
      <Link to="/projetos" className="text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-1.5 text-sm transition-colors">
        <ArrowLeft className="size-4" /> voltar para projetos
      </Link>

      <CornerFrame className="mb-10 overflow-hidden rounded-lg border border-border">
        <ProjectCover slug={project.slug} className="aspect-[21/9]" />
      </CornerFrame>

      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-glow font-mono text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h1>
          <p className="text-muted-foreground mt-2 max-w-prose">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80 font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <CaseStudySection index="01" title="Overview" body={project.overview} />
        <CaseStudySection index="02" title="Challenge" body={project.challenge} />
        <CaseStudySection index="03" title="Solution" body={project.solution} />
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="border-border hover:border-primary hover:text-primary flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
        >
          <GithubIcon className="size-4" /> repositório
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="border-border hover:border-primary hover:text-primary flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
          >
            <ExternalLink className="size-4" /> ver demo
          </a>
        ) : null}
      </div>
    </div>
  )
}

function CaseStudySection({ index, title, body }: { index: string; title: string; body?: string }) {
  return (
    <div className="border-border border-t pt-4">
      <p className="text-primary/60 mb-2 font-mono text-xs">{index}</p>
      <h2 className="text-foreground mb-2 font-mono text-sm font-semibold tracking-wide uppercase">{title}</h2>
      <p className="text-muted-foreground text-sm">{body ?? 'Em breve.'}</p>
    </div>
  )
}
