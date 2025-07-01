import { FC } from "preact/compat";
import { ProjectDetails } from "./types";
import FullPageScreenshot from "#/components/NetworkGraph/Screenshot/FullPageScreenshot";
import ScreenshotCarousel from "#/components/NetworkGraph/Screenshot/ScreenshotCarousel";
import { TECHNOLOGIES, TechnologyName } from "./technologyList";

export interface ProjectSummaryProps {
  project: ProjectDetails;
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({ project }) => {
  const { name, dates, description, screenshots, technologies } = project;
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
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{dates}</p>
      <p className="mb-4">{description}</p>
      <div className="screenshots grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <ScreenshotCarousel screenshots={screenshots} />
      </div>
      <div className="technologies flex flex-wrap gap-4">
        {Object.entries(technologiesByCategory).map(
          ([category, technologies], index) => (
            <div key={index} className="technology-category w-full mb-2">
              <h3 className="text-lg font-semibold mb-1">{category}</h3>
              <ul className="flex flex-wrap gap-2 pl-0 list-none">
                {technologies.map((tech, idx) => {
                  const techInfo = TECHNOLOGIES.find(
                    (t) => t.name === tech.name
                  );
                  return (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-center gap-2 mb-1 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2"
                    >
                      {techInfo && (
                        <img
                          src={techInfo.logo}
                          alt={techInfo.label}
                          className="inline w-5 h-5 mr-2"
                        />
                      )}
                      {techInfo ? techInfo.label : tech.name}
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
