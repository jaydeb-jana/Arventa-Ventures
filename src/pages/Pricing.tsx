import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Video, 
  Image as ImageIcon, 
  Infinity as InfinityIcon, 
  Share2, 
  Crown, 
  Sparkles, 
  Camera, 
  HelpCircle,
  MessageCircle,
  Flame,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronDown,
  Zap,
  TrendingUp,
  Target,
  Layers,
  Phone,
  Clock,
  Award,
  FileText,
  SlidersHorizontal,
  X
} from "lucide-react";

import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { pricing } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";
import { Card, CardContent } from "@/src/components/ui/Card";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Images paired specifically with each plan
  const planImages: Record<string, string> = {
    "starter-boost": "/images/paid-ads.webp",
    "growth-pro": "/images/solution-funnel.webp",
    "business-dominance": "/images/creative-studio-production.webp",
  };

  const pricingFaqs = [
    {
      q: "Is ad budget included in the package price?",
      a: "No. The package fees cover complete agency execution: high-converting video editing, graphic poster design, ad copywriting, audience targeting, pixel/CAPI tracking, and daily campaign management. Your actual ad spend is paid directly to Meta (Facebook/Instagram) or Google via your own business manager credit/debit card, ensuring 100% financial transparency.",
    },
    {
      q: "How does the video production process work?",
      a: "For all standard packages, you can either share raw video footage recorded on your smartphone/camera (which our team edits into viral high-retention Reels/Shorts), or our AI creative lab synthesizes high-converting video ads using custom scripts, licensed visual b-roll, and natural AI voiceovers. If you require our physical camera crew or verified influencers to visit your premises, dedicated shoot add-ons are available.",
    },
    {
      q: "Are there any lock-in contracts or long-term commitments?",
      a: "Zero long-term lock-ins. All our packages operate on a flexible monthly retainer. You can pause, scale up, or cancel at any time with no penalties. We retain clients by delivering measurable positive ROAS, not through restrictive contracts.",
    },
    {
      q: "How quickly will our campaigns be launched?",
      a: "Once onboarding is completed and creative assets are approved (typically within 48 to 72 hours), your campaigns go live immediately. You will be added to a dedicated WhatsApp and Slack group with your assigned strategist for real-time daily coordination.",
    },
    {
      q: "Can I request custom deliverables not listed in the standard plans?",
      a: "Yes! If your brand requires specialized deliverables—such as 20+ monthly videos, influencer seeding, multi-language ad localization, or custom landing page development—reach out to us via WhatsApp for a personalized enterprise quotation.",
    },
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Arventa Ventures Digital Marketing Packages",
    "description": "Transparent digital marketing retainers: Starter Boost (₹7,999/mo), Growth Pro (₹12,999/mo), and Business Dominance (₹14,999/mo) with full-funnel Meta ads, videos & posters.",
    "url": "https://arventaventures.online/pricing"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFaqs.map((faq) => ({
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
        title="Digital Marketing Packages & Transparent Pricing | Arventa Ventures"
        description="Explore affordable, high-ROI digital marketing packages by Arventa Ventures: Starter Boost (₹7,999), Growth Pro (₹12,999), Business Dominance (₹14,999) with viral videos, posters & unlimited Meta ads."
        keywords="digital marketing packages, meta ads pricing, video marketing packages, affordable marketing agency, Arventa Ventures pricing, digital marketing agency kolkata"
        canonicalUrl="/pricing"
        structuredData={[pricingSchema, faqSchema]}
      />

      {/* 1. HERO HEADER SECTION */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden bg-gradient-to-b from-card/60 via-background to-background border-b border-border/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Transparent, High-ROI Growth Plans
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground mb-6 uppercase leading-tight">
            Predictable Pricing. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
              Exponential Growth.
            </span>
          </h1>

          <p className="text-base sm:text-lg font-semibold tracking-wider text-muted-foreground uppercase mb-4">
            More Reach <span className="text-orange-500 mx-2">|</span> More Engagement <span className="text-orange-500 mx-2">|</span> More Revenue
          </p>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Scale your brand with data-backed content creation, high-retention video reels, and unlimited Meta advertising management. Zero hidden fees.
          </p>

          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-border/60 text-xs">
            {[
              { label: "No Hidden Costs", icon: ShieldCheck },
              { label: "Cancel or Pause Anytime", icon: Clock },
              { label: "Dedicated Strategist", icon: Award },
              { label: "Weekly Performance Reports", icon: TrendingUp },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-card border border-border text-foreground font-semibold">
                <t.icon className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive Billing Cycle Toggle */}
          <div className="mt-10 inline-flex items-center p-1.5 rounded-full bg-card border border-border shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-orange-500 text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === "quarterly"
                  ? "bg-orange-500 text-white shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Quarterly Growth</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                Save 15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. VISUAL PRICING CARDS SECTION */}
      <Section className="py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.map((plan, index) => {
            const isDominance = plan.id === "business-dominance";
            const isGrowth = plan.popular;
            const cardImg = planImages[plan.id] || "/images/paid-ads.webp";

            // Calculate quarterly discounted price if quarterly is selected
            const numericPrice = parseInt(plan.price.replace(/[^\d]/g, ""), 10);
            const displayPrice = billingCycle === "quarterly" 
              ? `₹${Math.round(numericPrice * 0.85).toLocaleString("en-IN")}`
              : plan.price;

            return (
              <div
                key={plan.id || index}
                className={`relative rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-300 ${
                  isGrowth
                    ? "bg-gradient-to-b from-card via-card to-background border-2 border-orange-500 shadow-2xl shadow-orange-500/20 lg:-translate-y-4 z-20"
                    : isDominance
                    ? "bg-gradient-to-b from-card via-card to-background border border-amber-500/60 shadow-xl shadow-amber-500/10"
                    : "bg-card border border-border hover:border-slate-700 shadow-lg"
                }`}
              >
                {/* Visual Header Image Banner */}
                <div className="relative h-44 overflow-hidden shrink-0">
                  <img
                    src={cardImg}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 bg-slate-950/80 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-md">
                      {plan.badge}
                    </span>

                    {isGrowth && (
                      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        <Flame className="w-3.5 h-3.5 fill-current" />
                        Most Popular
                      </span>
                    )}

                    {isDominance && (
                      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        <Crown className="w-3.5 h-3.5 fill-current" />
                        Dominance Tier
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-6 min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-border flex items-baseline justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-muted-foreground line-through text-sm font-semibold">
                            {plan.originalPrice}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            {billingCycle === "quarterly" ? "Special 15% Off" : "Limited Launch Offer"}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                            {displayPrice}
                          </span>
                          <span className="text-muted-foreground font-medium text-xs">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Highlight Matrix */}
                    <div className="space-y-3 mb-8 bg-background/80 rounded-2xl p-4 border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
                          <Video className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-foreground font-bold text-sm">{plan.videosCount}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">
                            {plan.videosNote}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-foreground font-bold text-sm">{plan.postersCount}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">High-Converting Ad Posters</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
                          <InfinityIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-foreground font-bold text-sm">{plan.adsManagement}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">Campaign Setup, A/B Testing & Scaling</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-foreground font-bold text-sm">{plan.platforms}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">Distribution Platforms</div>
                        </div>
                      </div>
                    </div>

                    {/* Full Feature Checklist */}
                    <div className="mb-8">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                        What&apos;s Included In This Tier:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm">
                            <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2.5 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="space-y-3 mt-auto pt-4 border-t border-border">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-extrabold rounded-2xl ${
                        isGrowth
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl shadow-orange-500/25"
                          : isDominance
                          ? "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-black shadow-xl"
                          : "bg-card hover:bg-orange-500/10 hover:text-orange-500 border border-border text-foreground"
                      }`}
                    >
                      <Link to="/contact">{plan.cta}</Link>
                    </Button>

                    <a
                      href={`https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-border hover:border-emerald-500/50 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-400 text-xs font-bold transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      Discuss Plan on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 3. CORE AGENCY PILLARS VISUAL SHOWCASE */}
      <section className="py-20 bg-card/60 border-y border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
              The Engine Behind Every Tier
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Why Brands Scale 5x Faster With Arventa
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every package is powered by our in-house creative production, algorithmic media buying, and conversion-first copywriting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Viral Short-Form Video Production",
                subtitle: "High-Retention Reels, TikToks & Shorts",
                desc: "We analyze trending auditory hooks, design split-second visual pattern interrupts, and edit dynamic subtitles that keep viewers hooked to the final second.",
                image: "/images/video-marketing.webp",
                tag: "High Watch Time",
              },
              {
                title: "2. Graphic Design & Direct Response Posters",
                subtitle: "Scroll-Stopping Visuals That Convert",
                desc: "No boring templates. Our designers craft custom, brand-aligned posters engineered with psychological color contrast, clear value propositions, and compelling CTAs.",
                image: "/images/content-marketing.webp",
                tag: "High Click-Through",
              },
              {
                title: "3. Autonomous Meta & Google Ads Scaling",
                subtitle: "Advantage+ Testing & ROAS Optimization",
                desc: "We build 3-tier campaign architectures: creative sandboxes, Advantage+ scaling, and first-party retargeting loops to keep customer acquisition costs low.",
                image: "/images/intro-strategy.webp",
                tag: "5.2x Average ROAS",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-card border border-border hover:border-orange-500/40 transition-all duration-300 flex flex-col group shadow-lg"
              >
                <div className="relative aspect-video sm:h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white font-extrabold text-[11px] shadow">
                    {pillar.tag}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-400 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION GUIDELINES WITH REAL STUDIO IMAGES */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/25">
              Production Standards & Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2 tracking-tight">
              Content Production & Delivery Guidelines
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Clear parameters ensure smooth workflows and guaranteed turnaround times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rule 1: Video Production Mode */}
            <div className="rounded-3xl overflow-hidden bg-card border border-border flex flex-col shadow-lg">
              <div className="relative aspect-video sm:h-40 overflow-hidden">
                <img
                  src="/images/creative-motion-graphics.webp"
                  alt="AI Video & Remote Editing Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-extrabold text-white">1. Included Production</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  All package videos are edited from <strong>pre-recorded raw footage provided by the client</strong> or created using <strong>advanced AI video synthesis</strong> with custom high-converting scripts, motion graphics, and voiceovers.
                </p>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Included in all retainers
                </div>
              </div>
            </div>

            {/* Rule 2: Physical Shoot & Influencer Extra Cost */}
            <div className="rounded-3xl overflow-hidden bg-card border border-amber-500/40 flex flex-col shadow-xl shadow-amber-500/5">
              <div className="relative aspect-video sm:h-40 overflow-hidden">
                <img
                  src="/images/creative-strategy-studio.webp"
                  alt="On-Site Shoot Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-extrabold text-white">2. On-Site Physical Shoots</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  If your business requires a <strong>dedicated camera crew for on-location physical shooting</strong> or <strong>verified top-tier influencers/models</strong>, custom on-site shoot packages are available at an <strong>additional transparent cost</strong>.
                </p>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-amber-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Optional Custom Add-On
                </div>
              </div>
            </div>

            {/* Rule 3: Ad Spend Budget */}
            <div className="rounded-3xl overflow-hidden bg-card border border-border flex flex-col shadow-lg">
              <div className="relative aspect-video sm:h-40 overflow-hidden">
                <img
                  src="/images/paid-ads.webp"
                  alt="Transparent Media Ad Spend"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shadow">
                    <InfinityIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-extrabold text-white">3. Direct Ad Spend</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Paid advertising spend for Meta (Facebook & Instagram) or Google is funded directly by the client. Our agency fees cover <strong>unlimited campaign architecture, audience targeting, creative testing, and full management</strong>.
                </p>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-blue-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Direct Account Ownership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER'S PERSONAL COMMITMENT (FEATURING JAYDEB JANA) */}
      <section className="py-20 bg-card/60 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-orange-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Jaydeb Jana Portrait */}
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-xl shrink-0 group">
              <img
                src="/images/jaydeb-jana-executive.webp"
                alt="Jaydeb Jana - Founder & CEO"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 text-center">
                <span className="text-[10px] font-bold text-white bg-orange-500/90 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Founder & CEO
                </span>
              </div>
            </div>

            {/* Pledge Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
                A Personal Promise From Our Founder
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
                &ldquo;We Treat Your Marketing Capital Like Our Own Money.&rdquo;
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 font-normal">
                At Arventa Ventures, we reject agency fluff, vanity metrics, and hidden markups. When you partner with us, you are not handed over to an inexperienced junior intern. You get ruthless, data-backed execution, transparent reporting, and continuous creative testing engineered to multiply your revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div>
                  <h4 className="font-extrabold text-foreground text-base">Jaydeb Jana</h4>
                  <p className="text-xs text-muted-foreground">Founder & Chief Growth Strategist, Arventa Ventures</p>
                </div>
                <div className="sm:ml-auto">
                  <a
                    href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20reviewing%20your%20pricing%20packages%20and%20want%20to%20consult%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Talk to Jaydeb Directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DETAILED PACKAGE COMPARISON TABLE */}
      <Section className="py-20 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
            Side-By-Side Feature Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Compare All Deliverables
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Explore the exact scope of each tier to pick the optimal roadmap for your business size.
          </p>
        </div>

        <div className="block sm:hidden text-xs text-orange-400 font-medium mb-2 text-right">
          ← Swipe horizontally to compare all packages →
        </div>
        <div className="rounded-3xl border border-border overflow-hidden bg-card shadow-xl overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-900/90 border-b border-border text-foreground">
                <th className="p-4 md:p-6 font-extrabold text-sm md:text-base">Features & Scope</th>
                <th className="p-4 md:p-6 font-bold text-center">Starter Boost (₹7,999)</th>
                <th className="p-4 md:p-6 font-bold text-center text-orange-400 bg-orange-500/5">
                  Growth Pro (₹12,999)
                </th>
                <th className="p-4 md:p-6 font-bold text-center text-amber-400">
                  Business Dominance (₹14,999)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-muted-foreground">
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Monthly Short-Form Videos</td>
                <td className="p-4 md:p-6 text-center text-foreground font-bold">4 Videos</td>
                <td className="p-4 md:p-6 text-center text-orange-400 font-bold bg-orange-500/5">8 Videos</td>
                <td className="p-4 md:p-6 text-center text-amber-400 font-bold">10 Videos</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Custom Ad Posters / Graphics</td>
                <td className="p-4 md:p-6 text-center text-foreground font-bold">8 Posters</td>
                <td className="p-4 md:p-6 text-center text-orange-400 font-bold bg-orange-500/5">15 Posters</td>
                <td className="p-4 md:p-6 text-center text-amber-400 font-bold">20 Posters</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Meta Ads Management</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">Unlimited</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold bg-orange-500/5">Unlimited</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">Unlimited</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Platforms Covered</td>
                <td className="p-4 md:p-6 text-center">FB + IG</td>
                <td className="p-4 md:p-6 text-center bg-orange-500/5">FB + IG + YouTube</td>
                <td className="p-4 md:p-6 text-center font-bold text-foreground">FB + IG + YouTube + GMB</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Retargeting & Lookalikes</td>
                <td className="p-4 md:p-6 text-center text-muted-foreground">Basic</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold bg-orange-500/5">✓ Full-Funnel</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">✓ Advanced Omni-channel</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Google My Business (GMB) SEO</td>
                <td className="p-4 md:p-6 text-center text-muted-foreground/60">—</td>
                <td className="p-4 md:p-6 text-center text-muted-foreground/60 bg-orange-500/5">—</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">✓ Complete 3-Pack SEO</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-foreground">Client WhatsApp & Slack Channel</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">✓ Included</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold bg-orange-500/5">✓ Included</td>
                <td className="p-4 md:p-6 text-center text-emerald-400 font-bold">✓ VIP Priority 24/7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-20 bg-card/60 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Pricing & Engagement FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => {
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
        </div>
      </section>

      {/* 8. DIRECT CONTACT & STRATEGY CALL BANNER */}
      <section className="py-24 text-center bg-gradient-to-br from-slate-950 via-card to-slate-950 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/25 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-7 h-7" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Ready to Accelerate Your Brand&apos;s Revenue?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Lock in your promotional launch rate today or talk directly with our growth specialists to select the right package for your stage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base font-extrabold w-full sm:w-auto shadow-xl shadow-orange-500/25">
              <Link to="/contact">
                Book Free Strategy Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <a
              href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I%20am%20ready%20to%20discuss%20pricing%20packages%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-full px-8 py-4 text-sm font-bold w-full sm:w-auto transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp (+91 7872490719)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
