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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-1">Experience</h3>
                <div className="h-1 w-full rounded-full bg-[#fbc02d]" />
              </div>
              <ExperienceYearsTable />
            </div>
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-1">Work Permit</h3>
                <div className="h-1 w-full rounded-full bg-[#0092ff]" />
              </div>
              <WorkPermit />
            </div>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-1">Projects I Worked On</h3>
                <div className="h-1 w-full rounded-full bg-[#4bbf30]" />
              </div>
              <ProjectsList />
            </div>
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-1">Time Coded</h3>
                <div className="h-1 w-full rounded-full bg-[#fd4c3b]" />
              </div>
              <WakaTime />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;