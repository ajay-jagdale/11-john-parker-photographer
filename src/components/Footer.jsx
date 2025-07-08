import React from 'react';

// Simplified SVG icon components for social media
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75a3.25 3.25 0 0 1 3.25-3.25h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5ZM12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Zm0 6a2.25 2.25 0 1 1 2.25-2.25A2.25 2.25 0 0 1 12 14.25Zm4.75-6.5a.75.75 0 1 1-.75-.75.75.75 0 0 1 .75.75Z" />
  </svg>
);


const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-gray-500 text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} John Parker. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-[#B99A6B] transition-colors duration-300">
            <InstagramIcon />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#B99A6B] transition-colors duration-300">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
