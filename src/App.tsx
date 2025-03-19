import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DesktopMenu from "./components/Navigation/DesktopMenu";
import MobileMenu from "./components/Navigation/MobileMenu";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutMe from "./pages/AboutMe";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";

// Create a wrapper component to handle route changes
const AppContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div id="wrapper">
      <DesktopMenu />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="two-cols">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="*" element={<Navigate to="/about-me" replace />} />
        </Routes>
      </div>
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;