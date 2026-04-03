import React from 'react';
import { Star } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-10 bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <div className="flex flex-col items-start gap-y-3 md:flex-row md:items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
              I am DOC&nbsp; Photography
            </h2>
            {/* <button className="flex items-center space-x-2 px-6 py-3 border border-gray-800 rounded-lg bg-[#121214] hover:bg-gray-800 transition text-sm">
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 text-[#4f46e5]" />
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Photo Card */}
          <div className="relative rounded-t-[3rem] rounded-b-2xl overflow-hidden h-[600px] border border-gray-800">
            <img src="https://res.cloudinary.com/dc59hhvse/image/upload/v1775240411/WhatsApp_Image_2026-04-02_at_10.24.47_vkvutg.jpg" alt="Idaviesco" className="absolute inset-0 w-full h-full object-cover" />
            {/* Decorative element like the image */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#070708] rounded-br-[3rem] border-r border-b border-gray-800 z-10"></div>
          </div>

          {/* Info Card */}
          <div className="flex flex-col border border-gray-800 rounded-3xl p-8 bg-[#0a0a0c]">
            {/* Introduction */}
            <div className="mb-10 pb-10 border-b border-gray-800/80">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-[#4f46e5]" fill="currentColor" />
                <h3 className="text-xl font-medium">Introduction</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 text-[#4f46e5]" fill="currentColor" />
                <h3 className="text-xl font-medium">Contact Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="text-gray-500 mb-1">Email</h4>
                  <p className="text-gray-200">Idaviesco@yahoo.com</p>
                </div>
                <div>
                  <h4 className="text-gray-500 mb-1">Phone Number</h4>
                  <p className="text-gray-200">3099970735</p>
                </div>
              </div>
            </div>
            <FaInstagram />
            {/* Socials & Actions */}
            <div className="flex items-center mt-auto">
              {/* Social icons */}

              <a href="https://www.instagram.com/doc_photoz/?hl=en" className="hover:text-white transition">
                <button className="cursor-pointer flex items-center space-x-2 mb-4 md:mb-0">
                  <FaInstagram className="w-4 h-4" />
                  <p className="">Instagram</p>
                  {/* <a href="#" className="hover:text-white transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition"><Linkedin className="w-4 h-4" /></a> */}
                </button>
              </a>


              {/* Action Buttons */}
              {/* <div className="flex space-x-3 text-sm font-medium">
                <button className="px-6 py-3 bg-[#121214] border border-gray-800 rounded-lg hover:bg-gray-800 transition text-white">Let's Work</button>
                <button className="px-6 py-3 bg-[#121214] border border-gray-800 rounded-lg hover:bg-gray-800 transition text-white">Download CV</button>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
