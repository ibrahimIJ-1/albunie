"use client";

import { motion } from "framer-motion";

interface WaterMorphProps {
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
}

export default function WaterMorph({
  className = "",
  colorPrimary = "#1e3a8a",
  colorSecondary = "#10b981",
}: WaterMorphProps) {
  return (
    <div
      className={`relative overflow-hidden pointer-events-none ${className}`}
    >
      {/* Gooey Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Animated Liquid Blobs */}
      <div className="absolute inset-0 filter-[url(#goo)] opacity-30">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: colorPrimary }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: colorSecondary }}
          animate={{
            x: [0, -300, 150, 0],
            y: [0, 200, -150, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, -120, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-3xl opacity-50"
          style={{ backgroundColor: "#3b82f6" }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
