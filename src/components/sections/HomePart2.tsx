import { Link } from "react-router-dom";
import {
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Smartphone,
  PenTool,
  ExternalLink,
} from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { portfolio } from "@/src/data";

export function MetricsSection() {
  return (
    <Section className="border-y border-border relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-orange-950/20"></div>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "₹15 Cr+", label: "Client Revenue Generated" },
          { value: "500+", label: "Businesses Helped" },
          { value: "4.8x", label: "Average ROAS" },
          { value: "98%", label: "Client Retention Rate" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center p-4">
            <span className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </span>
            <span className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="Our Growth Methodology"
        subtitle="A proven, 4-step framework we use to scale businesses predictably."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            num: "01",
            title: "Discovery & Audit",
            desc: "We analyze your current digital footprint, competitors, and identify untapped opportunities.",
          },
          {
            num: "02",
            title: "Strategy Architecture",
            desc: "We build a custom, multi-channel roadmap tailored specifically to your revenue goals.",
          },
          {
            num: "03",
            title: "Execution & Launch",
            desc: "Our specialists deploy high-converting campaigns, creatives, and technical optimizations.",
          },
          {
            num: "04",
            title: "Scale & Optimize",
            desc: "We continuously monitor data, A/B test, and scale winning strategies for maximum ROI.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900/60 flex flex-col justify-between shadow-xs hover:border-orange-500/40 hover:shadow-md transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                  Step {step.num}
                </span>
                <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono select-none group-hover:text-orange-500/40 transition-colors">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SEOSpecialization() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dominate Organic Search & Google Maps in Contai
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Stop paying for every single click. From ranking local Contai showrooms and clinics #1 on Google Maps to scaling national brands on Google Search, our technical SEO builds a predictable pipeline of high-intent buyers.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Contai & Regional Google Business Profile #1 Ranking",
              "Technical SEO Audits & Core Web Vitals Optimization",
              "Hyper-Local Keyword Gap Analysis (Contai & Purba Medinipur)",
              "High-Authority Editorial Backlink Building",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/seo-strategy.webp"
            alt="Arventa SEO Strategy and Keyword Rankings"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full aspect-video sm:aspect-[16/10] lg:aspect-auto lg:h-[400px]"
          />
        </div>
      </div>
    </Section>
  );
}

export function PaidAdsSpecialization() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/paid-ads.webp"
            alt="Arventa High-ROAS Paid Acquisition Strategy"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full aspect-video sm:aspect-[16/10] lg:aspect-auto lg:h-[400px]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
            <DollarSign className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            High-ROAS Paid Acquisition
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            We treat your ad budget like our own. From Google Search to Meta
            Ads, we architect funnels that predictably turn strangers into loyal
            customers profitably.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Google Search & Performance Max",
              "Facebook & Instagram Ads",
              "LinkedIn B2B Lead Gen",
              "Retargeting Funnels",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function SocialMediaSpecialization() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cultivate a Loyal Community
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Social media isn't just about posting; it's about engaging. We build
            your brand's voice and foster a community that advocates for your
            products.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Platform-Specific Strategies",
              "Community Management",
              "Influencer Partnerships",
              "Trend Hijacking",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/social-media.webp"
            alt="Arventa Social Media Community Management"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full aspect-video sm:aspect-[16/10] lg:aspect-auto lg:h-[400px]"
          />
        </div>
      </div>
    </Section>
  );
}

export function ContentMarketingFocus() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img
            src="/images/content-marketing.webp"
            alt="Arventa Content Marketing and Storytelling"
            className="relative rounded-2xl border border-border shadow-2xl object-cover w-full aspect-video sm:aspect-[16/10] lg:aspect-auto lg:h-[400px]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
            <PenTool className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Storytelling That Sells
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Content is the fuel for your marketing engine. We create high-value
            blogs, whitepapers, and emails that educate your audience and
            position you as the authority.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "SEO-Optimized Blog Posts",
              "Email Automation Flows",
              "High-Converting Landing Pages",
              "Lead Magnet Creation",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function PortfolioHighlights() {
  return (
    <Section className="bg-slate-950 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeader
          title="Recent Success Stories"
          subtitle="See how we've helped ambitious brands scale their revenue and dominate their markets."
          align="left"
          className="mb-0"
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link to="/portfolio">View Portfolio</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.slice(0, 3).map((item, index) => (
          <Link key={index} to="/404" className="group cursor-pointer block">
            <div className="overflow-hidden rounded-2xl mb-6 relative border border-border">
              <img
                src={item.image}
                alt={item.client}
                className="w-full aspect-[4/3] sm:aspect-video sm:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
              <div className="absolute top-4 right-4 p-2 bg-slate-900/80 border border-slate-700 rounded-full text-slate-300 group-hover:text-orange-500 group-hover:border-orange-500/50 transition-colors">
                <ExternalLink size={18} />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.client}
                </h3>
                <p className="text-slate-300 text-sm">{item.service}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
