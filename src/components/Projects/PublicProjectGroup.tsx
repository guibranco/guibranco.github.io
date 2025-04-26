import ProjectGroup from "./ProjectGroup";
import { ProjectSection } from "../../types";
import { useExternalScript } from "../../hooks/useExternalScript";

interface PublicProjectGroupProps {
  section: ProjectSection;
}

const PublicProjectGroup = ({ section }: PublicProjectGroupProps) => {
  useExternalScript("https://cdn.jsdelivr.net/github-cards/latest/widget.js");

  return (
    <div key={section.id} className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-1">{section.title}</h2>
        <div className="h-1 w-full rounded-full" style={{ backgroundColor: section.color }} />
      </div>
      <ProjectGroup projects={section.projects} />
    </div>
  );
};

export default PublicProjectGroup;
