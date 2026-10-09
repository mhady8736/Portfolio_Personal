import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-slate-100/90 dark:bg-[#09090b] text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-slate-200 dark:border-slate-900 gap-8">
          <div>
            <div className="text-lg font-bold text-slate-950 dark:text-white tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              {personalInfo.role} • Crafting Responsive Web UIs
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors ml-4 cursor-pointer shadow-xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div>
            © {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Cairo: {time || '12:00:00'}</span>
            <span>•</span>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
