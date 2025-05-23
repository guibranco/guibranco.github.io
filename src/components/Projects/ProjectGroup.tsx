import { Project } from "../../types";
import PublicProjectCard from "./PublicProjectCard";

interface ProjectGroupProps {
  projects: Project[];
}

const ProjectGroup = ({ projects }: ProjectGroupProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {projects.map((project, index) => (
        <PublicProjectCard
          key={index}
          name={project.name}
          repo={project.repo}
          showOwner={project.showOwner}
        />
      ))}
    </div>
  );
};

export default ProjectGroup;
