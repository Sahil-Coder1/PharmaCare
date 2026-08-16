"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  TbCreditCard,
  TbHourglass,
  TbFileSpreadsheet,
  TbChartLine,
  TbPalette,
  TbCloudLock,
  TbBrandWindows
} from 'react-icons/tb';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  };

  const bentoGrid = [
    {
      title: "Speed POS & Keyboard Shortcuts",
      tag: "POS & Billing",
      tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      description: "Quick medicine search, instant thermal/PDF invoice printing, and keyboard shortcuts for high-rush counters.",
      icon: <TbCreditCard className="w-6 h-6 text-sky-400" />,
      span: "md:col-span-2"
    },
    {
      title: "3-Tier Stock & Expiry Radar",
      tag: "Alerts",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description: "Automated early warning flags for Expiring Soon, Running Out, and Out of Stock medicines.",
      icon: <TbHourglass className="w-6 h-6 text-amber-400" />,
      span: "md:col-span-1"
    },
    {
      title: "CSV Import & Export",
      tag: "Inventory",
      tagColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      description: "Bulk import medicine stock from suppliers and export full inventory in CSV format in seconds.",
      icon: <TbFileSpreadsheet className="w-6 h-6 text-teal-400" />,
      span: "md:col-span-1"
    },
    {
      title: "Daily Sales Graphs & Analytics",
      tag: "Insights",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description: "Daily sales revenue curves, gross margin trackers, and top-selling pharmaceutical insights.",
      icon: <TbChartLine className="w-6 h-6 text-emerald-400" />,
      span: "md:col-span-2"
    },
    {
      title: "Multi-Theme & Pharmacy Branding",
      tag: "Customization",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description: "Sleek Dark Mode, customizable receipt headers, GST numbers, and tailored color schemes.",
      icon: <TbPalette className="w-6 h-6 text-purple-400" />,
      span: "md:col-span-1"
    },
    {
      title: "Offline SQLite + Dropbox Sync",
      tag: "Data Security",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description: "100% private local SQLite database with optional Dropbox cloud backup whenever needed.",
      icon: <TbCloudLock className="w-6 h-6 text-blue-400" />,
      span: "md:col-span-2"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#060911] text-slate-100 selection:bg-sky-500/30 selection:text-white">
      <Navbar />

       <section className="hero-pattern min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        <motion.div 
          className="max-w-3xl mx-auto flex flex-col items-center gap-5 z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-semibold backdrop-blur-md">
            <span>PharmaCare</span>
            <span className="text-slate-500 font-normal">•</span>
            <span className="text-teal-400 font-mono text-[11px]">v0.2.0</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Fast, Private POS for{' '}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Modern Pharmacies
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
            Fast POS checkout, 3-tier batch expiry radar, daily sales graphs, and offline SQLite storage with optional Dropbox backup.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-2">
            <a 
              href="#features" 
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm tracking-tight neumorph-btn transition-all duration-200 hover:-translate-y-0.5"
            >
              <TbBrandWindows className="w-4 h-4" />
              <span>Download for Windows</span>
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-slate-500 backdrop-blur-md transition-all duration-200"
            >
              <span>Explore Features</span>
            </a>
          </div>
        </motion.div>

      </section>

       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Key Features
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Engineered for speed, privacy, and clinical pharmacy workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {bentoGrid.map((item, index) => (
            <div 
              key={index} 
              className={`${item.span} glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl inline-flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
