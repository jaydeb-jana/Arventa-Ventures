import { Link } from "react-router-dom";
import {
  CheckCircle2,
  MapPin,
  Globe,
  ArrowRight,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/Card";

export function TeamSection() {
  return (
    <Section className="bg-card border-y border-border">
      <SectionHeader
        title="Meet The Strategists"
        subtitle="The minds behind our most successful campaigns."
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            name: "David Chen",
            role: "Head of Growth",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
          },
          {
            name: "Sarah Jenkins",
            role: "Creative Director",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
          },
          {
            name: "Marcus Reed",
            role: "Lead SEO Strategist",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
          },
          {
            name: "Elena Rostova",
            role: "Paid Media Director",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
          },
        ].map((member, i) => (
          <div key={i} className="group">
            <div className="rounded-2xl overflow-hidden mb-4 border border-border aspect-square relative">
              <img
                src={member.img}
                alt={member.name}
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/team-${i}/400/400`; }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-orange-500 text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function GlobalReach() {
  return (
    <Section className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Globe className="w-16 h-16 text-blue-500 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          A Global Digital Footprint
        </h2>
        <p className="text-lg text-slate-400 mb-12">
          While our strategies are highly targeted, our reach is global. We have
          successfully launched campaigns in over 20 countries, adapting our
          messaging to local cultures and markets.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "New York",
            "London",
            "Dubai",
            "Singapore",
            "Sydney",
            "Toronto",
          ].map((city, i) => (
            <div
              key={i}
              className="flex items-center bg-card border border-border px-4 py-2 rounded-full"
            >
              <MapPin className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-white font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { pricing } from "@/src/data";

export function PricingPreview() {
  return (
    <Section className="bg-slate-950 border-y border-border">
      <SectionHeader
        title="Digital Marketing Packages"
        subtitle="Transparent investments designed for serious brand growth."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
        <Card className="bg-background border-border flex flex-col">
          <CardHeader className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 line-through">{pricing[0].originalPrice}</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">{pricing[0].badge}</span>
            </div>
            <CardTitle className="text-2xl mb-1 uppercase tracking-tight">{pricing[0].name}</CardTitle>
            <div className="text-4xl font-bold text-white mb-3">
              {pricing[0].price}
              <span className="text-sm text-slate-500 font-normal ml-1">
                {pricing[0].period}
              </span>
            </div>
            <div className="text-xs text-orange-400 font-medium mb-3">
              {pricing[0].videosCount} • {pricing[0].postersCount} • {pricing[0].platforms}
            </div>
            <CardDescription className="mb-6 flex-1 text-xs">
              {pricing[0].description}
            </CardDescription>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link to="/pricing">View Package Details</Link>
            </Button>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-orange-500 shadow-xl shadow-orange-500/10 transform md:-translate-y-4 flex flex-col">
          <CardHeader className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <span className="text-xs font-semibold text-slate-500 line-through">{pricing[1].originalPrice}</span>
            </div>
            <CardTitle className="text-2xl mb-1 uppercase tracking-tight">{pricing[1].name}</CardTitle>
            <div className="text-4xl font-bold text-white mb-3">
              {pricing[1].price}
              <span className="text-sm text-slate-500 font-normal ml-1">
                {pricing[1].period}
              </span>
            </div>
            <div className="text-xs text-orange-400 font-medium mb-3">
              {pricing[1].videosCount} • {pricing[1].postersCount} • {pricing[1].platforms}
            </div>
            <CardDescription className="mb-6 flex-1 text-xs">
              {pricing[1].description}
            </CardDescription>
            <Button asChild className="w-full mt-auto bg-orange-500 hover:bg-orange-600 text-white font-bold">
              <Link to="/pricing">View Package Details</Link>
            </Button>
          </CardHeader>
        </Card>
        <Card className="bg-background border-border flex flex-col">
          <CardHeader className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 line-through">{pricing[2].originalPrice}</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">{pricing[2].badge}</span>
            </div>
            <CardTitle className="text-2xl mb-1 uppercase tracking-tight">{pricing[2].name}</CardTitle>
            <div className="text-4xl font-bold text-white mb-3">
              {pricing[2].price}
              <span className="text-sm text-slate-500 font-normal ml-1">
                {pricing[2].period}
              </span>
            </div>
            <div className="text-xs text-orange-400 font-medium mb-3">
              {pricing[2].videosCount} • {pricing[2].postersCount} • {pricing[2].platforms}
            </div>
            <CardDescription className="mb-6 flex-1 text-xs">
              {pricing[2].description}
            </CardDescription>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link to="/pricing">View Package Details</Link>
            </Button>
          </CardHeader>
        </Card>
      </div>
      <div className="max-w-5xl mx-auto mt-8 text-center space-y-1">
        <p className="text-slate-400 text-xs italic">
          * Package videos are produced using client pre-recorded raw footage or cutting-edge AI generation. On-site camera shoots or influencer collaborations incur separate production fees.
        </p>
        <p className="text-slate-500 text-xs italic">
          * Ad spend budget will be provided directly by the client to Meta/Google ad accounts.
        </p>
      </div>
    </Section>
  );
}

export function ClientOnboarding() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="Seamless Onboarding"
        subtitle="We respect your time. Our onboarding is fast, efficient, and thorough."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 z-0"></div>
        {[
          {
            step: "1",
            title: "Discovery Questionnaire",
            desc: "A deep dive into your brand, audience, and goals.",
          },
          {
            step: "2",
            title: "Strategy Presentation",
            desc: "We present a custom 90-day roadmap for your approval.",
          },
          {
            step: "3",
            title: "Campaign Launch",
            desc: "Assets are created, tracking is verified, and we go live.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-card border-4 border-background rounded-full flex items-center justify-center text-3xl font-bold text-orange-500 shadow-xl mb-6">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function MarketingAuditOffer() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 md:p-16 border border-slate-800 text-center max-w-4xl mx-auto shadow-2xl">
        <ShieldCheck className="w-16 h-16 text-orange-500 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Claim Your Free Marketing Audit
        </h2>
        <p className="text-lg text-slate-400 mb-8">
          We will analyze your website, your current ad campaigns, and your top
          3 competitors to find exactly where you are losing money.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="url"
            placeholder="Enter your website URL"
            className="px-6 py-4 rounded-full bg-background border border-border text-white focus:outline-none focus:border-orange-500 md:w-96"
          />
          <Button size="lg" className="h-14">
            Get Free Audit
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function HomeFAQ() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="Common Questions"
        subtitle="Clarity before commitment."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            q: "Do you guarantee results?",
            a: "We guarantee our process and effort. While we can't guarantee specific numbers due to market variables, our track record speaks for itself.",
          },
          {
            q: "Who owns the ad accounts?",
            a: "You do. You retain 100% ownership and administrative access to all ad accounts and data we manage.",
          },
          {
            q: "How long are your contracts?",
            a: "We typically start with a 3-month agreement to allow strategies to mature, followed by month-to-month flexibility.",
          },
          {
            q: "Will I have a dedicated manager?",
            a: "Yes. You will be assigned a dedicated Account Director who will be your strategic point of contact.",
          },
        ].map((faq, i) => (
          <div key={i} className="p-6 bg-card border border-border rounded-2xl">
            <h4 className="text-white font-bold mb-3 flex items-start">
              <span className="text-orange-500 mr-2">Q.</span> {faq.q}
            </h4>
            <p className="text-slate-400 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/faq"
          className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center"
        >
          View all FAQs <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Section>
  );
}

export function BlogPreview() {
  return (
    <Section className="bg-slate-950 border-t border-border">
      <div className="flex justify-between items-end mb-12">
        <SectionHeader
          title="Marketing Insights"
          subtitle="Strategies straight from our experts."
          align="left"
          className="mb-0"
        />
        <Button asChild variant="outline" className="hidden md:flex">
          <Link to="/blog">Read Our Blog</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "The Ultimate Guide to Meta Ads in 2026",
            cat: "Advertising",
            img: "/images/blog-meta-ads.jpg",
          },
          {
            title: "How to Build a High-Converting Marketing Funnel",
            cat: "Strategy",
            img: "/images/blog-marketing-funnel.jpg",
          },
          {
            title: "SEO Best Practices for E-commerce Brands",
            cat: "SEO",
            img: "/images/blog-ecommerce-seo.jpg",
          },
        ].map((post, i) => (
          <Link key={i} to="/blog" className="group block">
            <div className="rounded-2xl overflow-hidden mb-4 border border-border">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block">
              {post.cat}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </Section>
  );
}
