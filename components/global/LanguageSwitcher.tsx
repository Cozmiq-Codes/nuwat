"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n";
import { motion } from "framer-motion";

/* ── Inline Flag SVGs ─────────────────────────────────────────────── */

const USFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7410 3900"
    className="w-5 h-3.5 rounded-[2px] shrink-0"
  >
    <rect width="7410" height="3900" fill="#B22234" />
    <path
      d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410"
      stroke="#FFF"
      strokeWidth="300"
    />
    <rect width="2964" height="2100" fill="#3C3B6E" />
    <g fill="#FFF">
      {/* Row 1 – 6 stars */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`r1-${i}`} cx={247 + i * 494} cy={175} r={60} />
      ))}
      {/* Row 2 – 5 stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`r2-${i}`} cx={494 + i * 494} cy={525} r={60} />
      ))}
      {/* Row 3 – 6 stars */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`r3-${i}`} cx={247 + i * 494} cy={875} r={60} />
      ))}
      {/* Row 4 – 5 stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`r4-${i}`} cx={494 + i * 494} cy={1225} r={60} />
      ))}
      {/* Row 5 – 6 stars */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`r5-${i}`} cx={247 + i * 494} cy={1575} r={60} />
      ))}
      {/* Row 6 – 5 stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`r6-${i}`} cx={494 + i * 494} cy={1925} r={60} />
      ))}
    </g>
  </svg>
);

const SAFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    className="w-5 h-3.5 rounded-[2px] shrink-0"
  >
    <rect width="900" height="600" fill="#006C35" />
    {/* Simplified shahada / sword representation */}
    <g fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round">
      {/* Sword blade */}
      <line x1="250" y1="420" x2="650" y2="420" />
      <line x1="650" y1="420" x2="670" y2="400" />
      {/* Sword guard */}
      <line x1="280" y1="400" x2="280" y2="440" />
      {/* Shahada text stylised */}
      <path d="M300,250 Q320,200 360,220 Q400,240 420,200 Q440,160 480,200 Q520,240 560,220 Q600,200 620,250" />
      <path d="M340,290 Q380,270 420,290 Q460,310 500,290 Q540,270 580,290" />
      <line x1="450" y1="200" x2="450" y2="160" />
      <line x1="350" y1="220" x2="350" y2="180" />
      <line x1="550" y1="220" x2="550" y2="180" />
    </g>
  </svg>
);

/* ── Language Config ──────────────────────────────────────────────── */

const localeConfig: Record<Locale, { flag: React.ReactNode; label: string }> = {
  en: { flag: <USFlag />, label: "EN" },
  ar: { flag: <SAFlag />, label: "AR" },
};

/* ── Component ────────────────────────────────────────────────────── */

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    (pathname?.split("/")[1] as Locale) || i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleSwitch = (locale: Locale) => {
    if (locale === currentLocale) return;
    router.push(redirectedPathName(locale), { scroll: false });
  };

  return (
    <div
      className="relative flex items-center gap-0.5 rounded-full bg-white/5 border border-white/10 p-1"
      role="radiogroup"
      aria-label="Select Language"
    >
      {i18n.locales.map((locale) => {
        const isActive = locale === currentLocale;
        const config = localeConfig[locale];

        return (
          <button
            key={locale}
            onClick={() => handleSwitch(locale)}
            className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm cursor-pointer transition-colors duration-200"
            style={{
              color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
              fontWeight: isActive ? 500 : 400,
            }}
            role="radio"
            aria-checked={isActive}
            aria-label={locale === "en" ? "English" : "العربية"}
          >
            {/* Sliding pill background */}
            {isActive && (
              <motion.div
                layoutId="active-lang"
                className="absolute inset-0 rounded-full bg-white/10"
                style={{ zIndex: -1 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
              />
            )}

            {config.flag}
            <span>{config.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
