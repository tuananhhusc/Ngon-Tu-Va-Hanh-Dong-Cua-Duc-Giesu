# Báo Cáo Nghiên Cứu Thần Học & Lịch Sử — Ngôn Từ Và Hành Động Của Đức Giê-su

Dự án này là một nền tảng Web học thuật/Báo cáo nghiên cứu chuyên sâu được xây dựng bằng **Next.js (App Router)**, **Tailwind CSS v4** và **Markdown**. Website được thiết kế với phong cách cổ điển, sang trọng phù hợp với các ấn phẩm nghiên cứu thần học, kinh điển và lịch sử.

---

## ✦ Các Tính Năng Nổi Bật

### 1. Phong Cách Thiết Kế Học Thuật Cao Cấp (Sacred & Academic Aesthetic)
- **Bảng màu tinh tế**: Sử dụng các tông màu cổ điển bao gồm màu giấy da (`Parchment`), màu đỏ rượu vang (`Burgundy`), màu vàng kim (`Gold`), và màu mực (`Ink`).
- **Typography chuyên nghiệp**: Kết hợp hài hòa giữa các phông chữ Serif cổ điển (`Newsreader` cho tiêu đề và `Lora` cho nội dung) cùng phông chữ Sans-serif hiện đại (`Inter`) được tối ưu hóa tải trực tiếp từ máy chủ (loại bỏ hiện tượng giật layout CLS).
- **Giao diện Tối (Dark Mode)**: Giao diện tối chuyên biệt mang phong cách "Ebony/Charcoal" dịu nhẹ, hạn chế mỏi mắt cho độc giả khi đọc tài liệu dài vào ban đêm.
- **Hỗ trợ In ấn (Print Stylesheet)**: Hỗ trợ nhấn `Ctrl + P` (hoặc `Cmd + P` trên Mac) để in bài viết hoặc xuất file PDF một cách sạch đẹp (tự động ẩn thanh điều hướng, menu cài đặt, mục lục và chuyển nền về trắng chữ đen chuẩn A4).

### 2. Bộ Công Cụ Trải Nghiệm Độc Giả (UX Controls)
*Nằm gọn ở góc dưới bên phải màn hình dưới dạng một nút cài đặt nổi ⚙️.*
- **Đổi giao diện**: Chuyển đổi nhanh chóng giữa chế độ Sáng và Tối.
- **Tùy chỉnh cỡ chữ**: Phóng to hoặc thu nhỏ cỡ chữ đọc bài một cách an toàn (giới hạn từ `12px` đến `26px` để tránh vỡ giao diện).
- **Đổi phông chữ**: Chuyển đổi linh hoạt toàn bộ phông chữ trên trang từ Serif (có chân) sang Sans-serif (không chân) để tăng độ rõ nét trên các màn hình di động nhỏ.
- **Cuộn nhanh lên đầu trang**: Nút bấm tự động xuất hiện khi độc giả cuộn sâu xuống bài viết.

### 3. Mục Lục Động & Khôi Phục Vị Trí Đọc (Resume Reading)
- **Thanh Mục lục thông minh (Table of Contents)**: Tự động phân tích các thẻ tiêu đề `<h2>` và `<h3>` từ bài viết để dựng mục lục ở cột bên trái (tự động ẩn và hiển thị dạng trượt từ bên trái trên thiết bị di động).
- **Theo dõi tiến trình**: Theo dõi vị trí đang đọc thực tế bằng `IntersectionObserver`, làm nổi bật mục tương ứng trên thanh mục lục.
- **Khôi phục vị trí đọc cũ**: Tự động lưu mục đang đọc gần nhất vào trình duyệt. Khi độc giả quay lại trang web, một banner sẽ xuất hiện hỏi **"Tiếp tục phần đang đọc?"**, giúp họ nhảy ngay đến đoạn đang đọc dở chỉ bằng một cú click.

### 4. Tối Ưu Hóa SEO & Mạng Xã Hội (Open Graph)
- **Dữ liệu cấu trúc JSON-LD**: Tích hợp Schema `ScholarlyArticle` chuẩn mực để các công cụ tìm kiếm của Google nhận dạng và xếp hạng đây là một công trình nghiên cứu khoa học thần học nghiêm túc.
- **Open Graph & Twitter Cards**: Tích hợp đầy đủ metadata và hình ảnh đại diện được thiết kế riêng (`public/og-image.png` thể hiện cuốn Kinh Thánh da cổ, thánh giá đồng và ngọn nến lung linh) giúp bài viết hiển thị hoàn mỹ khi chia sẻ lên Facebook, Zalo, X/Twitter, iMessage...

### 5. Chuẩn Hóa Thuật Ngữ Công Giáo
Toàn bộ văn bản và thuật ngữ trong báo cáo nghiên cứu đã được rà soát và chuẩn hóa theo văn phong Công giáo Việt Nam (sử dụng bản dịch Kinh Thánh của Nhóm Phiên dịch Các Giờ Kinh Phụng Vụ và các hiến chế Tòa Thánh).

---

## 📁 Cấu Trúc Mã Nguồn

```text
blog/
├── app/
│   ├── components/            # Các thành phần giao diện React
│   │   ├── ArticleHero.tsx    # Khu vực ảnh bìa, tiêu đề và thông tin bài viết
│   │   ├── Header.tsx         # Thanh điều hướng đầu trang (Logo và Tiêu hiệu)
│   │   ├── Footer.tsx         # Chân trang (Thông tin bản quyền và trích dẫn Kinh Thánh)
│   │   ├── MarkdownRenderer.tsx # Bộ render nội dung HTML từ markdown
│   │   ├── TableOfContents.tsx # Thanh mục lục động (sidebar/mobile drawer)
│   │   ├── ReadingProgress.tsx # Thanh tiến trình đọc chạy ở sát mép trên trang
│   │   ├── UXControls.tsx     # Bộ nút nổi cài đặt (Theme, Font, Size, ScrollTop)
│   │   └── ResumeReading.tsx  # Banner khôi phục vị trí đọc từ localStorage
│   ├── globals.css            # CSS cốt lõi, biến màu sắc, animations và media queries
│   ├── layout.tsx             # Bố cục chính, Google Fonts, Providers và cấu hình SEO Metadata
│   └── page.tsx               # Trang chủ chính, load nội dung bài viết và Schema JSON-LD
├── content/
│   └── ngontu.md              # File nội dung bài viết định dạng Markdown (được parse tự động)
├── lib/
│   └── markdown.ts            # Thư viện đọc file markdown, tính toán thời gian đọc và parse sang HTML
└── public/
    ├── favicon.ico            # Biểu tượng website trên trình duyệt
    └── og-image.png           # Ảnh bìa đại diện khi chia sẻ lên mạng xã hội
```

---

## 🛠 Hướng Dẫn Vận Hành & Phát Triển

### Yêu cầu hệ thống
- Máy tính đã cài đặt **Node.js** (Phiên bản khuyến nghị: LTS 18 hoặc mới hơn).

### Bước 1: Cài đặt tài nguyên
Mở thư mục `blog` trong Terminal (Command Prompt hoặc PowerShell) và chạy lệnh:
```bash
npm install
```

### Bước 2: Chạy máy chủ phát triển
Khởi động server chạy thử trên máy tính của bạn:
```bash
npm run dev
```
Sau đó, truy cập vào đường dẫn [http://localhost:3000](http://localhost:3000) trên trình duyệt để kiểm tra giao diện.

### Bước 3: Biên dịch sản phẩm (Production Build)
Để biên dịch tối ưu hóa và xuất bản trang web tĩnh hoàn chỉnh:
```bash
npm run build
```

---

## ✍ Hướng Dẫn Chỉnh Sửa Nội Dung Bài Viết

Để cập nhật nội dung bài báo cáo nghiên cứu, bạn chỉ cần mở file Markdown tại đường dẫn:
`blog/content/ngontu.md`

Tại đây, bạn có thể chỉnh sửa:
1. **Thông tin tiêu đề (Frontmatter)**:
   ```yaml
   ---
   title: "Ngôn Từ Và Hành Động Của Đức Giê-su"
   subtitle: "Phân Tích Chuyên Sâu Về Giá Trị Lịch Sử, Chiều Kích Thần Học Của Lời Giảng, Phép Lạ Và Vấn Đề Ma Quỷ"
   author: "Nghiên Cứu Thần Học & Lịch Sử"
   date: "2026-05-21"
   ---
   ```
2. **Nội dung bài viết**: Viết bằng định dạng Markdown tiêu chuẩn. Next.js sẽ tự động tính toán lại số lượng từ, thời gian đọc, tự tạo thuộc tính ID cho các thẻ `<h2>`, `<h3>` để cập nhật lên Mục lục mà bạn không cần phải cấu hình thủ công.
