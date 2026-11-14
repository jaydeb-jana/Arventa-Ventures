import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, Target, Lightbulb, Trophy, 
  ArrowRight, Globe, BarChart3, ShieldCheck, 
  Zap, Award, TrendingUp, MapPin, CheckCircle2,
  Play
} from "lucide-react";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { SEO } from "@/src/components/common/SEO";

export default function About() {
  const stats = [
    { value: "$5,000+", label: "Client Revenue Generated" },
    { value: "500+", label: "Businesses Helped" },
    { value: "45+", label: "Global Markets" },
    { value: "98%", label: "Client Retention Rate" },
  ];

  const values = [
    {
      icon: Target,
      title: "Results Obsessed",
      desc: "We don't care about vanity metrics. We focus strictly on lead generation, customer acquisition, and measurable revenue growth.",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      desc: "Data informs our strategy, but bold, compelling creativity is what separates our clients from their competitors in crowded markets.",
    },
    {
      icon: Users,
      title: "True Partnership",
      desc: "We act as an extension of your internal team. Radical transparency, constant communication, and shared goals define our approach.",
    },
    {
      icon: Trophy,
      title: "Relentless Excellence",
      desc: "Good isn't enough. We continuously A/B test, optimize, and refine our campaigns to ensure maximum performance and ROI.",
    },
  ];

  const leadership = [
    {
      name: "Jaydeb Jana",
      role: "Founder & CEO",
      image: "https://i.ibb.co/ymz2pCf6/1780219901430.png",
      bio: "I am a 17-year-old Software Engineer passionate about building scalable solutions and driving digital innovation."
    }
  ];

  const timeline = [
    { year: "2018", title: "The Foundation", desc: "Arventa Ventures was founded in a small studio with just three visionary strategists and a single client." },
    { year: "2020", title: "Digital Acceleration", desc: "Scaled operations significantly, helping over 50 brick-and-mortar brands transition to profitable e-commerce models." },
    { year: "2022", title: "Global Expansion", desc: "Opened our first international offices and launched our proprietary data-analytics marketing framework." },
    { year: "2024", title: "Industry Leaders", desc: "Recognized as a top-tier global digital marketing agency, managing over $50M in annual ad spend." },
  ];

  const offices = [
    { city: "West Bengal (HQ)", address: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" },
    { city: "London", address: "One Canada Square, Canary Wharf, E14 5AB", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800" },
    { city: "Singapore", address: "Marina Bay Financial Centre, Tower 1", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800" },
    { city: "New York", address: "100 Wall Street, Suite 500, NY 10005", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Arventa Ventures",
    "description": "Learn about Arventa Ventures, a performance-driven digital marketing agency committed to accelerating revenue growth for brands globally.",
    "url": "https://arventaventures.online/about"
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="About Us | Premium Digital Marketing Agency"
        description="Discover Arventa Ventures — a results-obsessed digital marketing agency powering growth, high-converting Meta Ads, and ROI-driven SEO strategies."
        keywords="About Arventa Ventures, Digital Marketing Team, Performance Marketing Agency, Growth Marketing Experts"
        canonicalUrl="/about"
        structuredData={aboutSchema}
      />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-orange-500/10 via-orange-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                About Arventa Ventures
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Digital Dominance
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                We are a premium collective of strategists, creatives, and data analysts united by one singular goal: driving extraordinary, measurable revenue for our clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-700 hover:bg-slate-800 text-white" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-5 w-5" /> View Showreel
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-800 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Arventa Ventures Team Collaboration" 
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/team/800/1000"; }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center ${index !== 0 ? 'pl-8' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Manifesto */}
      <Section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-6">Our Manifesto</h2>
            <p className="text-3xl md:text-5xl font-medium text-white leading-tight md:leading-[1.2]">
              Marketing is not an expense. It is a mathematical engine for growth. We reject vanity metrics and superficial deliverables. We exist to build scalable acquisition systems that transform businesses into market leaders.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 4. Values */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core Principles</h2>
            <p className="text-xl text-slate-400">The foundational values that guide our strategy, dictate our creative process, and govern every client relationship.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-10 hover:border-orange-500/30 transition-colors"
              >
                <div className="h-16 w-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 border border-orange-500/20">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Approach / Methodology */}
      <Section className="py-24 md:py-32">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Arventa Ventures Method</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                We don't guess. We don't hope. We engineer success through a rigorous, proven methodology designed to minimize risk and maximize upside.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Deep Discovery & Auditing", desc: "We analyze your current data, map your market positioning, and identify immediate growth levers." },
                  { title: "Strategic Architecture", desc: "We build a custom omnichannel blueprint detailing exactly how we will acquire your target customers." },
                  { title: "Creative & Implementation", desc: "Our creative team produces premium assets while our media buyers construct highly targeted ad funnels." },
                  { title: "Scaling & Optimization", desc: "We launch, gather data, kill what doesn't work, and aggressively scale what does." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 font-bold text-sm border border-orange-500/30">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-slate-800/60 h-[600px] shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Data Analysis" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="p-4 bg-orange-500/20 rounded-2xl text-orange-400 border border-orange-500/30">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">Average ROAS Increase</div>
                      <div className="text-slate-400">Across all client accounts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                      +245<span className="text-orange-500">%</span>
                    </div>
                    <div className="flex gap-2 h-16 items-end">
                      {[40, 70, 45, 90, 65, 100].map((height, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className={`w-2 md:w-3 rounded-t-sm ${i === 5 ? 'bg-orange-500' : 'bg-slate-700'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 6. Leadership */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Executive Leadership</h2>
            <p className="text-xl text-slate-400">Meet the visionary guiding our strategy and ensuring excellence across every client account.</p>
          </div>
          
          <div className="grid grid-cols-1 max-w-md mx-auto gap-8">
            {leadership.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 border border-slate-800 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/leader/800/800"; }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <div className="text-orange-500 font-medium mb-4">{leader.role}</div>
                <p className="text-slate-400 leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Agency Culture */}
      <Section className="py-24 md:py-32">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" className="rounded-3xl w-full h-64 object-cover border border-slate-800" alt="Office Life" />
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" className="rounded-3xl w-full h-48 object-cover border border-slate-800" alt="Strategy Session" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="rounded-3xl w-full h-48 object-cover border border-slate-800" alt="Team Meeting" />
                  <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600" className="rounded-3xl w-full h-64 object-cover border border-slate-800" alt="Creative Workshop" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Culture of High Performance</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                We hire the top 1% of digital marketing talent globally. Our culture is demanding, fast-paced, and incredibly rewarding. We foster an environment where data wins arguments, creativity is celebrated, and mediocrity is rejected.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Continuous learning and skill development",
                  "Radical candor and open communication",
                  "Performance-based growth structures",
                  "Global, diverse, and remote-friendly teams"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="h-12 px-8 rounded-full border-slate-700 text-white hover:bg-slate-800">
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 8. Global Offices */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Globe className="h-12 w-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Presence</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
            With offices in major financial and creative hubs, we bring a global perspective to local market dominance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-800 text-left"
              >
                <div className="h-48 overflow-hidden">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                    <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                  </div>
                  <p className="text-slate-400">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative py-32 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay object-cover"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to scale <br/> your business?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop guessing with your marketing budget. Partner with the agency that guarantees data-driven performance and measurable growth.
            </p>
            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20" asChild>
              <Link to="/contact">Schedule a Strategy Call <ArrowRight className="ml-2 h-6 w-6" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
