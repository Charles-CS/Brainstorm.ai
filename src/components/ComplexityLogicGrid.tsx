"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Network, ShieldCheck, ArrowUpRight } from "lucide-react";

const scales = [
  {
    id: "focused",
    title: "Focused Scale",
    members: "1-2 members",
    description: "Ideal for rapid prototyping. Focus on core MVP logic, algorithm efficiency, and proving the fundamental concept without structural overhead.",
    icon: Zap,
    color: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    gradient: "from-blue-500 to-purple-500",
    features: ["Rapid Iteration", "Core Algorithm Focus", "Minimal Ops Overhead"],
  },
  {
    id: "integrated",
    title: "Integrated Scale",
    members: "3-5 members",
    description: "Built for structured growth. Focus on robust API architecture, seamless data flow, and establishing a scalable foundation for future expansion.",
    icon: Network,
    color: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    gradient: "from-emerald-500 to-cyan-500",
    features: ["API-First Design", "Database Optimization", "Team Collaboration"],
  },
  {
    id: "enterprise",
    title: "Enterprise Scale",
    members: "6-10+ members",
    description: "Engineered for maximum impact. Focus on distributed microservices, automated CI/CD pipelines, and rigorous security protocols.",
    icon: ShieldCheck,
    color: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    gradient: "from-orange-500 to-red-500",
    features: ["Distributed Systems", "Advanced CI/CD", "Zero-Trust Security"],
  },
];

export function ComplexityLogicGrid({ theme }: { theme: "light" | "dark" }) {
  const [activeId, setActiveId] = useState(scales[1].id);
  const isDark = theme === "dark";

  const activeScale = scales.find((s) => s.id === activeId) || scales[1];

  return (
    <section className="py-32 bg-transparent overflow-hidden relative border-t border-white/5 transition-colors duration-500">
      {/* Background glow effects */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-all duration-500 ${isDark ? 'bg-indigo-500/5 opacity-100' : 'bg-transparent opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b ${isDark ? 'from-white to-white/60' : 'from-zinc-900 to-zinc-900/60'}`}
          >
            Scale Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}
          >
            Adapt your architecture and focus areas seamlessly as your team grows.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Left Side: Selectors */}
          <div className="w-full lg:w-1/3 space-y-4">
            {scales.map((scale) => {
              const isActive = activeId === scale.id;
              return (
                <button
                  key={scale.id}
                  onClick={() => setActiveId(scale.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${isActive
                      ? isDark ? "border-white/20 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]" : "border-zinc-300 bg-white shadow-xl shadow-zinc-200/50"
                      : isDark ? "border-white/5 bg-white/[0.02] hover:bg-white/5" : "border-zinc-100 bg-white/40 hover:bg-white/60"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeScaleHighlight"
                      className={`absolute left-0 top-0 bottom-0 w-1 ${isDark ? 'bg-gradient-to-b from-white to-white/50' : 'bg-gradient-to-b from-zinc-900 to-zinc-400'}`}
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`text-lg font-bold mb-1 transition-colors ${isActive ? isDark ? "text-white" : "text-zinc-900" : isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                        {scale.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'} font-mono`}>{scale.members}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? scale.bgAccent : "bg-transparent"}`}>
                      <scale.icon className={`w-5 h-5 ${isActive ? scale.color : isDark ? "text-zinc-600" : "text-zinc-300"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Display Panel */}
          <div className="w-full lg:w-2/3">
            <div className={`relative rounded-[2rem] border ${isDark ? 'border-white/10 bg-black/40' : 'border-zinc-200 bg-white/70'} backdrop-blur-xl p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-center`}>

              {/* Dynamic Abstract Background inside panel */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeId + "-bg"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isDark ? 0.15 : 0.08, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[80px] bg-gradient-to-br ${activeScale.gradient} pointer-events-none`}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'border-white/10' : 'border-zinc-200'} text-sm font-bold uppercase tracking-widest mb-8 ${activeScale.bgAccent} ${activeScale.color}`}>
                    <activeScale.icon className="w-4 h-4" />
                    {activeScale.members}
                  </div>

                  <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'} leading-tight`}>
                    {activeScale.title}
                  </h3>

                  <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed mb-10 max-w-xl`}>
                    {activeScale.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeScale.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-100'} border`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeScale.gradient}`} />
                        <span className={`text-sm font-semibold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`mt-10 flex items-center gap-2 text-sm font-bold ${isDark ? 'text-white hover:text-zinc-300' : 'text-zinc-900 hover:text-zinc-600'} transition-colors group`}>
                    Explore Architecture
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
