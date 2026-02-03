
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex justify-center py-5 sticky top-0 z-50">
      <div className="max-w-[1200px] flex-1">
        <header className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full border border-primary/10 px-6 md:px-10 py-3 shadow-sm">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl">pets</span>
            <h2 className="text-primary text-xl font-bold font-display tracking-tight">Welcome Home</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-8">
              <a className="text-gray-700 text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-gray-700 text-sm font-semibold hover:text-primary transition-colors" href="#">Our Story</a>
              <a className="text-gray-700 text-sm font-semibold hover:text-primary transition-colors" href="#">Gallery</a>
              <a className="text-gray-700 text-sm font-semibold hover:text-primary transition-colors" href="#">Wishes</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-inner">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-inner">
                <span className="material-symbols-outlined">celebration</span>
              </button>
            </div>
          </div>
          {/* Mobile Profile Icon */}
          <div className="md:hidden flex items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" 
              style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC34j-ldBsvH2pwseBVwu-rUYAM1kwTJn0KCJUHbaTZefJkgPr9TAvQdOVirmlX-CItxCICDL-wDboo642OmXVhmHi0pzaNRrYLhUHYojUvxaEP5YArzgO3LdDa4sjcCMgzjH7_LIRSzEZJtnjEI6EBhNfzapMKrCh97B2pReVZ_pwV2XKbPntWTPe_SglJoyTdECHR5n0xwfGYNg7g8-QaYs_tONuEdJD7UL1EbtcjXlZE5X0colKNuRauRNyftNtIyvXQ7Z5DIA")`}}
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
