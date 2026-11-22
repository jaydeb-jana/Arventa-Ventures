import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Star,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronDown,
  Award,
  BarChart3,
  Target,
  Zap,
  X,
  Send,
  Search,
  Filter,
  ArrowUpRight,
  Calculator,
  Calendar,
} from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { SEO } from "@/src/components/common/SEO";
import { portfolio, PortfolioItem } from "@/src/data";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [spotlightTab, setSpotlightTab] = useState<"challenge" | "solution" | "results">("solution");

  // Interactive ROI Calculator State
  const [calcBudget, setCalcBudget] = useState(75000);
  const [calcChannel, setCalcChannel] = useState<"meta" | "google" | "full">("meta");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // In-Page Consultation & Proposal Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Paid Ads Scaling (Meta / Google)",
    budget: "₹50,000 - ₹1,50,000 / month",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Category List
  const rawCategories = Array.from(new Set(portfolio.map((item) => item.category)));
  const categories = ["All", ...rawCategories];

  // Filtered & Searched Portfolio Items
  const filteredPortfolio = portfolio.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deliverables.some((d) =>
        d.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Spotlight Item Selection (Nova Fashion Studio or Elite Dental Care)
  const spotlightCandidates = portfolio.filter((p) => p.featured || p.id === 2 || p.id === 6);
  const currentSpotlight = spotlightCandidates[spotlightIndex] || portfolio[1];

  // Dynamic ROI Calculator computations
  const getMultiplier = () => {
    if (calcChannel === "meta") return 4.5;
    if (calcChannel === "google") return 4.8;
    return 5.2; // Full funnel hybrid
  };
  const projectedRevenue = Math.round(calcBudget * getMultiplier());
  const estimatedConversions = Math.round(projectedRevenue / 1850);
  const estimatedCpaSaving = calcChannel === "full" ? "38%" : "30%";

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Portfolio Consultation Request - Arventa Ventures*
*Name:* ${formData.name}
*Brand / Company:* ${formData.company || "Not provided"}
*Phone / WhatsApp:* ${formData.phone}
*Work Email:* ${formData.email}
*Service Requested:* ${formData.service}
*Monthly Ad Budget:* ${formData.budget}

*Project Objectives:*
${formData.message || "Looking to discuss scalable growth strategies and free audit."}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917872490719?text=${encoded}`;
    setIsFormSubmitted(true);

    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      const win = window.open(whatsappUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Arventa Ventures Portfolio & Case Studies",
    description:
      "Explore verified case studies, client success stories, and multi-channel performance marketing results across India and global markets.",
    url: "https://arventaventures.online/portfolio",
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-600 dark:selection:text-orange-200">
      <SEO
        title="Our Case Studies & Portfolio | Verified Client Growth & ROAS"
        description="Explore Arventa Ventures' portfolio of real digital marketing results, e-commerce scale-ups, high-ROAS Meta Ads campaigns, and organic SEO ranking case studies."
        keywords="Digital Marketing Portfolio, Meta Ads Case Studies, SEO Success Stories, E-commerce Growth, Arventa Ventures Work, Performance Marketing India"
        canonicalUrl="/portfolio"
        structuredData={portfolioSchema}
      />



      {/* 2. HERO SECTION & AGENCY KPI TICKER */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-card/60 via-background to-background">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-10 right-10 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 shadow-inner"
          >
            <ShieldCheck size={16} className="text-orange-500" />
            <span>Verified Track Record • Zero Fluff Marketing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.1] mb-6"
          >
            Real Businesses. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 dark:from-orange-400 dark:via-orange-500 dark:to-amber-300">Predictable Scale.</span> Measurable Impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We don’t sell vanity impressions or generic templates. We engineer high-ROAS Meta Ads pipelines, local Google search monopolies, and conversion-first creative engines that turn ad spend into profitable enterprise revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#portfolio-grid"
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 group"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#consultation-hub"
              className="px-8 py-3.5 bg-card hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-border transition-all flex items-center gap-2 shadow-sm"
            >
              <Calendar size={18} className="text-orange-500" />
              <span>Book Growth Consultation</span>
            </a>
          </motion.div>

          {/* KPI STATS CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                stat: "₹18.4 Cr+",
                label: "Client Revenue Generated",
                subtext: "Across D2C, Retail & Local Brands",
                icon: TrendingUp,
              },
              {
                stat: "4.82x",
                label: "Average Blended ROAS",
                subtext: "Across Active Paid Campaigns",
                icon: BarChart3,
              },
              {
                stat: "120+",
                label: "Growth Sprints Delivered",
                subtext: "100% Custom AI & Human Strategy",
                icon: Target,
              },
              {
                stat: "98.2%",
                label: "Client Retention Rate",
                subtext: "Long-Term Strategic Retainers",
                icon: Award,
              },
            ].map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border hover:border-orange-500/40 rounded-2xl p-5 md:p-6 text-left shadow-sm transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                      {kpi.stat}
                    </span>
                    <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {kpi.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    {kpi.subtext}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED CASE STUDY SPOTLIGHT (FLAGSHIP DEEP DIVE) */}
      <Section className="py-16 md:py-24 bg-slate-50/60 dark:bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2">
                <Sparkles size={14} />
                <span>Featured Growth Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                Inside a High-Velocity Transformation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                A granular, behind-the-scenes look at how we take a brand from plateaued revenue to market domination.
              </p>
            </div>

            {/* Spotlight Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-card dark:bg-background border border-border rounded-full self-start md:self-auto shadow-xs">
              {spotlightCandidates.map((cand, idx) => (
                <button
                  key={cand.id}
                  onClick={() => {
                    setSpotlightIndex(idx);
                    setSpotlightTab("solution");
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    spotlightIndex === idx
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {cand.client}
                </button>
              ))}
            </div>
          </div>

          {/* Spotlight Hero Box */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden bg-slate-950 flex flex-col justify-end p-8">
              <img
                src={currentSpotlight.image}
                alt={currentSpotlight.client}
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
                  <span>{currentSpotlight.category}</span>
                  <span>•</span>
                  <span>{currentSpotlight.duration}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  {currentSpotlight.client}
                </h3>
                <p className="text-sm text-slate-300 mb-6">
                  {currentSpotlight.tagline}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800">
                  {currentSpotlight.metrics.map((m, i) => {
                    const [val, ...rest] = m.split(" ");
                    return (
                      <div key={i} className="text-center">
                        <div className="text-base font-extrabold text-orange-400">
                          {val}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase font-medium">
                          {rest.join(" ")}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content & Playbook Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-card text-card-foreground">
              <div>
                {/* Tab Navigation */}
                <div className="flex border-b border-border mb-6 gap-6">
                  {(["challenge", "solution", "results"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSpotlightTab(tab)}
                      className={`pb-3 text-sm font-bold capitalize transition-all border-b-2 ${
                        spotlightTab === tab
                          ? "border-orange-500 text-orange-600 dark:text-orange-400"
                          : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {tab === "challenge"
                        ? "1. The Challenge"
                        : tab === "solution"
                        ? "2. Arventa Strategy"
                        : "3. Verified Results"}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[160px]">
                  {spotlightTab === "challenge" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                        {currentSpotlight.challenge}
                      </p>
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-600 dark:text-red-300 flex items-start gap-2.5">
                        <Target className="shrink-0 text-red-500 mt-0.5" size={16} />
                        <span>
                          <strong>Core Bottleneck:</strong> Skyrocketing CAC and unpredictable lead quality burning paid media capital with zero scalable attribution.
                        </span>
                      </div>
                    </div>
                  )}

                  {spotlightTab === "solution" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                        {currentSpotlight.solution}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {currentSpotlight.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 rounded-lg"
                          >
                            <CheckCircle2 size={13} className="text-orange-500" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {spotlightTab === "results" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                        {currentSpotlight.results}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {currentSpotlight.detailedMetrics.map((dm, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-background border border-border rounded-xl"
                          >
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">
                              {dm.label}
                            </div>
                            <div className="text-lg font-extrabold text-orange-600 dark:text-orange-400">
                              {dm.value}
                            </div>
                            {dm.before && dm.after && (
                              <div className="text-[10px] text-slate-500 mt-1">
                                {dm.before} → <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{dm.after}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Founder Testimonial Quote */}
                <div className="mt-8 p-5 bg-slate-50 dark:bg-slate-900/60 border border-border rounded-2xl relative">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 italic mb-3">
                    "{currentSpotlight.testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {currentSpotlight.testimonial.author}
                      </span>
                      <span className="text-slate-500 ml-2">
                        {currentSpotlight.testimonial.role}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 size={13} /> Verified Client
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-6 border-t border-border">
                <button
                  onClick={() => setActiveModalItem(currentSpotlight)}
                  className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-full transition-colors flex items-center gap-2 shadow-md shadow-orange-500/20"
                >
                  <span>Open Full Case Study Breakdown</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href={`https://wa.me/917872490719?text=${encodeURIComponent(
                    `Hi Arventa Ventures! I was reading the spotlight case study on "${currentSpotlight.client}" (${currentSpotlight.service}) and would like to achieve similar growth for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <MessageSquare size={16} className="text-emerald-500" />
                  <span>Discuss This Case on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. MAIN INTERACTIVE FILTERABLE PORTFOLIO SHOWCASE */}
      <Section id="portfolio-grid" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Explore All Case Studies & Client Success"
            subtitle="Browse verified campaigns across e-commerce, clinics, luxury real estate, B2B SaaS, and hospitality."
          />

          {/* Search & Category Filter Controls */}
          <div className="space-y-6 mb-12">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, industry, or service..."
                className="w-full pl-11 pr-10 py-3 bg-card border border-border rounded-full text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                      : "bg-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-border hover:border-slate-400 dark:hover:border-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          {filteredPortfolio.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-3xl p-8 max-w-lg mx-auto">
              <Filter size={40} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matching case studies found</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Try searching with different keywords or reset your category filter to "All".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-orange-500 text-white font-bold text-xs rounded-full hover:bg-orange-600 transition-colors shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                  className="group bg-card text-card-foreground border border-border hover:border-orange-500/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.client}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3.5 py-1 bg-slate-950/80 backdrop-blur-md text-orange-400 text-xs font-bold rounded-full border border-orange-500/30 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs font-medium rounded-full border border-slate-800">
                        {item.duration}
                      </span>
                    </div>

                    {/* Overlay Client Tagline at Bottom of Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
                        {item.client}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-3">
                        <Zap size={14} className="text-orange-500" />
                        <span>{item.service}</span>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Highlight Deliverables Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.deliverables.slice(0, 3).map((d, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-background border border-slate-200 dark:border-border text-slate-700 dark:text-slate-300 font-medium"
                          >
                            {d}
                          </span>
                        ))}
                        {item.deliverables.length > 3 && (
                          <span className="text-[11px] px-2 py-0.5 text-slate-500">
                            +{item.deliverables.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metrics Bar */}
                    <div>
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-border mb-6">
                        {item.metrics.map((metric, i) => {
                          const [value, ...rest] = metric.split(" ");
                          return (
                            <div key={i} className="text-center">
                              <div className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                                {value}
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                                {rest.join(" ")}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Interactive Button */}
                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={() => setActiveModalItem(item)}
                          className="w-full py-3 bg-background hover:bg-orange-500 text-slate-800 dark:text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-border hover:border-orange-500 transition-all flex items-center justify-center gap-2 group/btn shadow-xs"
                        >
                          <span>Explore Case Study Deep Dive</span>
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* 5. INTERACTIVE IN-PAGE CASE STUDY DEEP DIVE MODAL */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-card/95 backdrop-blur-md border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full border border-orange-500/20 uppercase tracking-wider">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                    {activeModalItem.client}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-full bg-background border border-border text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-card text-card-foreground">
                {/* Hero Banner */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-border bg-slate-950">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                      {activeModalItem.service}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeModalItem.tagline}
                    </h2>
                  </div>
                </div>

                {/* Quick Facts Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-background border border-border rounded-2xl text-center">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Client</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{activeModalItem.client}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Timeline</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{activeModalItem.duration}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Fiscal Period</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{activeModalItem.year}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold block">Engagement</span>
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">Full-Funnel Growth</span>
                  </div>
                </div>

                {/* 3 Strategic Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* The Challenge */}
                  <div className="p-5 bg-background border border-border rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center font-bold mb-3">
                      1
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">The Bottleneck</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeModalItem.challenge}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="p-5 bg-background border border-border rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold mb-3">
                      2
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">The Arventa Strategy</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeModalItem.solution}
                    </p>
                  </div>

                  {/* The Results */}
                  <div className="p-5 bg-background border border-border rounded-2xl">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-3">
                      3
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">The Commercial Impact</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeModalItem.results}
                    </p>
                  </div>
                </div>

                {/* Detailed Before vs After Table */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <BarChart3 size={18} className="text-orange-500" />
                    <span>Verified Performance Metrics Comparison</span>
                  </h4>
                  <div className="overflow-x-auto border border-border rounded-2xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 dark:bg-background text-slate-600 dark:text-slate-400 uppercase font-bold border-b border-border">
                        <tr>
                          <th className="p-4">Key Metric</th>
                          <th className="p-4">Before Arventa</th>
                          <th className="p-4">After Execution</th>
                          <th className="p-4 text-right">Net Growth</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {activeModalItem.detailedMetrics.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/50">
                            <td className="p-4 font-semibold text-slate-900 dark:text-white">{row.label}</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">{row.before || "Baseline"}</td>
                            <td className="p-4 text-slate-900 dark:text-white font-bold">{row.after || row.value}</td>
                            <td className="p-4 text-right font-extrabold text-emerald-600 dark:text-emerald-400">
                              {row.growth || row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Deliverables Executed
                    </h5>
                    <ul className="space-y-2">
                      {activeModalItem.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-orange-500" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Tech & Media Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeModalItem.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background border border-border text-xs text-slate-700 dark:text-slate-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border border-orange-500/25 rounded-2xl">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-200 italic mb-4">
                    "{activeModalItem.testimonial.quote}"
                  </p>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {activeModalItem.testimonial.author}
                    </span>
                    <span className="text-slate-500 text-xs ml-2">
                      — {activeModalItem.testimonial.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Sticky Bottom Action Bar */}
              <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 p-5 bg-card/95 backdrop-blur-md border-t border-border">
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Ready to deploy this exact framework for your brand?
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/917872490719?text=${encodeURIComponent(
                      `Hello Arventa! I was inspecting your case study for "${activeModalItem.client}" (${activeModalItem.service}) and would like to achieve similar results for my brand.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <MessageSquare size={14} />
                    <span>Discuss on WhatsApp</span>
                  </a>

                  <a
                    href="#consultation-hub"
                    onClick={() => setActiveModalItem(null)}
                    className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-full transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>Request Free Audit</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. OUR 4-STEP DELIVERY & SCALABILITY METHODOLOGY */}
      <Section className="py-20 bg-slate-50/50 dark:bg-card/40 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="The Arventa Performance Framework"
            subtitle="How we consistently engineer 4.5x+ ROAS and dominant local market share across diverse industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Deep Funnel Recon & Audit",
                description:
                  "We ruthlessly audit your current pixel data, customer journey, CPCs, and competitor creative to identify immediate margin leaks.",
                deliverable: "15-Min Teardown & Growth Roadmap",
              },
              {
                step: "02",
                title: "High-Converting Creative Matrix",
                description:
                  "Our studio crafts custom AI-designed visuals, hook-driven video scripts, and high-velocity landing pages engineered for conversion.",
                deliverable: "8-12 Tailored Creative Variants",
              },
              {
                step: "03",
                title: "Algorithmic Media Scaling",
                description:
                  "We deploy machine-learning bidding models across Meta Advantage+ and Google Performance Max, scaling only validated winners.",
                deliverable: "Target 4.5x+ Blended ROAS",
              },
              {
                step: "04",
                title: "Retention & LTV Expansion",
                description:
                  "We integrate automated WhatsApp and email nurturing sequences to maximize repeat purchases and customer lifetime value.",
                deliverable: "Automated Repeat Sales Engine",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border hover:border-orange-500/50 rounded-2xl relative transition-all group shadow-sm"
              >
                <div className="text-4xl font-black text-orange-500/20 group-hover:text-orange-500/50 transition-colors mb-4">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {st.description}
                </p>
                <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400">
                  <CheckCircle2 size={13} className="text-orange-500" />
                  <span>{st.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. INTERACTIVE ROI & REVENUE PROJECTION CALCULATOR */}
      <Section className="py-20 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 bg-card border border-border rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
                <Calculator size={14} />
                <span>Interactive Growth Estimator</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Project Your Brand's Next Growth Milestone
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Select your intended monthly ad budget to see realistic pipeline and revenue projections based on Arventa's historical campaign data.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Planned Monthly Ad Spend:
                    </label>
                    <span className="text-xl font-extrabold text-orange-600 dark:text-orange-400">
                      ₹{calcBudget.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={25000}
                    max={1000000}
                    step={25000}
                    value={calcBudget}
                    onChange={(e) => setCalcBudget(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>₹25,000 (Emerging)</span>
                    <span>₹5,00,000</span>
                    <span>₹10,00,000+ (Enterprise)</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-3">
                    Target Primary Channel:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "meta", label: "Meta Ads (D2C)" },
                      { id: "google", label: "Google Search & Maps" },
                      { id: "full", label: "Full-Funnel Omnichannel" },
                    ].map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => setCalcChannel(ch.id as any)}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          calcChannel === ch.id
                            ? "bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400"
                            : "bg-background border-border text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Outputs Column */}
              <div className="lg:col-span-5 p-6 bg-background border border-border rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider block mb-1">
                    Projected Gross Pipeline / Sales
                  </span>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-300 mb-4">
                    ₹{projectedRevenue.toLocaleString("en-IN")}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-border text-xs">
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>Target Blended ROAS:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{getMultiplier()}x</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>Est. Monthly Conversions:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{estimatedConversions}+ Orders / Inquiries</span>
                    </div>
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>Target CAC Reduction:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">-{estimatedCpaSaving} Lower Cost</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917872490719?text=${encodeURIComponent(
                    `Hi Arventa Ventures! I used your portfolio ROI calculator: on a monthly ad budget of ₹${calcBudget.toLocaleString(
                      "en-IN"
                    )} for ${calcChannel.toUpperCase()} marketing, I'm targeting a projected revenue of ₹${projectedRevenue.toLocaleString(
                      "en-IN"
                    )}. How soon can we deploy this roadmap?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare size={14} />
                  <span>Send This Model via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. EXTENSIVE CONTACT & PROPOSAL HUB ("একটু বেশি কন্টাক্ট অ্যাড করা") */}
      <Section id="consultation-hub" className="py-20 md:py-28 bg-slate-50/70 dark:bg-card/60 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare size={14} />
              <span>Direct Strategic Touchpoints</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Scale Your Revenue in <span className="text-orange-500">2026</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mt-4 leading-relaxed">
              Have a question about our case studies or want a free audit of your current ad account? Reach out through any channel below. Our lead strategist responds within 2 hours during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Pathways */}
            <div className="lg:col-span-5 space-y-5">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures,%20I%20am%20interested%20in%20scaling%20my%20business%20and%20requesting%20a%20free%20growth%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-card border border-border hover:border-emerald-500/50 rounded-2xl flex items-start gap-4 transition-all group block shadow-sm hover:shadow-md"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      WhatsApp Fast-Track
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      ⚡ Replies in &lt;15m
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">
                    Instant chat with lead strategist Jaydeb Jana & media buyers.
                  </p>
                  <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    +91 7872490719 →
                  </span>
                </div>
              </a>

              {/* Direct Phone Call Card */}
              <a
                href="tel:+917872490719"
                className="p-6 bg-card border border-border hover:border-orange-500/50 rounded-2xl flex items-start gap-4 transition-all group block shadow-sm hover:shadow-md"
              >
                <div className="p-3.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    Direct Phone Line
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">
                    Speak directly with our strategy desk (Mon - Sun, 9 AM - 9 PM IST).
                  </p>
                  <span className="text-sm font-extrabold text-orange-600 dark:text-orange-400">
                    +91 7872490719 →
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@arventaventures.online"
                className="p-6 bg-card border border-border hover:border-orange-500/50 rounded-2xl flex items-start gap-4 transition-all group block shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    Official RFP & Corporate Email
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">
                    Send detailed campaign briefs, RFPs, or enterprise partnership proposals.
                  </p>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    info@arventaventures.online →
                  </span>
                </div>
              </a>

              {/* HQ Address Card */}
              <div className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Headquarters
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2 leading-relaxed">
                    Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442
                  </p>
                  <a
                    href="https://share.google/9g673CLWFHS9j6tb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                  >
                    <span>Google Business Profile & Maps</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: In-Page Consultation & Strategy Booking Form */}
            <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl relative text-card-foreground">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Request a Free 15-Minute Funnel Teardown
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-8">
                Fill out the quick briefing form below. We will analyze your website and current ads, then provide 3 actionable growth fixes on our call.
              </p>

              {isFormSubmitted ? (
                <div className="p-8 text-center bg-background border border-emerald-500/30 rounded-2xl animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Inquiry Transmitted to Our Strategy Desk!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                    Your briefing was formatted and sent directly to our team on WhatsApp. Our lead strategist will review your brand and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsFormSubmitted(false)}
                    className="px-6 py-2.5 bg-card border border-border text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full text-xs font-semibold transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Brand / Business Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="e.g. Nova Studios"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="founder@company.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Service of Primary Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      >
                        <option>Paid Ads Scaling (Meta / Google)</option>
                        <option>Local Search & Google Maps Dominance</option>
                        <option>Full-Funnel Omnichannel Sprint</option>
                        <option>Brand Identity & High-Converting Video</option>
                        <option>Web & App Conversion Engineering</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Estimated Monthly Ad Spend
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      >
                        <option>₹25,000 - ₹50,000 / month</option>
                        <option>₹50,000 - ₹1,50,000 / month</option>
                        <option>₹1,50,000 - ₹5,00,000 / month</option>
                        <option>₹5,00,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Tell Us About Your Goals & Current Bottleneck
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. Currently spending ₹1L on Meta ads at 1.8x ROAS. Looking to scale to 4x ROAS and lower customer acquisition cost..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Connect with Strategist via WhatsApp</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Zero spam guarantee. Your details are confidential and used solely for your strategy audit.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. PORTFOLIO & ENGAGEMENT FAQS */}
      <Section className="py-20 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Clear answers about how we partner with brands, track performance, and guarantee delivery."
          />

          <div className="space-y-4">
            {[
              {
                q: "How soon can we expect tangible results after onboarding?",
                a: "For Paid Media campaigns (Meta Ads & Google Ads), initial algorithmic testing and creative deployment take 5-7 business days. Most clients see verifiable improvements in lead volume and ROAS within the first 14 to 21 days. For Local SEO and Organic Search, rank velocity typically accelerates within 30 to 60 days.",
              },
              {
                q: "Do you require long-term lock-in contracts?",
                a: "No. We believe in earning our seat at your table every single month. We typically operate on 90-day growth sprints (the optimal duration to test, validate, and scale a new customer acquisition engine), after which we transition to flexible month-to-month retainers.",
              },
              {
                q: "What ad spend budget is required to work with Arventa?",
                a: "We work with high-potential emerging brands starting at ₹25,000/month in ad spend up to enterprise multi-crore budgets. Our fee structures and sprint models are customized based on the complexity and scale of your growth objectives.",
              },
              {
                q: "Do you handle creative production and video editing in-house?",
                a: "Yes! Unlike traditional agencies that demand you supply all creative, our studio produces high-converting UGC hooks, AI-optimized product renders, cinematic reels, and conversion-engineered landing pages fully in-house.",
              },
              {
                q: "How do you track attribution and deliver performance reports?",
                a: "We provide real-time 24/7 transparent analytics dashboards (combining Meta Ads, Google Analytics 4, and CRM lead verification). You get weekly sprint syncs and daily Slack/WhatsApp monitoring updates with zero hidden metrics.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-border/50 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
