import { FC, useEffect } from "preact/compat";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "#/pages/Home/HomeContent/constants";
import { SocialLinks } from "./SocialLinks";
import { useRef, useState } from "preact/hooks";
import { JsonExplorer } from "./JsonExplorer";

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

// Debounce utility (leading edge: run immediately, then wait)
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeout: number | undefined;
  let canRun = true;
  return (...args: Parameters<T>) => {
    if (canRun) {
      fn(...args);
      canRun = false;
      timeout = window.setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

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
        "Tailwind CSS"
      ],
      backend: [
        "Node.js",
        "Python",
        "FastAPI",
        "Express",
        "PostgreSQL",
        "MongoDB"
      ],
      devops: [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Terraform"
      ],
      other: [
        "Git",
        "REST APIs",
        "GraphQL",
        "Testing (Jest, Pytest)"
      ]
    },
    experience: [
      {
        company: "Miruni.io",
        position: "Senior Fullstack Engineer",
        period: "Jun 2023 - Present",
        description: "Principal full-stack developer in a small team of a productivity SaaS startup."
      },
      {
        company: "Turn Technologies",
        position: "Senior Fullstack Engineer",
        period: "2022 - Jun 2023",
        description: "Sole-backend engineer for AI-powered product, Advise."
      }
    ],
    education: [
      {
        degree: "MA TESOL",
        institution: "University of Birmingham"
      },
      {
        degree: "BA European Languages",
        institution: "University of Aberystwyth"
      }
    ],
    contact: {
      email: "dave@mamalon.dev",
      github: "https://github.com/davecook88",
      linkedin: "https://www.linkedin.com/in/david-cook-a1549ba2/"
    }
  };

  useEffect(() => {
    const updateFontSize = (event: Event) => {
      const scrolledPercentage = getScrollPercentage(event);
      const headerElement = document.querySelector("#header-name");
      if (headerElement && headerElement instanceof HTMLElement) {
        const newFontSize = Math.max(
          MIN_FONT_SIZE,
          Math.min(
            MAX_FONT_SIZE,
            (1 - scrolledPercentage / 100) * MAX_FONT_SIZE
          )
        );
        headerElement.style.setProperty("font-size", `${newFontSize}px`);
      }
      const headerNameContainer =
        document.querySelectorAll(".header-name-other");
      if (headerNameContainer) {
        headerNameContainer.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.setProperty(
              "opacity",
              `${0.5 - scrolledPercentage / 100}`
            );
          }
        });
      }

      // Sticky logic
      const rect = nameRef.current?.getBoundingClientRect();
      if (rect) {
        console.log("Header rect:", rect.top);
        if (rect.top <= 0 && !isSticky) {
          console.log("Header is sticky now");
          setIsSticky(true);
        } else if (rect.top > 0 && isSticky) {
          console.log("Header is no longer sticky");
          setIsSticky(false);
        }
      }
    };
    const debouncedUpdateFontSize = debounce(updateFontSize, 50);

    window.addEventListener("scroll", debouncedUpdateFontSize);
    return () => {
      window.removeEventListener("scroll", debouncedUpdateFontSize);
    };
  }, [isSticky]);

  return (
    <div
      className={
        "w-max font-sans flex items-center transition-all duration-300 ease-in-out h-full"
      }
    >
      <div className="flex flex-col h-full text-white text-2xl font-mono">
        <JsonExplorer data={jsonData} />
      </div>
    </div>
  );
};
