import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

export interface ArticleData {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  contentHtml: string;
  wordCount: number;
  readingTime: number;
}

export async function getArticleData(): Promise<ArticleData> {
  const filePath = path.join(process.cwd(), "content", "ngontu.md");
  const fileContents = fs.readFileSync(filePath, "utf8").normalize("NFC");

  // Parse frontmatter
  const { data, content } = matter(fileContents);

  // Calculate word count and reading time (approx 225 words per minute)
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225);

  // Process markdown to HTML with GFM and auto-slug for headings
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    title: data.title || "Untitled",
    subtitle: data.subtitle || "",
    author: data.author || "Anonymous",
    date: data.date || new Date().toISOString(),
    contentHtml,
    wordCount,
    readingTime,
  };
}
