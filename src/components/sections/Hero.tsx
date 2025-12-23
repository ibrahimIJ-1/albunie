"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FiArrowDown } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import WaterMorph from "../ui/WaterMorph";

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  originX: number;
  originY: number;
}

const brandColors = [
  "#41bfab", // Teal Premium
  "#144587", // Navy Premium
  "#217691", // Derived Mid-tone
  "#0f3161", // Deep Navy
  "#5edbc7", // Light Teal
  "#1c5ba3", // Bright Navy
];

export default function Hero() {
  const t = useTranslations("Hero");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const isMouseDown = useRef(false);
  const animationFrameId = useRef<number | undefined>(undefined);

  // Initialize particles (Increase to 300)
  useEffect(() => {
    const particleCount = 1000;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      newParticles.push({
        id: i,
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.15,
        color: brandColors[Math.floor(Math.random() * brandColors.length)],
        size: Math.random() * 4 + 2, // Slightly smaller for higher density
      });
    }
    particlesRef.current = newParticles;
  }, []);

  // Event tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseDown = () => (isMouseDown.current = true);
    const handleMouseUp = () => (isMouseDown.current = false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Physics engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        let ay = -0.015; // Viscous drift
        let ax = 0;

        const dx = particle.x - mousePos.current.x;
        const dy = particle.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Dynamic repulsion radius based on clicks
        const repulsionRadius = isMouseDown.current ? 350 : 180;
        const forceMultiplier = isMouseDown.current ? 6 : 2.8;

        if (distance < repulsionRadius && distance > 0) {
          const force =
            Math.pow((repulsionRadius - distance) / repulsionRadius, 2) *
            forceMultiplier;
          ax += (dx / distance) * force;
          ay += (dy / distance) * force;
        }

        // Return to origin logic (very subtle)
        const dxOrigin = particle.originX - particle.x;
        const dyOrigin = particle.originY - particle.y;
        ax += dxOrigin * 0.0001;
        ay += dyOrigin * 0.0001;

        particle.vx = (particle.vx + ax) * 0.96; // Smoother damping
        particle.vy = (particle.vy + ay) * 0.96;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap edges
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Draw dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;

        if (distance < repulsionRadius) {
          ctx.shadowBlur = isMouseDown.current ? 15 : 10;
          ctx.shadowColor = particle.color;
          ctx.globalAlpha = 1;
        } else {
          ctx.globalAlpha = 0.5;
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center"
    >
      {/* Water Morph Background */}
      <WaterMorph className="absolute inset-0 z-0 opacity-40" />

      {/* Floating Dots Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
        style={{ cursor: "default" }}
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Branding */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-primary animate-pulse">⚡</span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-800">
              Al-Bunie Al-Asasiya
            </span>
          </div>
          {/* Main Headline */}
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-black font-display tracking-tighter leading-[0.85] mb-12 text-transparent bg-clip-text bg-gradient-to-br from-[#41bfab] via-[#217691] to-[#144587] py-4"
          >
            {t("title")}
          </motion.h1>
          {/* Subtitle */}
          <p className="text-lg md:text-3xl text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed font-light px-4 md:px-0">
            {t("subtitle")}
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center px-6 md:px-0">
            <a
              href="#services"
              className="w-full md:w-auto group relative px-10 py-5 md:px-12 md:py-6 bg-slate-900 text-white font-bold rounded-full hover:bg-primary transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl hover:shadow-primary/40"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm md:text-base">
                {t("cta_primary")}
              </span>
              <FiArrowDown className="group-hover:translate-y-2 transition-transform duration-500" />
            </a>

            <a
              href="#contact"
              className="w-full md:w-auto px-10 py-5 md:px-12 md:py-6 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500 uppercase tracking-widest text-sm md:text-base flex items-center justify-center"
            >
              {t("cta_secondary")}
            </a>
          </div>
        </div>
      </div>

      {/* Interact Tip */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div className="flex flex-col items-center gap-4 text-slate-400 opacity-60">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Click to Repel
          </span>
        </div>
      </div>
    </section>
  );
}
