export interface CaseStudyStep {
  title: string;
  description: string;
}

export interface CaseStudyData {
  challenge: string;
  steps: CaseStudyStep[];
  outcomes: string;
}

export const caseStudies: Record<string, CaseStudyData> = {
  "ori-beleza": {
    challenge:
      "Ori Beleza is a Brazilian-inspired beauty brand that had no online store — all sales were happening in person or via DMs on social media. The founders needed a professional eCommerce presence that reflected the brand's warmth and visual identity while handling product listings, inventory, and secure checkout.",
    steps: [
      {
        title: "WooCommerce Store Setup",
        description:
          "Built a fully functional WooCommerce store with curated product categories, high-resolution imagery support, and product variation handling (sizes, shades, bundles). Inventory is managed directly from the WordPress dashboard.",
      },
      {
        title: "Mobile-First Checkout",
        description:
          "Designed a streamlined, single-page checkout optimized for mobile users — the dominant device for beauty shoppers arriving from Instagram. Cart abandonment was reduced by minimizing the number of form fields.",
      },
      {
        title: "Brand-Led Visual Design",
        description:
          "Custom WordPress theme built to reflect the brand's warm, tropical aesthetic — using rich imagery, curved sections, and a warm color palette that differentiates Ori Beleza from generic beauty store templates.",
      },
    ],
    outcomes:
      "Ori Beleza launched with a complete online store, enabling the brand to sell to customers nationwide beyond their local market. The mobile-optimized checkout converted social media traffic directly into orders without requiring a third-party marketplace.",
  },

  "tedxnuremberg": {
    challenge:
      "TEDxNuremberg is a licensed TED event in Germany that needed a professional digital home to manage speaker profiles, event schedules, and ticket registrations — reflecting the bold, trusted TEDx brand while serving both German and English-speaking audiences.",
    steps: [
      {
        title: "Custom TEDx-Aligned Theme",
        description:
          "Built a WordPress theme that follows the TEDx brand guidelines — bold typography, red accent palette, and a layout structure consistent with other licensed TEDx event sites worldwide.",
      },
      {
        title: "Speaker & Schedule Management",
        description:
          "Custom post types for speaker profiles, talk topics, and event schedules — all manageable by the event team without developer involvement. Speakers are displayed with bios, photos, and talk descriptions.",
      },
      {
        title: "Event Registration Integration",
        description:
          "Ticket and registration forms integrated with the event management workflow, allowing attendees to register online and receive automated confirmation emails ahead of the event.",
      },
    ],
    outcomes:
      "TEDxNuremberg launched with a professional event website that the team manages independently. Speaker and schedule updates are made without developer support, and the registration system handled attendee signups for their upcoming events.",
  },

  "hardens": {
    challenge:
      "Hardens is the UK's longest-running restaurant guide, with thousands of curated restaurant listings accumulated over decades. Their existing platform was slow, difficult to update, and lacked the SEO structure needed to compete with modern food discovery platforms for organic search traffic.",
    steps: [
      {
        title: "Custom WordPress Architecture",
        description:
          "Built a scalable WordPress platform using custom post types for restaurants, reviews, cuisine categories, and London areas — allowing thousands of entries to be structured, filtered, and indexed efficiently.",
      },
      {
        title: "SEO & Schema Markup",
        description:
          "Every restaurant listing was given structured data markup (LocalBusiness, Review, AggregateRating) so Google could display rich results — star ratings, review counts, and opening hours — directly in search.",
      },
      {
        title: "Editorial Content Tools",
        description:
          "Built an editorial CMS that allows the Hardens team to publish guides, top lists, and curated collections alongside the directory listings — positioning the platform as both a database and a trusted editorial voice.",
      },
    ],
    outcomes:
      "Hardens now operates a fast, modern platform with thousands of SEO-structured restaurant listings. The schema markup improved click-through rates from Google search, and the editorial tools allow the team to publish content-led guides that drive repeat traffic.",
  },

  "speciality": {
    challenge:
      "Speciality had an outdated website with no product catalog, no online enquiry system, and no SEO presence — losing business to competitors who appeared in search results. The team was handling all sales enquiries through phone calls and walk-ins.",
    steps: [
      {
        title: "Structured Product Catalog",
        description:
          "Designed and built a product catalog with category-based browsing, product detail pages, and downloadable spec sheets — giving B2B buyers the information they need to evaluate products before making contact.",
      },
      {
        title: "Enquiry Management System",
        description:
          "Integrated a product enquiry form connected to the team's email workflow, so buyers can submit RFQs directly from any product page — replacing the phone-only process with a tracked, digital system.",
      },
      {
        title: "Service Area SEO Pages",
        description:
          "Created location-targeted service pages to capture search demand from buyers in the surrounding area — improving Google visibility for relevant product and service queries.",
      },
    ],
    outcomes:
      "Speciality now receives inbound enquiries through the website's product pages and RFQ forms — a digital sales channel that previously didn't exist. The improved search visibility put them in front of buyers who would previously have found competitors first.",
  },

  "the-palm": {
    challenge:
      "The Palm is an iconic US steakhouse chain with multiple locations. Their digital presence needed to handle location-specific pages, reservation integration, and a menu system that restaurant managers could update without contacting a developer for every seasonal change.",
    steps: [
      {
        title: "Multi-Location Architecture",
        description:
          "Built individual location pages for each Palm restaurant, each with unique address, phone, hours, and staff details — structured for local SEO and Google Business Profile consistency across all locations.",
      },
      {
        title: "OpenTable Reservation Integration",
        description:
          "Integrated OpenTable's reservation widget on every location page, so diners can book directly from the site without being redirected to a third-party flow — reducing drop-off at the booking step.",
      },
      {
        title: "CMS-Powered Menu System",
        description:
          "Built a custom menu management system allowing restaurant managers to update food and drink menus, add seasonal items, and manage pricing from the WordPress dashboard — no developer needed for routine updates.",
      },
    ],
    outcomes:
      "The Palm's digital presence now accurately represents all locations with up-to-date menus and live reservation availability. Restaurant managers handle their own content updates, and the OpenTable integration reduced booking friction for diners.",
  },

  "zum-wildbach": {
    challenge:
      "Zum Wildbach is a traditional Bavarian restaurant that was missing online bookings entirely — guests had to call during opening hours to reserve a table. With a growing number of English-speaking visitors in the area, a single-language German-only site was also limiting their reach.",
    steps: [
      {
        title: "Bilingual Site (German & English)",
        description:
          "Built a fully bilingual WordPress site with seamless language switching between German and English — allowing the restaurant to serve both local regulars and international visitors with equal clarity.",
      },
      {
        title: "Table Reservation System",
        description:
          "Integrated an online table booking form with email confirmation, allowing guests to reserve a table at any hour without calling. The team receives bookings directly to their inbox with all guest details.",
      },
      {
        title: "Seasonal Menu CMS",
        description:
          "Built a simple menu management system so the kitchen team can update food and drink menus for each season without developer support — keeping the site accurate and reducing guest confusion about outdated menus.",
      },
    ],
    outcomes:
      "Zum Wildbach now receives online table reservations 24/7 — a significant change from the phone-only process. The bilingual site opened the restaurant to international guests who previously couldn't navigate a German-only web presence.",
  },

  "sushiya": {
    challenge:
      "Sushiya was losing potential orders every day because customers had no way to order online — they had to visit or call. With a growing delivery culture and competitors offering app-based ordering, Sushiya needed a digital ordering system without the high commissions of third-party platforms like Swiggy or Zomato.",
    steps: [
      {
        title: "Online Ordering System",
        description:
          "Integrated a direct online ordering system allowing customers to browse the full menu, build their order, and pay online — with zero third-party commission taken from each sale.",
      },
      {
        title: "WhatsApp Order Integration",
        description:
          "Added a WhatsApp ordering flow for customers who prefer messaging — orders are structured into a formatted message sent directly to the restaurant's WhatsApp number, bridging digital and traditional ordering habits.",
      },
      {
        title: "Visual Menu Gallery",
        description:
          "Built a photo-forward menu with high-quality food photography for each dish — increasing average order value as customers discover and add items they hadn't originally planned to order.",
      },
    ],
    outcomes:
      "Sushiya converted a large portion of their regular in-person and phone customers to online orders through the website — capturing revenue that was previously going to competitors on delivery platforms and eliminating third-party commission costs.",
  },

  "van-seat-covers": {
    challenge:
      "Van Seat Covers UK sells custom-fit seat covers for commercial vans — but with dozens of makes, models, and cab configurations, buyers frequently ordered the wrong product. The flat product catalog offered no compatibility filtering, resulting in a high return rate and frustrated customers who had to call the team for guidance.",
    steps: [
      {
        title: "Vehicle Compatibility Filter",
        description:
          "A three-step Make → Model → Year selector on the homepage and shop that instantly filters the catalog to products guaranteed to fit the selected vehicle. Built with custom WooCommerce attributes and AJAX filtering — no page reload required.",
      },
      {
        title: "Vehicle-Specific Landing Pages",
        description:
          "Dedicated SEO landing pages for the highest-volume van models (Ford Transit, VW Transporter, Mercedes Sprinter) targeting searches like 'Ford Transit seat covers UK' — capturing high-intent buyers at the search stage.",
      },
      {
        title: "Product Configurator",
        description:
          "A live configurator on each product page lets buyers choose material (leatherette, canvas, neoprene), colour, and cab type with instant price updates — reducing the back-and-forth email volume from buyers who previously had to ask for a custom quote.",
      },
      {
        title: "Fitment Guarantee & Trust Signals",
        description:
          "A 'Guaranteed Fit or Free Return' banner and verified buyer reviews filtered by vehicle type addressed the primary objection for automotive accessories purchased online.",
      },
    ],
    outcomes:
      "The vehicle compatibility filter became the primary entry point to the store. Wrong-fit returns dropped significantly, and vehicle-specific landing pages began ranking in Google within 2 months for brand + model search queries — driving highly targeted, purchase-ready traffic.",
  },

  "truck-wreckers-sa": {
    challenge:
      "Truck Wreckers SA had been operating in South Australia for years but relied almost entirely on phone calls and a basic directory listing for new business. With no SEO presence and no digital lead capture, they were invisible to the buyers most likely to need them — people searching online for truck parts or dismantling services.",
    steps: [
      {
        title: "Lead-Generation Site Architecture",
        description:
          "Built a WordPress site structured entirely around lead capture — with a prominent parts enquiry form on the homepage, service-specific pages (truck dismantling, parts sales, truck removal), and strong calls-to-action throughout.",
      },
      {
        title: "Click-to-Call Mobile Design",
        description:
          "A persistent sticky header with a phone number visible at all scroll positions — specifically designed for mobile users who want to call immediately. Click-to-call tracking was set up to measure conversion from mobile visitors.",
      },
      {
        title: "Local SEO for South Australia",
        description:
          "Optimized on-page content, Google Business Profile consistency, and suburb-level service pages to rank for terms like 'truck wreckers Adelaide' and 'truck parts SA' — capturing buyers at the highest point of purchase intent.",
      },
    ],
    outcomes:
      "Within months of launch, Truck Wreckers SA ranked on page 1 of Google for their core SA search terms. The website became the primary channel for new business enquiries, replacing their previous reliance on word-of-mouth and directory referrals.",
  },

  "tobe-jewelry": {
    challenge:
      "Tobe Jewelry is a luxury jewelry brand that needed an online store that matched the premium feel of their physical products. Generic WooCommerce themes couldn't convey the craftsmanship and exclusivity the brand demanded — and a poor-quality store would actively undermine customer trust.",
    steps: [
      {
        title: "Luxury Visual Design",
        description:
          "Custom WordPress theme with a dark, editorial aesthetic — full-width product imagery, elegant typography, and deliberate white space that communicates luxury without clutter.",
      },
      {
        title: "High-Resolution Product Gallery",
        description:
          "Zoom-on-hover product imagery with multiple angles, lifestyle photography, and a lightbox viewer — giving online shoppers the closest possible experience to examining a piece in-store.",
      },
      {
        title: "Streamlined Checkout",
        description:
          "A single-page, minimal checkout flow designed to reduce drop-off at the final purchase stage — with trust signals (secure payment badges, return policy) placed at the point where buyer hesitation is highest.",
      },
    ],
    outcomes:
      "Tobe Jewelry launched with an online store that matches their brand positioning — premium visual quality, smooth purchasing experience, and a presentation that builds rather than erodes trust with high-intent jewelry buyers.",
  },

  "vaporfi": {
    challenge:
      "VaporFi is a leading US vaping brand handling thousands of daily visitors. Their WooCommerce store needed to be both high-performance under traffic load and compliant with age verification requirements for tobacco and vaping products — a combination that most generic store builds fail to deliver.",
    steps: [
      {
        title: "Performance-Optimized Product Pages",
        description:
          "Rebuilt product pages with optimized image delivery (WebP, lazy loading), server-side caching, and a lean code structure capable of handling high-traffic spikes without performance degradation.",
      },
      {
        title: "Age-Gating Compliance",
        description:
          "Implemented a compliant age verification gate for US vaping regulations — displayed on first visit and recorded via cookie, with back-end logging for compliance documentation purposes.",
      },
      {
        title: "Loyalty Rewards System",
        description:
          "Integrated a points-based loyalty program that rewards repeat purchases — encouraging customer retention in a competitive market where buyers frequently switch brands based on price alone.",
      },
    ],
    outcomes:
      "VaporFi's store handles thousands of daily visitors with consistent performance. The compliance implementation satisfied regulatory requirements, and the loyalty system increased the share of returning customers placing repeat orders.",
  },

  "varma-steels": {
    challenge:
      "Varma Steels is a steel distributor whose sales process was entirely phone and in-person — a significant disadvantage as competitors with proper websites captured B2B buyers doing online research before making contact. Without a product catalog or specification documentation online, many potential buyers moved on before ever reaching the team.",
    steps: [
      {
        title: "Digital Product Catalog",
        description:
          "Built a structured product catalog with steel grades, dimensions, and application categories — giving procurement managers the specifications they need to evaluate products without picking up the phone.",
      },
      {
        title: "Downloadable Specification Sheets",
        description:
          "Each product page includes downloadable PDF spec sheets so engineers and project managers can review and share technical data internally before initiating a purchase inquiry.",
      },
      {
        title: "Online Quotation Request Form",
        description:
          "A structured RFQ form capturing product type, quantity, delivery location, and timeline — enabling the sales team to respond with accurate quotes without the back-and-forth of an initial discovery call.",
      },
    ],
    outcomes:
      "Varma Steels went from invisible online to having a professional B2B web presence that qualified buyers before they made contact. The quotation form created a digital sales channel that generates leads while the team focuses on converting and fulfilling them.",
  },

  "vic-recyclers": {
    challenge:
      "VIC Recyclers is a Victoria-based auto recycler that had minimal online visibility for local search — meaning buyers searching 'car wreckers Melbourne' or 'scrap car removal Victoria' were finding and calling competitors instead. Every missed search placement was a lost sale.",
    steps: [
      {
        title: "Local SEO Architecture",
        description:
          "Built suburb-level service pages targeting 'car wreckers [suburb]' keywords across Greater Melbourne — each page with unique content, Google Maps embed, and schema markup for local business visibility.",
      },
      {
        title: "Instant Cash-for-Cars Quote Form",
        description:
          "A homepage quote form where visitors enter vehicle details to receive an instant cash offer estimate — converting search traffic into leads before they check a competitor's site.",
      },
      {
        title: "Google Business Profile Alignment",
        description:
          "NAP (name, address, phone) consistency was implemented across the site and aligned with the Google Business Profile listing to strengthen local pack rankings for Victoria-area searches.",
      },
    ],
    outcomes:
      "VIC Recyclers climbed to the top 3 local search results for their primary Melbourne-area keywords. The quote form became the primary channel for new car acquisition leads, generating consistent daily enquiries from motivated sellers.",
  },

  "nailashes": {
    challenge:
      "Nailashes is a nail and lash salon that was managing 100% of their bookings by phone — missing appointment requests that came in after hours and spending significant staff time on scheduling calls rather than servicing clients.",
    steps: [
      {
        title: "Online Booking Integration",
        description:
          "Integrated an appointment booking system allowing clients to view available slots, select their service, and book instantly from any device — with automated confirmation and reminder emails sent without staff involvement.",
      },
      {
        title: "Visual Service Menu",
        description:
          "Built a gallery-led service menu showcasing each nail and lash treatment with before/after photos and pricing — giving prospective clients enough information to book with confidence without needing to call.",
      },
      {
        title: "Brand-Aligned Design",
        description:
          "Custom design reflecting the salon's aesthetic — clean, feminine, and premium — with Instagram gallery integration pulling the salon's latest work directly into the homepage to serve as live social proof.",
      },
    ],
    outcomes:
      "Nailashes now receives appointment bookings around the clock, including outside business hours. Staff scheduling time was significantly reduced as clients self-book, and the service gallery improved conversion from first-time visitors who previously needed reassurance before committing.",
  },

  "eco-car-wreckers": {
    challenge:
      "Eco Car Wreckers had been operating in the Sydney metropolitan area for years but relied almost entirely on word-of-mouth and a basic directory listing. Their old website had no SEO structure, no clear call-to-action, and loaded slowly on mobile — the device used by most people searching 'cash for cars' in a hurry.",
    steps: [
      {
        title: "Instant Vehicle Valuation Tool",
        description:
          "A simple on-page form where visitors enter vehicle make, model, year, and condition to get an instant cash offer estimate — dramatically reducing friction for the most common visitor intent.",
      },
      {
        title: "Local SEO Architecture",
        description:
          "Dedicated suburb-level landing pages targeting search terms like 'car wreckers Parramatta' and 'scrap car removal Liverpool NSW' — each with unique content, schema markup, and Google Maps embeds.",
      },
      {
        title: "Mobile-First, Click-to-Call Design",
        description:
          "A persistent sticky header with a phone number CTA visible on every scroll position, built for mobile users who want to call immediately without navigating a contact page.",
      },
      {
        title: "Google Business Profile Integration",
        description:
          "Structured data and citation consistency across the site to reinforce Google Business Profile signals and improve local pack visibility for Sydney-area searches.",
      },
    ],
    outcomes:
      "Within 3 months of launch, Eco Car Wreckers was ranking on the first page of Google for multiple 'cash for cars' and 'car wreckers [suburb]' keywords across NSW. Inbound enquiry volume tripled compared to the previous site, with the majority coming from mobile users via local search.",
  },

  "map-dental": {
    challenge:
      "MAP Dental Center had no online booking system — all appointments were made by phone during clinic hours. Prospective patients researching treatments online found no detailed information on the clinic's site, leading them to book with competitors who had more informative digital presences.",
    steps: [
      {
        title: "Online Appointment Booking",
        description:
          "Integrated an appointment booking system allowing patients to select a treatment, choose a dentist, and pick a time slot — with instant confirmation and 24-hour reminder emails sent automatically.",
      },
      {
        title: "Treatment Landing Pages",
        description:
          "Individual pages for each dental treatment (implants, veneers, whitening, orthodontics, etc.) with procedure details, expected timelines, pricing ranges, and FAQs — giving research-stage patients everything they need to self-qualify.",
      },
      {
        title: "Before & After Gallery",
        description:
          "A results gallery organized by treatment type, giving prospective patients visual evidence of outcomes — one of the most effective trust signals for elective dental procedures.",
      },
    ],
    outcomes:
      "MAP Dental Center now receives online appointment bookings 24/7, and the detailed treatment pages significantly reduced the volume of basic information calls. Patients arrive at their consultations better informed, shortening the in-clinic decision-making process.",
  },

  "one-aesthetics": {
    challenge:
      "One Aesthetics is a Canadian medical aesthetics clinic offering treatments from Botox and fillers to laser skin resurfacing. Their original site was a single-page brochure with no booking capability — all appointments were handled by phone during business hours only, resulting in missed after-hours enquiries.",
    steps: [
      {
        title: "Treatment-Specific Landing Pages",
        description:
          "Individual pages for each treatment with procedure details, expected outcomes, pricing ranges, and FAQs — giving prospective patients enough information to self-qualify before booking.",
      },
      {
        title: "Online Consultation Booking Flow",
        description:
          "A multi-step booking form integrated with the clinic's calendar — patients select a treatment, pick a time slot, and receive a confirmation email automatically. Appointment reminders are sent 24 hours before the visit.",
      },
      {
        title: "Before & After Gallery",
        description:
          "A protected, tasteful results gallery organized by treatment type, with patient consent management built in — the most visited section after the homepage.",
      },
      {
        title: "Trust & Credentials Section",
        description:
          "Prominently featured practitioner credentials, regulatory registrations, and client testimonials — critical for medical aesthetics where trust is the primary conversion factor for new patients.",
      },
    ],
    outcomes:
      "Within weeks of launch, the clinic was receiving appointment bookings outside of business hours for the first time. Detailed treatment pages reduced basic enquiry calls, and individual treatment pages began ranking in local search for queries like 'Botox [city]' and 'lip fillers near me.'",
  },

  "dr-granoth": {
    challenge:
      "Dr. Granoth is an Israeli hand surgery specialist who needed a bilingual (Hebrew and English) medical platform to serve both local Israeli patients and international patients seeking specialized microsurgical expertise. A single-language site was limiting his reach and failing to convey the depth of his specialization to English-speaking referring physicians.",
    steps: [
      {
        title: "Bilingual Platform (Hebrew & English)",
        description:
          "Built a WordPress site with full Hebrew and English language support — including right-to-left text rendering for Hebrew pages — allowing both local and international audiences to access all content in their preferred language.",
      },
      {
        title: "Procedure & Condition Pages",
        description:
          "Detailed pages for each surgical procedure and hand condition treated — written for a medical audience (referring physicians) and accessible to patients — establishing Dr. Granoth's expertise in a competitive specialist market.",
      },
      {
        title: "International Patient Referral System",
        description:
          "A structured referral and enquiry form designed for both patients and referring physicians, capturing the clinical information needed to assess candidacy before the first appointment.",
      },
    ],
    outcomes:
      "Dr. Granoth's bilingual platform expanded his reach beyond the Israeli market to English-speaking patients and referring physicians internationally. Detailed procedure pages improved organic visibility for condition-specific search queries in both Hebrew and English.",
  },

  "diamond-labs": {
    challenge:
      "Diamond Labs sells lab-grown diamonds — a category where buyer skepticism is high and the ability to prove authenticity and ethical origin is a direct conversion factor. Their original site lacked any mechanism for buyers to verify the diamonds they were purchasing, undermining the core value proposition of lab-grown stones.",
    steps: [
      {
        title: "Blockchain Certificate Verification",
        description:
          "Integrated a blockchain-based provenance system allowing buyers to enter a diamond's certificate number and see its full origin, grading lab, and chain of custody — providing verifiable proof of authenticity before purchase.",
      },
      {
        title: "GIA Certificate Display",
        description:
          "Each product page displays the diamond's GIA or IGI grading report, with a direct link to the grading lab's verification portal — giving buyers a second, independent layer of confidence.",
      },
      {
        title: "Luxury eCommerce Design",
        description:
          "Built a premium WooCommerce store with an editorial, high-jewellery aesthetic — 360° diamond viewers, detailed cut/color/clarity filters, and a bespoke jewelry configurator for custom ring design.",
      },
    ],
    outcomes:
      "Diamond Labs' blockchain verification feature became a competitive differentiator in a market where buyer trust is the primary purchase barrier. The ability to independently verify every stone reduced return and dispute rates and improved first-time buyer conversion.",
  },

  "collabdiary": {
    challenge:
      "CollabDiary is an influencer marketing startup that needed a full SaaS platform MVP — not just a marketing website. The platform needed to connect brands with content creators, manage campaign briefs, track collaboration deliverables, and report on campaign performance.",
    steps: [
      {
        title: "Creator & Brand Profile System",
        description:
          "Built dual-profile onboarding flows — one for content creators (niche, audience size, platforms, rate card) and one for brands (industry, campaign types, budget ranges) — with a matching algorithm surfacing relevant partnership opportunities.",
      },
      {
        title: "Campaign Management Dashboard",
        description:
          "A dashboard for brands to create campaign briefs, invite creators, review pitches, and approve content — with status tracking at each stage of the collaboration workflow.",
      },
      {
        title: "Deliverable Tracking & Reporting",
        description:
          "Creators submit content links, publication dates, and performance metrics directly in the platform — giving brands a consolidated view of campaign ROI without chasing creators across email and DMs.",
      },
    ],
    outcomes:
      "CollabDiary launched as a functioning SaaS MVP with full creator–brand matching, campaign management, and reporting capabilities — a product that would have required a large development team to build from scratch using traditional agency approaches.",
  },

  "ht-business-group": {
    challenge:
      "HT Business Group is a multinational digital services firm that needed a corporate website capable of targeting multiple international markets simultaneously — with service area pages, a professional brand presentation, and a lead capture system connected to their sales CRM.",
    steps: [
      {
        title: "International Service Area Pages",
        description:
          "Created market-specific service pages targeting key geographies (US, UK, AU, Middle East) with locally relevant content and SEO optimization — allowing the firm to appear in search results across multiple markets from a single domain.",
      },
      {
        title: "CRM-Connected Lead Forms",
        description:
          "Integrated enquiry forms with their sales CRM so every website lead is automatically logged, assigned to a regional sales representative, and tracked through the pipeline — eliminating manual data entry.",
      },
      {
        title: "Corporate Visual Design",
        description:
          "Designed a professional, trust-conveying corporate website with a clear service hierarchy, executive team profiles, and client logos — matching the credibility expectations of enterprise-level prospects.",
      },
    ],
    outcomes:
      "HT Business Group's new website generates qualified international leads across multiple markets. CRM integration eliminated the gap between website contact and sales follow-up, and the professional design improved the brand's ability to win enterprise-level engagements.",
  },

  "faber-israel": {
    challenge:
      "Faber Israel distributes premium Italian espresso machines and coffee pods in the Israeli market. Entering a new market required a fully Hebrew-language eCommerce presence with subscription capabilities — and the technical challenge of a right-to-left language in WooCommerce requires careful implementation to avoid layout and checkout issues.",
    steps: [
      {
        title: "Hebrew WooCommerce Store (RTL)",
        description:
          "Built a fully right-to-left WooCommerce store in Hebrew, with all layout components, checkout flows, and admin panels correctly mirrored — a technically complex implementation that many WordPress developers get wrong.",
      },
      {
        title: "Coffee Pod Subscription Model",
        description:
          "Implemented a recurring subscription system for coffee pod deliveries — allowing customers to set a delivery frequency and receive pods automatically, increasing customer lifetime value and predictable monthly revenue.",
      },
      {
        title: "Machine + Pod Bundle Pages",
        description:
          "Created product bundle pages pairing espresso machines with compatible pod varieties — increasing average order value by guiding first-time buyers to purchase everything they need in a single transaction.",
      },
    ],
    outcomes:
      "Faber Israel launched with a fully functional Hebrew eCommerce store and subscription system — establishing their digital presence in the Israeli market. The subscription pod model created a recurring revenue stream from first-time machine buyers.",
  },

  "vouge-flix": {
    challenge:
      "Vouge Flix is a fashion media brand that needed a content platform built for visual storytelling — editorial lookbooks, brand spotlights, and trend coverage — designed to perform specifically with audiences who discover content through Instagram and expect a premium visual experience.",
    steps: [
      {
        title: "Editorial Layout System",
        description:
          "Built a magazine-style WordPress site with full-width editorial layouts, large-format imagery, and a flexible content builder — allowing the editorial team to create visually distinct articles and lookbooks without developer involvement.",
      },
      {
        title: "Instagram Feed Integration",
        description:
          "Pulled the brand's live Instagram content into the homepage and sidebar — keeping the site visually fresh without requiring additional publishing steps and reinforcing the brand's social presence for first-time visitors.",
      },
      {
        title: "Brand Partnership Pages",
        description:
          "Created dedicated brand spotlight pages for paid partnerships — giving fashion brands a high-quality editorial environment for their campaign content rather than a generic advertising banner.",
      },
    ],
    outcomes:
      "Vouge Flix launched a content platform that matches the visual quality their audience expects from a premium fashion media brand — enabling them to pitch brand partnerships with a professional editorial property rather than directing potential partners to their social profiles.",
  },

  "ernest-sturm": {
    challenge:
      "Ernest Sturm is a luxury hospitality influencer who needed a professional personal brand platform to attract high-end hotel and brand partnerships. Directing potential sponsors to social media profiles alone wasn't sufficient — enterprise brands require a media kit, press page, and portfolio of previous collaborations.",
    steps: [
      {
        title: "Editorial Portfolio Layout",
        description:
          "Designed a premium WordPress site with an editorial, luxury aesthetic — large-format hotel photography, refined typography, and a curated portfolio of stays and reviews that communicates the caliber of Ernest's audience and content.",
      },
      {
        title: "Press & Collaboration Section",
        description:
          "Built a dedicated press page listing brand partnerships, media features, and campaign highlights — giving luxury brands and hotel groups the credibility signals they need before initiating a partnership conversation.",
      },
      {
        title: "Digital Media Kit Integration",
        description:
          "Created a downloadable media kit linked from the site, covering audience demographics, platform reach, engagement rates, and partnership formats — replacing the manual process of sending PDFs to every enquiry.",
      },
    ],
    outcomes:
      "Ernest Sturm's platform gave him a professional anchor for his personal brand — a destination he could direct luxury hotel groups and travel brands to instead of Instagram. Inbound partnership enquiries increased as brands found a complete, credible presentation of his work in one place.",
  },

  "pacific-connect": {
    challenge:
      "The Pacific Connect app was commissioned to serve a geographically dispersed Pacific Islander community across multiple countries who lacked a single digital platform for community communication, event announcements, and resource sharing — relying on fragmented WhatsApp groups and email chains.",
    steps: [
      {
        title: "Group Messaging & Channels",
        description:
          "Built structured community channels within the app — separating general discussion, event announcements, and resource sharing — so members can engage with relevant content without being overwhelmed by a single chat stream.",
      },
      {
        title: "Event Management",
        description:
          "An in-app event system allowing community administrators to publish upcoming events, share location details, and track RSVPs — replacing the manual coordination previously done via WhatsApp.",
      },
      {
        title: "Resource Library",
        description:
          "A structured resource library for community documents, guides, and information — making important materials accessible to all members across multiple countries without requiring a shared file system or email distribution.",
      },
    ],
    outcomes:
      "Pacific Connect launched on Android and became the primary communication platform for the community, consolidating fragmented WhatsApp groups and email chains into a single structured space. Community administrators now manage events and communications from a purpose-built tool.",
  },

  "auto-reply-bot": {
    challenge:
      "Small business owners and busy individuals needed a way to automatically respond to incoming messages on WhatsApp, SMS, and other messaging apps when unavailable — without expensive CRM systems or requiring a dedicated person to manage messages during off-hours.",
    steps: [
      {
        title: "Multi-Platform Auto-Reply Engine",
        description:
          "Built an Android background service that monitors incoming messages across WhatsApp, SMS, and messaging apps — triggering automated replies based on user-defined keyword rules and schedules.",
      },
      {
        title: "Custom Trigger Rules",
        description:
          "A rule builder allowing users to define exactly which messages trigger which replies — by keyword, sender, time of day, or contact group — giving precise control over automation without requiring technical knowledge.",
      },
      {
        title: "Schedule & Do-Not-Disturb Integration",
        description:
          "Auto-reply schedules allow users to activate automated responses only during specific hours — such as after business hours or during meetings — with manual override at any time.",
      },
    ],
    outcomes:
      "Auto Reply Bot reached 50,000+ downloads on the Google Play Store, becoming one of the most downloaded auto-reply utilities in its category. Users range from solo business owners automating after-hours responses to individuals managing high message volumes.",
  },

  "irestore-pdm": {
    challenge:
      "iRestore is a property restoration contractor whose field teams were managing jobs with paper-based job sheets, physical inspection reports, and manual invoice creation — a process that caused delays, lost documentation, and errors when transferring field data back to the office.",
    steps: [
      {
        title: "Digital Job Tracking",
        description:
          "Built a mobile-first job management system where field technicians log job status updates, time on site, and materials used directly from the app — giving the office team real-time visibility into active jobs without phone check-ins.",
      },
      {
        title: "Photo Documentation",
        description:
          "An in-app camera tool for capturing before, during, and after photos tagged to specific jobs — replacing physical inspection reports and providing a time-stamped visual record for insurance claims and client sign-off.",
      },
      {
        title: "On-Site Invoice Generation",
        description:
          "Field technicians can generate and send invoices directly from the app once a job is complete — eliminating the delay between job completion and invoice delivery that previously required office processing.",
      },
    ],
    outcomes:
      "iRestore PDM eliminated the paper-based workflow for field teams, reducing job documentation time and invoice processing delays. The photo documentation system improved insurance claim resolution speed, and real-time job tracking reduced the administrative overhead of status follow-up calls.",
  },

  "whitelms-school": {
    challenge:
      "Whitelms Public School was managing parent-teacher communication across WhatsApp groups, physical notices, and phone calls — an inconsistent system where important information was regularly missed by parents. Teachers had no centralized tool for homework assignments, attendance, and school-wide announcements.",
    steps: [
      {
        title: "Real-Time Attendance Tracking",
        description:
          "Class teachers mark attendance in the app each morning — parents receive an automatic push notification if their child is marked absent, eliminating the lag between absence and parent notification.",
      },
      {
        title: "Homework Assignment System",
        description:
          "Teachers publish homework assignments, due dates, and resources in the app — parents and students see assignments by subject with completion tracking, replacing physical homework diaries.",
      },
      {
        title: "School-Wide Push Notifications",
        description:
          "Administrators send school announcements, event reminders, and emergency notices via push notification to all parent devices — replacing physical notice boards and WhatsApp group broadcasts with a managed, official channel.",
      },
    ],
    outcomes:
      "The Whitelms app became the single communication channel between school and home — replacing the fragmented system of WhatsApp groups, physical notices, and phone calls. Parent engagement with school communications increased measurably as information became reliable and accessible in one place.",
  },

  "benaka-stores": {
    challenge:
      "Benaka Stores is a local grocery retailer that needed to move beyond walk-in customers and build an online ordering channel — but a generic eCommerce template couldn't handle the specific requirements of grocery: large product volumes, category-heavy browsing, and a checkout flow optimized for repeat buyers who know exactly what they want.",
    steps: [
      {
        title: "Category-First Store Architecture",
        description:
          "Built a grocery-optimized WooCommerce store with a deep category hierarchy (fresh produce, dairy, dry goods, beverages, etc.) and a prominent search bar on every page — matching the mental model of how grocery shoppers actually browse.",
      },
      {
        title: "Search-First Product Discovery",
        description:
          "Implemented fast, indexed product search with autocomplete so returning customers can find and add frequent items in seconds — reducing the time-to-checkout for repeat buyers who know their shopping list.",
      },
      {
        title: "Repeat Buyer Checkout Optimization",
        description:
          "A saved-cart and order-history system allowing returning customers to reorder a previous shop with a single click — critical for a grocery store where weekly repeat purchases are the primary revenue model.",
      },
    ],
    outcomes:
      "Benaka Stores launched with a complete online grocery ordering channel, enabling the store to serve customers who prefer delivery or click-and-collect over in-person shopping. The repeat-buyer checkout features improved the second-purchase conversion rate significantly.",
  },
};
