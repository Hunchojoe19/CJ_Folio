import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="pt-20 px-10 bg-[#070708] text-white overflow-hidden pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Services
            </p>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">
              My Photography Services
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-0">
             <div className="flex space-x-2">
               <button className="w-12 h-12 border border-gray-800 bg-[#121214] rounded-full flex items-center justify-center hover:bg-gray-800 transition">
                 <ArrowLeft className="w-5 h-5 text-gray-400" />
               </button>
               <button className="w-12 h-12 border border-gray-800 bg-[#121214] rounded-full flex items-center justify-center hover:bg-gray-800 transition">
                 <ArrowRight className="w-5 h-5 text-gray-400" />
               </button>
             </div>
             <button className="flex items-center space-x-2 px-6 py-3 border border-gray-800 rounded-lg bg-[#121214] hover:bg-gray-800 transition text-sm">
               <span>View All Services</span>
               <ArrowUpRight className="w-4 h-4 text-[#4f46e5]" />
             </button>
          </div>
        </div>
        
        {/* Placeholder for services grid */}
        <div className="h-64 border border-gray-800 rounded-3xl bg-linear-to-b from-[#121214] flex items-center justify-center opacity-50">
            <p className="text-gray-500 font-medium tracking-widest uppercase">Services Grid Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
