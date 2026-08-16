import React from 'react';

interface NavbarProps {
  onDownloadClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center bg-[#060911]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
            +
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Pharma<span className="text-sky-400">Care</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm">
          <a 
            href="#features" 
            className="text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="/PharmaCare Setup 0.2.0.exe" 
            download
            onClick={onDownloadClick}
            className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
