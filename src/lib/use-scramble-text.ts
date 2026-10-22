import { useEffect, useState } from 'react'

const SCRAMBLE_CHARS = 'アイウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function useScrambleText(target: string, durationMs = 700) {
  const [text, setText] = useState(target)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(target)
      return
    }

    const frameMs = 40
    const totalFrames = Math.ceil(durationMs / frameMs)
    let frame = 0

    const interval = setInterval(() => {
      frame++
      const revealCount = Math.floor((frame / totalFrames) * target.length)
      setText(
        target
          .split('')
          .map((char, i) => (char === ' ' || i < revealCount ? char : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]))
          .join(''),
      )
      if (frame >= totalFrames) {
        setText(target)
        clearInterval(interval)
      }
    }, frameMs)

    return () => clearInterval(interval)
  }, [target, durationMs])

  return text
}
