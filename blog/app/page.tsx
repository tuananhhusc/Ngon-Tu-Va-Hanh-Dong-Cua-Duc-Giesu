import { getArticleData } from "@/lib/markdown";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadingProgress from "./components/ReadingProgress";
import MarkdownRenderer from "./components/MarkdownRenderer";
import ArticleHero from "./components/ArticleHero";
import UXControls from "./components/UXControls";
import ResumeReading from "./components/ResumeReading";

export default async function Home() {
  const article = await getArticleData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": article.title,
    "alternativeHeadline": article.subtitle,
    "author": [{
      "@type": "Person",
      "name": article.author
    }],
    "datePublished": article.date,
    "wordCount": article.wordCount,
    "inLanguage": "vi-VN"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <Header />
      <UXControls />
      <ResumeReading />

      <main id="main-content" className="flex-1 w-full flex flex-col">
        <ArticleHero
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          wordCount={article.wordCount}
          readingTime={article.readingTime}
        />
        
        <MarkdownRenderer
          contentHtml={article.contentHtml}
        />
      </main>

      <Footer />
    </>
  );
}
