"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Settings, Moon, Sun, Type, ArrowUp } from "lucide-react";

export default function UXControls() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeFontSize = (delta: number) => {
    const html = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(html).fontSize);
    const newSize = currentSize + delta;
    if (newSize >= 12 && newSize <= 26) {
      html.style.fontSize = `${newSize}px`;
    }
  };

  const toggleFontFamily = () => {
    document.documentElement.classList.toggle("font-sans-mode");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-parchment-deeper border border-gold/20 text-ink shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition-all animate-fade-in-up"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp size={20} />
          </button>
        )}
        
        <div className="relative">
          {isOpen && (
            <div className="absolute bottom-16 right-0 bg-parchment-dark border border-gold/30 rounded-xl shadow-2xl p-4 flex flex-col gap-3 min-w-[160px] animate-fade-in-up mb-2">
              <button onClick={toggleTheme} className="flex items-center gap-3 text-sm text-ink hover:text-burgundy w-full text-left">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                Giao diện {theme === "dark" ? "sáng" : "tối"}
              </button>
              <hr className="border-gold/10" />
              <div className="flex items-center justify-between gap-2 text-ink">
                <button onClick={() => changeFontSize(-1)} className="p-2 bg-parchment-deeper rounded hover:text-burgundy" title="Thu nhỏ chữ">A-</button>
                <span className="text-xs">Cỡ chữ</span>
                <button onClick={() => changeFontSize(1)} className="p-2 bg-parchment-deeper rounded hover:text-burgundy" title="Phóng to chữ">A+</button>
              </div>
              <button onClick={toggleFontFamily} className="flex items-center gap-3 text-sm text-ink hover:text-burgundy w-full text-left mt-2">
                <Type size={16} />
                Đổi Font
              </button>
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-full bg-burgundy text-white shadow-xl flex items-center justify-center hover:bg-burgundy-dark transition-all"
            aria-label="Cài đặt giao diện"
          >
            <Settings size={20} className={isOpen ? "rotate-90 transition-transform" : "transition-transform"} />
          </button>
        </div>
      </div>
    </>
  );
}
