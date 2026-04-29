"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function CtaSection({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`absolute w-[800px] h-[800px] rounded-full blur-[120px] transition-opacity duration-500 ${isDark ? 'bg-indigo-500/10 opacity-100' : 'bg-transparent opacity-0'}`} />
        <div className={`absolute w-[600px] h-[600px] rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 transition-opacity duration-500 ${isDark ? 'bg-purple-500/10 opacity-100' : 'bg-transparent opacity-0'}`} />
        
        {/* Animated concentric rings */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: isDark ? [0.1, 0.3, 0.1] : 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-[400px] h-[400px] border ${isDark ? 'border-indigo-500/20' : 'border-transparent'} rounded-full`}
        />
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: isDark ? [0.05, 0.2, 0.05] : 0 }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute w-[600px] h-[600px] border ${isDark ? 'border-purple-500/20' : 'border-transparent'} rounded-full`}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase mb-8 ${isDark ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Start Building Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}
        >
          Transform your <br className="hidden md:block" />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-indigo-500 via-purple-500 to-fuchsia-500' : 'from-indigo-600 to-blue-600'}`}>
            ideas into reality.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xl md:text-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto mb-12`}
        >
          Join thousands of researchers and developers using BrainstormAI to accelerate their academic and professional projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button className={`group relative px-8 py-4 ${isDark ? 'bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white shadow-[0_0_40px_rgba(0,0,0,0.1)]'} font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Generate Free Roadmap
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary CTA */}
          <button className={`px-8 py-4 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-zinc-100 border-zinc-200 text-zinc-900 hover:bg-zinc-200'} border font-bold text-lg rounded-full transition-colors`}>
            View Case Studies
          </button>
        </motion.div>

        {/* Subtle decorative bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className={`w-px h-24 bg-gradient-to-b ${isDark ? 'from-white/20' : 'from-zinc-900/20'} to-transparent`} />
        </motion.div>
      </div>
    </section>
  );
}
