import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, Target, Lightbulb, Trophy, 
  ArrowRight, Globe, BarChart3, ShieldCheck, 
  Zap, Award, TrendingUp, MapPin, CheckCircle2,
  Play, MessageCircle, ChevronDown, Check,
  Sparkles, Layers, Cpu, Compass, PhoneCall,
  Clock, ShieldAlert, BadgeCheck
} from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";
import { Card, CardContent } from "@/src/components/ui/Card";

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { value: "₹15 Cr+", label: "Client Revenue Generated", sub: "Validated tracked revenue" },
    { value: "500+", label: "Successful Growth Campaigns", sub: "Across Meta, Google & SEO" },
    { value: "45+", label: "Global Markets & Niches", sub: "India, US, UK, UAE & more" },
    { value: "98.4%", label: "Annual Client Retention", sub: "Driven by positive net ROAS" },
  ];

  const values = [
    {
      icon: Target,
      title: "Results Obsessed",
      desc: "We don't care about vanity metrics like impressions or empty likes. We focus strictly on qualified customer acquisition, lowered CPA, and verifiable net revenue.",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation & Production",
      desc: "Data directs our media buying, but bold, cinematic creativity is what stops the scroll. We produce high-velocity UGC, 3D motion graphics, and persuasive storytelling.",
    },
    {
      icon: Users,
      title: "Radical Transparency",
      desc: "We operate as an agile in-house extension of your team. Real-time Looker Studio dashboards, shared Slack/WhatsApp channels, and zero hidden markups.",
    },
    {
      icon: Trophy,
      title: "Relentless Scientific Testing",
      desc: "Good campaigns die quickly without iteration. We systematically test hooks, angles, landing page variants, and algorithmic audiences to keep your ROAS ascending.",
    },
  ];

  const leadership = [
    {
      name: "Jaydeb Jana",
      role: "Founder & Chief Executive Officer",
      image: "/images/jaydeb-jana-executive.webp",
      badge: "Visionary & Tech Architect",
      bio: "Tech entrepreneur, software engineer, and performance marketing strategist. Jaydeb founded Arventa Ventures to bridge the gap between creative visual production and algorithmic media buying, having helped scale over 500+ brands with proprietary funnel architecture.",
      social: "https://www.linkedin.com"
    },
    {
      name: "Ashraful Islam",
      role: "Head of Performance Marketing",
      image: "/images/paid-ads.webp",
      badge: "Meta & Google Ads Specialist",
      bio: "Manages over ₹5 Cr+ in cross-platform media spend. Specializes in Advantage+ shopping campaigns, algorithmic audience segmentation, and Conversion API server-side tracking.",
      social: "https://www.linkedin.com"
    },
    {
      name: "Priya Mukherjee",
      role: "Creative & Content Director",
      image: "/images/content-marketing.webp",
      badge: "Brand Storyteller",
      bio: "Award-winning creative strategist overseeing Arventa's visual studio, brand identity, scriptwriting, and high-retention video production that converts cold traffic into loyal brand advocates.",
      social: "https://www.linkedin.com"
    },
    {
      name: "Suman Roy",
      role: "Lead Technical SEO Architect",
      image: "/images/seo-strategy.webp",
      badge: "Search & Algorithmic Lead",
      bio: "Architects enterprise technical SEO strategies, Core Web Vitals optimization, and high-authority backlink funnels that dominate Tier-1 search keywords and organic traffic pipelines.",
      social: "https://www.linkedin.com"
    }
  ];

  const frameworkSteps = [
    {
      step: "01",
      title: "Deep Funnel & Unit Economics Audit",
      desc: "We analyze your historical ad accounts, conversion rates, customer lifetime value (LTV), and market positioning to identify immediate growth bottlenecks and hidden revenue leaks.",
      tag: "Diagnosis & Discovery"
    },
    {
      step: "02",
      title: "Strategic Omnichannel Architecture",
      desc: "We build a bespoke growth blueprint tailored to your industry: cold acquisition funnels, retargeting matrices, high-intent Google Search, and organic topical authority mapping.",
      tag: "Strategy Blueprint"
    },
    {
      step: "03",
      title: "Creative Production & Technical Setup",
      desc: "Our production studio scripts and renders high-converting video ads, dynamic graphics, and landing pages while our developers configure server-side CAPI and multi-touch attribution.",
      tag: "Execution & Build"
    },
    {
      step: "04",
      title: "Algorithmic Scaling & ROAS Maximization",
      desc: "We launch, aggressively cut underperforming variants, double down on winning hooks, and horizontally scale ad spend while defending profit margins.",
      tag: "Scale & Dominate"
    }
  ];

  const timeline = [
    { 
      year: "2020", 
      title: "The Genesis", 
      desc: "Founded by Jaydeb Jana as a boutique growth consultancy focused on performance advertising for emerging Indian direct-to-consumer (D2C) brands." 
    },
    { 
      year: "2022", 
      title: "Omnichannel & Creative Expansion", 
      desc: "Expanded into full-service digital transformation, adding dedicated in-house video production, Technical SEO, and international media buying capabilities." 
    },
    { 
      year: "2024", 
      title: "Proprietary AI & Data Integration", 
      desc: "Surpassed ₹10 Cr+ in client revenue generation and launched our proprietary algorithmic creative testing framework for rapid scale." 
    },
    { 
      year: "2026", 
      title: "Global Enterprise Dominance", 
      desc: "Recognized as a premier growth partner with 500+ satisfied clients across 45+ vertical markets, expanding strategic presence in London, Singapore, and New York." 
    },
  ];

  const partnerBadges = [
    { name: "Meta Business Partner", type: "Certified Agency", icon: ShieldCheck },
    { name: "Google Premier Partner", type: "Search & PMax Specialist", icon: Award },
    { name: "Shopify Plus Ecosystem", type: "E-Commerce Expert", icon: Zap },
    { name: "HubSpot Certified", type: "Inbound & CRM Lead", icon: CheckCircle2 },
    { name: "Klaviyo Elite Partner", type: "Retention Marketing", icon: Sparkles },
    { name: "SEMrush Certified", type: "Enterprise SEO", icon: TrendingUp },
  ];

  const offices = [
    { 
      city: "West Bengal (Global HQ)", 
      country: "India",
      address: "Purba Gopinathpur, Chapatala More, Contai, West Bengal 721442", 
      badge: "Primary Executive & Production Hub",
      phone: "+91 7872490719",
      image: "/images/about-team-hq.webp",
      gmbLink: "https://share.google/9g673CLWFHS9j6tb9"
    },
    { 
      city: "London", 
      country: "United Kingdom",
      address: "One Canada Square, Canary Wharf, London E14 5AB", 
      badge: "European Client Relations",
      phone: "+44 20 7946 0920",
      image: "/images/portfolio-skylinerealty.webp" 
    },
    { 
      city: "Singapore", 
      country: "Singapore",
      address: "Marina Bay Financial Centre, Tower 1, 018981", 
      badge: "APAC Growth Strategy",
      phone: "+65 6712 3456",
      image: "/images/portfolio-zenithtech.webp" 
    },
    { 
      city: "New York", 
      country: "United States",
      address: "100 Wall Street, Suite 500, New York, NY 10005", 
      badge: "North American Media Buying",
      phone: "+1 (212) 555-0199",
      image: "/images/creative-strategy-studio.webp" 
    },
  ];

  const aboutFaqs = [
    {
      q: "What makes Arventa Ventures fundamentally different from other agencies?",
      a: "Most agencies sell hours, vanity impressions, or generic social media posts. Arventa Ventures operates as a performance growth partner tied directly to your financial outcomes. We integrate in-house video production, server-side data tracking (Meta CAPI / GA4), and algorithmic media buying into one unified system with complete fee transparency."
    },
    {
      q: "Who is the founder and leadership behind Arventa Ventures?",
      a: "Arventa Ventures was founded and is led by Jaydeb Jana (Founder & CEO), a technology builder and growth strategist. Our executive leadership includes dedicated specialists in Performance Marketing (Ashraful Islam), Creative Direction (Priya Mukherjee), and Technical Search Architecture (Suman Roy)."
    },
    {
      q: "What typical revenue scale or business size do you work with?",
      a: "We work with ambition, not just scale. Our client roster spans ambitious emerging startups (monthly ad budgets ₹50,000+) seeking rapid validation up to enterprise brands managing ₹10 Lakh+ to ₹50 Lakh+ monthly media spend across India, North America, Europe, and the Middle East."
    },
    {
      q: "How does the communication and reporting process work?",
      a: "You get a dedicated WhatsApp VIP group and Slack channel with direct access to our media buyers, creative designers, and founder Jaydeb Jana. We provide real-time 24/7 Looker Studio automated dashboards plus weekly strategic review calls with deep-dive analysis."
    },
    {
      q: "How quickly do we see measurable ROI after onboarding?",
      a: "Our onboarding and deep funnel audit takes 3 to 5 business days. Initial campaign testing and creative launches commence within week 1. Typically, clients observe qualified lead flow and early algorithmic stabilization within the first 14 days, with aggressive scaling unlocked between days 30 to 60."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Arventa Ventures",
    "description": "Learn about Arventa Ventures, an elite performance digital marketing agency founded by Jaydeb Jana, committed to engineering scalable revenue growth for brands globally.",
    "url": "https://arventaventures.online/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "founder": {
        "@type": "Person",
        "name": "Jaydeb Jana",
        "jobTitle": "Founder & Chief Executive Officer",
        "image": "https://arventaventures.online/images/jaydeb-jana-executive.webp"
      },
      "foundingDate": "2020",
      "hasMap": "https://share.google/9g673CLWFHS9j6tb9",
      "sameAs": [
        "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
        "https://www.instagram.com/arventaventures/",
        "https://x.com/arventaventures",
        "https://share.google/9g673CLWFHS9j6tb9"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Purba Gopinathpur, Chapatala More",
        "addressLocality": "Contai",
        "addressRegion": "West Bengal",
        "postalCode": "721442",
        "addressCountry": "IN"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
      <SEO
        title="About Us | Elite Performance Digital Marketing Agency | Arventa Ventures"
        description="Discover Arventa Ventures — founded by Jaydeb Jana. We engineer data-driven digital dominance, high-converting Meta Ads, SEO blueprints, and scalable revenue engines."
        keywords="About Arventa Ventures, Jaydeb Jana CEO, Performance Marketing Agency India, Digital Growth Agency, ROI Marketing, Meta Ads Partner"
        canonicalUrl="/about"
        structuredData={[aboutSchema, faqSchema]}
      />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-border/50">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-500/15 via-orange-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 font-semibold text-xs uppercase tracking-wider mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
                The Story Behind Arventa Ventures
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.15]">
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                  Digital Dominance
                </span> <br />
                & Predictable Revenue Velocity.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Arventa Ventures is an elite collective of digital growth architects, media buyers, visual storytellers, and data analysts. We exist for one uncompromising mandate: replacing vanity metrics with cold, calculated, bankable profit.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Button size="lg" className="h-14 px-8 text-base rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25 transition-all" asChild>
                  <Link to="/contact">
                    Partner With Our Agency <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border hover:bg-card text-foreground font-semibold" asChild>
                  <Link to="/portfolio">
                    View Verified Case Studies
                  </Link>
                </Button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>Meta Certified Media Buyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span>Google Premier Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span>Shopify Plus Ecosystem</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual Image & Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src="/images/about-team-hq.webp" 
                    alt="Arventa Ventures Global Agency Collaboration" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Glass Pill Top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-white">
                    <span className="flex items-center gap-2 font-bold text-orange-400">
                      <Sparkles className="w-4 h-4" /> Arventa Creative Studio
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      Active Deployments
                    </span>
                  </div>

                  {/* Floating Founder Quick Badge Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/images/jaydeb-jana-executive-avatar.webp" 
                        alt="Jaydeb Jana Founder" 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-sm text-white">Jaydeb Jana</div>
                        <div className="text-xs text-orange-400 font-medium">Founder & CEO, Arventa Ventures</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-emerald-400">+245%</div>
                        <div className="text-[10px] text-slate-400">Avg. ROAS Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-orange-500/20 rounded-full blur-[90px] -z-10" />
              <div className="absolute -top-8 -right-8 w-60 h-60 bg-amber-500/15 rounded-full blur-[90px] -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Key Metrics & Impact Numbers */}
      <section className="py-14 border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-orange-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-2 tracking-tight">
                  <span className="text-orange-500">{stat.value}</span>
                </div>
                <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Founder Spotlight & Personal Letter from Jaydeb Jana */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-card via-card to-orange-950/10 border border-border p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Founder Portrait Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-2xl group">
                <img 
                  src="/images/jaydeb-jana-executive.webp" 
                  alt="Jaydeb Jana Founder & CEO" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white">
                  <div className="font-extrabold text-lg">Jaydeb Jana</div>
                  <div className="text-xs text-orange-400 font-semibold mb-2">Founder & Chief Executive Officer</div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    Specialized in Algorithmic Meta Funnels, CRO & Enterprise Growth Systems
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
                <BadgeCheck className="w-4 h-4 text-orange-500" />
                <span>Executive Commitment</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                &ldquo;Marketing is not an expense or a guessing game. It is a predictable financial engine.&rdquo;
              </h2>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
                <p>
                  When I founded <strong className="text-foreground">Arventa Ventures</strong>, I watched hundreds of ambitious business owners waste millions on digital agencies that hid behind inflated vanity impressions, confusing reports, and zero accountability.
                </p>
                <p>
                  We built Arventa with the opposite philosophy: <strong className="text-foreground">scientific, mathematical growth</strong>. Every rupee or dollar you allocate toward marketing must be held accountable to real customer acquisition, lowered cost per lead (CPA), and sustainable profit margins.
                </p>
                <p>
                  Whether we are scripting high-production video ads, restructuring your Meta Advantage+ campaigns, or overhauling your technical SEO foundations, my team and I treat your budget with the exact same care and intensity as our own. That is my personal pledge to every brand that partners with us.
                </p>
              </div>

              {/* Direct Founder Access CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg shadow-orange-500/20" asChild>
                  <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20discuss%20a%20growth%20partnership%20with%20Arventa%20Ventures." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Message Founder Directly
                  </a>
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-card rounded-full px-6 py-3 text-sm" asChild>
                  <Link to="/contact">
                    Book Confidential Strategy Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Leadership & Core Executive Team */}
      <section className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
              <span>World-Class Talent</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Meet the Growth Architects
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Our multidisciplinary executive team brings together battle-tested media buyers, creative directors, and technical engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-orange-500/90 text-white text-[11px] font-bold rounded-full backdrop-blur-sm">
                    {member.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-orange-500 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-orange-500 mb-3">
                      {member.role}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-muted-foreground">Arventa Leadership</span>
                    <a 
                      href={member.social} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-orange-500 hover:text-orange-400 font-semibold inline-flex items-center gap-1"
                    >
                      Connect <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Operating Principles */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Core Principles That Govern Our Work
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We don&apos;t follow fleeting marketing fads. We adhere to time-tested economic laws, relentless testing, and clear client partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-orange-500/40 transition-all shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-500 flex items-center justify-center mb-6">
                <val.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. The Arventa Method (Execution Framework) */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Blueprint Overview */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Proprietary Framework</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                How We Engineer Unstoppable Growth For Your Brand
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                Eliminating guesswork requires a structured, multi-stage engineering cycle. From granular technical audits to high-converting creative synthesis, here is exactly how we deliver repeatable, scalable results.
              </p>

              <div className="rounded-2xl p-6 bg-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">Continuous A/B Iteration</div>
                    <div className="text-xs text-muted-foreground">Every winning campaign is stress-tested weekly</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We constantly test hook variations, visual thumb-stoppers, headline angles, and audience exclusions to prevent ad fatigue and keep customer acquisition costs optimal.
                </p>
              </div>
            </div>

            {/* Right Steps Grid */}
            <div className="lg:col-span-7 space-y-4">
              {frameworkSteps.map((st, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-orange-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-500 font-black text-lg flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                        {st.tag}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{st.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Agency Culture & Studio Production Mosaic */}
      <Section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Inside Arventa</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            High-Performance Culture & Creative Lab
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A glimpse into our collaborative studio environment, technical war rooms, and dedicated production sets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-3xl overflow-hidden border border-border relative h-72 sm:h-96 group">
            <img 
              src="/images/creative-studio-production.webp" 
              alt="Arventa Video Studio Production" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-2 inline-block">
                In-House Video Lab
              </span>
              <h3 className="text-xl font-bold">Cinema-Grade Video Ads & Studio Production</h3>
              <p className="text-xs text-slate-300 max-w-lg mt-1">
                Equipped for high-velocity UGC, brand commercials, and 4K social media reels tailored for maximum engagement.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-border relative h-72 sm:h-96 group">
            <img 
              src="/images/intro-strategy.webp" 
              alt="Arventa Team Strategy Session" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-slate-900 border border-slate-700 text-orange-400 text-xs font-bold rounded-full mb-2 inline-block">
                War Room
              </span>
              <h3 className="text-lg font-bold">Tactical Media Strategy</h3>
              <p className="text-xs text-slate-300 mt-1">
                Daily standups analyzing live auction CPA, CPM, and ROAS shifts.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-border relative h-64 group">
            <img 
              src="/images/creative-strategy-studio.webp" 
              alt="Arventa Tech Architecture Workshop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="text-base font-bold">Full-Stack Tech & CRO</h4>
              <p className="text-[11px] text-slate-300">Custom landing page development with sub-second speeds.</p>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-border relative h-64 group">
            <img 
              src="/images/content-marketing.webp" 
              alt="Arventa Content & Copywriting Hub" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="text-base font-bold">Persuasive Direct Response</h4>
              <p className="text-[11px] text-slate-300">Copywriting engineered to trigger emotional buying decisions.</p>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-border relative h-64 group">
            <img 
              src="/images/seo-strategy.webp" 
              alt="Arventa Search & Data Lab" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="text-base font-bold">Algorithmic Search Dominance</h4>
              <p className="text-[11px] text-slate-300">Dominating commercial search intents across Google & YouTube.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Industry Certifications & Ecosystem Partners */}
      <section className="py-16 bg-card/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Certified by the World&apos;s Leading Platforms
            </h3>
            <p className="text-xs text-muted-foreground">
              Official agency partnership credentials verifying our technical excellence and media management compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-card border border-border text-center flex flex-col items-center justify-center hover:border-orange-500/30 transition-colors"
              >
                <badge.icon className="w-6 h-6 text-orange-500 mb-2" />
                <div className="font-bold text-xs text-foreground leading-tight mb-1">{badge.name}</div>
                <div className="text-[10px] text-muted-foreground">{badge.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Agency Evolution Timeline */}
      <Section className="py-20 md:py-28 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            The Milestones of Our Growth
          </h2>
          <p className="text-muted-foreground text-base">
            From humble beginnings in Contai, West Bengal to a globally recognized growth marketing powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-card border border-border hover:border-orange-500/40 transition-colors relative"
            >
              <div className="text-3xl font-black text-orange-500 mb-2">{item.year}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 10. Global Offices & Regional Presence */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Globe className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Global Presence, Local Market Dominance
            </h2>
            <p className="text-muted-foreground text-base">
              Headquartered in India with strategic touchpoints across global financial and technological hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden border border-border hover:border-orange-500/40 transition-all flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/90 text-orange-400 text-[10px] font-bold rounded-full border border-slate-700">
                    {office.country}
                  </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                      <h3 className="text-lg font-bold text-foreground">{office.city}</h3>
                    </div>
                    <div className="text-[11px] text-orange-400 font-semibold mb-3">{office.badge}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{office.address}</p>
                    {(office as any).gmbLink && (
                      <a
                        href={(office as any).gmbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-orange-500 hover:text-orange-400 font-semibold mb-3 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Google Business Profile (GMB) &rarr;</span>
                      </a>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-muted-foreground font-mono">{office.phone}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">Active Hub</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions Accordion */}
      <Section className="py-20 md:py-28 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions About Arventa
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about our team, operating model, deliverables, and partnership requirements.
          </p>
        </div>

        <div className="space-y-4">
          {aboutFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-border rounded-2xl bg-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-card/80 transition-colors"
              >
                <span className="font-bold text-base md:text-lg text-foreground">
                  {faq.q}
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
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* 12. Final High-Converting Call to Action */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-border bg-gradient-to-b from-card via-card to-background">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span>Ready for Measurable Revenue?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight">
              Stop Guessing With Your Ad Budget. <br />
              <span className="text-orange-500">Scale With Arventa.</span>
            </h2>

            <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a 1-on-1 growth audit with Jaydeb Jana and our lead performance media buyers. We will evaluate your current funnels and deliver a custom 90-day scaling plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25" asChild>
                <Link to="/contact">
                  Schedule Free Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 text-base rounded-full border-border hover:bg-card text-foreground font-semibold" asChild>
                <a href="https://wa.me/917872490719?text=Hi%20Arventa%20Team,%20I%20would%20like%20to%20discuss%20a%20campaign%20audit." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground">
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
          </motion.div>
        </div>
      </section>

    </div>
  );
}
