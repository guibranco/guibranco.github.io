import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import skillsData from "../../data/skills.json";

interface SkillRowProps {
  title: string;
  level: number;
}

const SkillRow = ({ title, level }: SkillRowProps) => {
  return (
    <div className="row">
      <strong className="row-title">{title}</strong>
      <ul className="list-points">
        {[...Array(5)].map((_, i) => (
          <li key={i} className={i < level ? "active" : ""}></li>
        ))}
      </ul>
    </div>
  );
};

interface SkillsProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Skills = ({ collapsed, onToggle }: SkillsProps) => {
  return (
    <section className={`widget ${collapsed ? "collapsed" : ""}`}>
      <div className="anchor" id="skills"></div>
      <header className="widget-head green" onClick={onToggle}>
        <div className="wrap flex items-center justify-between w-full px-4">
          <strong className="title">SKILLS</strong>
          {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </header>
      <div className="widget-body skills">
        {skillsData.skills.map((skill, index) => (
          <SkillRow key={index} title={skill.title} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
