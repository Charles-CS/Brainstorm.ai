import { GeneratedProject } from "@/lib/generator";
import { Calendar, Users, Cpu, Layers, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: GeneratedProject;
  theme?: "light" | "dark";
}

export function ProjectCard({ project, theme = "dark" }: ProjectCardProps) {
  const isDark = theme === "dark";
  
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/80 hover:shadow-2xl hover:shadow-indigo-500/20 backdrop-blur-xl ${isDark ? 'bg-zinc-900/40 border-white/10' : 'bg-white border-zinc-200'}`}>
      {/* Content */}
      <div className="relative p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            {project.category}
          </span>
          <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            <Users className="w-4 h-4" />
            <span>{project.recommendedMembers} Members</span>
          </div>
        </div>

        <h3 className={`text-2xl font-bold mb-4 group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {project.title}
        </h3>
        
        <p className={`mb-8 flex-grow leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className={`flex items-center gap-2 mb-3 text-sm font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <Cpu className="w-4 h-4" />
            <span>Recommended Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className={`px-2 py-1 rounded-md text-[10px] font-mono border transition-colors ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Advanced Modules if any */}
        {project.advancedModules && (
          <div className={`mb-8 p-4 rounded-xl border ${isDark ? 'bg-indigo-500/5 border-indigo-500/10' : 'bg-indigo-50 border-indigo-500/20'}`}>
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-500">
              <Layers className="w-4 h-4" />
              <span>ADVANCED MODULES INJECTED</span>
            </div>
            <ul className={`text-xs space-y-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {project.advancedModules.map((mod, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-indigo-500" />
                  {mod}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Roadmap Preview */}
        <div className={`mt-auto pt-6 border-t ${isDark ? 'border-white/10' : 'border-zinc-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              <Calendar className="w-4 h-4" />
              <span>Project Roadmap</span>
            </div>
            <span className="text-[10px] font-bold text-indigo-500 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {project.complexityLabel} Complexity
            </span>
          </div>
          
          <div className="space-y-3">
            {project.roadmap.slice(0, 3).map((milestone, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{milestone.step}</span>
                <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'} font-mono`}>{milestone.date}</span>
              </div>
            ))}
            {project.roadmap.length > 3 && (
              <div className="text-[10px] text-indigo-500 font-bold flex items-center gap-1 mt-2 cursor-pointer hover:underline">
                View full {project.roadmap.length} steps <ArrowRight className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
