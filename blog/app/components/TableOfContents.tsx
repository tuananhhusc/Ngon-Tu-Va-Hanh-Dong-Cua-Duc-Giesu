"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ html }: { html: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Parse headings from the rendered HTML in the DOM
    const articleEl = document.querySelector("article");
    if (!articleEl) return;

    const elements = articleEl.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];

    elements.forEach((el) => {
      const text = el.textContent || "";
      const id = el.id; // Now relies on server-generated IDs from rehype-slug

      if (id) {
        items.push({
          id,
          text: text.replace(/^[\d.]+\s*/, ""), // Clean up numbered prefixes
          level: el.tagName === "H2" ? 2 : 3,
        });
      }
    });

    setHeadings(items);
  }, [html]);

  // Intersection Observer for active heading
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
            // Save to localStorage for Resume Reading feature
            try {
              localStorage.setItem("lastReadHeading", id);
            } catch (e) {
              // ignore
            }
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-burgundy text-white shadow-lg flex items-center justify-center hover:bg-burgundy-dark transition-colors"
        aria-label="Mục lục"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4h14v1.5H3V4zm0 5h10v1.5H3V9zm0 5h14v1.5H3V14z" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TOC sidebar */}
      <nav
        id="table-of-contents"
        className={`
          fixed z-50 transition-transform duration-300
          xl:sticky xl:top-28 xl:translate-x-0 xl:w-full xl:shrink-0
          xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto xl:bg-transparent xl:p-0 xl:shadow-none
          xl:border-r xl:border-parchment-deeper xl:pr-6
          ${
            isOpen
              ? "translate-x-0 top-0 left-0 w-80 max-w-[85vw] h-full bg-parchment shadow-2xl p-6 pt-16 overflow-y-auto"
              : "-translate-x-full xl:translate-x-0"
          }
        `}
      >
        {/* Close button for mobile */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="xl:hidden absolute top-4 right-4 p-2 text-ink-muted hover:text-burgundy"
            aria-label="Đóng mục lục"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        )}

        <div className="xl:sticky xl:top-28">
          <h4 className="font-[var(--font-display)] text-[0.7rem] uppercase tracking-[0.08em] text-gold font-bold mb-4 pl-3">
            ✦ Mục Lục
          </h4>

          <ul className="space-y-0 relative">
            {headings.map((heading) => (
              <li key={heading.id} className="relative">
                {/* Active indicator bar */}
                {activeId === heading.id && (
                  <div className="hidden xl:block absolute -right-6 top-0 bottom-0 w-[2px] bg-gold-light z-10" />
                )}
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block py-[0.4rem] font-[var(--font-body)] text-[0.95rem] leading-[1.4] transition-colors duration-200
                    ${heading.level === 3 ? "ml-4 text-[0.88rem]" : "ml-0"}
                    ${
                      activeId === heading.id
                        ? "text-burgundy font-semibold italic"
                        : "text-ink-muted hover:text-ink"
                    }
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
