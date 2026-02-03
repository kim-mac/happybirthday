
import React, { useState } from 'react';

interface WishViewProps {
  onNext: () => void;
}

const Candle: React.FC<{ blownOut: boolean; delay: string; position: { top: string; left: string } }> = ({ blownOut, delay, position }) => {
  return (
    <div 
      className="absolute z-30 transition-all duration-500" 
      style={{ top: position.top, left: position.left }}
    >
      {/* Candle Stick */}
      <div className="w-2 h-10 bg-gradient-to-b from-white to-pink-200 rounded-t-sm shadow-sm relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gray-400" />
      </div>

      {/* Flame */}
      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 transition-all duration-700 ${blownOut ? 'scale-0 opacity-0 translate-y-[-10px]' : 'scale-100 opacity-100'}`}>
        <div 
          className="animate-flicker text-orange-500 flex items-center justify-center"
          style={{ animationDelay: delay }}
        >
           <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
             local_fire_department
           </span>
           <div className="absolute inset-0 bg-yellow-400/40 blur-md rounded-full" />
        </div>
      </div>

      {/* Smoke Effect when blown out */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-1000 ${blownOut ? 'opacity-40 translate-y-[-20px] scale-150' : 'opacity-0 scale-50'}`}>
        <span className="material-symbols-outlined text-gray-400 text-xl">cloud</span>
      </div>
    </div>
  );
};

const WishView: React.FC<WishViewProps> = ({ onNext }) => {
  const [blownOut, setBlownOut] = useState(false);

  const handleBlowOut = () => {
    if (!blownOut) {
      setBlownOut(true);
      const blowSfx = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wind-swoosh-blowing-1393.mp3');
      blowSfx.volume = 0.5;
      blowSfx.play().catch(() => {});
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-12">
      <div className="max-w-[960px] w-full text-center">
        <h1 className="text-primary font-handwritten tracking-tight text-5xl md:text-6xl font-black leading-tight pb-3 pt-6 drop-shadow-sm">
          Make a Wish!
        </h1>
        <p className="text-[#89616b] text-lg md:text-xl font-medium mb-8">
          {blownOut ? "Yay! Your wish is on its way! 🪄✨" : "Tap the cake to blow out the candles!"}
        </p>
      </div>

      <div className="max-w-[960px] w-full flex flex-col items-center">
        <div 
          className="relative group cursor-pointer"
          onClick={handleBlowOut}
        >
          {/* Glow effect behind cake */}
          <div className={`absolute inset-0 blur-[80px] rounded-full transition-all duration-700 ${blownOut ? 'bg-gray-200/20' : 'bg-primary/30 group-hover:bg-primary/40'}`} />
          
          <div 
            className={`relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-center bg-no-repeat bg-contain transition-all duration-500 hover:scale-105 ${blownOut ? 'grayscale-[0.2] brightness-90' : ''}`}
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCx07mJgX2kYEHctF_SfCY_Rf4rmhwE6U5yxkAfn3Co1AZJOOX5hWZNPwVgMZNWisHi_KYbc-6WokKOYM8wk74tQ7xnNwnYD081p-Ec5HnlG6OhBTCeXRRYzHjJ9ZjprXUAHCNtWn7w7ir7HuBAxHTsksZFRVdRMgmUU7z7OscvpTNTh5crq_Y7R24ngd0_ZHMCtAFO1_R_9925GiFYXFSSRhAva3iEL6x6ofpPVu_5CUAntze5Qsvn5Fs7c7pULTl1c_tjLNuCmQ")`,
              borderRadius: '40px'
            }}
          >
            {/* Interactive Candles on the cake top */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Candle blownOut={blownOut} delay="0s" position={{ top: '25%', left: '35%' }} />
                <Candle blownOut={blownOut} delay="0.4s" position={{ top: '22%', left: '50%' }} />
                <Candle blownOut={blownOut} delay="0.2s" position={{ top: '25%', left: '65%' }} />
                <Candle blownOut={blownOut} delay="0.7s" position={{ top: '35%', left: '42%' }} />
                <Candle blownOut={blownOut} delay="0.5s" position={{ top: '35%', left: '58%' }} />
              </div>
            </div>
          </div>

          {/* Floating Hearts */}
          {!blownOut && (
            <>
              <div className="absolute -top-4 -left-4 animate-bounce">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
            </>
          )}

          {/* Sparkles when blown out */}
          {blownOut && (
            <div className="absolute inset-0 pointer-events-none">
                <span className="material-symbols-outlined absolute top-1/4 left-1/4 text-yellow-400 animate-sparkle">auto_awesome</span>
                <span className="material-symbols-outlined absolute top-1/3 right-1/4 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.4s' }}>star</span>
                <span className="material-symbols-outlined absolute bottom-1/4 left-1/2 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.8s' }}>auto_awesome</span>
            </div>
          )}
        </div>

        <div className="flex px-4 py-10 justify-center gap-4">
          {!blownOut ? (
            <button 
              onClick={handleBlowOut}
              className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-full h-16 px-10 bg-primary text-white gap-3 text-xl font-black leading-normal shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>air</span>
              <span className="truncate">Blow out the candles!</span>
            </button>
          ) : (
            <button 
              onClick={onNext}
              className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-full h-16 px-10 bg-primary text-white gap-3 text-xl font-black leading-normal shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all animate-bounce"
            >
              <span>See Your Gifts!</span>
              <span className="material-symbols-outlined">card_giftcard</span>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[800px] w-full mb-24 px-4">
        <div className="p-8 md:p-12 rounded-3xl shadow-2xl bg-white/90 border border-primary/10 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[10rem]">format_quote</span>
          </div>
          <h3 className="text-primary font-handwritten text-2xl font-bold mb-6 flex items-center gap-2">
            To My Dearest... <span className="material-symbols-outlined animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </h3>
          <div className="space-y-6">
            <p className="text-[#181113] text-2xl md:text-3xl font-romantic leading-relaxed italic font-bold">
              "You make every single day feel like a grand celebration. From the quiet morning purrs to our late-night adventures, I am so incredibly lucky to have you by my side."
            </p>
            <p className="text-[#89616b] text-lg font-medium leading-relaxed">
              May all your biggest dreams and tiniest wishes come true today. You deserve the world and all the treats in it! I can't wait to spend many more birthdays together, making more memories and sharing more whiskers.
            </p>
            <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-primary text-xl font-romantic font-black text-center sm:text-left">Happy Birthday! I love you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishView;
