import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CornerFrame } from '@/components/corner-frame'
import { ProjectCover } from '@/components/project-cover'
import type { Project } from '@/lib/projects'

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-carousel-card]')
    const amount = (card?.offsetWidth ?? 280) + 16
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <Button variant="outline" size="icon-sm" aria-label="anterior" onClick={() => scrollByCard(-1)}>
          <ChevronLeft className="size-4" />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="próximo" onClick={() => scrollByCard(1)}>
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div ref={trackRef} className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/projetos/$slug"
            params={{ slug: project.slug }}
            data-carousel-card
            className="group w-[85vw] shrink-0 snap-start sm:w-[460px] lg:w-[520px]"
          >
            <CornerFrame className="border-border group-hover:border-primary/50 overflow-hidden rounded-lg border transition-colors">
              <ProjectCover slug={project.slug} className="aspect-[16/10]" />
              <div className="bg-card/60 p-6">
                <p className="text-primary font-mono text-lg font-semibold">{project.name}</p>
                <p className="text-muted-foreground mt-2 line-clamp-2 text-base">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/30 text-primary/80 font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CornerFrame>
          </Link>
        ))}
      </div>
    </div>
  )
}
