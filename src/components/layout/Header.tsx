"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import clsx from "clsx";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    alert(
      `Language switching to ${newLocale} - Implement via state/cookie in production`
    );
  };

  const navLinks = [
    { key: "home", href: `#hero` },
    { key: "services", href: `#services` },
    { key: "testimonials", href: `#testimonials` },
    { key: "contact", href: `#contact` },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative">
            <Image
              src="/logos/logol.png"
              alt="Al-Bunie Al-Asasiya Logo"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"
              />
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-primary transition-colors relative group"
            >
              {t(link.key)}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Premium Hardware-Style Switcher */}
          <div className="h-8 w-px bg-slate-200 mx-2" />

          <button
            onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
            className="group relative flex items-center gap-3 px-5 py-2.5 bg-slate-900 rounded-full overflow-hidden transition-all hover:pr-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <FiGlobe className="relative z-10 text-white text-sm" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-white">
              {locale === "en" ? "العربية" : "English"}
            </span>
            <motion.span
              className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white z-50 relative shadow-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black text-slate-900 hover:text-primary transition-colors tracking-tighter"
              >
                {t(link.key)}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                switchLocale(locale === "en" ? "ar" : "en");
                setMobileMenuOpen(false);
              }}
              className="mt-12 flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs"
            >
              <FiGlobe />
              {locale === "en" ? "العربية" : "English"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
