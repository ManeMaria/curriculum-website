import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/projects'

export const Route = createFileRoute('/projetos')({
  component: Projetos,
})

function Projetos() {
  const [filter, setFilter] = useState<string | null>(null)
  const tags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(), [])
  const visible = filter ? projects.filter((p) => p.tags.includes(filter)) : projects

  return (
    <div className="py-16 sm:py-24">
      <SectionHeading index="01" title="Projetos" subtitle={`${projects.length} no total`} />

      <div className="mb-8 flex flex-wrap gap-2">
        <Badge
          variant={filter === null ? 'default' : 'outline'}
          className="hover:border-primary cursor-pointer font-mono text-xs"
          onClick={() => setFilter(null)}
        >
          todos
        </Badge>
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant={filter === tag ? 'default' : 'outline'}
            className="hover:border-primary cursor-pointer font-mono text-xs"
            onClick={() => setFilter(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
