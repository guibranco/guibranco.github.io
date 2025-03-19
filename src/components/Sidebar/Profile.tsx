import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProfileProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Profile = ({ collapsed, onToggle }: ProfileProps) => {
  return (
    <section className={`widget ${collapsed ? 'collapsed' : ''}`}>
      <div className="anchor" id="profile"></div>
      <header className="widget-head yellow" onClick={onToggle}>
        <div className="wrap flex items-center justify-between w-full px-4">
          <strong className="title">PROFILE</strong>
          {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </header>
      <div className="widget-body">
        <p className="profile">
          Technology enthusiast, currently working with C# .NET, SQL, NoSQL, and queues.
          My professional goal is to become a principal engineer/staff engineer/software architect.
          <br /><br />
          As a senior backend engineer, we are developing the financial, billing, and collections system for OUTsurance Ireland, an online insurance company in Dublin, Ireland.
          <br /><br />
          Interests in robotics, data analysis, programming, and financial investments (shares, fixed income, stock).
          <br /><br />
          I have written open-source libraries in Rust, C# .NET, PHP, and JS (Node.JS).
          <br /><br />
          My life goal is to visit all the places portrayed in the 007 - James Bond movies and visit Lego parks worldwide.
        </p>
      </div>
    </section>
  );
};

export default Profile;