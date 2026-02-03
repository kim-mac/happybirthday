
import React from 'react';

interface RejectionViewProps {
  onTryAgain: () => void;
}

const RejectionView: React.FC<RejectionViewProps> = ({ onTryAgain }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 py-20 relative">
      <div className="relative w-full max-w-lg">
        {/* Cat peeking from bottom right */}
        <div className="absolute bottom-[-30px] right-[-40px] w-32 h-32 rotate-[-10deg] z-20 pointer-events-none drop-shadow-xl">
          <div 
            className="w-full h-full bg-contain bg-no-repeat grayscale-[0.5]" 
            style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3RX1VGgHyoOfRYu3cyZUbOWX1gFXfDUnn_HV31WFcG2Aje0ZFrdXBKm-kSDNYBCqB_RSMxkK7cphxdUN4LQQdP-AOw7KuhIr5_efp-E7Fx63EeIUtZrwr4tmMWIGkKq6MkT1ePhguOUOFXZgWQ_IKHdiv8Q3wvuV3ZI_8rUbA2dazkgrw7Yus8Plq8bi7xWz7gDv0DDc2SmN9p3CVd9nj_vJ33PyJlQhu0gxUhEJfTKDETC1FEI63BmAnW8BAJGSQ_fpLVk1tZg")`}}
          />
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-10 text-center border border-primary/5 relative z-10 flex flex-col items-center animate-bounce-slow">
          <div 
            className="mb-6 w-48 h-48 bg-contain bg-no-repeat bg-center grayscale contrast-[1.1]" 
            style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3RX1VGgHyoOfRYu3cyZUbOWX1gFXfDUnn_HV31WFcG2Aje0ZFrdXBKm-kSDNYBCqB_RSMxkK7cphxdUN4LQQdP-AOw7KuhIr5_efp-E7Fx63EeIUtZrwr4tmMWIGkKq6MkT1ePhguOUOFXZgWQ_IKHdiv8Q3wvuV3ZI_8rUbA2dazkgrw7Yus8Plq8bi7xWz7gDv0DDc2SmN9p3CVd9nj_vJ33PyJlQhu0gxUhEJfTKDETC1FEI63BmAnW8BAJGSQ_fpLVk1tZg")`}}
          />
          
          <h1 className="text-primary font-handwritten text-5xl mb-6 leading-tight font-bold">
            How dare you 😾
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-xs mx-auto font-medium">
            You can't say no to a surprise! It's your birthday!
          </p>
          <button 
            onClick={onTryAgain}
            className="inline-block w-full max-w-xs py-4 px-12 text-primary font-bold text-xl rounded-full border-4 border-soft-pink bg-white hover:bg-soft-pink transition-all shadow-lg active:scale-95"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectionView;
