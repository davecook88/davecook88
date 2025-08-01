import { ProjectDetails } from "../types";
import { TechnologyName } from "../technologyList";

export const ThriveCalendarProject: ProjectDetails = {
  name: "Thrive Calendar Widget",
  role: "Sole Developer",
  url: "https://www.thriveinspanish.com/",
  dates: "2025",
  description:
    "The Thrive in Spanish online language school, while successfully using Wix for its core website, faced a critical business challenge with its booking system. The platform's native tools did not provide an aggregated calendar view, forcing potential students to navigate a confusing and fragmented series of pages to view teacher availability and class schedules. This created significant friction in the sign-up process, making it difficult for new users to quickly find a suitable class and likely leading to lost conversions. The primary business requirement was to create a frictionless, all-in-one booking experience that would present a comprehensive schedule in a single, intuitive interface.\n\nThis project presented unique technical hurdles due to the restrictive nature of the Wix Velo development environment. The platform imposes a non-standard browser API and limits direct data communication between custom elements and the parent page. To overcome these constraints, I engineered a solution centered on a lightweight, performant web component using Lit. I designed a robust communication channel where complex data, like teacher schedules, was serialized to JSON to be passed into the component. For interactions flowing out, the component dispatches `CustomEvent` instances to notify the Wix page of user actions, such as selecting a class. This architecture, combined with the power of FullCalendar for the UI and TypeScript for code robustness, allowed for the creation of a sophisticated, modern application within a traditionally closed ecosystem.\n\nThe final result is a seamless, responsive, and highly professional calendar widget that has fundamentally improved the user experience on the school's website. Students can now instantly see all available classes, filter by their preferred teacher, and make a booking in seconds, directly from the homepage. This not only enhances the site's usability and appeal but also directly solves the initial business problem by making the school's offerings more accessible. ",
  screenshots: [
    {
      src: "https://github.com/davecook88/wix-calendar-web-component/blob/main/public/screenshot.png?raw=true",
      alt: "Thrive Calendar Screenshot",
      description:
        "The calendar embedded and working on the thriveinspanish.com homepage",
    },
  ],
  technologies: [
    { name: TechnologyName.LIT, category: "Frontend" },
    { name: TechnologyName.FULLCALENDAR, category: "Frontend" },
    { name: TechnologyName.VITE, category: "Build Tool" },
    { name: TechnologyName.TYPESCRIPT, category: "Language" },
  ],
};
