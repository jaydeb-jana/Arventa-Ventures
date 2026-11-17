import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  Home,
  Shirt,
  Scissors,
  Rocket,
  Landmark,
  ArrowRight
} from "lucide-react";

import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

const industries = [
  {
    name: "Local Businesses",
    icon: Building2,
    desc: "Dominate your local market and drive foot traffic.",
    image: "/images/casestudy-clinic.webp",
  },
  {
    name: "Restaurants",
    icon: UtensilsCrossed,
    desc: "Fill tables and grow online delivery orders.",
    image: "/images/portfolio-urbanbrew.webp",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    desc: "Patient acquisition and trust-building campaigns.",
    image: "/images/casestudy-clinic.webp",
  },
  {
    name: "Education",
    icon: GraduationCap,
    desc: "Increase enrollment and brand authority.",
    image: "/images/intro-strategy.webp",
  },
  {
    name: "Real Estate",
    icon: Home,
    desc: "High-ticket lead generation for agents and brokers.",
    image: "/images/portfolio-skylinerealty.webp",
  },
  {
    name: "eCommerce",
    icon: ShoppingBag,
    desc: "Scale online sales with high-ROAS ad funnels.",
    image: "/images/casestudy-apparel.webp",
  },
  {
    name: "Fashion",
    icon: Shirt,
    desc: "Aesthetic branding and visual social commerce.",
    image: "/images/portfolio-novafashion.webp",
  },
  {
    name: "Beauty",
    icon: Scissors,
    desc: "Book out schedules for salons and spas.",
    image: "/images/portfolio-bloombeauty.webp",
  },
  {
    name: "Startups",
    icon: Rocket,
    desc: "Rapid growth strategies for disruptive tech.",
    image: "/images/portfolio-zenithtech.webp",
  },
  {
    name: "Corporate Brands",
    icon: Landmark,
    desc: "Enterprise-level SEO and market positioning.",
    image: "/images/about-team-hq.webp",
  },
];

export default function Industries() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <SEO
        title="Industries We Serve | Tailored Digital Marketing Strategies"
        description="Arventa Ventures provides specialized digital marketing, Meta Ads, and SEO for e-commerce, real estate, healthcare, fashion, restaurants, education, and local businesses."
        keywords="E-commerce Marketing, Real Estate SEO, Restaurant Social Media Marketing, Healthcare Marketing, Local Business SEO, Arventa Ventures"
        canonicalUrl="/industries"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Industries We <span className="text-orange-500">Transform</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Tailored digital marketing strategies designed for the unique challenges of your industry. We don't just participate in markets; we help you dominate them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-14 w-14 rounded-2xl bg-orange-500/20 backdrop-blur-md flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
                    <ind.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {ind.desc}
                  </p>
                  
                  <div className="flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span>View Case Studies</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-slate-900 to-slate-950 opacity-60"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't see your industry?
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Our core marketing principles—data-driven strategy, compelling creative, and ruthless optimization—apply across all B2B and B2C sectors. Contact us to discuss how we can build a custom strategy for your specific niche.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <Link to="/contact">Discuss Your Niche</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
