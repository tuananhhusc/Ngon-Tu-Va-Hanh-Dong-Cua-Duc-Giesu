import type { Metadata } from "next";
import { Newsreader, Lora, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS
      ? 'https://tuananhhusc.github.io/Ngon-Tu-Va-Hanh-Dong-Cua-Duc-Giesu'
      : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
  ),
  title: "Ngôn Từ Và Hành Động Của Đức Giê-su — Nghiên Cứu Thần Học & Lịch Sử",
  description:
    "Phân tích chuyên sâu về giá trị lịch sử, chiều kích thần học của lời giảng, phép lạ và vấn đề ma quỷ trong bối cảnh Palestine thế kỷ thứ nhất.",
  keywords: [
    "Đức Giê-su",
    "thần học",
    "lịch sử",
    "phép lạ",
    "trừ quỷ",
    "Vương quốc Thiên Chúa",
    "Công giáo",
    "nghiên cứu Kinh Thánh",
  ],
  authors: [{ name: "Nghiên Cứu Thần Học & Lịch Sử" }],
  openGraph: {
    title: "Ngôn Từ Và Hành Động Của Đức Giê-su",
    description:
      "Phân tích chuyên sâu về giá trị lịch sử, chiều kích thần học của lời giảng, phép lạ và vấn đề ma quỷ trong bối cảnh Palestine thế kỷ thứ nhất.",
    type: "article",
    locale: "vi_VN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ngôn Từ Và Hành Động Của Đức Giê-su — Nghiên Cứu Thần Học & Lịch Sử",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngôn Từ Và Hành Động Của Đức Giê-su",
    description:
      "Phân tích chuyên sâu về giá trị lịch sử, chiều kích thần học của lời giảng, phép lạ và vấn đề ma quỷ trong bối cảnh Palestine thế kỷ thứ nhất.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${newsreader.variable} ${lora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative z-10 transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
