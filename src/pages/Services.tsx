import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { services } from "@/src/data";
import * as Icons from "lucide-react";
import { SEO } from "@/src/components/common/SEO";

export default function Services() {
  const serviceImages = [
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1200", // 1. Social Media
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", // 2. Facebook Ads
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200", // 3. Google Ads
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200", // 4. SEO
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200", // 5. Content
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", // 6. Branding
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200", // 7. Creative
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200", // 8. Video
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", // 9. Email Marketing
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200", // 10. Influencer
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200", // 11. Web Development
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200", // 12. App Development
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"  // 13. Custom Tech
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digital Marketing Services",
    "itemListElement": services.map((srv, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": srv.title,
        "description": srv.description,
        "url": `https://arventaventures.online/services/${srv.id}`
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Best Digital Marketing Agency Services | Meta Ads Service & Video Editing"
        description="Arventa Ventures is the best digital marketing agency offering high-ROI Meta Ads service, video making services near me, low budget digital marketing agency packages, SEO & lead generation."
        keywords="best digital marketing agency, meta ads service, meta ads services near me, video making services near me, low budget digital marketing agency, best digital marketing agency in kolkata, SEO services, social media marketing, Arventa Ventures"
        canonicalUrl="/services"
        structuredData={servicesSchema}
      />
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Brands</span> <br />
              Through Digital
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              We don't just run ads. We build comprehensive, data-driven growth ecosystems designed to scale your business and dominate your market.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <Section className="py-24 border-t border-slate-900/50">
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = (Icons as any)[service.icon] || Icons.Star;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 mb-8 border border-orange-500/20 shadow-lg shadow-orange-500/5">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="bg-card/50 rounded-3xl p-8 border border-border/50 mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Key Capabilities</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                          <span className="text-slate-300 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="outline" className="rounded-full group hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                    <Link to="/contact">
                      Inquire about this service <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-800 group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={serviceImages[index] || "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${service.id || index}/800/600`;
                      }}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Floating Badge (Decorative) */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                       <div className="bg-background/90 backdrop-blur-md px-6 py-3 rounded-full border border-border/50 text-white font-medium text-sm flex items-center gap-2">
                         <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                          </span>
                         Data-Driven Strategy
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <SectionHeader
          title="How We Deliver Results"
          subtitle="A proven methodology that turns investment into exponential growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            {
              step: "01",
              title: "Discovery & Audit",
              desc: "Deep dive into your analytics, competitors, and current positioning to find the gaps.",
            },
            {
              step: "02",
              title: "Custom Strategy",
              desc: "Developing a tailored roadmap with precise KPIs and multi-channel resource allocation.",
            },
            {
              step: "03",
              title: "Execution & Launch",
              desc: "Deploying high-converting creatives, optimized campaigns, and technical implementations.",
            },
            {
              step: "04",
              title: "Scale & Optimize",
              desc: "Continuous A/B testing, budget scaling, and performance refinement for maximum ROI.",
            },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-7xl font-bold text-slate-800/50 mb-4 transition-colors group-hover:text-orange-500/20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
              {/* Connector line on desktop */}
              {i !== 3 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-border to-transparent -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background text-center py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Outperform Your Competitors?
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Stop leaving money on the table. Partner with an agency that understands how to turn clicks into revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full">
              <Link to="/contact">Get Your Free Proposal</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full">
              <Link to="/pricing">View Pricing Packages</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
