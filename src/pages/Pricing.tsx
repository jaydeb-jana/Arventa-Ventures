import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { pricing } from "@/src/data";
import { SEO } from "@/src/components/common/SEO";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <SEO
        title="Low Budget Digital Marketing Agency Packages & Pricing | Arventa Ventures"
        description="Looking for a low budget digital marketing agency? Explore transparent, affordable SEO, Meta Ads service, and growth packages by Arventa Ventures."
        keywords="low budget digital marketing agency, affordable digital marketing agency, SEO package cost, meta ads service pricing, digital marketing packages, Arventa Ventures pricing"
        canonicalUrl="/pricing"
      />
      <section className="py-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing for Serious Growth
          </h1>
          <p className="text-xl text-slate-400">
            Choose the marketing package that fits your current stage of
            business. No hidden fees, just pure ROI.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-105 z-10"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm ">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 font-medium">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className="w-full"
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-center">
          <p className="text-slate-400 text-sm italic">
            * Ad spend cost will be provided by the user for unlimited
            sending/management.
          </p>
        </div>
      </Section>
    </div>
  );
}
