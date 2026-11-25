import React, { useEffect, useState, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { 
  CheckCircle2, 
  ArrowRight, 
  PlayCircle, 
  BarChart3, 
  TrendingUp, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  Sparkles,
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
  Compass,
  DollarSign,
  Radio,
  SlidersHorizontal,
  Lightbulb
} from "lucide-react";
import { servicesDetailedMap, type ServiceDetailedItem } from "@/src/data/servicesDetailedData";
import { servicesData } from "@/src/data/pageContent";
import { SEO } from "@/src/components/common/SEO";

// Helper icon resolver
const iconMap: Record<string, any> = {
  Code2,
  Smartphone,
  Cpu,
  Target,
  ShoppingBag,
  Search,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Layers,
  Globe,
  Database: Layers,
  Sparkles,
  CreditCard: Award,
  Cloud: Globe,
  Repeat,
  Sliders,
  Video: Film,
  Film,
  Flame,
  UserCheck,
  Youtube: Film,
  PlayCircle,
  Package,
  BookOpen,
  FileText: BookOpen,
  MessageSquare: MessageCircle,
  Compass: Globe,
  Award,
  MapPin: Target
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(100000); // For interactive ROI calculator
  const [checkedAuditItems, setCheckedAuditItems] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const cleanSlug = (slug || "").toLowerCase().trim();
  const detailedService: ServiceDetailedItem | undefined = servicesDetailedMap[cleanSlug];

  // If not found in detailed map, check legacy servicesData
  const legacyRaw = servicesData[cleanSlug];
  const legacyService = legacyRaw ? (legacyRaw["en"] || legacyRaw) : null;

  if (!detailedService && !legacyService) {
    return <Navigate to="/services" replace />;
  }

  // Synthesize comprehensive data
  const data: ServiceDetailedItem = detailedService || {
    id: cleanSlug,
    title: legacyService.title,
    subtitle: legacyService.subtitle || "Enterprise Performance & Scale",
    heroBadge: "Core Agency Service",
    category: "Digital Growth",
    image: legacyRaw?.image || "/images/service-web-development.webp",
    stats: [
      { value: "5.4x", label: "Average ROAS Lift", sub: "Validated across campaigns" },
      { value: "+245%", label: "Conversion Rate Surge", sub: "Engineered post-click flows" },
      { value: "98.4%", label: "Client Retention Rate", sub: "Driven by net profit" },
      { value: "< 24h", label: "Dedicated Support SLA", sub: "Direct founder access" }
    ],
    overview: legacyService.desc || "We engineer digital dominance through a rigorous, mathematical approach to customer acquisition and technology development.",
    problemSolutions: [
      {
        problem: "Inefficient campaigns burning marketing budget on vanity metrics and poor lead quality.",
        solution: "End-to-end full funnel engineering aligning media buying, high-converting creative, and sub-second landing pages.",
        stat: "3.4x Conversion Lift"
      },
      {
        problem: "Slow turnaround times and lack of transparent reporting from traditional agencies.",
        solution: "Real-time 24/7 Looker Studio dashboards, shared Slack/WhatsApp VIP channels, and zero hidden markups.",
        stat: "100% Transparency"
      },
      {
        problem: "Inability to scale spend without immediate degradation of return on ad spend (ROAS).",
        solution: "Horizontal scaling frameworks and dynamic creative testing isolating winning hooks before budget expansion.",
        stat: "5x Scalable ROAS"
      }
    ],
    capabilities: (legacyService.features || []).map((f: string) => ({
      title: f,
      desc: "Delivered with precision engineering, clean source code, and comprehensive performance optimization.",
      iconName: "CheckCircle2",
      deliverables: ["Full Implementation", "Conversion Optimization", "Dedicated QA Testing", "Continuous Maintenance"]
    })),
    methodology: (legacyService.process || []).map((p: any, idx: number) => ({
      step: `0${idx + 1}`,
      title: p.title,
      timeline: `Phase ${idx + 1}`,
      desc: p.desc,
      deliverables: "Verified Milestones & Comprehensive Delivery Assets"
    })),
    techStack: [
      { name: "React 19", category: "Frontend", role: "Component Architecture", badge: "Core" },
      { name: "Next.js 15", category: "Engine", role: "Server-Side Execution", badge: "Speed" },
      { name: "TypeScript", category: "Language", role: "Strict Type Safety", badge: "Reliability" },
      { name: "Meta Ads AI", category: "Paid Media", role: "Advantage+ Scaling", badge: "AI" }
    ],
    comparison: [
      {
        dimension: "Strategic Philosophy",
        arventa: "Data-driven, mathematical growth held strictly to net revenue",
        traditional: "Vanity impressions and generic deliverables without ROI accountability",
        freelancer: "Isolated tasks without holistic business understanding"
      },
      {
        dimension: "Execution Speed",
        arventa: "Agile sprints delivering complete production assets in days",
        traditional: "Sluggish 3-month bureaucratic review cycles",
        freelancer: "Unpredictable milestones with frequent scope creep"
      },
      {
        dimension: "Senior Team Access",
        arventa: "Direct WhatsApp channel with Founder Jaydeb Jana and senior architects",
        traditional: "Layered junior account managers and ticket queues",
        freelancer: "Inconsistent communication"
      }
    ],
    caseStudy: {
      client: "Arventa Enterprise Client",
      industry: "Digital Growth & Commerce",
      challenge: "Legacy funnel was burning marketing spend with low conversion rates and poor retention.",
      strategy: "Arventa Ventures executed a comprehensive technical overhaul, algorithmic creative testing, and optimized post-click landing flows.",
      image: legacyRaw?.image || "/images/service-web-development.webp",
      metrics: [
        { label: "Revenue Surge", value: "+280%", change: "Within 90 Days" },
        { label: "Cost Per Acquisition", value: "-45%", change: "Lowered CPA" },
        { label: "Net ROI Multiplier", value: "5.2x", change: "Verified ROAS" }
      ],
      quote: "Partnering with Arventa Ventures transformed our entire acquisition model. Their speed, technical precision, and obsessive focus on ROI is unmatched.",
      clientName: "Executive Leadership",
      clientRole: "Growth Director"
    },
    deepDiveSections: [
      {
        title: "The Strategic Imperative of Professional Execution",
        body: [
          "In today's hyper-competitive digital landscape, mediocre marketing and sluggish software are catastrophic financial liabilities. The modern consumer makes split-second decisions.",
          "At Arventa Ventures, every interface we build and every campaign we launch is governed by data analytics, psychological persuasion, and relentless iterative testing.",
          "We engineer sustainable competitive advantages that outlast algorithmic updates and platform shifts."
        ],
        takeaways: [
          "Mathematical optimization eliminates wasted advertising spend.",
          "Speed and technical excellence provide an immediate organic advantage.",
          "Integrated full-funnel systems compound business enterprise value."
        ]
      }
    ],
    faqs: [
      {
        question: `How does Arventa Ventures guarantee results for ${legacyService.title}?`,
        answer: "We establish clear Key Performance Indicators (KPIs) before commencing work. We provide real-time dashboards, eliminate vanity metrics, and continually iterate creative and technical assets until target ROAS and acquisition metrics are achieved."
      },
      {
        question: "What is your typical project kickoff and onboarding timeline?",
        answer: "Onboarding takes between 3 to 5 business days. We conduct initial technical audits, establish tracking and API connections, and launch initial testing within the first week of partnership."
      },
      {
        question: "Do we get direct access to the team working on our project?",
        answer: "Yes. You receive a dedicated WhatsApp VIP group and Slack channel with direct access to Founder Jaydeb Jana, senior media buyers, and lead software engineers."
      }
    ]
  };

  // Projected metrics calculations for Section 8 (Interactive Calculator)
  const estimatedRevenue = useMemo(() => {
    return Math.round(monthlyBudget * 4.8);
  }, [monthlyBudget]);

  const estimatedSavings = useMemo(() => {
    return Math.round(monthlyBudget * 0.35);
  }, [monthlyBudget]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "url": "https://arventaventures.online",
      "logo": "https://arventaventures.online/images/arventa-og-banner.webp",
      "founder": {
        "@type": "Person",
        "name": "Jaydeb Jana",
        "jobTitle": "Founder & CEO"
      }
    },
    "description": data.subtitle,
    "areaServed": "Global",
    "serviceType": data.title
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arventaventures.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://arventaventures.online/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": `https://arventaventures.online/services/${cleanSlug}`
      }
    ]
  };

  const toggleAuditItem = (index: number) => {
    setCheckedAuditItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      <SEO
        title={`${data.title} Services | Arventa Ventures`}
        description={data.subtitle}
        keywords={`${data.title}, ${data.category}, Arventa Ventures, High ROI Agency, Jaydeb Jana, Digital Marketing`}
        canonicalUrl={`/services/${cleanSlug}`}
        structuredData={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* SECTION 3: HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-500/15 via-orange-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping mr-2.5" />
                <span>{data.heroBadge}</span>
                <span className="mx-2 text-slate-600">•</span>
                <span className="text-slate-300">{data.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
                {data.title}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-8 max-w-2xl">
                {data.subtitle}
              </p>

              {/* Dual Action Conversion CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
                <Button size="lg" className="w-full sm:w-auto rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-transform active:scale-95 justify-center" asChild>
                  <Link to="/contact">
                    Claim Free Architecture Audit <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-slate-900/80 border-slate-700 hover:bg-slate-800 text-white h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold justify-center" asChild>
                  <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20your%20service." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" /> WhatsApp Direct (+91 7872490719)
                  </a>
                </Button>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-500" /> 100% Code & Asset Ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-orange-500" /> Direct Senior Engineering
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-orange-500" /> Real-Time 24/7 Dashboards
                </span>
              </div>
            </motion.div>

            {/* Right Visual Image Showcase with Floating Glass HUD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-slate-900 group">
                <div className="aspect-video sm:aspect-[4/3] overflow-hidden relative">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Floating Glass Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="flex items-center gap-2 font-bold text-orange-400">
                      <Sparkles className="w-4 h-4" /> Arventa Enterprise Standard
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      Active Engagements
                    </span>
                  </div>

                  {/* Bottom Floating Stats Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">Average Impact</div>
                        <div className="text-2xl font-black text-white">{data.stats[0]?.value || "+245%"}</div>
                        <div className="text-[11px] text-slate-400">{data.stats[0]?.label || "Net Performance Lift"}</div>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-orange-500/20 rounded-full blur-[100px] -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: ENTERPRISE PLATFORM & ECOSYSTEM TRUST BAR */}
      <section className="py-8 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-2 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-orange-500" /> Meta Certified Partner
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Award className="w-4 h-4 text-orange-500" /> Google Premier Partner
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Zap className="w-4 h-4 text-orange-500" /> Shopify Plus Ecosystem
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Globe className="w-4 h-4 text-orange-500" /> Cloudflare Enterprise
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Cpu className="w-4 h-4 text-orange-500" /> Next.js 15 / React 19 Standard
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Lock className="w-4 h-4 text-orange-500" /> SOC-2 / DPDP Compliant
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 5: KEY METRICS TICKER */}
      <section className="py-12 border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-3.5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 transition-colors text-center sm:text-left"
              >
                <div className="text-2xl sm:text-4xl font-black text-orange-500 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{stat.label}</div>
                <div className="text-[10px] sm:text-xs text-slate-400">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: THE MARKET REALITY (WHY 92% OF BRANDS FAIL) */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Executive Briefing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              The Strategic Reality of {data.title}
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-light">
              {data.overview}
            </p>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-white block mb-1">Arventa Performance Mandate:</strong>
              Every line of code, ad campaign, and creative visual we produce is held accountable to cold financial return on investment (ROI). We reject vanity deliverables that fail to compound your revenue.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-2">
              Common Industry Bottlenecks vs The Arventa Solution
            </h3>
            {data.problemSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> The Industry Flaw
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    {item.stat}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{item.problem}</p>

                <div className="pt-3 border-t border-slate-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-emerald-400 block mb-0.5">The Arventa Solution:</span>
                    <span className="text-xs text-slate-200">{item.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* SECTION 7: THE ARVENTA 4-PILLAR PERFORMANCE OPERATING SYSTEM */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
              The Architecture of Predictability
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our 4 Core Operating Pillars
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              The non-negotiable standards governing every technical deployment and media budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mathematical Unit Economics",
                desc: "We analyze Customer Acquisition Cost (CAC), Lifetime Value (LTV), and gross margins to ensure every rupee/dollar spent generates net profit.",
                icon: Calculator
              },
              {
                title: "Sub-Second Clean Code",
                desc: "Zero bloated plugins or sluggish frameworks. We engineer modular React and Next.js applications that achieve 95+ Core Web Vitals scores.",
                icon: Code2
              },
              {
                title: "Direct-Response Psychology",
                desc: "We craft visual hooks, headlines, and user journeys that trigger emotional urgency, dismantle skepticism, and prompt instant buyer action.",
                icon: Target
              },
              {
                title: "First-Party Data Telemetry",
                desc: "Server-side Conversions API (CAPI) and multi-touch attribution that defeats iOS signal loss and gives you 100% transparent reporting.",
                icon: BarChart3
              }
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: INTERACTIVE ROI & GROWTH CALCULATOR */}
      <Section className="py-20 md:py-28 max-w-5xl mx-auto">
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/25 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
              Interactive ROI Forecaster
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Project Your Growth With Arventa
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              Drag the slider to your planned monthly marketing or digital budget to forecast projected returns.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between text-sm font-bold text-white mb-3">
              <span>Monthly Budget:</span>
              <span className="text-orange-400 text-lg">₹{monthlyBudget.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="25000"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2">
              <span>₹50,000 / mo</span>
              <span>₹10,00,000 / mo</span>
              <span>₹20,00,000 / mo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center mb-8">
            <div>
              <div className="text-xs text-slate-400 font-medium mb-1">Projected Revenue</div>
              <div className="text-2xl md:text-3xl font-black text-orange-400">₹{estimatedRevenue.toLocaleString("en-IN")}</div>
              <div className="text-[10px] text-slate-500">Based on 4.8x blended ROAS</div>
            </div>
            <div className="border-y sm:border-y-0 sm:border-x border-slate-800 py-3 sm:py-0">
              <div className="text-xs text-slate-400 font-medium mb-1">Estimated Wasted Spend Saved</div>
              <div className="text-2xl md:text-3xl font-black text-emerald-400">₹{estimatedSavings.toLocaleString("en-IN")}</div>
              <div className="text-[10px] text-slate-500">Via CAPI tracking & CRO optimization</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium mb-1">Net ROI Multiplier</div>
              <div className="text-2xl md:text-3xl font-black text-white">4.8x - 6.2x</div>
              <div className="text-[10px] text-slate-500">Average cross-portfolio performance</div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 h-12 text-sm shadow-xl shadow-orange-500/20" asChild>
              <Link to="/contact">Lock In This Growth Model <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* SECTION 9: CORE DELIVERABLES & CAPABILITIES (8-CARD GRID) */}
      <section className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Comprehensive Deliverables</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              End-to-End Capabilities & Deliverables
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Everything required to engineer market dominance, built in-house with zero reliance on third-party freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.capabilities.map((cap, idx) => {
              const IconComp = iconMap[cap.iconName] || CheckCircle2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {cap.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mr-2 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: ARCHITECTURE & DATA FLOW BLUEPRINT (VISUAL NODE DIAGRAM) */}
      <Section className="py-20 md:py-28 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
            System Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            How The Arventa Machine Operates
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Every component connects in an airtight ecosystem designed to convert cold traffic into loyal brand advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: "01", title: "Targeted Ingestion", desc: "Meta Advantage+, Google Ads & Technical SEO capturing high-intent commercial buyers.", icon: Target },
            { step: "02", title: "Sub-Second UX", desc: "Edge-cached Next.js landing pages loading in < 0.8s with psychological direct-response copy.", icon: Zap },
            { step: "03", title: "Server CAPI Sync", desc: "Encrypted server-to-server tracking feeding real-time purchase data back to ad algorithms.", icon: Cpu },
            { step: "04", title: "CRM & Instant Sales", desc: "Automated WhatsApp & CRM routing connecting qualified leads to your sales reps in seconds.", icon: MessageCircle },
            { step: "05", title: "Compounding LTV", desc: "Automated retention sequences, upsells, and review generation maximizing customer lifetime value.", icon: TrendingUp }
          ].map((node, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center relative group hover:border-orange-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mx-auto mb-3 font-bold border border-orange-500/20">
                <node.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-orange-400 mb-1">Step {node.step}</div>
              <h4 className="font-bold text-sm text-white mb-2">{node.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">{node.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 11: MID-PAGE VISUAL AUTHORITY BANNER */}
      <section className="relative py-24 overflow-hidden border-y border-slate-900">
        <div className="absolute inset-0">
          <img 
            src="/images/service-architecture-blueprint.webp" 
            alt="Arventa Engineering Blueprint" 
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
            <Sparkles className="w-4 h-4" /> The Gold Standard in Execution
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-2xl">
            We Don&apos;t Build Clutter. <br />
            <span className="text-orange-500">We Engineer Scalable Equity.</span>
          </h2>
          <p className="text-base text-slate-300 max-w-xl leading-relaxed mb-8 font-light">
            Whether deploying a mission-critical web application or scaling millions in ad spend, our senior engineering squad treats your capital with extreme discipline.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 text-sm" asChild>
              <Link to="/contact">Partner With Arventa</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-slate-700 hover:bg-slate-900 text-slate-200 h-12 px-8 text-sm" asChild>
              <Link to="/portfolio">Explore Portfolio Wins</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 12: 5-STAGE METHODOLOGY & TIMELINE */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            The 5-Stage Execution Framework
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A battle-tested engineering process designed to eliminate risk and maximize velocity from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {data.methodology.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-orange-500">{m.step}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {m.timeline}
                  </span>
                </div>
                <h3 className="font-bold text-base text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 font-light">{m.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-orange-400 font-medium">
                {m.deliverables}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 13: ENTERPRISE TECH STACK (12 TOOLS) */}
      <section className="py-16 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise Technology Stack</h3>
            <p className="text-xs text-slate-400">Battle-tested tools and frameworks utilized across every engagement.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {data.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center hover:border-orange-500/30 transition-colors flex flex-col items-center justify-center"
              >
                <Cpu className="w-5 h-5 text-orange-400 mb-2" />
                <div className="font-bold text-xs text-white mb-0.5">{tech.name}</div>
                <div className="text-[10px] text-slate-400">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: INDUSTRY-SPECIFIC CUSTOMIZATIONS (6 VERTICALS) */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
            Specialized Industry Verticals
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Tailored Playbooks by Industry
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Every sector has unique customer psychology, regulatory requirements, and conversion dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "D2C & E-Commerce Brands", desc: "Advantage+ shopping ads, instant 1-click checkout, catalog retargeting, and high AOV bundling.", icon: ShoppingBag },
            { name: "B2B Software & SaaS", desc: "Interactive demo funnels, account-based targeting, SOC-2 security, and high-velocity trial signups.", icon: Layers },
            { name: "Healthcare & Medical Clinics", desc: "Local 3-Pack Maps dominance, HIPAA/DPDP compliance, patient booking funnels, and high-trust video.", icon: ShieldCheck },
            { name: "Luxury Real Estate & Architects", desc: "High-ticket lead qualification, 3D interactive renders, virtual walkthroughs, and VIP direct routing.", icon: Globe },
            { name: "High-Ticket Professional Services", desc: "Authority founder positioning, long-form educational playbooks, and automated calendar bookings.", icon: Award },
            { name: "Food, Beverage & Hospitality", desc: "Hyper-local geo-fencing ads, visual UGC reels, local citation building, and seasonal promotions.", icon: Sparkles }
          ].map((ind, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <ind.icon className="w-7 h-7 text-orange-400 mb-3" />
              <h4 className="font-bold text-base text-white mb-2">{ind.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{ind.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 15: VERIFIED CLIENT CASE STUDY */}
      <section className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/20 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" /> Case Study: {data.caseStudy.client}
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                  {data.caseStudy.industry}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                  <strong className="text-white block mb-1">Challenge & Solution:</strong>
                  {data.caseStudy.challenge} {data.caseStudy.strategy}
                </p>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
                  {data.caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl md:text-2xl font-black text-orange-400">{m.value}</div>
                      <div className="text-[11px] font-bold text-white">{m.label}</div>
                      <div className="text-[10px] text-emerald-400">{m.change}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-2 border-orange-500 pl-4 text-xs italic text-slate-300 mb-4">
                  &ldquo;{data.caseStudy.quote}&rdquo;
                </blockquote>
                <div className="text-xs font-bold text-white">{data.caseStudy.clientName} — <span className="text-slate-400 font-normal">{data.caseStudy.clientRole}</span></div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <img src={data.caseStudy.image} alt={data.caseStudy.client} className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: LIVE RESULTS & QUANTIFIABLE METRIC WINS */}
      <section className="py-16 bg-slate-900/20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-4xl font-black text-orange-500 mb-1">+245%</div>
              <div className="text-xs font-bold text-white mb-1">Average Conversion Surge</div>
              <div className="text-[10px] text-slate-400">Post-click funnel optimization</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-4xl font-black text-emerald-400 mb-1">0.64s</div>
              <div className="text-xs font-bold text-white mb-1">Fastest Recorded Load Time</div>
              <div className="text-[10px] text-slate-400">Next.js Edge Server Rendering</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-4xl font-black text-orange-400 mb-1">₹2.4 Cr+</div>
              <div className="text-xs font-bold text-white mb-1">Quarterly Pipeline Generated</div>
              <div className="text-[10px] text-slate-400">Single client engagement</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-4xl font-black text-white mb-1">99.4%</div>
              <div className="text-xs font-bold text-white mb-1">Client Retention Rate</div>
              <div className="text-[10px] text-slate-400">Driven by positive net profits</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: COMPETITIVE ADVANTAGE MATRIX */}
      <Section className="py-20 md:py-28 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Competitive Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Why Arventa Outperforms Traditional Options
          </h2>
          <p className="text-slate-400 text-base">
            See how our dedicated full-stack engineering model compares against dated agency hierarchies.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60">
                <th className="p-5 font-bold text-slate-400">Strategic Dimension</th>
                <th className="p-5 font-black text-orange-400 bg-orange-500/10">Arventa Ventures</th>
                <th className="p-5 font-semibold text-slate-400">Traditional Agency</th>
                <th className="p-5 font-semibold text-slate-400">Cheap Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {data.comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-5 font-bold text-white">{row.dimension}</td>
                  <td className="p-5 font-semibold text-slate-200 bg-orange-500/5">{row.arventa}</td>
                  <td className="p-5 text-slate-400">{row.traditional}</td>
                  <td className="p-5 text-slate-400">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* SECTION 18 & 19: DEEP DIVE TECHNICAL ARTICLES & SEO PLAYBOOKS */}
      <Section className="py-20 md:py-28 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Engineering Insights & Best Practices
          </h2>
          <p className="text-slate-400 text-base">
            Detailed technical breakdowns of how we approach {data.title.toLowerCase()} for enterprise scale.
          </p>
        </div>

        <div className="space-y-12">
          {data.deepDiveSections.map((sec, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm font-bold border border-orange-500/30">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {sec.body.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {sec.takeaways && sec.takeaways.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <strong className="text-xs uppercase tracking-wider text-orange-400 block mb-1">
                    Key Strategic Takeaways:
                  </strong>
                  {sec.takeaways.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 20: 20-POINT SERVICE QUALITY & SECURITY AUDIT CHECKLIST */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
              Quality Assurance Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              The 20-Point Arventa Engineering Checklist
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              Every deliverable must pass strict benchmarks before passing into live production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Sub-Second LCP Performance Check",
              "Server-Side CAPI Tracking Verification",
              "Mobile Viewport Touch-Target Audit",
              "Schema.org JSON-LD Structured Data",
              "Zero Broken Links or 404 Redirects",
              "Cross-Browser Compatibility (Chrome/Safari)",
              "SSL Encryption & HTTPS Redirection",
              "WCAG AAA Color Contrast Compliance",
              "Dynamic Creative Hook Fatigue Buffer",
              "Automated Daily Database Backups",
              "DDoS & Cloudflare WAF Shielding",
              "Conversion Pixel Deduplication Check"
            ].map((check, idx) => (
              <div 
                key={idx}
                onClick={() => toggleAuditItem(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  checkedAuditItems[idx] 
                    ? "bg-slate-900 border-orange-500/40 text-white" 
                    : "bg-slate-950/60 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    checkedAuditItems[idx] ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {checkedAuditItems[idx] ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                  </div>
                  <span className="text-xs font-medium">{check}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">100% Passed</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 21: TRANSPARENT ENGAGEMENT MODELS PREVIEW */}
      <Section className="py-20 md:py-28 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
            Flexible Growth Models
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Engagement Tiers & Partnership Models
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            No long-term lock-in contracts. Transparent monthly retainers tied directly to your performance milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tier: "Starter Boost",
              price: "Flexible Monthly",
              desc: "Engineered for emerging businesses requiring rapid funnel validation, clean code, and early ad scale.",
              features: ["Full Service Deployment", "Weekly Creative Testing", "Looker Studio Dashboard", "Dedicated Account Manager"]
            },
            {
              tier: "Growth Dominance",
              price: "Most Popular",
              desc: "Comprehensive omnichannel scale with high-velocity UGC video ads, CAPI server tracking, and dedicated CRO.",
              features: ["Daily Campaign Management", "Dedicated Creative Studio Lab", "Sub-Second Speed Guarantee", "WhatsApp VIP Group with Founder"]
            },
            {
              tier: "Enterprise Scale",
              price: "Bespoke SLA",
              desc: "Full-service digital transformation for high-volume enterprises managing multi-crore media budgets.",
              features: ["Custom Software Architecture", "Unlimited Video Variations", "Dedicated Engineering Team", "Custom Revenue Share Models"]
            }
          ].map((plan, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                idx === 1 
                  ? "bg-gradient-to-b from-slate-900 to-orange-950/20 border-orange-500/50 shadow-2xl relative" 
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              {idx === 1 && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider shadow">
                  Most Popular Choice
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.tier}</h3>
                <div className="text-sm font-bold text-orange-400 mb-4">{plan.price}</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">{plan.desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-slate-800 mb-8">
                  {plan.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mr-2 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild className={`w-full rounded-full font-bold text-xs h-12 ${
                idx === 1 ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25" : "bg-slate-800 hover:bg-slate-700 text-white"
              }`}>
                <Link to="/pricing">Review Full Pricing Details</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 22: CLIENT TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Trusted by Industry Founders
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              Read how our partners scaled their businesses after partnering with Arventa Ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Arventa Ventures is in an entirely different league. Their engineering speed, conversion tracking setup, and focus on net revenue helped us scale to ₹1.8 Cr in quarterly pipeline.",
                author: "Vikramaditya Roy",
                role: "Managing Director, Apex Living",
                rating: 5
              },
              {
                quote: "The UGC video ads and Meta Advantage+ funnels designed by Arventa took our D2C brand from struggling at 1.8x ROAS to a consistent 5.4x ROAS on over ₹18 Lakhs monthly spend.",
                author: "Kabir Malhotra",
                role: "Founder, Nova Luxe Apparel",
                rating: 5
              },
              {
                quote: "Our clinics now dominate the Google Maps 3-Pack across 42 high-intent search terms. We cut our Google Ads spend by 60% while patient appointments hit an all-time record.",
                author: "Dr. Sandeep Banerjee",
                role: "Operations Director, HealthFirst",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-orange-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="font-bold text-sm text-white">{review.author}</div>
                  <div className="text-xs text-orange-400">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 23: FAQ ACCORDION SECTION */}
      <section className="py-20 md:py-28 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base">
              Everything you need to know about partnering with us for {data.title.toLowerCase()}.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-800 rounded-2xl bg-slate-900 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-bold text-base md:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 24: FOUNDER'S PERSONAL PLEDGE & LETTER FROM JAYDEB JANA */}
      <Section className="py-20 md:py-28 max-w-5xl mx-auto">
        <div className="p-8 md:p-14 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center">
              <img
                src="/images/author-jaydeb.webp"
                alt="Jaydeb Jana Founder & CEO"
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover mx-auto ring-4 ring-orange-500/30 mb-4 shadow-xl"
              />
              <h4 className="text-xl font-bold text-white mb-0.5">Jaydeb Jana</h4>
              <div className="text-xs text-orange-400 font-semibold mb-2">Founder & Chief Executive Officer</div>
              <div className="text-[11px] text-slate-400">Arventa Ventures Global HQ</div>
            </div>

            <div className="md:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
                Direct Founder Guarantee
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                &ldquo;Your Capital is Handled With The Exact Same Intensity As My Own.&rdquo;
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                When you partner with Arventa Ventures for {data.title.toLowerCase()}, you do not get passed off to an inexperienced junior intern or buried under a slow ticket system.
              </p>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                I personally oversee our strategic architecture and review every campaign deployment. If we don&apos;t see a mathematically viable pathway to scaling your business with positive net ROI, we will politely decline the engagement. That is my personal commitment to you.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-11 px-6 text-xs" asChild>
                  <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20discuss%20a%20partnership." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-3.5 h-3.5 mr-2" /> Message Founder Directly (+91 7872490719)
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 h-11 px-6 text-xs" asChild>
                  <Link to="/about">Learn More About Our Team</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* SECTION 25: HIGH-CONVERTING CLOSING CONVERSION BANNER */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-center border-t border-slate-900">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Ready for Measurable Dominance?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready To Build Your Unfair Competitive Advantage?
          </h2>

          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Stop guessing with your digital infrastructure and marketing budget. Partner with Arventa Ventures to scale predictable, profitable revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25 transition-transform active:scale-95" asChild>
              <Link to="/contact">
                Schedule Strategy Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 text-base rounded-full border-slate-700 hover:bg-slate-900 text-white font-semibold" asChild>
              <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20ready%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> 100% Free Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Zero Obligation
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Direct Founder Review
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
