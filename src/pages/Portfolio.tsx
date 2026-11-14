import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { portfolio } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(portfolio.map((item) => item.category)),
  ];

  const filteredPortfolio =
    filter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <SEO
        title="Our Case Studies & Portfolio | Client Success Stories"
        description="Explore Arventa Ventures' portfolio of real digital marketing results, e-commerce scale-ups, high-ROAS Meta Ads campaigns, and organic SEO ranking case studies."
        keywords="Digital Marketing Portfolio, Meta Ads Case Studies, SEO Success Stories, E-commerce Growth, Arventa Ventures Work"
        canonicalUrl="/portfolio"
      />
      <section className="py-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-slate-400">
            We measure our success by the growth of our clients. Explore how
            we've helped brands across industries dominate their markets.
          </p>
        </div>
      </section>

      <Section className="pt-0">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-card text-slate-400 hover:text-white border border-border hover:border-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredPortfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-orange-500/50 transition-colors"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.client}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/portfolio-${item.id}/800/600`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-background/90 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-border">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.client}
                    </h3>
                    <p className="text-orange-500 font-medium">
                      {item.service}
                    </p>
                  </div>
                  <Link
                    to="/404"
                    className="p-2 bg-background border border-border rounded-full text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-colors"
                    title="View Case Study"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {item.metrics.map((metric, i) => {
                    const [value, ...rest] = metric.split(" ");
                    return (
                      <div key={i}>
                        <div className="text-xl font-bold text-white mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">
                          {rest.join(" ")}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
