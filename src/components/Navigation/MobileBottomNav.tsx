import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const routes = [
  { path: "/about-me", label: "About Me" },
  { path: "/work-experience", label: "Work Experience" },
  { path: "/education", label: "Education" },
  { path: "/projects", label: "Projects" },
  { path: "/hobbies", label: "Hobbies" },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const currentIndex = routes.findIndex((route) => route.path === location.pathname);

  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

  const handleTouchStart = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollPosition >= documentHeight - 100;
      setShowNav(isAtBottom);
      setIsVisible(true);

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("touchstart", handleTouchStart);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      clearTimeout(hideTimeout);
    };
  }, [handleTouchStart]);

  if (!showNav) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 flex justify-between md:hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {prevRoute ? (
        <button
          onClick={() => navigate(prevRoute.path)}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-xs rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">{prevRoute.label}</span>
        </button>
      ) : (
        <div />
      )}

      {nextRoute && (
        <button
          onClick={() => navigate(nextRoute.path)}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-xs rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span className="text-sm font-medium">{nextRoute.label}</span>
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
};

export default MobileBottomNav;
