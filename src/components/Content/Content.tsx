import React from 'react';
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Courses from './Courses';
import Languages from './Languages';
import PersonalProjects from './PersonalProjects';
import Hobbies from './Hobbies';

const Content = () => {
  return (
    <section id="content">
      <AboutMe />
      <WorkExperience />
      <Education />
      <Courses />
      <Languages />
      <PersonalProjects />
      <Hobbies />
    </section>
  );
};

export default Content;