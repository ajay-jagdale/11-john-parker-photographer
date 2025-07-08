import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const photos = [
  // Portrait
  { id: 1, src: '/assets/portfolio-images/portrait1.jpeg', title: 'Quiet Confidence', category: 'Portrait' },
  { id: 2, src: '/assets/portfolio-images/portrait2.jpeg', title: 'The Thinker', category: 'Portrait' },
  { id: 3, src: '/assets/portfolio-images/portrait3.jpeg', title: 'Thoughtful Mood', category: 'Portrait' },
  { id: 4, src: '/assets/portfolio-images/portrait4.jpeg', title: 'Shaded Glare', category: 'Portrait' },

  // Nature
  { id: 5, src: '/assets/portfolio-images/nature1.jpeg', title: 'Alpine Serenity', category: 'Nature' },
  { id: 6, src: '/assets/portfolio-images/nature2.jpeg', title: 'Whispering Woods', category: 'Nature' },
  { id: 7, src: '/assets/portfolio-images/nature3.jpeg', title: 'Emerald River', category: 'Nature' },
  { id: 8, src: '/assets/portfolio-images/nature4.jpeg', title: 'Crimson Peaks', category: 'Nature' },

  // Wildlife
  { id: 9, src: '/assets/portfolio-images/wildlife1.jpeg', title: 'Grace in Motion', category: 'Wildlife' },
  { id: 10, src: '/assets/portfolio-images/wildlife2.jpeg', title: 'The Sovereign', category: 'Wildlife' },
  { id: 11, src: '/assets/portfolio-images/wildlife3.jpeg', title: 'Bear’s Catch', category: 'Wildlife' },
  { id: 12, src: '/assets/portfolio-images/wildlife4.jpeg', title: 'Spotted Silence', category: 'Wildlife' },

  // Avian
  { id: 13, src: '/assets/portfolio-images/avian1.jpeg', title: 'Wings of Wonder', category: 'Avian' },
  { id: 14, src: '/assets/portfolio-images/avian2.jpeg', title: 'Blue Whisper', category: 'Avian' },
  { id: 15, src: '/assets/portfolio-images/avian3.jpeg', title: 'Frozen Wings', category: 'Avian' },
  { id: 16, src: '/assets/portfolio-images/avian4.jpeg', title: 'Elegance in Stillness', category: 'Avian' },

  // Architecture
  { id: 17, src: '/assets/portfolio-images/architecture1.jpeg', title: 'Sky Reflections', category: 'Architecture' },
  { id: 18, src: '/assets/portfolio-images/architecture2.jpeg', title: 'Architectural Loop', category: 'Architecture' },
  { id: 19, src: '/assets/portfolio-images/architecture3.jpeg', title: 'Grey Blocks', category: 'Architecture' },
  { id: 20, src: '/assets/portfolio-images/architecture4.jpeg', title: 'Time’s Gateway', category: 'Architecture' },

  // Street
  { id: 21, src: '/assets/portfolio-images/street1.jpeg', title: 'Rainy Rhapsody', category: 'Street' },
  { id: 22, src: '/assets/portfolio-images/street2.jpeg', title: 'Evening Light', category: 'Street' },
  { id: 23, src: '/assets/portfolio-images/street3.jpeg', title: 'Wall Walkers', category: 'Street' },
  { id: 24, src: '/assets/portfolio-images/street4.jpeg', title: 'Night Alley', category: 'Street' },

  // Travel
  { id: 25, src: '/assets/portfolio-images/travel1.jpeg', title: 'Aegean Sunset', category: 'Travel' },
  { id: 26, src: '/assets/portfolio-images/travel2.jpeg', title: 'Dunes & Shadows', category: 'Travel' },
  { id: 27, src: '/assets/portfolio-images/travel3.jpeg', title: 'Lifted Horizons', category: 'Travel' },
  { id: 28, src: '/assets/portfolio-images/travel4.jpeg', title: 'Frozen Pathway', category: 'Travel' },

  // Abstract
  { id: 29, src: '/assets/portfolio-images/abstract1.jpeg', title: 'Vibrant Hues', category: 'Abstract' },
  { id: 30, src: '/assets/portfolio-images/abstract2.jpeg', title: 'Liquid Dream', category: 'Abstract' },
  { id: 31, src: '/assets/portfolio-images/abstract3.jpeg', title: 'Pulse of Pixels', category: 'Abstract' },
  { id: 32, src: '/assets/portfolio-images/abstract4.jpeg', title: 'Shape Shift', category: 'Abstract' },
];


const categories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))];

const GalleryImage = ({ photo, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer"
    onClick={onClick}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    tabIndex={0}
    role="button"
    aria-label={`View image: ${photo.title}`}
  >
    <img
      src={photo.src}
      alt="img"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#FDFCF9] bg-opacity-0"></div>
  </div>
);


const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFCF9]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Portfolio</h2>

        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B99A6B]/50 ${activeFilter === category
                ? 'bg-[#B99A6B] text-white shadow'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="mb-4 sm:mb-6 break-inside-avoid animate-fade-in">
              <GalleryImage photo={photo} onClick={() => openModal(photo)} />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={!!selectedPhoto} onClose={closeModal} photo={selectedPhoto} />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
