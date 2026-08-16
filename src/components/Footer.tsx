import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] py-8 mt-12 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="PharmaCare Logo"
            width={20}
            height={20}
            className="w-5 h-5 rounded object-contain opacity-90"
          />
          <span className="font-semibold text-slate-300">PharmaCare</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-slate-400 transition-colors">Features</a>
          <span>•</span>
          <span>100% Offline SQLite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
