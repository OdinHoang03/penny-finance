# Prompt — Cinematic 3-Section Landing (Penny)

Đây là prompt đã dựng ra **Penny** — bắt nguồn từ prompt gốc "Prisma" (creative studio),
được tổng quát hoá thành template tái sử dụng và **đổi theme** sang một landing sản phẩm.
Phần kỹ thuật giữ **nguyên văn**; chỉ `[PLACEHOLDER]` là chỗ cần điền.

> **Khác biệt quan trọng so với prompt gốc:** prompt Prisma dùng **Almarai + Instrument Serif** —
> cả hai **không có subset `vietnamese`**, nên dấu tiếng Việt (ế, ữ, ậ, ầ, ă…) bị rớt font giữa
> chữ → vỡ. Template này đã thay bằng **Inter + Playfair Display** (đủ tiếng Việt). Xem ⚠️ ở mục FONTS.

---

## PROMPT (copy toàn bộ phần dưới, điền `[PLACEHOLDER]`)

```
Create a React + Vite + TypeScript + Tailwind CSS landing page for [BRAND] — [ONE_LINE_POSITIONING].
The page has 3 sections: Hero, [SECTION_2_NAME], and Features. Use framer-motion for animations
and lucide-react for icons. The design is dark, moody, and cinematic with a warm cream palette.

=== FONTS ===
Load two Google Fonts in index.html:
- Inter (weights 300;400;500;600;700) — global default body font
- Playfair Display (load italic, ital,wght@0,400..600;1,400..600) — elegant editorial serif for
  italic accent text and large display headings
In index.css set the global font: * { font-family: 'Inter', -apple-system, BlinkMacSystemFont,
'Segoe UI', 'Roboto', sans-serif; }
In tailwind.config.js extend fontFamily.serif = ['"Playfair Display"', 'serif'].
⚠️ VIETNAMESE: nội dung là tiếng Việt, nên MỌI font phải có subset `vietnamese` trên Google Fonts.
KHÔNG dùng Instrument Serif, Almarai, Cormorant, EB Garamond (thiếu glyph tiếng Việt → vỡ dấu).
Sans an toàn: Inter, Be Vietnam Pro, Plus Jakarta Sans. Serif an toàn: Playfair Display, Lora, Noto Serif.
Kiểm tra trang Google Fonts của font có liệt kê "Vietnamese" trước khi dùng.

=== COLOR SYSTEM ===
- Background: black (#000000) globally, #101010 for the [SECTION_2_NAME] card, #212121 for Features cards
- Primary text color: #E1E0CC (applied via inline style)
- Tailwind colors.primary: #DEDBC8 (used for text-primary, text-primary/70 utilities)
- Gray text: text-gray-400, text-gray-500
- Nav link color: rgba(225,224,204,0.8), hover #E1E0CC

=== CUSTOM CSS UTILITIES (index.css) ===
Two SVG fractal-noise textures as inline data URIs (feTurbulence):
- .noise-overlay : baseFrequency 0.85, numOctaves 3 — overlay on the hero video
- .bg-noise      : baseFrequency 0.9,  numOctaves 4 — subtle texture on the Features section

=== SECTION 1: HERO ===
Full viewport (h-screen) with p-4 md:p-6 padding (inset effect). Inner container rounded-2xl
md:rounded-[2rem] overflow-hidden.
- Background video: [HERO_VIDEO_URL], autoPlay loop muted playsInline, object-cover, fills container.
- Noise overlay on top: .noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none.
- Gradient overlay: bg-gradient-to-b from-black/30 via-transparent to-black/60.
- Navbar: black pill hanging from the top center (bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2
  md:px-8). Items: [NAV_1] · [NAV_2] · [NAV_3] · [NAV_4] · [NAV_5]. text-[10px] sm:text-xs md:text-sm,
  gap-3 sm:gap-6 md:gap-12. Link color rgba(225,224,204,0.8), hover #E1E0CC.
- Hero content bottom-aligned, 12-col grid: left 8 cols heading, right 4 cols text + button.
  · Giant heading "[BRAND]" via WordsPullUp: text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw]
    xl:text-[19vw], font-medium leading-[0.85] tracking-[-0.07em], color #E1E0CC, with a superscript
    asterisk (*) on the last letter (absolute top-[0.65em] -right-[0.3em] text-[0.31em]).
  · Description paragraph (right col): "[HERO_DESCRIPTION]" — text-primary/70 text-xs sm:text-sm
    md:text-base leading-[1.2]. framer-motion fade-up y:20, delay 0.5s, ease [0.16,1,0.3,1].
  · CTA "[HERO_CTA]": pill bg-primary rounded-full, black text, with a black circle (w-9 h-9
    sm:w-10 sm:h-10) holding a cream ArrowRight icon. Hover: gap increases, circle scales 110%.
    fade-up delay 0.7s.

=== SECTION 2: [SECTION_2_NAME] ===
bg-black, centered. Inner card bg-[#101010] max-w-6xl rounded-2xl md:rounded-[2rem], text-center.
- Small label "[SECTION_2_LABEL]" in text-primary, text-[10px] sm:text-xs, uppercase tracking-wide.
- Main heading via WordsPullUpMultiStyle with 3 segments (each word pulls up, staggered):
  · "[S2_LINE_A]" — font-normal (Inter)
  · "[S2_LINE_B]" — italic font-serif (Playfair Display italic)
  · "[S2_LINE_C]" — font-normal
  Container text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl, max-w-3xl, leading-[0.95].
- Body paragraph below with scroll-linked character reveal (ScrollReveal / AnimatedLetter):
  "[S2_BODY]" — text-[#DEDBC8] text-xs sm:text-sm md:text-base. Each char's opacity goes 0.2 → 1
  based on scroll (useScroll offset ['start 0.8','end 0.2']), progressive left-to-right.

=== SECTION 3: FEATURES ===
min-h-screen bg-black with .bg-noise overlay at opacity-[0.15].
- Header via WordsPullUpMultiStyle, left-aligned, 2 lines: "[FEAT_LINE_1]" (cream) /
  "[FEAT_LINE_2]" (text-gray-500). text-xl sm:text-2xl md:text-3xl lg:text-4xl.
- 4-column card grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4, lg:h-[480px]). Each card enters with
  scale 0.95 + fade via useInView(once, margin -100px), staggered 0.15s, ease [0.22,1,0.36,1].
  · Card 1 — VIDEO: full-bleed [FEATURE_VIDEO_URL] (autoPlay loop muted playsInline object-cover),
    bottom-to-top dark gradient, caption "[CARD1_CAPTION]" in #E1E0CC.
  · Card 2 "[CARD2_TITLE]" (01): bg-[#212121], a lucide [CARD2_ICON] in a rounded square at top,
    title + number, checklist of [CARD2_ITEMS] (each with a Check icon), "Tìm hiểu thêm" link with
    ArrowRight rotated -45deg.
  · Card 3 "[CARD3_TITLE]" (02): same layout, icon [CARD3_ICON], items [CARD3_ITEMS].
  · Card 4 "[CARD4_TITLE]" (03): same layout, icon [CARD4_ICON], items [CARD4_ITEMS].
- Closing CTA below the grid: a centered Playfair-Display line "[CLOSING_LINE]" + the same pill
  button "[HERO_CTA]".

=== SHARED ANIMATION COMPONENTS (src/components/animations.tsx) ===
- WordsPullUp: split text by spaces; each word is a motion.span sliding up (y:20 → 0, opacity 0 → 1)
  with staggered delay (i * 0.08s), triggered by useInView(once). showAsterisk adds a superscript *
  on the last word.
- WordsPullUpMultiStyle: takes [{text, className}] segments, splits into words keeping per-word
  className, same pull-up effect, wrapped in inline-flex flex-wrap.
- ScrollReveal (+ inner AnimatedLetter): wraps each character; opacity 0.2 → 1 driven by useScroll +
  useTransform over a per-character range (charProgress = index / total). Progressive text reveal.
- Respect prefers-reduced-motion (disable animations/transitions).

=== VIDEOS ===
Use royalty-free, on-theme stock that matches [BRAND]'s product (NOT abstract art clips). Source from
Mixkit (free license, no attribution) — pattern https://assets.mixkit.co/videos/{ID}/{ID}-720.mp4.
Verify each URL returns 200 video/mp4 before using.

=== RESPONSIVE ===
Fully responsive. Features grid: 1-col (mobile) → 2-col (md) → 4-col (lg). Hero text 26vw → 19vw.
Navbar gaps compress on mobile. All spacing/sizes use Tailwind responsive prefixes.

=== TECH STACK ===
Vite + React 18 + TypeScript · Tailwind CSS 3 · framer-motion · lucide-react.
```

---

## Ví dụ đã điền — Penny (chính là site này)

```
[BRAND]                = Penny
[ONE_LINE_POSITIONING] = app quản lý chi tiêu cho học sinh — biết tiền đi đâu mỗi tuần
[SECTION_2_NAME]       = Problem (nhãn nhỏ: "Sự thật")

[HERO_VIDEO_URL]    = https://assets.mixkit.co/videos/47014/47014-720.mp4  (coins falling on a calculator)
[NAV_1..5]          = Tính năng · Cách dùng · Bảng giá · Về Penny · Liên hệ
[HERO_DESCRIPTION]  = "Penny giúp bạn biết tiền đi đâu mỗi tuần — chỉ 30 giây mỗi ngày. Không bảng tính
                      rối rắm, không cần là dân kế toán. Mở app ra là thấy rõ."
[HERO_CTA]          = Tải app miễn phí

PROBLEM (Section 2)
  [S2_LABEL]  = Sự thật
  [S2_LINE_A] = "Bạn nhận tiền đầu tuần,"                       (Inter, normal)
  [S2_LINE_B] = "đến thứ Năm đã không biết còn bao nhiêu."      (Playfair Display italic)
  [S2_LINE_C] = "Cảm giác mất kiểm soát mỗi khi nhìn vào ví."   (Inter, normal)
  [S2_BODY]   = "Và cuối tháng lại phải nhờ bố mẹ thêm tiền. Penny sinh ra để chấm dứt vòng lặp đó —
                 mỗi ngày chỉ 30 giây, bạn luôn biết chính xác tiền của mình đang đi đâu và còn lại
                 bao nhiêu."

FEATURES (Section 3)
  [FEAT_LINE_1]    = "Nhìn một cái là biết đã tiêu bao nhiêu."        (cream)
  [FEAT_LINE_2]    = "Đơn giản đến mức bạn sẽ thật sự dùng mỗi ngày." (gray)
  [FEATURE_VIDEO]  = https://assets.mixkit.co/videos/23524/23524-720.mp4  (organizing cash into budgets)
  [CARD1_CAPTION]  = "Tiền của bạn — rõ ràng từng đồng."
  [CARD2] PieChart "Báo cáo tuần." 01 — Biết tuần này tiêu nhiều/ít hơn tuần trước · Tự động phân loại:
          ăn uống, đi lại, mua sắm · Cảnh báo khi sắp vượt ngân sách · Xuất báo cáo trong 1 chạm
  [CARD3] Wallet   "3 bước là xong." 02 — Tải app & tạo tài khoản · Nhập khoản chi đầu tiên ·
          Xem báo cáo tuần ngay lập tức
  [CARD4] Bell     "Giữ bạn đúng hướng." 03 — Nhắc nhập chi tiêu mỗi tối · Đặt mục tiêu tiết kiệm theo
          tuần · Đồng bộ trên mọi thiết bị
  [CLOSING_LINE]   = "Bắt đầu kiểm soát tiền của bạn — ngay tuần này."
```

---

## Ghi chú nguồn gốc

- Prompt gốc viết cho **"Prisma" — creative studio** (visual artists / filmmakers). Section 2 gốc là
  "About — I am Marcus Chen, a self-taught director…". Ở Penny, section đó được **đổi vai** thành
  **Problem** (vẫn dùng đúng component: heading multi-style + đoạn văn reveal theo scroll), để khớp
  với khung 5-section dạy ở Workshop 3 (Hero · Problem · Solution · How it Works · CTA).
- Video gốc của Prisma (người ôm laptop trên vách núi; phi hành gia nằm giữa hoa hồng) là clip nghệ
  thuật, **không liên quan tài chính** → đã thay bằng stock tiền/ngân sách (Mixkit).
- Font gốc Almarai + Instrument Serif → đã thay Inter + Playfair Display vì lý do tiếng Việt nói trên.
