import React, { useEffect } from "react";
import ProjectGroup from "./ProjectGroup";
import { ProjectSection } from "../../types";

interface PublicProjectGroupProps {
  section: ProjectSection;
}

const PublicProjectGroup = ({ section }: PublicProjectGroupProps) => {
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
    <div key={section.id} className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-1">{section.title}</h2>
        <div className="h-1 w-full rounded-full" style={{ backgroundColor: section.color }} />
      </div>
      <ProjectGroup title={section.title} projects={section.projects} />
    </div>
  );
};

export default PublicProjectGroup;
