"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Cross icon + Title */}
        <div className="flex items-center gap-3">
          {/* Sacred Cross SVG */}
          <div
            className={`transition-all duration-500 ${
              scrolled ? "opacity-100 scale-100" : "opacity-60 scale-95"
            }`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-burgundy"
              aria-label="Biểu tượng Thánh Giá"
            >
              {/* Ornamental cross */}
              <rect x="14" y="2" width="4" height="28" rx="1" fill="currentColor" opacity="0.85" />
              <rect x="6" y="9" width="20" height="4" rx="1" fill="currentColor" opacity="0.85" />
              {/* Center jewel */}
              <circle cx="16" cy="11" r="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <circle cx="16" cy="11" r="1" fill="currentColor" opacity="0.6" />
              {/* Top decorative finial */}
              <circle cx="16" cy="3.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
              {/* Bottom decorative element */}
              <path d="M14 28 L16 31 L18 28" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span
              className={`font-[var(--font-display)] font-bold tracking-tight transition-all duration-500 ${
                scrolled
                  ? "text-sm text-burgundy"
                  : "text-base text-burgundy/80"
              }`}
            >
              Báo Cáo Nghiên Cứu Chuyên Sâu
            </span>
          </div>
        </div>

        {/* Right: subtle decorative element */}
        <div
          className={`hidden sm:flex items-center gap-2 text-ink-faint font-[var(--font-sans)] text-xs transition-opacity duration-500 ${
            scrolled ? "opacity-70" : "opacity-40"
          }`}
        >
          <span className="italic">Ad Maiorem Dei Gloriam</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="text-gold"
          >
            <path
              d="M8 1 L9.5 6 L15 6 L10.5 9.5 L12 15 L8 11.5 L4 15 L5.5 9.5 L1 6 L6.5 6 Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
