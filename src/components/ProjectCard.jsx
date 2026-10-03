import React from 'react';
import { ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenCaseStudy, index }) {
  return (
    <article 
      className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/60 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover-lift shadow-xs h-full"
    >
      {/* 1. Flush Image at the top — takes whole width edge-to-edge with no inner card nesting */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover quick-action buttons overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-4">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md transition-transform duration-200 hover:scale-105"
            title="Open Live Application"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-xs flex items-center gap-1.5 shadow-md border border-zinc-700 transition-transform duration-200 hover:scale-105"
            title="View GitHub Repository"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="px-3.5 py-2 rounded-lg bg-white/95 hover:bg-white text-zinc-950 font-medium text-xs flex items-center gap-1.5 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer"
            title="Read Full Case Study"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* 2. Content Container */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-white mb-2.5">
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group/link"
              title="Click to view live project"
            >
              <span>{project.title}</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity inline-block text-emerald-500" />
            </a>
          </h3>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: 1. Case Study 2. GitHub 3. Live Demo */}
        <div className="pt-5 border-t border-zinc-200 dark:border-zinc-900 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 bg-zinc-100/70 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white text-xs font-medium transition-colors"
              title="Open GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Live Demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-xs"
              title="Open Live Application"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
