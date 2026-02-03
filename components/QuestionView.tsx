
import React from 'react';

interface QuestionViewProps {
  onYes: () => void;
  onNo: () => void;
}

const Polaroid: React.FC<{ imageUrl: string; className: string; rotation: string; animation: string }> = ({ imageUrl, className, rotation, animation }) => {
  return (
    <div className={`absolute pointer-events-none p-2 pb-8 bg-white shadow-xl ${className} ${rotation} ${animation} border border-gray-100 hidden md:flex flex-col items-center z-0 transition-all duration-700 w-44`}>
      <div className="w-full overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={imageUrl} 
          className="w-full h-auto object-contain block shadow-inner" 
          alt="Birthday Memory" 
        />
      </div>
      {/* Optional: Small caption area typical of Polaroids */}
      <div className="mt-2 h-2 w-12 bg-gray-100/50 rounded-full" />
    </div>
  );
};

const QuestionView: React.FC<QuestionViewProps> = ({ onYes, onNo }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 py-20 relative overflow-hidden">
      {/* Floating Polaroids - Scattered Layout */}
      <Polaroid 
        imageUrl="https://i.imgur.com/zUAWWw5.png" 
        className="top-[5%] left-[15%]" 
        rotation="-rotate-6"
        animation="animate-float-slow"
      />
      <Polaroid 
        imageUrl="https://i.imgur.com/EYg7mfk.png" 
        className="bottom-[3%] left-[13%]" 
        rotation="rotate-12"
        animation="animate-float-medium"
      />
      <Polaroid 
        imageUrl="https://i.imgur.com/M87mMbn.png" 
        className="top-[4%] right-[16%]" 
        rotation="rotate-6"
        animation="animate-float-fast"
      />
      <Polaroid 
        imageUrl="https://i.imgur.com/dko2O72.png" 
        className="bottom-[3%] right-[12%]" 
        rotation="-rotate-12"
        animation="animate-float-medium"
      />
      
      {/* Additional Polaroids */}
      <Polaroid 
        imageUrl="https://i.imgur.com/poWYZ77.png" 
        className="top-[32%] left-[1%]" 
        rotation="rotate-3"
        animation="animate-float-fast"
      />
      <Polaroid 
        imageUrl="https://i.imgur.com/d02fPGg.png" 
        className="top-[30%] right-[2%]" 
        rotation="-rotate-12"
        animation="animate-float-medium"
      />

      {/* Background Decorative Icons */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-primary/10 select-none animate-pulse">
        <span className="material-symbols-outlined text-8xl">favorite</span>
      </div>
      
      <div className="relative w-full max-w-lg">
       

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-10 text-center border border-primary/5 relative z-10 transform transition-transform hover:scale-[1.01]">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-soft-pink rounded-full text-primary shadow-inner">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          </div>
          <h1 className="text-primary font-handwritten text-4xl mb-4 leading-tight">
            I have made something for you 💕
          </h1>
          <p className="text-gray-500 text-xl mb-10 font-medium">
            Do you wanna see it?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onYes}
              className="flex-1 bg-primary text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Yes 🩷
            </button>
            <button 
              onClick={onNo}
              className="flex-1 bg-gray-100 text-gray-500 font-bold text-lg py-4 px-8 rounded-full shadow-md hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              No 🙄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
