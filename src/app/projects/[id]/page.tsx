"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Cpu, Layers, CheckCircle2, Rocket, Code2, ShieldCheck, Zap } from "lucide-react";
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
  
  const memberCount = parseInt(members || "3");
  
  const project = useMemo(() => {
    const baseProject = projects.find(p => p.id === id);
    if (!baseProject) return null;
    return enhanceProject(baseProject, memberCount);
  }, [id, memberCount]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-indigo-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <ParticleBackground theme="dark" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 px-6 py-4 bg-[#0A0A0A]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Ideas</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-bold tracking-tight">BrainstormAI</span>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 animate-slide-up-fade">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <Users className="w-4 h-4" />
                <span>{project.recommendedMembers} Members Team</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-gradient">
              {project.title}
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Core Details */}
            <div className="md:col-span-2 space-y-8">
              {/* Roadmap Section */}
              <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Rocket className="w-24 h-24 text-indigo-500" />
                </div>
                
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Implementation Roadmap</h2>
                    <p className="text-sm text-zinc-500">Scheduled milestones for academic excellence</p>
                  </div>
                </div>

                <div className="space-y-0 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-800" />
                  {project.roadmap.map((step, i) => (
                    <div key={i} className="flex gap-6 pb-10 last:pb-0 relative group/step">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-[#0A0A0A] border-2 border-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500 group-hover/step:border-indigo-500 group-hover/step:text-indigo-400 transition-colors">
                        {i + 1}
                      </div>
                      <div className="pt-2 flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <h3 className="font-bold text-lg text-white group-hover/step:text-indigo-400 transition-colors">{step.step}</h3>
                          <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">{step.date}</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Deliverable-focused phase ensuring all architectural requirements and testing protocols are met for this specific module.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Advanced Logic Section */}
              {project.advancedModules && (
                <section className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-[2.5rem] p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Complex Systems Injected</h2>
                      <p className="text-sm text-indigo-400/60">High-level architectural modules for large teams</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.advancedModules.map((mod, i) => (
                      <div key={i} className="bg-[#0A0A0A]/40 border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-300 leading-tight">{mod}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Research & Methodology Section */}
              <section className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Research Focus</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Performance optimization under varying load",
                      "Security protocols for decentralized data",
                      "User experience impact on adoption rates"
                    ].map((q, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-indigo-500 font-bold">•</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                      <Layers className="w-5 h-5 text-pink-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Methodology</h2>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    Utilizing the <strong>Agile Scrum</strong> framework with 2-week sprint cycles, ensuring continuous integration and stakeholder feedback loops.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 text-zinc-500">Agile</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 text-zinc-500">IEEE 830</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/10 text-zinc-500">SDLC</span>
                  </div>
                </div>
              </section>

              {/* System Architecture (Visual Simulation) */}
              <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-8">System Architecture Overview</h2>
                <div className="relative p-8 bg-[#050505] rounded-3xl border border-white/5 overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                    <div className="w-32 h-20 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-400 text-center p-2">Client<br/>Interface</div>
                    <div className="w-8 h-px bg-zinc-800 hidden md:block" />
                    <div className="w-32 h-24 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-400 text-center p-2">API Gateway /<br/>Logic Engine</div>
                    <div className="w-8 h-px bg-zinc-800 hidden md:block" />
                    <div className="w-32 h-20 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-xs font-bold text-pink-400 text-center p-2">Database /<br/>Storage</div>
                  </div>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent" />
                </div>
                <p className="mt-6 text-sm text-zinc-500 text-center italic">
                  * Simplified architectural diagram representing the core data flow and service interaction layers.
                </p>
              </section>
            </div>

            {/* Right Column - Tech & Stats */}
            <div className="space-y-8">
              {/* Tech Stack Card */}
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Code2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Tech Stack</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
                <h2 className="text-xl font-bold text-white mb-8">System Analysis</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      <span>Complexity Rating</span>
                      <span className="text-indigo-400">{project.complexityLabel}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 transition-all duration-1000" 
                        style={{ width: project.complexityLabel === 'Expert' ? '100%' : project.complexityLabel === 'High' ? '70%' : '40%' }}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-sm">
                    <span className="text-zinc-500 font-medium">Architecture</span>
                    <span className="text-zinc-300 font-bold">Microservices</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 font-medium">Documentation</span>
                    <span className="text-zinc-300 font-bold">IEEE Standard</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 font-medium">Testing Level</span>
                    <span className="text-zinc-300 font-bold">End-to-End</span>
                  </div>
                </div>
              </div>

              {/* CTA Details */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-[2.5rem] transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98]">
                Download Thesis Proposal
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer theme="dark" />
    </div>
  );
}
