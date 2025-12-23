"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCogs, FaTools, FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const t = useTranslations("Services");
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const categories = [
    {
      key: "construction",
      icon: FaLaptopCode,
      id: "SRV-001",
      color: "from-blue-600 to-cyan-400",
      role: "System Build",
    },
    {
      key: "infrastructure",
      icon: FaCogs,
      id: "SRV-002",
      color: "from-emerald-600 to-teal-400",
      role: "Core Infra",
    },
    {
      key: "consulting",
      icon: FaTools,
      id: "SRV-003",
      color: "from-orange-600 to-amber-400",
      role: "Expertise",
    },
    {
      key: "security",
      icon: FaShieldAlt,
      id: "SRV-004",
      color: "from-purple-600 to-indigo-400",
      role: "Cyber Defense",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      // Central Line Animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Card Reveals
      cards.forEach((card: any, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            rotateX: 10,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-40 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f1f5f9_100%)] relative overflow-hidden"
    >
      {/* Background Blueprint/Circuit Layer */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 50 Q 25 45 50 50 T 100 50"
            stroke="currentColor"
            fill="none"
          />
          <path d="M 50 0 V 100" stroke="currentColor" fill="none" />
          <circle cx="50" cy="50" r="1" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-primary shadow-xl">
              Solutions Architecture
            </span>
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-black font-display text-slate-900 tracking-tighter leading-none mb-10">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
          {categories.map((item, index) => (
            <ServiceCard key={item.key} item={item} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item, index, t }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className="service-card group relative perspective-2000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        rotateY: isHovered ? mousePos.x : 0,
        rotateX: isHovered ? -mousePos.y : 0,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="relative bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.05)] group-hover:shadow-[0_50px_100px_rgba(30,58,138,0.1)] transition-all duration-700 overflow-hidden transform-style-3d">
        {/* Glow Layer */}
        <div
          className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-1000`}
        />

        {/* Technical Metadata */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase block mb-1">
              {item.id}
            </span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">
              {item.role}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl shadow-lg">
            <item.icon />
          </div>
        </div>

        <h3 className="text-4xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors">
          {t(item.key)}
        </h3>

        <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 translate-z-20">
          {t(`${item.key}_desc`)}
        </p>

        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-slate-200/50" />
          <button className="relative group/btn flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full overflow-hidden transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_10px_30px_-10px_rgba(30,58,138,0.5)]">
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-dark transition-colors duration-500">
              Examine_Branch
            </span>
            <motion.span
              className="relative z-10 text-slate-400 group-hover:text-white transition-colors duration-500"
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>

            {/* Sliding Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
