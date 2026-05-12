import { useState } from "react";
import { Category } from "@/data/projects";
import { ChevronDown, Users, Sparkles } from "lucide-react";

interface FilterBarProps {
  onCategoryChange: (category: Category | "All") => void;
  onMembersChange: (count: number) => void;
  onRefresh: () => void;
  selectedCategory: Category | "All";
  selectedMembers: number;
  className?: string;
  theme?: "light" | "dark";
}

export function FilterBar({
  onCategoryChange,
  onMembersChange,
  onRefresh,
  selectedCategory,
  selectedMembers,
  className = "",
  theme = "dark"
}: FilterBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isDark = theme === "dark";

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefresh();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const categories: (Category | "All")[] = [
    "All",
    "Machine Learning",
    "Blockchain",
    "Web Development",
    "Internet of Things",
    "Mobile App"
  ];

  return (
    <div className={`w-full flex flex-col md:flex-row items-stretch gap-2 ${className}`}>

      {/* Category Dropdown */}
      <div className="relative flex-1 group">
        <div className={`absolute inset-0 rounded-2xl transition-colors ${isDark ? "bg-white/5 group-hover:bg-white/10" : "bg-zinc-50 group-hover:bg-zinc-100"}`}></div>
        <div className="relative px-4 py-2">
          <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
            Category
          </label>
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full text-left bg-transparent border-none font-semibold text-sm outline-none pr-8 cursor-pointer flex items-center justify-between transition-colors ${isDark ? "text-white" : "text-zinc-900"}`}
            >
              {selectedCategory}
              <ChevronDown className={`absolute right-0 w-4 h-4 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-indigo-400' : isDark ? 'text-zinc-500 group-hover:text-indigo-400' : 'text-zinc-400 group-hover:text-indigo-400'}`} />
            </button>

            {/* Custom Dropdown Menu */}
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                <div className={`absolute top-full left-0 mt-3 w-56 backdrop-blur-2xl border rounded-2xl shadow-2xl z-50 overflow-hidden py-1.5 flex flex-col gap-0.5 ${isDark ? "bg-[#111111]/95 border-white/10" : "bg-white/95 border-zinc-200"}`}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        onCategoryChange(cat as Category | "All");
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors mx-1.5 rounded-xl flex items-center justify-between ${selectedCategory === cat ? 'text-indigo-400 bg-indigo-500/10' : isDark ? 'text-zinc-300 hover:bg-white/10' : 'text-zinc-700 hover:bg-zinc-100'}`}
                      style={{ width: 'calc(100% - 12px)' }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Team Size Input */}
      <div className="relative flex-1 group z-0">
        <div className={`absolute inset-0 rounded-2xl transition-colors ${isDark ? "bg-white/5 group-hover:bg-white/10" : "bg-zinc-50 group-hover:bg-zinc-100"}`}></div>
        <div className="relative px-4 py-2">
          <div className="flex items-center justify-between mb-1">
            <label className={`block text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
              Team Size
            </label>
            <div className="flex items-center gap-1.5 text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              <Users className="w-3 h-3" />
              <span className="text-[10px] font-bold">{selectedMembers}</span>
            </div>
          </div>
          <div className="flex items-center h-[20px]">
            <input
              type="range"
              min="1"
              max="10"
              value={selectedMembers}
              onChange={(e) => onMembersChange(parseInt(e.target.value))}
              className={`w-full h-1 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${isDark ? "bg-zinc-700" : "bg-zinc-200"}`}
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button 
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="relative group md:w-auto w-full flex-shrink-0 transition-transform active:scale-95 z-0 disabled:opacity-80"
      >
        <div className="absolute inset-0 bg-indigo-500 rounded-2xl opacity-40 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center gap-2 bg-indigo-600 border border-indigo-400/30 px-6 h-full min-h-[44px] rounded-2xl transition-all shadow-xl shadow-indigo-500/20 group-hover:bg-indigo-500">
          <Sparkles className={`w-4 h-4 text-white transition-transform duration-500 ${isRefreshing ? 'rotate-[360deg] scale-125' : ''}`} />
          <span className="font-bold text-sm text-white">
            {isRefreshing ? "Generating..." : "Refresh Ideas"}
          </span>
        </div>
      </button>

    </div>
  );
}
