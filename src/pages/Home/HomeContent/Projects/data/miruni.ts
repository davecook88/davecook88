import { ProjectDetails } from "../types";
import { TechnologyName } from "../technologyList";

export const MiruniProject: ProjectDetails = {
  name: "Miruni",
  dates: "2022 - Present",
  description:
    "Miruni is a comprehensive platform designed to streamline the management of student records, attendance, and academic performance for educational institutions. It offers a user-friendly interface for both administrators and students, facilitating efficient data handling and communication.",
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
    { name: TechnologyName.NODEJS, category: "Backend" },
    { name: TechnologyName.POSTGRESQL, category: "Database" },
    { name: TechnologyName.DOCKER, category: "DevOps" },
  ],
};
