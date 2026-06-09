"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBackground({ theme }: { theme: "light" | "dark" }) {
  const [init, setInit] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateRenderState = () => {
      setShouldRender(!mediaQuery.matches && window.innerWidth >= 1024);
    };

    updateRenderState();
    mediaQuery.addEventListener("change", updateRenderState);
    window.addEventListener("resize", updateRenderState);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => {
      mediaQuery.removeEventListener("change", updateRenderState);
      window.removeEventListener("resize", updateRenderState);
    };
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const isDark = theme === "dark";
    const baseColor = isDark ? "#ffffff" : "#000000";

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        color: {
          value: baseColor,
        },
        links: {
          color: baseColor,
          distance: 140,
          enable: true,
          opacity: isDark ? 0.1 : 0.18,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 36,
        },
        opacity: {
          value: isDark ? 0.25 : 0.35,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: false,
      fpsLimit: 45,
    };
  }, [theme]);

  if (!init || !shouldRender) return null;

  return (
    <div className="fixed inset-0 -z-0 pointer-events-none">
      <Particles id="tsparticles" options={options} className="absolute inset-0 -z-10" />
    </div>
  );
}
