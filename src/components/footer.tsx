export function Footer() {
  return (
    <footer className="border-border/60 text-muted-foreground border-t px-4 py-8 text-center text-xs sm:px-6">
      <p>
        feito por{' '}
        <a href="https://github.com/ManeMaria" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
          César Damasceno
        </a>{' '}
        · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
