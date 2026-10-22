import { cn } from 'cn'

function hashHue(slug: string) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) % 360
  return hash
}

export function ProjectCover({ slug, className }: { slug: string; className?: string }) {
  const hue = hashHue(slug)

  return (
    <div
      className={cn('bg-card relative flex w-full items-center justify-center overflow-hidden', className)}
      style={{
        backgroundImage: `
          linear-gradient(135deg, color-mix(in oklab, var(--primary) 18%, var(--card)) 0%, var(--card) 60%),
          repeating-linear-gradient(90deg, color-mix(in oklab, var(--primary) 8%, transparent) 0px, color-mix(in oklab, var(--primary) 8%, transparent) 1px, transparent 1px, transparent 24px)
        `,
        filter: `hue-rotate(${hue}deg)`,
      }}
    >
      <span className="text-primary/70 font-mono text-xs tracking-widest uppercase" style={{ filter: `hue-rotate(${-hue}deg)` }}>
        $ {slug}
      </span>
    </div>
  )
}
