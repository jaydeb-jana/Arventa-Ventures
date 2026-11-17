import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  SlidersHorizontal 
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
  const [sortBy, setSortBy] = useState<"latest" | "readTime" | "popular">("latest");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update query params when state changes
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategory !== "All") params.category = selectedCategory;
    if (searchQuery.trim() !== "") params.search = searchQuery.trim();
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, setSearchParams]);

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
        "url": "https://arventaventures.online/logo.png"
      }
    }
  };

  // Extract unique categories with post counts
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

  // Top featured post for spotlight
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  // Trending tag chips
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
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "readTime") {
      result = [...result].sort((a, b) => {
        const timeA = parseInt(a.readTime || "5", 10);
        const timeB = parseInt(b.readTime || "5", 10);
        return timeB - timeA;
      });
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // When on "All" and no search query, exclude the featured post from the grid to avoid duplication
  const gridPosts = useMemo(() => {
    if (selectedCategory === "All" && searchQuery.trim() === "" && featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, selectedCategory, searchQuery, featuredPost]);

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

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground transition-colors duration-200">
      <SEO
        title="Digital Marketing Blog & SEO Knowledge Hub | Arventa Ventures"
        description="Explore 40+ actionable digital marketing playbooks, technical SEO blueprints, Meta Ads scaling guides, and conversion rate optimization case studies."
        keywords="Digital Marketing Blog, SEO Strategies 2026, Meta Ads Optimization, Google PMax Campaigns, Local SEO Playbook, CRO Hacks, Arventa Ventures"
        canonicalUrl="/blog"
        structuredData={blogSchema}
      />

      {/* Hero Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/60 via-background to-background text-center relative border-b border-border/50 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Arventa Digital Growth & Knowledge Hub</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
            Marketing Insights, SEO Blueprints & Tactical Playbooks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our collection of 40 in-depth articles, actionable case studies, and performance marketing frameworks to scale your brand.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative flex items-center bg-card border border-border rounded-full px-5 py-3 shadow-xl mb-6 focus-within:border-orange-500/60 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
            <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search marketing articles, topics, or trends..."
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
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-orange-500" /> Popular Topics:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  setVisibleCount(9);
                }}
                className="px-2.5 py-1 rounded-full bg-card hover:bg-orange-500/10 hover:text-orange-500 border border-border text-muted-foreground transition-all duration-200"
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

      {/* Featured Article Spotlight (Hero Card) */}
      {selectedCategory === "All" && searchQuery.trim() === "" && featuredPost && (
        <section className="max-w-6xl mx-auto px-6 -mt-8 mb-12 relative z-20">
          <Link to={`/blog/${featuredPost.id}`} className="group block">
            <Card className="bg-card border-border overflow-hidden rounded-3xl hover:border-orange-500/50 transition-all duration-500 shadow-2xl hover:shadow-orange-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image (7 cols) */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
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
                    <Sparkles className="w-3.5 h-3.5" /> Featured Blueprint
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
                        src={featuredPost.author?.avatar || "https://i.ibb.co/ymz2pCf6/1780219901430.png"}
                        alt={featuredPost.author?.name || "Author"}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/20"
                      />
                      <div>
                        <span className="text-xs font-bold text-foreground block">
                          {featuredPost.author?.name || "Ashraful Islam"}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {featuredPost.author?.role || "Head of Performance"}
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

      {/* Main Blog Grid Section */}
      <Section className="py-12 max-w-6xl mx-auto">
        {/* Results Counter & Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-border/60">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm font-medium">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>
              Showing <strong className="text-foreground">{displayedPosts.length}</strong> of{" "}
              <strong className="text-foreground">{gridPosts.length}</strong> articles
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-card border border-border text-foreground rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                <option value="latest">Latest Published</option>
                <option value="readTime">Longest Reads</option>
              </select>
            </div>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
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
              We couldn&apos;t find any marketing guides matching your query &ldquo;{searchQuery}&rdquo;. Try another keyword or browse all categories.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
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
                          src={post.author?.avatar || "https://i.ibb.co/ymz2pCf6/1780219901430.png"}
                          alt={post.author?.name || "Author"}
                          className="w-7 h-7 rounded-full object-cover ring-1 ring-orange-500/30"
                        />
                        <span className="text-xs font-medium text-muted-foreground truncate max-w-[110px]">
                          {post.author?.name || "Arventa Team"}
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

        {/* Newsletter & Free Growth Strategy Banner */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-card border border-border text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
              <Mail className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
              Get High-ROI Growth Tactics in Your Inbox
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
              Join 4,200+ founders and marketers receiving our weekly breakdown of what is actually working in Meta Ads, Google Ads, and Technical SEO.
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
      </Section>
    </div>
  );
}
