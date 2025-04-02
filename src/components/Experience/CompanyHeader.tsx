import React from "react";
import { Calendar, MapPin, Linkedin, Globe } from "lucide-react";
import { ConsultingCompany, RelatedCompany } from "../../types";

interface CompanyHeaderProps {
  company: string;
  logo: string;
  location: string;
  period: string;
  flag: string;
  linkedin?: string;
  website?: string;
  description: string;
  consultingCompany?: ConsultingCompany;
  relatedCompanies?: RelatedCompany[];
  duration?: string | null;
}

const CompanyHeader = ({
  company,
  logo,
  location,
  period,
  flag,
  linkedin,
  website,
  description,
  consultingCompany,
  relatedCompanies,
  duration
}: CompanyHeaderProps) => {
  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-2 md:gap-4">
        <div className="flex items-start gap-2 md:gap-4 grow min-w-0">
          <div className="flex flex-col items-center gap-2">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg shrink-0"
            />
            {consultingCompany && (
              <div className="relative w-8 h-8 md:w-12 md:h-12">
                <img 
                  src={consultingCompany.logo || consultingCompany.flag}
                  alt={`${consultingCompany.name} logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4">
                  <img 
                    src={consultingCompany.flag}
                    alt={`${consultingCompany.name} flag`}
                    className="w-full h-full rounded-full border border-white"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="min-w-0 grow">
            <div className="bg-white rounded-lg shadow-xs px-2 py-1.5 md:px-3 md:py-2">
              <h2 className="text-base md:text-2xl font-semibold text-black! break-words">{company}</h2>
              <div className="flex gap-1 md:gap-2 mt-0.5 md:mt-1">
                {linkedin && (
                  <a 
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`${company} LinkedIn`}
                  >
                    <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                )}
                {website && (
                  <a 
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label={`${company} website`}
                  >
                    <Globe size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                )}
              </div>
              {consultingCompany && (
                <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 break-words">
                  <span className="font-medium">Via:</span>{' '}
                  <span className="inline-flex items-center">
                    {consultingCompany.name}{' '}
                    {consultingCompany.linkedin && (
                      <a 
                        href={consultingCompany.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors mx-1"
                        aria-label={`${consultingCompany.name} LinkedIn`}
                      >
                        <Linkedin size={14} className="md:w-4 md:h-4" />
                      </a>
                    )}
                    {consultingCompany.website && (
                      <a 
                        href={consultingCompany.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label={`${consultingCompany.name} website`}
                      >
                        <Globe size={14} className="md:w-4 md:h-4" />
                      </a>
                    )}
                  </span>
                </p>
              )}
              {relatedCompanies && (
                <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 break-words">
                  <span className="font-medium">Part of:</span>{' '}
                  {relatedCompanies.map((related, index) => (
                    <span key={index} className="inline-flex items-center">
                      {index > 0 && ' and '}
                      {related.name}{' '}
                      <img 
                        src={related.flag} 
                        alt={`${related.name} flag`} 
                        className="w-3 h-3 md:w-4 md:h-4 inline-block mx-1"
                      />
                      {related.linkedin && (
                        <a 
                          href={related.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors mx-1"
                          aria-label={`${related.name} LinkedIn`}
                        >
                          <Linkedin size={14} className="md:w-4 md:h-4" />
                        </a>
                      )}
                      {related.website && (
                        <a 
                          href={related.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                          aria-label={`${related.name} website`}
                        >
                          <Globe size={14} className="md:w-4 md:h-4" />
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-600 mt-2 md:mt-3">
              <MapPin size={14} className="md:w-4 md:h-4" />
              <span className="truncate text-xs md:text-base">{location}</span>
              <img src={flag} alt="Country flag" className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-gray-500 shrink-0 gap-0.5 md:gap-1">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 md:mr-2 md:w-4 md:h-4" />
            <span className="text-xs md:text-base">{period}</span>
          </div>
          {duration && (
            <span className="text-xs text-indigo-600 font-medium">
              {duration}
            </span>
          )}
        </div>
      </div>
      <p className="mt-2 md:mt-4 text-gray-600 text-xs md:text-base">{description}</p>
    </>
  );
};

export default CompanyHeader;