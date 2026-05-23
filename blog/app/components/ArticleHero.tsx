interface ArticleHeroProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  wordCount?: number;
  readingTime?: number;
}

export default function ArticleHero({
  title,
  subtitle,
  author,
  date,
  wordCount,
  readingTime,
}: ArticleHeroProps) {
  const formattedDate = new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header
      id="article-hero"
      className="w-full relative overflow-hidden bg-[#1a1a1a] flex flex-col items-center justify-center text-center pt-20 pb-16 px-6"
    >
      {/* Background gradients exactly like reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 to-[#1a1a1a]/85 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,26,26,0.95)_100%)] z-0" />
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, var(--color-gold) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--color-gold) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 w-full max-w-[56rem] mx-auto flex flex-col items-center">
        {/* Cross Ornament */}
        <div className="text-2xl mb-4 text-gold/80 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          ✝
        </div>

        {/* Category tag & Stats */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="font-[var(--font-display)] text-[0.7rem] tracking-[0.2em] uppercase text-gold font-semibold">
            Báo Cáo Nghiên Cứu Chuyên Sâu
          </p>
          {(readingTime || wordCount) && (
            <>
              <span className="hidden sm:inline text-gold-muted/50">•</span>
              <p className="font-[var(--font-sans)] text-[0.7rem] text-parchment/60 flex items-center gap-1.5 tracking-wide">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {readingTime} phút đọc
                <span className="opacity-50 mx-1">|</span>
                {new Intl.NumberFormat('vi-VN').format(wordCount || 0)} từ
              </p>
            </>
          )}
        </div>

        {/* Title */}
        <h1
          className="font-[var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-parchment leading-[1.25] tracking-[0.02em] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {title}
        </h1>

        {/* Ornamental Divider */}
        <div className="text-gold-muted text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          ✦
        </div>

        {/* Subtitle */}
        <p
          className="font-[var(--font-body)] text-[clamp(1rem,2.5vw,1.2rem)] italic text-parchment/80 leading-[1.6] max-w-[36rem] mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}
