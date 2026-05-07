"use client";
// BrainstormAI - Advanced Project Blueprint Engine

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { Category } from "@/data/projects";
import { generateProject } from "@/lib/generator";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { ComplexityLogicGrid } from "@/components/ComplexityLogicGrid";
import { CategoryBentoGrid } from "@/components/CategoryBentoGrid";
import { InteractiveRoadmap } from "@/components/InteractiveRoadmap";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  const [category, setCategory] = useState<Category | "All">("All");
  const [members, setMembers] = useState(3);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const filteredProjects = useMemo(() => {
    return generateProject(category, members);
  }, [category, members]);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${theme === "dark" ? "bg-[#0A0A0A] text-white" : "bg-[#f8fafc] text-zinc-900"}`}>
      <ParticleBackground theme={theme} />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b px-6 py-4 transition-colors duration-500 ${theme === "dark" ? "bg-[#0A0A0A]/80 border-white/5" : "bg-[#f8fafc]/80 border-black/5"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* BrainstormAI Logo */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L4 10l12 7 12-7-12-7z" fill="#818cf8" />
              <path d="M4 22l12 7 12-7V10l-12 7-12-7v12z" fill="#4f46e5" fillOpacity="0.5" />
              <path d="M16 29l-12-7V10l12 7 12-7v12l-12 7z" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="16" cy="17" r="4" fill="#c084fc" />
              <circle cx="16" cy="17" r="2" fill="#fff" />
            </svg>
            <span className={`font-semibold tracking-wide transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>BrainstormAI</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle - Single Icon */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2.5 rounded-full transition-all ${theme === "dark" ? "text-zinc-400 hover:text-indigo-400 hover:bg-indigo-500/10" : "text-zinc-500 hover:text-indigo-600 hover:bg-indigo-500/10"}`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Sign In Button */}
            <Link 
              href="/auth"
              className={`hidden md:block text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-lg transition-all ${theme === "dark" ? "text-zinc-400 hover:text-indigo-50 hover:bg-indigo-500/10" : "text-zinc-600 hover:text-indigo-600 hover:bg-indigo-500/10"}`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column */}
            <div className="max-w-xl">
              <div className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold mb-8 uppercase tracking-wider transition-colors duration-500 ${theme === "dark" ? "bg-white/5 border-white/10 text-zinc-400" : "bg-zinc-100 border-zinc-200 text-zinc-500"}`}>
                THE FUTURE OF ACADEMIC ENGINEERING
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Scale your vision <br />
                without limits.
              </h1>

              <p className={`text-lg mb-12 leading-relaxed transition-colors duration-500 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}>
                Unlock the full power of BrainstormAI with AI-driven topic synthesis,
                dynamic engineering roadmaps, and tailored architectural guidance for your team&apos;s unique vision.
              </p>

              {/* Filter Bar (Options / Filter) */}
              <div className={`rounded-3xl p-2 mb-0 border transition-all duration-500 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-zinc-200"}`}>
                <FilterBar
                  selectedCategory={category}
                  selectedMembers={members}
                  onCategoryChange={setCategory}
                  onMembersChange={setMembers}
                  className="mb-0"
                  theme={theme}
                />
              </div>
            </div>

            {/* Right Column - Project Card (Title Info) */}
            <div className="relative group">
              {/* Dynamic background glow that intensifies on hover */}
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full -z-10 group-hover:bg-indigo-500/20 transition-all duration-700"></div>

              {filteredProjects.length > 0 ? (
                <div className="relative">
                  <ProjectCard project={filteredProjects[0]} theme={theme} />
                </div>
              ) : (
                <div className={`p-12 rounded-[2rem] border border-dashed flex flex-col items-center justify-center text-center ${theme === "dark" ? "border-white/10 bg-white/5 text-zinc-400" : "border-zinc-200 bg-white text-zinc-500"}`}>
                  <p>No projects found for this category.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <InteractiveRoadmap theme={theme} />
      <ComplexityLogicGrid theme={theme} />
      <CategoryBentoGrid theme={theme} />
      <CtaSection theme={theme} />

      <Footer theme={theme} />
    </div>
  );
}
