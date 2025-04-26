import { Github, Globe } from "lucide-react";
import { VisualProject as VisualProjectType } from "../../types";

interface PersonalPrivateProjectProps {
  project: VisualProjectType;
}

const PersonalPrivateProject = ({ project }: PersonalPrivateProjectProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up">
      <div className="aspect-video w-full overflow-hidden">
        <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className="text-sm font-medium text-gray-500">{project.year}</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe size={16} />
              <span>Visit Site</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalPrivateProject;
