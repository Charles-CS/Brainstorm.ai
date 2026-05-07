"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, ArrowLeft, Sun, Moon, Activity, Zap, Sparkles, Code2, Wifi } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

export default function IoTSystemsDomain() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const topics = [
    {
      title: "Sensor Networks",
      description: "Data acquisition, signal processing, and mesh topology optimization.",
      icon: Activity,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Embedded Systems",
      description: "Microcontroller logic, real-time OS, and firmware architecture.",
      icon: Cpu,
      color: "from-teal-500 to-emerald-600"
    },
    {
      title: "Cloud Connectivity",
      description: "MQTT protocols, edge computing, and real-time data streaming.",
      icon: Wifi,
      color: "from-emerald-600 to-teal-700"
    },
    {
      title: "Energy Management",
      description: "Low-power optimization, battery logic, and hardware efficiency.",
      icon: Zap,
      color: "from-teal-400 to-emerald-500"
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
              Back to Explorer
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative mb-24 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase mb-8 transition-colors ${isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
                  <Cpu className="w-4 h-4" />
                  <span>Domain Specialization</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                  IoT <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600">Systems</span>
                </h1>
                <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl leading-relaxed mb-10`}>
                  Bridge the gap between the physical and digital worlds. From smart sensors to large-scale industrial automation, BrainstormAI architects the connectivity and data logic for a smarter planet.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button className="relative group">
                    <div className="absolute inset-0 bg-emerald-600 rounded-2xl opacity-40 group-hover:opacity-70 blur-md transition-all"></div>
                    <div className="relative flex items-center gap-2 bg-emerald-600 px-8 py-4 rounded-2xl font-bold text-white transition-all transform group-hover:-translate-y-1">
                      <Sparkles className="w-5 h-5" />
                      Generate Roadmap
                    </div>
                  </button>
                  <button className={`px-8 py-4 rounded-2xl font-bold border transition-all ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-zinc-200 hover:bg-zinc-50 text-zinc-900'}`}>
                    Hardware Specs
                  </button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className={`aspect-square max-w-[500px] mx-auto rounded-[3rem] border p-8 flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200 shadow-2xl'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
                <Cpu className={`w-48 h-48 ${isDark ? 'text-emerald-400/30' : 'text-emerald-500/20'}`} />
                
                {/* Visual Elements - Radar Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 2, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-40 h-40 border-2 border-emerald-500/20 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 2, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
                  className="absolute w-40 h-40 border-2 border-teal-500/10 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Key Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-3xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.08]' : 'bg-white border-zinc-200 hover:border-emerald-500/30 shadow-sm'}`}
              >
                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${topic.color} text-white shadow-lg shadow-emerald-500/20`}>
                  <topic.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'} leading-relaxed`}>
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <section className={`rounded-[3rem] p-12 md:p-20 relative overflow-hidden ${isDark ? 'bg-zinc-900 border border-white/5' : 'bg-white border border-zinc-100 shadow-2xl'}`}>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
                Connect your <span className="text-emerald-500">Vision</span> to the World.
              </h2>
              <p className={`text-lg mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                From firmware optimization to cloud scaling, BrainstormAI provides a full-stack IoT blueprint for your connected project.
              </p>
              <button className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-zinc-200 transition-colors">
                <Code2 className="w-5 h-5" />
                Deploy Firmware
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
