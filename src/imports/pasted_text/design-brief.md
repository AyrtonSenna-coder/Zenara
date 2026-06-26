World-Class Premium Digital Agency — Complete Figma Design Brief01 · Project FoundationStrategic IntentDesign a flagship digital presence for a full-service digital agency that competes directly with BASIC/DEPT®/ueno/Instrument-tier studios. The site must function as a revenue system, not a portfolio — every section, interaction, and microcopy decision must move the visitor toward a booked consultation or submitted inquiry.Primary audience segments:

Seed–Series B startups needing brand + product velocitySME founders (KES 50K–500K project budgets) seeking measurable growthEnterprise procurement teams evaluating agency capability and cultural fit

Single design truth: The site itself is the case study. If we can't make our own site feel this good, why would a client trust us with theirs?

02 · Design Token SystemColor ArchitectureCORE PALETTE──────────────────────────────────────────────────────Void           #0B0F19   — Primary backgrounds, hero canvasDeep Navy      #111827   — Section backgrounds, card fillsSlate          #1E2535   — Elevated surface, modal backgroundsCharcoal Mid   #2A3245   — Borders, dividers, subtle containersMist           #8892A4   — Tertiary text, captions, labelsSilver         #C4CBD8   — Secondary text, placeholderIvory          #F0F2F6   — Body text on darkPure White     #FFFFFF   — Headings, primary text, icons

ACCENT SYSTEM──────────────────────────────────────────────────────Emerald Core   #00D084   — Primary CTA, success states, highlightsEmerald Dim    #00A868   — Hover state, pressed statesEmerald Glow   rgba(0,208,132,0.12)  — Ambient glow backgroundsElectric Blue  #3B82F6   — Links, secondary accentsViolet         #7C3AED   — Gradient terminus, luxury markerRose           #F43F5E   — Error states, alert chips

GRADIENT LIBRARY──────────────────────────────────────────────────────Hero Ambient    linear-gradient(135deg, #0B0F19 0%, #1a0f3a 50%, #0B0F19 100%)Brand Gradient  linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)Emerald Sweep   linear-gradient(90deg, #00D084 0%, #3B82F6 100%)Card Sheen      linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)Gold Foil       linear-gradient(135deg, #D6A85A 0%, #F0C980 50%, #D6A85A 100%)

SEMANTIC TOKENS──────────────────────────────────────────────────────bg-primary      → Void (#0B0F19)bg-surface      → Slate (#1E2535)bg-elevated     → Charcoal Mid (#2A3245)text-primary    → Pure White (#FFFFFF)text-secondary  → Ivory (#F0F2F6)text-muted      → Mist (#8892A4)border-subtle   → rgba(255,255,255,0.06)border-strong   → rgba(255,255,255,0.12)accent-primary  → Emerald Core (#00D084)accent-brand    → Brand GradientTypography SystemTYPEFACE ROLES──────────────────────────────────────────────────────Display/Hero     Space Grotesk, weight 700–800Tracking: -0.03em to -0.05em (tighten at large sizes)Use: Hero headline, section openers, pull quotes

Editorial        General Sans, weight 500–600Tracking: -0.01emUse: Service names, card titles, nav items

Body             Inter, weight 400–500Line height: 1.6–1.75Use: All paragraph copy, descriptions, meta

Utility/Data     JetBrains Mono (or IBM Plex Mono)Use: Statistics, counters, code snippets, timestampsTracking: 0.02em

TYPE SCALE (desktop, fluid clamp on responsive)──────────────────────────────────────────────────────9xl    → clamp(72px, 8vw, 120px)   — Hero display8xl    → clamp(56px, 6vw, 96px)    — Section hero7xl    → clamp(44px, 5vw, 72px)    — Page titles6xl    → clamp(36px, 4vw, 56px)    — Major headings5xl    → clamp(28px, 3vw, 44px)    — Sub-section heads4xl    → 36px                       — Card headings3xl    → 28px                       — Service titles2xl    → 22px                       — Body largexl     → 18px                       — Body defaultlg     → 16px                       — Captions, labelssm     → 13px                       — Fine print, metadataxs     → 11px                       — Badges, tags, chipsSpacing & GridSPACING SYSTEM (8-point base)──────────────────────────────────────────────────────4px   → micro gaps, icon padding8px   → tight spacing, badge padding12px  → compact element spacing16px  → default inner padding24px  → card padding, list gaps32px  → section sub-components48px  → component groups64px  → section top/bottom padding (mobile)80px  → section separation (tablet)96px  → large section padding (desktop)120px → hero vertical padding160px → hero section minimum height buffer

GRID SPECIFICATIONS──────────────────────────────────────────────────────Breakpoints:Mobile:  375px–767px  (4-column, 16px gutter, 16px margin)Tablet:  768px–1199px (8-column, 24px gutter, 32px margin)Desktop: 1200px–1440px (12-column, 32px gutter, 80px margin)Wide:    1441px+      (12-column, max-width 1440px centered)

Column width at 1440px: calc((1440 - 160 - 352) / 12) = ~77pxGutter: 32pxContent max-width: 1280pxWide reading max-width: 720px (blog, legal pages)Component TokensBORDER RADIUS──────────────────────────────────────────────────────sm    → 6px    (buttons, chips, tags)md    → 12px   (input fields, small cards)lg    → 16px   (service cards, testimonial cards)xl    → 20px   (feature panels, portfolio cards)2xl   → 24px   (hero cards, floating UI elements)3xl   → 32px   (modal overlays, full-bleed panels)pill  → 9999px (badges, status indicators, CTAs)

SHADOW LIBRARY──────────────────────────────────────────────────────shadow-sm    → 0 1px 3px rgba(0,0,0,0.3)shadow-md    → 0 4px 16px rgba(0,0,0,0.4)shadow-lg    → 0 8px 32px rgba(0,0,0,0.5)shadow-xl    → 0 16px 48px rgba(0,0,0,0.6)shadow-brand → 0 0 40px rgba(0,208,132,0.2), 0 0 80px rgba(0,208,132,0.08)shadow-glow  → 0 0 60px rgba(59,130,246,0.25), 0 0 120px rgba(124,58,237,0.15)shadow-card  → 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)

GLASSMORPHISM PANELS──────────────────────────────────────────────────────background: rgba(30, 37, 53, 0.6)backdrop-filter: blur(20px) saturate(180%)border: 1px solid rgba(255,255,255,0.08)box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)

03 · Global Components & PatternsNavigation SystemDESKTOP NAV──────────────────────────────────────────────────────Height: 72px (initial), collapses to 60px on scrollBackground: transparent → glassmorphic on scroll(backdrop-filter: blur(24px), bg: rgba(11,15,25,0.85))Border bottom: none → rgba(255,255,255,0.06) on scroll

Layout:[Logo wordmark 140px] [Nav links center] [CTA cluster right]

Logo: Agency wordmark + custom geometric mark— Mark: abstract diamond/node shape in emerald— Wordmark: Space Grotesk 700, white, kerning -0.03em

Nav links (General Sans 500, 15px):Work  |  Services  |  About  |  Blog  |  Pricing— Active: emerald underline 2px, offset 4px— Hover: text fades to white (0.6 → 1.0), 200ms ease— Services + Work: mega-dropdown on hover

Mega-dropdown (Services):Floated panel, width 640px, glassmorphic surfaceTwo-column layout: category list left, featured service rightFeatured: large card with preview image, description, CTAAnimation: fade + translate-Y(-8px → 0), 250ms cubic-bezier(0.16,1,0.3,1)

CTA cluster:[Case Studies  text-link]  [Book a Call  →  filled button]Button: emerald bg, void text, pill shape, magnetic hover

MOBILE NAV (< 768px)──────────────────────────────────────────────────────Hamburger: animated 3-line → X morphing iconFull-screen overlay: bg void, z-index 9999Links: 48px tall, Space Grotesk 700, 32px size, staggered fade-inBottom anchor: phone number + WhatsApp icon + Book CTAButton SystemPRIMARY (Filled)bg: #00D084, text: #0B0F19, weight: 600padding: 14px 28px, border-radius: pillhover: scale(1.02) + shadow-brand + bg shift to #00F09Aactive: scale(0.98)magnetic effect: cursor proximity shifts button position ±8px

SECONDARY (Outlined)bg: transparent, border: 1px solid rgba(255,255,255,0.2)text: white, hover: border-color white + bg rgba(255,255,255,0.04)

GHOSTbg: transparent, text: mutedhover: text white + underline

ICON BUTTON40px × 40px, rounded-fullvariants: filled, outlined, ghost

SIZESsm: 11px text, 10px/20px paddingmd: 14px text, 12px/24px padding (default)lg: 16px text, 16px/32px paddingxl: 18px text, 20px/40px padding (hero CTAs)Card SystemSERVICE CARDSize: varies (grid-defined)bg: rgba(30,37,53,0.6), glassmorphismborder: 1px solid rgba(255,255,255,0.06)border-radius: 20pxpadding: 32pxhover:— border-color: rgba(0,208,132,0.3)— box-shadow: shadow-brand— icon lifts translate-Y(-4px)— arrow appears slide-in from left

Anatomy:[Icon container 48×48, rounded-12, bg emerald-glow][Service name, 22px, General Sans 600, 16px top][Description, 15px Inter, muted, 8px top, 3 lines max][Tags row: 2–3 pill chips, 12px, 12px top][Arrow link, 14px, emerald, 24px top]

PORTFOLIO CARDAspect: 4/3 or 16/9 image areaImage: full-bleed with 12px top radiusOverlay: gradient bottom-to-top rgba(11,15,25,0) → rgba(11,15,25,0.9)Hover:— image scale(1.04), 400ms ease— overlay darkens— meta text slides up from bottom— "View Case Study →" button appearsMeta: Category chip + Project name + Year

TESTIMONIAL CARDbg: Slate (#1E2535)border-left: 3px solid emeraldpadding: 32pxQuote: 18px Inter italic, IvoryAuthor: avatar 40px + name (white) + title (muted)Rating: 5 emerald stars, 14px

STAT CARD (floating)Glass panel, compactLarge number: 48px JetBrains Mono 700Label: 13px Inter mutedTrend arrow or mini sparklineShadow: shadow-xl + colored ambient glowForm SystemINPUT FIELDSHeight: 52pxbg: rgba(30,37,53,0.8)border: 1px solid rgba(255,255,255,0.08)border-radius: 12pxpadding: 0 20pxtext: white, 16px Interplaceholder: muted, 400 weightfocus:border: 1px solid #00D084box-shadow: 0 0 0 3px rgba(0,208,132,0.15)bg: rgba(30,37,53,1.0)error: border #F43F5E, shadow rose-glowlabel: 13px General Sans 500, silver, uppercase, 0.08em tracking

TEXTAREAmin-height: 140pxresize: vertical

SELECTCustom dropdown: glass panel, max-height 240px, scrollable

MULTI-STEP FORM (Book Consultation page)Progress indicator: horizontal stepper, emerald fillSteps: (1) About You → (2) Project Scope → (3) Budget & Timeline → (4) ConfirmEach step: single card, fade transition between stepsValidation: inline, real-time after blur

04 · Page-by-Page SpecificationsPAGE 01 — HOMESection 1: Navigation(spec above)Section 2: HeroLAYOUTMin-height: 100vhBackground: bg-primary (#0B0F19)Background layer stack (bottom to top):1. Base color: #0B0F192. Radial gradient bloom: 600px circle, purple/violet, 20% opacity, top-right quadrant3. Radial gradient bloom: 400px circle, emerald, 10% opacity, bottom-left4. Abstract 3D mesh/orb: WebGL or Spline embed, slow rotation, 30fps min5. Noise texture overlay: 3% opacity SVG grain6. Content layer

CONTENT (12-col grid)Columns 1–7: text content, vertically centeredColumns 8–12: 3D visual / device mockup

Eyebrow label: "Digital Agency — Est. 2024"Style: chip shape, bg rgba(0,208,132,0.1), border rgba(0,208,132,0.3)text: emerald 12px General Sans 600 uppercase trackedicon: small pulse dot before text

Headline (Space Grotesk 800, 72–96px, white, -0.04em tracking):Line 1: "We Build Digital"Line 2: "Experiences That" [gradient word: "Convert"]Line 3: — (let line 2 breathe)Note: Gradient word uses brand gradient (blue→violet) + underline brush stroke SVG

Sub-headline (Inter 400, 18px, Ivory, 1.7 line-height, max-width 480px):"From cinematic brand identities to revenue-driving web systems —we partner with ambitious companies to build digital productsthat don't just look good, they perform."

CTA row (gap 16px, marginTop 40px):[Book a Free Strategy Call  →]  ← primary, xl size[View Our Work]  ← ghost, xl size, play icon

Social proof strip (marginTop 48px):Avatar cluster (6 overlapping client photos, -8px overlap)+ "Trusted by 120+ companies across East Africa and beyond"+ 5 stars (emerald) + "4.9/5 avg. rating"

Right column — Hero Visual:Large 3D browser/device mockup (iPad Pro + MacBook angle)Showing: Agency's own dashboard or a featured client projectFloating UI cards scattered around device:Card A: "New Lead Captured" — notification style, top-right, animated pulseCard B: "ROI +340%" — stat card, bottom-left, counter animation on enterCard C: "Project Live 🚀" — status chip, mid-right, with checkmarkAll cards: glassmorphism, shadow-xl, gentle float animation (CSS keyframe, 3s ease-in-out infinite, offset delays)

ANIMATIONSHeadline: word-by-word reveal, 60ms stagger, translateY(20px)→0 + opacitySub-headline: fade in, 200ms delay after headlineCTAs: fade + scale(0.96)→1, 400ms delayFloating cards: independent float timings (3s / 4.5s / 3.8s)Background orb: slow rotation/breathe, loopedCursor: custom dot cursor + trailing glow (emerald, 40px, blur 20px)Section 3: Client Logo StripLAYOUTFull-width, paddingY 48pxbg: rgba(255,255,255,0.02)border-top/bottom: 1px solid rgba(255,255,255,0.05)

CONTENTEyebrow: "Trusted by innovative companies"— 12px, uppercase, muted, center, letterSpacing 0.15em

Logos: 8–12 client logos, monochrome white at 40% opacityHover: opacity 100%, scale 1.05Layout: infinite scroll marquee, both directions (two rows or one)Speed: 40s linear loopGap: 80px between logosOn hover: pauses

Logos (placeholder names for design): Safaricom, NCBA, Jumia, Equity Bank,Kenya Airways, Twiga Foods, Cellulant, M-KOPA, Copia Global, Poa InternetSection 4: Services GridLAYOUTpaddingY: 120pxbg: bg-primary

Section header (cols 1–6):Eyebrow: "What We Do"H2: "Full-spectrum digital services built for growth"Sub: "From first impression to final conversion — we cover every touchpoint."

Filter tabs (cols 1–12, marginTop 48px):[All]  [Design]  [Development]  [Marketing]  [Content]  [Strategy]Style: pill tabs, default muted border, active: emerald fill

Services grid (marginTop 48px):Desktop: 3-column grid (cols span 4 each)Tablet: 2-columnMobile: 1-columnGap: 24pxItems: 9–12 featured services

SERVICE CARD CONTENT (per card):Icon: custom SVG or Phosphor icon, 32px, emeraldNumber: 01/02/03 — General Sans 500, muted, 12px, positioned top-rightTitle: 20px General Sans 600, whiteDescription: 14px Inter 400, Ivory, 2.5 linesTags: 2 chips (e.g., "Webflow" "React")CTA: "Explore →" emerald text link

"See All Services →" CTA button: centered, marginTop 48px, secondary style

SERVICES TO DESIGN (grouped):GROUP: Design— Web Design (Figma, Framer, Webflow)— UI/UX Design (Research, Wireframing, Prototyping)— Brand Identity (Logo, Style Guide, Brand Voice)— Graphic Design (Posters, Flyers, Business Cards)— Motion Graphics (After Effects, Rive, Lottie)

GROUP: Development— Web Development (React, Next.js, WordPress)— E-commerce Solutions (Shopify, WooCommerce)— Website Maintenance & Support— Analytics & Conversion Tracking

GROUP: Marketing— SEO & Content Strategy— Google Ads & PPC— Facebook & Instagram Ads— TikTok Ads & Short-form Content— Social Media Management

GROUP: Content— Content Creation & Copywriting— Video Editing & Production— Photography & Visual Direction— Company Profiles & Pitch DecksSection 5: Featured PortfolioLAYOUTpaddingY: 120pxbg: bg-primary

Header row (space-between):Left: H2 "Work that speaks for itself"Right: "View all projects →" ghost link

Featured project (full-width, cols 1–12):Left col (5): Project details— Client name chip— H3: Project title— Description: 3 lines— Services delivered: tag list— "View Case Study →" primary buttonRight col (7): Large project screenshot— Browser frame mockup with site screenshot— Floating metric card overlay (e.g., "+280% organic traffic")— Shadow: shadow-xl

Grid projects (below featured, 3-column, gap 24px):3 portfolio card componentsEach: image + category + title + hover overlay

Marquee scroll row:Horizontal scrollable row of 8–10 project thumbnailsAuto-scroll on hover, manual drag enabledSection 6: Case StudiesLAYOUTpaddingY: 120pxbg: rgba(17,24,39,0.8) (Deep Navy band)

Header:Eyebrow: "Case Studies"H2: "Real businesses. Real results."Sub: "We don't just deliver projects — we engineer outcomes."

Case study cards (2 columns, gap 32px):Each card:Top: Result metric (e.g., "+340% revenue growth")Style: JetBrains Mono, 48px, gradient textMiddle: Company name + industry + challenge one-linerBottom: Before/after screenshot slider or result chartFooter: "Read Full Case Study →" text link

Mini result strip (below cards):3 inline stats: "120+ projects delivered" | "$2.4M+ in client revenue generated" | "98% client retention"Section 7: Statistics CounterLAYOUTFull-width band, paddingY 80pxbg: linear-gradient(135deg, rgba(0,208,132,0.05) 0%, rgba(59,130,246,0.05) 100%)border-top/bottom: rgba(255,255,255,0.06)

4-column stat grid:Stat 1: "120+" — Projects DeliveredStat 2: "98%" — Client Satisfaction RateStat 3: "$2.4M+" — Revenue Generated for ClientsStat 4: "5 yrs" — Combined Team Experience

Each stat:Number: 64px JetBrains Mono 700, whiteCounter animation: counts up on enter viewport (IntersectionObserver)Label: 15px Inter 400, MistSeparator: 1px vertical line, muted, between statsSection 8: Process / WorkflowLAYOUTpaddingY: 120px

Header:H2: "How we work"Sub: "A structured process that removes uncertainty and delivers results."

Timeline (horizontal on desktop, vertical on mobile):4 phases, connected by animated line (draws on scroll)

Phase 01: DISCOVER
  Icon: magnifying glass
  Title: "Discovery & Strategy"
  Body: "We audit your current position, research your market, and map the
         exact path to your goals."
  Duration chip: "Week 1–2"

Phase 02: DESIGN
  Icon: pen tool
  Title: "Design & Prototype"
  Body: "Every pixel is intentional. We design with conversion in mind,
         tested through rapid prototyping cycles."
  Duration chip: "Week 2–4"

Phase 03: BUILD
  Icon: code brackets
  Title: "Development & Integration"
  Body: "Performant, scalable builds. We integrate every tool your
         business needs to operate and grow."
  Duration chip: "Week 4–8"

Phase 04: GROW
  Icon: trending arrow
  Title: "Launch & Optimise"
  Body: "Post-launch is where we start. We track, iterate, and
         continuously optimise for compounding results."
  Duration chip: "Ongoing"

Timeline line: 2px, draws from left to right with scroll progressActive phase: emerald indicator dot, pulsing ringSection 9: TestimonialsLAYOUTpaddingY: 120pxbg: bg-primary

Header:Eyebrow: "Client Stories"H2: "What our clients say"

Layout: horizontal carousel + grid hybrid— Top: 3-column card grid (full quotes, photo, name, company)— Below: Scrollable horizontal carousel with navigation arrows + dots

Each testimonial card:Opening quote mark: 64px, emerald, absolute positionedQuote body: 18px Inter 400 italic, IvoryDivider: 1px mutedAuthor row: 48px photo + name (white 600) + title + company logo (monochrome)Rating: 5 filled stars, 14px, emerald

Video testimonial card (1 featured):Thumbnail with play button overlayClient name + company"Watch 2:30" labelSection 10: FAQLAYOUTpaddingY: 120pxbg: Deep Navy band

Header (cols 1–5):Eyebrow: "Got Questions?"H2: "Frequently asked questions"

Accordion (cols 7–12, right column):8–10 items, one open by defaultEach item:Question: 17px General Sans 600, whiteAnswer: 15px Inter 400, Ivory, line-height 1.7Toggle: + / × icon, emerald, right-alignedBorder-bottom: rgba(255,255,255,0.06)Animation: height 0 → auto, 300ms easeOpen state: question in emerald

Sample questions:— "How much does a website cost?"— "How long does a typical project take?"— "Do you work with clients outside Kenya?"— "What's included in website maintenance?"— "Can you redesign our existing website?"— "How do Facebook and Google Ads work?"— "Do you sign NDAs?"— "What happens after the project launches?"Section 11: Conversion Banner (Pre-footer)LAYOUTFull-width, paddingY 120pxbg: deep charcoal band with brand gradient overlay (subtle)OR: Full bleed image background (blurred abstract) + dark overlay

Content (centered):Eyebrow chip: "Ready to grow?"H2 (massive, 72px): "Let's build something extraordinary together."Sub: "Book a free 30-minute strategy call. No pitch decks. No fluff.Just a real conversation about your goals."CTA row:[Book Your Free Call  →]  ← primary XL[hello@agencyname.com]  ← ghost, email prefill

Or sub-note: "Response within 24 hours · No obligation · 100% confidential"

Visual: Abstract particle constellation or looping gradient animationFloating badges:"Free Consultation" chip, emerald"No contracts required" chip, mutedSection 12: FooterLAYOUTbg: #0B0F19 (Void)border-top: 1px solid rgba(255,255,255,0.06)paddingY: 80px

4-column layout:COL 1 — Brand (span 3):Logo + wordmarkTagline: "Engineering revenue through design & technology."Social links: LinkedIn, Instagram, Twitter/X, Behance, Dribbble(icon buttons, 36px, outlined, hover: fill emerald)WhatsApp CTA: "Chat on WhatsApp" with WA icon, green

COL 2 — Services:
  Header: "Services" General Sans 600
  Links: Web Design, Web Development, UI/UX, E-commerce, SEO,
         Google Ads, Facebook Ads, Social Media, Branding,
         Motion Graphics, Content Creation, Photography

COL 3 — Company:
  Header: "Company" General Sans 600
  Links: About, Our Work, Case Studies, Blog, Pricing, Careers,
         Press Kit, Privacy Policy, Terms

COL 4 — Contact:
  Header: "Get in Touch" General Sans 600
  Email: hello@zovu.co.ke
  Phone: +254 XXX XXX XXX
  Location: Mombasa, Kenya 🇰🇪
  Hours: Mon–Fri, 8am–6pm EAT
  Awards badge: (Awwwards nominee placeholder)

Bottom bar:Left: "© 2025 Zovu Digital. All rights reserved."Right: "Designed & built by Zovu Digital"Divider: 1px muted, full-width above

PAGE 02 — ABOUTSECTIONS:

Hero: Split layout — headline left, team photo mosaic rightHeadline: "We are builders. Strategists. Partners in your growth."Sub: Agency origin story, 2 sentences max

Origin Story: Editorial 2-column — pull quote left, body text rightInclude: founding year, mission, values as inline highlighted phrases

Core Values: 4-card gridValues: Precision, Transparency, Velocity, PartnershipEach: icon + value name + 2-line description

Team Grid:Founder card: large (2 columns), photo + name + title + bio + LinkedInTeam members: 3-column grid, photo + name + role + socialEmpty "Join Us" card at the end

Agency Differentiators: Full-width feature listLeft: "Why Zovu Digital?" headerRight: 4 differentiator items with emerald checkmarks and short copy

Partner/Tool Logos:"Tools & technologies we work with"Grid of 16–24 technology logos: Figma, Framer, Webflow, Next.js,Shopify, WordPress, Google Ads, Meta Business, Mailchimp, HubSpot,Google Analytics, Ahrefs, After Effects, Premiere Pro, Lottie, Rive

Mini CTA: "Work with us" secondary banner

PAGE 03 — SERVICES (Overview)SECTIONS:

Hero: Full-width, darkH1: "Everything your brand needs to grow digitally"Sub: 2-sentence positioningFilter navigation: category tabs (Design / Development / Marketing / Content / Strategy)

Service Category Sections (one per category):Each category section:— Category name as large background text (decorative, 10% opacity)— 3-column card grid of services in that category— "Starting from KES X,XXX" on each card— Estimated turnaround badge

Custom Package CTA:Banner: "Can't find what you need?"Sub: "We build custom solutions. Let's talk."Button: "Book Discovery Call"

Pricing teaser: Link to pricing page with 3 headline price points

PAGE 04 — INDIVIDUAL SERVICE(Template, replicated per service)SECTIONS:

Hero: Service name + icon (large, 120px) + headline + 2-line descriptionRight: relevant device mockup or illustration

What's Included: 2-column feature list with checkmarks and brief descriptions— Every deliverable listed explicitly

Process for this service: 3–5 step vertical timeline

Portfolio examples for this service: 3-card mini portfolio

Pricing tiers: 3-column table (Starter / Growth / Enterprise)— Feature comparison list— "Most Popular" badge on Growth— KES pricing, monthly or per-project— Inclusions, exclusions clearly listed

FAQs specific to this service: 5 questions

Related services: 3 cards — "You might also need..."

Service-specific CTA: "Get your [service name] done right"

PAGE 05 — PORTFOLIOSECTIONS:

Hero: "Work that moves the needle" + total project count chip

Filter system:Category pills + Industry pills + Year selectorReal-time filter animation (items fade/reposition, no page reload)

Project grid:Masonry or asymmetric grid (3-col desktop, 2-col tablet, 1-col mobile)Mix of landscape and portrait aspect ratiosHover: overlay with project name, category, "View Project →"

Featured case study banner (inline):1 large horizontal card breaking the gridMetric headline + screenshot + CTA

Load more: infinite scroll or "Load 12 more →" button

PAGE 06 — CASE STUDIESSECTIONS:

Hero: "Proof over promises" + sub

Case study cards (vertical stack, full-width):Each: horizontal cardLeft: project image / screenshotRight: Client name + industry + challenge + result metrics + services + CTA

Results roll-up banner: "Across all clients: X revenue generated, Y% avg. growth"

Featured video case study: embedded 16:9 player

PAGE 07 — INDIVIDUAL CASE STUDY(Template)SECTIONS:

Hero: Client logo + project title + 3 headline metricsbg: client's brand color (desaturated, dark overlay)

Overview: Challenge / Solution / Result in 3-column layout

Project brief: Client quote blockquote + project scope

Process documentation: Timeline with screenshots per phase

Visual showcase: Full-width image gallery, lightbox-enabled— Desktop + mobile previews— Before/after slider (if applicable)— Motion design preview if applicable

Results section: Large stat cards with context annotations

Client testimonial: Featured card with photo

Next project: "Up next →" card to next case study

CTA: "Ready for results like this?"

PAGE 08 — PRICINGSECTIONS:

Hero: "Transparent pricing. No surprises."

Toggle: [Monthly] [Project-based] — toggles pricing display

Plan comparison: 3-column tableSTARTER | GROWTH | ENTERPRISEFeature list: 20+ items with check / partial / dash statesPopular badge: on GrowthCTA per column

Custom enterprise section:"Need a custom solution?" — horizontal bannerEnterprise features list: dedicated manager, SLA, custom integrations

Service add-ons grid:Individual services purchasable: each with name + price + descriptionGrid, 3 columns

FAQ: 6 pricing-specific questions

Money-back / satisfaction guarantee badge section

Comparison: "Zovu Digital vs. Freelancer vs. In-house"Table with rows: Cost, Speed, Quality, Consistency, Strategy, Scalability

PAGE 09 — BLOGSECTIONS:

Hero: Featured article (large horizontal card)Thumbnail + category + title + author + date + read time + CTA

Filter bar: All / Design / Development / Marketing / Strategy / Case Studies

Article grid: 3-column (cols 4ea)Each card: thumbnail + category chip + title + excerpt + author avatar + date

Sidebar (on article page): Recent posts, categories, newsletter CTA

Newsletter CTA band:"Get insights in your inbox every week"Email input + subscribe button"No spam. Unsubscribe anytime."

PAGE 10 — BLOG ARTICLELAYOUT:Max-width: 720px centered for bodyReading progress bar: top, emerald fill, fixed

SECTIONS:

Category chip + H1 + excerpt

Author row: photo + name + role + date + read time + share icons

Hero image: full-width, rounded corners

Article body:— H2, H3 heading styles— Pull quotes: large left-border emerald— Callout boxes: glass panels for tips/warnings— Inline CTAs (mid-article)— Code blocks: monospace, dark surface

Table of contents: sticky right sidebar (desktop)

Author bio card (end)

Related articles: 3-card grid

Comments: Disqus or custom (optional)

PAGE 11 — CONTACTSECTIONS:

Hero: "Let's start a conversation"Sub: "Tell us about your project and we'll get back within 24 hours."

Split layout:Left (5 cols): Contact info— Office location with map embed (Google Maps, dark style)— Email (mailto link)— Phone— WhatsApp button— Social links— "Response time: < 24 hours" badge— Hours of operation

Right (7 cols): Contact formFields: Name, Email, Phone, Company, Service interested in (dropdown),Project budget (range selector), Project description (textarea),How did you hear about us (dropdown)Button: "Send Message →" primary XLNote: "Your info is safe with us. No spam ever."

Alternative CTAs:3 cards: "Book a Call" | "WhatsApp Us" | "Email Directly"

Locations strip (if multiple offices or remote-friendly):"We work with clients globally" + timezone info

PAGE 12 — 404DESIGN:Full screen, darkLarge "404" in JetBrains Mono, gradient fill, 20% opacity (background watermark)Centered content:H2: "This page got lost in the void."Sub: "But great work is never lost. Let us help you find your way."CTA: [← Back Home] [View Our Work]Animated: floating astronaut or drifting geometric shapeBackground: particle/star field (CSS or canvas)

PAGE 13 — THANK YOUDESIGN:Full screen, celebration feelCheckmark animation: Lottie or CSS SVG drawH2: "Your message is on its way! 🚀"Sub: "We'll review your brief and get back to you within 24 hours.In the meantime, explore our latest work."CTA row: [View Our Portfolio] [Read Our Blog]Confetti animation: optional subtle CSS confetti burst on load

PAGE 14 — BOOK CONSULTATIONSECTIONS:

Hero (compact): "Book a free 30-minute strategy session"Sub: What to expect in the call (3 bullet points)

Calendar embed: Calendly or Cal.com, dark theme, full-width

OR Multi-step form (if no calendar embed):Step 1: Contact info (name, email, phone)Step 2: Project details (type, budget, timeline)Step 3: Preferred date/time slots (custom date picker)Step 4: Confirmation summary

Right sidebar (desktop):— "What you'll get" checklist— Interviewer profile (founder photo + mini bio)— Client trust badges— "Free, no-obligation, 100% confidential" assurance chips

05 · Interaction & Animation SystemGLOBAL PRINCIPLES──────────────────────────────────────────────────────Easing standard:    cubic-bezier(0.16, 1, 0.3, 1)  — snappy decelerationEasing in:          cubic-bezier(0.4, 0, 1, 1)Easing out:         cubic-bezier(0, 0, 0.2, 1)Micro interaction:  100–200msUI transition:      200–300msPage element:       400–600msEntrance animation: 600–800msScroll-triggered:   800ms–1200ms staggered

SCROLL ANIMATIONS──────────────────────────────────────────────────────All sections: fade-in + translateY(32px→0) on viewport entryStagger delay: 80ms per child elementParallax: hero background moves at 0.4× scroll rateParallax: floating UI cards move at 0.6× and 0.8× (independent)Horizontal scroll: marquee sections

TEXT ANIMATIONS──────────────────────────────────────────────────────Hero headline: word-split reveal, 60ms staggerSection H2s: char-level blur-to-sharp reveal (optional, use sparingly)Counters: count-up from 0 on viewport enter, 1200ms, ease-out

HOVER MICRO-INTERACTIONS──────────────────────────────────────────────────────Buttons: scale + glow + slight translateY(-2px)Cards: border highlight + shadow elevation + child element motionNav links: underline grows from left → right (transform scaleX)Images: subtle scale(1.03) inside clipped containerSocial icons: rotate 5deg + color changeFooter links: translateX(4px) on hover

CURSOR──────────────────────────────────────────────────────Custom cursor: 8px dot (white), 40px ring (rgba white 0.3)— Ring lags 80ms behind dot position— On hover-button: ring expands to 60px, fills emerald— On hover-image: ring becomes "View" text label (masked)— On drag area: becomes ← → arrows

LOADING / PAGE TRANSITIONS──────────────────────────────────────────────────────Initial page load: agency wordmark center → scales down → nav positionDuration: 1200ms, opacity out on completePage transitions: clip-wipe or fade-black-to-clear between pages

06 · Design System & Figma File StructureFIGMA FILE ORGANIZATION──────────────────────────────────────────────────────📁 00_Foundation├── 🎨 Color Styles (all tokens above as Figma Styles)├── 📝 Text Styles (all type scale + roles)├── 💠 Effect Styles (all shadows, glows, blur)└── 📐 Grid Styles (desktop / tablet / mobile)

📁 01_Assets├── 🖼 Photography (placeholder Unsplash/Pexels selects)├── 🎯 Icons (Phosphor set + custom SVG set)├── 💻 Device Frames (MacBook, iPhone 15 Pro, iPad Pro)└── 🌟 Illustrations (abstract 3D orbs, mesh backgrounds)

📁 02_Components├── Navigation (desktop mega-menu + mobile overlay)├── Buttons (all variants + states + sizes)├── Cards (Service / Portfolio / Testimonial / Stat / Blog)├── Forms (all input types + states + multi-step)├── Badges & Chips├── Accordion├── Tabs & Filters├── Modals├── Footer└── Misc (loaders, tooltips, toasts)

📁 03_Pages — Desktop (1440px)├── 01_Home├── 02_About├── 03_Services├── 04_Service_Individual_[Template]├── 05_Portfolio├── 06_Case_Studies├── 07_Case_Study_[Template]├── 08_Pricing├── 09_Blog├── 10_Blog_Article_[Template]├── 11_Contact├── 12_404├── 13_Thank_You└── 14_Book_Consultation

📁 04_Pages — Mobile (375px)└── [Mirror of 03 for mobile breakpoints]

📁 05_Pages — Tablet (768px)└── [Mirror of 03 for tablet breakpoints]

📁 06_Prototype└── Connected flows: Home → Services → Service Page → Contact → Thank YouHome → Portfolio → Case StudyNav mega-menu interactionsMobile hamburger flow

📁 07_Design_System_Reference├── Component anatomy sheets├── Spacing documentation├── Motion guidelines (annotated)└── Accessibility notes (contrast ratios, focus states)

07 · Accessibility & Performance StandardsACCESSIBILITY──────────────────────────────────────────────────────Contrast: All text minimum 4.5:1 (WCAG AA), headings 3:1 minimumFocus states: Visible on all interactive elementsStyle: 2px emerald outline, 2px offsetSkip navigation: "Skip to main content" visible on focusReduced motion: @prefers-reduced-motion disables all non-essential animationAlt text: All images have descriptive alt text annotations in designHeading hierarchy: H1→H2→H3 never skippedForm labels: Every input has associated visible labelError messages: Descriptive, never just red border

PERFORMANCE TARGETS (design decisions that support)──────────────────────────────────────────────────────LCP < 2.5s: Hero image pre-defined dimensions, no CLSImages: All mockups/photos at correct aspect ratio to prevent layout shiftFonts: Variable fonts where possible, max 2–3 font familiesIcons: SVG sprite, not individual HTTP requestsVideo: Poster frame defined, lazy loaded

08 · Copy Tone & VoiceBRAND VOICE PILLARS──────────────────────────────────────────────────────Confident, not arrogant   — "We build systems that generate revenue"Specific, not vague       — "+340% organic traffic in 90 days" not "great results"Human, not corporate      — "Let's talk" not "Initiate a consultation request"Direct, not salesy        — Lead with value, end with invitation

HEADLINE FORMULAS TO USE──────────────────────────────────────────────────────[Outcome + Mechanism]:     "More clients, fewer headaches — built into your website"[Challenge + Solution]:    "Your website isn't converting. Here's why, and how we fix it."[Bold claim + Proof]:      "We built Jumia's campaign that generated KES 4.2M in 30 days"[Tension + Resolution]:    "Beautiful design without performance is decoration. We do both."

MICROCOPY STANDARDS──────────────────────────────────────────────────────CTA buttons: always action + benefit, never just "Submit"Good: "Book My Free Call →"  |  "Start My Project"  |  "Get My Quote"Bad:  "Submit"  |  "Send"  |  "Click Here"

Form labels: sentence case, specificGood: "Your project budget range"Bad: "Budget"

Error messages: empathetic + instructiveGood: "Email addresses look like: yourname@example.com"Bad: "Invalid email"

Empty states: directional + warmGood: "No projects in this category yet — but we'd love to build one for you."

09 · Signature Design ElementThe single memorable element that defines this site across all pages:The "Revenue Pulse" — a living indicator system.Throughout the design, subtle emerald pulse animations appear at meaningful moments: on the nav logo dot, on active CTA buttons, on stat counters when they finish counting, and on the hero "floating notification" cards. Each pulse radiates 2–3 ring echoes that fade outward — visually communicating that this agency's work is alive, active, and generating output. The metaphor: not a static portfolio, but a system in motion. It should feel like a heartbeat — present but not distracting. This single motif ties together the brand's "engineering revenue" narrative at a visual level.

This prompt is architected to produce a complete, scalable, dev-ready design system that could be handed directly to an engineering team. Every decision has a rationale; every component has specified states, spacing, and interaction behavior. The result should be indistinguishable in quality from agency sites featured on Awwwards — and built to convert.