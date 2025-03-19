import React from 'react';

interface IntroFlagProps {
  company: string;
  code: string;
}

export const IntroFlag = ({ company, code }: IntroFlagProps) => (
  <span>
    {company} <img 
      src={`https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/${code}.svg`}
      alt={`${company} flag`}
      className="w-4 h-4 inline-block align-text-bottom ml-1"
    />
  </span>
);