import React from 'react';

const Courses = () => {
  return (
    <div className="block-holder">
      <div className="anchor" id="courses"></div>
      <h2>COURSES</h2>
      <div className="exp-row">
        <strong className="name yellow">SOS Computadores</strong>
        <span className="year">Jan/2005 - Dec/2005</span>
        <span className="job">Certificate</span>
        <p>Computer Technician</p>
        <span className="job">Assemble and maintain microcomputers, install and configure networks - 260 hours, on-site classes.</span>
      </div>
      <div className="exp-row">
        <strong className="name yellow">CNA</strong>
        <span className="year">Jan/2004 - Dec/2009</span>
        <span className="job">Certificate</span>
        <p>English course</p>
        <span className="job">Language course - 6 years, on-site classes.</span>
      </div>
    </div>
  );
};

export default Courses;