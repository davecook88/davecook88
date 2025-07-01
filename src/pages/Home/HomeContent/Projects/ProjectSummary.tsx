import { FC } from "preact/compat";
import { ProjectDetails } from "./types";
import FullPageScreenshot from "#/components/NetworkGraph/Screenshot/FullPageScreenshot";

export interface ProjectSummaryProps {
  project: ProjectDetails;
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({ project }) => {
  const { name, dates, description, screenshots, technologies } = project;
  return (
    <div className="project-summary p-4  rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{dates}</p>
      <p className="mb-4">{description}</p>
      <div className="screenshots grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {screenshots.map((screenshot) => (
          <FullPageScreenshot
            src={screenshot.src}
            alt={screenshot.alt}
            key={screenshot.src}
            description={screenshot.description}
          />
        ))}
      </div>
      <div className="technologies flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
