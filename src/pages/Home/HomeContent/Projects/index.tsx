import { MiruniProject } from "./data/miruni";
import { ProjectSummary } from "./ProjectSummary";
import { Collapsible } from "#/components/Collapsible";

const projectsDetails = [MiruniProject];

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
