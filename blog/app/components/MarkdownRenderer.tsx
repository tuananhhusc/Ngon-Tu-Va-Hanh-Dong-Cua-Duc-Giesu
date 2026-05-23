"use client";

import TableOfContents from "./TableOfContents";

interface MarkdownRendererProps {
  contentHtml: string;
}

export default function MarkdownRenderer({
  contentHtml,
}: MarkdownRendererProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 flex flex-col xl:grid xl:grid-cols-[260px_1fr] gap-8 xl:gap-12 items-start relative">
      {/* Table of Contents */}
      <TableOfContents html={contentHtml} />

      {/* Article Content Container */}
      <div className="flex-1 min-w-0 w-full">
        <article
          className="prose lg:prose-lg xl:prose-xl w-full max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}
