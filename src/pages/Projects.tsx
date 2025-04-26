import PublicProjectGroup from "../components/Projects/PublicProjectGroup";
import GithubProfiles from "../components/Projects/GithubProfiles";
import PersonalPrivateProjectGroup from "../components/Projects/PersonalPrivateProjectGroup";
import projectsData from "../data/projects.json";
import profilesData from "../data/profiles.json";
import personalPrivateProjectsData from "../data/personal-private-projects.json";

const Projects = () => {
  return (
    <section id="content">
      <div className="block-holder">
        <div className="anchor" id="projects"></div>
        <h1 className="text-3xl font-bold text-center text-white mb-8">Projects</h1>
        <div className="about-row">
          {projectsData.sections.map((section) => (
            <PublicProjectGroup key={section.id} section={section} />
          ))}

          <GithubProfiles profiles={profilesData.profiles} />

          <PersonalPrivateProjectGroup projects={personalPrivateProjectsData.projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
