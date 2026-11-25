import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
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
  Zap,
  ChevronDown,
  Check,
  X,
  Star,
  Users,
  Compass,
  DollarSign,
  HelpCircle,
  Clock,
  Layers,
  FileCheck2,
  Calendar,
  Calculator,
  Globe,
  Radio,
  SlidersHorizontal,
  Code2,
  CheckCircle,
  Briefcase,
  Store,
  ChevronRight,
  Target
} from "lucide-react";
import { topLocationsMap, type LocationDetailedItem } from "@/src/data/topLocationsDetailedData";
import { SEO } from "@/src/components/common/SEO";

const sectorMultipliers: Record<string, { roas: number; margin: number; cpl: number; name: string }> = {
  retail: { roas: 5.2, margin: 0.35, cpl: 180, name: "Retail & Jewelry Showroom" },
  clinic: { roas: 4.8, margin: 0.55, cpl: 220, name: "Specialized Clinic & Diagnostics" },
  resort: { roas: 5.8, margin: 0.45, cpl: 310, name: "Coastal Resort & Tourism" },
  aqua: { roas: 6.2, margin: 0.28, cpl: 450, name: "Aqua-feed & Seafood Export" },
  realestate: { roas: 7.5, margin: 0.22, cpl: 650, name: "Real Estate & Commercial" },
  coaching: { roas: 4.5, margin: 0.60, cpl: 150, name: "Coaching & Education Academy" }
};

export default function LocationTemplate() {
  const { city } = useParams<{ city: string }>();
  const [monthlyBudget, setMonthlyBudget] = useState<number>(75000);
  const [selectedSector, setSelectedSector] = useState<string>("retail");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checkedAuditItems, setCheckedAuditItems] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true
  });

  const cleanSlug = (city || "contai").toLowerCase().trim();
  const loc: LocationDetailedItem | undefined = topLocationsMap[cleanSlug];

  const [selectedZoneId, setSelectedZoneId] = useState<string>(
    loc && loc.commercialZones && loc.commercialZones.length > 0 ? loc.commercialZones[0].id : ""
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (loc && loc.commercialZones && loc.commercialZones.length > 0) {
      setSelectedZoneId(loc.commercialZones[0].id);
    }
  }, [city, loc]);

  const toggleAudit = (idx: number) => {
    setCheckedAuditItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // If not one of the top locations, redirect cleanly to /location/contai
  if (!loc) {
    return <Navigate to="/location/contai" replace />;
  }

  const activeSector = sectorMultipliers[selectedSector] || sectorMultipliers.retail;

  // Dynamic Financial Modeling Calculations
  const calculatedMetrics = useMemo(() => {
    const estimatedRev = Math.round(monthlyBudget * activeSector.roas);
    const estimatedProfit = Math.round(estimatedRev * activeSector.margin);
    const estimatedLeads = Math.round(monthlyBudget / activeSector.cpl);
    const cacReduction = 48;
    return { estimatedRev, estimatedProfit, estimatedLeads, cacReduction };
  }, [monthlyBudget, activeSector]);

  const activeZone = useMemo(() => {
    if (!loc.commercialZones || loc.commercialZones.length === 0) return null;
    return loc.commercialZones.find(z => z.id === selectedZoneId) || loc.commercialZones[0];
  }, [loc.commercialZones, selectedZoneId]);

  const auditItems = [
    { title: "Sub-Second Mobile LCP Speed", desc: "Landing pages load under 0.8s on 4G cellular across " + loc.name + "." },
    { title: "Server-Side Meta CAPI Event Stream", desc: "Bypassing iOS cookie blockers with 9.2+ Event Match Quality score." },
    { title: "Localized Semantic Schema Markup", desc: "Complete LocalBusiness and geo-targeting schema indexed on Google." },
    { title: "High-Hook Native Creative Video", desc: "Social reels scripted in authentic Bengali & English built for high conversion." },
    { title: "Click-to-WhatsApp Instant CRM Lead Routing", desc: "Automated instant lead notification directly to your regional sales team." },
    { title: "Bank-Grade SSL & DDoS Edge Shield", desc: "Cloudflare Enterprise edge caching and WAF protecting your web infrastructure." },
    { title: "Local Google Maps Top 3 Placement", desc: "Forensic citation and Google Business Profile optimization for " + loc.name + "." },
    { title: "100% Commercial IP Transfer", desc: "Full client ownership of all codebases, ad accounts, and media assets." }
  ];

  const localSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Arventa Ventures - Best Digital Marketing & Web Development in ${loc.name}`,
      "alternateName": [`Arventa ${loc.name}`, `Digital Marketing Agency in ${loc.name}`, `Web Development Company in ${loc.name}`],
      "description": loc.heroSubtitle,
      "url": `https://arventaventures.online/location/${loc.id}`,
      "telephone": "+917872490719",
      "email": "info@arventaventures.online",
      "hasMap": loc.gmbLink || "https://share.google/9g673CLWFHS9j6tb9",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": loc.officeAddress || (loc.isGlobalHq ? "Purba Gopinathpur, Chapatala More" : "Executive Service Hub"),
        "addressLocality": loc.name,
        "addressRegion": "West Bengal",
        "postalCode": loc.pinCodes[0],
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": loc.name
      },
      "sameAs": [
        "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
        "https://www.instagram.com/arventaventures/",
        "https://share.google/9g673CLWFHS9j6tb9"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://arventaventures.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://arventaventures.online/location/contai"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${loc.name} (${loc.bengaliName || loc.name})`,
          "item": `https://arventaventures.online/location/${loc.id}`
        }
      ]
    },
    ...(loc.faqs && loc.faqs.length > 0 ? [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": loc.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ] : [])
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      <SEO
        title={`Best Digital Marketing Agency in ${loc.name} | Web Dev & Meta Ads | Arventa Ventures`}
        description={loc.heroSubtitle}
        keywords={`best digital marketing agency in ${loc.name.toLowerCase()}, digital marketing agency in ${loc.bengaliName || loc.name}, web development company in ${loc.name.toLowerCase()}, app development company in ${loc.name.toLowerCase()}, website design ${loc.name}, software company in ${loc.name.toLowerCase()}, meta ads agency ${loc.name}, SEO agency ${loc.name}, local SEO ${loc.name}, best agency in ${loc.district}, Arventa Ventures, কাঁথির সেরা ডিজিটাল মার্কেটিং এজেন্সী`}
        canonicalUrl={`/location/${loc.id}`}
        structuredData={localSchema}
      />

      {/* =========================================================================
          SECTION 1: CINEMATIC LOCAL HERO SECTION
         ========================================================================= */}
      <section className="relative py-16 md:py-28 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-500/15 via-orange-900/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/10">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping mr-1" />
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{loc.badge}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">{loc.district}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                {loc.heroTitle} <span className="text-orange-500">({loc.bengaliName})</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {loc.heroSubtitle}
              </p>

              {/* Conversion Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button size="lg" className="w-full sm:w-auto rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-transform active:scale-95 justify-center" asChild>
                  <Link to="/contact">
                    Claim Free {loc.name} Growth Audit <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-slate-900/80 border-slate-700 hover:bg-slate-800 text-white h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold justify-center" asChild>
                  <a href={`https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20scaling%20my%20business%20in%20${encodeURIComponent(loc.name)}.`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" /> WhatsApp Direct (+91 7872490719)
                  </a>
                </Button>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-orange-500" /> 100% Commercial Code Ownership
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-orange-500" /> Direct Founder Jaydeb Jana Access
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Zap className="w-4 h-4 text-orange-500" /> Sub-0.7s Mobile React 19 Speed
                </span>
              </div>
            </motion.div>

            {/* Right Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-slate-900 group">
                <div className="aspect-video sm:aspect-[4/3] overflow-hidden relative">
                  <img
                    src={loc.heroImage}
                    alt={`${loc.name} Digital Marketing Headquarters`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Glass Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs">
                    <span className="flex items-center gap-2 font-bold text-orange-400">
                      <Sparkles className="w-4 h-4" /> Arventa Verified Hub
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {loc.isGlobalHq ? "Global Headquarters" : "Active Regional Hub"}
                    </span>
                  </div>

                  {/* Bottom Stats Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">{loc.stats[0]?.label}</div>
                        <div className="text-2xl font-black text-white">{loc.stats[0]?.value}</div>
                        <div className="text-[11px] text-slate-400">{loc.stats[0]?.sub}</div>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Location Pin Link Card */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {loc.isGlobalHq ? "Chapatala More, Contai (Global HQ)" : `${loc.name} Operations Hub`}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {loc.officeAddress || "Purba Gopinathpur, Chapatala More, Contai, WB 721401"}
                    </div>
                  </div>
                </div>
                <a
                  href={loc.gmbLink || "https://share.google/9g673CLWFHS9j6tb9"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg shrink-0"
                  title="View Verified Google Profile"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CONTAI HQ / REGIONAL OPERATING BANNER
         ========================================================================= */}
      <section className="py-6 bg-slate-900/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-orange-400 shrink-0" />
            <div className="text-left text-xs">
              <span className="font-bold text-white">
                {loc.isGlobalHq ? "Arventa Ventures Global Headquarters:" : `Dedicated ${loc.name} Regional Client Pod:`}
              </span>{" "}
              <span className="text-slate-400">
                {loc.officeAddress || (loc.isGlobalHq 
                  ? "Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, WB 721401" 
                  : `Directed from our Contai Global Headquarters serving all ${loc.name} commercial sectors.`)}
              </span>
            </div>
          </div>
          <a
            href={loc.gmbLink || "https://share.google/9g673CLWFHS9j6tb9"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/30 text-xs font-bold transition-all shrink-0"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Verified Google Business Profile (5.0 ★)</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: KEY PERFORMANCE METRICS TICKER
         ========================================================================= */}
      <section className="py-12 border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {loc.stats.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white">{s.label}</div>
                <div className="text-[11px] text-slate-400 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INTERACTIVE COMMERCIAL CORRIDORS & MICRO-ZONES EXPLORER
         ========================================================================= */}
      {loc.commercialZones && loc.commercialZones.length > 0 && activeZone && (
        <Section className="py-24 border-b border-slate-900 bg-slate-950">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 mr-2" />
              <span>Micro-Geographic Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Commercial Corridors & Micro-Zones in {loc.name}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              We deploy custom customer acquisition architectures tailored specifically to the consumer demographics and trade dynamics of each major business district across {loc.name}.
            </p>

            {/* Zone Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {loc.commercialZones.map((z) => {
                const isActive = z.id === activeZone.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => setSelectedZoneId(z.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 border-orange-400" 
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-orange-400"}`} />
                    <span>{z.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Detail Showcase Card */}
          <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-orange-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-white">{activeZone.name}</span>
                    <span className="text-lg sm:text-xl font-bold text-orange-400 font-serif">({activeZone.bengaliZone})</span>
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold text-orange-400">
                    {activeZone.subtitle}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {activeZone.desc}
                </p>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Winning Growth Funnel Architecture:
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    {activeZone.funnel}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Targeted Local Search Keywords & Citations:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeZone.keywords.map((kw, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lift Metric & Action */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Verified Local Impact
                </div>
                <div className="text-3xl sm:text-4xl font-black text-orange-500">
                  {activeZone.lift}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Average client performance increase verified in this commercial sector.
                </div>
                <Button asChild className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 text-xs">
                  <Link to="/contact">
                    Scale In {activeZone.name} <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* =========================================================================
          SECTION 5: BESPOKE VISUAL OPERATIONS SHOWCASE (CONTAI PHOTO GALLERY)
         ========================================================================= */}
      {loc.visualShowcase && loc.visualShowcase.length > 0 && (
        <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              <span>In-House Infrastructure & Production</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Inside Our {loc.name} Operations & Creative Studios
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Unlike middleman marketing agencies that outsource your work to unknown third parties, Arventa Ventures executes every line of code, ad campaign, and video shoot directly from our own facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
            {loc.visualShowcase.map((item, i) => (
              <div 
                key={i} 
                className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-orange-400">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Verified {loc.name} In-House Facility
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* =========================================================================
          SECTION 6: LOCAL MARKET PROBLEM & PARADIGM SHIFT
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs uppercase tracking-wider mb-4">
              <span>{loc.name} Commercial Reality</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Why Businesses in {loc.name} Struggle with Outdated Marketing
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Local market nuances cannot be solved by generic Facebook boost buttons or amateur freelancers who lack technical software and server-side tracking capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/40">
              <div className="flex items-center gap-3 text-red-400 font-bold text-lg mb-4">
                <X className="w-6 h-6 p-1 rounded-full bg-red-500/20" />
                <span>The Traditional Local Trap</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {loc.marketProblem}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg mb-4">
                <Check className="w-6 h-6 p-1 rounded-full bg-emerald-500/20" />
                <span>The Arventa Growth Standard</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {loc.marketSolution}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 7: TARGET INDUSTRIES WITH SECTOR SPECIFIC ROI CALCULATOR
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 mr-2" />
            <span>Interactive Financial Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Calculate Your {loc.name} Market Revenue Potential
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Select your industry sector and slide your monthly growth budget to forecast verified customer acquisition and pipeline revenue in {loc.name}.
          </p>

          {/* Industry Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {Object.entries(sectorMultipliers).map(([key, item]) => {
              const isSelected = selectedSector === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSector(key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 border-orange-400"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Calculator Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
              <div>
                <label htmlFor="budget-slider" className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider block">
                  Monthly Growth Budget ({loc.name}):
                </label>
                <span className="text-xs text-orange-400 font-medium">Selected: {activeSector.name}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-orange-400 font-mono tracking-tight whitespace-nowrap">
                ₹{monthlyBudget.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              id="budget-slider"
              type="range"
              min="25000"
              max="1000000"
              step="25000"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-2 font-medium">
              <span>₹25,000 <span className="hidden xs:inline sm:inline text-slate-500">(Clinic / Retail)</span></span>
              <span>₹2,50,000 <span className="hidden xs:inline sm:inline text-slate-500">(Regional)</span></span>
              <span>₹10,00,000+ <span className="hidden xs:inline sm:inline text-slate-500">(Enterprise)</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-800 shadow-md">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 mb-1 tracking-tight truncate">
                ₹{calculatedMetrics.estimatedRev.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Projected Revenue</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">~{activeSector.roas}x Sector ROAS</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-800 shadow-md">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-orange-400 mb-1 tracking-tight truncate">
                ₹{calculatedMetrics.estimatedProfit.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Gross Margin Yield</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">At {Math.round(activeSector.margin * 100)}% Margin</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-800 shadow-md">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-blue-400 mb-1 tracking-tight truncate">
                {calculatedMetrics.estimatedLeads}+
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">{loc.name} Leads</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">High-intent buyers</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-800 shadow-md">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 mb-1 tracking-tight truncate">
                -{calculatedMetrics.cacReduction}%
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Target CAC Cut</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">Via sub-second CAPI</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              * Modeled on historical performance in {loc.district}. Detailed local proposal provided during audit.
            </span>
            <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-11 px-6 text-xs shrink-0">
              <Link to="/contact">Claim Audit for This Budget</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 8: 90-DAY DOMINATION ROADMAP
         ========================================================================= */}
      {loc.roadmapPhases && loc.roadmapPhases.length > 0 && (
        <Section className="py-24 border-b border-slate-900 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 mr-2" />
              <span>Structured Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              The 90-Day {loc.name} Market Domination Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              A transparent, phase-by-phase framework engineered to take your business from local obscurity to dominant market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
            {loc.roadmapPhases.map((phase, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-orange-400 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {phase.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {phase.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Milestones:</div>
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* =========================================================================
          SECTION 9: VERIFIED LOCAL CLIENT TESTIMONIALS & CASE STUDIES
         ========================================================================= */}
      {loc.clientTestimonials && loc.clientTestimonials.length > 0 && (
        <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 mr-2" />
              <span>Verified Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              What Business Owners in {loc.name} Say
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Real feedback from local enterprise leaders, medical clinics, and retail showrooms who scaled with Arventa Ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
            {loc.clientTestimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-orange-400">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      {t.result}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6 font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-orange-400">{t.company}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-orange-400" /> {t.location}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* =========================================================================
          SECTION 10: CORE DELIVERABLES FOR THIS LOCATION
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 mr-2" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Full-Funnel Services Deployed in {loc.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We deliver complete full-stack code, algorithmic paid media, and cinematic video assets under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
          {loc.deliverables.map((d, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 11: HYPER-LOCAL NEIGHBORHOODS & PIN CODES
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 mr-2" />
            <span>Geographic Targeting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Neighborhoods & Pin Codes We Serve in {loc.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Forensic local SEO and radius-targeted ad delivery across all primary commercial zones in {loc.name}.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" /> Key Commercial Neighborhoods
            </h3>
            <div className="flex flex-wrap gap-2">
              {loc.keyNeighborhoods.map((n) => (
                <span key={n} className="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-medium">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Radio className="w-4 h-4 text-orange-500" /> Primary Postal Pin Codes
            </h3>
            <div className="flex flex-wrap gap-2">
              {loc.pinCodes.map((p) => (
                <span key={p} className="text-xs font-mono px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold">
                  PIN: {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 12: COMPETITIVE COMPARISON MATRIX
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5 mr-2" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Arventa Ventures vs The Alternatives in {loc.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Compare our full-stack engineering and dedicated accountability against local freelancers and distant agencies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
          <div className="block sm:hidden text-[11px] text-orange-400 font-medium mb-2 text-right">
            ← Scroll horizontally to compare all features →
          </div>
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-4 px-4 font-bold uppercase tracking-wider">Evaluation Vector</th>
                <th className="py-4 px-4 font-black text-orange-400 text-base">Arventa Ventures</th>
                <th className="py-4 px-4 font-medium">Local Freelancer</th>
                <th className="py-4 px-4 font-medium">Traditional Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {loc.comparison.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                  <td className="py-4 px-4 font-bold text-orange-400 bg-orange-500/5">{row.arventa}</td>
                  <td className="py-4 px-4 text-slate-400">{row.localFreelancer}</td>
                  <td className="py-4 px-4 text-slate-400">{row.traditionalAgency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 13: LOCAL SEO DEEP DIVE ARTICLE & PLAYBOOK
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            <span>Regional Authority Guide & Playbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
            {loc.seoArticle.title}
          </h2>
          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {loc.seoArticle.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">{sec.heading}</h3>
                <p>{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 14: 20-POINT QUALITY & SECURITY AUDIT CHECKLIST
         ========================================================================= */}
      <Section className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <FileCheck2 className="w-3.5 h-3.5 mr-2" />
            <span>Interactive Audit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            The Arventa Execution Standard for {loc.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Every digital asset deployed for your {loc.name} business must pass our rigorous 8-vector technical audit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
          {auditItems.map((item, i) => {
            const isChecked = !!checkedAuditItems[i];
            return (
              <div
                key={i}
                onClick={() => toggleAudit(i)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isChecked 
                    ? "bg-slate-900/90 border-orange-500/40 shadow-lg shadow-orange-500/5" 
                    : "bg-slate-900/40 border-slate-800 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isChecked ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-500"
                  }`}>
                    {isChecked ? <Check className="w-3.5 h-3.5" /> : (i + 1)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">VECTOR 0{i + 1}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Passed 8 of 8 Quality Vectors for {loc.name} Deployment</span>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 15: FREQUENTLY ASKED QUESTIONS
         ========================================================================= */}
      <Section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-2" />
            <span>Local FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Frequently Asked Questions for {loc.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Answers to common questions regarding timelines, pricing, local office visits, and campaign management in {loc.name}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {loc.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>

      {/* =========================================================================
          SECTION 16: FOUNDER JAYDEB JANA PERSONAL COMMITMENT BANNER
         ========================================================================= */}
      <Section className="py-20 border-b border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="shrink-0 text-center">
              <img
                src="/images/jaydeb-jana-executive-avatar.webp"
                alt="Jaydeb Jana - Founder & CEO, Arventa Ventures"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-orange-500 shadow-xl mx-auto sm:mx-0 mb-3"
              />
              <div className="text-sm font-bold text-white">Jaydeb Jana</div>
              <div className="text-xs text-orange-400">Founder & CEO, Arventa Ventures</div>
            </div>
            <div className="text-left space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                "My Personal Commitment to Every {loc.name} Partner"
              </h3>
              <p>
                Whether your business operates right here near our Global Headquarters in Contai, or in the commercial centers of Kolkata, New Town, Siliguri, or Durgapur — we hold ourselves directly accountable to your net profit.
              </p>
              <p>
                We do not sell empty vanity metrics. We deploy sub-second software code, algorithmic paid acquisition, and local search dominance that converts everyday residents into loyal, paying customers.
              </p>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-orange-400">
                  Jaydeb Jana — Contai, Purba Medinipur
                </div>
                <a
                  href={`https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20would%20like%20to%20connect%20regarding%20my%20business%20in%20${encodeURIComponent(loc.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold"
                >
                  <MessageCircle className="w-4 h-4" /> Message Jaydeb Directly (+91 7872490719)
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================================
          SECTION 17: HIGH-CONVERTING CLOSING CALL-TO-ACTION
         ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Scale In {loc.name}?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Stop Guessing. Start Dominating {loc.name}.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-10 font-light leading-relaxed">
            Partner with West Bengal's leading performance marketing and software engineering agency to acquire customers predictably.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-10 text-sm sm:text-base rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl shadow-orange-500/25 transition-transform active:scale-95 justify-center">
              <Link to="/contact">Claim Free {loc.name} Strategy Audit <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 shrink-0" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-base rounded-full bg-slate-900/80 border-slate-700 hover:bg-slate-800 text-white font-semibold justify-center">
              <a href={`https://wa.me/917872490719?text=Hello%20Jaydeb,%20I%20am%20interested%20in%20digital%20marketing%20in%20${encodeURIComponent(loc.name)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 shrink-0" /> WhatsApp Direct (+91 7872490719)
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
