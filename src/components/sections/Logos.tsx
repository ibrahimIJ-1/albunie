"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const partners = [
  {
    id: "NET-001",
    file: "Logos-for-albunia-alasassia-02.png",
    role: "Enterprise Core",
    desc: "L3 Data Routing",
    feature: "High-Availability",
  },
  {
    id: "SEC-002",
    file: "Logos-for-albunia-alasassia-03.png",
    role: "SecOps Elite",
    desc: "Neural Threat Defense",
    feature: "Zero-Trust",
  },
  {
    id: "COM-003",
    file: "Logos-for-albunia-alasassia-05.png",
    role: "Unified UC",
    desc: "Global Comms Mesh",
    feature: "HD-Fiber",
  },
  {
    id: "STR-004",
    file: "Logos-for-albunia-alasassia-06.png",
    role: "Data Storage",
    desc: "Edge Cloud persistence",
    feature: "NVMe-over-Fabric",
  },
  {
    id: "CLD-005",
    file: "Logos-for-albunia-alasassia-09.png",
    role: "Cloud Infra",
    desc: "Hybrid Mesh Compute",
    feature: "Multi-Zone",
  },
  {
    id: "AI-006",
    file: "Logos-for-albunia-alasassia-10.png",
    role: "Cognitive AI",
    desc: "Predictive Analytics",
    feature: "Deep-Learning",
  },
  {
    id: "VPT-007",
    file: "Logos-for-albunia-alasassia-11.png",
    role: "VAPT Hub",
    desc: "Advanced Red Teaming",
    feature: "OSINT Aware",
  },
];

export default function Logos() {
  const t = useTranslations("Logos");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Global Glare Tracking
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const smoothGlareX = useSpring(glareX, { damping: 30, stiffness: 150 });
  const smoothGlareY = useSpring(glareY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      glareX.set(e.clientX - rect.left);
      glareY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [glareX, glareY]);

  // Premium Blueprint Background Lines
  const blueprints = useMemo(
    () => [
      { d: "M 0 100 Q 250 50 500 100 T 1000 100", delay: 0 },
      { d: "M 0 300 Q 250 350 500 300 T 1000 300", delay: 2 },
      { d: "M 100 0 V 1000", delay: 1 },
      { d: "M 900 0 V 1000", delay: 3 },
    ],
    []
  );

  return (
    <section className="py-24 md:py-48 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f8fafc_100%)] relative overflow-hidden">
      {/* Premium Blueprint Architecture Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {blueprints.map((bp, i) => (
            <motion.path
              key={i}
              d={bp.d}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: bp.delay,
              }}
            />
          ))}
          <circle
            cx="500"
            cy="500"
            r="400"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
          />
          <line
            x1="100"
            y1="100"
            x2="900"
            y2="900"
            stroke="currentColor"
            strokeWidth="0.2"
          />
          <line
            x1="900"
            y1="100"
            x2="100"
            y2="900"
            stroke="currentColor"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200/20" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-slate-200/20" />
      </div>

      <div className="container mx-auto px-6 relative z-20 overflow-hidden">
        <div className="text-center mb-16 md:mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="px-2 md:px-6 py-3 bg-white border border-slate-200 rounded-full text-[12px] font-black uppercase tracking-[0.6em] text-primary shadow-2xl">
              Architecture & Mastery
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-6xl md:text-9xl font-black font-display text-slate-900 tracking-tighter leading-[0.9] mb-12"
          >
            {t("title")}
            <span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Orchestrating a high-fidelity partner installation. A fusion of
            architectural precision and enterprise excellence.
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-7xl mx-auto py-10"
        >
          {/* Global Glare Effect Overlay */}
          <motion.div
            className="absolute z-20 pointer-events-none w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] opacity-100"
            style={{
              x: smoothGlareX,
              y: smoothGlareY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-y-6 md:gap-8 items-stretch justify-items-center">
            {partners.map((partner, i) => (
              <GlassDossier
                key={i}
                partner={partner}
                index={i}
                total={partners.length}
                scrollProgress={scrollYProgress}
                t={t}
              />
            ))}
          </div>

          {/* Premium Mastery Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 pt-16 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <div>
              <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                500+
              </p>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">
                {t("stats.deployments")}
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">
                24/7
              </p>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">
                {t("stats.support")}
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                GOLD
              </p>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">
                {t("stats.engineering")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlassDossier({
  partner,
  index,
  total,
  scrollProgress,
  t,
}: {
  partner: any;
  index: number;
  total: number;
  scrollProgress: any;
  t: any;
}) {
  const dossierRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced Dimensions
  const height = useMemo(() => 420 + (index % 3) * 40, [index]);
  const yParallax = useTransform(
    scrollProgress,
    [0, 1],
    [50 * ((index % 4) - 2), -50 * ((index % 4) - 2)]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationRef.current = gsap.to(dossierRef.current, {
        y: "+=15",
        rotationX: 1,
        rotationY: index % 2 === 0 ? 1.5 : -1.5,
        duration: 6 + (index % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
        force3D: true,
      });
    }, dossierRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <motion.div
      style={{ y: isMobile ? 0 : yParallax }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full md:max-w-[280px]"
    >
      <motion.div
        ref={dossierRef}
        whileHover={!isMobile ? { scale: 1.05, zIndex: 50 } : {}}
        onMouseEnter={() => !isMobile && animationRef.current?.pause()}
        onMouseLeave={() => !isMobile && animationRef.current?.play()}
        className="relative group perspective-1000 will-change-transform"
      >
        {/* 3D Glass Dossier Card */}
        <div
          className={`relative h-full bg-white/40 ${isMobile ? "backdrop-blur-md" : "backdrop-blur-2xl"} border border-white/80 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:bg-white/60 group-hover:border-primary/30 group-hover:shadow-[0_45px_100px_rgba(30,58,138,0.1)] flex flex-col p-6 md:p-8 overflow-hidden transform-style-3d`}
          style={{ minHeight: `${height}px` }}
        >
          {/* Tier Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[7px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
              Tier_Alpha
            </span>
          </div>

          {/* Technical Header */}
          <div className="mb-8">
            <p className="text-[9px] font-black text-slate-400 tracking-[0.3em] uppercase mb-1">
              {partner.id}
            </p>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">
              {partner.role}
            </h4>
          </div>

          {/* Main Logo */}
          <div className="flex-1 flex items-center justify-center py-8">
            <Image
              src={`/logos/${partner.file}`}
              alt={partner.role}
              width={160}
              height={100}
              className="w-full h-auto max-h-[120px] object-contain filter md:grayscale md:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
            />
          </div>

          {/* Expanded Content Layer */}
          <div className="space-y-4 pt-6 border-t border-slate-200/50">
            <div>
              <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Architecture
              </p>
              <p className="text-[10px] font-black text-slate-900 group-hover:text-primary transition-colors">
                {partner.desc}
              </p>
            </div>
            <div className="opacity-40 group-hover:opacity-100 transition-opacity">
              <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Primary System
              </p>
              <p className="text-[10px] font-black text-slate-900">
                {partner.feature}
              </p>
            </div>
          </div>

          {/* Status indicator bar */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex-1 h-0.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-primary/20"
              />
            </div>
            <span className="text-[8px] font-bold text-slate-300">ACTV</span>
          </div>
        </div>

        {/* Dynamic Floor Projection */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000" />
      </motion.div>
    </motion.div>
  );
}
