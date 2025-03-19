import React from "react";
import { Briefcase, Clock } from "lucide-react";
import { Role } from "../../types";
import { getContractTypeLabel, getWorkModelLabel } from "../../utils/experience";

interface RoleDetailsProps {
  role: Role;
  duration?: string | null;
}

const RoleDetails = ({ role, duration }: RoleDetailsProps) => {
  const showWorkDetails = role.contractType !== null || role.workModel !== null;

  return (
    <div className="border-t pt-2 md:pt-4">
      <div className="flex flex-wrap gap-1 md:gap-2 items-baseline">
        <h3 className="text-xs md:text-base font-medium text-gray-900 break-words mr-auto">{role.title}</h3>
        <div className="flex flex-col items-end flex-shrink-0">
          <span className="text-xs md:text-sm text-gray-500">{role.period}</span>
          {duration && (
            <span className="text-[10px] md:text-xs text-indigo-600">{duration}</span>
          )}
        </div>
      </div>
      {showWorkDetails && (
        <div className="flex flex-wrap gap-2 md:gap-4 mt-1 md:mt-2">
          {role.contractType && (
            <div className="flex items-center text-[10px] md:text-sm text-gray-600">
              <Briefcase size={12} className="mr-1 md:w-4 md:h-4" />
              {getContractTypeLabel(role.contractType)}
            </div>
          )}
          {role.workModel && (
            <div className="flex items-center text-[10px] md:text-sm text-gray-600">
              <Clock size={12} className="mr-1 md:w-4 md:h-4" />
              {getWorkModelLabel(role.workModel)}
            </div>
          )}
        </div>
      )}
      <p className="mt-1 md:mt-2 text-gray-600 text-xs md:text-base">{role.description}</p>
      <ul className="mt-2 md:mt-3 space-y-1 md:space-y-2">
        {role.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start">
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 mt-1.5 md:mt-2 rounded-full bg-indigo-500 mr-1.5 md:mr-2 flex-shrink-0"></span>
            <span className="text-gray-600 text-xs md:text-base">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleDetails;