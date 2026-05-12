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

                <div className="space-y-6">
                  {project.roadmap.map((step, i) => (
                    <div key={i} className="group relative bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:bg-zinc-900/50 hover:border-indigo-500/30 transition-all">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-xl font-black text-zinc-600 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-all shadow-xl">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div className="hidden md:block w-px h-full bg-white/5 mt-4 group-last:hidden" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">
                                {step.step}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-indigo-500/60 uppercase tracking-widest">Phase Objective</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-700" />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{step.date}</span>
                              </div>
                            </div>
                            <div className="flex -space-x-2">
                              {[1, 2, 3].map((m) => (
                                <div key={m} className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-500">
                                  {String.fromCharCode(64 + m)}
                                </div>
                              ))}
                            </div>
                          </div>

                          <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl mb-8">
                            {step.step.includes("Data") || step.step.includes("Collection") ? 
                              "Establish robust data ingestion pipelines and normalization protocols. Focus on high-fidelity data acquisition and secure storage architectures to ensure maximum integrity for downstream processing." :
                            step.step.includes("Architecture") || step.step.includes("Design") ?
                              "Defining the core structural logic and microservices interaction layers. We prioritize modularity and low-latency communication between system components using industry-standard design patterns." :
                            step.step.includes("Training") || step.step.includes("Logic") ?
                              "Implementation of core algorithmic logic and performance optimization. Includes extensive stress testing under simulated high-load environments to ensure system stability and reliability." :
                            step.step.includes("API") || step.step.includes("Integration") ?
                              "Bridge construction between backend services and the presentation layer. Focus on GraphQL/REST endpoint optimization and secure authentication handshake protocols." :
                            "Final deployment and end-to-end system validation. This phase includes comprehensive UAT, performance benchmarking against initial KPIs, and final documentation for production readiness."}
                          </p>

                          <div className="grid sm:grid-cols-3 gap-4">
                            {[
                              { label: "Stability", value: "99.9%", icon: ShieldCheck },
                              { label: "Velocity", value: "High", icon: Zap },
                              { label: "Security", value: "AES-256", icon: Rocket }
                            ].map((item, idx) => (
                              <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                                <item.icon className="w-4 h-4 text-zinc-600" />
                                <div className="flex flex-col">
                                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">{item.label}</span>
                                  <span className="text-xs font-bold text-zinc-300">{item.value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
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
                  <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden group/arch shadow-2xl shadow-black/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
                    
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                    <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                      <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] py-4">
                        {/* Repeating 2 identical sets for a perfectly seamless loop at -50% */}
                        {[1, 2].map((set) => (
                          <div key={set} className="flex items-center">
                            {/* Node 1: Client */}
                            <div className="text-center group/node relative flex flex-col items-center w-[120px] shrink-0">
                              <div className="w-28 h-28 rounded-[2rem] bg-zinc-900 border border-white/10 flex flex-col items-center justify-center mb-5 group-hover/node:border-indigo-500/50 group-hover/node:bg-indigo-500/5 transition-all duration-500 relative z-10 shadow-xl">
                                <LayoutDashboard className="w-10 h-10 text-indigo-400 mb-2" />
                                <span className="text-[10px] font-black text-indigo-500/80 uppercase tracking-tighter">UI Layer</span>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full animate-pulse blur-[2px]" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-white tracking-tight truncate w-full px-2">
                                  {project.techStack[project.techStack.length - 2] || "Frontend"}
                                </span>
                                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Presentation</span>
                              </div>
                            </div>

                            {/* Connection 1 */}
                            <div className="w-24 h-px mx-10 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-purple-500/50 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 h-full w-8 bg-white/40 blur-sm animate-pulse-right" />
                            </div>

                            {/* Node 2: Logic */}
                            <div className="text-center group/node relative flex flex-col items-center w-[150px] shrink-0">
                              <div className="w-36 h-36 rounded-[2.5rem] bg-zinc-950 border border-white/10 flex flex-col items-center justify-center mb-5 group-hover/node:border-purple-500/50 group-hover/node:bg-purple-500/5 transition-all duration-500 shadow-2xl shadow-purple-500/10 relative z-10 scale-110">
                                <Settings className="w-14 h-14 text-purple-400 mb-2 animate-[spin_10s_linear_infinite]" />
                                <span className="text-[10px] font-black text-purple-500/80 uppercase tracking-tighter">Logic Core</span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-white tracking-tight truncate w-full px-2">
                                  {project.techStack[0] || "Backend"}
                                </span>
                                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Processing</span>
                              </div>
                            </div>

                            {/* Connection 2 */}
                            <div className="w-24 h-px mx-10 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-pink-500/50 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 h-full w-8 bg-white/40 blur-sm animate-pulse-right [animation-delay:1.5s]" />
                            </div>

                            {/* Node 3: Database */}
                            <div className="text-center group/node relative flex flex-col items-center w-[120px] shrink-0">
                              <div className="w-28 h-28 rounded-[2rem] bg-zinc-900 border border-white/10 flex flex-col items-center justify-center mb-5 group-hover/node:border-pink-500/50 group-hover/node:bg-pink-500/5 transition-all duration-500 relative z-10 shadow-xl">
                                <Layers className="w-10 h-10 text-pink-400 mb-2" />
                                <span className="text-[10px] font-black text-pink-500/80 uppercase tracking-tighter">Data Hub</span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-white tracking-tight truncate w-full px-2">
                                  {project.techStack[project.techStack.length - 1] || "Storage"}
                                </span>
                                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Persistence</span>
                              </div>
                            </div>

                            {/* Connection for Loop */}
                            <div className="w-24 h-px mx-10 bg-gradient-to-r from-pink-500/50 via-indigo-500/50 to-indigo-500/50 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 h-full w-8 bg-white/40 blur-sm animate-pulse-right [animation-delay:3s]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>




                    {/* Security Overlay / Flow Details */}
                    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/5 pt-12">
                      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900/80 border border-emerald-500/20 group hover:border-emerald-500/50 transition-all">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-emerald-500/60 uppercase tracking-widest">Protocol</span>
                          <span className="text-xs font-bold text-zinc-300">End-to-End Encryption</span>
                        </div>
                      </div>
                      
                      <div className="hidden md:block w-8 h-px bg-white/5" />

                      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900/80 border border-indigo-500/20 group hover:border-indigo-500/50 transition-all">
                        <Rocket className="w-5 h-5 text-indigo-400" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-indigo-500/60 uppercase tracking-widest">Delivery</span>
                          <span className="text-xs font-bold text-zinc-300">CD/CI Optimized Pipeline</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 hover:border-indigo-500/20 transition-all group/tech">
                      <h3 className="font-bold text-white mb-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                          <Code2 className="w-4 h-4 text-indigo-400" />
                        </div>
                        Technical Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-[11px] text-zinc-300 font-bold uppercase tracking-wider hover:border-indigo-500/30 transition-all flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-indigo-500" />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 hover:border-emerald-500/20 transition-all group/hw">
                      <h3 className="font-bold text-white mb-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <Cpu className="w-4 h-4 text-emerald-400" />
                        </div>
                        System Infrastructure
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: "Memory Unit", value: "32GB High-Bandwidth RAM", icon: Layers },
                          { label: "Compute Engine", value: "NVIDIA RTX 40-Series / M3 Max", icon: Zap },
                          { label: "Storage Layer", value: "2TB NVMe Gen4 SSD", icon: Rocket }
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 group-hover/hw:border-emerald-500/10 transition-all">
                            <div className="flex items-center gap-3">
                              <spec.icon className="w-3.5 h-3.5 text-zinc-500" />
                              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{spec.label}</span>
                            </div>
                            <span className="text-xs font-bold text-zinc-200">{spec.value}</span>
                          </div>
                        ))}
                      </div>
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
