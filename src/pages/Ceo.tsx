import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Quote, TrendingUp, Users, Target, ArrowRight, Facebook, Instagram, Mail, Briefcase, Award, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Link } from "react-router-dom";
import { SEO } from "@/src/components/common/SEO";

export default function Ceo() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jaydeb Jana",
    "jobTitle": "Founder & CEO",
    "email": "ceo@arventaventures.online",
    "worksFor": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "url": "https://arventaventures.online"
    },
    "sameAs": [
      "https://www.facebook.com/share/19J9Nm6Gg6/",
      "https://www.instagram.com/iamjaydebjana"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950">
      <SEO
        title="Jaydeb Jana | Founder & CEO at Arventa Ventures"
        description="Meet Jaydeb Jana, Founder & CEO of Arventa Ventures. Leading high-impact performance marketing, strategic growth, and SEO campaigns for modern brands."
        keywords="Jaydeb Jana, CEO Arventa Ventures, Founder Digital Marketing Agency, Growth Strategist"
        canonicalUrl="/ceo"
        structuredData={personSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-slate-950/80 to-slate-950 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/30 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-8 tracking-wide uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>
                Executive Leadership
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Visionary <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                  Leadership
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-10 font-light max-w-lg">
                "I am a 17-year-old visionary passionate about building scalable solutions and driving digital innovation."
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto text-lg h-14 px-8" asChild>
                  <Link to="/contact">
                    Work With Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3">
                  <a href="mailto:ceo@arventaventures.online" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all" title="Email CEO">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/share/19J9Nm6Gg6/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/iamjaydebjana" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all" title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* CEO Email Display */}
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm font-medium text-slate-400">CEO Email:</span>
                <a href="mailto:ceo@arventaventures.online" className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                  ceo@arventaventures.online
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-[2.5rem] transform -rotate-2 scale-[1.02] border border-slate-700/50"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700/50 bg-slate-900 aspect-[4/5] w-full max-w-md mx-auto group">
                <img 
                  src="https://i.ibb.co/ymz2pCf6/1780219901430.png" 
                  alt="Jaydeb Jana - CEO"
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">Jaydeb Jana</h3>
                      <p className="text-orange-400 font-medium text-lg mb-2">Founder & CEO</p>
                      <a href="mailto:ceo@arventaventures.online" className="inline-flex items-center text-xs sm:text-sm text-slate-300 hover:text-orange-400 transition-colors bg-slate-950/60 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
                        <Mail className="w-3.5 h-3.5 mr-2 text-orange-500 shrink-0" />
                        ceo@arventaventures.online
                      </a>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 backdrop-blur-md flex items-center justify-center border border-orange-500/30">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mindset Section */}
      <Section className="py-24 bg-slate-950 relative border-b border-slate-800 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Architecting <br/><span className="text-slate-500">Digital Growth</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                <p>
                  As the Founder and CEO of Arventa Ventures, my mission is to redefine how brands scale in the digital age. At just 17, I've cultivated a deep passion for digital innovation and software engineering, merging technical prowess with strategic marketing.
                </p>
                <p>
                  We don't just run ads; we build comprehensive digital ecosystems. By leveraging advanced data analytics, creative brilliance, and cutting-edge technology, we ensure our partners dominate their respective markets.
                </p>
                <p>
                  My philosophy is simple: relentless execution paired with data-driven precision yields compounding results.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                <img 
                  src="https://i.ibb.co/0pgK7VwT/FB-IMG-1786329349374.jpg" 
                  alt="Signature or Logo" 
                  className="h-10 opacity-70 grayscale"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="space-y-4 sm:space-y-6 sm:translate-y-8">
                <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl">
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-4 sm:mb-6" />
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Strategy</h4>
                  <p className="text-slate-400 text-sm">Long-term vision over short-term hacks.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-4 sm:mb-6" />
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Growth</h4>
                  <p className="text-slate-400 text-sm">Exponential scaling via algorithmic alignment.</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-6 sm:p-8 rounded-3xl border border-orange-400 shadow-2xl shadow-orange-500/20">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-4 sm:mb-6" />
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Excellence</h4>
                  <p className="text-white/90 text-sm">Uncompromising quality in every campaign.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-4 sm:mb-6" />
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Partnership</h4>
                  <p className="text-slate-400 text-sm">Your success is our baseline metric.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Quote className="w-16 h-16 text-orange-500/40 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-12">
            "Innovation isn't just about using new tools; it's about fundamentally reshaping the way a brand interacts with its audience."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 mb-4">
              <img 
                src="https://i.ibb.co/ymz2pCf6/1780219901430.png" 
                alt="Jaydeb Jana" 
                referrerPolicy="no-referrer"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"; }}
                className="w-full h-full object-cover" 
              />
            </div>
            <h4 className="text-white font-bold text-lg">Jaydeb Jana</h4>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">CEO, Arventa Ventures</p>
          </div>
        </div>
      </section>
    </div>
  );
}
