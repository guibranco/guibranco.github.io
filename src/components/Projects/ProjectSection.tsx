import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  repo: string;
  description: string;
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-2xl font-bold text-center text-white mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;