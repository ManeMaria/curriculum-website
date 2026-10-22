export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  repo: string
  demo?: string
  overview?: string
  challenge?: string
  solution?: string
}

export const projects: Project[] = [
  {
    slug: 'dr1p-site',
    name: 'Dr1p-site',
    description: 'Site institucional construído em TypeScript.',
    tags: ['TypeScript'],
    repo: 'https://github.com/ManeMaria/Dr1p-site',
    demo: 'https://dr1p-site.vercel.app',
    overview: 'Site institucional para apresentar a marca e os produtos com uma navegação simples e direta.',
    challenge: 'Entregar uma presença online rápida, sem depender de um CMS pesado.',
    solution: 'Site estático em TypeScript, com build leve e deploy automatizado via Vercel.',
  },
  {
    slug: '3d-elements-website',
    name: '3d_elements_website',
    description: 'Site experimental com elementos 3D interativos usando React Three Fiber e Drei.',
    tags: ['React', 'TypeScript', 'Three.js'],
    repo: 'https://github.com/ManeMaria/3d_elements_website',
    demo: 'https://manemaria.github.io/3d_elements_website/',
    overview: 'Experimento de interface com cenas 3D interativas no navegador.',
    challenge: 'Explorar React Three Fiber mantendo performance aceitável em uma SPA comum.',
    solution: 'Cenas compostas com Drei, controles de câmera e carregamento sob demanda dos modelos.',
  },
  {
    slug: 'mfe-mf-service-poc',
    name: 'mfe-mf-service-POC',
    description:
      'POC de micro frontends: builds independentes com versões diferentes de React e roteamento via Nginx.',
    tags: ['React', 'JavaScript', 'Nginx'],
    repo: 'https://github.com/ManeMaria/mfe-mf-service-POC',
    overview: 'Prova de conceito de arquitetura de micro frontends com times independentes.',
    challenge: 'Rodar múltiplos apps React, em versões diferentes, sob um único domínio.',
    solution: 'Builds isolados por app e roteamento de path feito via Nginx, sem acoplar as versões de React.',
  },
  {
    slug: 'instagram-downloader-api',
    name: 'instagram-downloader-api',
    description: 'API para baixar mídias (fotos/vídeos) públicas do Instagram a partir de uma URL.',
    tags: ['TypeScript', 'Node', 'API'],
    repo: 'https://github.com/ManeMaria/instagram-downloader-api',
    overview: 'API simples para extrair mídia pública do Instagram a partir de uma URL de post.',
    challenge: 'Resolver a URL direta da mídia sem depender de login ou de bibliotecas não mantidas.',
    solution: 'Serviço Node/TypeScript que faz o parsing do post e devolve os links diretos de download.',
  },
  {
    slug: 'assign-keys',
    name: 'assign_keys',
    description: 'Endpoint que gera um token JWT assinado com chave privada RSA (.pem), usando RS256.',
    tags: ['JavaScript', 'JWT', 'Security'],
    repo: 'https://github.com/ManeMaria/assign_keys',
    overview: 'Serviço de emissão de tokens JWT assinados com chave assimétrica.',
    challenge: 'Garantir que a assinatura dos tokens pudesse ser validada por terceiros sem expor a chave privada.',
    solution: 'Assinatura RS256 com par de chaves RSA (.pem), chave pública livre para validação externa.',
  },
  {
    slug: 'tempo-no-forno',
    name: 'tempo-no-forno',
    description:
      'App para quem está com pressa e quer preparar receitas em menos tempo — ou sem pressa, com mais tempo de forno.',
    tags: ['TypeScript', 'React'],
    repo: 'https://github.com/ManeMaria/tempo-no-forno',
    overview: 'App de receitas filtradas por tempo de preparo disponível.',
    challenge: 'Ajudar quem tem pouco tempo a encontrar receitas viáveis sem rolar listas longas.',
    solution: 'Filtro por tempo no forno/preparo construído em React e TypeScript.',
  },
  {
    slug: 'website-apresetation-s30-pm',
    name: 'website_apresetation_s30_PM',
    description: 'Single page de apresentação do serviço S30.',
    tags: ['TypeScript'],
    repo: 'https://github.com/ManeMaria/website_apresetation_s30_PM',
    overview: 'Landing page de apresentação do serviço S30.',
    challenge: 'Comunicar a proposta do serviço em uma única página, de forma objetiva.',
    solution: 'Single page em TypeScript focada em conversão, sem rotas extras.',
  },
  {
    slug: 'matrix-rain',
    name: 'matrix-rain',
    description: 'Chuva de código estilo Matrix renderizada em canvas puro, sem dependências.',
    tags: ['JavaScript', 'Canvas'],
    repo: 'https://github.com/ManeMaria/matrix-rain',
    demo: 'https://manemaria.github.io/matrix-rain/',
    overview: 'Efeito visual de chuva de código estilo Matrix, para uso em qualquer página.',
    challenge: 'Rodar uma animação contínua e leve sem travar a thread principal.',
    solution: 'Canvas puro, sem dependências, desenhando frame a frame via requestAnimationFrame.',
  },
  {
    slug: 'claude-plugins',
    name: 'claude-plugins',
    description: 'Marketplace interno de plugins para o Claude Code.',
    tags: ['Shell', 'DevTools'],
    repo: 'https://github.com/ManeMaria/claude-plugins',
    overview: 'Marketplace interno para descobrir e instalar plugins do Claude Code.',
    challenge: 'Centralizar plugins dispersos em scripts soltos em um único catálogo.',
    solution: 'Estrutura de marketplace em shell scripts, simples de manter e estender.',
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
