import { TechnologyName } from "./technologyList";

const ProjectTechnologyCategory = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  DEVOPS: "DevOps",
};

export type ProjectTechnologyCategory =
  (typeof ProjectTechnologyCategory)[keyof typeof ProjectTechnologyCategory];

export interface ProjectTechnology {
  name: TechnologyName;
  category: ProjectTechnologyCategory;
}

export interface ProjectDetails {
  name: string;
  url: string;
  role: string;
  dates: string;
  description: string;
  screenshots: {
    src: string;
    alt: string;
    description: string;
  }[];
  technologies: ProjectTechnology[];
}
