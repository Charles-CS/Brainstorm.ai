"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Sun, Moon, Scale, ShieldCheck, UserCheck, Zap, Sparkles, Code2, Gavel } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const sections = [
    {
      title: "Acceptance of Terms",
      description: "By accessing BrainstormAI, you agree to be bound by these high-standard professional terms of service.",
      icon: UserCheck,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "User Responsibilities",
      description: "Users are responsible for the research inputs and the ethical use of AI-generated project blueprints.",
      icon: Scale,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intellectual Property",
      description: "You retain full ownership of the generated blueprints. We only provide the engine to build them.",
      icon: ShieldCheck,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Service Limitations",
      description: "While our AI is advanced, users should verify critical technical data for safety-critical applications.",
      icon: Zap,
      color: "from-blue-600 to-cyan-500"
    }
  ];

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

      <main className="flex-grow pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase mb-8 transition-colors ${isDark ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
                <Gavel className="w-4 h-4" />
                <span>Legal Framework</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Service</span>
              </h1>
              <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed max-w-2xl mx-auto`}>
                Please read these terms carefully before using BrainstormAI. Our goal is to provide a safe, high-performance environment for your innovation.
              </p>
            </motion.div>
          </div>

          {/* Core Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-white/[0.08]' : 'bg-white border-zinc-200 hover:border-blue-500/30 shadow-sm'}`}
              >
                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${section.color} text-white shadow-lg shadow-blue-500/20`}>
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed`}>
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Content */}
          <div className={`prose prose-invert max-w-none ${isDark ? 'text-zinc-400' : 'text-zinc-600'} space-y-12`}>
            <section className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-black/40 border-white/5' : 'bg-white border-zinc-100 shadow-sm'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. Usage License</h2>
              <p className="mb-6 leading-relaxed">
                Permission is granted to temporarily use BrainstormAI for personal, academic, or professional research purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-zinc-50'} border ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use the AI to generate malicious or illegal content.</li>
                  <li>Attempt to decompile or reverse engineer any software contained on BrainstormAI.</li>
                  <li>Remove any copyright or other proprietary notations from the generated materials.</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server without permission.</li>
                </ul>
              </div>
            </section>

            <section className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-black/40 border-white/5' : 'bg-white border-zinc-100 shadow-sm'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. Intellectual Property Rights</h2>
              <p className="mb-6 leading-relaxed">
                BrainstormAI does not claim ownership of the research topics or the specific blueprints you generate. You retain all intellectual property rights to your inputs and outputs. However, by using the service, you grant us a limited license to process this data solely for the purpose of providing the service to you.
              </p>
              <div className={`p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                <h4 className={`font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  Your IP is Safe
                </h4>
                <p className="text-sm">We provide the tools, you provide the genius. All generated blueprints are yours to own, scale, and build upon.</p>
              </div>
            </section>

            <div className="text-center py-10">
              <p className="text-sm mb-4">Last Updated: May 4, 2026</p>
              <div className="flex justify-center gap-4">
                <button className={`px-8 py-3 rounded-xl border transition-all ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-zinc-200 hover:bg-zinc-50 text-zinc-900'}`}>
                  Download PDF
                </button>
                <Link href="/privacy" className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all">
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
