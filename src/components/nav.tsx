import { Link, useLocation } from '@tanstack/react-router'
import { CornerFrame } from '@/components/corner-frame'
import { useScrambleText } from '@/lib/use-scramble-text'

const links = [
  { label: 'Início', to: '/' as const, hash: undefined },
  { label: 'Projetos', to: '/projetos' as const, hash: undefined },
  { label: 'Contato', to: '/' as const, hash: 'contato' },
]

export function Nav() {
  const location = useLocation()
  const logoText = useScrambleText('Cesão')

  return (
    <header className="border-border/60 bg-background/70 sticky top-0 z-20 border-b backdrop-blur">
      <CornerFrame className="w-full px-4 sm:px-8 lg:px-16">
        <nav className="flex items-center justify-between py-3">
          <Link to="/" className="text-primary text-glow w-24 font-mono text-base font-semibold sm:text-lg">
            {logoText}
          </Link>
          <ul className="flex items-center gap-4 text-base sm:gap-6 sm:text-lg">
            {links.map((link) => {
              const isActive = link.to === '/' ? location.pathname === '/' && location.hash === (link.hash ?? '') : location.pathname === link.to

              return (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className={`transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                href="https://github.com/ManeMaria"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </CornerFrame>
    </header>
  )
}
