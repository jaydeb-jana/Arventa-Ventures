import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Award,
  Zap
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

// Top 10 High-Opportunity Strategic Commercial & Tech Hubs in West Bengal
export interface TopLocationItem {
  id: string;
  name: string;
  slug: string;
  badge: string;
  tagline: string;
  opportunityScore: string;
  keySectors: string[];
  isHq?: boolean;
}

const top10Locations: TopLocationItem[] = [
  {
    id: "contai",
    name: "Contai",
    slug: "contai",
    badge: "Global Headquarters",
    tagline: "Executive agency headquarters, coastal commercial trade, healthcare & expanding retail enterprises.",
    opportunityScore: "99/100",
    keySectors: ["Agency HQ", "Healthcare", "Coastal Trade", "Retail"],
    isHq: true
  },
  {
    id: "kolkata",
    name: "Kolkata",
    slug: "kolkata",
    badge: "State Capital & Financial Core",
    tagline: "Metropolitan corporate headquarters, large D2C brands, luxury real estate, and finance.",
    opportunityScore: "99/100",
    keySectors: ["D2C Ecommerce", "Corporate", "Real Estate", "Finance"]
  },
  {
    id: "new-town",
    name: "New Town",
    slug: "new-town",
    badge: "IT & Startup Powerhouse",
    tagline: "Bengal's premier Silicon Valley — IT parks, SaaS companies, fintech startups, and global MNCs.",
    opportunityScore: "98/100",
    keySectors: ["SaaS & Tech", "Startups", "Enterprise IT", "AI Services"]
  },
  {
    id: "siliguri",
    name: "Siliguri",
    slug: "siliguri",
    badge: "Gateway to North Bengal",
    tagline: "The commercial lifeline connecting Northeast India, booming in hospitality, FMCG, tea trade & logistics.",
    opportunityScore: "96/100",
    keySectors: ["Hospitality", "Logistics", "Wholesale Trade", "Healthcare"]
  },
  {
    id: "durgapur",
    name: "Durgapur",
    slug: "durgapur",
    badge: "Industrial Smart City",
    tagline: "Steel city industrial corridor with massive multi-specialty hospitals, engineering, and education.",
    opportunityScore: "95/100",
    keySectors: ["Industrial Tech", "Hospitals", "Education", "Manufacturing"]
  },
  {
    id: "asansol",
    name: "Asansol",
    slug: "asansol",
    badge: "Commercial Megacity",
    tagline: "West Bengal's second-largest metropolitan area with dense retail commerce, manufacturing & distribution.",
    opportunityScore: "94/100",
    keySectors: ["Commercial Retail", "Heavy Industry", "Distribution", "Automotive"]
  },
  {
    id: "howrah",
    name: "Howrah",
    slug: "howrah",
    badge: "Manufacturing & Logistics Hub",
    tagline: "Historic engineering heartland with massive supply chain infrastructure, transport & industrial B2B.",
    opportunityScore: "94/100",
    keySectors: ["B2B Manufacturing", "Logistics", "Export Trade", "Hardware"]
  },
  {
    id: "kharagpur",
    name: "Kharagpur",
    slug: "kharagpur",
    badge: "Tech & Industrial Corridor",
    tagline: "Academic tech innovation centered around IIT Kharagpur paired with rapid industrial park expansion.",
    opportunityScore: "93/100",
    keySectors: ["Deep Tech", "Industrial Park", "Higher Ed", "Engineering"]
  },
  {
    id: "haldia",
    name: "Haldia",
    slug: "haldia",
    badge: "Port & Petrochemical Capital",
    tagline: "International maritime shipping port with heavy petrochemical, refinery, and global import-export corporations.",
    opportunityScore: "92/100",
    keySectors: ["Maritime Port", "Petrochemicals", "Import/Export", "Energy"]
  },
  {
    id: "bardhaman",
    name: "Bardhaman",
    slug: "bardhaman",
    badge: "Agro-Business & Regional Trade",
    tagline: "Crucial central trading junction driving agricultural processing, regional clinics, and fast-growing businesses.",
    opportunityScore: "91/100",
    keySectors: ["Agro-Processing", "Regional Trade", "Clinics", "Consumer Goods"]
  }
];

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top 10 High-Growth Business Locations in West Bengal - Arventa Ventures",
    "description": "Arventa Ventures serves the top 10 commercial, tech, and industrial hubs of West Bengal with high-ROAS Meta Ads, SEO, and sub-second website development.",
    "itemListElement": top10Locations.map((loc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": `Digital Marketing & Web Development in ${loc.name}, West Bengal`,
        "url": `https://arventaventures.online/location/${loc.slug}`
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arventa Ventures (Global Headquarters)",
    "url": "https://arventaventures.online/locations",
    "telephone": "+917872490719",
    "email": "info@arventaventures.online",
    "hasMap": "https://share.google/9g673CLWFHS9j6tb9",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Purba Gopinathpur, Chapatala More",
      "addressLocality": "Contai",
      "addressRegion": "West Bengal",
      "postalCode": "721442",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      <SEO
        title="Top 10 Strategic Locations in West Bengal | High-Growth Digital Agency | Arventa Ventures"
        description="Discover Arventa Ventures' Top 10 high-opportunity operating hubs in West Bengal: Contai (HQ), Kolkata, New Town, Siliguri, Durgapur, Asansol, Howrah, Kharagpur, Haldia, and Bardhaman."
        keywords="Digital Marketing West Bengal, Top 10 Agency Locations, Kolkata Meta Ads, Contai Web Development, New Town SEO Agency, Siliguri Digital Marketing, Durgapur Performance Marketing, Arventa Ventures"
        canonicalUrl="/locations"
        structuredData={[locationsSchema, localBusinessSchema]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-slate-950 to-slate-950 pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/10 rounded-full blur-[140px] -z-10" />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>West Bengal Strategic Focus Markets</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Top 10 High-Growth Hubs in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                West Bengal
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              We focus our elite engineering and performance marketing horsepower where commercial opportunity, capital allocation, and business growth potential are highest.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25">
                <Link to="/contact">Claim Local Strategy Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-slate-700 hover:bg-slate-900 text-slate-200 font-semibold">
                <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20scaling%20my%20business%20in%20West%20Bengal." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTAI GLOBAL HEADQUARTERS SPOTLIGHT CARD */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-orange-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Global Headquarters • Contai</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Arventa Ventures Executive & Engineering Hub
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721442
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open Everyday (9 AM - 9 PM IST)
                  </span>
                  <span>•</span>
                  <a href="tel:+917872490719" className="hover:text-orange-400 font-medium transition-colors">
                    +91 7872490719
                  </a>
                  <span>•</span>
                  <a href="mailto:info@arventaventures.online" className="hover:text-orange-400 font-medium transition-colors">
                    info@arventaventures.online
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="https://share.google/9g673CLWFHS9j6tb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Verified Google Business Profile</span>
                </a>
                <Link
                  to="/location/contai"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <span>Explore Contai Hub Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS TICKER */}
      <section className="py-10 border-b border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">Top 10</div>
              <div className="text-xs sm:text-sm font-bold text-white">Curated Bengal Markets</div>
              <div className="text-[11px] text-slate-400 mt-1">Driving 90%+ of state business growth</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">Contai</div>
              <div className="text-xs sm:text-sm font-bold text-white">Global Headquarters</div>
              <div className="text-[11px] text-slate-400 mt-1">Executive center in Purba Medinipur</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">Bilingual</div>
              <div className="text-xs sm:text-sm font-bold text-white">Bengali & English Mastery</div>
              <div className="text-[11px] text-slate-400 mt-1">Authentic copy converting local buyers</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">Top 1%</div>
              <div className="text-xs sm:text-sm font-bold text-white">Local Maps Dominance</div>
              <div className="text-[11px] text-slate-400 mt-1">High-intent Google search rankings</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOP 10 FEATURED HUBS GRID */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Highest Economic Opportunity</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              The 10 High-Growth Markets of West Bengal
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Click on any location below to explore customized market data, client success blueprints, and local digital services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {top10Locations.map((loc, idx) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  loc.isHq
                    ? "bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 border-orange-500/60 shadow-xl shadow-orange-500/10 hover:border-orange-500"
                    : "bg-slate-900/80 border-slate-800 hover:border-orange-500/50 hover:bg-slate-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${
                        loc.isHq
                          ? "bg-orange-500 text-white"
                          : "bg-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors"
                      }`}>
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-400 transition-colors">
                          {loc.name}
                        </h3>
                        <div className="text-[11px] text-orange-400 font-bold uppercase tracking-wider">
                          {loc.badge}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-black text-emerald-400">{loc.opportunityScore}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Growth Index</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {loc.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {loc.keySectors.map((sector) => (
                      <span
                        key={sector}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 font-medium"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span>West Bengal, India</span>
                  </span>

                  <Link
                    to={`/location/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:text-orange-300 hover:underline transition-colors"
                  >
                    <span>View {loc.name} Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. WHY ARVENTA FOCUSES ON THESE 10 HUBS */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 mr-2" />
            <span>Economic Precision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Why We Focus on West Bengal's Top 10 Hubs
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Instead of spreading marketing resources thin over low-intent areas, we concentrate firepower where commercial density and returns are maximized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
          {[
            {
              title: "Capital Concentration",
              desc: "These 10 economic corridors account for over 92% of corporate, consumer, and industrial marketing budgets in Bengal."
            },
            {
              title: "High-Intent Local SEO",
              desc: "Commercial search volume for high-ticket services is up to 14x higher in these specific urban and industrial belts."
            },
            {
              title: "Sub-Second Edge Infrastructure",
              desc: "Engineered with localized edge caching so your React web applications load instantaneously across all 10 hubs."
            },
            {
              title: "Direct Founder Access",
              desc: "Consult directly with Jaydeb Jana and our senior engineering team to craft your bespoke local growth engine."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. CLOSING CALL-TO-ACTION */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scale In West Bengal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Ready to Dominate Your Regional Market?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-10 font-light leading-relaxed">
            Partner with Bengal's leading performance marketing and software engineering partner to acquire profitable customers predictably.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25">
              <Link to="/contact">Get Free Local Strategy Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border-slate-700 hover:bg-slate-900 text-white font-semibold">
              <a href="https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20scaling%20my%20business%20in%20West%20Bengal." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" /> WhatsApp Direct (+91 7872490719)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
