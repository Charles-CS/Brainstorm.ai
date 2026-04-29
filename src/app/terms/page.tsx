"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowLeft, Scale, FileCheck, AlertCircle, HelpCircle } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDark ? "bg-[#0A0A0A] text-white" : "bg-[#f8fafc] text-zinc-900"}`}>
      <ParticleBackground theme={theme} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b px-6 py-4 transition-colors duration-500 ${isDark ? "bg-[#0A0A0A]/80 border-white/5" : "bg-[#f8fafc]/80 border-black/5"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3L4 10l12 7 12-7-12-7z" fill="#818cf8" />
                <path d="M4 22l12 7 12-7V10l-12 7-12-7v12z" fill="#4f46e5" fillOpacity="0.5" />
                <path d="M16 29l-12-7V10l12 7 12-7v12l-12 7z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="16" cy="17" r="4" fill="#c084fc" />
                <circle cx="16" cy="17" r="2" fill="#fff" />
              </svg>
              <span className={`font-semibold tracking-wide transition-colors duration-500 ${isDark ? "text-white" : "text-zinc-900"}`}>BrainstormAI</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2.5 rounded-full transition-all ${isDark ? "text-zinc-400 hover:text-indigo-400 hover:bg-indigo-500/10" : "text-zinc-500 hover:text-indigo-600 hover:bg-indigo-500/10"}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/" className={`hidden md:flex items-center gap-2 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-lg transition-all ${isDark ? "text-zinc-400 hover:text-indigo-50 hover:bg-indigo-500/10" : "text-zinc-600 hover:text-indigo-600 hover:bg-indigo-500/10"}`}>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase mb-8 transition-colors ${isDark ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
              <Scale className="w-4 h-4" />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              By using BrainstormAI, you agree to these terms. Please read them carefully to understand your rights and responsibilities.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Acceptance of Terms</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed`}>
                    BrainstormAI provides an AI-powered thesis and project generation platform. By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Use License & Restrictions</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed mb-4`}>
                    Permission is granted to use BrainstormAI for personal and academic research purposes. You may not:
                  </p>
                  <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <li>Use the generated content to violate academic integrity policies of your institution.</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the platform.</li>
                    <li>Use the service for any illegal or unauthorized purpose.</li>
                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Disclaimer & Liability</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed`}>
                    The materials on BrainstormAI are provided "as is". We make no warranties, expressed or implied, regarding the accuracy or reliability of the AI-generated content. BrainstormAI shall not be held liable for any damages arising out of the use or inability to use the materials on our website.
                  </p>
                </div>
              </div>
            </section>

            <div className={`text-center pt-12 border-t ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Last Updated: April 29, 2026. For legal inquiries, please contact <a href="mailto:legal@brainstorm.ai" className="text-indigo-500 hover:underline">legal@brainstorm.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
