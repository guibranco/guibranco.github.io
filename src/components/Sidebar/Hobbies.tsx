import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faCampground,
  faHiking,
  faSwimmer,
  faLaptopCode,
  faHamburger,
  faCandyCane,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import hobbiesData from "../../data/sidebar-hobbies.json";

const iconMap = {
  faPlane,
  faCampground,
  faHiking,
  faSwimmer,
  faLaptopCode,
  faHamburger,
  faCandyCane,
  faTv,
};

interface HobbiesProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Hobbies = ({ collapsed, onToggle }: HobbiesProps) => {
  return (
    <section className={`widget ${collapsed ? "collapsed" : ""}`}>
      <div className="anchor" id="hobbies"></div>
      <header className="widget-head red" onClick={onToggle}>
        <div className="wrap flex items-center justify-between w-full px-4">
          <strong className="title">HOBBIES</strong>
          {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </header>
      <div className="widget-body">
        <ul className="hobbies">
          {hobbiesData.hobbies.map((hobby, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={iconMap[hobby.icon as keyof typeof iconMap]} /> {hobby.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hobbies;
