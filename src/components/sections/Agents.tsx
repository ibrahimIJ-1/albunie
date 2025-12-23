"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaProjectDiagram,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaSignal,
  FaLock,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    province: "Baghdad",
    projects: 124,
    team: 45,
    phone: "+964 770 123 4567",
    status: "OPTIMAL",
    sig: "0xBAG-77",
  },
  {
    id: 2,
    province: "Basra",
    projects: 82,
    team: 28,
    phone: "+964 770 234 5678",
    status: "ACTIVE",
    sig: "0xBAS-32",
  },
  {
    id: 3,
    province: "Erbil",
    projects: 95,
    team: 32,
    phone: "+964 770 345 6789",
    status: "SYNCED",
    sig: "0xERB-09",
  },
  {
    id: 4,
    province: "Najaf",
    projects: 67,
    team: 22,
    phone: "+964 770 456 7890",
    status: "OPTIMAL",
    sig: "0xNAJ-44",
  },
  {
    id: 5,
    province: "Mosul",
    projects: 54,
    team: 18,
    phone: "+964 770 567 8901",
    status: "SECURE",
    sig: "0xMOS-11",
  },
  {
    id: 6,
    province: "Karbala",
    projects: 73,
    team: 25,
    phone: "+964 770 678 9012",
    status: "ACTIVE",
    sig: "0xKAR-88",
  },
];

export default function Agents() {
  const t = useTranslations("Agents");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="agents"
      className="py-20 md:py-40 bg-[#0a192f] text-white relative overflow-hidden flex flex-col items-center"
    >
      {/* Background Strategic Floor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <pattern
            id="grid-dots"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full mb-20">
        {/* Header - Technical Alignment */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#41bfab]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#41bfab]">
                Regional Command Matrix
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black font-display mb-10 leading-none tracking-tighter">
              {t("title")}
              <span className="text-[#41bfab]">.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* The Monolithic Array */}
      <div className="w-full h-[600px] md:h-[750px] flex flex-col md:flex-row gap-2 md:gap-4 px-4 md:px-12 max-w-[1920px]">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            className="relative flex-grow h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[4rem] overflow-hidden group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            animate={{
              flexGrow: hoveredId === agent.id ? 15 : 1,
              backgroundColor:
                hoveredId === agent.id
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.03)",
            }}
            onMouseEnter={() => setHoveredId(agent.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Vertical Name - Shown when collapsed */}
            <AnimatePresence>
              {hoveredId !== agent.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                >
                  <div className="text-[10px] font-mono text-[#41bfab]/60 mb-8 tracking-widest uppercase rotate-90 md:rotate-0">
                    LOC_00{agent.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/20 origin-center whitespace-nowrap rotate-90 md:-rotate-90">
                    {agent.province}
                  </h3>
                  <div className="mt-auto">
                    <div className="w-1 h-1 rounded-full bg-[#41bfab]/40 animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content Display - Shown when expanded */}
            <AnimatePresence>
              {hoveredId === agent.id && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 }}
                  className="w-full h-full flex flex-col justify-between p-8 md:p-16"
                >
                  {/* Top: Branding & ID */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-sm bg-[#41bfab] animate-[spin_4s_linear_infinite]" />
                        <span className="text-[#41bfab] text-xs font-mono tracking-widest">
                          STATUS: {agent.status}
                        </span>
                      </div>
                      <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
                        {agent.province}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#41bfab] tracking-widest mb-1 italic">
                        SEC_SIG: {agent.sig}
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <FaGlobeAmericas className="text-[#41bfab] text-xs" />
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                          NODE_REGISTRY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Tactical Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl">
                    <div className="p-6 bg-white/[0.05] border border-white/5 rounded-[2rem] group/item hover:bg-white/[0.1] transition-colors">
                      <div className="text-[#41bfab] text-[10px] font-mono mb-4 flex items-center gap-2">
                        <FaUsers /> PERSONNEL
                      </div>
                      <div className="text-3xl md:text-4xl font-black tracking-tighter">
                        {agent.team}
                      </div>
                      <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">
                        Expert_Staff
                      </div>
                    </div>
                    <div className="p-6 bg-white/[0.05] border border-white/5 rounded-[2rem] group/item hover:bg-white/[0.1] transition-colors">
                      <div className="text-[#41bfab] text-[10px] font-mono mb-4 flex items-center gap-2">
                        <FaProjectDiagram /> PROJECTS
                      </div>
                      <div className="text-3xl md:text-4xl font-black tracking-tighter">
                        {agent.projects}
                      </div>
                      <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">
                        Active_Deployment
                      </div>
                    </div>
                    <div className="p-6 bg-white/[0.05] border border-white/5 rounded-[2rem] group/item hover:bg-white/[0.1] transition-colors">
                      <div className="text-[#41bfab] text-[10px] font-mono mb-4 flex items-center gap-2">
                        <FaSignal /> UPTIME
                      </div>
                      <div className="text-3xl md:text-4xl font-black tracking-tighter text-[#41bfab]">
                        99.9%
                      </div>
                      <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">
                        Network_Vitality
                      </div>
                    </div>
                    <div className="p-6 bg-white/[0.05] border border-white/5 rounded-[2rem] group/item hover:bg-white/[0.1] transition-colors">
                      <div className="text-[#41bfab] text-[10px] font-mono mb-4 flex items-center gap-2">
                        <FaLock /> SYSTEM
                      </div>
                      <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
                        Optimal
                      </div>
                      <div className="text-[8px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold">
                        Firewall_Active
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Action Uplink */}
                  <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
                    <p className="max-w-xl text-slate-400 text-lg leading-relaxed italic">
                      "Strategic command pillar serving the {agent.province}{" "}
                      region with structural reliability and technical mastery."
                    </p>
                    <a
                      href={`tel:${agent.phone}`}
                      className="relative px-12 py-6 bg-[#41bfab] text-[#0a192f] font-black rounded-full overflow-hidden group/btn hover:shadow-[0_20px_40px_rgba(65,191,171,0.3)] transition-all whitespace-nowrap"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaPhoneAlt />
                        ESTABLISH_UPLINK
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glow Decorative Background (Only visible when expanded) */}
            <div
              className={`absolute -bottom-20 -right-20 w-80 h-80 bg-[#41bfab]/10 rounded-full blur-[100px] transition-opacity duration-1000 ${hoveredId === agent.id ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Strategic Footer Decor */}
      <div className="mt-20 flex gap-12 text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">
        <span>// Global_Network_Active</span>
        <span>// Regional_Pillars: 06</span>
        <span>// Sync_Status: verified</span>
      </div>
    </section>
  );
}
