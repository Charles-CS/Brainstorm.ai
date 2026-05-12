"use client";

import { use, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, Users, Cpu, Layers, CheckCircle2, 
  Rocket, Code2, ShieldCheck, Zap, Download, Share2, 
  Target, Settings, BookOpen, Activity, LayoutDashboard,
  ChevronRight, Clock, Award
} from "lucide-react";
import { projects } from "@/data/projects";
import { enhanceProject } from "@/lib/generator";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Footer } from "@/components/Footer";

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ members?: string }>;
}

export default function ProjectDetailsPage({ params, searchParams }: ProjectDetailsPageProps) {
  const { id } = use(params);
  const { members } = use(searchParams);
  const [activeSection, setActiveSection] = useState("overview");
  
  const memberCount = parseInt(members || "3");
  
  const project = useMemo(() => {
    const baseProject = projects.find(p => p.id === id);
    if (!baseProject) return null;
    return enhanceProject(baseProject, memberCount);
  }, [id, memberCount]);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "roadmap", "technical", "academic"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-indigo-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const quickStats = [
    { label: "Complexity", value: project.complexityLabel, icon: Activity, color: "text-amber-400" },
    { label: "Team Size", value: `${project.recommendedMembers} Members`, icon: Users, color: "text-indigo-400" },
    { label: "Duration", value: "6 Months", icon: Clock, color: "text-emerald-400" },
    { label: "Category", value: project.category, icon: LayoutDashboard, color: "text-pink-400" },
  ];

  const navItems = [
    { id: "overview", label: "Executive Summary", icon: Award },
    { id: "roadmap", label: "Implementation", icon: Calendar },
    { id: "technical", label: "System Design", icon: Settings },
    { id: "academic", label: "Research Frame", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-sans selection:bg-indigo-500/30">
      <ParticleBackground theme="dark" />
      
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl border-b border-white/5 px-6 py-4 bg-[#080808]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group text-zinc-400 hover:text-white transition-all">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm tracking-tight">Exit Preview</span>
            </Link>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-xs font-bold uppercase tracking-widest transition-all ${activeSection === item.id ? 'text-indigo-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-bold hover:bg-zinc-800 transition-all">
              <Share2 className="w-3.5 h-3.5 text-zinc-400" />
              Share
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-xs font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
              <Download className="w-3.5 h-3.5" />
              Export PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header & Quick Stats */}
          <header id="overview" className="mb-20 animate-slide-up-fade">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/20">
                    Official Blueprint
                  </span>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="text-zinc-500 text-xs font-medium">ID: {project.id.toUpperCase()}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.95] text-white">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {quickStats.map((stat, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-white/5 px-6 py-4 rounded-2xl flex flex-col gap-2 min-w-[140px]">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <stat.icon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Implementation Roadmap */}
              <section id="roadmap" className="scroll-mt-32">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Project Execution</h2>
                    <p className="text-zinc-500 text-sm">Strategic implementation phases for high-impact results</p>
                  </div>
                  <div className="hidden sm:block px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold text-zinc-400">
                    PHASE 1 - 4
                  </div>
                </div>

                <div className="space-y-4">
                  {project.roadmap.map((step, i) => (
                    <div key={i} className="group relative bg-zinc-900/30 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-zinc-900/50 hover:border-indigo-500/30 transition-all">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-lg font-black text-zinc-600 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-all shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                              {step.step}
                            </h3>
                            <span className="text-xs font-mono text-zinc-500 bg-black px-3 py-1 rounded-full border border-white/5">
                              {step.date}
                            </span>
                          </div>
                          <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                            A critical phase focusing on the structural foundation and integration of core services. 
                            Includes extensive validation of all module dependencies and performance metrics.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Design */}
              <section id="technical" className="scroll-mt-32">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Architectural Schematic</h2>
                  <p className="text-zinc-500 text-sm">System data flow and technical stack configuration</p>
                </div>

                <div className="grid gap-8">
                  {/* Visual Schema */}
                  <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group/arch">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
                    
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
                      {/* Node 1: Client */}
                      <div className="text-center group/node relative">
                        <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover/node:border-indigo-500/50 group-hover/node:bg-indigo-500/5 transition-all relative z-10">
                          <LayoutDashboard className="w-8 h-8 text-indigo-400" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
                        </div>
                        <span className="text-xs font-bold text-zinc-400">Frontend Layer</span>
                        <div className="absolute top-1/2 -right-12 hidden md:block group-hover/arch:animate-pulse">
                          <span className="text-[8px] font-mono text-indigo-500/50 uppercase">HTTPS</span>
                        </div>
                      </div>

                      {/* Connection 1 */}
                      <div className="hidden md:flex flex-col items-center gap-2">
                        <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 relative">
                          <div className="absolute top-0 left-0 h-full w-4 bg-white animate-[pulse-right_2s_infinite]" />
                        </div>
                      </div>

                      {/* Node 2: Logic */}
                      <div className="text-center group/node relative">
                        <div className="w-32 h-32 rounded-3xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-4 group-hover/node:border-purple-500/50 group-hover/node:bg-purple-500/5 transition-all shadow-2xl shadow-purple-500/5 relative z-10 scale-110">
                          <Settings className="w-12 h-12 text-purple-400" />
                          <div className="absolute inset-0 rounded-3xl border border-purple-500/20 animate-ping opacity-20" />
                        </div>
                        <span className="text-xs font-bold text-zinc-400">Processing Engine</span>
                      </div>

                      {/* Connection 2 */}
                      <div className="hidden md:flex flex-col items-center gap-2">
                        <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50 relative">
                          <div className="absolute top-0 left-0 h-full w-4 bg-white animate-[pulse-right_2s_infinite_0.5s]" />
                        </div>
                      </div>

                      {/* Node 3: Database */}
                      <div className="text-center group/node relative">
                        <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover/node:border-pink-500/50 group-hover/node:bg-pink-500/5 transition-all relative z-10">
                          <Layers className="w-8 h-8 text-pink-400" />
                        </div>
                        <span className="text-xs font-bold text-zinc-400">Data Persistence</span>
                        <div className="absolute top-1/2 -left-12 hidden md:block">
                          <span className="text-[8px] font-mono text-pink-500/50 uppercase">SQL</span>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Node Below (Auth/Security) */}
                    <div className="mt-16 flex justify-center">
                      <div className="text-center group/node relative">
                        <div className="px-6 py-3 rounded-2xl bg-zinc-900/80 border border-emerald-500/20 flex items-center gap-3 group-hover/node:border-emerald-500/50 transition-all">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Auth Service</span>
                        </div>
                        {/* Vertical connection line */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-800" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5">
                      <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-indigo-400" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-400 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5">
                      <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        Hardware Spec
                      </h3>
                      <ul className="space-y-3 text-xs text-zinc-500 font-medium">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span>RAM</span>
                          <span className="text-zinc-300">16GB Unified Memory</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                          <span>Compute</span>
                          <span className="text-zinc-300">M2/M3 Chip or RTX 3060</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Storage</span>
                          <span className="text-zinc-300">NVMe SSD 500GB</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research & Academic */}
              <section id="academic" className="scroll-mt-32">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Academic Framework</h2>
                  <p className="text-zinc-500 text-sm">Research focus, methodology and user-centered design</p>
                </div>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-indigo-950/20 border border-white/5 relative overflow-hidden group">
                      <Zap className="absolute top-8 right-8 w-12 h-12 text-indigo-500/10 group-hover:text-indigo-500/20 transition-all" />
                      <h3 className="text-xl font-bold text-white mb-6">Research Objectives</h3>
                      <ul className="space-y-5">
                        {[
                          "System latency optimization in real-time environments",
                          "User friction reduction through AI-driven UX",
                          "Data integrity protocols in decentralized systems"
                        ].map((obj, i) => (
                          <li key={i} className="flex gap-4 text-sm text-zinc-400 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-6">User Personas</h3>
                      <div className="space-y-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                          <h4 className="font-bold text-indigo-400 text-xs uppercase tracking-widest mb-2">The Expert User</h4>
                          <p className="text-xs text-zinc-500 leading-relaxed">Needs deep control and high-granularity data visualization for professional decision making.</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                          <h4 className="font-bold text-pink-400 text-xs uppercase tracking-widest mb-2">The Novice User</h4>
                          <p className="text-xs text-zinc-500 leading-relaxed">Requires simplified workflows, clear feedback loops, and automated insight generation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Methodology</h3>
                      <p className="text-sm text-zinc-500">IEEE 830 compliant SDLC approach focusing on reliability and scalability.</p>
                    </div>
                    <div className="flex-grow grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {["Agile Scrum", "TDD", "CI/CD", "User Testing"].map((tag) => (
                        <div key={tag} className="px-4 py-6 rounded-2xl bg-zinc-900 border border-white/10 text-center">
                          <span className="text-xs font-bold text-zinc-400">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar Right */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Score Card - DARKENED */}
                <div className="bg-zinc-900 border border-white/10 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-black/40 relative overflow-hidden group/score">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                  
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-500">Blueprint Score</h3>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-6xl font-black tracking-tighter text-white group-hover/score:text-indigo-400 transition-colors">9.8</span>
                    <span className="text-xl font-bold text-zinc-600 mb-2">/10</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-zinc-500">Innovation</span>
                      <span className="text-indigo-400">High</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[95%] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-zinc-500">Feasibility</span>
                      <span className="text-purple-400">Expert</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[88%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-zinc-200 transition-all text-sm uppercase tracking-widest shadow-xl shadow-white/5 active:scale-[0.98]">
                    Acquire Full Rights
                  </button>
                </div>

                {/* Features Summary */}
                <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem]">
                  <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-400" />
                    Core Capabilities
                  </h3>
                  <div className="grid gap-3">
                    {[
                      { l: "Offline Ready", i: Zap },
                      { l: "Cloud Native", i: Rocket },
                      { l: "Privacy First", i: ShieldCheck },
                      { l: "Scale Optimized", i: Activity },
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <feat.i className="w-4 h-4 text-zinc-500" />
                        <span className="text-xs font-bold text-zinc-300">{feat.l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Advisory */}
                <div className="p-8 rounded-[2.5rem] border border-indigo-500/20 bg-indigo-500/5">
                  <h3 className="text-sm font-bold text-indigo-400 mb-4 tracking-tight">Team Advisory</h3>
                  <p className="text-xs text-indigo-300/70 leading-relaxed">
                    Based on your selection of {project.recommendedMembers} members, we recommend a 40/60 split between Frontend and Backend focus for optimal sprint velocity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer theme="dark" />
    </div>
  );
}
