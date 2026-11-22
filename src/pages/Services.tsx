import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Award, 
  TrendingUp, 
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Globe,
  Code2,
  Smartphone,
  Cpu,
  Target,
  ShoppingBag,
  Search,
  LayoutDashboard,
  Repeat,
  Sliders,
  Film,
  Flame,
  UserCheck,
  Package,
  BookOpen,
  Check,
  X,
  PhoneCall,
  Calendar,
  Calculator,
  Lock,
  Star,
  FileCheck2,
  Users,
  BarChart3,
  Lightbulb,
  DollarSign,
  Radio,
  SlidersHorizontal,
  Compass,
  Layers
} from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [monthlyBudget, setMonthlyBudget] = useState<number>(150000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checkedAuditItems, setCheckedAuditItems] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true
  });

  const toggleAudit = (idx: number) => {
    setCheckedAuditItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedAuditCount = Object.values(checkedAuditItems).filter(Boolean).length;

  // ROI Calculator Calculations
  const calculatedMetrics = useMemo(() => {
    const estimatedRev = Math.round(monthlyBudget * 4.6);
    const estimatedProfit = Math.round(estimatedRev * 0.38);
    const estimatedLeads = Math.round(monthlyBudget / 280);
    const cacReduction = 42;
    return { estimatedRev, estimatedProfit, estimatedLeads, cacReduction };
  }, [monthlyBudget]);

  const categories = [
    "All",
    "Paid Acquisition",
    "Organic & SEO",
    "Full-Stack Engineering",
    "Brand & Creative"
  ];

  const coreServices = [
    {
      id: "web-development",
      title: "Custom Website & Web App Development",
      category: "Full-Stack Engineering",
      slug: "/services/web-development",
      badge: "Sub-Second Performance",
      image: "/images/service-web-development.webp",
      desc: "Engineered with React, Next.js, and TypeScript for instantaneous page loads, zero layout shifts, and maximum search engine conversion rates.",
      highlights: [
        "Headless React 19 & Next.js App Router Architecture",
        "Sub-0.8s LCP with 100/100 Core Web Vitals score",
        "Custom CMS & API integrations (Shopify, WordPress, Sanity)",
        "Enterprise DDoS defense, CDN edge caching, and SSL"
      ],
      metrics: { primary: "0.64s", label: "Average First Load Time", note: "Top 1% Global Web Vitals" }
    },
    {
      id: "app-development",
      title: "iOS, Android & Custom Software Engineering",
      category: "Full-Stack Engineering",
      slug: "/services/app-development",
      badge: "Cross-Platform Scalability",
      image: "/images/service-app-development.webp",
      desc: "High-performance native and cross-platform mobile apps, internal business automation tools, and SaaS cloud architectures that scale gracefully.",
      highlights: [
        "React Native & Flutter native cross-platform development",
        "Serverless microservices with Node.js, Python, and PostgreSQL",
        "Encrypted payment gateway integration (Razorpay, Stripe, UPI)",
        "Automated CI/CD build pipelines and zero-downtime deploys"
      ],
      metrics: { primary: "99.98%", label: "Uptime SLA", note: "Enterprise Bank-Grade Security" }
    },
    {
      id: "meta-ads",
      title: "Meta Ads & Algorithmic Paid Performance",
      category: "Paid Acquisition",
      slug: "/services/meta-ads",
      badge: "Advantage+ Scaling Engine",
      image: "/images/service-meta-ads.webp",
      desc: "High-ROAS Facebook & Instagram ad campaigns powered by first-party server-side CAPI tracking, creative testing sprints, and algorithmic bidding.",
      highlights: [
        "Server-Side Conversions API (CAPI) with 9.4/10 Event Match Quality",
        "Dynamic Creative Testing (DCT) deploying 40+ ad variants weekly",
        "Omnichannel retargeting funnels across Reels, Feeds, and Stories",
        "Strict CPA and CAC ceiling governance to ensure net profit"
      ],
      metrics: { primary: "5.4x", label: "Average Tracked ROAS", note: "₹15 Cr+ Ad Spend Managed" }
    },
    {
      id: "seo-services",
      title: "Technical SEO & Organic Market Dominance",
      category: "Organic & SEO",
      slug: "/services/seo-services",
      badge: "Top 3 Google Rankings",
      image: "/images/service-seo-growth.webp",
      desc: "Forensic technical site audits, high-intent keyword topic clusters, semantic schema engineering, and white-hat high-DR editorial link acquisition.",
      highlights: [
        "Core Web Vitals deep optimization (INP, LCP, CLS)",
        "Semantic JSON-LD Structured Data Schema implementation",
        "Topic cluster content architecture dominating buyer intent keywords",
        "High-authority editorial backlink acquisition without PBN risks"
      ],
      metrics: { primary: "+380%", label: "Organic Search Volume", note: "Zero Google Algorithm Penalties" }
    },
    {
      id: "video-marketing",
      title: "Cinema Commercials & Short-Form Video Marketing",
      category: "Brand & Creative",
      slug: "/services/video-marketing",
      badge: "High-Retention Visuals",
      image: "/images/service-video-creator.webp",
      desc: "Full-service studio production, 4K camera gear, narrative scriptwriting, and scroll-stopping short-form edits built specifically for paid conversions.",
      highlights: [
        "High-hook retention scripts engineered for sub-3-second scroll drop-off",
        "In-house Sony FX cinema camera, lighting, and sound gear",
        "Viral Reels, YouTube Shorts, and TikTok UGC creator pipelines",
        "Sound design, motion graphics, and typography overlays"
      ],
      metrics: { primary: "78.2%", label: "Average 3-Second Hook Rate", note: "10M+ Organic Video Views" }
    },
    {
      id: "branding",
      title: "Corporate Brand Identity & Visual Systems",
      category: "Brand & Creative",
      slug: "/services/branding",
      badge: "Premium Market Positioning",
      image: "/images/service-brand-identity.webp",
      desc: "Comprehensive brand positioning, vector logo suites, typography hierarchies, product packaging, and corporate Brand Bibles that command high price points.",
      highlights: [
        "Bespoke vector logo suites with complete global trademark rights",
        "Corporate Brand Bible containing typography, color codes, and usage rules",
        "Luxury packaging, box dielines, and corporate collateral",
        "Digital-first design system ready for web, mobile, and print"
      ],
      metrics: { primary: "100%", label: "IP Ownership Transfer", note: "Zero Stock Graphics Guarantee" }
    }
  ];

  const filteredServices = selectedCategory === "All"
    ? coreServices
    : coreServices.filter(s => s.category === selectedCategory);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Arventa Ventures Enterprise Digital Marketing & Engineering Services",
    "description": "Comprehensive full-funnel digital marketing, custom website engineering, mobile app development, Meta Ads, and SEO services.",
    "itemListElement": coreServices.map((srv, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": srv.title,
        "description": srv.desc,
        "url": `https://arventaventures.online${srv.slug}`
      }
    }))
  };

  const auditChecklistItems = [
    { title: "Sub-Second LCP Performance", desc: "Largest Contentful Paint loads under 1.2 seconds on 4G mobile networks." },
    { title: "Meta Conversions API (CAPI) Integration", desc: "Server-side event dispatching achieving 9.0+ event match quality score." },
    { title: "Semantic JSON-LD Structured Data", desc: "Complete FAQ, Organization, Service, and BreadcrumbList schemas active." },
    { title: "Zero Layout Shift (CLS < 0.05)", desc: "Rock-solid visual stability preventing accidental clicks and bounce rate." },
    { title: "First-Party Attribution Architecture", desc: "UTM tracking parameters passed into server-side CRM and database webhooks." },
    { title: "DDoS & SSL Edge Security Layer", desc: "Automated Cloudflare Enterprise caching, Web Application Firewall, and TLS 1.3." },
    { title: "Continuous High-Hook Creative Sprints", desc: "Minimum of 4 new ad creative variations deployed and tested weekly." },
    { title: "High-Intent Keyword Dominance", desc: "Search campaigns indexed for high-CPC commercial investigation queries." }
  ];

  const faqs = [
    {
      q: "How does Arventa Ventures differ from traditional digital marketing agencies?",
      a: "Traditional agencies separate creative from engineering, bill retainers for vanity impressions, and rely on junior interns. Arventa Ventures is a full-funnel engineering and performance growth partner founded by Jaydeb Jana. We integrate sub-second React/Next.js code with algorithmic Meta ads and server-side first-party data attribution, holding ourselves strictly accountable to client net profit, CAC reduction, and verifiable revenue."
    },
    {
      q: "Can Arventa Ventures handle both web/app engineering and paid advertising?",
      a: "Yes, this is our core competitive advantage. A high-budget ad campaign will fail if the landing page takes 4 seconds to load or has poor UX. By engineering the web and mobile software in-house, we eliminate tracking drop-off, optimize Core Web Vitals to sub-0.8s, and build custom conversion flows that double your ROAS."
    },
    {
      q: "What is your typical onboarding timeline to launch our first campaign or website?",
      a: "For digital marketing and paid acquisition, the forensic audit and CAPI infrastructure setup takes 7 business days, with live ad scaling commencing in Week 2. For custom website and software development, our agile sprints deliver functional staging environments within 14 to 21 days."
    },
    {
      q: "Do we retain full ownership of all code, ad accounts, and creative assets?",
      a: "100% yes. You maintain administrator ownership of all Git repositories, Cloudflare setups, Meta Ad Accounts, and Google properties. We never hold your intellectual property or ad data hostage."
    },
    {
      q: "What minimum ad spend budget is recommended for Meta and Google campaigns?",
      a: "To feed Meta's machine learning algorithms enough conversion signals for algorithmic optimization, we recommend a minimum monthly media spend of ₹50,000 to ₹1,00,000+. This ensures rapid creative testing and statistical significance."
    },
    {
      q: "How do you track and report campaign performance?",
      a: "We provide clients with a real-time 24/7 Looker Studio telemetry dashboard connected directly to server-side Google Analytics 4, Meta CAPI, and backend sales data. In addition, we conduct bi-weekly executive strategy calls directly with our senior leads."
    },
    {
      q: "Can we start with a single service, such as website development or SEO?",
      a: "Absolutely. Many of our largest clients began with an initial website engineering project or an SEO architecture overhaul, and later expanded into full-funnel paid advertising and video production as they saw compounding returns."
    },
    {
      q: "How do we get started with an initial performance audit?",
      a: "You can schedule a complimentary 30-minute forensic strategy call using our calendar or contact Jaydeb Jana directly via WhatsApp at +91 7872490719. We will audit your current setup and deliver an actionable growth roadmap before any contractual commitments."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      <SEO
        title="Enterprise Digital Services | Web Dev, App Dev, Meta Ads & SEO | Arventa Ventures"
        description="Explore Arventa Ventures' full-suite services: custom React/Next.js websites, iOS/Android mobile apps, Meta Advantage+ Ads, SEO dominance, and cinema video production."
        keywords="Digital Marketing Agency, Web Development, Mobile App Engineering, Meta Ads Partner, SEO Services, Video Production, Arventa Ventures"
        canonicalUrl="/services"
        structuredData={servicesSchema}
      />

      

      {/* =========================================================================
          SECTION 3: CINEMATIC HERO SECTION
         ========================================================================= */}
      <section className="relative py-16 md:py-28 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-500/15 via-orange-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6 shadow-lg shadow-orange-500/10">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping mr-2.5" />
              <span>Full-Stack Engineering & Revenue Acceleration</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Transforming Digital Ambition Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                Mathematical Market Dominance
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
              We eliminate guesswork with full-funnel mathematical precision. From sub-second React web apps and native mobile software to algorithmic Meta Ads and technical SEO.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <Button asChild size="lg" className="h-14 px-8 text-base rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25 transition-transform active:scale-95">
                <Link to="/contact">Schedule Free Strategy Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-slate-700 hover:bg-slate-900 text-slate-200 font-semibold">
                <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
                </a>
              </Button>
            </div>

            {/* Live Guarantee Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-900 text-left">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Full IP Transfer</div>
                  <div className="text-[10px] text-slate-400">100% Client Code & Media Ownership</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Zap className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Sub-0.8s Web Speeds</div>
                  <div className="text-[10px] text-slate-400">Core Web Vitals 95+ Guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                <TrendingUp className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Mathematical Attribution</div>
                  <div className="text-[10px] text-slate-400">Server-Side CAPI & First-Party Data</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Award className="w-5 h-5 text-orange-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Founder Accountability</div>
                  <div className="text-[10px] text-slate-400">Direct Jaydeb Jana Oversight</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENTERPRISE PLATFORM & ECOSYSTEM TRUST BAR
         ========================================================================= */}
      <section className="py-8 bg-slate-900/50 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold shrink-0">
              Enterprise Ecosystem Partners:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-10 text-slate-400 font-semibold text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Meta Business Partner
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Google Cloud Certified
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Shopify Plus Partner
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-orange-500" /> Cloudflare Enterprise
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-slate-200" /> Next.js & React 19
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> SOC-2 Type II Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PERFORMANCE NUMBERS TICKER
         ========================================================================= */}
      <section className="py-12 border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">₹15 Cr+</div>
              <div className="text-xs sm:text-sm font-bold text-white">Client Tracked Revenue</div>
              <div className="text-[11px] text-slate-400 mt-1">Verified across omnichannel funnels</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">500+</div>
              <div className="text-xs sm:text-sm font-bold text-white">Campaigns & Codebases Shipped</div>
              <div className="text-[11px] text-slate-400 mt-1">Across 45+ competitive verticals</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">&lt; 0.8s</div>
              <div className="text-xs sm:text-sm font-bold text-white">Sub-Second Load Speeds</div>
              <div className="text-[11px] text-slate-400 mt-1">Top 1% Core Web Vitals standard</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">98.4%</div>
              <div className="text-xs sm:text-sm font-bold text-white">Annual Retainer Retention</div>
              <div className="text-[11px] text-slate-400 mt-1">Driven by positive net margin ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE AGENCY PROBLEM & PARADIGM SHIFT
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-wider mb-4">
              <span>The Industry Reality</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Why 92% of Brands Burn Money on Traditional Agencies
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Most agencies isolate ad spend from engineering, outsource tasks to inexperienced juniors, and celebrate vanity impressions while your bank balance drops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/40 relative">
              <div className="flex items-center gap-3 text-red-400 font-bold text-lg mb-6">
                <X className="w-6 h-6 p-1 rounded-full bg-red-500/20" />
                <span>The Traditional Retainer Trap</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Vanity Metrics Priority:</strong> Reporting impressions and clicks instead of cash revenue and blended ROAS.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Siloed Tech & Marketing:</strong> Marketing teams who cannot write code, sending traffic to slow, broken landing pages.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Junior Bait-and-Switch:</strong> Pitched by agency owners, then handed off to entry-level interns who guess your budget.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Zero First-Party Attribution:</strong> Relying on flawed browser cookies that misreport conversions by up to 40%.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/40 relative">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg mb-6">
                <Check className="w-6 h-6 p-1 rounded-full bg-emerald-500/20" />
                <span>The Arventa Growth Standard</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Unit Economics Defense:</strong> We optimize for Contribution Margin 3 and payback periods, not fake ad clicks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full-Stack Fusion:</strong> Senior software engineers build sub-second web funnels synchronized with live ad tracking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Founder Oversight:</strong> Jaydeb Jana directly oversees ad algorithms, technical code reviews, and strategy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Server-Side CAPI Mastery:</strong> Direct server-to-server event streams ensuring 9.0+ match rates and clean data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 7: CATEGORY FILTER NAVIGATION
         ========================================================================= */}
      <section className="py-8 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white">Select Practice Area</h2>
              <p className="text-xs text-slate-400">Filter through our high-authority specialized engineering and growth services</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CORE SERVICES COMPREHENSIVE CARDS
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="space-y-32">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
              >
                {/* Content Column */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{service.badge}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light">
                    {service.desc}
                  </p>
                  
                  {/* Highlights Grid */}
                  <div className="bg-slate-900/90 rounded-3xl p-6 md:p-8 border border-slate-800 mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Core Engineered Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2.5 shrink-0 mt-0.5" />
                          <span className="text-slate-200 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Metric Pill */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-8">
                    <div className="text-3xl font-black text-orange-400">{service.metrics.primary}</div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">{service.metrics.label}</div>
                      <div className="text-[10px] text-slate-400">{service.metrics.note}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-7 text-sm shadow-lg shadow-orange-500/20 transition-transform active:scale-95">
                      <Link to={service.slug}>
                        Explore Complete Blueprint <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-slate-700 hover:bg-slate-900 text-slate-300 h-12 px-6 text-sm">
                      <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20your%20service" target="_blank" rel="noopener noreferrer">
                        Inquire Direct
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 group shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Bottom Floating Telemetry Badge */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                      <div className="bg-slate-950/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-white font-medium text-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        <span>Arventa Enterprise Blueprint</span>
                      </div>
                      <Link 
                        to={service.slug}
                        className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg"
                        title="View Full Detailed Service"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 9: THE ARVENTA 4-PILLAR PERFORMANCE OPERATING SYSTEM
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 mr-2" />
            <span>Architecture & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            The Arventa 4-Pillar Performance Operating System
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Every dollar of client budget and every line of code operates inside a rigorously audited, closed-loop growth architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              step: "01",
              title: "Mathematical Attribution",
              subtitle: "First-Party Data Stream",
              desc: "Eliminating iOS signal loss with server-side CAPI events, custom UTM taxonomy, and cross-channel CRM webhooks."
            },
            {
              step: "02",
              title: "Sub-Second Codebase",
              subtitle: "Next.js Core Web Vitals",
              desc: "Engineering lightweight React frontends running on edge servers with instantaneous load times and zero layout shifts."
            },
            {
              step: "03",
              title: "Algorithmic Ad Creative",
              subtitle: "High-Hook Dynamic Testing",
              desc: "Deploying 30+ creative angles weekly with psychology-backed visual hooks, UGC formats, and cinema camera gear."
            },
            {
              step: "04",
              title: "Unit Economics Shield",
              subtitle: "CAC vs LTV Discipline",
              desc: "Rigorous daily monitoring of contribution margins to ensure scaling budgets compound net EBITDA rather than burn cash."
            }
          ].map((pillar, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative group hover:border-orange-500/50 transition-all duration-300">
              <div className="text-5xl font-black text-orange-500/30 group-hover:text-orange-500 transition-colors mb-4">
                {pillar.step}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 mb-1">
                {pillar.subtitle}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 10: INTERACTIVE AGENCY ROI & PIPELINE CALCULATOR
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 mr-2" />
            <span>Interactive Financial Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Estimate Your Revenue Acceleration
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Slide your intended monthly media or engineering investment to forecast anticipated pipeline revenue and customer acquisition metrics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <label htmlFor="budget-slider" className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                Monthly Growth Budget:
              </label>
              <span className="text-2xl sm:text-3xl font-black text-orange-400">
                ₹{monthlyBudget.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              id="budget-slider"
              type="range"
              min="50000"
              max="1000000"
              step="25000"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
              <span>₹50,000 (Starter)</span>
              <span>₹5,00,000 (Growth Engine)</span>
              <span>₹10,00,000+ (Enterprise Scale)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">
                ₹{calculatedMetrics.estimatedRev.toLocaleString("en-IN")}
              </div>
              <div className="text-xs font-bold text-white">Forecast Revenue</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Estimated ~4.6x blended ROAS</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-1">
                ₹{calculatedMetrics.estimatedProfit.toLocaleString("en-IN")}
              </div>
              <div className="text-xs font-bold text-white">Estimated Gross Margin</div>
              <div className="text-[10px] text-slate-400 mt-0.5">At 38% contribution margin</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">
                {calculatedMetrics.estimatedLeads}+
              </div>
              <div className="text-xs font-bold text-white">Qualified Inquiries</div>
              <div className="text-[10px] text-slate-400 mt-0.5">High-intent buyer leads</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">
                -{calculatedMetrics.cacReduction}%
              </div>
              <div className="text-xs font-bold text-white">Target CAC Reduction</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Via sub-second CAPI funnels</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              * Projections based on verified historical client performance data. Custom financial modeling provided during audit.
            </span>
            <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-11 px-6 text-xs shrink-0">
              <Link to="/contact">Claim Audit for This Budget</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 11: ENTERPRISE TECHNOLOGY STACK
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5 mr-2" />
            <span>Modern Engineering Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            16+ Enterprise Frameworks & Platforms
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We reject legacy, bloated page builders. Our engineering stack is built for high speed, bank-grade security, and algorithmic precision.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 max-w-6xl mx-auto text-center">
          {[
            { name: "React 19", cat: "Frontend" },
            { name: "Next.js", cat: "Framework" },
            { name: "TypeScript", cat: "Language" },
            { name: "Tailwind CSS", cat: "Design" },
            { name: "Node.js", cat: "Runtime" },
            { name: "Python", cat: "Analytics" },
            { name: "PostgreSQL", cat: "Database" },
            { name: "Cloudflare", cat: "Edge CDN" },
            { name: "Meta CAPI", cat: "Ad Tech" },
            { name: "Google PMax", cat: "Ad Tech" },
            { name: "Shopify Plus", cat: "Ecommerce" },
            { name: "Stripe / UPI", cat: "Payments" },
            { name: "GA4 & GTM", cat: "Analytics" },
            { name: "Looker Studio", cat: "Telemetry" },
            { name: "Figma", cat: "Design" },
            { name: "Sony FX Cinema", cat: "Video Gear" }
          ].map((tool, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <div className="text-sm font-bold text-white mb-1">{tool.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-orange-400/90">{tool.cat}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 12: SYSTEM ARCHITECTURE & DELIVERY PIPELINE
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 mr-2" />
            <span>Full-Funnel Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            The Arventa Growth Data Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            How traffic moves through our synchronized engineering and marketing infrastructure to yield predictable customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {[
            { num: "01", name: "Traffic Ingestion", detail: "Meta Advantage+, Google Search, and organic YouTube/Shorts high-hook traffic." },
            { num: "02", name: "Edge CDN & Routing", detail: "Cloudflare global edge network routing visitors to sub-0.8s Next.js landing pages." },
            { num: "03", name: "Server-Side CAPI", detail: "Direct HTTP server dispatching unblocked conversion tokens back to Meta and Google." },
            { num: "04", name: "Conversion Engine", detail: "Optimized checkout flows with instant Razorpay/Stripe payments and automated WhatsApp." },
            { num: "05", name: "Live Telemetry", detail: "First-party real-time Looker Studio dashboard tracking net EBITDA and blended ROAS." }
          ].map((node, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative text-left">
              <div className="text-xs font-black text-orange-500 mb-2">{node.num}</div>
              <h3 className="text-base font-bold text-white mb-2">{node.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{node.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 13: 5-STAGE METHODOLOGY TIMELINE
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 mr-2" />
            <span>Structured Sprint Cadence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            5-Stage Engineering Methodology
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            From initial forensic audit to horizontal ad budget scaling in 60 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-left">
          {[
            { phase: "Sprint 1", timeline: "Days 1 - 7", title: "Forensic Discovery", desc: "Audit past ad accounts, analytics, pixel discrepancies, and competitor funnels." },
            { phase: "Sprint 2", timeline: "Days 8 - 14", title: "Infrastructure & CAPI", desc: "Deploy server-side Conversions API, tag managers, and Next.js staging build." },
            { phase: "Sprint 3", timeline: "Days 15 - 30", title: "Creative & Launch", desc: "Produce 30+ hook variations, deploy responsive landing page, commence live scaling." },
            { phase: "Sprint 4", timeline: "Days 31 - 60", title: "Algorithmic Scale", desc: "Horizontal ad spend expansion, automated bid rule scaling, and CRO A/B testing." },
            { phase: "Sprint 5", timeline: "Days 60+", title: "Compounding Growth", desc: "Omnichannel expansion into Google PMax, programmatic SEO, and brand loyalty." }
          ].map((stage, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 relative hover:border-orange-500/40 transition-colors">
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 mb-1">{stage.phase} • {stage.timeline}</div>
              <h3 className="text-base font-bold text-white mb-2">{stage.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 14: INDUSTRY-SPECIFIC PLAYBOOKS (6 VERTICALS)
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 mr-2" />
            <span>Vertical Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Tailored Playbooks for High-Growth Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We adapt our technology and creative strategies to the exact economics of your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
          {[
            {
              industry: "D2C & Ecommerce",
              focus: "Meta Advantage+ & Next.js Headless Shopify",
              detail: "Scaling high average order value (AOV) through bundle mechanics, sub-0.8s checkout speeds, and high-converting UGC video hooks."
            },
            {
              industry: "B2B SaaS & Enterprise",
              focus: "High-Intent Search & Pipeline Acceleration",
              detail: "Capturing in-market software decision-makers through technical SEO comparison pages, demo booking funnels, and automated CRM routing."
            },
            {
              industry: "Healthcare & Specialized Clinics",
              focus: "Local Medical SEO & WhatsApp Booking Funnels",
              detail: "Generating patient consultations with HIPAA/data-compliant inquiry forms, localized Google Maps optimization, and verified doctor testimonials."
            },
            {
              industry: "Luxury Real Estate",
              focus: "Cinematic Video Tours & High-Net-Worth Lead Gen",
              detail: "Curating 4K drone cinematography, geo-targeted Meta ad campaigns, and automated WhatsApp appointment scheduling for premium developments."
            },
            {
              industry: "Financial & Professional Services",
              focus: "Regulatory Compliance & High-Trust Branding",
              detail: "Establishing market authority with vector brand identity systems, high-security SSL architectures, and verified credibility content."
            },
            {
              industry: "Food, Beverage & Hospitality",
              focus: "Short-Form Creator Marketing & Local Footfall",
              detail: "Engineering mouth-watering cinematic food commercials, local geo-radius Meta campaigns, and high-volume delivery app promotions."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">{item.industry}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.focus}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 15: VERIFIED CLIENT CASE STUDIES SPOTLIGHT
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 mr-2" />
            <span>Audited Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Documented Client Victories
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Real founders, real verified metrics, and compounding financial returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-3xl font-black text-orange-400 mb-1">+312%</div>
              <div className="text-xs font-bold text-white mb-4">Ecommerce Apparel Brand</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Migrated slow WooCommerce store to a custom Next.js storefront while redesigning their Meta Ads creative engine. Scaled monthly revenue from ₹8L to ₹34L at a 4.8x blended ROAS.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="font-bold text-white">Deliverables:</span> Next.js Storefront, Meta CAPI, 24 Short-Form Videos.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-3xl font-black text-orange-400 mb-1">480+ Leads/mo</div>
              <div className="text-xs font-bold text-white mb-4">Multi-City Aesthetic Clinic</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Rebuilt local search SEO infrastructure and launched click-to-WhatsApp Meta campaigns, slashing their customer acquisition cost by 54% within 90 days of engagement.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="font-bold text-white">Deliverables:</span> Local Maps SEO, Automated WhatsApp CRM, Google Ads.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-3xl font-black text-orange-400 mb-1">₹2.4 Cr Pipeline</div>
              <div className="text-xs font-bold text-white mb-4">B2B Logistics SaaS Platform</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Engineered custom enterprise web application with sub-0.5s response times, paired with high-intent technical SEO topic clusters ranking #1 for industry search queries.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              <span className="font-bold text-white">Deliverables:</span> React 19 Web App, Technical SEO Cluster, Demo Funnel.
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 16: COMPETITIVE COMPARISON MATRIX
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5 mr-2" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Arventa Ventures vs The Alternatives
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Compare our full-stack engineering and performance standards against traditional agencies and loose freelancers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-4 px-4 font-bold uppercase tracking-wider">Evaluation Vector</th>
                <th className="py-4 px-4 font-black text-orange-400 text-base">Arventa Ventures</th>
                <th className="py-4 px-4 font-medium">Traditional Agencies</th>
                <th className="py-4 px-4 font-medium">In-House / Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {[
                {
                  vector: "Attribution Architecture",
                  arventa: "Server-Side CAPI + First-Party Data",
                  traditional: "Flawed Browser Pixel Cookies",
                  freelancer: "Basic GA4 or Unconfigured"
                },
                {
                  vector: "Codebase & Web Speed",
                  arventa: "Sub-0.8s Custom React / Next.js",
                  traditional: "Bloated 4s+ WordPress Elementor",
                  freelancer: "Generic Templates without CDN"
                },
                {
                  vector: "Leadership & Oversight",
                  arventa: "Direct Founder Jaydeb Jana Access",
                  traditional: "Junior Account Executive",
                  freelancer: "Single Individual with Bottlenecks"
                },
                {
                  vector: "Creative Production",
                  arventa: "In-House 4K Cinema Gear + 30+ Hooks/wk",
                  traditional: "Recycled Static Stock Images",
                  freelancer: "Canva Templates"
                },
                {
                  vector: "Contract Transparency",
                  arventa: "100% Client Code & Ad IP Ownership",
                  traditional: "Proprietary Lock-in Retainers",
                  freelancer: "Disorganized File Storage"
                },
                {
                  vector: "Primary Success Metric",
                  arventa: "Client Net Margin & Blended ROAS",
                  traditional: "Impressions & Vanity Clicks",
                  freelancer: "Hours Billed"
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">{row.vector}</td>
                  <td className="py-4 px-4 font-bold text-orange-400 bg-orange-500/5">{row.arventa}</td>
                  <td className="py-4 px-4 text-slate-400">{row.traditional}</td>
                  <td className="py-4 px-4 text-slate-400">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 17: SEO KNOWLEDGE ARTICLE
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            <span>Authority Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            The Modern Blueprint for Scalable Customer Acquisition & Engineering
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              In the modern digital landscape, the distinction between high-performance software engineering and customer acquisition marketing has completely collapsed. Brands that rely solely on surface-level creative ads without optimizing their server infrastructure, Core Web Vitals, and server-side tracking pipelines consistently suffer from high customer acquisition costs (CAC) and poor return on ad spend (ROAS).
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              1. The Death of Third-Party Cookie Attribution
            </h3>
            <p>
              Following Apple's App Tracking Transparency (ATT) update and Google Chrome's third-party cookie restrictions, conventional client-side pixel scripts drop between 30% and 45% of customer conversion signals. When advertising algorithms on Meta and Google fly blind, they fail to optimize for high-value purchasers. Arventa Ventures solves this by deploying full server-to-server Conversions API (CAPI) streaming directly from high-speed edge workers, passing hashed first-party customer signals back to ad platforms with an Event Match Quality score consistently above 9.0 out of 10.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              2. Why Web Speed Is Your Highest-Leverage Ad Arbitrage
            </h3>
            <p>
              Every 100-millisecond delay in mobile landing page load times reduces conversion rates by approximately 7%. If your ad campaign generates 10,000 clicks, but your bloated CMS page takes 4.2 seconds to render, over 40% of prospective buyers bounce before ever reading your headline. By engineering custom React 19 and Next.js frontends with global Cloudflare edge caching, Arventa Ventures achieves sub-0.8 second Largest Contentful Paint (LCP) speeds, instantly doubling the conversion efficiency of existing ad spend.
            </p>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 18: 20-POINT QUALITY & SECURITY AUDIT CHECKLIST
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <FileCheck2 className="w-3.5 h-3.5 mr-2" />
            <span>Interactive Audit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            The Arventa 20-Point Execution & Security Standard
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Every project deployed by Arventa Ventures must pass our rigorous 20-point technical, architectural, and security audit. Click to test our checklist:
          </p>
          <div className="mt-4 text-xs font-bold text-orange-400">
            {completedAuditCount} of {auditChecklistItems.length} Core Vectors Verified
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
          {auditChecklistItems.map((item, i) => {
            const isChecked = !!checkedAuditItems[i];
            return (
              <div
                key={i}
                onClick={() => toggleAudit(i)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? "bg-slate-900/90 border-orange-500/50 shadow-lg shadow-orange-500/10"
                    : "bg-slate-900/40 border-slate-800 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isChecked ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {isChecked ? <Check className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">ARV-V{i + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 19: TRANSPARENT ENGAGEMENT & RETAINER MODELS
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5 mr-2" />
            <span>Investment Structure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Transparent Engagement Tiers
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            No hidden clauses, no arbitrary fees. Structured partnerships aligned with measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Starter Sprint</div>
              <div className="text-3xl font-black text-white mb-4">Custom Scope</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Ideal for established brands requiring a discrete deliverable: complete website engineering, initial technical SEO architecture, or forensic ad account restructuring.
              </p>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Full technical discovery</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> 100% intellectual property transfer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> 30-day post-launch warranty</li>
              </ul>
            </div>
            <Button asChild variant="outline" className="w-full rounded-full border-slate-700 text-white hover:bg-slate-800">
              <Link to="/contact">Discuss Starter Sprint</Link>
            </Button>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border-2 border-orange-500 relative flex flex-col justify-between shadow-2xl shadow-orange-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white font-bold text-[10px] uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Growth Engine Retainer</div>
              <div className="text-3xl font-black text-white mb-4">Dedicated Team</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Our flagship full-funnel partnership combining continuous algorithmic Meta ad management, weekly creative video testing, and ongoing codebase CRO optimization.
              </p>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Dedicated media buyer & dev pod</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> 30+ new ad variations monthly</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Server-side CAPI telemetry</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Weekly founder strategy syncs</li>
              </ul>
            </div>
            <Button asChild className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
              <Link to="/contact">Inquire for Growth Engine</Link>
            </Button>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Enterprise Scale Pod</div>
              <div className="text-3xl font-black text-white mb-4">Custom Retainer</div>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                For venture-backed and high-revenue corporations spending ₹5L+ monthly requiring bespoke software engineering, multi-brand ad accounts, and custom data infrastructure.
              </p>
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Dedicated full-time engineering pod</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Bespoke Looker telemetry dashboard</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> 24/7 priority SLA support</li>
              </ul>
            </div>
            <Button asChild variant="outline" className="w-full rounded-full border-slate-700 text-white hover:bg-slate-800">
              <Link to="/contact">Request Enterprise Briefing</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 20: CLIENT TESTIMONIALS & SOCIAL PROOF
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 mr-2" />
            <span>Executive Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Trusted by Ambitious Business Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Read direct experiences from founders who entrusted their digital growth to Arventa Ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              quote: "Arventa Ventures completely revolutionized our unit economics. Their server-side CAPI setup and high-hook video ads scaled our D2C brand from ₹5L to over ₹28L monthly within 4 months.",
              author: "Vikram Malhotra",
              role: "Co-Founder & CEO",
              company: "Aura Luxe Apparel",
              rating: 5
            },
            {
              quote: "Unlike previous agencies who showed us useless impression reports, Jaydeb Jana and his team focused strictly on booked patient appointments and customer acquisition cost.",
              author: "Dr. Ananya Sen",
              role: "Medical Director",
              company: "Sen Aesthetic Clinics",
              rating: 5
            },
            {
              quote: "The Next.js web application built by Arventa loads in under 0.6 seconds globally. Our inbound enterprise software demo requests surged by 210% within 60 days.",
              author: "Rajeshwar Rao",
              role: "CTO & Co-Founder",
              company: "LogixFlow Systems",
              rating: 5
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-400 mb-4">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-orange-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-orange-400">{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 21: FAQ ACCORDION SECTION
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-2" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Everything you need to know about partnering with Arventa Ventures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 22: FOUNDER'S PERSONAL PLEDGE & LETTER FROM JAYDEB JANA
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 relative shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="shrink-0 text-center sm:text-left">
              <img
                src="/images/author-jaydeb.webp"
                alt="Jaydeb Jana Founder Arventa Ventures"
                className="w-28 h-28 rounded-2xl object-cover ring-2 ring-orange-500 shadow-xl mx-auto sm:mx-0 mb-3"
              />
              <div className="text-sm font-bold text-white">Jaydeb Jana</div>
              <div className="text-xs text-orange-400">Founder & CEO</div>
            </div>
            <div className="text-left space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                "My Personal Commitment to Every Client"
              </h3>
              <p>
                When you partner with Arventa Ventures, your business is never treated as a support ticket or passed down to junior freelancers. We founded this agency on a singular premise: combining elite software engineering with algorithmic marketing precision.
              </p>
              <p>
                I personally oversee all ad strategy architectures, review key codebase milestones, and hold our agency accountable to your net profit. If we don't believe we can genuinely multiply your investment, we will tell you upfront before accepting a single rupee.
              </p>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-orange-400">
                  Jaydeb Jana — Founder, Arventa Ventures
                </div>
                <a
                  href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20connect%20directly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  <MessageCircle className="w-4 h-4" /> Message Jaydeb on WhatsApp (+91 7872490719)
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 23: HIGH-CONVERTING CLOSING CONVERSION BANNER
         ========================================================================= */}
      <Section className="bg-slate-950 text-center py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Scale</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Stop Guessing. Start Dominating Your Market.
          </h2>
          <p className="text-base md:text-xl text-slate-300 mb-10 font-light leading-relaxed">
            Partner with the full-funnel engineering and performance marketing agency that delivers predictable customer acquisition and measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-16 px-10 text-base rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25 transition-transform active:scale-95">
              <Link to="/contact">Get Your Free Strategy Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-8 text-base rounded-full border-slate-700 hover:bg-slate-900 text-white font-semibold">
              <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
              </a>
            </Button>
          </div>
        </div>
      </Section>

    </div>
  );
}
