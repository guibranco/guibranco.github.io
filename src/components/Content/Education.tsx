import React from 'react';

const Education = () => {
  return (
    <div className="block-holder">
      <div className="anchor" id="education"></div>
      <h2>EDUCATION</h2>
      <div className="exp-row">
        <strong className="name yellow">FATEC São Caetano do Sul - Antonio Russo</strong>
        <span className="year">Jan/2011 - Dec/2013</span>
        <span className="job">Technologist, College</span>
        <p>Systems Analysis and Development</p>
        <span className="job">Analyses, designs, documents, specifies, tests, implements and maintains computational information systems - 2800 hours - on-site classes.</span>
      </div>
      <div className="exp-row">
        <strong className="name yellow">SENAC</strong>
        <span className="year">Jan/2008 - Jun/2010</span>
        <span className="job">Technician</span>
        <p>Computer Technician</p>
        <span className="job">Assemble and maintain microcomputers, install and configure networks, and develop systems and websites - 1200 hours, on-site classes.</span>
      </div>
      <div className="exp-row">
        <strong className="name yellow">ETEC Professor Camargo Aranha</strong>
        <span className="year">Jan/2007 - Dec/2009</span>
        <p>High School Diploma</p>
      </div>
    </div>
  );
};

export default Education;