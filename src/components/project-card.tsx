import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GithubIcon } from '@/components/github-icon'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border bg-card/60 hover:border-primary/50 hover:shadow-primary/10 transition-colors hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary font-mono text-base">{project.name}</CardTitle>
        <CardAction>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Repositório de ${project.name} no GitHub`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>
        </CardAction>
        <CardDescription className="text-foreground/80">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80 font-mono text-xs">
            {tag}
          </Badge>
        ))}
      </CardContent>
      {project.demo ? (
        <CardFooter>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-primary inline-flex items-center gap-1 text-sm hover:underline"
          >
            ver demo <ExternalLink className="size-3.5" />
          </a>
        </CardFooter>
      ) : null}
    </Card>
  )
}
