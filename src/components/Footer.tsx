import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.52-1.65 6.52-7.17a5.2 5.2 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.4s-1.1-.35-3.5 1.3a11.5 11.5 0 0 0-6 0C7.1 2.85 6 3.2 6 3.2a4.8 4.8 0 0 0-.1 3.4A5.2 5.2 0 0 0 4.5 10.1c0 5.5 3.3 6.8 6.5 7.15a4.8 4.8 0 0 0-1 2.85V22"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Footer({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <footer className={`bg-transparent py-20 px-6 border-t ${isDark ? 'border-white/5 text-white' : 'border-zinc-200 text-zinc-900'} relative overflow-hidden font-sans transition-colors duration-500`}>
      {/* Background glow for the footer */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] ${isDark ? 'bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10' : 'bg-gradient-to-r from-[#6366f1]/5 to-[#a855f7]/5'} rounded-t-[100%] blur-[80px] pointer-events-none`} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3L4 10l12 7 12-7-12-7z" fill="#6366f1" />
                <path d="M4 22l12 7 12-7V10l-12 7-12-7v12z" fill="#a855f7" fillOpacity="0.8" />
                <path d="M16 29l-12-7V10l12 7 12-7v12l-12 7z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="16" cy="17" r="4" fill="#a855f7" />
                <circle cx="16" cy="17" r="2" fill="#fff" />
              </svg>
              <span className={`text-xl font-bold tracking-wide ${isDark ? 'text-white' : 'text-zinc-900'}`}>BrainstormAI</span>
            </div>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm leading-relaxed max-w-xs font-sans`}>
              Accelerate your academic journey with the ultimate AI-powered tool for researchers and students. Build, scale, and innovate faster.
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] tracking-wider mb-6 uppercase">Resources</h4>
            <ul className={`space-y-4 text-sm font-sans`}>
              <li>
                <Link href="#" className={`flex items-center gap-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors group`}>
                  <BookOpen className="w-4 h-4 group-hover:text-[#a855f7] transition-colors" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex items-center gap-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors group`}>
                  <FileText className="w-4 h-4 group-hover:text-[#6366f1] transition-colors" />
                  Thesis Templates
                </Link>
              </li>
              <li><Link href="#" className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors`}>Pro Tips & Tricks</Link></li>
              <li><Link href="#" className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors`}>Pricing</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] tracking-wider mb-6 uppercase">Connect</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li>
                <Link href="#" className={`flex items-center gap-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors group`}>
                  <GithubIcon className="w-4 h-4 group-hover:text-current transition-colors" />
                  Github
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex items-center gap-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors group`}>
                  <TwitterIcon className="w-4 h-4 group-hover:text-[#1DA1F2] transition-colors" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className={`flex items-center gap-2 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors group`}>
                  <LinkedinIcon className="w-4 h-4 group-hover:text-[#0A66C2] transition-colors" />
                  LinkedIn
                </Link>
              </li>
              <li><Link href="#" className={`${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'} transition-colors`}>Discord Community</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] tracking-wider mb-6 uppercase">Stay Updated</h4>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mb-4 font-sans`}>
              Get the latest insights, thesis templates, and AI research tips delivered to your inbox.
            </p>
            
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-100 border-zinc-200'} rounded-full p-1.5 flex items-center transition-all duration-300 focus-within:ring-2 focus-within:ring-[#a855f7]/50 focus-within:border-[#6366f1]/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] relative group border`}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`w-full bg-transparent border-none outline-none ${isDark ? 'text-white' : 'text-zinc-900'} px-4 text-sm font-sans placeholder:text-zinc-500`}
              />
              <button className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white rounded-full p-2.5 transition-all shadow-lg group-hover:shadow-[#a855f7]/25">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t ${isDark ? 'border-white/5' : 'border-zinc-200'} font-sans`}>
          <p className="text-sm text-zinc-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} BrainstormAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className={`hover:${isDark ? 'text-white' : 'text-zinc-900'} transition-colors`}>Privacy Policy</Link>
            <Link href="/terms" className={`hover:${isDark ? 'text-white' : 'text-zinc-900'} transition-colors`}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
