export interface ProjectDetails {
  name: string;
  dates: string;
  description: string;
  screenshots: {
    src: string;
    alt: string;
    description: string;
  }[];
  technologies: string[];
}
