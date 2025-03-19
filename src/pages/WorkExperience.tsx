import React from 'react';
import ExperienceCard from '../components/Experience/ExperienceCard';
import workExperienceData from '../data/work-experience.json';

const WorkExperience = () => {
  return (
    <section id="content" className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Work Experience</h1>
        <div className="space-y-6">
          {workExperienceData.experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} showDuration={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;