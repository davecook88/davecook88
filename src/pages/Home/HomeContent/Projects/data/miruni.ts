import { ProjectDetails } from "../types";
import { TechnologyName } from "../technologyList";

export const MiruniProject: ProjectDetails = {
  name: "Miruni",
  url: "https://miruni.io",
  dates: "2022 - Present",
  description:
    "Miruni enables stakeholders to submit website edit requests directly from the site, making it easy to provide clear feedback with screenshots and context. AI-powered analysis generates actionable suggestions for each request, allowing updates to be applied instantly with a single click—no more endless email chains or delays.\n\nAs the sole developer, I designed, built, deployed, and maintained Miruni’s entire platform, including the WordPress plugin, backend services, and automation systems. The project required building and integrating multiple independent apps, ensuring seamless workflows and reliability for high-volume, enterprise-grade use.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/davecook88/davecook88/refs/heads/main/public/screenshots/miruni/full-page-details.png",
      alt: "Smart edit details page",
      description:
        "When a Wordpress admin reviews an edit request, this screen displays the AI suggestions generated, a before and after comparison of the webpage, the chat element for discussion, and the option to approve or reject the changes.",
    },
    {
      src: "https://raw.githubusercontent.com/davecook88/davecook88/refs/heads/main/public/screenshots/miruni/full-page-summary.png",
      alt: "Smart edit list page",
      description:
        "This page provides an overview of all edit requests, showing the status of each request, the date submitted, and the ability to filter by status or date range. It allows administrators to quickly assess pending requests.",
    },
  ],
  technologies: [
    { name: TechnologyName.REACT, category: "Frontend" },
    { name: TechnologyName.NEXTJS, category: "Frontend" },
    { name: TechnologyName.TYPESCRIPT, category: "Frontend" },
    { name: TechnologyName.CHAKRA, category: "Frontend" },
    { name: TechnologyName.NODEJS, category: "Backend" },
    { name: TechnologyName.PYTHON, category: "Backend" },
    { name: TechnologyName.EXPRESS, category: "Backend" },
    { name: TechnologyName.POSTGRESQL, category: "Database" },
    { name: TechnologyName.GRAPHQL, category: "API" },
    { name: TechnologyName.AWS, category: "Cloud" },
    { name: TechnologyName.KUBERNETES, category: "Cloud" },
    { name: TechnologyName.PHP, category: "Backend" },
    { name: TechnologyName.WORDPRESS, category: "CMS" },
    { name: TechnologyName.JEST, category: "Testing" },
    { name: TechnologyName.DOCKER, category: "DevOps" },
    // Add more as needed, e.g. AWS Lambda, EKS, CloudWatch Events, etc. If you want to add custom enums, add them to technologyList.ts
  ],
};
