// src/pages/Home/HomeContent/Projects/technologyList.ts

export enum TechnologyName {
  REACT = "React",
  NODEJS = "Node.js",
  POSTGRESQL = "PostgreSQL",
  DOCKER = "Docker",
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  PYTHON = "Python",
  AWS = "AWS",
  GCP = "GCP",
  AZURE = "Azure",
  REDIS = "Redis",
  MONGODB = "MongoDB",
  EXPRESS = "Express",
  NGINX = "Nginx",
  VITE = "Vite",
  TAILWIND = "Tailwind CSS",
  SASS = "Sass",
  HTML = "HTML5",
  CSS = "CSS3",
  GIT = "Git",
  GITHUB = "GitHub",
  JEST = "Jest",
  CYPRESS = "Cypress",
  STORYBOOK = "Storybook",
  FIGMA = "Figma",
  CHAKRA = "Chakra UI",
  MATERIALUI = "Material UI",
  NEXTJS = "Next.js",
  VERCEL = "Vercel",
  NETLIFY = "Netlify",
  FIREBASE = "Firebase",
  GRAPHQL = "GraphQL",
  APOLLO = "Apollo",
  PRISMA = "Prisma",
  STRAPI = "Strapi",
  WORDPRESS = "WordPress",
  JIRA = "Jira",
  SLACK = "Slack",
  ZENDESK = "Zendesk",
  TRELLO = "Trello",
  BITBUCKET = "Bitbucket",
  DOCKERHUB = "Docker Hub",
  KUBERNETES = "Kubernetes",
  SENTRY = "Sentry",
  RUST = "Rust",
  GO = "Go",
  PHP = "PHP",
  RUBY = "Ruby",
  SWIFT = "Swift",
  JAVA = "Java",
}

export interface TechnologyInfo {
  name: TechnologyName;
  label: string;
  logo: string;
}

export const TECHNOLOGIES: TechnologyInfo[] = [
  {
    name: TechnologyName.REACT,
    label: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: TechnologyName.NODEJS,
    label: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: TechnologyName.POSTGRESQL,
    label: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: TechnologyName.DOCKER,
    label: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: TechnologyName.TYPESCRIPT,
    label: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: TechnologyName.CHAKRA,
    label: "Chakra UI",
    logo: "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg",
  },
  {
    name: TechnologyName.PYTHON,
    label: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: TechnologyName.EXPRESS,
    label: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: TechnologyName.GRAPHQL,
    label: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: TechnologyName.AWS,
    label: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: TechnologyName.KUBERNETES,
    label: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: TechnologyName.PHP,
    label: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: TechnologyName.WORDPRESS,
    label: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: TechnologyName.JEST,
    label: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: TechnologyName.NEXTJS,
    label: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  // ...add more as needed, following the pattern above
];
