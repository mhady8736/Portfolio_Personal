import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, Terminal, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Contact({ showToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormStatus('submitting');

    const endpoint = personalInfo.formspreeEndpoint || localStorage.getItem('formspree_endpoint');

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (res.ok) {
          setFormStatus('success');
          showToast('Message delivered directly to your inbox!');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setFormStatus('idle'), 5000);
          return;
        } else {
          throw new Error('Endpoint returned error status');
        }
      } catch (err) {
        console.warn('Formspree endpoint error, falling back to direct mail:', err);
      }
    }

    // Direct mailto fallback so the email is dispatched immediately:
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormStatus('success');
    showToast('Opening your email app to send message directly...');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-200/80 dark:border-zinc-900/90 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-900">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            Let's build something thoughtful, fast, and user-focused. Reach out directly via WhatsApp or email at <span className="text-zinc-900 dark:text-zinc-200 font-medium">{personalInfo.email}</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Connection & Socials */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              
              {/* Direct Email Card with One-Click Copy */}
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
                  Direct Email
                </span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-500 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Communication & Social Channels List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/10 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/20 hover:border-emerald-500/50 transition-all flex items-center justify-between group hover-lift shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">WhatsApp</div>
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Quick Chat</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/40 hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-between group hover-lift shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white">GitHub</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Repositories</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/40 hover:bg-white dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-between group hover-lift shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white">LinkedIn</div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Network</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50/80 dark:bg-zinc-950/30 flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <Terminal className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
              <span>Response time: Usually within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <form 
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/60 space-y-6 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-900">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Direct Inquiry Form
                </span>
                <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Ready to send
                </span>
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                  Project Details or Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Describe your project, timeline, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3.5 px-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg disabled:opacity-50 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <span>Sending message...</span>
                ) : formStatus === 'success' ? (
                  <span>Message Sent Successfully ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
