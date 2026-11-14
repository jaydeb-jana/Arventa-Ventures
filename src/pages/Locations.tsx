import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { MapPin } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { locationsByState } from "@/src/data/locationsData";
import { SEO } from "@/src/components/common/SEO";

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950">
      <SEO
        title="Locations We Serve | Local Digital Marketing Across India"
        description="Discover all major Indian cities served by Arventa Ventures. We offer hyper-local SEO, Meta Ads, and digital marketing agency solutions across West Bengal, Maharashtra, Delhi, Karnataka, and beyond."
        keywords="Digital Marketing Locations India, Local SEO Agency Kolkata, Meta Ads Agency Mumbai, Google Ads Agency Delhi, Digital Marketing Bangalore"
        canonicalUrl="/locations"
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Locations We Serve
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto">
              Arventa Ventures is proudly scaling ambitious brands across India. From bustling metros to fast-growing digital hubs, find your state and city below to see how we can dominate your local market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grouped by State */}
      <Section className="py-24 bg-slate-950 relative">
        <div className="w-full">
          {Object.entries(locationsByState).sort().map(([state, cities], stateIdx) => (
            <motion.div 
              key={state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4 inline-block pr-12">
                <span className="text-orange-500 mr-2">|</span> {state}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[...new Set(cities)].sort().map((city, cityIdx) => (
                  <Link 
                    key={city}
                    to={`/location/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500/50 hover:bg-slate-800/50 transition-all group"
                  >
                    <MapPin className="w-4 h-4 text-orange-500 mr-2 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-slate-400 group-hover:text-white transition-colors text-sm sm:text-base truncate">{city}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Don't see your city?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            We work with clients globally. Contact us to build a digital growth engine tailored for your region.
          </p>
          <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-slate-100 h-14 px-10 text-lg font-bold" asChild>
            <Link to="/contact">Get Your Free Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
