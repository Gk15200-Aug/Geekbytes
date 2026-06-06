# Implementation Plan: GeekBytes Portfolio Website

## Overview

Build a single-page static portfolio website for GeekBytes using Astro and Tailwind CSS. The site features a dark theme with #00A3FF accent, 6 services in a 3x2 grid, 9 filterable projects, 3 testimonials with star ratings, IntersectionObserver-based active nav highlighting, and a contact form with service interest selector. Implementation proceeds incrementally: scaffold → data files → layout → sections (top to bottom) → interactivity scripts → responsive polish → testing.

## Tasks

- [x] 1. Initialize project structure and configuration
  - [x] 1.1 Scaffold Astro project with Tailwind CSS integration
    - Initialize a new Astro project
    - Install and configure Tailwind CSS with the Astro Tailwind integration
    - Configure `tailwind.config.mjs` with dark theme tokens: black background (#000000), #00A3FF accent, white (#FFFFFF) text
    - Create `src/styles/global.css` with Tailwind directives and CSS custom properties for brand colors
    - _Requirements: 14.1, 14.2, 14.3_

  - [x] 1.2 Create BaseLayout component with SEO meta tags
    - Create `src/layouts/BaseLayout.astro` with HTML document shell
    - Include meta title, meta description, Open Graph tags (og:title, og:description, og:image), Twitter Card tags
    - Add font preloading hints, favicon reference, and global CSS import
    - Add ARIA landmarks (header, main, footer) in the layout structure
    - Add `<link rel="sitemap">` reference
    - Use semantic HTML elements throughout (header, nav, main, section, footer)
    - _Requirements: 12.1, 12.2, 12.4, 13.4_

  - [x] 1.3 Create all data files for site content
    - Create `src/data/site.ts` with SiteConfig (name: "GeekBytes", tagline, email: "geekbytessolutions@gmail.com", phone: "8217720086", location: "Remote Worldwide", social links, meta info)
    - Create `src/data/navigation.ts` with NavItem array (Home, About, Skills, Services, Projects, Testimonials) and separate contactButton object
    - Create `src/data/services.ts` with 6 services: WordPress Development, AI Chatbots & Automation, GoHighLevel CRM, Mobile App Development, Custom Software Solutions, Cloud Architecture — each with icon, title, description, and 3 bulletPoints
    - Create `src/data/projects.ts` with 9 projects (SmartServe AI Assistant, Prestige Realty Portal, RetailFlow Messenger Bot, AgencyPro CRM Setup, EduVault Learning Platform, ContentForge AI, FitPulse Health App, LogiTrack ERP Suite, ScaleCloud FinTech Infra) with techTags, categories, and stats where applicable; include filterCategories array (All, AI & Automation, WordPress, CRM & Platforms, Mobile Apps, Custom Software, Cloud)
    - Create `src/data/skills.ts` with 4 categories: Frontend (React, Vue, Angular, HTML5, CSS3, JavaScript), Backend (Node.js, Python, Java, PHP, Go), Data & Cloud (AWS, GCP, Docker, MongoDB, SQL), Tools & Design (Git, GitHub, Figma, Jira, Slack)
    - Create `src/data/testimonials.ts` with 3 testimonials: David Chen (CTO, NexPay), Sarah Jenkins (Founder, MediConnect), Marcus Thorne (Dir. E-commerce, Lumina) — each with avatar path, rating: 5, and quote
    - Create `src/data/contact.ts` with 7 ServiceInterestOption entries: WordPress Dev, WhatsApp Automation, AI Chatbots, GoHighLevel CRM, Mobile App (iOS/Android), Custom Software, Cloud Architecture
    - _Requirements: 5.5, 6.7, 6.9, 6.10, 4.5, 7.4, 8.7_

  - [x] 1.4 Set up the single page entry point
    - Create `src/pages/index.astro` that imports BaseLayout and will compose all section components
    - Use semantic HTML structure: `<header>`, `<main>`, `<footer>`
    - _Requirements: 12.2_

- [x] 2. Implement navigation and hero components
  - [x] 2.1 Build Navbar component
    - Create `src/components/Navbar.astro` with fixed positioning at top of viewport
    - Import and render navigation links from `src/data/navigation.ts`
    - Display GeekBytes logo on the left (create `src/components/icons/Logo.astro`)
    - Render section links: Home, About, Skills, Services, Projects, Testimonials
    - Add separate blue pill-shaped "Contact Us" button on the right side (not in nav links array)
    - Add `data-section` attributes on nav links for active highlighting script
    - Add hamburger menu icon markup, hidden on desktop, visible at ≤768px
    - Ensure all nav links have visible focus indicators for keyboard navigation
    - Set minimum tap target size of 44x44px for mobile elements
    - _Requirements: 2.1, 2.2, 2.3, 2.5, 2.6, 14.4, 13.3, 10.1_

  - [x] 2.2 Build Hero Section component
    - Create `src/components/HeroSection.astro` with dark background
    - Display badge with green dot indicator and text "Innovative IT Solutions"
    - Display main heading "Empowering Your Digital Future"
    - Display subtext "We build scalable, secure, and modern technology solutions that drive business growth and transform ideas into reality."
    - Add two CTA buttons: blue filled "Get in Touch" linking to #contact, outline/ghost "View Our Work →" linking to #projects
    - Add Stats Bar below hero content with 4 metrics: "50+ Projects Delivered", "30+ Happy Clients", "6+ Service Domains", "99% Client Satisfaction" with #00A3FF numbers and gray labels
    - Add `id="hero"` for anchor navigation
    - Ensure contrast ratios meet WCAG AA
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 13.1_

  - [x] 2.3 Wire Navbar and Hero into the index page
    - Import Navbar and HeroSection into `src/pages/index.astro`
    - Verify the page renders with navigation and hero visible
    - _Requirements: 2.1, 1.1_

- [x] 3. Implement About and Skills sections
  - [x] 3.1 Build About Section component
    - Create `src/components/AboutSection.astro`
    - Display section label "ABOUT GEEKBYTES" in blue uppercase text
    - Display heading "Bridging the gap between vision and technology." with "vision" and "technology" styled in #00A3FF
    - Use two-column layout: team/office image on left, text content on right
    - Add overlay card on the image showing "50+ Projects Delivered"
    - Display descriptive paragraphs about company mission
    - Add two feature pills at the bottom: "Innovation First" with rocket icon, "Secure by Design" with shield icon
    - Add `id="about"` and `aria-labelledby` for screen readers
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 13.4_

  - [x] 3.2 Build Skills Section component
    - Create `src/components/SkillsSection.astro`
    - Display section label "OUR EXPERTISE" in blue uppercase text
    - Display heading "Technologies We Master"
    - Display subtext "We build with modern, robust, and scalable technologies to ensure your project's long-term success."
    - Import skills data from `src/data/skills.ts`
    - Render 4 category cards in a row: Frontend, Backend, Data & Cloud, Tools & Design
    - Each card has a colored icon header and a grid of technology icons with labels below each icon
    - Add CSS classes for scroll-triggered fade/slide animation (progressive enhancement)
    - Add `id="skills"` and appropriate ARIA labels
    - Structure for responsive grid: single column on mobile, 4-column on desktop
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 10.1, 10.3, 13.4_

  - [x] 3.3 Wire About and Skills into the index page
    - Import AboutSection and SkillsSection into `src/pages/index.astro`
    - Place them in order after Hero section
    - _Requirements: 3.1, 4.1_

- [x] 4. Implement Services section
  - [x] 4.1 Build Services Section component
    - Create `src/components/ServicesSection.astro`
    - Display section label "WHAT WE DO" in blue uppercase text
    - Display heading "Comprehensive IT Services"
    - Display subtext "End-to-end solutions tailored to elevate your business in your digital landscape."
    - Import services data from `src/data/services.ts`
    - Render 6 service cards in a 3x2 grid layout
    - Each card displays: blue icon on dark background, title, description paragraph, and blue checkmark bullet points (3 per card)
    - Add hover effect styles on cards for desktop (CSS transition/transform)
    - Add `id="services"` and ARIA labels
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 13.4_

  - [x] 4.2 Wire Services into the index page
    - Import ServicesSection into `src/pages/index.astro`
    - Place after Skills section
    - _Requirements: 5.1_

- [x] 5. Implement Projects section with filtering
  - [x] 5.1 Build ProjectCard component
    - Create `src/components/ProjectCard.astro` accepting props: name, description, thumbnail, techTags, category, stats
    - Render thumbnail image with `loading="lazy"` and descriptive alt text
    - Add "View Case Study" hover overlay on the thumbnail (CSS hover effect)
    - Render tech tags as blue outline pills
    - Render project name in white bold text and description in gray text
    - Render optional stats row at the bottom with blue numbers and gray labels (up to 3 stats)
    - Add `data-category` attribute on the card wrapper for filter functionality
    - _Requirements: 6.8, 6.9, 6.10, 6.11, 11.3, 13.2_

  - [x] 5.2 Build Projects Section component
    - Create `src/components/ProjectsSection.astro`
    - Display section label "PORTFOLIO" in blue uppercase text
    - Display heading "Featured Projects"
    - Display "View All Projects →" link in blue text aligned to the top right
    - Import project data and filter categories from `src/data/projects.ts`
    - Render filter tabs: All, AI & Automation, WordPress, CRM & Platforms, Mobile Apps, Custom Software, Cloud
    - Style active filter tab as filled blue pill, inactive tabs as outline/ghost pills
    - Render all 9 projects in a 3-column grid using ProjectCard component
    - Add `id="projects"` and section ARIA label
    - Responsive: single-column on mobile (≤768px), 3-column on desktop (≥1025px)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.12, 6.13, 10.1, 10.3, 13.4_

  - [x] 5.3 Wire Projects into the index page
    - Import ProjectsSection into `src/pages/index.astro`
    - Place after Services section
    - _Requirements: 6.1_

- [x] 6. Implement Testimonials, Contact, and Footer
  - [x] 6.1 Build Testimonials Section component
    - Create `src/components/TestimonialsSection.astro`
    - Display section label "CLIENT SUCCESS" in blue uppercase text
    - Display heading "Why Work With Us"
    - Import testimonials data from `src/data/testimonials.ts`
    - Render 3 testimonial cards in a row
    - Each card displays: avatar image, client name (white bold), role (gray), five-star rating in gold/yellow, quote (gray italic)
    - Add `id="testimonials"` and ARIA labels
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 13.4_

  - [x] 6.2 Build Contact Section component
    - Create `src/components/ContactSection.astro`
    - Display section label "CONTACT US" in blue uppercase text
    - Display heading "Let's Build Something Great."
    - Display subtext "Ready to start your next project? Reach out to us and let's discuss how we can help your business grow with technology."
    - Use split layout: contact info panel (left) and form (right)
    - Left panel: email (geekbytessolutions@gmail.com) with envelope icon, phone (8217720086) with phone icon, location ("Remote Worldwide") with map pin icon, and social icons (LinkedIn, Twitter, Instagram)
    - Right panel form fields: Full Name (required), Email Address (required), Phone Number (optional), Service Interest Selector (7 radio/chip options from contact.ts data), Project Details textarea with placeholder "Tell us about your project..."
    - Service Interest chips: radio behavior (only one selectable at a time), styled as clickable chips
    - Add full-width blue "Send Message ✈" submit button
    - Add HTML5 validation attributes (`required`, `type="email"`)
    - Use `aria-invalid` and `aria-describedby` attributes for validation error association
    - Add `id="contact"` and ARIA labels for form fields
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10, 13.4_

  - [x] 6.3 Build Footer component
    - Create `src/components/Footer.astro`
    - Use dark background and 3-column layout
    - Left column: GeekBytes logo and tagline "Empowering businesses with modern, scalable, and secure technology solutions. Your trusted IT partner."
    - Center column: "Quick Links" heading with links to Home, About Us, Services, Projects (scroll to sections)
    - Right column: "Legal" heading with links to Privacy Policy, Terms of Service, Cookie Policy
    - Bottom bar: "© 2026 GeekBytes. All rights reserved." on left, "Designed with 💙 for the future." on right
    - Create icon components as needed: `src/components/icons/LinkedIn.astro`, `src/components/icons/Twitter.astro`, `src/components/icons/Instagram.astro`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 14.4_

  - [x] 6.4 Wire Testimonials, Contact, and Footer into the index page
    - Import TestimonialsSection, ContactSection, and Footer into `src/pages/index.astro`
    - Place Testimonials after Projects, Contact after Testimonials, Footer at the end outside `<main>`
    - _Requirements: 7.1, 8.1, 9.1_

- [x] 7. Checkpoint - Verify static build
  - Run `astro build` and verify clean output with no errors
  - Verify the generated `dist/index.html` contains all sections
  - Verify all referenced images have placeholder paths that won't break the build
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Add interactive JavaScript scripts
  - [x] 8.1 Implement mobile menu toggle script
    - Create `src/scripts/mobile-menu.js`
    - Toggle hamburger menu visibility on click
    - Add/remove ARIA attributes (`aria-expanded`) on toggle
    - Close menu when a nav link is clicked
    - Target: < 500 bytes minified
    - _Requirements: 2.6, 2.7, 13.3_

  - [x] 8.2 Implement smooth scroll script
    - Create `src/scripts/smooth-scroll.js`
    - Intercept anchor link clicks on nav links, CTAs, and footer quick links
    - Animate scroll to target section using `scrollIntoView({ behavior: 'smooth' })`
    - Target: < 300 bytes minified
    - _Requirements: 2.4, 1.4, 9.6_

  - [x] 8.3 Implement active navigation highlighting script
    - Create `src/scripts/active-nav.js`
    - Use IntersectionObserver to detect which section is currently visible in the viewport
    - Highlight the corresponding nav link with a blue underline indicator
    - Remove highlight from inactive links
    - Handle edge cases (multiple sections partially visible, scroll direction)
    - Target: < 500 bytes minified
    - _Requirements: 2.5_

  - [x] 8.4 Implement project filter script
    - Create `src/scripts/project-filter.js`
    - Handle click events on filter tabs
    - Show/hide project cards based on `data-category` attribute matching the selected tab
    - Update active tab styling (filled blue pill for active, outline for inactive)
    - "All" tab shows all 9 projects
    - Target: < 500 bytes minified
    - _Requirements: 6.4, 6.5, 6.6_

  - [x] 8.5 Implement form validation script
    - Create `src/scripts/form-validation.js`
    - Validate required fields (Full Name, Email) on form submit
    - Validate email format with regex
    - Display inline error messages below fields with red text
    - Set `aria-invalid="true"` and link errors with `aria-describedby`
    - Display success confirmation message on valid submit
    - Target: < 1KB minified
    - _Requirements: 8.9, 8.10_

  - [x] 8.6 Implement scroll animations script
    - Create `src/scripts/scroll-animations.js`
    - Use IntersectionObserver to detect when elements enter viewport
    - Add fade/slide-in CSS classes when elements become visible
    - Ensure content is visible by default (animations are progressive enhancement)
    - Target: < 500 bytes minified
    - _Requirements: 4.7_

  - [x] 8.7 Wire all scripts into the page
    - Import all 6 scripts in `src/pages/index.astro` or BaseLayout using `<script>` tags
    - Use `type="module"` and deferred loading
    - Verify total JS payload is under 5KB minified
    - _Requirements: 11.1_

- [x] 9. Implement responsive design and final styling
  - [x] 9.1 Configure responsive breakpoints and layouts
    - Ensure Tailwind config defines breakpoints at 768px (mobile), 1024px (tablet), 1025px+ (desktop)
    - Apply single-column layout for all sections at ≤768px
    - Apply intermediate grid at 769–1024px
    - Apply full multi-column layout with `max-width: 1400px` centered at ≥1025px
    - Verify touch targets are ≥44x44px on mobile for all interactive elements
    - Verify hamburger menu appears at mobile breakpoint, nav links hidden
    - Verify projects show single-column on mobile, 3-column on desktop
    - Verify services show stacked on mobile, 3x2 grid on desktop
    - Verify skills show stacked on mobile, 4-column on desktop
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 9.2 Add image optimization and lazy loading
    - Use Astro's `<Image>` component or configure image optimization for project thumbnails (9), testimonial avatars (3), and about team image
    - Add `loading="lazy"` to all below-fold images
    - Provide appropriate `width` and `height` attributes to prevent layout shift
    - Add CSS background-color fallback for broken images (dark theme placeholder)
    - _Requirements: 11.3, 13.2_

  - [x] 9.3 Generate sitemap and robots.txt
    - Install `@astrojs/sitemap` integration
    - Configure sitemap generation in `astro.config.mjs`
    - Create `public/robots.txt` with appropriate directives
    - _Requirements: 12.3_

- [x] 10. Checkpoint - Full build and manual verification
  - Run `astro build` and verify clean production output
  - Preview the site and verify all sections render correctly
  - Verify navigation scrolls to each section smoothly
  - Verify active nav highlighting updates on scroll
  - Verify project filter tabs show/hide correct project cards
  - Verify "View Case Study" overlay appears on project thumbnail hover
  - Verify service interest chips have radio behavior in contact form
  - Verify mobile menu works at narrow viewport
  - Verify total JavaScript payload is under 5KB
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Set up automated testing
  - [ ] 11.1 Configure Playwright and testing infrastructure
    - Install Playwright and `@axe-core/playwright`
    - Create Playwright config targeting the built static site
    - Set up test scripts in `package.json`
    - _Requirements: 11.1, 13.1_

  - [ ]* 11.2 Write accessibility tests
    - Create test file for axe-core automated scanning
    - Assert no WCAG 2.1 AA violations on the full page
    - Verify all images have alt text (9 project thumbnails, 3 avatars, team image)
    - Verify ARIA landmarks are present (header, nav, main, footer)
    - Verify focus indicators are visible on interactive elements
    - Verify form fields have proper labels and error association
    - _Requirements: 13.1, 13.2, 13.3, 13.4_

  - [ ]* 11.3 Write responsive layout tests
    - Test single-column layout at 375px viewport width (mobile)
    - Test intermediate layout at 768px viewport width (tablet)
    - Test full desktop layout at 1440px viewport width with max-width 1400px
    - Test hamburger menu visibility at mobile breakpoint
    - Test 3-column project grid on desktop, single-column on mobile
    - Test 3x2 service grid on desktop, stacked on mobile
    - Test tap target sizes on mobile (≥44x44px)
    - _Requirements: 10.1, 10.2, 10.3, 2.6_

  - [ ]* 11.4 Write functional interaction tests
    - Test navigation link click → page scrolls to correct section
    - Test active nav highlighting: scroll to section → corresponding link gets blue underline
    - Test "Contact Us" pill button → scrolls to contact section
    - Test Hero CTAs: "Get in Touch" scrolls to #contact, "View Our Work →" scrolls to #projects
    - Test project filter tabs: click "AI & Automation" → only AI projects visible, click "All" → all 9 visible
    - Test project hover: hover thumbnail → "View Case Study" overlay appears
    - Test contact form: submit with valid data → success message
    - Test contact form: submit with missing required fields → inline errors shown
    - Test contact form: submit with invalid email → email error shown
    - Test service interest chips: click chip → chip selected (radio behavior, only one at a time)
    - Test footer quick links: click → scrolls to section
    - Test mobile menu: click hamburger → overlay with links appears
    - _Requirements: 2.4, 2.5, 2.7, 1.4, 6.6, 6.11, 8.9, 8.10, 9.6_

  - [ ]* 11.5 Write SEO validation tests
    - Verify meta title and description exist and are non-empty
    - Verify Open Graph tags (og:title, og:description, og:image) are present
    - Verify Twitter Card tags are present
    - Verify semantic HTML elements (header, nav, main, section, footer) are used
    - Verify sitemap.xml is generated and valid
    - _Requirements: 12.1, 12.2, 12.3, 12.4_

- [ ] 12. Final checkpoint - Complete validation
  - Run full Playwright test suite and ensure all tests pass
  - Run `astro build` and verify clean production output
  - Verify total JavaScript payload is under 5KB
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- No property-based tests are included because this is a static UI rendering project with no algorithmic business logic (as stated in the design document's testing strategy).
- Test tasks (11.2–11.5) are marked optional (*) since they validate quality attributes but the site is functional without them.
- Task 11.1 (test infrastructure setup) is not optional since it's needed if any tests are to run.
- Each task references specific requirement acceptance criteria for traceability.
- Checkpoints are placed after the initial static build (task 7) and after adding interactivity (task 10) to catch issues early.
- All 6 scripts (mobile-menu, smooth-scroll, active-nav, project-filter, form-validation, scroll-animations) must total under 5KB minified.
- The site renders all 9 projects in HTML at build time; filtering is a client-side JS enhancement with graceful degradation (all projects visible without JS).
