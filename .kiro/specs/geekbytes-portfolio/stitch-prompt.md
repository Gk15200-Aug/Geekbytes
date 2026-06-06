# GeekBytes Portfolio — UI Design Brief for Stitch

## Reference Website
https://kuldeepcodes.digital/
(Use as structural inspiration — similar layout flow, section arrangement, and dark theme aesthetic)

---

## Company Details

- **Company Name:** GeekBytes
- **Tagline:** "Your ideas, our implementation"
- **Industry:** IT Services Company
- **Email:** geekbytessolutions@gmail.com
- **Phone:** 8217720086
- **LinkedIn:** linkedin.com/company/geekbytes-solutions/
- **Instagram:** https://www.instagram.com/_geekbytes

---

## Branding & Color System

| Token | Value | Usage |
|-------|-------|-------|
| Primary Background | #000000 or #0A0A0A | Page background, all sections |
| Accent Color | #00A3FF | Buttons, links, highlights, hover states, borders |
| Primary Text | #FFFFFF | Headings, body text |
| Secondary Text | #B0B0B0 | Subtext, descriptions, muted content |
| Card Background | #111111 or #1A1A1A | Cards, elevated surfaces |
| Card Border | #222222 | Subtle borders on cards |
| Accent Glow | rgba(0, 163, 255, 0.15) | Hover glow effects on cards/buttons |

### Logo
- "bG" monogram — blue (#00A3FF) circular arc wrapping a white "G" letterform
- Used in navbar (small), hero (large), and footer (small)

### Typography
- Font: Inter, system sans-serif fallback
- Headings: Bold, large (48-72px hero, 36-48px section titles)
- Body: Regular, 16-18px
- Letter-spacing: Slightly wide on headings for modern feel

---

## Page Layout (Single-Page Scrolling)

### 1. Navigation Bar (Sticky/Fixed)
- **Position:** Fixed top, full-width, semi-transparent black with blur backdrop
- **Left:** bG logo (small)
- **Center/Right:** Links — Home, About, Skills, Services, Projects, Testimonials, Contact
- **Mobile (≤768px):** Hamburger icon → full-screen dark overlay with centered nav links
- **Active state:** Blue underline or text color on current section
- **Height:** 64px desktop, 56px mobile

### 2. Hero Section (Full Viewport Height - 100vh)
- **Background:** Black with subtle gradient or animated particles/grid
- **Center-aligned content:**
  - Large bG monogram logo (animated subtle pulse or glow)
  - Main heading: "GeekBytes" (72px, bold, white)
  - Subheading: "Your ideas, our implementation" (24px, light gray)
  - CTA Button: "Get in Touch" — blue (#00A3FF) with white text, rounded, hover glow
- **Scroll indicator:** Small animated chevron/arrow at bottom

### 3. About Section
- **Layout:** Two-column on desktop (text left, visual/graphic right), stacked on mobile
- **Content:**
  - Section title: "About Us" with blue accent line
  - Company description paragraph
  - Mission: Building modern digital solutions for businesses
  - Highlight numbers (optional): Projects completed, happy clients, years experience
- **Visual:** Abstract geometric graphic or code-themed illustration

### 4. Skills & Technologies Section
- **Layout:** Grid of technology icons with labels
- **Categories:**
  - Frontend: React, Next.js, HTML, CSS, Tailwind, JavaScript, TypeScript
  - Backend: Node.js, Python, Express, Django
  - Databases: MongoDB, PostgreSQL, MySQL
  - DevOps: AWS, Docker, GitHub Actions, Vercel
  - Mobile: Flutter, React Native
- **Style:** Dark cards with tech icon + name, subtle border
- **Animation:** Fade-in on scroll, staggered
- **Mobile:** 2-3 columns grid, scrollable categories

### 5. Services Section
- **Layout:** 2-3 column card grid (desktop), stacked (mobile)
- **Services:**
  1. Web Development — Custom websites and web apps
  2. Mobile App Development — iOS and Android applications
  3. UI/UX Design — User-centered design solutions
  4. Cloud Solutions — AWS, Azure, cloud infrastructure
  5. IT Consulting — Technical strategy and guidance
- **Card style:**
  - Dark card (#111) with subtle border
  - Icon (line-style, blue accent)
  - Title (white, bold)
  - Description (gray, 2-3 lines)
  - Hover: lift + blue glow border + slight scale
- **Mobile:** Full-width cards, stacked vertically

### 6. Projects Portfolio Section
- **Section title:** "Our Work" or "Projects Portfolio"
- **Layout:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Projects:**

| Project | URL | Type |
|---------|-----|------|
| Ori Beleza | https://www.oribeleza.com/ | eCommerce Website |
| TEDxNuremberg | https://tedxnuremberg.com/ | Event Website |
| Hardens | https://www.hardens.com/ | Content-Rich Website |
| Speciality | https://www.speciality.co.in/ | Business Website |
| The Palm | https://www.thepalm.com/ | Hospitality Website |
| Zum Wildbach | https://www.zum-wildbach.de/ | Hospitality Website |

- **Card style:**
  - Large thumbnail/screenshot (16:9 ratio)
  - Project name below thumbnail
  - Category tag (small pill badge, blue outline)
  - "Visit Site →" link
  - Hover: subtle zoom on thumbnail + overlay with project name
- **Mobile:** Full-width cards with swipe capability

### 7. Why Work With Us / Testimonials Section
- **Layout:** Horizontal carousel (desktop), swipeable cards (mobile)
- **Content (3-5 cards):**
  - Clean white text on dark card
  - Quote/reason text
  - Blue quotation marks or accent border-left
  - Optional: client/partner name
- **Reasons to highlight:**
  - Clean, modern design that builds trust
  - Fast-loading, high-performance websites
  - Fully responsive across all devices
  - Smart automation and AI integration
  - Custom solutions tailored to your needs
- **Controls:** Left/right arrows (desktop), dots indicator, swipe (mobile)

### 8. Contact Section
- **Layout:** Split — form on left, info on right (desktop); stacked (mobile)
- **Form fields:**
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Message (required, textarea)
  - Submit button: "Send Message" — blue, full-width on mobile
- **Right side / below form:**
  - Email: geekbytessolutions@gmail.com
  - Phone: 8217720086
  - Social icons: LinkedIn, Instagram
  - Optional: small map or location graphic
- **Style:** Cards/container with subtle border, input fields with dark background and blue focus ring

### 9. Footer
- **Layout:** 3-column grid (desktop), stacked (mobile)
- **Column 1:** bG logo + tagline
- **Column 2:** Quick links (Home, About, Services, Projects, Contact)
- **Column 3:** Social icons (LinkedIn, Instagram) + contact email
- **Bottom bar:** "© 2026 GeekBytes. All rights reserved."
- **Style:** Slightly different dark shade (#0A0A0A) to separate from body

---

## Design Principles

### Smoothness & Interactions
- Smooth page scrolling (CSS `scroll-behavior: smooth`)
- Subtle parallax on hero background
- Fade-in and slide-up animations on scroll (staggered, 200ms delay between items)
- Button hover: scale(1.02) + glow shadow
- Card hover: translateY(-4px) + blue border glow
- Page transitions feel buttery and lightweight
- No jarring jumps or layout shifts

### Mobile-First Design
- All sections stack vertically on mobile
- Hamburger menu with full-screen overlay (smooth slide-in)
- Swipeable carousels for projects and testimonials
- Large touch targets (minimum 44x44px)
- Comfortable thumb-reach spacing
- Floating "Contact" button (optional) for quick access
- No horizontal scroll — everything fits viewport width
- Text sizes scale down appropriately (clamp or responsive units)

### Accessibility
- Color contrast: white (#FFF) on black (#000) = 21:1 ratio ✓
- Blue (#00A3FF) on black = ~5.5:1 ratio ✓ (passes AA for large text)
- Focus rings visible on all interactive elements (blue outline)
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3)
- Skip-to-content link

### Performance-Oriented Design
- Minimal decorative elements — let whitespace and typography do the work
- No heavy background images (use CSS gradients or subtle SVG patterns)
- Optimized image sizes for project thumbnails
- Clean, flat design — no complex shadows or 3D effects that slow rendering

---

## Mood & Inspiration

- **Style:** Dark, minimal, tech-forward — think linear.app, vercel.com, stripe.com
- **Energy:** Professional yet approachable, confident but not flashy
- **Feel:** Smooth, fast, premium quality
- **Avoid:** Cluttered layouts, too many colors, heavy decorations, generic stock imagery
