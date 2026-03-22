import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialImages = [
  "/src/assets/images/guy_holding_orange_1774210235546.png",
  "/src/assets/images/small_woman_portrait_1774210283257.png",
  "/src/assets/images/hero_center_woman_1774210152840.png",
  "/src/assets/images/hero_top_right_man_1774210178440.png",
  "/src/assets/images/woman_red_pattern_shirt_1774210251156.png",
  "/src/assets/images/bw_guy_looking_up_1774210268030.png"
];

const springConfig = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1
};

const Hero = () => {
  const [images, setImages] = useState(initialImages);
  const [layoutIndex, setLayoutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Swap images
      setImages(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
      // 2. Change grid layout pattern dynamically
      setLayoutIndex(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-10 px-10 bg-[#070708] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold mb-4 uppercase">
              Stunning Photography By
            </p>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap">
              Damien Braun
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 mb-2">
            <div className="flex items-center justify-center w-32 h-12 bg-[#2a2a30] rounded-l-full rounded-r-full relative border border-gray-700">
              <span className="text-sm font-medium pr-8">Let's</span>
              <div className="absolute right-1 w-10 h-10 bg-[#4f46e5] rounded-full flex items-center justify-center">
                 <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Work Together
            </span>
          </div>
        </div>

        {/* Highly Animated Masonry Grid */}
        <div className="flex gap-4 h-[600px] w-full">
          {/* Left Column */}
          <motion.div 
            layout 
            transition={springConfig}
            className="flex flex-col gap-4 h-full" 
            style={{ flex: layoutIndex === 0 || layoutIndex === 3 ? 1 : 2 }}
          >
            <motion.div layout transition={springConfig} className="relative rounded-2xl overflow-hidden bg-gray-800" style={{ flex: layoutIndex % 2 === 0 ? 2 : 1 }}>
               <motion.img layoutId={images[0]} transition={springConfig} key={images[0]} src={images[0]} alt="Photography 1" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <motion.div layout transition={springConfig} className="relative rounded-2xl overflow-hidden bg-gray-800" style={{ flex: layoutIndex % 2 === 0 ? 1 : 2 }}>
               <motion.img layoutId={images[1]} transition={springConfig} key={images[1]} src={images[1]} alt="Photography 2" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Center Column */}
          <motion.div 
            layout 
            transition={springConfig}
            className="h-full rounded-2xl overflow-hidden relative" 
            style={{ flex: layoutIndex === 0 || layoutIndex === 1 ? 2 : 1 }}
          >
            <motion.img layoutId={images[2]} transition={springConfig} key={images[2]} src={images[2]} alt="Main Photography" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          {/* Right Column */}
          <motion.div 
            layout 
            transition={springConfig}
            className="flex flex-col gap-4 h-full" 
            style={{ flex: layoutIndex === 2 || layoutIndex === 3 ? 2 : 1 }}
          >
            <motion.div layout transition={springConfig} className="relative rounded-2xl overflow-hidden bg-gray-800" style={{ flex: layoutIndex === 0 || layoutIndex === 2 ? 1 : 2 }}>
               <motion.img layoutId={images[3]} transition={springConfig} key={images[3]} src={images[3]} alt="Photography 3" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <motion.div layout transition={springConfig} className="relative rounded-2xl overflow-hidden bg-gray-800" style={{ flex: 1.5 }}>
               <motion.img layoutId={images[4]} transition={springConfig} key={images[4]} src={images[4]} alt="Photography 4" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            <motion.div layout transition={springConfig} className="relative rounded-2xl overflow-hidden bg-gray-800" style={{ flex: layoutIndex === 1 || layoutIndex === 3 ? 1 : 2 }}>
               <motion.img layoutId={images[5]} transition={springConfig} key={images[5]} src={images[5]} alt="Photography 5" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
