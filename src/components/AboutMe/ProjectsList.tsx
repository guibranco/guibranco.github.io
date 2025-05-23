import projectsData from "../../data/about-me-projects.json";

const ProjectsList = () => {
  return (
    <div className="text-center">
      <ul className="max-w-3xl mx-auto space-y-3 text-left">
        {projectsData.projects.map((project, index) => (
          <li key={index} className="flex items-start">
            <span className="h-2 w-2 mt-2 rounded-full bg-green-500 mr-3 shrink-0"></span>
            <span>
              {typeof project === "string" ? (
                project
              ) : (
                <>
                  {project.text}
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {project.link.text}
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
