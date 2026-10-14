# César Damasceno — portfólio

Site pessoal/portfólio, estilo terminal/Matrix. React + TypeScript + Vite + TanStack Router + Tailwind CSS v4 + shadcn/ui.

Demo: https://manemaria.github.io/curriculum-website/ (ou ver `public/llms.txt` / `public/resume.json` para dados estruturados)

## Stack

- React 19 + TypeScript
- TanStack Router (file-based)
- Tailwind CSS v4
- shadcn/ui (Radix UI primitives)
- Vite + oxlint

## Rodando localmente

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` — servidor de desenvolvimento
- `pnpm build` — type-check (`tsc -b`) + build de produção
- `pnpm preview` — preview do build
- `pnpm lint` — oxlint

## Estrutura

- `src/routes/` — páginas (home, projetos)
- `src/lib/projects.ts` — dados de projetos, stack e experiência profissional
- `src/components/` — componentes de UI
- `public/resume.json` — currículo em formato [JSON Resume](https://jsonresume.org/)
- `public/llms.txt` — contexto do site para LLMs
