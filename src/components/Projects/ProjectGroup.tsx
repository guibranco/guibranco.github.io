import React from 'react';
import { Project } from '../../types';

interface ProjectGroupProps {
  title: string;
  projects: Project[];
}

const ProjectGroup = ({ title, projects }: ProjectGroupProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center text-white mb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={`https://github.com/${project.repo}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-105"
          >
            <img 
              src={`https://github-readme-stats-git-feature-private-repositories-guibranco.vercel.app//api/pin/?username=${project.repo.split('/')[0]}&repo=${project.repo.split('/')[1]}&theme=synthwave&bg_color=341b3b&show_issues=true&show_pull_requests=true${project.repo.split('/')[0] !== 'guibranco' ? '&show_owner=true' : ''}`}
              alt={project.name}
              className="w-full"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGroup;