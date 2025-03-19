import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopMenu = () => {
  const location = useLocation();
  const menuItems = [
    { path: '/about-me', label: 'About Me' },
    { path: '/work-experience', label: 'Work Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/hobbies', label: 'Hobbies' }
  ];

  return (
    <nav className="hidden md:block bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-center space-x-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-4 py-3 inline-block text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopMenu;