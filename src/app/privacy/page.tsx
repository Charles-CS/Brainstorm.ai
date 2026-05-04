"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowLeft, Sun, Moon, Lock, Eye, Server, FileText, Scale, Database, Gavel } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const sections = [
    {
      title: "Data Protection",
      description: "We implement military-grade encryption for all data at rest and in transit using industry-standard protocols.",
      icon: Lock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Information Collection",
      description: "We only collect minimal data required to provide our AI-powered features, such as account details and research preferences.",
      icon: Eye,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Model Safety",
      description: "Your private research and project titles are never used to train our public models or shared with third parties.",
      icon: Server,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Legal Compliance",
      description: "BrainstormAI adheres to global privacy standards including GDPR and CCPA to ensure your rights are respected.",
      icon: Scale,
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
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase mb-8 transition-colors ${isDark ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
                <Shield className="w-4 h-4" />
                <span>Security & Trust</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500">Policy</span>
              </h1>
              <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed max-w-2xl mx-auto`}>
                Your data is your intellectual property. At BrainstormAI, we prioritize the confidentiality and safety of your research above all else.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.08]' : 'bg-white border-zinc-200 hover:border-indigo-500/30 shadow-sm'}`}
              >
                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${section.color} text-white shadow-lg shadow-indigo-500/20`}>
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
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. Data Collection</h2>
              <p className="mb-6 leading-relaxed">
                When you use BrainstormAI, we collect information that you provide directly to us. This includes your account registration details (name, email) and any research parameters or category selections you input into our generation engine.
              </p>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-zinc-50'} border ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                <h4 className={`font-bold mb-3 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>What we never do:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sell your personal data to third-party advertisers.</li>
                  <li>Access your private project files without explicit permission.</li>
                  <li>Use your unique project blueprints to train public AI models.</li>
                </ul>
              </div>
            </section>

            <section className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-black/40 border-white/5' : 'bg-white border-zinc-100 shadow-sm'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. AI Processing Safety</h2>
              <p className="mb-6 leading-relaxed">
                Our AI systems process your research inputs in a multi-tenant but isolated environment. We use enterprise-grade LLM endpoints that guarantee data privacy—meaning your inputs are used only to generate your specific results and are deleted from transient memory once the request is complete.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`flex-1 p-6 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-zinc-50'} border ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                  <Database className="w-8 h-8 text-indigo-500 mb-4" />
                  <h4 className="font-bold mb-2">Isolated Storage</h4>
                  <p className="text-sm">Your data lives in encrypted silos, never mixing with other users.</p>
                </div>
                <div className={`flex-1 p-6 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-zinc-50'} border ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                  <Gavel className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="font-bold mb-2">You Own the Output</h4>
                  <p className="text-sm">You retain 100% intellectual property rights over all generated blueprints.</p>
                </div>
              </div>
            </section>

            <div className="text-center py-10">
              <p className="text-sm mb-4">Last Updated: May 4, 2026</p>
              <button className={`px-8 py-3 rounded-xl border transition-all ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-zinc-200 hover:bg-zinc-50 text-zinc-900'}`}>
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
