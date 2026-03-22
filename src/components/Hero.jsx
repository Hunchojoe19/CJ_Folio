import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const initialImages = [
  "/src/assets/images/guy_holding_orange_1774210235546.png",
  "/src/assets/images/small_woman_portrait_1774210283257.png",
  "/src/assets/images/hero_center_woman_1774210152840.png",
  "/src/assets/images/hero_top_right_man_1774210178440.png",
  "/src/assets/images/woman_red_pattern_shirt_1774210251156.png",
  "/src/assets/images/bw_guy_looking_up_1774210268030.png"
];

const Hero = () => {
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prev => {
        const newArr = [...prev];
        // Rotate the array by taking the last item and putting it first
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
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

        {/* Masonry Grid with Animated Interchange */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
          {/* Left Column */}
          <div className="flex flex-col gap-4 col-span-1 h-full">
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-800">
               <motion.img layoutId={images[0]} key={images[0]} src={images[0]} alt="Photography 1" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-800">
               <motion.img layoutId={images[1]} key={images[1]} src={images[1]} alt="Photography 2" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-2 h-full rounded-2xl overflow-hidden bg-yellow-500 relative">
            <motion.img layoutId={images[2]} key={images[2]} src={images[2]} alt="Main Photography" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 col-span-1 h-full">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-800">
               <motion.img layoutId={images[3]} key={images[3]} src={images[3]} alt="Photography 3" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
            </div>
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-800">
               <motion.img layoutId={images[4]} key={images[4]} src={images[4]} alt="Photography 4" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
            </div>
            <div className="relative h-40 rounded-2xl overflow-hidden bg-gray-800">
               <motion.img layoutId={images[5]} key={images[5]} src={images[5]} alt="Photography 5" className="absolute inset-0 w-full h-full object-cover" transition={{ duration: 0.8, ease: "easeInOut" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
