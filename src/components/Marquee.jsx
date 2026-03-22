import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const textItems = [
  "Event Photography",
  "Commercial Photography",
  "Product Photography",
  "Wedding Photography",
  "Landscape Photography",
  "Branding Photography",
  "Portrait Photography"
];

const Marquee = () => {
  return (
    <div className="bg-[#070708] border-y border-gray-800/80 py-4 overflow-hidden relative flex z-0">
      <motion.div
        className="flex whitespace-nowrap min-w-full"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <div className="flex items-center gap-6 px-4">
          {textItems.map((text, idx) => (
            <React.Fragment key={idx}>
              <Star className="w-4 h-4 text-[#4f46e5] shrink-0" fill="currentColor" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-widest">{text}</span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {textItems.map((text, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <Star className="w-4 h-4 text-[#4f46e5] shrink-0" fill="currentColor" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-widest">{text}</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
