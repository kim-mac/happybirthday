
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-8 px-5 py-16 text-center bg-white/40 backdrop-blur-sm border-t border-primary/5">
      <div className="flex flex-wrap items-center justify-center gap-10">
        <a className="text-[#89616b] hover:text-primary font-medium transition-colors" href="#">Privacy Policy</a>
        <a className="text-[#89616b] hover:text-primary font-medium transition-colors" href="#">Contact Me</a>
        <a className="text-[#89616b] hover:text-primary font-medium transition-colors" href="#">Credits</a>
      </div>
      <div className="flex justify-center gap-6">
        <a className="text-[#89616b] hover:text-primary hover:scale-110 transition-all" href="#">
          <span className="material-symbols-outlined text-3xl">favorite</span>
        </a>
        <a className="text-[#89616b] hover:text-primary hover:scale-110 transition-all" href="#">
          <span className="material-symbols-outlined text-3xl">pets</span>
        </a>
        <a className="text-[#89616b] hover:text-primary hover:scale-110 transition-all" href="#">
          <span className="material-symbols-outlined text-3xl">cake</span>
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-primary font-handwritten text-2xl">Made with all my love</p>
        <p className="text-[#89616b] text-sm uppercase tracking-widest">For your very special day • 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
