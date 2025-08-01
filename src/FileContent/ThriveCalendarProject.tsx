import { FC } from "preact/compat";
import ScreenshotCarousel from "#/components/Screenshot/ScreenshotCarousel";
import { ThriveCalendarProject as projectData } from "#/pages/Home/HomeContent/Projects/data/thriveCalendar";
import { TECHNOLOGIES } from "#/pages/Home/HomeContent/Projects/technologyList";
import { ProjectDetails } from "#/pages/Home/HomeContent/Projects/types";

const ThriveCalendarProjectFile: FC = () => {
  const technologiesByCategory = projectData.technologies.reduce(
    (acc, tech) => {
      const category = tech.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, ProjectDetails["technologies"]>
  );

  return (
    <div className="p-4 md:p-8 font-mono text-sm md:text-base text-primary-300 bg-primary-900 rounded-lg">
      <div className="comment mb-4 text-primary-500">
        <span className="token comment">
          &#47;&#47; Project: Thrive Calendar - A custom calendar for a Wix site
        </span>
      </div>

      <div className="mb-4">
        <span className="text-syntax-keyword">const</span>{" "}
        <span className="text-syntax-primitive">thriveCalendarProject</span> ={" "}
        {"{"}
      </div>

      <div className="pl-6 space-y-2">
        <div>
          <span className="text-syntax-property">name</span>:{" "}
          <a
            href={projectData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-syntax-string hover:underline"
          >
            "{projectData.name}"
          </a>
          ,
        </div>
        <div>
          <span className="text-syntax-property">timeline</span>:{" "}
          <span className="text-syntax-number">{projectData.dates}</span>,
        </div>
        <div>
          <span className="text-syntax-property">role</span>:{" "}
          <span className="text-syntax-string">"{projectData.role}"</span>,
        </div>
        <div>
          <span className="text-syntax-property">href</span>:{" "}
          <a href={projectData.url} target="_blank" rel="noopener noreferrer">
            <span className="text-syntax-string">"{projectData.url}"</span>
          </a>
          ,
        </div>
        <div>
          <span className="text-syntax-property">description</span>: (
          <span className="text-syntax-string">`</span>
          <div className="text-syntax-string leading-relaxed">
            {projectData.description.split("\n\n").map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
          <span className="text-syntax-string">`</span>
          ),
        </div>

        <div className="pt-4">
          <span className="text-syntax-property">technologies</span>: {"{"}
          <div className="pl-6 pt-2 space-y-4">
            {Object.entries(technologiesByCategory).map(([category, techs]) => (
              <div key={category}>
                <div className="text-primary-500 mb-2">
                  <span className="token comment">// {category}</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {techs.map((tech, idx) => {
                    const techInfo = TECHNOLOGIES.find(
                      (t) => t.name === tech.name
                    );
                    return (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 glass-effect rounded-full px-3 py-1"
                        title={techInfo ? techInfo.label : tech.name}
                      >
                        {techInfo && techInfo.logo ? (
                          <img
                            src={techInfo.logo}
                            alt={techInfo.label}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-primary-700 flex items-center justify-center text-xs">
                            {tech.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-primary-300 text-xs">
                          {techInfo ? techInfo.label : tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {"}"},
        </div>

        <div className="pt-4">
          <span className="text-syntax-property">screenshots</span>: [
          <div className="py-4">
            <ScreenshotCarousel screenshots={projectData.screenshots} />
          </div>
          ],
        </div>
      </div>

      <div>{"}"};</div>
    </div>
  );
};

export const ThriveCalendarProjectContent = ThriveCalendarProjectFile;
