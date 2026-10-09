import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/95 text-slate-100 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
      <span className="text-sm font-medium text-slate-200">{message}</span>
      <button 
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-slate-100 rounded transition-colors ml-2"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
