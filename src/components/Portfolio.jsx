import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    title: 'A Dinner Outing',
    date: 'May 2025',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1774812916/PHOTO-2026-03-24-08-41-37_4_xaah7d.jpg',
  },
  {
    title: 'A Graduate',
    date: 'October 2025',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1774812917/PHOTO-2026-03-24-08-41-37_5_qoks2s.jpg',
  },
  {
    title: 'A Group of Readers',
    date: 'January 2026',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1774812917/PHOTO-2026-03-24-08-41-37_7_apwjjz.jpg',
  },
  {
    title: 'Asia on Dinner',
    date: 'September 2025',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1774812922/7130NXBH_iogefe.jpg',
  },
  {
    title: 'Annie and Her Dog',
    date: 'April 2025',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1768150024/cld-sample.jpg',
  },
  {
    title: 'My Doggies',
    date: 'December 2025',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1768150010/samples/animals/three-dogs.jpg',
  },
  {
    title: 'A Musical Concert on the Street',
    date: 'January 2026',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1768150010/samples/people/jazz.jpg',
  },
  {
    title: 'A Watch',
    date: 'February 2026',
    image: 'https://res.cloudinary.com/dc59hhvse/image/upload/v1768150007/samples/ecommerce/analog-classic.jpg',
  },
];

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
              <button
                onClick={scrollLeft}
                className="w-12 h-12 cursor-pointer border border-gray-800 bg-[#121214] rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 cursor-pointer border border-gray-800 bg-[#121214] rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar pb-6"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col group cursor-pointer min-w-[300px] md:min-w-[400px]"
            >
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-full flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0a0a0c]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
                <div className="p-6 bg-linear-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                  <h3 className="text-2xl font-semibold text-white">{selectedProject.title}</h3>
                  <p className="text-gray-300">{selectedProject.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

