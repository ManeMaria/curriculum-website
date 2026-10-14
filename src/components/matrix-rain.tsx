import { useEffect, useRef } from 'react'

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function MatrixRain({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const fontSize = 16
    let columns = 0
    let drops: number[] = []

    function resize() {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40))
    }

    resize()
    window.addEventListener('resize', resize)

    if (prefersReducedMotion) return () => window.removeEventListener('resize', resize)

    let raf: number
    let lastTime = 0
    const frameDelay = 50

    function draw(time: number) {
      raf = requestAnimationFrame(draw)
      if (time - lastTime < frameDelay) return
      lastTime = time
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(4, 10, 5, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillStyle = '#c9ffd6'
        ctx.fillText(char, x, y)
        ctx.fillStyle = '#39ff6a'
        ctx.fillText(char, x, y - fontSize)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
    />
  )
}
