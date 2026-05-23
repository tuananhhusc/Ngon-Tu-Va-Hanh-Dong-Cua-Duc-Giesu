export default function Footer() {
  return (
    <footer id="site-footer" className="relative mt-20">
      {/* Decorative top border */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-muted to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Closing ornament */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-parchment-deeper" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-burgundy/40"
          >
            <rect x="11" y="3" width="2" height="18" rx="1" fill="currentColor" />
            <rect x="5" y="7" width="14" height="2" rx="1" fill="currentColor" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-parchment-deeper" />
        </div>

        {/* Closing message */}
        <div className="text-center space-y-4">
          <p className="font-[var(--font-display)] text-lg text-burgundy/70 italic">
            &ldquo;Lời Chúa là ngọn đèn soi cho con bước,
            <br className="hidden sm:inline" />
            <span className="sm:ml-1">là ánh sáng chỉ đường con đi.&rdquo;</span>
          </p>
          <p className="font-[var(--font-sans)] text-xs text-ink-muted tracking-wide">
            — Thánh Vịnh 119:105
          </p>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center my-8">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gold-muted/50"
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-[var(--font-sans)] text-xs text-ink-faint">
            Bài báo cáo nghiên cứu này được biên soạn nhằm phục vụ mục đích học thuật và đức tin.
          </p>
          <p className="font-[var(--font-sans)] text-xs text-ink-faint/70">
            © {new Date().getFullYear()} &middot; Mọi trích dẫn đã được ghi nguồn đầy đủ.
          </p>
          <p className="font-[var(--font-sans)] text-[10px] text-ink-faint/50 mt-4 tracking-widest uppercase">
            A.M.D.G.
          </p>
        </div>
      </div>
    </footer>
  );
}
