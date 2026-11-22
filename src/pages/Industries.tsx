import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  Home,
  Shirt,
  Scissors,
  Rocket,
  Landmark,
  Dumbbell,
  Apple,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Target,
  MessageSquare,
  Phone,
  Clock,
  HelpCircle,
  ChevronDown,
  Layers,
  Zap,
  BarChart3,
  Award,
} from "lucide-react";

import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";
import { Card, CardContent } from "@/src/components/ui/Card";

interface IndustryItem {
  id: string;
  name: string;
  category: "ecommerce" | "high-ticket" | "local" | "tech";
  icon: any;
  headline: string;
  desc: string;
  image: string;
  metrics: string;
  painPoints: string[];
  strategies: string[];
  tags: string[];
  caseStudyLink?: string;
}

const industriesData: IndustryItem[] = [
  {
    id: "ecommerce-d2c",
    name: "E-Commerce & D2C Brands",
    category: "ecommerce",
    icon: ShoppingBag,
    headline: "Scale DTC Revenue with High-ROAS Funnels & Creative Testing",
    desc: "We eliminate ad fatigue and high customer acquisition costs through Advantage+ shopping setups, dynamic creative testing, and Klaviyo/WhatsApp retention loops.",
    image: "/images/casestudy-apparel.webp",
    metrics: "4.8x Avg ROAS • +240% LTV",
    painPoints: [
      "Rising CAC on Meta & TikTok",
      "Cart abandonment exceeding 70%",
      "Low repeat purchase frequency",
    ],
    strategies: [
      "Meta Advantage+ Shopping Campaigns (ASC)",
      "Automated WhatsApp & Klaviyo recovery flows",
      "Dynamic creative sandbox testing (DCT)",
    ],
    tags: ["Advantage+ Ads", "Shopify CRO", "WhatsApp Retention", "ROAS Scaling"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Developers",
    category: "high-ticket",
    icon: Home,
    headline: "Generate High-Net-Worth Property Investors & Homebuyers",
    desc: "Convert passive browsers into qualified property site-visits using hyper-targeted Facebook lead forms, 4K virtual video walkthroughs, and automated CRM routing.",
    image: "/images/portfolio-skylinerealty.webp",
    metrics: "380+ HNI Inquiries / Project",
    painPoints: [
      "Low lead quality and fake contact details",
      "High Cost-Per-Lead (CPL) on generic ads",
      "Slow response times causing lost sales",
    ],
    strategies: [
      "Custom 2-step budget-qualified lead forms",
      "Cinematic drone & interior walkthrough ads",
      "Instant WhatsApp CRM lead dispatch in <5 mins",
    ],
    tags: ["RERA Compliant", "HNI Investor Ads", "Drone Video", "Instant WhatsApp"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare, Doctors & Clinics",
    category: "high-ticket",
    icon: HeartPulse,
    headline: "Ethical Patient Acquisition & Local Search Domination",
    desc: "Build unshakeable patient trust and fill doctor appointment schedules while adhering strictly to Google YMYL and healthcare privacy guidelines.",
    image: "/images/casestudy-clinic.webp",
    metrics: "+180% Patient Inquiries • #1 Local Maps",
    painPoints: [
      "Strict Google Ads healthcare restrictions",
      "High patient no-show rates",
      "Weak Google Maps visibility in local radius",
    ],
    strategies: [
      "Google Local 3-Pack optimization & verified reviews",
      "Doctor-led video explainers overcoming health anxiety",
      "Automated appointment booking & SMS reminders",
    ],
    tags: ["YMYL Compliant", "Google Maps 3-Pack", "Doctor Video", "Appointment Booking"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "restaurants-hospitality",
    name: "Restaurants, Cafes & Cloud Kitchens",
    category: "local",
    icon: UtensilsCrossed,
    headline: "Fill Tables, Drive Foot Traffic & Scale Online Delivery",
    desc: "Trigger instant sensory appetite with high-definition food Reels, dominate local Google searches, and build an owned VIP diner database.",
    image: "/images/portfolio-urbanbrew.webp",
    metrics: "+320% Table Bookings • 25k+ Monthly Reach",
    painPoints: [
      "High 30% commission cuts on delivery apps",
      "Slow weekday foot traffic",
      "Low recurring loyalty from weekend visitors",
    ],
    strategies: [
      "Sensory food close-ups on Instagram Reels & TikTok",
      "Google Business Profile menu & local review automation",
      "Table-side QR code loyalty capturing WhatsApp contacts",
    ],
    tags: ["Local Food Reels", "Google Maps", "Direct Ordering", "WhatsApp Loyalty"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "fitness-wellness",
    name: "Gyms, Fitness Studios & Wellness",
    category: "local",
    icon: Dumbbell,
    headline: "Pack Fitness Classes & Drive Recurring Monthly Memberships",
    desc: "Attract dedicated fitness enthusiasts with transformation video testimonials, limited-time trial passes, and hyperlocal Meta ad campaigns.",
    image: "/images/portfolio-apexfitness.webp",
    metrics: "+340% Member Signups • ₹85 Avg CPL",
    painPoints: [
      "Seasonal gym member drop-offs",
      "High cost per membership lead",
      "Difficulty proving trainer expertise online",
    ],
    strategies: [
      "Hyperlocal 5km radius Meta lead ad funnels",
      "Before/After client transformation case studies",
      "Free 3-Day VIP pass lead capture with SMS follow-ups",
    ],
    tags: ["Local Gym Funnels", "Transformation Video", "Lead Generation", "Trial Passes"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "fashion-apparel",
    name: "Fashion, Apparel & Luxury Boutiques",
    category: "ecommerce",
    icon: Shirt,
    headline: "Ignite Visual Desire with Lookbooks & Shoppable Social Feeds",
    desc: "Elevate your apparel brand with aesthetic UGC try-on videos, influencer collaborations, and seamless Instagram/TikTok shoppable feeds.",
    image: "/images/portfolio-novafashion.webp",
    metrics: "$100k/mo DTC ARR • 5.4x Video ROAS",
    painPoints: [
      "High product return rates due to sizing doubt",
      "Intense competition from fast-fashion giants",
      "Low checkout conversion on mobile traffic",
    ],
    strategies: [
      "Micro-influencer try-on hauls & styling tips",
      "Interactive size-guide CRO and bundle discounts",
      "VIP pre-launch drops with countdown urgency",
    ],
    tags: ["UGC Try-On Hauls", "Lookbook Ads", "Aesthetic Branding", "TikTok Shop"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "beauty-salons",
    name: "Beauty Salons, Spas & Aesthetics",
    category: "local",
    icon: Scissors,
    headline: "Book Out Service Appointments & Retain High-Value Clients",
    desc: "Turn salon empty chairs into profitable booking schedules with before-and-after beauty showcases, seasonal packages, and automated rebooking triggers.",
    image: "/images/portfolio-bloombeauty.webp",
    metrics: "280+ Monthly Bookings • 42% Rebook Rate",
    painPoints: [
      "Unpredictable week-to-week client bookings",
      "High discount-seekers who never return",
      "Competitors undercutting service pricing",
    ],
    strategies: [
      "Instagram Reels showcasing premium treatments",
      "Geo-targeted bridal and seasonal package promotions",
      "Automated 4-week rebooking SMS/WhatsApp reminders",
    ],
    tags: ["Bridal Marketing", "Salon Booking", "Local Meta Ads", "Client Retention"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "saas-tech",
    name: "SaaS, Software & B2B Tech Startups",
    category: "tech",
    icon: Rocket,
    headline: "Product-Led Pipeline Acceleration & Qualified Demo Bookings",
    desc: "Scale Monthly Recurring Revenue (MRR) through targeted LinkedIn thought leadership, Google Search high-intent capture, and free-trial activation funnels.",
    image: "/images/portfolio-zenithtech.webp",
    metrics: "4.2x B2B Pipeline Growth • -40% CAC",
    painPoints: [
      "Long, complex B2B sales cycles",
      "High ad spend on unqualified software clicks",
      "Low free-trial to paid customer conversion",
    ],
    strategies: [
      "LinkedIn Thought Leader Ads targeting VP decision makers",
      "High-intent bottom-of-funnel Google Search campaigns",
      "In-app onboarding analytics & Product Qualified Leads (PQLs)",
    ],
    tags: ["B2B SaaS", "LinkedIn Ads", "PQL Onboarding", "Google PPC"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "organic-food-grocery",
    name: "Organic Foods, Grocery & D2C Agri",
    category: "ecommerce",
    icon: Apple,
    headline: "Cultivate Brand Trust & Scale Fresh Delivery Subscriptions",
    desc: "Connect directly with health-conscious families through transparent farm-to-table storytelling, subscription discounts, and automated replenishment reminders.",
    image: "/images/portfolio-freshharvest.webp",
    metrics: "+210% Recurring Orders • 3.8x ROAS",
    painPoints: [
      "Perishable inventory requiring fast turnover",
      "High customer skepticism regarding organic purity",
      "Logistical delivery delays impacting repeat rate",
    ],
    strategies: [
      "Behind-the-scenes purity & sourcing video documentaries",
      "Weekly recurring subscription boxes with 15% discount",
      "Targeted local delivery radius ads with same-day delivery proof",
    ],
    tags: ["D2C Grocery", "Subscription Model", "Local Farm Ads", "Health Marketing"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "education-edtech",
    name: "Education, Universities & EdTech",
    category: "high-ticket",
    icon: GraduationCap,
    headline: "Fill Admissions Batches & Expand Student Enrollments",
    desc: "Attract ambitious students and career-switchers with alumni success stories, webinars, interactive skill assessments, and multi-channel retargeting.",
    image: "/images/intro-strategy.webp",
    metrics: "+165% Verified Enrollments • ₹120 CPL",
    painPoints: [
      "High student drop-off between inquiry and enrollment",
      "Skeptical parents seeking accredited job placement proof",
      "Seasonal admission deadlines requiring rapid lead bursts",
    ],
    strategies: [
      "Alumni career transformation video case studies",
      "Interactive aptitude quizzes & free live masterclass funnels",
      "Nurturing email and WhatsApp counseling drip sequences",
    ],
    tags: ["EdTech Growth", "Student Admission", "Webinar Funnel", "Alumni Proof"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "corporate-b2b",
    name: "Corporate Brands & B2B Enterprises",
    category: "high-ticket",
    icon: Landmark,
    headline: "Establish Executive Authority & Capture Enterprise Contracts",
    desc: "Position your corporate enterprise as the undisputed market leader with technical SEO architecture, digital PR, and ABM (Account-Based Marketing).",
    image: "/images/seo-strategy.webp",
    metrics: "7-Figure Deals Closed • Page 1 Global SEO",
    painPoints: [
      "Outdated corporate websites losing credibility",
      "Zero inbound organic inquiries from enterprise buyers",
      "Complex stakeholder committees delaying decisions",
    ],
    strategies: [
      "Comprehensive Technical SEO & SGE AI citation optimization",
      "Account-Based Marketing (ABM) IP-targeted digital display",
      "Authoritative industry benchmark whitepapers & case studies",
    ],
    tags: ["Enterprise SEO", "Account-Based Marketing", "Corporate PR", "B2B Authority"],
    caseStudyLink: "/portfolio",
  },
  {
    id: "media-video-studios",
    name: "Media, Creators & Production Studios",
    category: "tech",
    icon: Building2,
    headline: "Monetize Attention, Secure Sponsors & Scale Virality",
    desc: "Amplify viewership across YouTube, Reels, and TikTok while monetizing creator audiences through brand sponsorships and digital product ecosystems.",
    image: "/images/video-marketing.webp",
    metrics: "50M+ Organic Impressions • 3.5x Sponsorship Revenue",
    painPoints: [
      "Volatile social media platform algorithm changes",
      "Monetization reliance on low-paying ad revenue",
      "Burnout from continuous manual content creation",
    ],
    strategies: [
      "Pillar-to-micro content atomization frameworks",
      "Sponsorship media kit presentation & outbound pitch decks",
      "Owned audience monetization via VIP communities and courses",
    ],
    tags: ["Creator Economy", "Video Monetization", "Brand Deals", "Audience Growth"],
    caseStudyLink: "/portfolio",
  },
];

const categoryFilters = [
  { id: "all", label: "All Industries (12)" },
  { id: "ecommerce", label: "E-Commerce & D2C" },
  { id: "high-ticket", label: "High-Ticket & Services" },
  { id: "local", label: "Local & Lifestyle" },
  { id: "tech", label: "Tech, SaaS & Media" },
];

const industryFaqs = [
  {
    q: "Why should we hire an agency with specific industry experience instead of a general agency?",
    a: "Generic marketing agencies use cookie-cutter templates that fail because every industry operates under vastly different economics. For example, Real Estate requires high-intent lead qualification to avoid wasting broker time; E-commerce requires rapid creative testing and unit economics optimization; and Healthcare mandates strict medical compliance and doctor trust-building. At Arventa Ventures, our playbooks are engineered specifically around your sector's unit economics.",
  },
  {
    q: "Do you understand regulatory compliance for Healthcare and Real Estate?",
    a: "Yes, completely. In Healthcare, we operate strictly within medical ethics, Google YMYL requirements, and patient privacy standards. In Real Estate, we adhere to RERA regulations and Meta's Housing Special Ad Categories, deploying smart copy and visual filters rather than illegal demographic exclusions.",
  },
  {
    q: "How fast can we expect measurable ROI in our industry?",
    a: "For Paid Media (Meta Ads, Google PMax), most clients see qualified leads or initial sales within the first 7 to 14 days of campaign deployment. For SEO and Organic Search, compounding rankings and traffic typically ramp up between 60 to 90 days. We provide real-time dashboard telemetry so you monitor performance weekly.",
  },
  {
    q: "Can you manage multi-location marketing for franchise clinics, salons, or restaurants?",
    a: "Absolutely. We specialize in Multi-Location Local SEO and hyper-targeted geo-radius paid ads. We can manage and optimize 5, 20, or 50+ distinct Google Business Profiles, ensuring each location dominates its local map pack without cannibalizing neighboring branches.",
  },
  {
    q: "What if our specific niche is not listed on this page?",
    a: "Our core performance framework—deep customer psychology, relentless creative testing, conversion-focused landing pages, and automated retention loops—applies across all B2B and B2C categories. Contact our team for a custom niche strategy consultation.",
  },
];

export default function Industries() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredIndustries = useMemo(() => {
    return industriesData.filter((ind) => {
      const matchesCategory =
        selectedCategory === "all" || ind.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        ind.name.toLowerCase().includes(q) ||
        ind.headline.toLowerCase().includes(q) ||
        ind.desc.toLowerCase().includes(q) ||
        ind.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve | Arventa Ventures",
    "description":
      "Specialized, high-ROI digital marketing, Meta Ads, and SEO strategies engineered for E-Commerce, Real Estate, Healthcare, Restaurants, Fitness, SaaS, and Corporate Brands.",
    "url": "https://arventaventures.online/industries",
    "publisher": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arventaventures.online/logo.png",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industryFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground transition-colors duration-200">
      <SEO
        title="Industries We Transform | Specialized Digital Marketing Strategies"
        description="Explore how Arventa Ventures delivers sector-specific growth: Meta Ads, Google Ads, and Local SEO tailored for Real Estate, Healthcare, E-Commerce, SaaS, Restaurants & Fitness."
        keywords="E-commerce Marketing Agency, Real Estate Digital Marketing, Healthcare Clinic SEO, Restaurant Social Media Marketing, Gym Lead Generation, SaaS Growth Marketing, Arventa Ventures"
        canonicalUrl="/industries"
        structuredData={[industriesSchema, faqSchema]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-card/60 via-background to-background border-b border-border/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Specialized Domain Growth Playbooks</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
              Industries We <span className="text-orange-500">Transform</span> & Dominate
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              Generic marketing burns budgets. We engineer battle-tested acquisition funnels, compliance-ready campaigns, and hyper-targeted creative systems tailored to your specific industry economics.
            </p>

            {/* Metric KPI Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-border/60">
              {[
                { num: "12+", label: "Specialized Verticals", icon: Layers },
                { num: "5.2x", label: "Average Sector ROAS", icon: Target },
                { num: "120+", label: "Niche Brands Scaled", icon: Award },
                { num: "100%", label: "Compliance & Ethical Ads", icon: ShieldCheck },
              ].map((kpi, idx) => {
                const IconComp = kpi.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-card border border-border/80 text-center shadow-sm"
                  >
                    <IconComp className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-black text-foreground">
                      {kpi.num}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium mt-1">
                      {kpi.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="sticky top-20 z-20 bg-background/95 backdrop-blur-md border-b border-border/60 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoryFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 scale-105"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search your industry, niche, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-card border border-border text-foreground placeholder-muted-foreground text-xs focus:outline-none focus:border-orange-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. MAIN DETAILED INDUSTRY CARDS GRID */}
      <Section className="py-16 max-w-7xl mx-auto">
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-3xl p-8 max-w-xl mx-auto">
            <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No Matching Industry Found</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Don&apos;t worry! We design tailored growth funnels for emerging and hyper-niche markets. Contact us for a custom consultation.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              Show All 12 Industries
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col h-full rounded-3xl overflow-hidden bg-card border border-border hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/10"
                >
                  {/* Top Image Banner */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Category Icon Badge */}
                    <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-center text-orange-400 shadow-lg">
                      <IconComp className="h-6 w-6" />
                    </div>

                    {/* Verified Metric Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-3 py-1 rounded-full bg-orange-500 text-white font-extrabold text-[11px] shadow-md">
                        {ind.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <CardContent className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-orange-500 transition-colors">
                        {ind.name}
                      </h3>

                      <p className="text-xs md:text-sm font-semibold text-orange-400 mb-4 leading-snug">
                        {ind.headline}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {ind.desc}
                      </p>

                      {/* Pain Points Solved */}
                      <div className="mb-6 space-y-2 pt-4 border-t border-border/60">
                        <span className="text-[11px] font-extrabold text-foreground uppercase tracking-wider block mb-2">
                          Challenges We Solve:
                        </span>
                        {ind.painPoints.map((pain, pIdx) => (
                          <div key={pIdx} className="flex items-start text-xs text-muted-foreground">
                            <span className="text-red-400 font-bold mr-2">✕</span>
                            <span>{pain}</span>
                          </div>
                        ))}
                      </div>

                      {/* Our Tailored Strategy */}
                      <div className="mb-6 space-y-2">
                        <span className="text-[11px] font-extrabold text-orange-500 uppercase tracking-wider block mb-2">
                          Arventa Growth Playbook:
                        </span>
                        {ind.strategies.map((strat, sIdx) => (
                          <div key={sIdx} className="flex items-start text-xs text-foreground/90 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mr-2 mt-0.5" />
                            <span>{strat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {ind.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-background border border-border text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                      <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-xs">
                        <Link to="/contact">
                          Scale Your {ind.name.split(" ")[0]} Brand <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              );
            })}
          </div>
        )}
      </Section>

      {/* 4. WHY INDUSTRY-SPECIFIC MARKETING WINS (Comparison Matrix) */}
      <section className="py-20 bg-card/60 border-y border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-2">
              The Arventa Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Generic Marketing vs. Sector-Engineered Systems
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Why 90% of generic agencies fail to deliver positive ROAS, and how our domain-specific architecture creates an unfair competitive moat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Generic Way */}
            <div className="p-8 rounded-3xl bg-background border border-red-500/20 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-foreground">Generic Marketing Agencies</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-red-400 font-bold mr-3 mt-0.5">✕</span>
                  <span>Recycles identical generic ad templates for a dental clinic and an apparel store.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 font-bold mr-3 mt-0.5">✕</span>
                  <span>Ignores compliance rules (resulting in banned ad accounts on health or housing ads).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 font-bold mr-3 mt-0.5">✕</span>
                  <span>Focuses on vanity impressions and clicks rather than real revenue and booked appointments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 font-bold mr-3 mt-0.5">✕</span>
                  <span>Zero integration with industry CRM, WhatsApp, or POS systems.</span>
                </li>
              </ul>
            </div>

            {/* The Arventa Way */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-card via-card to-orange-950/20 border border-orange-500/40 shadow-xl shadow-orange-500/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-foreground">The Arventa Domain Engine</h3>
              </div>
              <ul className="space-y-4 text-sm text-foreground/90">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mr-3 mt-0.5" />
                  <span>Sector-tailored creative hook psychology built on real customer purchase hesitation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mr-3 mt-0.5" />
                  <span>100% Compliance verification with HIPAA, RERA, Google YMYL & Special Ad Categories.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mr-3 mt-0.5" />
                  <span>Ruthless focus on Net Customer LTV, Blended ROAS, and verified booked revenue.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mr-3 mt-0.5" />
                  <span>Automated WhatsApp CRM routing delivering new leads to your sales reps in under 3 minutes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <Section className="py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Common Questions About Our Industry Expertise
          </h2>
        </div>

        <div className="space-y-4">
          {industryFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-card border border-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground text-base md:text-lg focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 6. HIGH-CONVERTING CLOSING CTA BANNER */}
      <section className="relative py-24 overflow-hidden border-t border-border bg-gradient-to-br from-slate-950 via-card to-slate-950">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/25 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Don&apos;t See Your Exact Industry Listed?
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our core growth principles apply universally across high-growth B2B and consumer sectors. Speak directly with our chief strategists to craft a tailored roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base font-extrabold rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/25 w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">Book Free 30-Min Strategy Audit</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-bold rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://api.whatsapp.com/send?phone=+917872490719&text=Hello%20Arventa%20Ventures,%20I%20want%20to%20discuss%20marketing%20strategy%20for%20my%20industry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
