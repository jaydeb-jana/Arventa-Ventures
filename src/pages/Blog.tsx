import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  Search, 
  BookOpen, 
  Clock, 
  Calendar, 
  Tag, 
  X, 
  TrendingUp, 
  CheckCircle2, 
  Send, 
  Mail, 
  SlidersHorizontal,
  Compass,
  Download,
  Check,
  Flame,
  Award,
  Layers,
  FileText,
  UserCheck
} from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { blogPosts, type BlogPost } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<"latest" | "readTime">("latest");
  const [filterReadDuration, setFilterReadDuration] = useState<"all" | "quick" | "deep">("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync state with URL query parameters
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategory !== "All") params.category = selectedCategory;
    if (searchQuery.trim() !== "") params.search = searchQuery.trim();
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, setSearchParams]);

  // Curated collections for the playbook spotlight banner
  const curatedCollections = [
    {
      title: "Meta Ads Scaling Masterclass",
      category: "Paid Ads",
      description: "Battle-tested Advantage+ funnels, CAPI server-side setups, and high-converting video hooks.",
      image: "/images/blog-meta-ads.webp",
      articleCount: "12 Guides",
      tag: "Highest ROI"
    },
    {
      title: "Technical SEO & Search Authority",
      category: "SEO",
      description: "Entity SEO architectures, Core Web Vitals optimization, and Google Search dominance blueprints.",
      image: "/images/blog-ecommerce-seo.webp",
      articleCount: "10 Playbooks",
      tag: "Organic Growth"
    },
    {
      title: "Funnels & Conversion Rate Optimization",
      category: "Content Strategy",
      description: "Turning paid clicks into transactions with friction-free landing pages and micro-commitments.",
      image: "/images/blog-marketing-funnel.webp",
      articleCount: "8 Case Studies",
      tag: "Conversion Rate"
    },
    {
      title: "Creative Production & Brand Narrative",
      category: "Social Media",
      description: "Cinema-grade UGC, 3D motion graphics, and psychological copywriting that commands attention.",
      image: "/images/blog-ugc-video-ads.webp",
      articleCount: "10 Frameworks",
      tag: "Viral Creative"
    }
  ];

  // Lead editorial contributors
  const editorialAuthors = [
    {
      name: "Jaydeb Jana",
      role: "Founder & Chief Executive Officer",
      focus: "Algorithmic Growth & Enterprise Systems",
      avatar: "/images/author-jaydeb.webp"
    },
    {
      name: "Ashraful Islam",
      role: "Head of Performance Marketing",
      focus: "Meta Advantage+ & Google PMax Scaling",
      avatar: "/images/author-ashraful.webp"
    },
    {
      name: "Priya Mukherjee",
      role: "Creative & Content Director",
      focus: "Direct-Response Copy & Visual Storytelling",
      avatar: "/images/author-priya.webp"
    },
    {
      name: "Suman Roy",
      role: "Lead Technical SEO Architect",
      focus: "Core Web Vitals & Search Engine Algorithms",
      avatar: "/images/author-suman.webp"
    }
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  }, []);

  // Top featured post for hero spotlight
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  // Trending tags for instant filtering
  const trendingTags = [
    "Meta Ads", 
    "Advantage+ Campaigns", 
    "E-commerce SEO", 
    "Google Maps", 
    "Core Web Vitals", 
    "CRO", 
    "WhatsApp Marketing", 
    "UGC Ads"
  ];

  // Filter & sort blog posts
  const filteredPosts = useMemo(() => {
    let result = blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(q)));
      
      const readMinutes = parseInt(post.readTime || "5", 10);
      const matchesDuration = 
        filterReadDuration === "all" ? true :
        filterReadDuration === "quick" ? readMinutes < 8 :
        readMinutes >= 8;

      return matchesCategory && matchesSearch && matchesDuration;
    });

    if (sortBy === "readTime") {
      result = [...result].sort((a, b) => {
        const timeA = parseInt(a.readTime || "5", 10);
        const timeB = parseInt(b.readTime || "5", 10);
        return timeB - timeA;
      });
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, filterReadDuration]);

  // When on "All" and no search query, exclude the featured post from the grid
  const gridPosts = useMemo(() => {
    if (selectedCategory === "All" && searchQuery.trim() === "" && filterReadDuration === "all" && featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, selectedCategory, searchQuery, filterReadDuration, featuredPost]);

  const displayedPosts = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const blogFaqs = [
    {
      q: "Are the playbooks and strategies published here actively tested in real accounts?",
      a: "Yes, 100%. Every single guide, benchmark, and framework shared on the Arventa Knowledge Hub is derived directly from live client accounts managing over ₹5 Cr+ in media spend and actual organic SEO campaigns engineered by our team."
    },
    {
      q: "How frequently does the Arventa team publish new marketing guides?",
      a: "We publish new in-depth tactical guides weekly. Each article is peer-reviewed by our Founder Jaydeb Jana and lead media buyers to guarantee actionable step-by-step value rather than generic theory."
    },
    {
      q: "Can I request a custom topic or case study breakdown?",
      a: "Absolutely! Feel free to reach out to our team or message Jaydeb Jana directly on WhatsApp (+91 7872490719) with questions regarding specific ad platforms, attribution modeling, or conversion rate challenges."
    },
    {
      q: "How do I implement these playbooks for my business if I don't have an in-house team?",
      a: "You can partner directly with Arventa Ventures. We offer comprehensive done-for-you growth packages covering video ad creation, ad buying, tracking setup, and technical search engine optimization."
    }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Arventa Ventures Digital Marketing & SEO Knowledge Hub",
    "description": "Comprehensive digital marketing playbooks, SEO strategies, Meta Ads scaling guides, and conversion rate optimization case studies by Arventa Ventures.",
    "url": "https://arventaventures.online/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arventaventures.online/images/arventa-og-banner.webp"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground transition-colors duration-200">
      <SEO
        title="Digital Marketing Playbooks & SEO Blueprints | Arventa Ventures Blog"
        description="Explore 40+ actionable digital marketing playbooks, technical SEO blueprints, Meta Ads scaling guides, and conversion rate optimization case studies."
        keywords="Digital Marketing Blog, Meta Ads Playbook 2026, Advantage Plus Shopping, Technical SEO Guide, E-Commerce Growth, Arventa Ventures"
        canonicalUrl="/blog"
        structuredData={[blogSchema, faqSchema]}
      />

      {/* 1. Hero Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/70 via-background to-background text-center relative border-b border-border/50 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Arventa Digital Growth & Knowledge Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight">
            Marketing Insights, SEO Blueprints <br className="hidden sm:inline" />
            & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">Tactical Playbooks</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Access 40 in-depth guides, verified case studies, and performance advertising frameworks engineered to scale modern brands to market leadership.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative flex items-center bg-card border border-border rounded-full px-6 py-3.5 shadow-2xl mb-6 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
            <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search marketing articles, tactics, or topics (e.g. Meta Ads, SEO, CRO)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              className="bg-transparent text-foreground placeholder-muted-foreground text-sm focus:outline-none w-full"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setVisibleCount(9);
                }}
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Trending Topics Tags Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-8 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground flex items-center mr-1">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-orange-500" /> Hot Topics:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  setVisibleCount(9);
                }}
                className="px-3 py-1 rounded-full bg-card hover:bg-orange-500/15 hover:text-orange-500 border border-border text-muted-foreground transition-all duration-200"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Categories Pill List */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat ? "bg-white/20 text-white" : "bg-background text-muted-foreground"
                }`}>
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article Spotlight (Hero Card) */}
      {selectedCategory === "All" && searchQuery.trim() === "" && filterReadDuration === "all" && featuredPost && (
        <section className="max-w-6xl mx-auto px-6 -mt-8 mb-16 relative z-20">
          <Link to={`/blog/${featuredPost.id}`} className="group block">
            <Card className="bg-card border-border overflow-hidden rounded-3xl hover:border-orange-500/60 transition-all duration-500 shadow-2xl hover:shadow-orange-500/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image (7 cols) */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[340px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/creative-strategy-studio.webp";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-orange-500 text-white text-xs font-extrabold rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Editor&apos;s Pick
                  </span>
                </div>

                {/* Content Details (5 cols) */}
                <CardContent className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 font-bold border border-orange-500/20">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" /> {featuredPost.readTime || "9 min read"}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.description}
                    </p>

                    {/* Key takeaways teaser */}
                    {featuredPost.keyTakeaways && featuredPost.keyTakeaways.length > 0 && (
                      <div className="space-y-2 mb-6 hidden sm:block">
                        {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                          <div key={idx} className="flex items-start text-xs text-foreground/80 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mr-2 mt-0.5" />
                            <span className="line-clamp-1">{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Author snippet & CTA */}
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.author?.avatar || "/images/author-jaydeb.webp"}
                        alt={featuredPost.author?.name || "Author"}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/30"
                      />
                      <div>
                        <span className="text-xs font-bold text-foreground block">
                          {featuredPost.author?.name || "Jaydeb Jana"}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {featuredPost.author?.role || "Founder & CEO"}
                        </span>
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center text-xs font-bold text-orange-500 group-hover:translate-x-1 transition-transform">
                      Read Blueprint <ArrowRight className="ml-1.5 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </section>
      )}

      {/* 3. Curated Topic Collections (Visual Highlights) */}
      <Section className="py-8 max-w-6xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">
              Curated Mastery Series
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Deep-Dive Marketing Specializations
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">
            Battle-tested methodologies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curatedCollections.map((col, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedCategory(col.category);
                setSearchQuery("");
                setVisibleCount(9);
              }}
              className="group cursor-pointer rounded-2xl bg-card border border-border hover:border-orange-500/50 p-4 transition-all hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={col.image} 
                    alt={col.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-orange-500 text-white text-[10px] font-bold rounded-full uppercase">
                    {col.tag}
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-slate-900/90 text-slate-300 text-[10px] font-semibold rounded-full border border-slate-700">
                    {col.articleCount}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground group-hover:text-orange-500 transition-colors mb-1.5 leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {col.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-orange-500">
                <span>Browse Series</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Main Blog Grid Section */}
      <Section className="py-12 max-w-6xl mx-auto">
        {/* Results Counter & Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm font-medium">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>
              Showing <strong className="text-foreground">{displayedPosts.length}</strong> of{" "}
              <strong className="text-foreground">{gridPosts.length}</strong> articles
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Read Time Filter */}
            <div className="flex items-center space-x-1 text-xs bg-card border border-border rounded-lg p-1">
              <button
                onClick={() => setFilterReadDuration("all")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterReadDuration === "all" ? "bg-orange-500 text-white font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Reads
              </button>
              <button
                onClick={() => setFilterReadDuration("quick")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterReadDuration === "quick" ? "bg-orange-500 text-white font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                &lt; 8 min
              </button>
              <button
                onClick={() => setFilterReadDuration("deep")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterReadDuration === "deep" ? "bg-orange-500 text-white font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                8+ min Deep Dives
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-card border border-border text-foreground rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                <option value="latest">Latest Published</option>
                <option value="readTime">Longest Reads</option>
              </select>
            </div>

            {(selectedCategory !== "All" || searchQuery || filterReadDuration !== "all") && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setFilterReadDuration("all");
                  setVisibleCount(9);
                }}
                className="text-xs text-orange-500 hover:text-orange-400 font-semibold underline underline-offset-4"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {displayedPosts.length === 0 ? (
          <div className="text-center py-20 bg-card/40 border border-border rounded-3xl p-8">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No Articles Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm mb-6">
              We couldn&apos;t find any marketing guides matching your filters. Try clearing your query or explore all available articles.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setFilterReadDuration("all");
                setVisibleCount(9);
              }}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              Clear Search & Show All Articles
            </Button>
          </div>
        ) : (
          /* Grid of Blog Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group h-full flex flex-col">
                <Card className="bg-card border-border overflow-hidden hover:border-orange-500/50 transition-all duration-300 group h-full cursor-pointer flex flex-col hover:shadow-xl hover:shadow-orange-500/5 rounded-3xl">
                  {/* Thumbnail Image */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/creative-strategy-studio.webp";
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider shadow">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {post.readTime || "7 min read"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Tag chips */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-background border border-border text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom Author & CTA */}
                    <div className="pt-4 border-t border-border flex items-center justify-between mt-auto shrink-0">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={post.author?.avatar || "/images/author-jaydeb.webp"}
                          alt={post.author?.name || "Author"}
                          className="w-7 h-7 rounded-full object-cover ring-1 ring-orange-500/30"
                        />
                        <span className="text-xs font-medium text-muted-foreground truncate max-w-[120px]">
                          {post.author?.name || "Jaydeb Jana"}
                        </span>
                      </div>

                      <div className="flex items-center text-orange-500 font-bold text-xs group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 rounded-full shadow-xl shadow-orange-500/20 text-base transition-transform active:scale-95"
            >
              <span>Load More Playbooks</span>
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3 font-medium">
              Showing {displayedPosts.length} of {gridPosts.length} available articles
            </p>
          </div>
        )}
      </Section>

      {/* 5. Editorial Authors Spotlight */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">
              Field Experts & Strategists
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              Written by Active Media Buyers & Engineers
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Our content isn&apos;t outsourced to generic ghostwriters. Every guide is penned by our core team members managing real campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialAuthors.map((author, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-card border border-border flex flex-col items-center text-center hover:border-orange-500/40 transition-colors"
              >
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500/30 mb-3"
                />
                <h4 className="font-bold text-sm text-foreground mb-0.5">{author.name}</h4>
                <div className="text-xs text-orange-500 font-semibold mb-2">{author.role}</div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{author.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Magnet & Growth Playbook Download Banner */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card via-card to-orange-950/15 border border-border relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
              <Mail className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
              Get High-ROI Growth Tactics in Your Inbox
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              Join 4,200+ founders and digital operators receiving our weekly breakdown of real algorithm shifts, winning creative hooks, and technical SEO wins.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm inline-flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are subscribed! Check your inbox for our 2026 Growth Playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-full bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <Button 
                  type="submit"
                  size="default" 
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm shrink-0"
                >
                  Subscribe Free
                </Button>
              </form>
            )}

            <p className="text-[11px] text-muted-foreground mt-4">
              Zero spam. Unsubscribe at any time with 1 click.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Knowledge Hub FAQ Section */}
      <Section className="py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">
            Common Inquiries
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3">
            Knowledge Hub FAQs
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Learn more about our editorial methodology and execution guidelines.
          </p>
        </div>

        <div className="space-y-4">
          {blogFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-border rounded-2xl bg-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-card/80 transition-colors"
              >
                <span className="font-bold text-base text-foreground">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Bottom Agency Call to Action */}
      <section className="py-20 border-t border-border bg-gradient-to-b from-card to-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Done-For-You Scaling</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Need Us to Execute These Playbooks For You?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Don&apos;t spend months learning through costly ad trial and error. Partner with Arventa Ventures and let our senior media buyers scale your customer acquisition.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 h-14" asChild>
              <Link to="/contact">
                Book a Growth Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-card px-8 h-14 font-semibold" asChild>
              <Link to="/pricing">
                View Pricing & Retainer Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
