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
  // ...add more as needed, following the pattern above
];
