import React, { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <header className="flex items-center justify-between py-6 px-10 border-b border-gray-800/50 bg-[#070708] backdrop-blur-md sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-widest text-white uppercase">
        Damien
      </div>
      
      <nav className="flex items-center space-x-1 bg-[#121214] border border-gray-800 rounded-full px-2 py-2">
        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            onClick={() => setActiveTab(item.href)}
            className={`px-6 py-2 text-sm rounded-full transition-colors ${
              activeTab === item.href 
                ? 'text-white bg-gray-800' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button className="px-6 py-3 text-sm font-medium text-white transition-colors border border-gray-800 bg-[#121214] hover:bg-gray-800 rounded-lg">
        Contact Me
      </button>
    </header>
  );
};

export default Header;
