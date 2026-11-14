import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle2, ArrowRight, PlayCircle, BarChart3, TrendingUp, Layers } from "lucide-react";
import { servicesData } from "@/src/data/pageContent";
import { SEO } from "@/src/components/common/SEO";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (slug && servicesData[slug]) {
      const raw = servicesData[slug];
      const localized = raw['en'] || raw;
      setData({
        ...raw,
        ...localized
      });
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!slug || (!servicesData[slug] && data === null)) {
    if (!servicesData[slug as string]) {
      return <Navigate to="/services" replace />;
    }
  }

  if (!data) return null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "DigitalMarketingAgency",
      "name": "Arventa Ventures",
      "url": "https://arventaventures.online"
    },
    "description": data.subtitle || data.overviewTitle,
    "areaServed": "Global",
    "serviceType": data.title
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950">
      <SEO
        title={`${data.title} Services | High ROI Growth`}
        description={data.subtitle || `${data.title} services by Arventa Ventures. Boost your conversion rates, organic reach, and high-ticket lead generation.`}
        keywords={`${data.title}, Digital Marketing, ${data.title} Agency, Performance Marketing, Arventa Ventures`}
        canonicalUrl={`/services/${slug}`}
        structuredData={serviceSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-8 tracking-wide font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>
                Premium Service
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-10 font-light">
                {data.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto text-lg h-14 px-8" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-slate-700 hover:bg-slate-800 text-white w-full sm:w-auto text-lg h-14 px-8" asChild>
                  <Link to="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-20 blur-xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700/50 bg-slate-900 aspect-[4/3] w-full shadow-2xl">
                <img 
                  src={data.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"} 
                  alt={data.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${slug}/800/600`;
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/20"></div>
                {slug === 'video-marketing' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                       <PlayCircle className="w-10 h-10 text-white pl-1" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview & SEO Content Section */}
      <Section className="py-24 bg-slate-950 relative border-b border-slate-800">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Strategic Overview</h2>
                <p className="text-slate-300 text-xl leading-relaxed mb-12 border-l-4 border-orange-500 pl-6 font-light">
                  {data.desc}
                </p>
                
                {data.seoContent && (
                  <div 
                    className="[&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-8 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-12 [&_h3]:mb-6 [&_p]:text-slate-400 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_strong]:text-white [&_strong]:font-semibold [&_em]:text-orange-400 [&_em]:not-italic [&_em]:font-medium"
                    dangerouslySetInnerHTML={{ __html: data.seoContent }}
                  />
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sticky top-32 bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-8">Core Capabilities</h3>
                <ul className="space-y-6">
                  {data.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="text-slate-300 text-lg font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-8 border-t border-slate-800">
                   <p className="text-slate-400 mb-6">Ready to scale your business with {data.title}?</p>
                   <Button size="lg" className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                     <Link to="/contact">Discuss Your Project</Link>
                   </Button>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      {data.benefits && (
        <Section className="py-24 bg-slate-900/50 border-b border-slate-800">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why It Works</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">The measurable impact of integrating our {data.title} strategies into your growth engine.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.benefits.map((benefit: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-orange-500/30 transition-colors flex flex-col sm:flex-row gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                     {idx % 2 === 0 ? <TrendingUp className="w-8 h-8 text-orange-500" /> : <BarChart3 className="w-8 h-8 text-orange-500" />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Process Section */}
      {data.process && (
        <Section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="w-full">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Methodology</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">A systematic, data-driven approach to {data.title}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.process.map((step: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Connector line for desktop */}
                  {idx < data.process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-slate-800 -z-10"></div>
                  )}
                  
                  <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl h-full relative z-10 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-black text-slate-800 mb-6 opacity-50">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
      
      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to dominate your market?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Partner with Arventa Ventures and let us build a high-converting {data.title.toLowerCase()} engine for your brand.
          </p>
          <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-slate-100 h-14 px-10 text-lg font-bold" asChild>
            <Link to="/contact">Get Your Free Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
