import React from 'react';
import { ArrowUpRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import Marquee from './Marquee';

const Footer = () => {
  return (
    <footer className="bg-[#070708] text-white border-t border-gray-800">
      <Marquee />

      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20 border-b border-gray-800/80 pb-20">

          {/* Left CTA */}
          <div className="flex flex-col justify-between">
            <h3 className="text-gray-400 font-semibold tracking-widest text-xs uppercase mb-8">
              A More Meaningful Home For Photography
            </h3>

            <div className="flex items-center space-x-6 pr-10">
              <div className="flex flex-col">
                <span className="text-3xl md:text-6xl font-bold uppercase tracking-tight leading-tight">Let's</span>
                <span className="text-3xl md:text-6xl font-bold uppercase tracking-tight leading-tight">Work Together</span>
              </div>
              <div className="w-14 h-14 bg-[#4f46e5] rounded-full flex items-center justify-center shrink-0 mt-4">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <h4 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-2">Home</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">About Me</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">My Works</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Testimonials</a>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-2">Clients</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Klevveto</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Alvotan</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Demyvo</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Vovals</a>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-2">Portfolio</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Events</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Portrait</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Branding</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Commercial</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Wedding</a>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-2">Services</h4>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Portraits</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Events</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Commercial</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
          </div>

          <p>© 2026 Doc Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
