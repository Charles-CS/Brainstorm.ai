"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Database, Cpu, Layout, ArrowRight } from "lucide-react";

const phases = [
  {
    id: "phase-1",
    phase: "01",
    title: "Discovery & Research",
    role: "Analyst Focus",
    description: "Define the problem space, gather preliminary datasets, and establish concrete success metrics before any code is written.",
    icon: Search,
    color: "from-blue-500/20 to-purple-500/20",
    accent: "text-blue-400",
  },
  {
    id: "phase-2",
    phase: "02",
    title: "Data Preprocessing",
    role: "Data Engineering",
    description: "Cleanse, normalize, and pipeline the raw data to ensure high-quality, unbiased training inputs for the models.",
    icon: Database,
    color: "from-purple-500/20 to-indigo-500/20",
    accent: "text-purple-400",
  },
  {
    id: "phase-3",
    phase: "03",
    title: "Model Architecture",
    role: "ML Specialist",
    description: "Design neural networks, tune hyperparameters, and iteratively train the core machine learning models for peak accuracy.",
    icon: Cpu,
    color: "from-indigo-500/20 to-violet-500/20",
    accent: "text-indigo-400",
  },
  {
    id: "phase-4",
    phase: "04",
    title: "UI/UX Integration",
    role: "Frontend Developer",
    description: "Implement interactive, responsive interfaces to intuitively query models and visualize complex predictions for end-users.",
    icon: Layout,
    color: "from-violet-500/20 to-fuchsia-500/20",
    accent: "text-fuchsia-400",
  },
];

export function InteractiveRoadmap({ theme }: { theme: "light" | "dark" }) {
  const [activePhase, setActivePhase] = useState(phases[0].id);
  const isDark = theme === "dark";

  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden transition-colors duration-500">
      <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${isDark ? 'from-indigo-500/5' : 'from-indigo-500/10'} to-transparent pointer-events-none blur-3xl`} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b ${isDark ? 'from-white to-white/60' : 'from-zinc-900 to-zinc-900/60'}`}
          >
            Process & Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}
          >
            A dynamic view into the lifecycle of an intelligent application, from raw data to user interface.
          </motion.p>
        </div>

        {/* Horizontal Expandable Cards (Accordion style on Desktop, stacked on Mobile) */}
        <div className="flex flex-col lg:flex-row h-[600px] lg:h-[450px] gap-4 w-full">
          {phases.map((phase) => {
            const isActive = activePhase === phase.id;
            return (
              <motion.div
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive ? "flex-[4] lg:flex-[3]" : "flex-1 hover:flex-[1.2]"
                } border ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-zinc-200 bg-white/40'} backdrop-blur-sm`}
              >
                {/* Active Background Gradient */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-30`}
                    />
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top Section: Icon & Number */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${isDark ? 'border-white/10 bg-black/50' : 'border-zinc-200 bg-white/80'} ${isActive ? phase.accent : 'text-zinc-500'}`}>
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-4xl md:text-5xl font-black ${isDark ? 'text-white/5' : 'text-zinc-900/5'} pointer-events-none`}>
                      {phase.phase}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="relative z-10 flex flex-col justify-end h-full">
                    <div className={`transform transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 lg:opacity-100 lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-10 lg:left-10 lg:translate-y-0 lg:whitespace-nowrap'}`}>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${phase.accent}`}>
                        {phase.role}
                      </p>
                      <h3 className={`font-bold ${isDark ? 'text-white' : 'text-zinc-900'} mb-4 ${isActive ? 'text-3xl' : 'text-xl'}`}>
                        {phase.title}
                      </h3>
                      
                      {/* Description only shows when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-lg leading-relaxed max-w-md`}>
                              {phase.description}
                            </p>
                            <button className={`mt-6 flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-white/80 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'} transition-colors`}>
                              View Modules <ArrowRight className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
