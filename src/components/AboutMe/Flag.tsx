import React from "react";

interface FlagProps {
  country: string;
  code: string;
}

export const Flag = ({ country, code }: FlagProps) => (
  <span className="inline-flex items-center">
    <span>{country}</span>
    <img 
      src={`https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/${code}.svg`}
      alt={`${country} flag`}
      className="w-4 h-4 ml-2"
    />
  </span>
);