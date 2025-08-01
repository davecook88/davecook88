import { MiruniProject } from "./data/miruni";
import { ThriveCalendarProject } from "./data/thriveCalendar";
import { ProjectSummary } from "./ProjectSummary";
import { Collapsible } from "#/components/Collapsible";

const projectsDetails = [MiruniProject, ThriveCalendarProject];

export const ProjectsContent = () => {
  return (
    <section>
      {projectsDetails.map((project) => (
        <Collapsible key={project.name} title={project.name} defaultOpen={true}>
          <ProjectSummary project={project} />
        </Collapsible>
      ))}
    </section>
  );
};
