import type { ReactNode } from 'react'
import { cn } from 'cn'

export function CornerFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('corner-frame', className)}>
      <span className="corner-frame-bl" />
      <span className="corner-frame-br" />
      {children}
    </div>
  )
}
