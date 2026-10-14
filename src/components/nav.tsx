import { Link, useLocation } from '@tanstack/react-router'

const links = [
  { label: 'Início', to: '/' as const, hash: undefined },
  { label: 'Projetos', to: '/projetos' as const, hash: undefined },
  { label: 'Contato', to: '/' as const, hash: 'contato' },
]

export function Nav() {
  const location = useLocation()

  return (
    <header className="border-border/60 bg-background/70 sticky top-0 z-20 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="text-primary text-glow font-mono text-sm font-semibold">
          ~/cesar
        </Link>
        <ul className="flex items-center gap-4 text-sm sm:gap-6">
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
    </header>
  )
}
