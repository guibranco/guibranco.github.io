import React, { useEffect } from "react";
import ProjectGroup from "../components/Projects/ProjectGroup";
import GithubProfiles from "../components/Projects/GithubProfiles";
import projectsData from "../data/projects.json";

const Projects = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="content">
      <div className="block-holder white print-hide">
        <div className="anchor" id="projects"></div>
        <h2 className="bordered">Projects</h2>
        
        {projectsData.sections.map((section) => (
          <ProjectGroup 
            key={section.id}
            title={section.title}
            projects={section.projects}
          />
        ))}

        <GithubProfiles profiles={projectsData.profiles} />
      </div>
    </section>
  );
};

export default Projects;