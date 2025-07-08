import React, { useEffect } from 'react';

const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Modal = ({ isOpen, onClose, photo }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen || !photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col p-4 sm:p-6 transition-transform transform duration-300 ease-in-out scale-95 animate-modal-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-4 -right-4 sm:top-2 sm:right-2 z-10 p-2 rounded-full bg-white text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes modal-scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-modal-scale-in {
          animation: modal-scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;
