import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  PlayCircle,
  Target,
  Video,
  Search,
  Megaphone,
  Code2,
  Smartphone,
  Globe,
  Terminal,
  Cpu,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/Card";
import { services } from "@/src/data";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-orange-500/10 text-orange-400 ring-1 ring-inset ring-orange-500/30 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Digital Marketing • Web Development • Custom Tech Solutions</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            We Don't Just Market Brands. <br className="hidden md:block" />
            <span className="text-gradient">We Build Them.</span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-300 mb-10 max-w-2xl mx-auto">
            Partner with an elite full-service digital agency. We combine high-ROI marketing funnels with high-performance web development, mobile applications, and custom software engineering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto font-bold bg-orange-500 hover:bg-orange-600">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TrustIndicators() {
  return (
    <div className="border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest">
          Trusted by innovative brands worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {["FORBES", "TECHCRUNCH", "BLOOMBERG", "WIRED", "FAST COMPANY"].map(
            (brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center text-xl font-bold text-white tracking-tighter"
              >
                {brand}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export function IntroSection() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforming Clicks Into{" "}
            <span className="text-orange-500">Customers.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Arventa Ventures is a full-funnel digital marketing agency. We
            seamlessly blend high-impact creative with rigorous data analytics
            to deliver campaigns that don't just look good—they generate
            measurable business growth.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Data-Driven Strategies",
              "Premium Brand Design",
              "High-Converting Ads",
              "Transparent Reporting",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline">
            <Link to="/about">More About Us</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/intro-strategy.jpg"
            alt="Arventa Ventures Strategy Session"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </Section>
  );
}

export function ProblemStatement() {
  return (
    <Section className="bg-slate-950 border-t border-border">
      <SectionHeader
        title="Are You Losing Market Share?"
        subtitle="The digital landscape is ruthless. If your marketing isn't converting, you're handing customers to your competitors."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Low Website Traffic",
            desc: "You have a great product, but nobody can find you online.",
          },
          {
            title: "Wasted Ad Spend",
            desc: "Pouring money into Facebook or Google ads with negative ROI.",
          },
          {
            title: "Poor Conversion Rates",
            desc: "People visit your site, but they leave without buying or contacting you.",
          },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-card border border-border rounded-2xl">
            <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SolutionSection() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/solution-funnel.jpg"
            alt="Arventa Ventures Funnel and Marketing Analytics"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full h-[500px]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The <span className="text-orange-500">Arventa Ventures</span> Solution.
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            We fix broken marketing funnels. By analyzing your entire customer
            journey, we plug the leaks and scale what works using a cohesive
            omnichannel strategy.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Targeted Audience Acquisition",
                desc: "We find your ideal customers where they hang out online.",
              },
              {
                title: "Compelling Offer Creation",
                desc: "We help position your product to make it irresistible.",
              },
              {
                title: "Conversion Rate Optimization",
                desc: "We turn your website into a 24/7 lead generation machine.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CoreServicesPreview() {
  const featuredServices = [
    services.find((s) => s.id === "web-development") || services[0],
    services.find((s) => s.id === "app-development") || services[1],
    services.find((s) => s.id === "custom-software") || services[2],
    services.find((s) => s.id === "facebook-ads") || services[1],
    services.find((s) => s.id === "google-ads") || services[2],
    services.find((s) => s.id === "seo") || services[3],
  ];

  return (
    <Section className="bg-card border-y border-border">
      <SectionHeader
        title="Our Core Capabilities"
        subtitle="End-to-end digital excellence: performance marketing, custom web design, mobile apps, and enterprise software."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredServices.map((service, index) => {
          const IconComponent = (Icons as any)[service.icon] || Target;
          return (
            <Card
              key={index}
              className="bg-background border-border hover:border-orange-500/50 transition-colors group flex flex-col"
            >
              <CardHeader className="flex-1 flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mt-auto pt-4 border-t border-slate-800/80">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="secondary" className="px-8 font-semibold">
          <Link to="/services">Explore All 13+ Services</Link>
        </Button>
      </div>
    </Section>
  );
}

export function TechSolutionsHighlight() {
  return (
    <Section className="bg-slate-950 border-t border-border relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-orange-500/10 text-orange-400 ring-1 ring-inset ring-orange-500/30 uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4 text-orange-400" />
            Engineering & Software Development
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Websites, Mobile Apps & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Custom Software Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don't just drive traffic — we build the technology that converts visitors into enterprise value. From high-converting websites and native mobile apps to custom automation software and scalable cloud backends.
          </p>
        </div>

        {/* 3 Tech Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Full-Stack Web Development */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-8 flex flex-col transition-all duration-300 group shadow-xl hover:shadow-orange-500/10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                High-Speed & Responsive
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
              Full-Stack Web Development
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bespoke websites and dynamic web applications built with modern frameworks. Engineered for sub-second page loads, conversion optimization, and flawless search engine visibility.
            </p>

            <div className="space-y-3 mb-8 flex-1">
              {[
                "Modern React, Next.js & TypeScript Architecture",
                "E-Commerce Solutions (Shopify, WooCommerce, Custom)",
                "100/100 Core Web Vitals & Google PageSpeed",
                "Custom Headless CMS & Dynamic Dashboards",
                "Conversion-Engineered Landing Pages",
              ].map((feat, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2.5 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Technologies</div>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 2: Mobile & Web App Development */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border-2 border-orange-500/60 shadow-2xl shadow-orange-500/15 rounded-3xl p-8 flex flex-col transition-all duration-300 group lg:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-orange-400 bg-orange-500/15 px-3 py-1 rounded-full border border-orange-500/30">
                iOS & Android Apps
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
              Mobile App Development
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Native and cross-platform mobile apps engineered for buttery-smooth 60fps performance, intuitive product UX, offline capabilities, and high customer retention.
            </p>

            <div className="space-y-3 mb-8 flex-1">
              {[
                "Cross-Platform Apps with React Native & Flutter",
                "Native iOS (Swift) & Android (Kotlin) Optimization",
                "Frictionless Payment Gateway & In-App Purchases",
                "Real-Time Data Sync, WebSockets & Push Notifications",
                "App Store (Apple & Google Play) Deployment & Support",
              ].map((feat, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2.5 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Technologies</div>
              <div className="flex flex-wrap gap-1.5">
                {["Flutter", "React Native", "Swift", "Kotlin", "Firebase"].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 3: Custom Software & Cloud Systems */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 hover:border-orange-500/50 rounded-3xl p-8 flex flex-col transition-all duration-300 group shadow-xl hover:shadow-orange-500/10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Terminal className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Enterprise & Automation
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
              Custom Software & Tech Systems
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Tailored software architectures, internal admin dashboards, automated CRM/ERP pipelines, and AI tool integrations built to eliminate operational bottlenecks.
            </p>

            <div className="space-y-3 mb-8 flex-1">
              {[
                "Bespoke Internal Tools & Business Dashboards",
                "Automated CRM, ERP & Billing Webhook Pipelines",
                "AI Tool Integrations & Custom Algorithmic Bots",
                "Robust REST & GraphQL API Engineering",
                "Secure Cloud Scaling on AWS & Google Cloud",
              ].map((feat, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2.5 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Technologies</div>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "PostgreSQL", "Docker", "AWS", "REST APIs"].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Banner / Tech Highlights */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-orange-400 shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Ultra-Fast Performance</div>
                <div className="text-slate-400 text-xs">&lt; 1s Page Load Speeds</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-orange-400 shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">Enterprise Security</div>
                <div className="text-slate-400 text-xs">99.9% Uptime & Encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-orange-400 shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">100% Code Ownership</div>
                <div className="text-slate-400 text-xs">Clean, Scalable Architecture</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button asChild className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 font-bold px-6">
              <Link to="/contact">Discuss Tech Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function VideoMarketingHighlight() {
  return (
    <Section className="bg-background">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Dominate With Video Marketing
        </h2>
        <p className="text-lg text-slate-400">
          Video is no longer optional. We produce high-retention short-form and
          long-form video content that captures attention and drives massive
          engagement on TikTok, Reels, and YouTube.
        </p>
      </div>
      <div className="relative rounded-3xl overflow-hidden aspect-video border border-border group cursor-pointer">
        <img
          src="/images/video-marketing.jpg"
          alt="Arventa Video Marketing Production Studio"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
          <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-[0_0_0_10px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform">
            <PlayCircle className="w-10 h-10" />
          </div>
        </div>
      </div>
    </Section>
  );
}
