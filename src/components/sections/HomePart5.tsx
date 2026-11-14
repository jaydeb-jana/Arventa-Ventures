import { Link } from "react-router-dom";
import { ArrowRight, Trophy, HeartHandshake, Zap } from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";

export function MissionVision() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-10 bg-card border border-border rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy className="w-32 h-32 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            Our Mission
          </h3>
          <p className="text-slate-400 text-lg relative z-10 leading-relaxed">
            To demystify digital marketing for our clients and provide clear,
            measurable, and highly profitable pathways to scale their
            businesses.
          </p>
        </div>
        <div className="p-10 bg-card border border-border rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <HeartHandshake className="w-32 h-32 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            Our Vision
          </h3>
          <p className="text-slate-400 text-lg relative z-10 leading-relaxed">
            To be the globally recognized standard for agency excellence, where
            creativity meets data to build the market leaders of tomorrow.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function GuaranteeSection() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          The Arventa Ventures Performance Promise
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          We don't hide behind vanity metrics like "impressions" or "reach." We
          tie our success directly to your revenue. If we don't hit the
          agreed-upon KPIs in our initial 90-day sprint, we work for free until
          we do.
        </p>
        <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
          *Terms and conditions apply based on industry average sales cycles.
        </p>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to dominate <br />
          your market?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Stop guessing with your marketing budget. Partner with Arventa
          Ventures and build a predictable, scalable growth engine today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-slate-100 hover:text-orange-700 h-16 px-12 text-lg rounded-full shadow-2xl"
          >
            <Link to="/contact">Book Your Strategy Call</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 h-16 px-12 text-lg rounded-full"
          >
            <Link to="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
