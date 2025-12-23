"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Al-Saadi",
    role: "IT Director, Global Logistics",
    content:
      "Al-Bunie transformed our entire infrastructure. Their attention to security detail and technical precision is unmatched in the region. A truly premium partnership.",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Ahmad+Saadi&background=1e3a8a&color=fff",
  },
  {
    id: 2,
    name: "Sarah Kareem",
    role: "Operations Manager, FinTech IQ",
    content:
      "The implementation of our hybrid cloud system was seamless. They understood our complex requirements and delivered ahead of schedule. Exceptional service.",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Kareem&background=10b981&color=fff",
  },
  {
    id: 3,
    name: "Mustafa Jassim",
    role: "CTO, SecureLink Systems",
    content:
      "Working with Al-Bunie felt like working with a global agency. Their motion-first design and structural integrity are visible in every fiber of their work.",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Mustafa+Jassim&background=3b82f6&color=fff",
  },
];

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 40; // Subtler rotation
    const y = (e.clientY - top - height / 2) / 40;
    setMousePos({ x, y });
  };

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="py-40 bg-[#0a192f] text-white relative overflow-hidden flex items-center min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-[#144587] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#41bfab] rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.4em] text-[#41bfab] mb-10">
              {t("title")}
            </span>
            <h2 className="text-5xl md:text-8xl font-black font-display mb-10 leading-[0.9] tracking-tighter">
              Trusted by Industry{" "}
              <span className="text-[#41bfab]">Leaders.</span>
            </h2>
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#41bfab] hover:text-white hover:border-[#41bfab] transition-all text-xl"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#41bfab] hover:text-white hover:border-[#41bfab] transition-all text-xl"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>

          {/* Right: Interactive 3D Card */}
          <div
            ref={containerRef}
            className="relative h-[650px] perspective-2000"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateY: mousePos.x,
                  rotateX: -mousePos.y,
                }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0 bg-white/40 backdrop-blur-3xl border border-white/80 shadow-[0_50px_100px_rgba(20,69,135,0.15)] rounded-[5rem] p-10 md:p-16 text-slate-900 flex flex-col justify-between overflow-hidden transform-style-3d border-b-[#41bfab]/30 border-b-4"
              >
                {/* Floating Decor Items */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#41bfab]/5 rounded-full blur-[60px]" />

                <div className="absolute top-12 right-12 text-[#144587]/5 text-[10rem] md:text-[15rem] -z-10 select-none pointer-events-none">
                  <FaQuoteLeft />
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex gap-2 text-[#41bfab] text-lg">
                    {[...Array(testimonials[currentIndex].stars)].map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-display font-black leading-[1.2] tracking-tight text-[#144587]">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                <div className="flex items-center gap-6 relative z-10">
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-[#41bfab]/20 rounded-3xl blur-xl opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500" />
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] object-cover shadow-2xl relative z-10 border-2 border-white/50"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#144587] leading-none mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#41bfab] font-bold tracking-[0.3em] text-[10px] uppercase">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-[#41bfab]" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
