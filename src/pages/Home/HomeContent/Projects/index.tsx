import { MiruniProject } from "./data/miruni";
import { ProjectSummary } from "./ProjectSummary";

const projectsDetails = [MiruniProject];

export const ProjectsContent = () => {
  return (
    <section>
      {projectsDetails.map((project) => (
        <ProjectSummary key={project.name} project={project} />
      ))}
    </section>
  );
};
