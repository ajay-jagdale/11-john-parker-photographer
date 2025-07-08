import React from 'react';
import img from '/assets/hero-img.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#FDFCF9] overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Artistry in Every Frame
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-500 max-w-lg mx-auto md:mx-0">
              Discover a world seen through my lens, where light, emotion, and story converge to create timeless photographs.
            </p>
            <a
              href="#gallery"
              className="inline-block bg-[#B99A6B] text-white font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Portfolio
            </a>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[533px] animate-fade-in-up">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#B99A6B]/50 rounded-lg"></div>
              <img 
                src={img} 
                alt="Artistic portrait of a man"
                className="w-full h-full object-cover rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
