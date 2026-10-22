import { useEffect, useState } from 'react'
import { useScrambleText } from '@/lib/use-scramble-text'

const SESSION_KEY = 'site-loaded'
const DURATION_MS = 1400

export function LoadingScreen() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY))
  const logoText = useScrambleText('Cesão', 1000)

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setVisible(false)
    }, DURATION_MS)
    return () => clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="bg-background fixed inset-0 z-50 flex items-center justify-center" aria-hidden>
      <span className="text-primary/50 absolute top-4 left-4 h-3 w-3 border-t border-l" />
      <span className="text-primary/50 absolute top-4 right-4 h-3 w-3 border-t border-r" />
      <span className="text-primary/50 absolute bottom-4 left-4 h-3 w-3 border-b border-l" />
      <span className="text-primary/50 absolute right-4 bottom-4 h-3 w-3 border-r border-b" />

      <span className="text-primary/60 absolute top-1/2 left-4 -translate-y-1/2 font-mono text-xs tracking-widest sm:left-8">
        LOADING
      </span>
      <span className="text-primary/60 absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs tracking-widest sm:right-8">
        LOADING
      </span>

      <span className="text-primary text-glow font-mono text-2xl font-semibold tracking-widest sm:text-4xl">{logoText}</span>
    </div>
  )
}
