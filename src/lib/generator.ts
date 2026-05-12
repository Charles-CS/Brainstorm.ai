import { projects, Project, Category } from "@/data/projects";

export interface GeneratedProject extends Project {
  recommendedMembers: number;
  complexityLabel: string;
  roadmap: { step: string; date: string }[];
  advancedModules?: string[];
}

export function enhanceProject(
  project: Project,
  memberCount: number
): GeneratedProject {
  let complexityLabel = "Medium";
  const advancedModules: string[] = [];

  if (memberCount >= 4 && memberCount <= 6) {
    complexityLabel = "High";
  } else if (memberCount > 6) {
    complexityLabel = "Expert";
    // Inject Advanced Modules for large teams
    advancedModules.push("Distributed Microservices Architecture");
    advancedModules.push("Blockchain-based Identity Verification");
    advancedModules.push("Real-time Data Streaming with Kafka");
  }

  // 3. Generate Roadmap
  // Scale duration based on complexity
  const daysPerPhase = project.baseComplexity === "Expert" ? 30 : project.baseComplexity === "High" ? 21 : 14;
  
  const startDate = new Date("2026-05-01T00:00:00Z");
  const roadmap = project.baseMilestones.map((milestone, index) => {
    const milestoneDate = new Date(startDate);
    milestoneDate.setDate(startDate.getDate() + (index + 1) * daysPerPhase);
    
    return {
      step: milestone,
      date: milestoneDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
      })
    };
  });

  return {
    ...project,
    recommendedMembers: memberCount,
    complexityLabel,
    roadmap,
    advancedModules: advancedModules.length > 0 ? advancedModules : undefined
  };
}

export function generateProject(
  category: Category | "All",
  memberCount: number
): GeneratedProject[] {
  // 1. Filter by category
  const filtered = category === "All" 
    ? [...projects] 
    : projects.filter(p => p.category === category);

  // 2. Map and Enhance based on member count
  return filtered.map(project => enhanceProject(project, memberCount));
}
