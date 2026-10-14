export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  repo: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'dr1p-site',
    name: 'Dr1p-site',
    description: 'Site institucional construído em TypeScript.',
    tags: ['TypeScript'],
    repo: 'https://github.com/ManeMaria/Dr1p-site',
    demo: 'https://dr1p-site.vercel.app',
  },
  {
    slug: '3d-elements-website',
    name: '3d_elements_website',
    description: 'Site experimental com elementos 3D interativos usando React Three Fiber e Drei.',
    tags: ['React', 'TypeScript', 'Three.js'],
    repo: 'https://github.com/ManeMaria/3d_elements_website',
    demo: 'https://manemaria.github.io/3d_elements_website/',
  },
  {
    slug: 'mfe-mf-service-poc',
    name: 'mfe-mf-service-POC',
    description:
      'POC de micro frontends: builds independentes com versões diferentes de React e roteamento via Nginx.',
    tags: ['React', 'JavaScript', 'Nginx'],
    repo: 'https://github.com/ManeMaria/mfe-mf-service-POC',
  },
  {
    slug: 'instagram-downloader-api',
    name: 'instagram-downloader-api',
    description: 'API para baixar mídias (fotos/vídeos) públicas do Instagram a partir de uma URL.',
    tags: ['TypeScript', 'Node', 'API'],
    repo: 'https://github.com/ManeMaria/instagram-downloader-api',
  },
  {
    slug: 'assign-keys',
    name: 'assign_keys',
    description: 'Endpoint que gera um token JWT assinado com chave privada RSA (.pem), usando RS256.',
    tags: ['JavaScript', 'JWT', 'Security'],
    repo: 'https://github.com/ManeMaria/assign_keys',
  },
  {
    slug: 'tempo-no-forno',
    name: 'tempo-no-forno',
    description:
      'App para quem está com pressa e quer preparar receitas em menos tempo — ou sem pressa, com mais tempo de forno.',
    tags: ['TypeScript', 'React'],
    repo: 'https://github.com/ManeMaria/tempo-no-forno',
  },
  {
    slug: 'website-apresetation-s30-pm',
    name: 'website_apresetation_s30_PM',
    description: 'Single page de apresentação do serviço S30.',
    tags: ['TypeScript'],
    repo: 'https://github.com/ManeMaria/website_apresetation_s30_PM',
  },
  {
    slug: 'matrix-rain',
    name: 'matrix-rain',
    description: 'Chuva de código estilo Matrix renderizada em canvas puro, sem dependências.',
    tags: ['JavaScript', 'Canvas'],
    repo: 'https://github.com/ManeMaria/matrix-rain',
    demo: 'https://manemaria.github.io/matrix-rain/',
  },
  {
    slug: 'claude-plugins',
    name: 'claude-plugins',
    description: 'Marketplace interno de plugins para o Claude Code.',
    tags: ['Shell', 'DevTools'],
    repo: 'https://github.com/ManeMaria/claude-plugins',
  },
]

export const stack = [
  'TypeScript',
  'React',
  'Node.js',
  'NestJS',
  'TanStack',
  'Tailwind',
  'Prisma',
  'JWT / Auth',
  'Micro Frontends',
  'Python / Django',
  'Go',
  'C#',
  'Claude Code',
  'Docker',
  'Docker Compose',
  'Nginx',
  'S3',
  'EC2',
  'Cognito',
  'Linux',
  'SOLID',
  'DDD',
  'Playwright',
  'Jest',
  'Vitest',
  'Langfuse',
  'LangChain',
  'LangGraph',
  'MongoDB',
  'PostgreSQL',
  'Neo4j',
  'Vercel',
  'Netlify',
  'GitHub Actions',
]

export type WorkProject = {
  name: string
  description: string
  tags: string[]
}

export const workProjects: WorkProject[] = [
  {
    name: 'People Central API — Gestão de RH',
    description:
      'API servindo 500+ usuários simultâneos, com auth JWT + Passport, documentação automática via Swagger/OpenAPI e testes de integração nos endpoints críticos.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'JWT', 'Swagger'],
  },
  {
    name: 'Trybo BFF Web Service — E-commerce',
    description:
      'BFF agregando 8 APIs, com integração S3 via presigned URLs, cache distribuído em Redis (-45% de latência) e mensageria event-driven com RabbitMQ.',
    tags: ['NestJS', 'Microservices', 'AWS', 'Redis', 'RabbitMQ'],
  },
  {
    name: 'User API — Microserviço em Go',
    description:
      'Microserviço de gestão de usuários em Go, performance ultra-otimizada, containerizado em Docker, com connection pooling para 1000+ req/seg.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'REST'],
  },
  {
    name: 'Múltiplo Client — Dashboard SaaS',
    description:
      'Dashboard com tabelas complexas e filtros avançados servindo 10k+ usuários ativos; componentes Radix UI reutilizáveis (-25% bundle size) e queries otimizadas com React Query.',
    tags: ['React', 'TypeScript', 'Radix UI', 'React Query'],
  },
  {
    name: 'Portal do Morador — Plataforma Residencial',
    description:
      'Plataforma residencial em Next.js com SSR/SSG (-50% Time to First Byte) e testes end-to-end com Cypress cobrindo os fluxos críticos.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Cypress'],
  },
]
