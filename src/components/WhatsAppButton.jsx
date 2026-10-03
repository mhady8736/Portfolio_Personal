import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled message for immediate professional conversation
  const defaultMessage = encodeURIComponent("Hello Mohamed, I saw your portfolio and would like to connect!");
  const whatsappLink = `https://wa.me/201145367954?text=${defaultMessage}`;

  return (
    <aside 
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Interactive Tooltip Pill */}
      <div 
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-all duration-300 pointer-events-none ${
          isHovered 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>تواصل معي على واتساب / Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Direct chat on WhatsApp with Mohamed Abdel Hady"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 cursor-pointer"
        title="Chat on WhatsApp: 01145367954"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity" />
        
        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  );
}
