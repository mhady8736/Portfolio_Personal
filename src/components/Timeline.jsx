import React from 'react';
import { timelineData } from '../data/portfolioData';
import { GraduationCap, Code2, BookOpen, Terminal, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-b border-zinc-200/80 dark:border-zinc-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-900">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
              Career Journey & Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Experience, Internships & Education
            </h2>
          </div>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-950 dark:group-hover:bg-white group-hover:scale-125 transition-all duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover-lift shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium text-zinc-700 dark:text-zinc-400">
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight mb-1 group-hover:text-black dark:group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>
                
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  {item.institution}
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
