import React, { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/CJ Photography LOGO.png';

const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren" // Wait for children to finish exiting before collapsing height
    }
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // Custom snappy ease
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } }
};

const Header = () => {
  const [activeTab, setActiveTab] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    // { label: 'Services', href: '#services' },
  ];

  return (
    <>
      <header className="flex flex-col py-4 px-6 md:py-6 md:px-10 border-b border-gray-800/50 bg-[#070708] backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
          <a href="#home" className="shrink-0 flex items-center">
            <img src={logo} alt="CJ Photography" className="h-10 md:h-14 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#121214] border border-gray-800 rounded-full px-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={`px-6 py-2 text-sm rounded-full transition-colors ${activeTab === item.href
                  ? 'text-white bg-gray-800'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="hidden md:block px-6 py-3 text-sm font-medium text-white transition-colors border border-gray-800 bg-[#121214] hover:bg-gray-800 rounded-lg">
            Contact Me
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2.5 border border-gray-800 rounded-lg bg-[#121214] hover:bg-gray-800 transition overflow-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden flex flex-col pt-6 pb-2 space-y-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.a
                  variants={itemVariants}
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.href);
                    setIsMobileMenuOpen(false); // Close menu on click
                  }}
                  className={`text-lg font-medium transition-colors ${activeTab === item.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full cursor-pointer px-6 py-4 mt-6 text-sm font-medium text-white transition-colors border border-gray-800 bg-[#121214] hover:bg-gray-800 rounded-lg"
              >
                Contact Me
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md p-6 overflow-hidden border border-gray-800 bg-[#121214] shadow-2xl rounded-2xl"
            >
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute p-2 transition-colors rounded-full top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>

              <div className="space-y-4">
                <a
                  href="mailto:contact@docphotography.com"
                  className="flex items-center p-4 space-x-4 transition-colors border border-gray-800 rounded-xl bg-[#0a0a0c] hover:border-gray-600 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 text-gray-300 group-hover:text-white group-hover:bg-gray-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email us</p>
                    <p className="text-white font-medium">Idaviesco@yahoo.com</p>
                  </div>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center p-4 space-x-4 transition-colors border border-gray-800 rounded-xl bg-[#0a0a0c] hover:border-gray-600 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 text-gray-300 group-hover:text-white group-hover:bg-gray-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="text-white font-medium">3099970735</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
