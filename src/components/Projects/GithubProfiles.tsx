import React from "react";
import { GithubProfile } from "../../types";

interface GithubProfilesProps {
  profiles: GithubProfile[];
}

const GithubProfiles = ({ profiles }: GithubProfilesProps) => {
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-1">GitHub Profiles</h2>
        <div className="h-1 w-full rounded-full bg-[#4bbf30]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="github-card bg-white rounded-lg shadow-md p-4"
            data-user={profile.username}
            data-target="blank"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GithubProfiles;
