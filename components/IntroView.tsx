
import React from 'react';

interface IntroViewProps {
  onStart: () => void;
}

const IntroView: React.FC<IntroViewProps> = ({ onStart }) => {
  const playMeow = () => {
    const meowSfx = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cat-meow-1453.mp3');
    meowSfx.volume = 0.3;
    meowSfx.play().catch(() => {});
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Decorative Icons */}
      <div className="absolute top-20 left-10 text-primary/20 select-none animate-pulse">
        <span className="material-symbols-outlined text-6xl">favorite</span>
      </div>
      <div className="absolute bottom-40 right-20 text-primary/10 select-none animate-bounce">
        <span className="material-symbols-outlined text-8xl">pets</span>
      </div>
      <div className="absolute top-1/2 left-1/4 text-primary/15 select-none rotate-12">
        <span className="material-symbols-outlined text-4xl">cake</span>
      </div>

      <div className="max-w-[960px] w-full z-10">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-primary/5 flex flex-col md:flex-row items-stretch min-h-[500px]">
          {/* Left Side: Illustration */}
          <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center bg-primary/5">
            <div 
              className="relative w-full aspect-square max-w-[400px] cursor-pointer group"
              onClick={playMeow}
            >
              <div 
                className="w-full h-full rounded-xl bg-cover bg-center shadow-inner transition-transform group-hover:scale-[1.02]" 
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3RX1VGgHyoOfRYu3cyZUbOWX1gFXfDUnn_HV31WFcG2Aje0ZFrdXBKm-kSDNYBCqB_RSMxkK7cphxdUN4LQQdP-AOw7KuhIr5_efp-E7Fx63EeIUtZrwr4tmMWIGkKq6MkT1ePhguOUOFXZgWQ_IKHdiv8Q3wvuV3ZI_8rUbA2dazkgrw7Yus8Plq8bi7xWz7gDv0DDc2SmN9p3CVd9nj_vJ33PyJlQhu0gxUhEJfTKDETC1FEI63BmAnW8BAJGSQ_fpLVk1tZg")`}}
              />
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg text-primary animate-bounce">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <div className="absolute -bottom-2 -left-4 bg-white p-3 rounded-full shadow-lg text-primary group-hover:animate-shake">
                <span className="material-symbols-outlined text-2xl">pets</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Click for a meow! 🐾
              </div>
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-primary font-handwritten text-5xl md:text-6xl mb-4 leading-tight">
                Happy Birthday, My Love!
              </h1>
              <p className="text-[#89616b] text-lg md:text-xl font-medium">
                Every paw print on my heart leads back to you. Ready for your special surprise?
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={onStart}
                className="w-full md:w-auto min-w-[240px] bg-primary text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Start Our Journey</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroView;
