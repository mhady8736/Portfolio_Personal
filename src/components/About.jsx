import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { Layers, Terminal, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-zinc-200/80 dark:border-zinc-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-900">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
              Profile & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              About & Philosophy
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Frontend Web Engineering
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                {aboutData.headline}
              </h3>

              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick competencies checklist */}
            <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-900/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Responsive Web Design (UI/UX)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>REST APIs & Dynamic Data Fetching</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Web Accessibility & Cross-Browser Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Git & GitHub Team Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Column: Metadata Specification Blocks */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {aboutData.metadataBlocks.map((block, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover-lift shadow-xs"
              >
                <div className="mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {block.label}
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 tracking-tight">
                  {block.value}
                </div>
              </div>
            ))}

            {/* Location & Collaboration card */}
            <div className="p-5 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Location & Availability
                </div>
                <div className="text-sm font-medium text-zinc-800 dark:text-zinc-300 mt-0.5">
                  {personalInfo.location}
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
