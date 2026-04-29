"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowLeft, Github, Mail, Lock, User, Sparkles } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function AuthPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isLogin, setIsLogin] = useState(true);
  const isDark = theme === "dark";

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
            <Link href="/" className={`flex items-center gap-2 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-lg transition-all ${isDark ? "text-zinc-400 hover:text-indigo-50 hover:bg-indigo-500/10" : "text-zinc-600 hover:text-indigo-600 hover:bg-indigo-500/10"}`}>
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden md:inline">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center pt-20 pb-10 px-6">
        <div className="w-full max-w-[440px] relative">
          
          {/* Decorative glows */}
          <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${isDark ? 'bg-indigo-500/20 opacity-100' : 'bg-indigo-500/10 opacity-0'}`} />
          <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${isDark ? 'bg-purple-500/20 opacity-100' : 'bg-purple-500/10 opacity-0'}`} />

          <div className={`relative p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-2xl transition-all duration-500 ${isDark ? 'bg-white/5 border-white/10 shadow-2xl' : 'bg-white border-zinc-200 shadow-xl'}`}>
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-500/10 text-indigo-500 mb-6 border border-indigo-500/20 shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {isLogin ? "Welcome back" : "Create account"}
              </h1>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'} text-sm`}>
                {isLogin ? "Enter your credentials to continue" : "Join thousands of researchers today"}
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="space-y-1">
                  <label className={`text-xs font-bold uppercase tracking-widest px-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Full Name</label>
                  <div className="relative group">
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-focus-within:ring-2 group-focus-within:ring-indigo-500/50 ${isDark ? 'bg-white/5' : 'bg-zinc-50'}`} />
                    <div className="relative flex items-center px-4 py-3.5">
                      <User className={`w-5 h-5 mr-3 transition-colors ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className={`w-full bg-transparent border-none outline-none text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'} placeholder:text-zinc-500`}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-widest px-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Email Address</label>
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-focus-within:ring-2 group-focus-within:ring-indigo-500/50 ${isDark ? 'bg-white/5' : 'bg-zinc-50'}`} />
                  <div className="relative flex items-center px-4 py-3.5">
                    <Mail className={`w-5 h-5 mr-3 transition-colors ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
                    <input 
                      type="email" 
                      placeholder="hello@example.com" 
                      className={`w-full bg-transparent border-none outline-none text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'} placeholder:text-zinc-500`}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between px-1">
                  <label className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Password</label>
                  {isLogin && (
                    <button type="button" className="text-xs font-bold text-indigo-500 hover:underline">Forgot?</button>
                  )}
                </div>
                <div className="relative group">
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 group-focus-within:ring-2 group-focus-within:ring-indigo-500/50 ${isDark ? 'bg-white/5' : 'bg-zinc-50'}`} />
                  <div className="relative flex items-center px-4 py-3.5">
                    <Lock className={`w-5 h-5 mr-3 transition-colors ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className={`w-full bg-transparent border-none outline-none text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'} placeholder:text-zinc-500`}
                    />
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98]">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="relative my-8">
              <div className={`absolute inset-0 flex items-center ${isDark ? 'opacity-10' : 'opacity-20'}`}>
                <div className="w-full border-t border-current"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className={`px-4 font-bold ${isDark ? 'bg-[#151515] text-zinc-500' : 'bg-white text-zinc-400'}`}>Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'}`}>
                <Github className="w-5 h-5" />
                <span className="text-sm font-bold">Github</span>
              </button>
              <button className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl border transition-all ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'}`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-bold">Google</span>
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-500 font-bold hover:underline"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>

          </div>
        </div>
      </main>

      <footer className="py-10 px-6 text-center">
        <p className={`text-xs ${isDark ? 'text-zinc-600' : 'text-zinc-400'} uppercase tracking-[0.2em] font-bold`}>
          © {new Date().getFullYear()} BrainstormAI. Secure Authentication Platform.
        </p>
      </footer>
    </div>
  );
}
