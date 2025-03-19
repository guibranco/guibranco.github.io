import React from 'react';
import { GithubProfile } from '../../types';

interface GithubProfilesProps {
  profiles: GithubProfile[];
}

const GithubProfiles = ({ profiles }: GithubProfilesProps) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-center text-white mb-8">GitHub Profiles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="github-card"
            data-user={profile.username}
            data-target="blank"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GithubProfiles;