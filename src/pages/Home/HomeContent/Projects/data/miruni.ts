import { ProjectDetails } from "../types";

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
  ],
  technologies: ["React", "Node.js", "PostgreSQL", "Express", "TypeScript"],
};
