import React, { useEffect, useState, useMemo } from "react";
import { useParams, Navigate, Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { 
  ArrowRight, 
  Info, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Copy, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Phone,
  BookOpen,
  ArrowUpRight
} from "lucide-react";
import { infoData } from "@/src/data/pageContent";
import { SEO } from "@/src/components/common/SEO";

export default function InfoDetail() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !infoData[slug]) {
    return <Navigate to="/" replace />;
  }

  const raw = infoData[slug];
  const localized = raw[lang] || raw["en"] || raw;
  const data = {
    ...raw,
    ...localized,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Parse Table of Contents from H2 tags
  const tocItems = useMemo(() => {
    if (!data.content) return [];
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
    const items: { id: string; title: string }[] = [];
    let match;
    while ((match = h2Regex.exec(data.content)) !== null) {
      const cleanTitle = match[1].replace(/<[^>]*>/g, "").trim();
      const itemSlug = cleanTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      items.push({ id: itemSlug, title: cleanTitle });
    }
    return items;
  }, [data.content]);

  // Inject IDs into H2 tags inside content for anchor links
  const processedContent = useMemo(() => {
    if (!data.content) return "";
    return data.content.replace(/<h2([^>]*)>(.*?)<\/h2>/g, (_, attrs, content) => {
      const cleanTitle = content.replace(/<[^>]*>/g, "").trim();
      const itemSlug = cleanTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      return `<h2 id="${itemSlug}" ${attrs}>${content}</h2>`;
    });
  }, [data.content]);

  // Other resources list for exploration
  const otherResources = Object.keys(infoData)
    .filter((k) => k !== slug)
    .slice(0, 3)
    .map((k) => ({
      slug: k,
      item: infoData[k],
      content: infoData[k][lang] || infoData[k]["en"] || infoData[k],
    }));

  const infoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://arventaventures.online/info/${slug}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://arventaventures.online/info/${slug}`
        },
        "headline": data.title,
        "description": data.desc || data.subtitle,
        "image": `https://arventaventures.online${data.image}`,
        "datePublished": "2026-01-15T08:00:00+05:30",
        "dateModified": "2026-11-20T12:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": data.author?.name || "Jaydeb Jana",
          "jobTitle": "Founder & CEO",
          "url": "https://arventaventures.online/ceo"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Arventa Ventures",
          "logo": {
            "@type": "ImageObject",
            "url": "https://arventaventures.online/images/arventa-og-banner.webp"
          }
        }
      },
      {
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
            "name": "Resources",
            "item": "https://arventaventures.online/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.title,
            "item": `https://arventaventures.online/info/${slug}`
          }
        ]
      },
      ...(data.faqs && data.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((f: any) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }] : [])
    ]
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background text-foreground selection:bg-orange-500/30 selection:text-orange-500">
      <SEO
        title={`${data.title} | Arventa Ventures Resource`}
        description={data.desc || data.subtitle || "Learn performance marketing strategies, Meta Ads scaling, and digital growth from Arventa Ventures."}
        keywords={`${data.title}, performance marketing, meta ads, digital marketing agency, growth strategy, Arventa Ventures`}
        canonicalUrl={`/info/${slug}`}
        ogType="article"
        ogImage={data.image}
        structuredData={infoSchema}
      />

      {/* 1. HERO & METADATA SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-border bg-gradient-to-b from-card/80 via-background to-background">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">


          {/* Category & Status Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <Sparkles size={13} />
              {data.category || "Growth Architecture"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-card text-slate-600 dark:text-slate-400 border border-border">
              <Clock size={13} />
              {data.readTime || "8 min read"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-card text-slate-600 dark:text-slate-400 border border-border">
              <Calendar size={13} />
              {data.lastUpdated || "Verified for 2026"}
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
            {data.subtitle}
          </p>

          {/* Author & Action Bar */}
          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={data.author?.avatar || "/images/jaydeb-jana-avatar.webp"}
                alt={data.author?.name || "Jaydeb Jana"}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/40 shadow-sm"
              />
              <div>
                <div className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  <span>{data.author?.name || "Jaydeb Jana"}</span>
                  <CheckCircle2 size={14} className="text-emerald-500 fill-emerald-500/20" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {data.author?.role || "Founder & CEO, Arventa Ventures"}
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-card hover:bg-orange-500/10 text-slate-700 dark:text-slate-300 hover:text-orange-500 border border-border transition-all cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Share Resource</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY */}
      <Section className="py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Featured Custom Branded Image */}
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl mb-12 group">
            <img
              src={data.image || "/images/info-what-is-arventa.webp"}
              alt={data.title}
              className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-semibold text-orange-400 border border-orange-500/30">
                Arventa Intelligence Hub
              </span>
              <span className="text-[11px] text-slate-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                Strict Zero-Stock Original Photography
              </span>
            </div>
          </div>

          {/* Key Takeaways Box (Executive Summary) */}
          {data.keyTakeaways && data.keyTakeaways.length > 0 && (
            <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-card via-card to-orange-500/5 border border-orange-500/30 shadow-md">
              <div className="flex items-center gap-2 mb-4 text-orange-500 font-extrabold text-sm uppercase tracking-wider">
                <Sparkles size={16} />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-3">
                {data.keyTakeaways.map((takeaway: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                    <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents (if available) */}
          {tocItems.length > 0 && (
            <div className="mb-12 p-6 rounded-2xl bg-card border border-border shadow-xs">
              <div className="flex items-center gap-2 font-bold text-sm text-foreground mb-4">
                <BookOpen size={16} className="text-orange-500" />
                <span>Table of Contents</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {tocItems.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-1.5 py-1"
                    >
                      <ChevronRight size={13} className="text-orange-500/70 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lead Paragraph */}
          <div className="text-xl sm:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed font-normal mb-12 border-l-4 border-orange-500 pl-6 italic">
            {data.desc}
          </div>

          {/* Rich Content HTML Body */}
          <div
            className="prose prose-slate dark:prose-invert prose-orange max-w-none 
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-foreground prose-h2:tracking-tight
              prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-a:font-semibold
              prose-strong:text-foreground prose-strong:font-bold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-li:mb-2
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-200 prose-blockquote:bg-orange-500/5 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* 3. INTERACTIVE FAQ ACCORDION */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <div className="mb-8">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Expert Insights</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-2xl overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-border/50 pt-4 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. HIGH-CONVERTING STRATEGY AUDIT CTA */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-orange-500/30 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4">
                <Sparkles size={13} /> Free 30-Minute Growth Audit
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Scale Your Brand to 5x+ ROAS?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Stop burning ad budget on guesswork. Partner directly with Jaydeb Jana and our lead media buyers to construct a predictable, scalable customer acquisition machine.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/917872490719?text=Hello%20Arventa%20Ventures,%20I%20read%20your%20guide%20on%20'${encodeURIComponent(data.title)}'%20and%20want%20to%20request%20a%20free%20growth%20audit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/30 text-sm sm:text-base cursor-pointer"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp Direct</span>
                </a>
                <a
                  href="tel:+917872490719"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-colors text-sm sm:text-base"
                >
                  <Phone size={18} />
                  <span>+91 7872490719</span>
                </a>
              </div>
            </div>
          </div>

          {/* 5. EXPLORE OTHER STRATEGIC GUIDES */}
          {otherResources.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Related Guides</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Explore More Arventa Resources</h3>
                </div>
                <Link
                  to="/blog"
                  className="text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherResources.map(({ slug: otherSlug, item, content: otherContent }) => (
                  <Link
                    key={otherSlug}
                    to={`/info/${otherSlug}`}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image || "/images/info-what-is-arventa.webp"}
                        alt={otherContent.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-950/80 text-orange-400 backdrop-blur-sm border border-orange-500/30">
                        {item.category || "Resource"}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-base text-foreground group-hover:text-orange-500 transition-colors line-clamp-2 mb-2">
                          {otherContent.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {otherContent.desc || otherContent.subtitle}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-orange-500">
                        <span>Read Full Guide</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
