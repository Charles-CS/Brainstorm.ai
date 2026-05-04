"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Globe, Cpu, Gamepad2, Smartphone } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Machine Learning",
    description: "Train models, build neural networks, and deploy intelligent algorithms for data-driven insights.",
    icon: Brain,
    className: "md:col-span-2 md:row-span-2",
    iconSize: "w-16 h-16",
    glowColor: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20",
    iconHover: "group-hover:text-fuchsia-400",
    textHover: "group-hover:to-fuchsia-200",
    borderGradient: "linear-gradient(to right bottom, #e879f9, #d946ef, #c084fc)",
    href: "/domains/machine-learning",
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-fuchsia-500/10 blur-[100px] rounded-full" />
        <svg viewBox="0 0 100 100" className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] transform translate-x-1/4">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            d="M 10 50 L 40 20 L 70 50 L 90 30 M 10 50 L 40 80 L 70 50 L 90 70 M 40 20 L 40 80 M 70 50 L 90 50"
            fill="none"
            stroke="#e879f9"
            strokeWidth="0.5"
          />
          {[ 
            [10,50], [40,20], [40,80], [70,50], [90,30], [90,70], [90,50] 
          ].map((pos, i) => (
            <motion.circle 
              key={i} cx={pos[0]} cy={pos[1]} r="1.5" fill="#d946ef"
              animate={{ r: [1.5, 3, 1.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>
      </div>
    )
  },
  {
    title: "Web Development",
    description: "Scalable full-stack applications.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1",
    iconSize: "w-8 h-8",
    glowColor: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconHover: "group-hover:text-blue-400",
    textHover: "group-hover:to-blue-200",
    borderGradient: "linear-gradient(to right bottom, #93c5fd, #3b82f6, #06b6d4)",
    href: "/domains/web-development",
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 top-10 w-36 h-28 border border-blue-400/30 rounded-lg bg-black/40 backdrop-blur-md flex flex-col shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <div className="h-4 border-b border-blue-400/20 flex items-center px-2 gap-1 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          <div className="p-3 space-y-2">
            <div className="w-3/4 h-1.5 bg-blue-400/20 rounded" />
            <div className="w-1/2 h-1.5 bg-blue-400/20 rounded" />
            <div className="w-5/6 h-1.5 bg-blue-400/10 rounded mt-4" />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 5, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-24 bottom-6 text-5xl font-mono text-blue-400/20 font-black tracking-tighter"
        >
          &lt;/&gt;
        </motion.div>
      </div>
    )
  },
  {
    title: "IoT Systems",
    description: "Connected devices & sensors.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1",
    iconSize: "w-8 h-8",
    glowColor: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconHover: "group-hover:text-emerald-400",
    textHover: "group-hover:to-emerald-200",
    borderGradient: "linear-gradient(to right bottom, #6ee7b7, #10b981, #0d9488)",
    href: "/domains/iot-systems",
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-end pr-8">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute w-full h-full">
            <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 4" 
              animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50% 50%" }}
            />
            <motion.circle cx="50" cy="50" r="25" fill="none" stroke="#34d399" strokeWidth="0.5" strokeDasharray="2 4"
              animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50% 50%" }}
            />
          </svg>
          <div className="w-4 h-4 rounded-full bg-white/80 shadow-[0_0_15px_#10b981] animate-pulse z-10" />
          {/* Peripheral nodes */}
          <div className="absolute top-0 right-2 w-2 h-2 rounded-full bg-emerald-400/60" />
          <div className="absolute bottom-2 left-0 w-2 h-2 rounded-full bg-teal-400/60" />
        </div>
      </div>
    )
  },
  {
    title: "Game Dev",
    description: "Interactive worlds & logic.",
    icon: Gamepad2,
    className: "md:col-span-1 md:row-span-1",
    iconSize: "w-8 h-8",
    glowColor: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconHover: "group-hover:text-orange-400",
    textHover: "group-hover:to-orange-200",
    borderGradient: "linear-gradient(to right bottom, #fdba74, #f97316, #ea580c)",
    href: "/domains/game-dev",
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-500 flex items-center justify-end pr-8">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
            <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="rgba(249,115,22,0.05)" stroke="#fb923c" strokeWidth="1" />
            <polygon points="50,55 85,35 15,35" fill="rgba(249,115,22,0.1)" stroke="#fb923c" strokeWidth="1" />
            <polygon points="50,55 50,95 15,75" fill="rgba(234,88,12,0.1)" stroke="#fb923c" strokeWidth="1" />
            <polygon points="50,55 85,75 50,95" fill="rgba(249,115,22,0.15)" stroke="#fb923c" strokeWidth="1" />
          </svg>
          {/* Floating pixels */}
          {[...Array(3)].map((_, i) => (
            <motion.div key={i} className="absolute w-1.5 h-1.5 bg-orange-400" 
              style={{ right: -10 + i * 15, top: i * 20 }}
              animate={{ y: [-10, 10, -10], opacity: [0, 0.8, 0] }}
              transition={{ duration: 2 + i, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    )
  },
  {
    title: "Mobile Apps",
    description: "Native & cross-platform.",
    icon: Smartphone,
    className: "md:col-span-1 md:row-span-1",
    iconSize: "w-8 h-8",
    glowColor: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconHover: "group-hover:text-violet-400",
    textHover: "group-hover:to-violet-200",
    borderGradient: "linear-gradient(to right bottom, #c4b5fd, #8b5cf6, #7c3aed)",
    href: "/domains/mobile-apps",
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-500 flex items-center justify-end pr-8">
        <motion.div 
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-16 h-32 border border-violet-400/40 rounded-[1.25rem] bg-gradient-to-b from-violet-400/10 to-transparent flex flex-col items-center justify-start pt-2 transform -rotate-12 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        >
          {/* Notch */}
          <div className="w-5 h-1 bg-white/20 rounded-full mb-3" />
          {/* Screen content (App cards floating up) */}
          <div className="w-full h-full px-2 overflow-hidden flex flex-col gap-2 relative [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <motion.div animate={{ y: [30, -30] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-full h-8 bg-white/10 rounded" />
            <motion.div animate={{ y: [30, -30] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }} className="w-full h-6 bg-violet-400/30 rounded" />
            <motion.div animate={{ y: [30, -30] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }} className="w-full h-10 bg-white/5 rounded" />
          </div>
        </motion.div>
      </div>
    )
  },
];

export function CategoryBentoGrid({ theme }: { theme: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <section className="py-32 bg-transparent relative border-t border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b ${isDark ? 'from-white to-white/60' : 'from-zinc-900 to-zinc-900/60'}`}
          >
            Explore Domains
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}
          >
            Choose your specialization and let BrainstormAI generate the perfect roadmap.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[240px]">
          {categories.map((category, index) => {
            const isClickable = category.href && category.href !== "#";
            const Content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl backdrop-blur-md p-8 flex flex-col overflow-hidden h-full ${category.className} ${isDark ? 'bg-white/5' : 'bg-white/40 shadow-xl shadow-zinc-200/50 border border-zinc-100'} ${isClickable ? 'cursor-pointer' : ''}`}
              >
                {/* Abstract Visuals Layer */}
                <category.Visual />

                {/* Default Subtle Border */}
                <div className={`absolute inset-0 border ${isDark ? 'border-white/10' : 'border-zinc-200'} rounded-3xl transition-colors duration-500 z-10 pointer-events-none`} />
                
                {/* Dynamic Gradient Glow Border (Hover state) */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" 
                  style={{ 
                    padding: '2px', 
                    background: category.borderGradient, 
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                    WebkitMaskComposite: 'xor', 
                    maskComposite: 'exclude' 
                  }} 
                />
                
                <div className="relative z-30 flex-1 flex flex-col justify-between">
                  <div className={`rounded-2xl flex items-center justify-center border transition-colors duration-300 shadow-inner ${isDark ? 'bg-white/10 border-white/10 text-zinc-300' : 'bg-white/80 border-zinc-200 text-zinc-500'} ${category.iconHover} ${index === 0 ? 'w-20 h-20 mb-8' : 'w-14 h-14 mb-6'}`}>
                    <category.icon className={category.iconSize} />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`${index === 0 ? 'text-3xl md:text-4xl mb-4' : 'text-xl mb-2'} font-bold transition-all ${isDark ? 'text-white group-hover:from-white' : 'text-zinc-900 group-hover:from-zinc-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${category.textHover}`}>
                      {category.title}
                    </h3>
                    <p className={`${isDark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-zinc-600 group-hover:text-zinc-700'} leading-relaxed transition-colors ${index === 0 ? 'text-lg max-w-md' : 'text-sm'}`}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            return isClickable ? (
              <Link key={index} href={category.href!} className={category.className}>
                {Content}
              </Link>
            ) : (
              <div key={index} className={category.className}>
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
