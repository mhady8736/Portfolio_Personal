import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#0c0c10] text-slate-900 dark:text-slate-100 shadow-2xl p-6 sm:p-8 md:p-10 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 uppercase">
              Case Study
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-100/60 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Header */}
        <div className="pt-6 pb-8">
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            {caseStudy.tagline}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Visual Preview Screenshot */}
        <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden mb-8 shadow-xs">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-80 object-cover object-top"
          />
        </div>

        {/* Tab Navigation for Case Study Sections */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 text-xs font-mono transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-slate-900 text-slate-950 dark:border-white dark:text-white font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
            }`}
          >
            01. Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`pb-3 px-4 text-xs font-mono transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'approach'
                ? 'border-slate-900 text-slate-950 dark:border-white dark:text-white font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
            }`}
          >
            02. Approach & Architecture
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 px-4 text-xs font-mono transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'features'
                ? 'border-slate-900 text-slate-950 dark:border-white dark:text-white font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
            }`}
          >
            03. Key Features & Highlights
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Project Context
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  The Problem & Challenge
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {caseStudy.problem}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'approach' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Engineering Approach
                </h4>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {caseStudy.approach}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Architectural Highlights
                </h4>
                {caseStudy.architecturalHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/30">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-mono">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Delivered Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/30 flex items-start gap-3">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">0{idx + 1}.</span>
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions: Live Demo & GitHub */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Repository: {project.githubUrl.replace('https://github.com/', '')} // branch: main
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 text-xs font-medium transition-colors shadow-xs"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
