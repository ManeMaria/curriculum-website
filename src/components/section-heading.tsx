export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="text-primary/60 text-sm">{index}</span>
      <span className="text-primary/30">·</span>
      <h2 className="text-foreground text-glow text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      {subtitle ? <span className="text-muted-foreground hidden text-sm sm:inline">{subtitle}</span> : null}
    </div>
  )
}
