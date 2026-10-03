import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { Layers, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React.js' },
    { id: 'html-css', label: 'HTML5 & CSS3' },
    { id: 'ui-ux', label: 'UI/UX & Responsive' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'react') return p.technologies.some(t => t.toLowerCase().includes('react'));
    if (selectedCategory === 'html-css') return p.technologies.some(t => t.toLowerCase().includes('html5') || t.toLowerCase().includes('css3'));
    if (selectedCategory === 'ui-ux') return p.technologies.some(t => t.toLowerCase().includes('ui/ux') || t.toLowerCase().includes('responsive'));
    return true;
  });

  return (
    <section id="projects" className="py-24 border-b border-zinc-200/80 dark:border-zinc-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-900">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
              Featured Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Selected Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 backdrop-blur-md overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Projects Grid (2x2 Balanced Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <CaseStudyModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
