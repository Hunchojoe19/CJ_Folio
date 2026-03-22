import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <header className="flex items-center justify-between py-4 px-6 md:py-6 md:px-10 border-b border-gray-800/50 bg-[#070708] backdrop-blur-md sticky top-0 z-50">
      <div className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase">
        Damien
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1 bg-[#121214] border border-gray-800 rounded-full px-2 py-2">
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

      {/* Desktop Contact CTA */}
      <button className="hidden md:block px-6 py-3 text-sm font-medium text-white transition-colors border border-gray-800 bg-[#121214] hover:bg-gray-800 rounded-lg">
        Contact Me
      </button>

      {/* Mobile Hamburger Menu */}
      <button className="md:hidden flex items-center justify-center p-2.5 border border-gray-800 rounded-lg bg-[#121214] hover:bg-gray-800 transition">
        <Menu className="w-5 h-5 text-white" />
      </button>
    </header>
  );
};

export default Header;
