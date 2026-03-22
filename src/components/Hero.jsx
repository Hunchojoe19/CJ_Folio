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

const HeroImage = ({ image, flex, style }) => (
  <motion.div 
    layout 
    transition={springConfig} 
    className="relative rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer"
    style={{ flex, ...style }}
  >
    <motion.img 
      layoutId={image} 
      transition={springConfig} 
      key={image} 
      src={image} 
      alt="Photography" 
      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3" 
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
        <ArrowUpRight className="w-6 h-6 text-white" />
      </div>
    </div>
  </motion.div>
);

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
            <HeroImage image={images[0]} flex={layoutIndex % 2 === 0 ? 2 : 1} />
            <HeroImage image={images[1]} flex={layoutIndex % 2 === 0 ? 1 : 2} />
          </motion.div>

          {/* Center Column */}
          <HeroImage image={images[2]} flex={layoutIndex === 0 || layoutIndex === 1 ? 2 : 1} style={{ height: '100%' }} />

          {/* Right Column */}
          <motion.div 
            layout 
            transition={springConfig}
            className="flex flex-col gap-4 h-full" 
            style={{ flex: layoutIndex === 2 || layoutIndex === 3 ? 2 : 1 }}
          >
            <HeroImage image={images[3]} flex={layoutIndex === 0 || layoutIndex === 2 ? 1 : 2} />
            <HeroImage image={images[4]} flex={1.5} />
            <HeroImage image={images[5]} flex={layoutIndex === 1 || layoutIndex === 3 ? 1 : 2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
