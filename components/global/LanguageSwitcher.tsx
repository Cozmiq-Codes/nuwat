"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentLocale =
    (pathname?.split("/")[1] as Locale) || i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSwitch = (locale: Locale) => {
    router.push(redirectedPathName(locale));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const languageNames: Record<Locale, string> = {
    en: "English",
    ar: "العربية",
  };

  return (
    <div
      ref={containerRef}
      className="relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-6 py-2.5"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="capitalize">{languageNames[currentLocale]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-40 p-1.5 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
            role="listbox"
          >
            {i18n.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleSwitch(locale)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                  currentLocale === locale
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                role="option"
                aria-selected={currentLocale === locale}
              >
                <div className="flex items-center gap-3">
                  <span className="uppercase">{locale}</span>
                  <span className="text-xs opacity-50 font-normal">
                    {languageNames[locale]}
                  </span>
                </div>
                {currentLocale === locale && (
                  <motion.div
                    layoutId="activeLocale"
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
