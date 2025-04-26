import ExperienceCard from "../components/Experience/ExperienceCard";
import educationData from "../data/education.json";
import languagesData from "../data/languages.json";

const DonutChart = ({
  percentage,
  color,
  language,
}: {
  percentage: number;
  color: string;
  language: string;
}) => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="absolute text-2xl font-bold text-gray-900">{language}</span>
    </div>
  );
};

const Education = () => {
  const { education, courses } = educationData;
  const { languages } = languagesData;

  return (
    <section id="content">
      <div className="block-holder">
        <div className="anchor" id="education"></div>
        <h1 className="text-3xl font-bold text-center text-white mb-8">Education</h1>
        <div className="about-row">
          {/* Formal Education Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-1">Academic Education</h2>
              <div className="h-1 w-full rounded-full bg-[#fbc02d]" />
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} />
              ))}
            </div>
          </div>

          {/* Additional Courses Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-1">Additional Courses</h2>
              <div className="h-1 w-full rounded-full bg-[#0092ff]" />
            </div>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <ExperienceCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-1">Languages</h2>
              <div className="h-1 w-full rounded-full bg-[#fd4c3b]" />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-wrap justify-center items-center gap-16 my-8">
                  {languages.map((lang, index) => (
                    <div key={index} className="text-center">
                      <span
                        className="block text-lg font-semibold mb-4"
                        style={{ color: lang.color }}
                      >
                        {lang.level}
                      </span>
                      <DonutChart
                        percentage={lang.percentage}
                        color={lang.color}
                        language={lang.language}
                      />
                    </div>
                  ))}
                </div>
                <ul className="text-center space-y-2 mt-8">
                  {languages.map((lang, index) => (
                    <li key={index} style={{ color: lang.color }} className="font-medium">
                      {lang.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
