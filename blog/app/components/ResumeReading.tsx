"use client";

import { useEffect, useState } from "react";

export default function ResumeReading() {
  const [lastHeading, setLastHeading] = useState<string | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const heading = localStorage.getItem("lastReadHeading");
      if (heading) {
        setLastHeading(heading);
        setShowBanner(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  if (!showBanner || !lastHeading) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-parchment-deeper border border-gold/30 shadow-xl rounded-full px-6 py-3 flex items-center gap-4">
        <span className="text-sm font-[var(--font-sans)] text-ink whitespace-nowrap hidden sm:inline">
          Tiếp tục phần đang đọc?
        </span>
        <a
          href={`#${lastHeading}`}
          onClick={() => setShowBanner(false)}
          className="text-sm font-semibold text-burgundy dark:text-gold hover:underline whitespace-nowrap"
        >
          Đọc tiếp
        </a>
        <button
          onClick={() => setShowBanner(false)}
          className="ml-2 text-ink-muted hover:text-ink p-1"
          aria-label="Đóng"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
  );
}
