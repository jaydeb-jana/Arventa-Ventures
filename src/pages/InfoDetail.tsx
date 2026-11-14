import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { ArrowRight, Info } from "lucide-react";
import { infoData } from "@/src/data/pageContent";
import { SEO } from "@/src/components/common/SEO";

export default function InfoDetail() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (slug && infoData[slug]) {
      const raw = infoData[slug];
      const localized = raw['en'] || raw;
      setData({
        ...raw,
        ...localized
      });
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!slug || (!infoData[slug] && data === null)) {
    if (!infoData[slug as string]) {
      return <Navigate to="/" replace />;
    }
  }

  if (!data) return null;

  const infoSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.desc || data.subtitle,
    "image": data.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    "author": {
      "@type": "Organization",
      "name": "Arventa Ventures"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arventa Ventures"
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title={`${data.title} | Arventa Ventures Resource`}
        description={data.desc || data.subtitle || "Learn more about digital marketing strategies, Meta Ads, and business growth from Arventa Ventures."}
        keywords={`${data.title}, meta ads service, best digital marketing agency, low budget digital marketing agency, Arventa Ventures`}
        canonicalUrl={`/info/${slug}`}
        ogType="article"
        ogImage={data.image}
        structuredData={infoSchema}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-slate-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-6 shadow-sm">
              <Info className="w-4 h-4 text-orange-500 mr-2" />
              Resource Center
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <Section className="py-16 md:py-24 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <img 
              src={data.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"} 
              alt={data.title}
              referrerPolicy="no-referrer"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/info-${data.id || 'detail'}/1200/500`; }}
              className="w-full h-auto rounded-3xl object-cover aspect-[21/9] shadow-2xl border border-slate-800 mb-12"
            />
            
            <p className="text-2xl text-slate-300 leading-relaxed font-medium mb-12 border-l-4 border-orange-500 pl-6">
              {data.desc}
            </p>

            <div 
              className="prose prose-invert prose-orange max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-white prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-slate-200 prose-p:text-slate-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-a:text-orange-500 hover:prose-a:text-orange-400 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-800 prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-300 prose-blockquote:bg-slate-900/50 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-2xl prose-li:text-slate-300 prose-li:marker:text-orange-500"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </motion.div>

          <div className="mt-16 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to scale your business?</h3>
              <p className="text-slate-400">Let's craft a strategy tailored to your growth goals.</p>
            </div>
            <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
