import React from 'react';
import Introduction from '../components/AboutMe/Introduction';
import WorkPermit from '../components/AboutMe/WorkPermit';
import ExperienceYearsTable from '../components/ExperienceYears/ExperienceYearsTable';
import ProjectsList from '../components/AboutMe/ProjectsList';
import WakaTime from '../components/AboutMe/WakaTime';

const AboutMe = () => {
  return (
    <section id="content">
      <div className="block-holder">
        <div className="anchor" id="about-me"></div>
        <h1>ABOUT ME</h1>
        <div className="about-row">
          <Introduction />
          <br />
          <br />
          <WorkPermit />
          <br />
          <br />
          <ExperienceYearsTable />
          <br />
          <br />
          <ProjectsList />
          <br />
          <br />
          <WakaTime />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;