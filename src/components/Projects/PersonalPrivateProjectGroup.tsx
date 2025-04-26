import React from 'react';
import PersonalPrivateProject from './PersonalPrivateProject';
import { VisualProject } from '../../types';

interface PersonalPrivateProjectGroupProps {
  projects: VisualProject[];
}

const PersonalPrivateProjectGroup = ({ projects }: PersonalPrivateProjectGroupProps) => {
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-1">Personal/Private Projects</h2>
        <div className="h-1 w-full rounded-full bg-[#9c27b0]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <PersonalPrivateProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PersonalPrivateProjectGroup;