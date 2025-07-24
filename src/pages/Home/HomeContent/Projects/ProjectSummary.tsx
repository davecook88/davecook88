import { FC } from "preact/compat";
import { ProjectDetails } from "./types";
import FullPageScreenshot from "#/components/Screenshot/FullPageScreenshot";
import ScreenshotCarousel from "#/components/Screenshot/ScreenshotCarousel";
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
    <div className="project-summary glass-effect rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <a href={url} target={"_blank"} rel="noopener noreferrer">
          <h2 className="text-2xl font-bold hover:text-accent-400 cursor-pointer transition-colors">
            {name}
          </h2>
        </a>
        <span className="text-sm text-accent-500 bg-accent-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
          {dates}
        </span>
      </div>
      
      <div className="mb-6">
        {description.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-primary-200 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-accent-500 mb-3">Screenshots</h3>
        <div className="screenshots">
          <ScreenshotCarousel screenshots={screenshots} />
        </div>
      </div>
      
      <div className="technologies">
        <h3 className="text-lg font-semibold text-accent-500 mb-3">Technologies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(technologiesByCategory).map(
            ([category, technologies]) => (
              <div key={category} className="technology-category glass-effect rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-center text-accent-400 border-b border-primary-700 pb-2">
                  {category}
                </h4>
                <ul className="grid grid-cols-3 gap-3">
                  {technologies.map((tech, idx) => {
                    const techInfo = TECHNOLOGIES.find(
                      (t) => t.name === tech.name
                    );
                    return (
                      <li
                        key={idx}
                        className="flex flex-col items-center justify-center text-xs"
                        title={techInfo ? techInfo.label : tech.name}
                      >
                        {techInfo && techInfo.logo ? (
                          <img
                            src={techInfo.logo}
                            alt={techInfo.label}
                            className="w-10 h-10 mb-1 object-contain"
                          />
                        ) : (
                          <div className="w-10 h-10 mb-1 rounded-full bg-primary-700 flex items-center justify-center">
                            <span className="text-xs">{tech.name.charAt(0)}</span>
                          </div>
                        )}
                        <span className="truncate text-center w-full text-primary-300">
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
    </div>
  );
};
