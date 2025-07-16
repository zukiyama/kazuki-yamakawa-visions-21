import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Writing' },
    { path: '/music', label: 'Music' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-shadow">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-all duration-300 hover:opacity-80">
            <Logo />
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-japanese text-sm tracking-wide transition-all duration-300 hover:text-sun-red group ${
                  location.pathname === item.path 
                    ? 'text-sun-red' 
                    : 'text-ink-light hover:text-ink'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-sun-red transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;