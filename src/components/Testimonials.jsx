import React from 'react';
import { ArrowLeft, ArrowRight, ArrowDownRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Johnson",
    location: "USA, California",
    review: "Doc's photography doesn't just capture moments, it captures emotions. His work is simply mesmerizing."
  },
  {
    name: "John Smith",
    location: "USA, California",
    review: "Doc has an incredible talent for making every event feel effortless, and the results speak for themselves."
  },
  {
    name: "Samantha Davis",
    location: "USA, California",
    review: "I was blown away by Doc's ability to capture the essence of our wedding day. His photographs are our cherished memories."
  }
];

const Testimonials = () => {
  return (
    <section className="pt-20 bg-[#070708] text-white overflow-hidden relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-10 pb-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8">
              What my clients say
            </h2>
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-1">Total Reviews</span>
              <span className="text-xl font-medium">323</span>
            </div>
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
              <span>View All Testimonials</span>
              <ArrowDownRight className="w-4 h-4 text-[#4f46e5]" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#121214] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-medium">{test.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{test.location}</p>
                  </div>
                  {/* <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition">
                      <Facebook className="w-3 h-3 text-gray-300" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition">
                      <Twitter className="w-3 h-3 text-gray-300" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-700 transition">
                      <Linkedin className="w-3 h-3 text-gray-300" />
                    </button>
                  </div> */}
                </div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {test.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Large Watermark */}
      <div className="w-full overflow-hidden absolute bottom-[-5%] left-0 right-0 z-0 flex justify-center pointer-events-none select-none">
        <h1 className="text-[8rem] lg:text-[11rem] font-bold text-gray-800/20 leading-none tracking-tighter uppercase whitespace-nowrap">
          Doc &nbsp; Photography
        </h1>
      </div>
    </section>
  );
};

export default Testimonials;
