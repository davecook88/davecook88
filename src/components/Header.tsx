import { FC, useEffect } from "preact/compat";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "#/pages/Home/HomeContent/constants";
import { SocialLinks } from "./SocialLinks";
import { useRef, useState } from "preact/hooks";
import { JsonExplorer } from "./JsonExplorer";
import { debounce } from "#/utils/debounce";

interface HeaderProps {
  className?: string;
}

const getScrollPercentage = (event: Event) => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  // percentage of screenheight scrolled
  const screenHeight = window.innerHeight;
  const scrolledPercentage = (scrollTop / screenHeight) * 100;
  console.log("Scroll position:", scrollTop);
  console.log("Scrolled percentage:", scrolledPercentage);
  return scrolledPercentage;
};

const MAX_FONT_SIZE = 50; // Maximum font size in pixels
const MIN_FONT_SIZE = 20; // Minimum font size in pixels

export const Header: FC<HeaderProps> = ({ className = "" }) => {
  const currentView = useParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS;

  const [isSticky, setIsSticky] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  // Define the JSON data structure for the explorer
  const jsonData = {
    name: "Dave Cook",
    role: "Senior Full Stack Developer",
    location: "Tula de Allende, Mexico",
    skills: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "HTML/CSS",
        "Tailwind CSS",
      ],
      backend: [
        "Node.js",
        "Python",
        "FastAPI",
        "Express",
        "PostgreSQL",
        "MongoDB",
      ],
      devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
      other: ["Git", "REST APIs", "GraphQL", "Testing (Jest, Pytest)"],
    },
    experience: [
      {
        company: { _val: "Miruni.io", _link: "https://miruni.io" },
        position: "Senior Fullstack Engineer",
        period: "Jun 2023 - Present",
        description:
          "Principal full-stack developer in a small team of a productivity SaaS startup.",
      },
      {
        company: "Turn Technologies",
        position: "Senior Fullstack Engineer",
        period: "2022 - Jun 2023",
        description: "Sole-backend engineer for AI-powered product, Advise.",
      },
    ],
    education: [
      {
        degree: "MA TESOL",
        institution: "University of Birmingham",
      },
      {
        degree: "BA European Languages",
        institution: "University of Aberystwyth",
      },
    ],
    contact: {
      email: "dave@mamalon.dev",
      github: "https://github.com/davecook88",
      linkedin: "https://www.linkedin.com/in/david-cook-a1549ba2/",
    },
  };

  return (
    <div
      className={
        "w-max font-sans flex items-center transition-all duration-300 ease-in-out h-full"
      }
    >
      <div className="flex flex-col h-full text-white text-2xl font-mono">
        <JsonExplorer data={jsonData} parentKey="root" defaultOpen={true} />
      </div>
    </div>
  );
};
