import React from "react";
import { Project } from "../../types";
import PublicProjectCard from "./PublicProjectCard";

interface ProjectGroupProps {
  title: string;
  projects: Project[];
}

const ProjectGroup = ({ title, projects }: ProjectGroupProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {projects.map((project, index) => (
        <PublicProjectCard
          key={index}
          name={project.name}
          repo={project.repo}
          description={project.description}
          showOwner={project.showOwner}
        />
      ))}
    </div>
  );
};

export default ProjectGroup;
