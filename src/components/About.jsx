import React from 'react';
import img from '/assets/about-img.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="md:w-1/3">
            <img
              src={img}
              alt="Portrait of the photographer, John Parker"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-600 leading-relaxed text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">About Me</h2>
            <p className="mb-6">
              Hello! I'm John Parker, a passionate photographer with a love for capturing the fleeting moments that tell a larger story. My journey began over a decade ago with a simple film camera, and since then, I've been obsessed with light, composition, and emotion.
            </p>
            <p className="mb-6">
              Whether I'm hiking through remote landscapes to catch the perfect sunrise or navigating bustling city streets to find hidden narratives, my goal is always the same: to create images that are not only beautiful but also deeply resonant.
            </p>
            <p>
              I believe that a great photograph is one that you can feel. It’s an honor to share my perspective with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
