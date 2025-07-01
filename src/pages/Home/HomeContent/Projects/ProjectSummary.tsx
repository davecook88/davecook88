import { FC } from "preact/compat";
import { ProjectDetails } from "./types";
import FullPageScreenshot from "#/components/NetworkGraph/Screenshot/FullPageScreenshot";
import ScreenshotCarousel from "#/components/NetworkGraph/Screenshot/ScreenshotCarousel";
import { TECHNOLOGIES, TechnologyName } from "./technologyList";

export interface ProjectSummaryProps {
  project: ProjectDetails;
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({ project }) => {
  const { name, dates, description, screenshots, url, technologies } = project;
  const technologiesByCategory = technologies.reduce((acc, tech) => {
    const category = tech.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, ProjectDetails["technologies"]>);
  return (
    <div className="project-summary p-4  rounded-lg shadow-md">
      <a href={url} target={"_blank"} rel="noopener noreferrer">
        <h2 className="text-xl font-bold mb-2 hover:text-accent-500 cursor-pointer">
          {name}
        </h2>
      </a>
      <p className="text-sm text-gray-500 mb-2">{dates}</p>
      <p className="mb-4">{description}</p>
      <div className="screenshots grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <ScreenshotCarousel screenshots={screenshots} />
      </div>
      <div className="technologies grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {Object.entries(technologiesByCategory).map(
          ([category, technologies], index) => (
            <div key={index} className="technology-category mb-2">
              <h3 className="text-md font-semibold mb-2 text-center">
                {category}
              </h3>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-0 list-none">
                {technologies.map((tech, idx) => {
                  const techInfo = TECHNOLOGIES.find(
                    (t) => t.name === tech.name
                  );
                  return (
                    <li
                      key={idx}
                      className="flex flex-col items-center justify-center text-xs text-gray-700 mb-2"
                    >
                      {techInfo && (
                        <img
                          src={techInfo.logo}
                          alt={techInfo.label}
                          title={techInfo.label}
                          className="w-8 h-8 mb-1"
                        />
                      )}
                      <span
                        className="truncate text-center w-full"
                        title={techInfo ? techInfo.label : tech.name}
                      >
                        {techInfo ? techInfo.label : tech.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};
