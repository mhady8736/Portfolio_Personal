import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Upload, Sparkles, Terminal, Code2, Globe, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState('/portrait.jpg');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check if user previously dropped/saved their portrait locally
    const savedPhoto = localStorage.getItem('user_portfolio_portrait');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
      setImageLoaded(true);
      setImageError(false);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setPhotoSrc(result);
          setImageLoaded(true);
          setImageError(false);
          try {
            localStorage.setItem('user_portfolio_portrait', result);
          } catch (err) {
            console.warn('Image too large for localStorage, kept in memory');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setPhotoSrc(result);
          setImageLoaded(true);
          setImageError(false);
          try {
            localStorage.setItem('user_portfolio_portrait', result);
          } catch (err) {
            console.warn('Image too large for localStorage, kept in memory');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-slate-200/80 dark:border-slate-900/90 transition-colors duration-300"
    >
      {/* Ambient background subtle radial light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-slate-300/30 dark:bg-slate-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Subtle Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md mb-8 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 tracking-wide">
              {personalInfo.availability}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-6">
            Frontend Developer <span className="text-slate-500 dark:text-slate-400 font-normal">crafting fast, </span>responsive, and modern web experiences.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-normal">
            {personalInfo.heroSubtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span>{personalInfo.primaryCta}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.cvUrl || "/Mohamed_Abdel_Hady_CV.pdf"}
              download="Mohamed_Abdel_Hady_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-slate-100/70 dark:bg-slate-900/50 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white font-medium text-sm transition-all duration-200 shadow-xs hover:shadow hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              title="Download Mohamed Abdel Hady CV (PDF)"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Profiles in Home */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-medium transition-all shadow-xs hover:shadow hover:scale-[1.02]"
              title="GitHub Profile: @mhady8736"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-medium transition-all shadow-xs hover:shadow hover:scale-[1.02]"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Micro Stack Indicator */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-900/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="text-slate-700 dark:text-slate-300 font-medium uppercase tracking-wider text-[11px]">Core Tools:</span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">HTML5</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">CSS3</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">JavaScript</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">React</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">REST APIs</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">Git & GitHub</span>
            </div>
          </div>

        </div>

        {/* Right Column: Refined Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Outer Framing Ring */}
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            
            {/* Concentric hairline orbit ring with subtle rotation */}
            <div className="absolute inset-0 rounded-full border border-slate-300/70 dark:border-slate-800/60 border-dashed animate-orbit pointer-events-none" />
            
            {/* Secondary subtle geometric ring */}
            <div className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800/40 pointer-events-none" />

            {/* Main Circular Portrait Container */}
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="relative w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700/80 shadow-2xl bg-slate-100 dark:bg-slate-950 flex items-center justify-center group"
            >
              {/* Photo Image Display */}
              {!imageError ? (
                <img
                  src={photoSrc}
                  alt="Mohamed Abdel Hady — Frontend Developer"
                  onLoad={() => { setImageLoaded(true); setImageError(false); }}
                  onError={() => { setImageError(true); setImageLoaded(false); }}
                  className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : null}

              {/* Monogram Fallback (when awaiting photo or on error) */}
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
                  <div className="w-20 h-20 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 flex items-center justify-center mb-3 shadow-xs">
                    <span className="text-2xl font-bold tracking-wider text-slate-800 dark:text-slate-200">MA</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-300 tracking-tight">Mohamed Abdel Hady</span>
                  
                  {/* Quick Upload Button directly in container */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors border border-slate-300 dark:border-slate-700 shadow-xs cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                  </button>
                </div>
              )}

              {/* Hidden file input for uploading portrait directly */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Upload personal photo"
              />

              {/* Subtle hover overlay to change/update photo */}
              {imageLoaded && !imageError && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-200 cursor-pointer"
                  title="Click to change or replace photo"
                >
                  <Upload className="w-6 h-6 mb-1 text-slate-300" />
                  <span className="text-xs font-medium">Change Portrait</span>
                </button>
              )}

              {/* Inner ambient ring */}
              <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/10 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
