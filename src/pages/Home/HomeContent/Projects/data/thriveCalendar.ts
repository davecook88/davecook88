import { ProjectDetails } from "../types";
import { TechnologyName } from "../technologyList";

export const ThriveCalendarProject: ProjectDetails = {
  name: "Thrive Calendar Widget",
  role: "Sole Developer",
  url: "https://www.thriveinspanish.com/",
  dates: "2025",
  description:
    "A custom-built, responsive calendar component for an online language school. It aggregates teacher availability and course schedules from the Wix Booking system into a single, user-friendly view, solving a key limitation of the default Wix UI. It allows students to easily find and book classes without navigating multiple pages.",
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
