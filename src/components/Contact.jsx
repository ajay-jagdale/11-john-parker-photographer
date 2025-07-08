import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFCF9]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Together</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Have a project in mind or an event you'd like to capture? Fill out the form below, and I'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B99A6B]/50 transition-shadow"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B99A6B]/50 transition-shadow"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B99A6B]/50 transition-shadow"
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit"
              className="bg-[#B99A6B] text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
