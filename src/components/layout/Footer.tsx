"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Premium Blueprint Architecture Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M 0 100 Q 250 50 500 100 T 1000 100"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M 0 300 Q 250 350 500 300 T 1000 300"
            stroke="currentColor"
            fill="none"
          />
          <circle cx="500" cy="500" r="400" stroke="currentColor" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-b border-white/5 pb-20 mb-12">
          {/* Brand */}
          <div>
            <div className="relative inline-block mb-10">
              <Image
                src="/logos/logol.png"
                alt="Al-Bunie Al-Asasiya Logo"
                width={200}
                height={60}
                className="brightness-0 invert opacity-100"
              />
              <motion.div
                className="absolute -top-4 -right-4 px-2 py-1 bg-primary rounded-md text-[8px] font-black uppercase tracking-[0.2em]"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Elite_Partner
              </motion.div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-10 max-w-sm font-light text-lg">
              {t("about_desc")}
            </p>

            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:-translate-y-2 shadow-xl"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Infrastructure Links */}
          <div>
            <h4 className="text-xl font-black text-white mb-10 tracking-widest uppercase">
              {t("links")}
            </h4>
            <ul className="space-y-6 text-slate-400">
              {[
                { key: "home", href: "#hero" },
                { key: "services", href: "#services" },
                { key: "testimonials", href: "#testimonials" },
                { key: "contact", href: "#contact" },
              ].map((link) => (
                <li key={link.key} className="group flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors" />
                  <a
                    href={link.href}
                    className="text-sm font-bold tracking-widest uppercase hover:text-white transition-colors"
                  >
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Command Center */}
          <div className="flex flex-col">
            <h4 className="text-xl font-black text-white mb-10 tracking-widest uppercase">
              {t("about")}
            </h4>
            <div className="space-y-6 text-slate-400 mb-12">
              <p className="font-light text-lg">{t("address")}</p>
              <div className="flex items-center gap-3 font-bold text-white tracking-widest">
                <span className="text-primary">PHN:</span> +964 770 000 0000
              </div>
              <div className="flex items-center gap-3 font-bold text-white tracking-widest">
                <span className="text-primary">EML:</span> info@albunie.com
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-auto group flex items-center gap-4 py-4 px-8 border border-white/10 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <FaArrowUp className="relative z-10 text-sm group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">
                Initialize_Return
              </span>
            </button>
          </div>
        </div>

        {/* Global Node Status Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 opacity-40">
          <div className="flex items-center gap-6 text-[9px] font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Nodes: Active (7/7)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Sys_Status: 100%</span>
            </div>
            <div className="hidden md:block h-3 w-px bg-white/20" />
            <span className="hidden md:block">Region: Global_South</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
