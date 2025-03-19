import React from 'react';

interface ProjectCardProps {
  name: string;
  repo: string;
}

const ProjectCard = ({ name, repo }: ProjectCardProps) => {
  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener"
      className="block"
    >
      <img
        src={`https://github-readme-stats-git-feature-private-repositories-guibranco.vercel.app//api/pin/?username=${repo.split('/')[0]}&repo=${repo.split('/')[1]}&theme=synthwave&bg_color=341b3b&show_issues=true&show_pull_requests=true${repo.split('/')[0] !== 'guibranco' ? '&show_owner=true' : ''}`}
        alt={name}
        className="w-full transition-transform duration-200 hover:scale-105"
      />
    </a>
  );
};

export default ProjectCard;