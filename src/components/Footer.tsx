import React from 'react';
import Image from 'next/image';
import { TbBrandGithub } from 'react-icons/tb';

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
          <span>•</span>
          <a
            href="https://github.com/Sahil-Coder1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
          >
            <TbBrandGithub className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
