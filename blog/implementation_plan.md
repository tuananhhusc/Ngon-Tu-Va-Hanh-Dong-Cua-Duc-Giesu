# Kế Hoạch Nâng Cấp Tối Ưu & Hoàn Thiện Trang Web Học Thuật

Mục tiêu: Áp dụng các đề xuất tối ưu hóa về hiệu năng, trải nghiệm người dùng (UX) và SEO cho trang web dựa trên Next.js (Tailwind CSS v4).

## User Review Required

> [!IMPORTANT]
> Quá trình triển khai sẽ thực hiện việc cài đặt một số thư viện hỗ trợ như `next-themes` (cho Dark Mode), `lucide-react` (cho Icon điều khiển), và các bộ plugin xử lý Markdown hiện đại (`remark-rehype`, `rehype-slug`, `rehype-stringify`) để thay thế cho `remark-html` (đã cũ và không hỗ trợ tạo ID tự động).
> Giao diện Dark mode sẽ sử dụng tông màu Đen gỗ mun (Ebony) kết hợp với chữ sáng màu để giữ nét cổ điển.

## Open Questions

Không có câu hỏi mở, nếu bạn đồng ý với kế hoạch, chúng ta sẽ bắt đầu.

## Proposed Changes

---

### Cấu Hình & Dependencies

Cài đặt thêm các gói thư viện cần thiết.

#### [MODIFY] package.json
- Thêm `next-themes` (Quản lý Dark Mode).
- Thêm `lucide-react` (Icon cho các nút bấm UX).
- Thêm `remark-rehype`, `rehype-slug`, `rehype-stringify` (Thay thế cho `remark-html`).

---

### Xử Lý Markdown & Tính Toán Dữ Liệu

Nâng cấp bộ xử lý để tự động tạo ID cho thẻ tiêu đề và tính toán thời gian đọc.

#### [MODIFY] lib/markdown.ts
- Chuyển pipeline xử lý từ `remark() -> remarkHtml` sang hệ thống thống nhất `unified() -> remarkParse -> remarkGfm -> remarkRehype -> rehypeSlug -> rehypeStringify`. Điều này giúp tự động gán thuộc tính `id` cho các thẻ `<h2>`, `<h3>` chuẩn Server-side.
- Thêm logic đếm số lượng từ (`wordCount`) và thời gian đọc dự kiến (`readingTime`), lưu vào cấu trúc `ArticleData`.

---

### Giao Diện Dành Cho Người Dùng & UX

Thêm các chức năng điều khiển chuyên sâu.

#### [NEW] app/components/UXControls.tsx
- Tạo component chứa các nút tương tác dính (sticky) ở góc màn hình: Dark/Light Mode toggle, Chuyển font chữ (Serif/Sans-serif), Phóng to/Thu nhỏ cỡ chữ (A+/A-), và Nút cuộn lên đầu trang (Back to Top).

#### [NEW] app/components/ResumeReading.tsx
- Component nhỏ gọn hiện một popup/banner "Bạn muốn đọc tiếp phần..." nếu phát hiện lịch sử đọc cũ trong `localStorage`.

#### [MODIFY] app/components/TableOfContents.tsx
- Do HTML đã có sẵn `id` từ server, TOC không cần tự tạo `id` bằng JS nữa. Chỉ cần lắng nghe sự kiện Intersection Observer và cập nhật lưu trữ (lưu `id` vào `localStorage` phục vụ cho việc "Đọc tiếp").

#### [MODIFY] app/components/ArticleHero.tsx
- Cập nhật hiển thị thời gian đọc dự kiến và số lượng từ đã được tính toán từ `lib/markdown.ts`.

#### [MODIFY] app/page.tsx
- Nhúng `UXControls` và `ResumeReading` vào layout.
- Thêm đoạn mã JSON-LD `<script type="application/ld+json">` chứa metadata SEO dạng `ScholarlyArticle`.

---

### Kiến Trúc Giao Diện (Layout) & Styles

Đưa các thiết lập Font chữ tối ưu và Dark mode vào hệ thống.

#### [MODIFY] app/layout.tsx
- Import `next/font/google` (`Newsreader`, `Lora`, `Inter`) và truyền biến CSS (variable) vào thẻ `<body>`.
- Bọc toàn bộ ứng dụng bằng thẻ `<ThemeProvider>` của `next-themes`.

#### [MODIFY] app/globals.css
- Gỡ bỏ dòng `@import url(...)` Google Fonts.
- Bổ sung cấu trúc định nghĩa các biến CSS màu sắc cho Dark Mode (`[data-theme='dark']`) với tông Ebony.
- Thêm rule CSS `@media print` giúp ẩn các menu, header, TOC khi người dùng in ấn ra tài liệu A4.

## Verification Plan

### Automated Tests
- Chạy `npm run build` để đảm bảo hệ thống render thành công các plugin remark/rehype mới và không có lỗi TypeScript.
- Chạy `npm run dev` để phục vụ xác minh thủ công.

### Manual Verification
- Kiểm tra mã nguồn (View Source) trang chủ để đảm bảo các thẻ `<h2>`, `<h3>` đã được gán sẵn `id` từ server.
- Mở bảng điểu khiển tùy chỉnh: Thay đổi dark mode, font chữ, kích cỡ chữ và cuộn trang.
- Cuộn xuống giữa bài viết, refresh trang để xem banner "Đọc tiếp" có xuất hiện và hoạt động đúng không.
- Nhấn `Ctrl + P` (hoặc Cmd + P) để kiểm tra giao diện bản in.
