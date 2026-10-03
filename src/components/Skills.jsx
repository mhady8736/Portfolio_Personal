import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, GitBranch, Layout, Server, Sparkles, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 border-b border-zinc-200/80 dark:border-zinc-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-900">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
              Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Skills & Engineering Stack
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 backdrop-blur-md overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              All
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium text-zinc-700 dark:text-zinc-400 uppercase">
                  {category.badge}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline-block">
                  — {category.description}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover-lift shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center text-xs text-zinc-800 dark:text-zinc-300 font-bold group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
                          {skill.name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                        {skill.subtitle}
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Active Competence
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-zinc-700 dark:text-zinc-300" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Technical Architecture Statement */}
        <div className="mt-16 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-zinc-600 dark:text-zinc-400 shrink-0" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Proficiency evaluated through real project delivery, clean Git commits, and accessible DOM structures — never arbitrary percentages.
            </p>
          </div>
          <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 whitespace-nowrap px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            W3C & WCAG Standards
          </div>
        </div>

      </div>
    </section>
  );
}
