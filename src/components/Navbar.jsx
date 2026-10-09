import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'timeline', 'projects', 'skills', 'about', 'home'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/10 py-3.5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-lg p-1"
        >
          <div className="h-8 w-14 rounded-md border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-900 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-slate-400 shadow-xs shrink-0">
            <img 
              src="/logo.jpg" 
              alt="Mohamed Abdel Hady Logo" 
              className="w-full h-full object-cover object-center" 
              onError={(e) => { 
                e.currentTarget.style.display = 'none'; 
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-950 dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase">
              {personalInfo.role}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 border border-slate-200/90 dark:border-slate-800/80 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons: Theme Toggle & Let's Connect */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800/80 bg-slate-100/80 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white/95 dark:bg-[#09090b]/98 border-b border-slate-200 dark:border-slate-800/90 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800/80 text-slate-950 dark:text-white font-medium border-l-2 border-slate-900 dark:border-slate-200'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Available for projects</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
