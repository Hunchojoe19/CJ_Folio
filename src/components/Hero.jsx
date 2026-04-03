import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialImages = [
  // "/images/guy_holding_orange_1774210235546.png",
  // "/images/small_woman_portrait_1774210283257.png",
  // "/images/hero_center_woman_1774210152840.png",
  // "/images/hero_top_right_man_1774210178440.png",
  // "/images/woman_red_pattern_shirt_1774210251156.png",
  // "/images/bw_guy_looking_up_1774210268030.png"
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812915/WhatsApp_Image_2026-03-23_at_19.31.19_irynep.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812916/PHOTO-2026-03-24-08-41-37_1_daycga.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812915/PHOTO-2026-03-24-08-41-37_twbetj.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812916/PHOTO-2026-03-24-08-41-37_3_nno6qg.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812917/PHOTO-2026-03-24-08-41-37_8_iteoqg.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812917/PHOTO-2026-03-24-08-41-37_7_apwjjz.jpg",
  "https://res.cloudinary.com/dc59hhvse/image/upload/v1774812922/8BGM7H7X_lshtmv.jpg"
];

const springConfig = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1
};

const HeroImage = ({ image, flex, style, onDragStart, onDragEnd }) => (
  <motion.div
    layoutId={image}
    transition={springConfig}
    className="relative rounded-2xl overflow-hidden bg-gray-900 group cursor-grab active:cursor-grabbing"
    style={{ ...style, flex }}
    drag
    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    dragElastic={1}
    onDragStart={onDragStart}
    onDragEnd={(e, info) => onDragEnd(e, info, image)}
    whileDrag={{ zIndex: 50, scale: 1.05 }}
    data-image-src={image}
  >
    <motion.img
      src={image}
      alt="Photography"
      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none z-10">
      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
        <ArrowUpRight className="w-6 h-6 text-white" />
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [images, setImages] = useState(initialImages);
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Pause auto-carousel if the user is interacting
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setImages(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
      setLayoutIndex(prev => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info, draggedImageSrc) => {
    setIsDragging(false);

    // Get all elements under the drop point
    const elements = document.elementsFromPoint(info.point.x, info.point.y);

    // Find the first valid drop target that isn't the dragged element itself
    const targetElement = elements.find(
      el => el.hasAttribute('data-image-src') && el.getAttribute('data-image-src') !== draggedImageSrc
    );

    if (targetElement) {
      const targetImageSrc = targetElement.getAttribute('data-image-src');

      // Perform the swap
      setImages(prev => {
        const newArr = [...prev];
        const idx1 = newArr.indexOf(draggedImageSrc);
        const idx2 = newArr.indexOf(targetImageSrc);

        if (idx1 !== -1 && idx2 !== -1) {
          newArr[idx1] = prev[idx2];
          newArr[idx2] = prev[idx1];
          // Also bump layout to react fluidly to the swap
          setLayoutIndex(prevLayout => (prevLayout + 1) % 4);
        }
        return newArr;
      });
    }
  };

  return (
    <section id='home' className="pt-10 md:pt-20 pb-10 px-6 md:px-10 bg-[#070708] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-0">
          <div>
            <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold mb-3 md:mb-4 uppercase">
              Stunning Photography By
            </p>
            <h1 className="text-lg leading-[1.1] md:text-5xl font-bold tracking-tighter uppercase wrap-break-word md:whitespace-nowrap">
              DOC &nbsp; Photography
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-4 mb-2">
            <div className="flex items-center justify-center w-28 md:w-32 h-10 md:h-12 bg-[#2a2a30] rounded-l-full rounded-r-full relative border border-gray-700">
              <span className="text-sm font-medium pr-8">Let's</span>
              <div className="absolute right-1 w-8 h-8 md:w-10 md:h-10 bg-[#4f46e5] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            <span className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Work Together
            </span>
          </div>
        </div>

        {/* Highly Animated Masonry Grid */}
        <div
          className="flex gap-2 md:gap-4 h-[350px] md:h-[600px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Column */}
          <motion.div
            layout
            transition={springConfig}
            className="flex flex-col gap-4 h-full"
            style={{ flex: layoutIndex === 0 || layoutIndex === 3 ? 1 : 2 }}
          >
            <HeroImage key={images[0]} image={images[0]} flex={layoutIndex % 2 === 0 ? 2 : 1} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
            <HeroImage key={images[1]} image={images[1]} flex={layoutIndex % 2 === 0 ? 1 : 2} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
          </motion.div>

          {/* Center Column */}
          <HeroImage key={images[2]} image={images[2]} flex={layoutIndex === 0 || layoutIndex === 1 ? 2 : 1} style={{ height: '100%' }} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />

          {/* Right Column */}
          <motion.div
            layout
            transition={springConfig}
            className="flex flex-col gap-4 h-full"
            style={{ flex: layoutIndex === 2 || layoutIndex === 3 ? 2 : 1 }}
          >
            <HeroImage key={images[3]} image={images[3]} flex={layoutIndex === 0 || layoutIndex === 2 ? 1 : 2} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
            <HeroImage key={images[4]} image={images[4]} flex={1.5} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
            <HeroImage key={images[5]} image={images[5]} flex={layoutIndex === 1 || layoutIndex === 3 ? 1 : 2} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
