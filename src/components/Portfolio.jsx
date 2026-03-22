import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Faces Of Resilience',
    date: 'March 2022',
    image: '/images/portfolio_resilience_1774210917961.png',
  },
  {
    title: 'A Wedding Tale',
    date: 'January 2020',
    image: '/images/portfolio_wedding_1774210932102.png',
  },
  {
    title: 'Product Elegance',
    date: 'January 2020',
    image: '/images/portfolio_product_1774210946377.png',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-10 bg-[#070708] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Portfolio
            </p>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">
              Explore my photography work.
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
               <span>View Works</span>
               <ArrowUpRight className="w-4 h-4 text-[#4f46e5]" />
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative h-[400px] mb-6 rounded-3xl overflow-hidden border border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 group-hover:text-white transition">
                  <span className="uppercase tracking-widest text-xs font-semibold">View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
