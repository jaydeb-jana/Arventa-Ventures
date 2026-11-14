import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Sparkles, Search, BookOpen } from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { blogPosts } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Arventa Ventures Digital Marketing Insights",
    "description": "Expert insights, SEO strategies, Meta Ads guides, and digital marketing tutorials by Arventa Ventures.",
    "url": "https://arventaventures.online/blog"
  };

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  // Filter blog posts based on category & search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Digital Marketing Blog & SEO Insights | Arventa Ventures"
        description="Read actionable digital marketing guides, SEO strategies, Meta Ads growth hacks, and performance marketing case studies from Arventa Ventures experts."
        keywords="Digital Marketing Blog, SEO Strategies 2026, Meta Ads Tutorials, Google Ads Optimization, Growth Hacking Guides, Arventa Ventures"
        canonicalUrl="/blog"
        structuredData={blogSchema}
      />
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-background text-center relative border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span>Digital Marketing Knowledge Hub</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Marketing Insights & Strategies
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our collection of 40 in-depth articles, case studies, and actionable guides to scale your digital presence.
          </p>

          {/* Search and Category Filter Bar */}
          <div className="max-w-xl mx-auto flex items-center bg-card border border-border rounded-full px-4 py-2 shadow-lg mb-8">
            <Search className="w-5 h-5 text-slate-500 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search marketing articles, topics, or trends..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(10);
              }}
              className="bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none w-full"
            />
          </div>

          {/* Categories Pill List */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(10);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-card border border-border text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <Section className="py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
          <div className="flex items-center space-x-2 text-slate-400 text-sm font-medium">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>
              Showing <strong className="text-white">{displayedPosts.length}</strong> of{" "}
              <strong className="text-white">{filteredPosts.length}</strong> articles
            </span>
          </div>

          {selectedCategory !== "All" && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setVisibleCount(10);
              }}
              className="text-xs text-orange-400 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {displayedPosts.length === 0 ? (
          <div className="text-center py-20 bg-card/40 border border-border rounded-3xl p-8">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-slate-400 max-w-md mx-auto text-sm mb-6">
              We couldn&apos;t find any blog posts matching your search query or selected category.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setVisibleCount(10);
              }}
              variant="outline"
              size="sm"
            >
              Clear Search & Show All Articles
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="bg-card border-border overflow-hidden hover:border-orange-500/50 transition-all duration-300 group h-full cursor-pointer flex flex-col hover:shadow-xl hover:shadow-orange-500/5">
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/blog-${post.id}/800/500`;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 shrink-0">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center text-orange-500 font-semibold text-sm mt-auto shrink-0 group-hover:translate-x-1 transition-transform">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
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
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 rounded-full shadow-lg shadow-orange-500/20 text-base"
            >
              <span>Read More Articles (LOAD MORE)</span>
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <p className="text-xs text-slate-500 mt-3 font-medium">
              Showing {displayedPosts.length} of {filteredPosts.length} total articles
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}
