import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import Contact from "./Contact";
import Profile from "./Profile";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

const STORAGE_KEY = "sidebarCollapsedSections";

const Sidebar = () => {
  const location = useLocation();
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Error loading sidebar state:", error);
      return {};
    }
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsedSections));
    } catch (error) {
      console.error("Error saving sidebar state:", error);
    }
  }, [collapsedSections]);

  // Collapse all sections on mobile when route changes
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCollapsedSections((prev) => ({
        contact: true,
        profile: true,
        skills: true,
        hobbies: true,
      }));
    }
  }, [location]);

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <aside id="sidebar">
      <ProfileImage />
      <Contact collapsed={collapsedSections["contact"]} onToggle={() => toggleSection("contact")} />
      <Profile collapsed={collapsedSections["profile"]} onToggle={() => toggleSection("profile")} />
      <Skills collapsed={collapsedSections["skills"]} onToggle={() => toggleSection("skills")} />
      <Hobbies collapsed={collapsedSections["hobbies"]} onToggle={() => toggleSection("hobbies")} />
    </aside>
  );
};

export default Sidebar;
