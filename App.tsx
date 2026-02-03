
import React, { useState, useRef, useEffect } from 'react';
import { ViewState } from './types';
import IntroView from './components/IntroView';
import QuestionView from './components/QuestionView';
import RejectionView from './components/RejectionView';
import WishView from './components/WishView';
import GiftsView from './components/GiftsView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.INTRO);
  const [isMuted, setIsMuted] = useState(true);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Gentle background music
    bgMusicRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-playful-cat-63.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.2;

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!bgMusicRef.current) return;
    
    if (bgMusicRef.current.paused) {
      bgMusicRef.current.play().catch(e => console.log("Audio play blocked", e));
      setIsMuted(false);
    } else {
      bgMusicRef.current.pause();
      setIsMuted(true);
    }
  };

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
    
    // UI Interaction sound
    const sfx = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3');
    sfx.volume = 0.1;
    sfx.play().catch(() => {});
  };

  const handleStartJourney = () => {
    if (bgMusicRef.current) {
      bgMusicRef.current.play().catch(() => {});
      setIsMuted(false);
    }
    navigateTo(ViewState.QUESTION);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.INTRO:
        return <IntroView onStart={handleStartJourney} />;
      case ViewState.QUESTION:
        return (
          <QuestionView 
            onYes={() => navigateTo(ViewState.WISH)} 
            onNo={() => navigateTo(ViewState.REJECTION)} 
          />
        );
      case ViewState.REJECTION:
        return <RejectionView onTryAgain={() => navigateTo(ViewState.QUESTION)} />;
      case ViewState.WISH:
        return <WishView onNext={() => navigateTo(ViewState.GIFTS)} />;
      case ViewState.GIFTS:
        return <GiftsView onRestart={() => navigateTo(ViewState.INTRO)} />;
      default:
        return <IntroView onStart={handleStartJourney} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 ${currentView === ViewState.WISH || currentView === ViewState.GIFTS ? 'checkered-bg' : 'picnic-pattern'}`}>
      
      {/* Floating Audio Toggle */}
      <button 
        onClick={toggleMusic}
        className={`fixed top-6 right-6 z-[100] size-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 ${isMuted ? 'bg-white border-primary/20 text-gray-400' : 'bg-primary border-white text-white animate-pulse'}`}
        aria-label={isMuted ? "Unmute Music" : "Mute Music"}
      >
        <span className="material-symbols-outlined text-3xl">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>

      <main className="flex-1 flex flex-col">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
