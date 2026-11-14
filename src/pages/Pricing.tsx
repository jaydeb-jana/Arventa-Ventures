import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Video, 
  Image as ImageIcon, 
  Infinity as InfinityIcon, 
  Share2, 
  Crown, 
  Sparkles, 
  Camera, 
  HelpCircle,
  MessageCircle,
  Flame,
  ArrowRight
} from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { pricing } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-950 text-white">
      <SEO
        title="Digital Marketing Packages & Pricing | Arventa Ventures"
        description="Explore affordable digital marketing packages by Arventa Ventures. Starter Boost ₹5,999, Growth Pro ₹10,999, Business Dominance ₹12,999 with videos, posters & unlimited Meta ads."
        keywords="digital marketing packages, meta ads pricing, video marketing packages, low budget marketing agency, Arventa Ventures pricing, best marketing agency kolkata"
        canonicalUrl="/pricing"
      />

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Arventa Ventures Digital Marketing Agency
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
            Digital Marketing <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Packages
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium tracking-widest text-slate-300 uppercase mb-4">
            More Reach <span className="text-orange-500 mx-2">|</span> More Engagement <span className="text-orange-500 mx-2">|</span> More Growth
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Scale your brand with data-backed content creation, viral social media management, and unlimited Meta advertising. No hidden costs.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <Section className="py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {pricing.map((plan, index) => {
            const isDominance = plan.id === "business-dominance";
            const isGrowth = plan.popular;

            return (
              <div
                key={plan.id || index}
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-300 ${
                  isGrowth
                    ? "bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-orange-500 shadow-2xl shadow-orange-500/20 lg:-translate-y-4 z-20"
                    : isDominance
                    ? "bg-gradient-to-b from-amber-950/30 via-slate-900 to-slate-950 border border-amber-500/50 shadow-xl shadow-amber-500/10"
                    : "bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Header Badge */}
                {isGrowth && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                {isDominance && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Crown className="w-3.5 h-3.5 fill-current" />
                      Business Dominance
                    </span>
                  </div>
                )}

                {/* Strikethrough Original Price & Plan Name */}
                <div className="flex items-center justify-between gap-2 mb-4 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 line-through text-base font-semibold">
                      {plan.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {plan.badge}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 uppercase">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Main Price Display */}
                <div className="mb-8 pb-6 border-b border-slate-800 flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 font-medium text-sm">
                    {plan.period}
                  </span>
                </div>

                {/* Deliverables Highlight (Matching the Flyer) */}
                <div className="space-y-3 mb-8 bg-slate-950/70 rounded-2xl p-4 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{plan.videosCount}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {plan.videosNote}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{plan.postersCount}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Custom High-Converting Posters</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                      <InfinityIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{plan.adsManagement}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Targeting, Testing & Management</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{plan.platforms}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">Platforms Covered</div>
                    </div>
                  </div>
                </div>

                {/* Additional Feature List */}
                <div className="mb-8 flex-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    What's Included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2.5 shrink-0 mt-0.5" />
                        <span className="text-slate-300 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3 mt-auto pt-4">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full font-bold rounded-xl ${
                      isGrowth
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl shadow-orange-500/25"
                        : isDominance
                        ? "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-black shadow-xl"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>

                  <a
                    href={`https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-slate-300 hover:text-emerald-400 text-xs font-semibold transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Explicit Video Shoot & Influencer Guidelines (Requested by user) */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Important Policies & Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              ভিডিও তৈরি ও প্রোডাকশন সংক্রান্ত গুরুত্বপূর্ণ তথ্য
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Please review our content production and shoot delivery terms below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rule 1: Video Production Mode */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                ১. প্যাকেজের ভিডিও তৈরি
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                প্যাকেজের অন্তর্ভুক্ত সমস্ত ভিডিও <strong>ক্লায়েন্টের আগে থেকে শুট করা ভিডিও ফুটেজ (Pre-shot raw videos)</strong> এডিট করে আপলোড করা হবে অথবা <strong>উন্নত AI প্রযুক্তির মাধ্যমে স্ক্রিপ্ট ও ভয়েস দিয়ে জেনারেট</strong> করা হবে।
              </p>
            </div>

            {/* Rule 2: Physical Shoot & Influencer Extra Cost */}
            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-6 relative flex flex-col shadow-lg shadow-amber-500/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-amber-300 mb-2">
                ২. অন-সাইট শুট ও ইনফ্লুয়েন্সার
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-1">
                আপনার ব্যবসায়ের জন্য যদি <strong>ক্যামেরা টিম নিয়ে সরাসরি অন-সাইট ভিডিও শুট</strong> করতে হয় অথবা <strong>ভালো মানের জনপ্রিয় ইনফ্লুয়েন্সার (Influencers / Content Creators)</strong> দিয়ে শুট করাতে হয়, তবে তার জন্য <strong>আলাদা চার্জ (Extra Cost)</strong> প্রদান করতে হবে।
              </p>
            </div>

            {/* Rule 3: Ad Spend Budget */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <InfinityIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                ৩. অ্যাড স্পেন্ড বাজেট
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                Meta (Facebook, Instagram) বা অন্যান্য বিজ্ঞাপনের মূল অ্যাড বাজেট ক্লায়েন্ট তার অ্যাড অ্যাকাউন্টে সরাসরি প্রদান করবেন। আমাদের প্যাকেজে <strong>আনলিমিটেড ক্যাম্পেইন সেটআপ, টার্গেটিং ও সম্পূর্ণ ম্যানেজমেন্ট</strong> অন্তর্ভুক্ত।
              </p>
            </div>
          </div>

          <div className="mt-8 text-center bg-slate-950/50 border border-slate-800/80 rounded-2xl p-4">
            <p className="text-slate-400 text-xs">
              💡 কোনো কাস্টম রিকোয়ারমেন্ট, বিশেষ ইনফ্লুয়েন্সার ক্যাম্পেইন বা অফার সম্পর্কে বিস্তারিত জানতে আমাদের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলুন।
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Accelerate Your Brand?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Book your slot today or talk directly with our growth specialists to customize the right strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 w-full sm:w-auto font-bold">
              <Link to="/contact">
                Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <a
              href="https://wa.me/917872490719?text=Hello%20Arventa%20Ventures!%20I'd%20like%20to%20discuss%20pricing%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 py-3.5 text-sm font-bold w-full sm:w-auto transition-all shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp (7872490719)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
