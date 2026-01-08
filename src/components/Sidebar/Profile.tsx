import { ChevronDown, ChevronUp } from "lucide-react";

interface ProfileProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Profile = ({ collapsed, onToggle }: ProfileProps) => {
  return (
    <section className={`widget ${collapsed ? "collapsed" : ""}`}>
      <div className="anchor" id="profile"></div>
      <header className="widget-head yellow" onClick={onToggle}>
        <div className="wrap flex items-center justify-between w-full px-4">
          <strong className="title">PROFILE</strong>
          {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </header>
      <div className="widget-body">
        <p className="profile">
          Senior Backend Engineer at OUTsurance Ireland, architecting financial, billing, and
          collections systems using C# .NET, SQL, NoSQL, and message queues. Aspiring to principal
          engineer and software architect roles.
          <br />
          <br />
          Open-source contributor across multiple languages, including Rust, C# .NET, PHP, and
          Node.js. Passionate about robotics, data analysis, and financial markets.
          <br />
          <br />
          When not coding: tracking down James Bond filming locations and collecting Lego park
          stamps worldwide.
        </p>
      </div>
    </section>
  );
};

export default Profile;
