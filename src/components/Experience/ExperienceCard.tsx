import React from "react";
import { Experience } from "../../types";
import { calculateDuration } from "../../utils/experience";
import CompanyHeader from "./CompanyHeader";
import RoleDetails from "./RoleDetails";

const ExperienceCard = ({
  company,
  logo,
  location,
  description,
  period,
  roles,
  flag,
  relatedCompanies,
  consultingCompany,
  linkedin,
  website,
  showDuration = false
}: Experience) => {
  // Sort roles by start date in descending order (most recent first)
  const sortedRoles = [...roles].sort((a, b) => {
    const aStart = new Date(a.period.split(' - ')[0].split('/').reverse().join('-'));
    const bStart = new Date(b.period.split(' - ')[0].split('/').reverse().join('-'));
    return bStart.getTime() - aStart.getTime();
  });

  // Get first role start date and last role end date
  const firstRoleStartDate = sortedRoles[sortedRoles.length - 1].period.split(' - ')[0];
  const lastRoleEndDate = sortedRoles[0].period.split(' - ')[1];
  const companyDuration = showDuration ? calculateDuration(firstRoleStartDate, lastRoleEndDate) : null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
      <div className="p-6">
        <CompanyHeader
          company={company}
          logo={logo}
          location={location}
          period={period}
          flag={flag}
          linkedin={linkedin}
          website={website}
          description={description}
          consultingCompany={consultingCompany}
          relatedCompanies={relatedCompanies}
          duration={companyDuration}
        />

        <div className="mt-6 space-y-6">
          {sortedRoles.map((role, index) => {
            const [startDate, endDate] = role.period.split(' - ');
            const duration = showDuration ? calculateDuration(startDate, endDate) : null;

            return (
              <RoleDetails
                key={index}
                role={role}
                duration={duration}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;