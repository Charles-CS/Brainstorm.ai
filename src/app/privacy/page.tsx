"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowLeft, Shield, Lock, Eye, Server } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
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
              <Shield className="w-4 h-4" />
              <span>Privacy First Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              At BrainstormAI, we believe your data is your intellectual property. Learn how we protect your research and ideas.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Data Security</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed`}>
                    We implement military-grade encryption for all data at rest and in transit. Your project roadmaps and research topics are stored in isolated environments, ensuring that your unique insights remain confidential and accessible only to you and your authorized team members.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed mb-4`}>
                    To provide our AI-powered features, we collect minimal data required for operation:
                  </p>
                  <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <li>Basic account information (Email, Name) for authentication.</li>
                    <li>Research preferences and category selections to tailor AI outputs.</li>
                    <li>Usage metadata to improve the performance and accuracy of our generation engine.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className={`p-8 rounded-3xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">AI Processing</h2>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed`}>
                    Your inputs are processed through our proprietary AI models. We do not use your private research data or unique project titles to train public AI models. Any learning performed by the system is localized to your organization's specific instance to ensure competitive advantage and intellectual safety.
                  </p>
                </div>
              </div>
            </section>

            <div className={`text-center pt-12 border-t ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Last Updated: April 29, 2026. For any questions regarding your data, please contact <a href="mailto:privacy@brainstorm.ai" className="text-indigo-500 hover:underline">privacy@brainstorm.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
