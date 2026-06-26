import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Star,
  Play,
  Check,
  Plus,
  Minus,
  Globe,
  Zap,
  Layers,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Palette,
  Video,
  Camera,
  ShoppingBag,
  Search,
  Megaphone,
  Sparkles,
  Shield,
  Code2,
  PenTool,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";

/* ── Font families ──────────────────────────────────────────── */
const F_DISPLAY = "'Space Grotesk', sans-serif";
const F_EDITORIAL = "'Plus Jakarta Sans', sans-serif";
const F_BODY = "'Inter', sans-serif";
const F_MONO = "'JetBrains Mono', monospace";

/* ── Color tokens ───────────────────────────────────────────── */
const C = {
  void: "#0B0F19",
  navy: "#111827",
  slate: "#1E2535",
  charcoal: "#2A3245",
  mist: "#8892A4",
  silver: "#C4CBD8",
  ivory: "#F0F2F6",
  white: "#FFFFFF",
  emerald: "#00D084",
  emeraldDim: "#00A868",
  blue: "#3B82F6",
  violet: "#7C3AED",
  rose: "#F43F5E",
};

/* ── Shared styles ──────────────────────────────────────────── */
const glassmorphism =
  "bg-[rgba(30,37,53,0.6)] backdrop-blur-[20px] saturate-[180%] border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]";

/* ── Data ───────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

const SERVICE_CATEGORIES = ["All", "Design", "Development", "Marketing", "Content", "Strategy"];

const SERVICES = [
  { icon: Globe, label: "Web Design", desc: "Pixel-perfect, conversion-focused websites built in Figma, Framer & Webflow.", tags: ["Figma", "Framer"], group: "Design", num: "01" },
  { icon: Layers, label: "UI/UX Design", desc: "Research-driven interfaces grounded in user behaviour and business goals.", tags: ["Research", "Prototyping"], group: "Design", num: "02" },
  { icon: Palette, label: "Brand Identity", desc: "Logo, typography, colour systems and brand guidelines that endure decades.", tags: ["Logo", "Style Guide"], group: "Design", num: "03" },
  { icon: Sparkles, label: "Motion Graphics", desc: "Cinematic animations in After Effects, Rive, and Lottie that stop the scroll.", tags: ["After Effects", "Rive"], group: "Design", num: "04" },
  { icon: Code2, label: "Web Development", desc: "Scalable, performant builds — Next.js, React, WordPress, bespoke systems.", tags: ["Next.js", "React"], group: "Development", num: "05" },
  { icon: ShoppingBag, label: "E-commerce", desc: "High-converting Shopify and WooCommerce stores optimised for revenue.", tags: ["Shopify", "WooCommerce"], group: "Development", num: "06" },
  { icon: Shield, label: "Maintenance & Support", desc: "24/7 monitoring, security patches, performance tuning and SLA-backed uptime.", tags: ["Uptime", "Security"], group: "Development", num: "07" },
  { icon: Search, label: "SEO & Content", desc: "Technical audits, content strategy, and link-building that compound over time.", tags: ["Technical SEO", "Content"], group: "Marketing", num: "08" },
  { icon: Megaphone, label: "Google & PPC Ads", desc: "Intent-driven campaigns engineered for measurable ROI and CPA reduction.", tags: ["Google Ads", "PPC"], group: "Marketing", num: "09" },
  { icon: TrendingUp, label: "Social Media Ads", desc: "Facebook, Instagram & TikTok campaigns built for scale and performance.", tags: ["Meta Ads", "TikTok"], group: "Marketing", num: "10" },
  { icon: Video, label: "Video Editing", desc: "Brand films, social reels, and motion content edited for every platform.", tags: ["Premiere Pro", "Reels"], group: "Content", num: "11" },
  { icon: Camera, label: "Photography", desc: "Commercial photography and visual direction that elevates brand perception.", tags: ["Commercial", "Editorial"], group: "Content", num: "12" },
];

const STATS = [
  { value: "10+", label: "Projects Delivered", raw: 10, suffix: "+" },
  { value: "85%", label: "Client Satisfaction Rate", raw: 85, suffix: "%" },
  { value: "KSh 100K+", label: "Revenue Generated for Clients", raw: 100, suffix: "K+" },
  { value: "2 yrs", label: "Combined Team Experience", raw: 5, suffix: " yrs" },
];

const PORTFOLIO_FEATURED = {
  client: "Lumina Finance",
  title: "Redesigning a fintech platform that processes KES 200K daily",
  desc: "We rebuilt Lumina's entire digital product — from brand identity through to their investor-facing dashboard — in a single 10-week sprint.",
  services: ["Brand Identity", "Web Design", "Development", "Analytics"],
  metric: "+180% organic traffic",
  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&auto=format",
};

const PORTFOLIO_GRID = [
  { title: "Vanta Commerce", category: "E-commerce · Development", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&h=525&fit=crop&auto=format", accent: C.emerald },
  { title: "Orion Health App", category: "UI/UX · Motion", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=525&fit=crop&auto=format", accent: C.violet },
  { title: "Apex Ventures", category: "Branding · Photography", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&h=525&fit=crop&auto=format", accent: C.blue },
];

const CASE_STUDIES = [
  {
    metric: "+105%",
    metricLabel: "revenue growth",
    client: "Autosphere Kenya",
    industry: "E-commerce · Retail",
    challenge: "Declining conversion rates despite high traffic volumes",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=500&fit=crop&auto=format",
    tags: ["Google Ads", "Landing Pages", "SEO"],
  },
  {
    metric: "6.8%",
    metricLabel: "conversion rate (2× prev)",
    client: "Vanta Commerce",
    industry: "D2C · Fashion",
    challenge: "Legacy Shopify store with poor mobile experience and slow load times",
    img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=700&h=500&fit=crop&auto=format",
    tags: ["E-commerce", "UX Design", "Development"],
  },
];

const WORKFLOW_PHASES = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Strategy",
    body: "We audit your current position, research your market, and map the exact path to your goals.",
    duration: "Week 1–2",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design & Prototype",
    body: "Every pixel is intentional. We design with conversion in mind, tested through rapid prototyping cycles.",
    duration: "Week 2–4",
  },
  {
    num: "03",
    icon: Code2,
    title: "Development & Integration",
    body: "Performant, scalable builds. We integrate every tool your business needs to operate and grow.",
    duration: "Week 4–8",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Launch & Optimise",
    body: "Post-launch is where we start. We track, iterate, and continuously optimise for compounding results.",
    duration: "Ongoing",
  },
];

const TESTIMONIALS = [
  {
    quote: "Zenara completely transformed our digital presence. Within three months, organic traffic was up 280% and our pipeline is fuller than it has ever been. The ROI was immediate.",
    name: "Sarah Karanja",
    role: "CMO",
    company: "Lumina Finance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    stars: 5,
  },
  {
    quote: "The rebrand Zenara delivered felt like we had hired a team of forty. Every touchpoint — from the logo to the Instagram grid — coheres perfectly with our vision.",
    name: "David Mwangi",
    role: "Founder",
    company: "Apex Ventures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    stars: 5,
  },
  {
    quote: "Our new e-commerce store launched on time, on budget, and immediately outperformed our old site. Conversion rate went from 2.1% to 6.8% in the first month.",
    name: "Paul Otieno",
    role: "Head of Digital",
    company: "Vanta Commerce",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    stars: 5,
  },
];

const FAQS = [
  { q: "How much does a website cost?", a: "Website projects start from KES 20,000 for a simple brand site and scale to KES 500,000+ for fully custom web applications. Every quote is scope-specific — book a call and we'll give you an accurate range within 24 hours." },
  { q: "How long does a typical project take?", a: "A brand identity takes 3–4 weeks. A full website design and build typically runs 6–10 weeks. Ongoing retainer work is scoped monthly and starts within 5 days of contract signing." },
  { q: "Do you work with clients outside Kenya?", a: "Absolutely. Our team works remotely with clients across East Africa, Europe, the Middle East, and North America. We're remote-first and timezone-flexible." },
  { q: "What's included in website maintenance?", a: "Our maintenance plans cover security patches, plugin/dependency updates, uptime monitoring, performance tuning, monthly reporting, and a dedicated support channel with SLA-backed response times." },
  { q: "Can you redesign our existing website?", a: "Yes — redesigns are one of our most requested services. We conduct a full UX and performance audit first so every design decision is backed by data, not aesthetics alone." },
  { q: "How do Facebook and Google Ads work?", a: "We handle full campaign setup: audience research, creative, copywriting, A/B testing, bid strategy, and weekly optimisation. You get a live dashboard and fortnightly performance calls." },
  { q: "Do you sign NDAs?", a: "Standard NDA signing is part of our onboarding process. We take confidentiality seriously — client data, projects, and business information are never shared or referenced without explicit consent." },
  { q: "What happens after the project launches?", a: "Every project includes a 30-day post-launch support window at no extra cost. After that, clients typically move onto a maintenance retainer or a growth-focused paid media or SEO engagement." },
];

const CLIENT_LOGOS = ["Safaricom", "NCBA Bank", "Jumia", "Equity Bank", "Kenya Airways", "Twiga Foods", "Cellulant", "M-KOPA", "Copia Global", "Poa Internet"];

/* ── Helpers ────────────────────────────────────────────────── */
function cn(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

/* ── Revenue Pulse ──────────────────────────────────────────── */
function Pulse({ size = 8, color = C.emerald }: { size?: number; color?: string }) {
  return (
    <span className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <span
        className="absolute inline-flex rounded-full opacity-60 animate-ping"
        style={{ width: size * 2.5, height: size * 2.5, background: color, animationDuration: "2s" }}
      />
      <span
        className="relative inline-flex rounded-full"
        style={{ width: size, height: size, background: color }}
      />
    </span>
  );
}

/* ── Animated counter ───────────────────────────────────────── */
function AnimatedCounter({ raw, suffix }: { raw: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const isDecimal = raw % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const target = isDecimal ? raw * 10 : raw;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(isDecimal ? current / 10 : current);
      if (current >= target) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, raw, isDecimal]);

  const display = isDecimal ? `$${count.toFixed(1)}${suffix}` : `${count}${suffix}`;
  return <span ref={ref}>{inView ? display : `0${suffix}`}</span>;
}

/* ── FadeIn wrapper ─────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "up" ? { opacity: 0, y: 28 }
    : direction === "left" ? { opacity: 0, x: -28 }
    : direction === "right" ? { opacity: 0, x: 28 }
    : { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section label ──────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
      style={{ color: C.emerald, fontFamily: F_EDITORIAL }}
    >
      <span className="w-4 h-px" style={{ background: C.emerald }} />
      {children}
    </span>
  );
}

/* ── NAV ────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? { background: "rgba(11,15,25,0.88)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }
          : { background: "transparent" }
      }
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between" style={{ height: scrolled ? 60 : 72, transition: "height 0.3s ease" }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg relative"
            style={{ background: "linear-gradient(135deg, #00D084, #3B82F6)", boxShadow: "0 0 20px rgba(0,208,132,0.35)" }}
          >
            <Zap size={15} className="text-white" />
            <span className="absolute -top-0.5 -right-0.5">
              <Pulse size={5} />
            </span>
          </div>
          <span className="text-white font-bold text-[17px] tracking-[-0.03em]" style={{ fontFamily: F_DISPLAY }}>
            Zenara
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: C.mist, fontFamily: F_EDITORIAL }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.mist)}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA cluster */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#case-studies"
            className="text-sm font-medium transition-colors"
            style={{ color: C.mist, fontFamily: F_EDITORIAL }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.mist)}
          >
            Case Studies
          </a>
          <a
            href="https://wa.me/254795451238"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 group"
            style={{ background: C.emerald, color: C.void, fontFamily: F_EDITORIAL, boxShadow: "0 0 20px rgba(0,208,132,0.25)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#00F09A"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,208,132,0.35)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.emerald; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,208,132,0.25)"; }}
          >
            Book a Call <ArrowRight size={14} />
          </a>
        </div>

        <button className="md:hidden" style={{ color: C.silver }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden border-t px-8 py-8 space-y-1" style={{ background: C.void, borderColor: "rgba(255,255,255,0.06)" }}>
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="block py-3 font-bold text-3xl tracking-tight"
              style={{ color: C.white, fontFamily: F_DISPLAY }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </motion.a>
          ))}
          <div className="pt-6 flex items-center gap-4">
            <a
              href="https://wa.me/254795451238"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm"
              style={{ background: C.emerald, color: C.void }}
            >
              Book a Free Call <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── HERO ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-16 px-6 lg:px-8" 
             style={{ 
               background: "linear-gradient(to bottom, #06070D 0%, #111827 100%)",
             }}>
      {/* Background enhancements */}
      <div className="absolute inset-0 opacity-[0.035]" 
           style={{ 
             backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)", 
             backgroundSize: "48px 48px" 
           }} />
      <div className="absolute top-[-20%] right-[10%] w-[700px] h-[700px] rounded-full blur-[140px]" 
           style={{ background: "rgba(59,130,246,0.18)" }} />
      <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[120px]" 
           style={{ background: "rgba(0,208,132,0.12)" }} />

      <div className="relative max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN - Content */}
        <div className="lg:col-span-7">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 border border-[rgba(0,208,132,0.3)]"
            style={{ background: "rgba(0,208,132,0.08)" }}
          >
            <Pulse size={7} color={C.emerald} />
            <span className="text-sm font-semibold tracking-[0.08em] uppercase" 
                  style={{ color: C.emerald, fontFamily: F_EDITORIAL }}>
              Revenue Engineering. Always On.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[1.05] tracking-[-0.04em] mb-6"
            style={{ 
              fontFamily: F_DISPLAY, 
              fontSize: "clamp(56px, 7.5vw, 92px)", 
              color: C.white 
            }}
          >
            Engineering Revenue<br />That Moves at Speed
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xl lg:text-2xl leading-tight max-w-[620px] mb-4"
            style={{ color: C.ivory, fontFamily: F_BODY }}
          >
            Fast, precise digital systems for Kenyan businesses. M-Pesa integrations, high-converting e-commerce, and powerful platforms for churches &amp; communities. From idea to revenue in 72 hours.
          </motion.p>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg mb-10"
            style={{ color: C.mist, fontFamily: F_EDITORIAL }}
          >
            Mombasa-based. Results-obsessed. Built for the Kenyan market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/254795451238"
              className="group inline-flex items-center gap-3 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.985]"
              style={{ 
                background: "#3B82F6", 
                color: "#FFFFFF", 
                boxShadow: "0 10px 30px -10px rgba(59,130,246,0.5)" 
              }}
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 font-semibold text-lg px-8 py-5 rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-200"
              style={{ color: C.white }}
            >
              See Our Work
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-sm"
            style={{ color: C.mist, fontFamily: F_EDITORIAL }}
          >
            <div className="flex items-center gap-2">
              <Check size={18} style={{ color: C.emerald }} />
              <span>Trusted by growing businesses across the Coast</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div>10+ projects delivered</div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="font-medium text-emerald-400">72-hour kickoff guarantee</div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Product Visual */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px]">
            {/* Main Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative bg-[#0F1625] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0A0F1C]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                    <Zap size={15} className="text-white" />
                  </div>
                  <span className="font-semibold text-white">Zenara Revenue OS</span>
                </div>
                <div className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">LIVE</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Revenue Chart */}
                <div>
                  <div className="flex justify-between text-xs mb-3" style={{ color: C.mist }}>
                    <span>Revenue Today</span>
                    <span className="text-emerald-400 font-medium">+KSh 284,920</span>
                  </div>
                  <div className="h-48 bg-[#111827] rounded-2xl relative overflow-hidden">
                    {/* Fake animated bars */}
                    <div className="absolute bottom-0 left-6 right-6 h-40 flex items-end gap-2">
                      {[65, 82, 45, 91, 73, 88, 67].map((h, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-emerald-500 to-blue-500 rounded-t w-full"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + i * 0.08 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* M-Pesa Transaction */}
                <div className="bg-[#1A2338] rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={28} style={{ color: C.emerald }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">M-Pesa Payment Received</p>
                    <p className="text-emerald-400 font-mono text-lg">KSh 47,250</p>
                  </div>
                  <div className="text-right text-xs text-emerald-400">
                    Just now<br />✓ Confirmed
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating KPI Cards */}
            <motion.div
              className="absolute -top-6 -right-6 hidden lg:block"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className={cn(glassmorphism, "rounded-2xl px-6 py-4 w-52")}>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: C.mist }}>MONTHLY RECURRING</div>
                <div className="text-3xl font-bold text-white font-mono">KSh 2.84M</div>
                <div className="text-emerald-400 text-sm flex items-center gap-1 mt-1">
                  <TrendingUp size={14} /> +18.4%
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 hidden lg:block"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.2 }}
            >
              <div className={cn(glassmorphism, "rounded-2xl px-5 py-4 w-44")}>
                <div className="flex items-center gap-3">
                  <div className="text-emerald-400">
                    <Users size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-white">Active Projects</div>
                    <div className="text-2xl font-bold text-white">17</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── LOGO STRIP ─────────────────────────────────────────────── */
function LogoStrip() {
  return (
    <section className="py-12 overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <p className="text-center text-[11px] tracking-[0.15em] uppercase mb-8" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>
        Trusted by innovative companies
      </p>
      <div className="flex items-center gap-20 w-max" style={{ animation: "marquee 30s linear infinite" }}>
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
          <span key={i} className="text-base font-bold whitespace-nowrap select-none transition-opacity duration-200 hover:opacity-100" style={{ color: "rgba(255,255,255,0.25)", fontFamily: F_DISPLAY }}>
            {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ── SERVICES ───────────────────────────────────────────────── */
function Services() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = activeTab === "All" ? SERVICES : SERVICES.filter((s) => s.group === activeTab);

  return (
    <section id="services" className="py-[120px] px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-bold leading-tight tracking-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 4vw, 56px)", color: C.white }}>
              Full-spectrum digital services built for growth
            </h2>
          </FadeIn>
          <FadeIn direction="right" className="flex items-end">
            <p className="text-base leading-[1.75]" style={{ color: C.mist, fontFamily: F_BODY }}>
              From first impression to final conversion — we cover every touchpoint your brand needs to compete and win in today's digital landscape.
            </p>
          </FadeIn>
        </div>

        {/* Filter tabs */}
        <FadeIn className="mb-12">
          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: F_EDITORIAL,
                  background: activeTab === tab ? C.emerald : "transparent",
                  color: activeTab === tab ? C.void : C.mist,
                  border: activeTab === tab ? `1px solid ${C.emerald}` : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div
                className="group relative rounded-[20px] p-8 cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(30,37,53,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,208,132,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,208,132,0.2), 0 0 80px rgba(0,208,132,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1" style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.2)" }}>
                    <s.icon size={22} style={{ color: C.emerald }} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>{s.num}</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: F_EDITORIAL, fontSize: 20, color: C.white }}>{s.label}</h3>
                <p className="text-sm leading-[1.65] mb-4" style={{ color: C.ivory, fontFamily: F_BODY }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: C.mist, fontFamily: F_EDITORIAL }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: C.emerald, fontFamily: F_EDITORIAL }}>
                  Explore <ArrowRight size={13} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: C.white, fontFamily: F_EDITORIAL }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            See All Services <ArrowUpRight size={14} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── PORTFOLIO ──────────────────────────────────────────────── */
function Portfolio() {
  return (
    <section id="portfolio" className="py-[120px] px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-bold tracking-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 4vw, 52px)", color: C.white }}>
              Work that speaks
              <br />
              for itself.
            </h2>
          </FadeIn>
          <FadeIn direction="right">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: C.mist, fontFamily: F_EDITORIAL }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              View all projects <ArrowUpRight size={13} />
            </a>
          </FadeIn>
        </div>

        {/* Featured project */}
        <FadeIn className="mb-8">
          <div
            className="rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: C.slate }}
          >
            {/* Left: details */}
            <div className="lg:col-span-5 p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit" style={{ background: "rgba(0,208,132,0.12)", color: C.emerald, border: "1px solid rgba(0,208,132,0.2)", fontFamily: F_EDITORIAL }}>
                Featured Project
              </span>
              <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>
                {PORTFOLIO_FEATURED.client}
              </p>
              <h3 className="font-bold leading-tight mb-4" style={{ fontFamily: F_DISPLAY, fontSize: 26, color: C.white }}>
                {PORTFOLIO_FEATURED.title}
              </h3>
              <p className="text-sm leading-[1.7] mb-6" style={{ color: C.ivory, fontFamily: F_BODY }}>
                {PORTFOLIO_FEATURED.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {PORTFOLIO_FEATURED.services.map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: C.silver, fontFamily: F_EDITORIAL }}>
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full w-fit transition-all"
                style={{ background: C.emerald, color: C.void, fontFamily: F_EDITORIAL }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#00F09A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.emerald; }}
              >
                View Case Study <ArrowRight size={14} />
              </a>
            </div>
            {/* Right: screenshot */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-0">
              <img src={PORTFOLIO_FEATURED.img} alt={PORTFOLIO_FEATURED.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,37,53,0.5) 0%, transparent 50%)" }} />
              {/* Metric card overlay */}
              <div className={cn(glassmorphism, "absolute bottom-6 right-6 rounded-xl px-4 py-3")}>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>Organic Traffic</p>
                <p className="text-2xl font-bold" style={{ fontFamily: F_MONO, color: C.white }}>{PORTFOLIO_FEATURED.metric}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_GRID.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="group rounded-[20px] overflow-hidden cursor-pointer" style={{ background: C.slate }}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(11,15,25,0.85) 0%, transparent 60%)" }}>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-xs" style={{ color: p.accent, fontFamily: F_EDITORIAL }}>
                      View Case Study <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs mb-1.5" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>{p.category}</p>
                  <h4 className="font-bold" style={{ fontFamily: F_DISPLAY, fontSize: 17, color: C.white }}>{p.title}</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CASE STUDIES ───────────────────────────────────────────── */
function CaseStudies() {
  return (
    <section id="case-studies" className="py-[120px] px-8" style={{ background: "rgba(17,24,39,0.8)" }}>
      <div className="max-w-[1280px] mx-auto">
        <FadeIn className="mb-6">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-bold tracking-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 4vw, 52px)", color: C.white }}>
            Real businesses.
            <br />
            Real results.
          </h2>
        </FadeIn>
        <FadeIn className="mb-16">
          <p className="text-base" style={{ color: C.mist, fontFamily: F_BODY }}>
            We don't just deliver projects — we engineer outcomes.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((c, i) => (
            <FadeIn key={c.client} delay={i * 0.1}>
              <div className="group rounded-[20px] overflow-hidden transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.06)", background: C.slate }}>
                <div className="aspect-video overflow-hidden relative bg-[#111827]">
                  <img src={c.img} alt={c.client} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" />
                </div>
                <div className="p-8">
                  {/* Metric */}
                  <div
                    className="font-bold mb-2 leading-none"
                    style={{ fontFamily: F_MONO, fontSize: 48, background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {c.metric}
                  </div>
                  <p className="text-sm mb-4" style={{ color: C.mist, fontFamily: F_BODY }}>{c.metricLabel}</p>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: C.mist, fontFamily: F_EDITORIAL }}>{c.client} · {c.industry}</p>
                  <p className="text-sm mb-5" style={{ color: C.ivory, fontFamily: F_BODY }}>{c.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(0,208,132,0.1)", color: C.emerald, border: "1px solid rgba(0,208,132,0.2)", fontFamily: F_EDITORIAL }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: C.emerald, fontFamily: F_EDITORIAL }}>
                    Read Full Case Study <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mini result strip */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { val: "10+ projects", label: "delivered to date" },
              { val: "KSh 100K+", label: "in client revenue generated" },
              { val: "85%", label: "client retention rate" },
            ].map((item) => (
              <div key={item.val} className="text-center py-6 px-4" style={{ background: C.slate }}>
                <p className="font-bold mb-1" style={{ fontFamily: F_MONO, fontSize: 24, color: C.white }}>{item.val}</p>
                <p className="text-sm" style={{ color: C.mist, fontFamily: F_BODY }}>{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── STATS ──────────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="py-20 px-8" style={{ background: "linear-gradient(135deg, rgba(0,208,132,0.05) 0%, rgba(59,130,246,0.05) 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center py-8 relative">
                {i < STATS.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 hidden lg:block" style={{ background: "rgba(255,255,255,0.08)" }} />
                )}
                <div className="font-bold mb-2" style={{ fontFamily: F_MONO, fontSize: 64, color: C.white, lineHeight: 1 }}>
                  <AnimatedCounter raw={s.raw} suffix={s.suffix} />
                </div>
                <p className="text-sm" style={{ color: C.mist, fontFamily: F_BODY }}>{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WORKFLOW ───────────────────────────────────────────────── */
function Workflow() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-[120px] px-8">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn className="mb-16 text-center">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-bold tracking-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 4vw, 52px)", color: C.white }}>
            How we work
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: C.mist, fontFamily: F_BODY }}>
            A structured process that removes uncertainty and delivers results every single time.
          </p>
        </FadeIn>

        {/* Desktop: horizontal phases */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative mb-6">
          {/* Connector line */}
          <div className="absolute top-11 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${C.emerald}, ${C.blue})`, width: `${(activePhase / (WORKFLOW_PHASES.length - 1)) * 100}%`, transition: "width 0.4s ease" }}
            />
          </div>
          {WORKFLOW_PHASES.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.08}>
              <div
                className="cursor-pointer transition-all duration-300"
                onClick={() => setActivePhase(i)}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative z-10"
                    style={{
                      background: i <= activePhase ? C.emerald : "rgba(42,50,69,1)",
                      border: `2px solid ${i <= activePhase ? C.emerald : "rgba(255,255,255,0.12)"}`,
                      boxShadow: i === activePhase ? `0 0 20px rgba(0,208,132,0.4)` : "none",
                    }}
                  >
                    <p.icon size={18} style={{ color: i <= activePhase ? C.void : C.mist }} />
                    {i === activePhase && (
                      <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(0,208,132,0.3)", animationDuration: "2s" }} />
                    )}
                  </div>
                </div>
                <div className={cn("rounded-[20px] p-6 transition-all duration-300", i === activePhase ? "border-[rgba(0,208,132,0.3)]" : "")}
                  style={{
                    background: i === activePhase ? "rgba(30,37,53,0.8)" : "rgba(30,37,53,0.4)",
                    border: `1px solid ${i === activePhase ? "rgba(0,208,132,0.3)" : "rgba(255,255,255,0.06)"}`,
                    boxShadow: i === activePhase ? "0 0 40px rgba(0,208,132,0.1)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold" style={{ color: C.mist, fontFamily: F_MONO }}>{p.num}</span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,208,132,0.1)", color: C.emerald, fontFamily: F_EDITORIAL }}>{p.duration}</span>
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: F_DISPLAY, fontSize: 16, color: C.white }}>{p.title}</h3>
                  <p className="text-sm leading-[1.7]" style={{ color: C.mist, fontFamily: F_BODY }}>{p.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {WORKFLOW_PHASES.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.06}>
              <div className="rounded-[20px] p-6" style={{ background: "rgba(30,37,53,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.emerald }}>
                    <p.icon size={16} style={{ color: C.void }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,208,132,0.1)", color: C.emerald, fontFamily: F_EDITORIAL }}>{p.duration}</span>
                  </div>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: F_DISPLAY, fontSize: 17, color: C.white }}>{p.title}</h3>
                <p className="text-sm leading-[1.7]" style={{ color: C.mist, fontFamily: F_BODY }}>{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ───────────────────────────────────────────── */
function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-[120px] px-8" style={{ background: C.void }}>
      <div className="max-w-[1280px] mx-auto">
        <FadeIn className="mb-16 text-center">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-bold tracking-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 4vw, 52px)", color: C.white }}>
            What our clients say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div
                className="relative rounded-[20px] p-8 cursor-pointer transition-all duration-300"
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? C.slate : "rgba(30,37,53,0.4)",
                  border: `1px solid ${active === i ? "rgba(0,208,132,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderLeft: `3px solid ${active === i ? C.emerald : "rgba(255,255,255,0.06)"}`,
                  boxShadow: active === i ? "0 0 40px rgba(0,208,132,0.08)" : "none",
                }}
              >
                {/* Large quote mark */}
                <span
                  className="absolute top-5 right-6 text-7xl leading-none select-none pointer-events-none"
                  style={{ color: active === i ? "rgba(0,208,132,0.15)" : "rgba(255,255,255,0.04)", fontFamily: F_DISPLAY }}
                >
                  "
                </span>
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={13} fill={C.emerald} style={{ color: C.emerald }} />
                  ))}
                </div>
                <blockquote className="text-sm leading-[1.8] mb-6 italic" style={{ color: C.ivory, fontFamily: F_BODY }}>
                  "{t.quote}"
                </blockquote>
                <div className="border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" style={{ border: "2px solid rgba(255,255,255,0.1)" }} />
                    <div>
                      <p className="font-semibold text-sm" style={{ color: C.white, fontFamily: F_EDITORIAL }}>{t.name}</p>
                      <p className="text-xs" style={{ color: C.mist, fontFamily: F_BODY }}>{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Video testimonial */}
        <FadeIn>
          <div className="rounded-[20px] overflow-hidden relative cursor-pointer group" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="relative h-48 overflow-hidden" style={{ background: C.navy }}>
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1280&h=400&fit=crop&auto=format" alt="Video testimonial" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(0,208,132,0.9)", boxShadow: "0 0 40px rgba(0,208,132,0.4)" }}>
                  <Play size={22} fill={C.void} style={{ color: C.void, marginLeft: 3 }} />
                </div>
              </div>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div>
                  <p className="font-bold text-sm" style={{ color: C.white, fontFamily: F_EDITORIAL }}>James Odhiambo · Twiga Foods</p>
                  <p className="text-xs" style={{ color: C.mist }}>Watch 2:30 · Full story</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="h-1.5 rounded-full transition-all duration-300" style={{ width: active === i ? 32 : 6, background: active === i ? C.emerald : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[120px] px-8" style={{ background: C.navy }}>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: header — cols 1–5 */}
        <div className="lg:col-span-5">
          <FadeIn>
            <SectionLabel>Got Questions?</SectionLabel>
            <h2 className="font-bold tracking-tight leading-tight" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(36px, 3.5vw, 48px)", color: C.white }}>
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base leading-[1.75]" style={{ color: C.mist, fontFamily: F_BODY }}>
              Can't find the answer you're looking for? Book a call and we'll answer anything in real time.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all"
              style={{ background: C.emerald, color: C.void, fontFamily: F_EDITORIAL }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#00F09A"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.emerald; }}
            >
              Book a Free Call <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>

        {/* Right: accordion — cols 7–12 */}
        <div className="lg:col-span-7">
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-[16px] overflow-hidden transition-all duration-300" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(30,37,53,0.4)" }}>
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="font-semibold text-sm"
                      style={{ color: open === i ? C.emerald : C.white, fontFamily: F_EDITORIAL, transition: "color 0.2s" }}
                    >
                      {f.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        border: `1px solid ${open === i ? C.emerald : "rgba(255,255,255,0.15)"}`,
                        background: open === i ? "rgba(0,208,132,0.1)" : "transparent",
                        color: open === i ? C.emerald : C.mist,
                      }}
                    >
                      {open === i ? <Minus size={12} /> : <Plus size={12} />}
                    </span>
                  </button>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <p className="pt-4 text-sm leading-[1.75]" style={{ color: C.ivory, fontFamily: F_BODY }}>{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA BANNER ─────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section id="contact" className="py-[120px] px-8">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <div className="relative rounded-[32px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Background */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(0,208,132,0.1) 100%)" }} />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: "rgba(59,130,246,0.2)" }} />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: "rgba(0,208,132,0.15)" }} />
            </div>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }} />

            <div className="relative text-center py-24 px-8">
              {/* Eyebrow chip */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.25)" }}>
                <Pulse size={6} />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: C.emerald, fontFamily: F_EDITORIAL }}>Ready to grow?</span>
              </div>

              <h2 className="font-bold tracking-tight leading-tight mb-5 max-w-3xl mx-auto" style={{ fontFamily: F_DISPLAY, fontSize: "clamp(44px, 6vw, 72px)", color: C.white }}>
                Let's build something extraordinary together.
              </h2>
              <p className="text-base leading-[1.75] max-w-lg mx-auto mb-10" style={{ color: C.ivory, fontFamily: F_BODY }}>
                Book a free 30-minute strategy call. No pitch decks. No fluff. Just a real conversation about your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="https://wa.me/254795451238"
                  className="inline-flex items-center gap-2 font-bold text-base px-9 py-4 rounded-full transition-all group"
                  style={{ background: C.emerald, color: C.void, fontFamily: F_EDITORIAL, boxShadow: "0 0 40px rgba(0,208,132,0.2)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#00F09A"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.emerald; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  Book Your Free Call <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:hello@zenara.digital"
                  className="inline-flex items-center gap-2 font-medium text-base px-9 py-4 rounded-full transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: C.white, fontFamily: F_EDITORIAL }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <Mail size={15} /> hello@zenara.digital
                </a>
              </div>

              {/* Assurance + floating badges */}
              <p className="text-xs mb-6" style={{ color: C.mist, fontFamily: F_BODY }}>
                Response within 24 hours · No obligation · 100% confidential
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { text: "Free Consultation", color: C.emerald, bg: "rgba(0,208,132,0.1)", border: "rgba(0,208,132,0.25)" },
                  { text: "No contracts required", color: C.mist, bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
                  { text: "Results-backed guarantee", color: C.blue, bg: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)" },
                ].map((badge) => (
                  <span key={badge.text} className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full" style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, fontFamily: F_EDITORIAL }}>
                    <Check size={11} /> {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  const serviceLinks = ["Web Design", "Web Development", "UI/UX Design", "E-commerce", "SEO", "Google Ads", "Facebook Ads", "Social Media", "Branding", "Motion Graphics", "Content Creation", "Photography"];
  const companyLinks = ["About", "Our Work", "Case Studies", "Blog", "Pricing", "Careers", "Press Kit", "Privacy Policy", "Terms"];

  return (
    <footer style={{ background: C.void, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand — span 4 */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #00D084, #3B82F6)", boxShadow: "0 0 20px rgba(0,208,132,0.3)" }}>
                <Zap size={16} className="text-white" />
                <span className="absolute -top-0.5 -right-0.5"><Pulse size={5} /></span>
              </div>
              <span className="font-bold text-lg tracking-[-0.03em]" style={{ color: C.white, fontFamily: F_DISPLAY }}>Zenara Digital</span>
            </div>
            <p className="text-sm leading-[1.7] mb-6 max-w-xs" style={{ color: C.mist, fontFamily: F_BODY }}>
              Engineering revenue through design & technology. Full-service digital agency serving startups and enterprises.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 mb-6">
              {["Li", "IG", "X", "Be", "Dr"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200" style={{ border: "1px solid rgba(255,255,255,0.1)", color: C.mist }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.emerald; (e.currentTarget as HTMLElement).style.color = C.void; (e.currentTarget as HTMLElement).style.borderColor = C.emerald; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.mist; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  {s}
                </a>
              ))}
            </div>
            {/* WhatsApp */}
            <a href="https://wa.me/254795451238" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all" style={{ background: "rgba(37,211,102,0.12)", color: "#25D366", border: "1px solid rgba(37,211,102,0.25)", fontFamily: F_EDITORIAL }}>
              <MessageSquare size={14} /> Chat on WhatsApp
            </a>
          </div>

          {/* Services — span 3 */}
          <div className="lg:col-span-3">
            <p className="font-semibold text-sm mb-5" style={{ color: C.white, fontFamily: F_EDITORIAL }}>Services</p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-all duration-200 hover:translate-x-1 inline-block" style={{ color: C.mist, fontFamily: F_BODY }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; }}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — span 2 */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-sm mb-5" style={{ color: C.white, fontFamily: F_EDITORIAL }}>Company</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-all duration-200" style={{ color: C.mist, fontFamily: F_BODY }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; }}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — span 3 */}
          <div className="lg:col-span-3">
            <p className="font-semibold text-sm mb-5" style={{ color: C.white, fontFamily: F_EDITORIAL }}>Get in Touch</p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@zenara.digital", href: "mailto:hello@zenara.digital" },
                { icon: Phone, text: "+254 795 451 238", href: "tel:+254795451238" },
                { icon: MapPin, text: "Mombasa, Kenya 🇰🇪", href: "#" },
                { icon: Clock, text: "Mon–Fri, 8am–6pm EAT", href: "#" },
              ].map((item) => (
                <a key={item.text} href={item.href} className="flex items-start gap-3 group" style={{ textDecoration: "none" }}>
                  <item.icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: C.emerald }} />
                  <span className="text-sm transition-colors" style={{ color: C.mist, fontFamily: F_BODY }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; }}
                  >{item.text}</span>
                </a>
              ))}

              {/* Awards badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(214,168,90,0.08)", border: "1px solid rgba(214,168,90,0.2)" }}>
                <Award size={14} style={{ color: "#D6A85A" }} />
                <span className="text-[11px] font-semibold" style={{ color: "#D6A85A", fontFamily: F_EDITORIAL }}>Awwwards Nominee 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: C.mist, fontFamily: F_BODY }}>© 2026 Zenara Digital. All rights reserved.</p>
          <p className="text-xs" style={{ color: "rgba(136,146,164,0.5)", fontFamily: F_BODY }}>Designed & built by Zenara Digital</p>
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT ───────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: F_BODY }}>
      <Nav />
      <Hero />
      <LogoStrip />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Stats />
      <Workflow />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
