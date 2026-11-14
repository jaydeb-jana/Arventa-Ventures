import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Home, ArrowRight, Search, PhoneCall, Grid, Sparkles, FileText, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950 text-white relative overflow-hidden">
      <SEO
        title="404 Page Not Found | Arventa Ventures"
        description="The page you are looking for does not exist or has been moved. Explore Arventa Ventures digital marketing services, Meta Ads, SEO, and location guides."
        noindex={true}
      />

      {/* Decorative background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-600/10 to-amber-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full"></div>
      </div>

      <section className="relative py-16 md:py-24 px-6 z-10 my-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-8"
          >
            <Compass className="w-4 h-4 mr-2 text-orange-400 animate-spin-slow" />
            <span>404 - Page Not Found</span>
          </motion.div>

          {/* 404 Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 mb-4 select-none drop-shadow-sm">
              404
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Looks like you&apos;ve wandered off the map
            </h2>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              The page or resource you requested couldn&apos;t be found. It might have been relocated, renamed, or no longer exists on <span className="text-orange-400 font-semibold">arventaventures.online</span>.
            </p>
          </motion.div>

          {/* Quick Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg mx-auto mb-10"
          >
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blog guides, services, locations..."
                className="w-full bg-slate-900/90 border border-slate-800 rounded-full py-4 pl-6 pr-32 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm md:text-base transition-all shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-xs md:text-sm flex items-center transition-colors"
              >
                <Search className="w-4 h-4 mr-1.5" />
                Search
              </button>
            </form>
          </motion.div>

          {/* Action Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-full shadow-lg shadow-orange-500/20">
              <Link to="/" className="flex items-center text-base">
                <Home className="w-5 h-5 mr-2" />
                Back to Homepage
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-slate-800 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-full">
              <Link to="/services" className="flex items-center text-base">
                <Grid className="w-5 h-5 mr-2 text-orange-400" />
                Explore Services
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-slate-800 bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-full">
              <Link to="/contact" className="flex items-center text-base">
                <PhoneCall className="w-5 h-5 mr-2 text-orange-400" />
                Get Free Audit
              </Link>
            </Button>
          </motion.div>

          {/* Key Quick Links Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto"
          >
            <Link
              to="/services"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors flex items-center justify-between">
                Our Services
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 text-xs mt-1">Meta Ads, SEO, Video Making & Brand Identity</p>
            </Link>

            <Link
              to="/locations"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors flex items-center justify-between">
                Our Locations
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 text-xs mt-1">Services in Kolkata, Delhi, Mumbai & 580+ cities</p>
            </Link>

            <Link
              to="/pricing"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <Grid className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors flex items-center justify-between">
                Low Budget Plans
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 text-xs mt-1">Transparent digital marketing agency pricing</p>
            </Link>

            <Link
              to="/blog"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors flex items-center justify-between">
                Marketing Blog
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 text-xs mt-1">40+ Growth guides, Meta Ads & SEO tips</p>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
