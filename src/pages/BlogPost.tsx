import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  Copy, 
  Bookmark, 
  ChevronRight, 
  ThumbsUp, 
  ThumbsDown, 
  HelpCircle, 
  ArrowRight,
  UserCheck,
  Send
} from "lucide-react";
import { blogPosts, type BlogPost as BlogPostType } from "@/src/data";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { Card, CardContent } from "@/src/components/ui/Card";
import { SEO } from "@/src/components/common/SEO";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const post = useMemo(() => {
    return blogPosts.find((p) => p.id === id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Scroll Progress Bar Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parse Table of Contents from H2 tags
  const tocItems = useMemo(() => {
    if (!post?.content) return [];
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
    const items: { id: string; title: string }[] = [];
    let match;
    while ((match = h2Regex.exec(post.content)) !== null) {
      const cleanTitle = match[1].replace(/<[^>]*>/g, "").trim();
      const slug = cleanTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      items.push({ id: slug, title: cleanTitle });
    }
    return items;
  }, [post?.content]);

  // Inject IDs into H2 tags inside content for anchor links
  const processedContent = useMemo(() => {
    if (!post?.content) return "";
    let index = 0;
    return post.content.replace(/<h2([^>]*)>(.*?)<\/h2>/g, (_, attrs, content) => {
      const cleanTitle = content.replace(/<[^>]*>/g, "").trim();
      const slug = cleanTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      index++;
      return `<h2 id="${slug}" ${attrs}>${content}</h2>`;
    });
  }, [post?.content]);

  // Related posts (same category or others)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen pt-32 items-center justify-center bg-background px-6 text-center">
        <SEO title="Article Not Found | Arventa Ventures Blog" noindex={true} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The marketing guide or article you are looking for may have been moved or updated.
        </p>
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Hub
          </Link>
        </Button>
      </div>
    );
  }

  const postUrl = `https://arventaventures.online/blog/${post.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Structured Data Schemas
  const blogArticleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.updatedDate || post.date,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Arventa Ventures Editorial Team",
      "jobTitle": post.author?.role || "Growth Consultant",
      "image": post.author?.avatar
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arventa Ventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arventaventures.online/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "keywords": post.tags?.join(", ") || post.category
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arventaventures.online/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://arventaventures.online/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": postUrl
      }
    ]
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const combinedSchemas = faqSchema ? [blogArticleSchema, breadcrumbSchema, faqSchema] : [blogArticleSchema, breadcrumbSchema];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground transition-colors duration-200">
      <SEO
        title={`${post.title} | Arventa Ventures`}
        description={post.description}
        keywords={post.tags ? post.tags.join(", ") : `${post.category}, Digital Marketing, Arventa Ventures`}
        canonicalUrl={`/blog/${post.id}`}
        ogType="article"
        ogImage={post.image}
        structuredData={combinedSchemas}
      />

      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />



      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-6 py-8 md:py-12 w-full">
        <Link
          to="/blog"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-500 hover:text-orange-400 mb-6 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Knowledge Hub
        </Link>

        {/* Badges & Meta info */}
        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs">
          <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/25 text-orange-500 font-bold rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          {post.updatedDate && (
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Updated for 2026
            </span>
          )}
          <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            {post.readTime || "7 min read"}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-normal">
          {post.description}
        </p>

        {/* Author Byline & Social Share Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-border/60">
          <div className="flex items-center space-x-3.5">
            <img
              src={post.author?.avatar || "/images/author-jaydeb.webp"}
              alt={post.author?.name || "Author"}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/30"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/author-jaydeb.webp";
              }}
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-foreground text-sm md:text-base">
                  {post.author?.name || "Arventa Strategy Team"}
                </span>
                <span className="inline-flex items-center text-[10px] bg-orange-500/10 text-orange-500 font-semibold px-2 py-0.5 rounded-full border border-orange-500/20">
                  <UserCheck className="w-2.5 h-2.5 mr-1" /> Verified Expert
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {post.author?.role || "Growth & Strategy Specialist"}
              </p>
            </div>
          </div>

          {/* Social Share Bar */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-muted-foreground mr-1 hidden md:inline">Share:</span>
            
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-card hover:bg-emerald-500/20 hover:text-emerald-500 border border-border text-muted-foreground transition-all duration-200"
              title="Share on WhatsApp"
            >
              <Send className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-card hover:bg-blue-600/20 hover:text-blue-500 border border-border text-muted-foreground transition-all duration-200"
              title="Share on LinkedIn"
            >
              <Share2 className="w-4 h-4" />
            </a>

            {/* Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-card hover:bg-sky-500/20 hover:text-sky-400 border border-border text-muted-foreground transition-all duration-200"
              title="Share on Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className={`p-2.5 rounded-full border transition-all duration-200 flex items-center space-x-1.5 ${
                copied 
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" 
                  : "bg-card hover:bg-orange-500/20 hover:text-orange-500 border-border text-muted-foreground"
              }`}
              title="Copy Article Link"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied && <span className="text-xs font-bold pr-1">Copied!</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-6 w-full mb-12">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl border border-border shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/images/creative-strategy-studio.webp";
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Two-Column Reading Section */}
      <Section className="pt-0 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content (8 cols on desktop) */}
          <main className="lg:col-span-8">
            
            {/* Key Takeaways Box (Crucial for E-E-A-T and User Engagement) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="mb-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card via-card to-orange-950/20 border border-orange-500/30 shadow-xl shadow-orange-500/5">
                <div className="flex items-center space-x-2.5 mb-4 text-orange-500">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-extrabold text-base md:text-lg tracking-wide uppercase text-foreground">
                    Executive Summary & Key Takeaways
                  </h3>
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-foreground/90 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mr-3 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* In-depth Article HTML Content */}
            <article 
              className="blog-content prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Interactive "Was this helpful?" feedback widget */}
            <div className="mt-12 p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-foreground text-sm md:text-base">Was this article helpful to your business?</h4>
                <p className="text-xs text-muted-foreground">Your feedback helps us create better actionable playbooks.</p>
              </div>
              <div className="flex items-center space-x-3">
                {feedback ? (
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Thank you for your feedback!
                  </span>
                ) : (
                  <>
                    <button
                      onClick={() => setFeedback("yes")}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-background hover:bg-orange-500/10 hover:text-orange-500 border border-border text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" /> Yes, very helpful
                    </button>
                    <button
                      onClick={() => setFeedback("no")}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-background hover:bg-card border border-border text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <ThumbsDown className="w-3.5 h-3.5" /> Could be better
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* FAQs Accordion Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16 pt-10 border-t border-border">
                <div className="flex items-center space-x-2 text-orange-500 text-xs font-bold uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 tracking-tight">
                  Questions About {post.category} Strategies
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-2xl bg-card border border-border hover:border-orange-500/30 transition-colors"
                    >
                      <h4 className="font-bold text-foreground text-base md:text-lg mb-2 flex items-center justify-between">
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Bio Card */}
            {post.author && (
              <div className="mt-16 p-8 rounded-3xl bg-card border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover shrink-0 ring-4 ring-orange-500/20"
                />
                <div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1 block">
                    Written by Growth Strategist
                  </span>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mb-3">
                    {post.author.role} at Arventa Ventures
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {post.author.bio || "Specialist in digital customer acquisition, search visibility, and full-funnel conversion optimization for high-growth brands."}
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full text-xs">
                    <Link to="/contact">Consult with {post.author.name.split(" ")[0]}</Link>
                  </Button>
                </div>
              </div>
            )}

            {/* High-Converting Bottom CTA Card */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 p-8 md:p-12 text-center text-white shadow-2xl shadow-orange-500/20">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Scale Your Brand With Arventa
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Ready to Implement These Growth Strategies?
              </h3>
              <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Stop guessing. Our dedicated digital marketing experts will audit your Meta Ads, SEO, and sales funnels to craft a customized roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-slate-100 font-extrabold px-8 py-6 rounded-full shadow-xl text-base w-full sm:w-auto"
                >
                  <Link to="/contact">Book Free 30-Min Strategy Audit</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="bg-orange-700/50 hover:bg-orange-700/80 text-white border-white/30 font-bold px-8 py-6 rounded-full text-base w-full sm:w-auto"
                >
                  <a href="https://api.whatsapp.com/send?phone=+917872490719&text=Hello%20Arventa%20Ventures,%20I%20read%20your%20blog%20post%20and%20want%20to%20scale%20my%20business" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </main>

          {/* Sticky Right Sidebar (4 cols on desktop) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Table of Contents Widget */}
              {tocItems.length > 0 && (
                <div className="p-6 rounded-3xl bg-card border border-border shadow-sm">
                  <h4 className="font-extrabold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Table of Contents</span>
                    <span className="text-[11px] text-orange-500 font-bold bg-orange-500/10 px-2 py-0.5 rounded-full">
                      {tocItems.length} Sections
                    </span>
                  </h4>
                  <ul className="space-y-2.5 text-sm">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(item.id);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                              setActiveSection(item.id);
                            }
                          }}
                          className={`block transition-colors line-clamp-1 py-0.5 ${
                            activeSection === item.id 
                              ? "text-orange-500 font-bold pl-2 border-l-2 border-orange-500" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Free Audit Side Magnet Widget */}
              <div className="p-6 rounded-3xl bg-card border border-orange-500/30 text-center relative overflow-hidden shadow-lg shadow-orange-500/5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Free Performance Audit</h4>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  Discover where your marketing budget is leaking. Get a full audit of your ad account, SEO rankings, and website speed.
                </p>
                <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full">
                  <Link to="/contact">Request Free Audit</Link>
                </Button>
              </div>

              {/* Article Tags Cloud */}
              {post.tags && post.tags.length > 0 && (
                <div className="p-6 rounded-3xl bg-card border border-border">
                  <h4 className="font-extrabold text-foreground text-xs uppercase tracking-wider mb-4">
                    Related Topics & Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?search=${encodeURIComponent(tag)}`}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-background hover:bg-orange-500/10 hover:text-orange-500 border border-border text-muted-foreground transition-all duration-200"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Share Widget */}
              <div className="p-6 rounded-3xl bg-card border border-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-foreground block">Enjoyed this blueprint?</span>
                  <span className="text-[11px] text-muted-foreground">Share with fellow founders</span>
                </div>
                <Button 
                  onClick={handleCopyLink} 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full text-xs"
                >
                  <Share2 className="w-3.5 h-3.5 mr-1.5" />
                  {copied ? "Copied" : "Share"}
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts Grid (Keeping users engaged, decreasing bounce rate) */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-2">
                  Continue Reading
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  Related Growth Guides & Case Studies
                </h3>
              </div>
              <Button asChild variant="outline" className="rounded-full shrink-0">
                <Link to="/blog">
                  View All 40 Articles <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost) => (
                <Link key={relPost.id} to={`/blog/${relPost.id}`} className="group h-full">
                  <Card className="bg-card border-border overflow-hidden group-hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-orange-500/5">
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <img
                        src={relPost.image}
                        alt={relPost.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/images/creative-strategy-studio.webp";
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/90 text-orange-400 text-[10px] font-bold rounded-full uppercase tracking-wider border border-slate-700/80">
                        {relPost.category}
                      </span>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                        <span>{relPost.date}</span>
                        <span>•</span>
                        <span>{relPost.readTime || "7 min read"}</span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                        {relPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed flex-1">
                        {relPost.description}
                      </p>
                      <span className="text-xs font-semibold text-orange-500 flex items-center mt-auto group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Section>
    </div>
  );
}
