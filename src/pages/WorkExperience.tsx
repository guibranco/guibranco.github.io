import ExperienceCard from "../components/Experience/ExperienceCard";
import workExperienceData from "../data/work-experience.json";

const WorkExperience = () => {
  return (
    <section id="content">
      <div className="block-holder">
        <div className="anchor" id="work-experience"></div>
        <h1 className="text-3xl font-bold text-center text-white mb-8">Work Experience</h1>
        <div className="about-row">
          <div className="space-y-6">
            {workExperienceData.experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} showDuration={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
