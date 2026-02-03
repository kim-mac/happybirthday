
import React, { useState } from 'react';
import { GiftBox } from '../types';

interface GiftsViewProps {
  onRestart: () => void;
}

const RealGiftBox: React.FC<{ isOpen: boolean; isSpecial: boolean; contentImageUrl: string; onClick: () => void }> = ({ isOpen, isSpecial, contentImageUrl, onClick }) => {
  return (
    <div 
      className={`relative w-48 h-48 cursor-pointer group perspective-1000 transition-all duration-500 ${isOpen ? 'animate-shake' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      {/* Revealed Content Image - "The Pop Out" */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? 'opacity-100 scale-150 translate-y-[-60px]' : 'opacity-0 scale-0 translate-y-0'}`}>
        <div className={`relative w-36 h-36 rounded-xl flex items-center justify-center shadow-[0_20px_50px_rgba(240,66,110,0.3)] border-4 bg-white overflow-hidden p-1.5 z-40 ${isSpecial ? 'border-yellow-400 animate-bounce' : 'border-white animate-bounce'}`}>
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-center rounded-lg"
            style={{ backgroundImage: `url("${contentImageUrl}")` }}
          />
        </div>
        
        {/* Glow effect behind the revealed image */}
        <div className={`absolute inset-0 bg-primary/20 blur-2xl rounded-full transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Actual Box Body */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-32 bg-primary rounded-lg shadow-2xl transition-all duration-500 overflow-hidden z-20 ${isOpen ? 'brightness-90 translate-y-[10px]' : ''}`}>
        {/* Ribbon Stripes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-full bg-white opacity-30"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-10 bg-white opacity-20"></div>
        {/* Box Interior Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Lid */}
      <div 
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 w-44 h-12 bg-primary border-b-4 border-black/10 rounded-md shadow-lg z-30 transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-[-140px] rotate-[-35deg] opacity-0 pointer-events-none' : 'group-hover:translate-y-[-8px]'}`}
      >
        {/* Lid Ribbon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-full bg-white opacity-40"></div>
        
        {/* Decorative Bow/Icon on Top */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full opacity-90 blur-[0.5px] shadow-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl font-bold">
                        redeem
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* Sparkle effects for the special box */}
      {isOpen && isSpecial && (
        <div className="absolute inset-[-80px] pointer-events-none z-50">
          <span className="material-symbols-outlined absolute top-0 left-0 text-yellow-400 animate-sparkle text-3xl">auto_awesome</span>
          <span className="material-symbols-outlined absolute bottom-0 right-0 text-yellow-400 animate-sparkle text-3xl" style={{animationDelay: '0.5s'}}>star</span>
          <span className="material-symbols-outlined absolute top-1/2 left-[-30px] text-primary animate-sparkle text-3xl" style={{animationDelay: '1s'}}>favorite</span>
          <span className="material-symbols-outlined absolute top-1/3 right-[-20px] text-primary animate-sparkle text-3xl" style={{animationDelay: '1.5s'}}>favorite</span>
        </div>
      )}
    </div>
  );
};

const GiftsView: React.FC<GiftsViewProps> = ({ onRestart }) => {
  const [gifts, setGifts] = useState<GiftBox[]>([
    { 
      id: 1, 
      isOpen: false, 
      label: 'Making up for the misunderstanding', 
      subLabel: 'Box One', 
      icon: '', 
      contentIcon: '💄', 
      contentImageUrl: 'https://i.imgur.com/CRNsHsj.png', 
      isSpecial: false 
    },
    { 
      id: 2, 
      isOpen: false, 
      label: 'A scent that you always talk about', 
      subLabel: 'Box Two', 
      icon: '', 
      contentIcon: '🔊', 
      contentImageUrl: 'https://i.imgur.com/hawiFcr.png', 
      isSpecial: false 
    },
    { 
      id: 3, 
      isOpen: false, 
      label: 'Your love for music', 
      subLabel: 'Box Three', 
      icon: '', 
      contentIcon: '✨', 
      contentImageUrl: 'https://i.imgur.com/6WMWhLq.png', 
      isSpecial: false 
    },
    { 
      id: 4, 
      isOpen: false, 
      label: 'A grand finale?', 
      subLabel: 'Special Box', 
      icon: '', 
      contentIcon: '🐾', 
      contentImageUrl: 'https://i.imgur.com/LHn2qJs.png', 
      isSpecial: true 
    },
  ]);

  const toggleGift = (id: number) => {
    setGifts(prev => prev.map(gift => {
      if (gift.id === id && !gift.isOpen) {
        return { ...gift, isOpen: true };
      }
      return gift;
    }));
  };

  const allOpened = gifts.every(g => g.isOpen);

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-12">
      <div className="flex flex-col items-center max-w-[960px] w-full mb-20">
        <h1 className="text-primary font-handwritten tracking-tight text-4xl md:text-5xl font-black leading-tight text-center pb-6 pt-6 drop-shadow-sm">
          Birthday Surprises! 🎁
        </h1>
        <p className="text-[#89616b] text-center text-lg max-w-md pb-4 font-medium italic">
          "The best gifts come from the heart."
        </p>
        <div className="w-24 h-1.5 bg-primary/10 rounded-full mt-4"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-20 gap-y-32 md:gap-x-32 p-4 max-w-[1200px] w-full mb-12">
        {gifts.map((gift) => (
          <div 
            key={gift.id} 
            className="flex flex-col items-center gap-12"
          >
            <RealGiftBox 
              isOpen={gift.isOpen} 
              isSpecial={gift.isSpecial} 
              contentImageUrl={gift.contentImageUrl} 
              onClick={() => toggleGift(gift.id)} 
            />
            
            <div className={`text-center transition-all duration-500 ${gift.isOpen ? 'translate-y-4 scale-105' : ''}`}>
              <p className={`text-xl font-black transition-colors ${gift.isOpen ? 'text-primary' : 'text-[#181113]'}`}>
                {gift.isOpen ? (
                  gift.id === 1 ? 'Your New Shade!' : 
                  gift.id === 2 ? 'Smells Divine!' : 
                  gift.id === 3 ? 'Play Your Favorite Song! ("not the sa ga ma pa da ni saa")' : 
                  'The Best Surprise of All! 🐱'
                ) : gift.label}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className={`h-px w-8 bg-primary/20 transition-all ${gift.isOpen ? 'w-12 opacity-100' : 'opacity-50'}`}></div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{gift.subLabel}</p>
                <div className={`h-px w-8 bg-primary/20 transition-all ${gift.isOpen ? 'w-12 opacity-100' : 'opacity-50'}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-[800px] w-full">
        <div className="flex flex-col justify-center gap-8 px-10 py-14 bg-white/80 rounded-[2.5rem] backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(240,66,110,0.15)] border border-primary/10 transition-all hover:bg-white group relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          
          <div className="flex flex-col gap-4 text-center relative z-10">
             <div className="flex justify-center gap-5 mb-2 text-primary">
               <span className="material-symbols-outlined animate-pulse text-3xl opacity-40 group-hover:opacity-100 transition-opacity">auto_awesome</span>
               <span className="material-symbols-outlined scale-150 animate-bounce text-5xl drop-shadow-sm">favorite</span>
               <span className="material-symbols-outlined animate-pulse text-3xl opacity-40 group-hover:opacity-100 transition-opacity" style={{animationDelay: '0.3s'}}>auto_awesome</span>
             </div>
            <h2 className="text-[#181113] tracking-tight text-3xl md:text-4xl font-black leading-tight">
              {allOpened ? "Hope you love your gifts! 💖" : "Go on, open the rest!"}
            </h2>
            <p className="text-[#89616b] text-xl font-romantic leading-relaxed">
              Every little thing I pick is just to see that beautiful smile of yours.
            </p>
          </div>
          <div className="flex justify-center mt-4 relative z-10">
            <button 
              onClick={onRestart}
              className={`flex min-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-12 bg-primary text-white text-xl font-black shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 active:scale-95 transition-all ${allOpened ? 'animate-bounce ring-4 ring-primary/20' : ''}`}
            >
              <span className="material-symbols-outlined mr-3">celebration</span>
              <span className="truncate">{allOpened ? "End with a Bang! ✨" : "Return to Home"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsView;
