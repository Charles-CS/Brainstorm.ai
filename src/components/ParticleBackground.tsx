"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBackground({ theme }: { theme: "light" | "dark" }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const isDark = theme === "dark";
    // Adjust colors based on theme to ensure visibility
    const particleColor = isDark ? "#818cf8" : "#4f46e5"; // Indigo accents
    const linkColor = isDark ? "#c084fc" : "#6366f1"; // Purple/Indigo links
    
    // Fallback to simpler colors if we want pure kumpirma style
    // Kumpirma usually uses white/grey dots on dark background.
    const baseColor = isDark ? "#ffffff" : "#000000";

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          grab: {
            distance: 140,
            links: {
              opacity: isDark ? 0.3 : 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: baseColor,
        },
        links: {
          color: baseColor,
          distance: 150,
          enable: true,
          opacity: isDark ? 0.15 : 0.25,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100, // Good density for constellation effect
        },
        opacity: {
          value: isDark ? 0.3 : 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-0 pointer-events-none">
      {/* We use pointer-events-none here if we want the particles to just be visual without blocking clicks. 
          If we want interactivity, we need pointer-events-auto but absolute z-index. 
          Actually, let's keep interactivity by omitting pointer-events-none and ensuring z-index is lowest. */}
      <Particles id="tsparticles" options={options} className="absolute inset-0 -z-10" />
    </div>
  );
}
