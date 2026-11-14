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
} from "lucide-react";
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
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-orange-500/10 text-orange-400 ring-1 ring-inset ring-orange-500/30 mb-8 shadow-sm">
            <BadgeCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Premium Digital Marketing Agency</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            We Don't Just Market Brands. <br className="hidden md:block" />
            <span className="text-gradient">We Build Them.</span>
          </h1>
          <p className="text-xl leading-relaxed text-slate-300 mb-10 max-w-2xl mx-auto">
            Partner with an international agency dedicated to scaling your
            business through data-driven strategies, creative excellence, and
            measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Marketing Strategy Session"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/mktg1/800/600"; }}
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
          <img
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Marketing Analytics"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/mktg2/800/600"; }}
            className="rounded-2xl border border-border shadow-2xl object-cover w-full h-[500px]"
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
  return (
    <Section className="bg-card border-y border-border">
      <SectionHeader
        title="Our Core Expertise"
        subtitle="Comprehensive digital solutions tailored to accelerate your business growth across every channel."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service, index) => (
          <Card
            key={index}
            className="bg-background border-border hover:border-orange-500/50 transition-colors group"
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="secondary">
          <Link to="/services">View All Services</Link>
        </Button>
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
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1600&h=900"
          alt="Video Marketing Production Studio"
          referrerPolicy="no-referrer"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/video1/1600/900"; }}
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
