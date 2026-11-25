import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import {
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Briefcase,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  Star,
  Phone,
  ShieldCheck,
  ChevronDown,
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  BarChart3,
  Search,
  Layers,
  Compass,
  Clock,
  Sliders,
  Calendar,
  BadgeCheck,
  Terminal,
  Send,
  Check,
  BookOpen,
  MessageSquare,
  Monitor,
  Rocket,
  ArrowUpRight,
  Quote,
  X
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Link } from "react-router-dom";
import { SEO } from "@/src/components/common/SEO";

// Interfaces
interface SkillItem {
  id: string;
  name: string;
  category: "paid_ads" | "seo" | "tech" | "cro" | "leadership";
  proficiency: number;
  description: string;
  tools: string[];
  impactMetric: string;
}

interface CaseStudyItem {
  id: string;
  client: string;
  tagline: string;
  category: "ecommerce" | "realestate" | "healthcare" | "local" | "tech";
  categoryLabel: string;
  metrics: { label: string; value: string; growth: string }[];
  role: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  testimonial: { quote: string; author: string; role: string };
}

export default function Ceo() {
  // State
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("all");
  const [activePortfolioCategory, setActivePortfolioCategory] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [consultForm, setConsultForm] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    budget: "₹50,000 - ₹1,50,000 / month",
    goal: "Paid Ads Scaling (Meta / Google)",
    message: ""
  });
  const [isConsultSubmitted, setIsConsultSubmitted] = useState(false);

  // Structured Data for Google Search Ranking
  const ceoStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://arventaventures.online/ceo#person",
        "name": "Jaydeb Jana",
        "alternateName": ["Jaydeb", "Jaydeb Jana CEO", "Jaydeb Jana Arventa"],
        "jobTitle": "Founder & Chief Executive Officer",
        "description": "Founder & CEO of Arventa Ventures. Leading high-impact performance marketing, full-stack software architecture, and programmatic SEO scaling over 500+ global brands and generating ₹15 Cr+ in validated client revenue.",
        "image": "https://arventaventures.online/images/jaydeb-jana-executive.webp",
        "url": "https://arventaventures.online/ceo",
        "email": "ceo@arventaventures.online",
        "telephone": "+917872490719",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://arventaventures.online/#organization",
          "name": "Arventa Ventures",
          "url": "https://arventaventures.online",
          "logo": "https://arventaventures.online/logo.png"
        },
        "sameAs": [
          "https://www.instagram.com/iamjaydebjana",
          "https://www.facebook.com/share/19J9Nm6Gg6/",
          "https://www.facebook.com/p/Arventa-Ventures-61573258438828/",
          "https://share.google/9g673CLWFHS9j6tb9",
          "https://arventaventures.online"
        ],
        "knowsAbout": [
          "Performance Marketing & Meta Advantage+ Scaling",
          "Google Ads (Search, Performance Max, YouTube)",
          "Technical SEO & Core Web Vitals Optimization",
          "Full-Stack Web Engineering (React, Next.js, TypeScript)",
          "Conversion Rate Optimization (CRO)",
          "Algorithmic Media Buying & Server-Side CAPI",
          "AI Workflows & Business Automation",
          "E-Commerce & High-Ticket Lead Funnels",
          "Executive Brand Strategy & Unit Economics"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Chief Executive Officer & Digital Growth Architect",
          "occupationalCategory": "11-1011.00 - Chief Executives",
          "skills": "Performance Marketing, Technical SEO, Full-Stack Software Engineering, CRO, High-Ticket Funnel Architecture"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://arventaventures.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Executive Leadership",
            "item": "https://arventaventures.online/about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Jaydeb Jana - Founder & CEO",
            "item": "https://arventaventures.online/ceo"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Jaydeb Jana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Jaydeb Jana is the Founder & CEO of Arventa Ventures, a premier digital growth and performance marketing agency. He is a tech entrepreneur, software engineer, and algorithmic growth strategist who has scaled over 500+ client campaigns, generating ₹15 Cr+ in validated client revenue."
            }
          },
          {
            "@type": "Question",
            "name": "What services and growth strategies does Jaydeb Jana specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Jaydeb specializes in full-funnel digital growth, including Meta Ads (Advantage+ and CAPI), Google Ads (High-intent Search and PMax), Technical SEO and Core Web Vitals dominance, custom software development (React, Next.js, TypeScript), and Conversion Rate Optimization (CRO)."
            }
          },
          {
            "@type": "Question",
            "name": "Does Jaydeb Jana personally oversee campaigns and client strategies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. As Founder & CEO, Jaydeb directly architects high-level growth blueprints, attribution modeling, and conversion funnels for partner brands, working alongside Arventa Ventures' specialized media buyers and engineering talent."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a 1-on-1 strategic growth consultation with Jaydeb Jana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can schedule a consultation directly via the contact form on this page, email ceo@arventaventures.online, or reach out directly on WhatsApp at +91 7872490719."
            }
          }
        ]
      }
    ]
  };

  // Executive Core Skills Data
  const skills: SkillItem[] = [
    {
      id: "meta-ads",
      name: "Algorithmic Meta Ads (Advantage+ & CAPI)",
      category: "paid_ads",
      proficiency: 98,
      description: "Mastery of Meta's machine learning delivery system, Advantage+ shopping campaigns, server-side Conversion API (CAPI), and high-velocity UGC creative testing.",
      tools: ["Meta Ads Manager", "Meta CAPI", "Triple Whale", "Pixel Engine"],
      impactMetric: "Scaled client to 4.52x ROAS & -30% CPA"
    },
    {
      id: "google-ads",
      name: "Google Search & Performance Max (PMax)",
      category: "paid_ads",
      proficiency: 96,
      description: "Laser-targeted intent capture, negative keyword fencing, automated smart bidding, and omnichannel Performance Max funnels driving qualified high-ticket leads.",
      tools: ["Google Ads Suite", "Google Search Console", "Google Merchant Center"],
      impactMetric: "₹95+ Cr in closed high-ticket real estate"
    },
    {
      id: "technical-seo",
      name: "Technical SEO & Core Web Vitals Dominance",
      category: "seo",
      proficiency: 99,
      description: "Deep algorithmic optimization for Google Search, structured Schema.org graph engineering, sub-second LCP/INP performance, and crawl budget maximization.",
      tools: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
      impactMetric: "Ranked #1 on Google across 18 high-intent terms"
    },
    {
      id: "local-seo",
      name: "Local 3-Pack & Google Maps Domination",
      category: "seo",
      proficiency: 97,
      description: "Hyperlocal entity citation clustering, automated 5-star review acquisition workflows, and geocoded GBP profile optimization for local businesses.",
      tools: ["Google Business Profile", "BrightLocal", "GeoImgr"],
      impactMetric: "+280% direct calls for healthcare clinics"
    },
    {
      id: "frontend-eng",
      name: "Modern Frontend Engineering (React / Next.js)",
      category: "tech",
      proficiency: 96,
      description: "Building blazing-fast web architectures, headless landing pages, reactive state management, and cinematic UI animations with Framer Motion and Tailwind CSS.",
      tools: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      impactMetric: "Sub-second 99+ Lighthouse performance scores"
    },
    {
      id: "backend-api",
      name: "Cloud Backend, APIs & Data Pipelines",
      category: "tech",
      proficiency: 91,
      description: "Architecting secure serverless endpoints, Python automation scripts, webhooks, and Supabase / Postgres database models powering client telemetry portals.",
      tools: ["Node.js", "Python", "Supabase", "REST & GraphQL", "Cloudflare"],
      impactMetric: "Automated real-time reporting for 500+ campaigns"
    },
    {
      id: "cro-funnels",
      name: "Conversion Rate Optimization (CRO) & Funnels",
      category: "cro",
      proficiency: 97,
      description: "Systematic scientific testing: heatmaps, scroll depth analytics, psychological hook matrices, and friction removal turning cold traffic into paying customers.",
      tools: ["Hotjar Heatmaps", "Microsoft Clarity", "Google Optimize", "A/B Split"],
      impactMetric: "+120% e-commerce checkout conversion rate"
    },
    {
      id: "automation-crm",
      name: "Lead Automation & Instant WhatsApp Routing",
      category: "cro",
      proficiency: 95,
      description: "Zero-latency lead routing pipelines that instantly push incoming inquiries to WhatsApp, SMS, and CRM systems, slashing lead response times under 60 seconds.",
      tools: ["WhatsApp Cloud API", "Zapier", "Make", "HubSpot CRM"],
      impactMetric: "15.4% lead-to-sale conversion rate"
    },
    {
      id: "executive-leadership",
      name: "Venture Leadership & Growth Strategy",
      category: "leadership",
      proficiency: 98,
      description: "Leading multi-disciplinary creative and technical teams, architecting sustainable P&L growth models, and structuring high-ROI growth partnerships.",
      tools: ["Financial Modeling", "Brand Architecture", "Strategic Advisory"],
      impactMetric: "98.4% annual client partner retention"
    }
  ];

  // Portfolio & Case Studies
  const caseStudies: CaseStudyItem[] = [
    {
      id: "nova-fashion",
      client: "Nova Fashion Studio",
      tagline: "D2C E-Commerce High-ROAS Performance Scale",
      category: "ecommerce",
      categoryLabel: "eCommerce & D2C",
      role: "Lead Performance Architect & Funnel Engineer",
      image: "/images/portfolio-novafashion.webp",
      metrics: [
        { label: "Blended Ad ROAS", value: "4.52x", growth: "+211%" },
        { label: "Monthly Gross Sales", value: "₹10.6L+", growth: "+120%" },
        { label: "Customer Acquisition Cost", value: "-30%", growth: "Cost Slashed" }
      ],
      summary: "Scaled Nova Fashion from an unsustainable 1.45x return into a high-margin D2C growth machine generating over 4.5x blended ROAS during peak competitive quarters.",
      challenge: "Burning capital on generic carousel ads with an unsustainable 1.45x ROAS and escalating customer acquisition costs in the crowded lifestyle apparel space.",
      solution: "Architected an Advantage+ shopping campaign pipeline paired with rapid-iteration UGC video hooks, dynamic catalog retargeting, and high-speed custom landing page landers.",
      results: "Delivered 4.52x blended ROAS, scaled monthly revenue by 120% to ₹10.6L+, and reduced customer acquisition cost by 30% within 90 days.",
      techStack: ["Meta Advantage+ Ads", "Shopify Plus", "Klaviyo VIP Flows", "Triple Whale", "Canva Pro"],
      testimonial: {
        quote: "Jaydeb and the Arventa team completely redefined our unit economics. We went from breaking even to achieving an uncompromising 4.5x consistent ROAS.",
        author: "Ananya Sen",
        role: "Creative Director, Nova Fashion"
      }
    },
    {
      id: "zenith-properties",
      client: "Zenith Properties",
      tagline: "Luxury High-Net-Worth Real Estate Acquisition",
      category: "realestate",
      categoryLabel: "Luxury Real Estate",
      role: "Strategic Search Architect & Lead Scoring Lead",
      image: "/images/portfolio-skylinerealty.webp",
      metrics: [
        { label: "Gross Property Value Sold", value: "₹95+ Cr", growth: "+533%" },
        { label: "Verified HNWI Inquiries", value: "52/mo", growth: "+550%" },
        { label: "Cost Per Qualified Buyer", value: "-42%", growth: "Optimized" }
      ],
      summary: "Architected a laser-focused Google Search acquisition engine that captured high-net-worth real estate buyers, closing over ₹95 Crores in luxury inventory.",
      challenge: "High influx of unqualified, budget-constrained inquiries overwhelming sales agents and producing negligible conversion on premium luxury penthouses.",
      solution: "Engineered high-intent Google Search campaigns with negative keyword fencing, income-bracket qualification forms, and bespoke virtual tour landing pages.",
      results: "Generated 52+ verified HNWI buyers monthly, lowering cost per qualified buyer by 42% and facilitating ₹95+ Crores in luxury unit sales.",
      techStack: ["Google Ads Engine", "Salesforce CRM", "Next.js Custom Landers", "Hotjar Analytics"],
      testimonial: {
        quote: "We eliminated time-wasting inquiries overnight. The buyer leads generated through Jaydeb's search architecture had actual capital and closed our premier units.",
        author: "Rajesh Singhania",
        role: "VP Sales, Zenith Properties"
      }
    },
    {
      id: "elite-dental",
      client: "Elite Dental Care",
      tagline: "Hyper-Local Search Dominance & Clinical Trust",
      category: "healthcare",
      categoryLabel: "Healthcare & Clinics",
      role: "Local Search Architect & Technical SEO Lead",
      image: "/images/casestudy-clinic.webp",
      metrics: [
        { label: "Google 3-Pack Rank", value: "#1", growth: "Across 18 Terms" },
        { label: "New Monthly Patients", value: "+150", growth: "+500%" },
        { label: "Direct Phone Inquiries", value: "+280%", growth: "Surge" }
      ],
      summary: "Transformed an invisible suburban dental practice into the #1 ranked clinical destination on Google Maps across the entire metropolitan district.",
      challenge: "The clinic was unfindable beyond a 500-meter radius on Google Maps, losing lucrative dental implant and orthodontic patients to competing practices.",
      solution: "Overhauled Google Business Profile citations, deployed geotagged treatment photo workflows, automated 5-star review collection via SMS, and deployed targeted high-intent search ads.",
      results: "Clinched rank #1 on Google Maps across 18 key clinical terms, driving 150+ new high-margin patients and a 280% increase in inbound calls in 45 days.",
      techStack: ["Google Business Profile", "Google Search Console", "SEMrush Local", "Twilio SMS API"],
      testimonial: {
        quote: "Our appointment calendar has been completely booked out for two months straight. Jaydeb's local search strategy is the single highest-ROI investment we ever made.",
        author: "Dr. Alok Banerjee",
        role: "Chief Dental Surgeon, Elite Dental"
      }
    },
    {
      id: "apex-fitness",
      client: "Apex Fitness Club",
      tagline: "High-Ticket Membership Acquisition Engine",
      category: "local",
      categoryLabel: "Local Business",
      role: "Funnel Architect & WhatsApp Automation Lead",
      image: "/images/portfolio-apexfitness.webp",
      metrics: [
        { label: "Qualified Walk-in Leads", value: "320+", growth: "+1,180%" },
        { label: "Lead-to-Member Close", value: "15.4%", growth: "+266%" },
        { label: "Annual Memberships Closed", value: "+85", growth: "Sold Out" }
      ],
      summary: "Engineered a viral 3-question fitness quiz funnel paired with instant WhatsApp lead routing that completely filled all gym membership tiers in 30 days.",
      challenge: "Stagnant gym membership sales and high lead drop-off due to delayed front-desk follow-ups and uninspired generic gym advertisements.",
      solution: "Constructed an interactive goal-assessment quiz linked to instant automated WhatsApp consultation booking, backed by cinematic member transformation video ads.",
      results: "Delivered 320+ pre-qualified leads in 30 days, achieving an unprecedented 15.4% sales close rate and signing 85 annual high-ticket memberships.",
      techStack: ["Meta Instant Forms", "WhatsApp Cloud API", "Zapier Automation", "HubSpot CRM"],
      testimonial: {
        quote: "Our sales staff couldn't keep up with the walk-ins! We closed 85 annual contracts in one month thanks to Jaydeb's WhatsApp automation funnel.",
        author: "Vikram Malhotra",
        role: "Managing Director, Apex Fitness"
      }
    },
    {
      id: "urban-brew",
      client: "Urban Brew Café",
      tagline: "Hyper-Local Gastronomy Footfall Surge",
      category: "local",
      categoryLabel: "Hospitality & Local",
      role: "Creative Growth Director & Media Buyer",
      image: "/images/portfolio-urbanbrew.webp",
      metrics: [
        { label: "Foot Traffic Growth", value: "+40%", growth: "+41%" },
        { label: "Targeted Local Followers", value: "15,200+", growth: "+1,266%" },
        { label: "Google Maps Actions", value: "3.4x", growth: "+240%" }
      ],
      summary: "Crafted a localized short-form video reel engine paired with geo-fenced Meta radius ads that turned a neighborhood café into a viral weekend hotspot.",
      challenge: "Severe weekday foot-traffic lulls and fierce competition from national commercial coffee chains in the metropolitan area.",
      solution: "Built a content machine pairing high-appetite coffee Reels with geo-targeted 2km radius Meta ads and an automated Google Maps review incentive system.",
      results: "Achieved a 40% surge in weekday foot-traffic, gained 15,200+ local foodies, and established hour-long table waitlists on weekends within 90 days.",
      techStack: ["Meta Ads Manager", "Google Maps Platform", "CapCut Pro", "Local Rank Tracker"],
      testimonial: {
        quote: "Jaydeb turned our café into the trending weekend spot in Kolkata. Our weekday coffee sales jumped 40% in two months!",
        author: "Karan Patel",
        role: "Co-Founder, Urban Brew"
      }
    },
    {
      id: "arventa-platform",
      client: "Arventa Ventures Core Telemetry",
      tagline: "Proprietary High-Performance Agency Architecture",
      category: "tech",
      categoryLabel: "Custom Software",
      role: "Full-Stack System Architect & Tech Lead",
      image: "/images/service-growth-telemetry.webp",
      metrics: [
        { label: "Google Lighthouse Score", value: "99+", growth: "Peak Grade" },
        { label: "Largest Contentful Paint", value: "<0.4s", growth: "Sub-Second" },
        { label: "Automated Data Feeds", value: "100%", growth: "Zero Latency" }
      ],
      summary: "Architected Arventa Ventures' proprietary full-stack agency telemetry, combining headless Next.js frontends, automated Looker Studio feeds, and enterprise-grade CAPI tracking.",
      challenge: "Traditional agency reporting was fragmented, slow, and relied on manual spreadsheet updates with inaccurate ad platform attribution.",
      solution: "Engineered a headless, high-performance web platform with automated server-side webhook pipelines, real-time client attribution dashboards, and 99+ Core Web Vitals.",
      results: "Cut client reporting turnaround from days to milliseconds, delivered flawless 99+ Lighthouse performance scores, and eliminated attribution discrepancies.",
      techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Looker Studio API"],
      testimonial: {
        quote: "Our custom architecture allows our clients to see their real-time net ROAS without vanity fluff. Technology is our competitive moat.",
        author: "Jaydeb Jana",
        role: "Founder & CEO, Arventa Ventures"
      }
    }
  ];

  // Career Journey Milestones
  const milestones = [
    {
      year: "2023",
      title: "The Genesis: Code, Algorithms & Early Experiments",
      role: "Software Developer & Performance Marketer",
      description: "Immersed in deep full-stack software development (Python, React, API design) and algorithmic media buying. Executed 50+ experimental growth campaigns, mastering ad auction dynamics and unit economics from first principles."
    },
    {
      year: "2024",
      title: "Founding Arventa Ventures & The First ₹5 Crore",
      role: "Founder & Chief Executive Officer",
      description: "Officially launched Arventa Ventures to unite technical software architecture with creative media buying. Scaled high-velocity D2C eCommerce brands, crossed ₹5 Crores in tracked client revenue, and built our proprietary multi-tier testing framework."
    },
    {
      year: "2025",
      title: "Enterprise Scaling, Local 3-Pack & High-Ticket Funnels",
      role: "Chief Executive Officer & Lead Architect",
      description: "Expanded into high-ticket real estate, healthcare clinic networks, and enterprise technical SEO. Pioneered our Google Maps 3-pack domination blueprint and crossed ₹10 Crores in client revenue with near-zero churn."
    },
    {
      year: "2026",
      title: "Omnichannel Scale, AI Telemetry & 500+ Brands",
      role: "Visionary CEO & Tech Entrepreneur",
      description: "Directing 500+ successful campaigns worldwide across India, US, UK, and UAE. Delivering ₹15 Cr+ in validated client revenue with a 98.4% retention rate, pioneering AI-assisted attribution, and solidifying Arventa Ventures as an industry leader."
    }
  ];

  // Certifications & Accreditations
  const certifications = [
    {
      title: "Meta Certified Media Buying Professional",
      issuer: "Meta Blueprint",
      year: "2025 - 2026",
      specialty: "Advantage+ Shopping, Server-Side CAPI Tracking & Creative Testing"
    },
    {
      title: "Google Ads Search & Performance Max Specialist",
      issuer: "Google Skillshop",
      year: "2025 - 2026",
      specialty: "High-Intent Search Auctions, Smart Bidding & Cross-Channel PMax"
    },
    {
      title: "Enterprise Technical SEO & Core Web Vitals Master",
      issuer: "SEMrush / Search Academy",
      year: "2024 - 2026",
      specialty: "Schema Graph, Crawl Optimization, Sub-second LCP & INP"
    },
    {
      title: "Full-Stack Software Architecture (React / Next.js)",
      issuer: "Tech Engineering Standards",
      year: "2024 - 2026",
      specialty: "Modern Headless Frontend, Python Automation & RESTful APIs"
    }
  ];

  // Executive FAQs
  const faqs = [
    {
      question: "What makes Jaydeb Jana's growth methodology different from other agencies?",
      answer: "Most digital marketing agencies operate as pure creative shops or manual button-pushers. Jaydeb approaches growth as an engineer: combining deep full-stack code (React, Next.js, Python), server-side Conversion API tracking, and algorithmic auction mechanics. We focus on net ROAS, contribution margin, and verifiable pipeline revenue—not vanity impressions."
    },
    {
      question: "Does Jaydeb personally consult with and advise partner brands?",
      answer: "Yes. Jaydeb personally leads executive growth audits, attribution modeling, and funnel architecture for our partners. He works directly with brand founders and marketing executives to define the growth blueprint before our specialized media buyers and creative directors execute."
    },
    {
      question: "What is the typical timeframe to see compounding results?",
      answer: "For Paid Media (Meta & Google Ads), initial test phases establish baseline winning hooks within 7 to 14 days, followed by aggressive scaling over 30 to 60 days. For Technical SEO and Google Maps 3-Pack domination, measurable rank surges and inbound call growth typically compound within 30 to 90 days."
    },
    {
      question: "What is the minimum budget required to partner with Arventa Ventures?",
      answer: "We offer tailored solutions ranging from affordable starter packages for ambitious local clinics and cafes (from ₹15,000 - ₹35,000/mo) up to enterprise-level growth retainers for high-ticket D2C and real estate brands spending ₹1,00,000 - ₹5,00,000+/mo in media capital."
    },
    {
      question: "How do I book a direct consultation with Jaydeb Jana?",
      answer: "You can submit the consultation form on this page, send an email directly to ceo@arventaventures.online, or message Jaydeb directly on WhatsApp at +91 7872490719. Responses are typically provided within 2 to 4 business hours."
    }
  ];

  // Filtered skills
  const filteredSkills = activeSkillCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeSkillCategory);

  // Filtered case studies
  const filteredCaseStudies = activePortfolioCategory === "all"
    ? caseStudies
    : caseStudies.filter(c => c.category === activePortfolioCategory);

  // Handle consultation form submission
  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Executive Consultation Request - Arventa Ventures*
*Name:* ${consultForm.name}
*Company / Brand:* ${consultForm.brand}
*Work Email:* ${consultForm.email}
*Phone / WhatsApp:* ${consultForm.phone}
*Monthly Ad Budget:* ${consultForm.budget}
*Primary Growth Objective:* ${consultForm.goal}

*Bottlenecks & Current Targets:*
${consultForm.message || "Executive strategy consultation requested directly with Jaydeb Jana."}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917872490719?text=${encoded}`;
    setIsConsultSubmitted(true);

    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      const win = window.open(whatsappUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background text-foreground selection:bg-orange-500 selection:text-white">
      {/* Search Engine Optimization */}
      <SEO
        title="Jaydeb Jana | Founder & CEO at Arventa Ventures - Growth Architect & Tech Entrepreneur"
        description="Explore the executive portfolio of Jaydeb Jana, Founder & CEO of Arventa Ventures. Track record of scaling 500+ campaigns, generating ₹15 Cr+ client revenue, mastering Meta/Google ads, technical SEO, and full-stack software engineering."
        keywords="Jaydeb Jana, Jaydeb Jana CEO, Founder Arventa Ventures, Tech Entrepreneur India, Digital Growth Architect, Performance Marketing Expert Kolkata, Technical SEO Specialist, Full Stack Engineer Marketing"
        canonicalUrl="/ceo"
        ogType="website"
        ogImage="https://arventaventures.online/images/jaydeb-jana-executive.webp"
        structuredData={ceoStructuredData}
      />

      {/* 1. Hero Section: Executive Leadership */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-border">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-background/90 to-background pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-orange-500/10 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Executive Bio & Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Executive Status Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border text-foreground text-[11px] sm:text-xs mb-6 tracking-wide uppercase font-semibold shadow-md">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                <span>Executive Leadership</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-orange-500 font-bold">Arventa Ventures</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500">
                  Digital Supremacy
                </span>
              </h1>

              {/* Sub-headline with high contrast in both themes */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                I am <span className="text-foreground font-bold dark:text-white">Jaydeb Jana</span>, Founder & CEO of <span className="text-orange-500 font-semibold">Arventa Ventures</span>. I architect mathematical growth systems—merging algorithmic media buying, technical search dominance, and full-stack software to turn ambitious brands into industry category leaders.
              </p>

              {/* Key Quantitative Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 rounded-2xl bg-card border border-border shadow-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">₹15 Cr+</div>
                  <div className="text-xs text-muted-foreground font-medium">Client Revenue</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">500+</div>
                  <div className="text-xs text-muted-foreground font-medium">Scaled Campaigns</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">4.5x</div>
                  <div className="text-xs text-muted-foreground font-medium">Avg. Blended ROAS</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">98.4%</div>
                  <div className="text-xs text-muted-foreground font-medium">Retention Rate</div>
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-base sm:text-lg h-14 px-8 shadow-xl shadow-orange-500/20 font-bold"
                  asChild
                >
                  <a href="#consultation">
                    Book 1-on-1 Growth Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full border-border bg-card hover:bg-muted text-foreground text-base h-14 px-8"
                  asChild
                >
                  <a href="#portfolio">
                    Explore Track Record
                  </a>
                </Button>
              </div>

              {/* Direct CEO Channels */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Direct Channels:</span>
                
                <a 
                  href="mailto:ceo@arventaventures.online" 
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground hover:text-orange-500 bg-card px-3.5 py-1.5 rounded-full border border-border transition-colors shadow-sm"
                  title="Direct CEO Email"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-500" />
                  ceo@arventaventures.online
                </a>

                <a 
                  href="https://wa.me/917872490719?text=Hi%20Jaydeb,%20I%20would%20like%20to%20discuss%20scaling%20our%20business%20with%20Arventa%20Ventures." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground hover:text-emerald-500 bg-card px-3.5 py-1.5 rounded-full border border-border transition-colors shadow-sm"
                  title="WhatsApp Direct Line"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  +91 7872490719
                </a>

                <div className="flex items-center gap-2 ml-auto">
                  <a 
                    href="https://www.instagram.com/iamjaydebjana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:border-orange-500/50 transition-all shadow-sm"
                    title="Jaydeb Jana Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/19J9Nm6Gg6/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:border-orange-500/50 transition-all shadow-sm"
                    title="Jaydeb Jana Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://share.google/9g673CLWFHS9j6tb9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:border-orange-500/50 transition-all shadow-sm"
                    title="Google Business Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-End Executive Portrait Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              {/* Backlight / Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[2.5rem] transform rotate-2 scale-[1.03] opacity-25 blur-2xl -z-10" />
              <div className="absolute inset-0 bg-card rounded-[2.5rem] transform -rotate-1 scale-[1.01] border border-orange-500/20 -z-10 shadow-xl" />

              {/* Main Card Frame */}
              <div className="relative rounded-[2.2rem] overflow-hidden border border-border bg-slate-900 shadow-2xl group">
                <img 
                  src="/images/jaydeb-jana-executive.webp" 
                  alt="Jaydeb Jana - Founder and CEO at Arventa Ventures"
                  className="w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                {/* Floating Top Badge */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-orange-500/40 text-orange-400 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <BadgeCheck className="w-4 h-4 text-orange-500" />
                  Verified Tech Founder & CEO
                </div>

                {/* Floating Revenue Badge */}
                <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  ₹15 Cr+ Scaled
                </div>

                {/* Bottom Profile Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                        Jaydeb Jana
                      </h2>
                      <p className="text-orange-400 font-semibold text-sm sm:text-base mb-2">
                        Founder & Chief Executive Officer
                      </p>
                      <p className="text-xs text-slate-300 font-light max-w-xs">
                        Algorithmic Media Buying • Technical SEO • Full-Stack Web Architecture
                      </p>
                    </div>
                    
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 backdrop-blur-md flex items-center justify-center border border-orange-500/40 shadow-lg shadow-orange-500/20 shrink-0">
                      <Zap className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Executive Story & Philosophy: War Room */}
      <Section className="py-24 bg-background relative border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Interactive Visual Asset (War Room Blueprint) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border bg-slate-900 shadow-2xl group">
                <img 
                  src="/images/jaydeb-jana-warroom.webp" 
                  alt="Jaydeb Jana directing strategy at Arventa Ventures Innovation War Room" 
                  className="w-full aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Terminal className="w-4 h-4" />
                    Arventa Ventures Strategy & Telemetry Hub
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    Where real-time ad attribution models, conversion funnels, and programmatic SEO algorithms are engineered before scaling.
                  </p>
                </div>
              </div>
              
              {/* Subtle Ambient Dots */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] -z-10" />
            </motion.div>

            {/* Right: Executive Narrative & 4 Flywheel Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
                <Compass className="w-3.5 h-3.5" />
                The Core Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                The Synthesis of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Code & Commerce
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-foreground/80 dark:text-slate-300 font-light leading-relaxed mb-8">
                <p>
                  Most marketing agencies operate with outdated playbooks—obsessing over vanity impressions, follower counts, and superficial metrics. At Arventa Ventures, I built our entire operating system on an unapologetic engineering principle:
                </p>
                <blockquote className="p-4 rounded-xl bg-card border-l-4 border-orange-500 text-foreground font-medium italic text-base shadow-sm">
                  "If a growth campaign cannot be traced to net contribution margin, lowered acquisition cost, or measurable search dominance, it is nothing more than expensive noise."
                </blockquote>
                <p>
                  By understanding the underlying code of modern web architectures and combining it with the machine-learning auctions of Meta and Google, we build automated customer pipelines that scale systematically.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">01</div>
                    <h3 className="text-foreground font-bold text-sm">Algorithmic Precision</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">Aligning targeting with Meta CAPI & Google machine-learning engines.</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">02</div>
                    <h3 className="text-foreground font-bold text-sm">Velocity Creative</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">Testing 20+ hook and angle variations weekly to conquer ad fatigue.</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">03</div>
                    <h3 className="text-foreground font-bold text-sm">Full-Stack CRO</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">Sub-second page speeds and frictionless checkout architectures.</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">04</div>
                    <h3 className="text-foreground font-bold text-sm">Net ROAS Obsession</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">Zero hidden markups. Live Looker dashboards with true attribution.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* 3. Mastered Skills Matrix: Interactive Categorized Stack */}
      <section id="skills" className="py-24 bg-card/40 relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5" />
              Technical & Strategic Stack
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-6">
              Mastered Disciplines & Capabilities
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              A comprehensive breakdown of the specialized software, algorithmic media buying, and search authority skillsets I have mastered to scale digital ventures.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Disciplines" },
                { id: "paid_ads", label: "Paid Ads & Media Buying" },
                { id: "seo", label: "Technical SEO & Search" },
                { id: "tech", label: "Full-Stack Tech & APIs" },
                { id: "cro", label: "CRO & Automations" },
                { id: "leadership", label: "Venture Leadership" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeSkillCategory === tab.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-3xl bg-card border border-border hover:border-orange-500/50 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Header: Name and Proficiency */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-orange-500">
                          {skill.category.replace("_", " ")}
                        </span>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors mt-0.5">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xl font-extrabold text-foreground">{skill.proficiency}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-muted overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {skill.description}
                    </p>
                  </div>

                  <div>
                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {skill.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-background border border-border text-foreground/80">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Impact Metric */}
                    <div className="p-3 rounded-xl bg-orange-500/5 border border-orange-500/20 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium">Proven Impact:</span>
                      <span className="text-orange-500 font-bold">{skill.impactMetric}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Executive Portfolio & Case Studies: What I've Built & Scaled */}
      <section id="portfolio" className="py-24 bg-background relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Executive Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-6">
              Transformative Case Studies
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              A curated look into multi-crore growth campaigns, algorithmic media funnels, and enterprise architectures I personally directed and scaled.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Case Studies" },
                { id: "ecommerce", label: "eCommerce & D2C" },
                { id: "realestate", label: "Real Estate" },
                { id: "healthcare", label: "Healthcare & Clinics" },
                { id: "local", label: "Local Businesses" },
                { id: "tech", label: "Custom Software" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActivePortfolioCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activePortfolioCategory === tab.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-3xl bg-card border border-border overflow-hidden hover:border-orange-500/50 transition-all flex flex-col justify-between group shadow-xl"
                >
                  {/* Image Card Header */}
                  <div className="relative aspect-video sm:h-56 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.client} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/10 text-orange-400 text-xs font-bold">
                      {study.categoryLabel}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold mb-1">
                        Role: <span className="text-foreground">{study.role}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors mb-2">
                        {study.client}
                      </h3>
                      <p className="text-xs text-orange-500 font-medium mb-4">
                        {study.tagline}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6 font-light">
                        {study.summary}
                      </p>
                    </div>

                    <div>
                      {/* Metric Badges */}
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-muted/50 border border-border mb-6">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="text-sm font-extrabold text-foreground">{m.value}</div>
                            <div className="text-[10px] text-orange-500 font-bold leading-none">{m.growth}</div>
                            <div className="text-[9px] text-muted-foreground mt-1 leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* View Details Trigger */}
                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="w-full py-3 rounded-xl bg-muted hover:bg-orange-500 text-foreground hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-orange-500/20"
                      >
                        Deep Dive Case Study <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-muted text-muted-foreground hover:text-white hover:bg-orange-500 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  {selectedCaseStudy.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                  {selectedCaseStudy.client}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{selectedCaseStudy.tagline}</p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/60 border border-border mb-8">
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-xl font-black text-orange-500">{m.value}</div>
                    <div className="text-xs text-emerald-500 font-semibold">{m.growth}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8 text-sm sm:text-base text-foreground/90">
                <div>
                  <h4 className="text-foreground font-bold text-base mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-orange-500" />
                    The Growth Challenge
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-foreground font-bold text-base mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-500" />
                    Jaydeb's Architectural Solution
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-foreground font-bold text-base mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    Compounded Business Results
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {selectedCaseStudy.results}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="text-xs font-semibold text-muted-foreground mb-2">Technologies & Tooling:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full bg-background border border-border text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/30">
                <p className="text-sm italic text-foreground mb-3">"{selectedCaseStudy.testimonial.quote}"</p>
                <div className="text-xs font-bold text-orange-500">{selectedCaseStudy.testimonial.author}</div>
                <div className="text-[11px] text-muted-foreground">{selectedCaseStudy.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. Keynote & Thought Leadership Section */}
      <section className="py-24 bg-card/50 relative border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Keynote Image Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border bg-slate-900 shadow-2xl group">
                <img 
                  src="/images/jaydeb-jana-keynote.webp" 
                  alt="Jaydeb Jana presenting on stage at tech and performance marketing summit" 
                  className="w-full aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                  <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Public Keynotes & Executive Briefings
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    Speaking on algorithmic media buying, AI automation pipelines, and engineering-driven conversion architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Speaking Topics & Thought Leadership */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-6">
                <Award className="w-3.5 h-3.5" />
                Thought Leadership
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Demystifying the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Next-Gen Growth Frontier
                </span>
              </h2>

              <p className="text-foreground/80 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                As the media buying and search landscapes shift toward autonomous artificial intelligence models, Jaydeb actively delivers keynote insights and private boardroom briefings to help business leaders stay ahead of auction mechanics.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-card border border-border hover:border-orange-500/30 transition-colors shadow-sm">
                  <h3 className="text-foreground font-bold text-sm sm:text-base mb-1">
                    The Algorithmic Media Shift: Winning Meta Advantage+ in 2026
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">
                    How machine learning auctions reward high-velocity creative testing and server-side Conversion API data integrity over manual audience hacking.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border hover:border-orange-500/30 transition-colors shadow-sm">
                  <h3 className="text-foreground font-bold text-sm sm:text-base mb-1">
                    Why Modern Marketing Agencies Must Be Software Engineering Powerhouses
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">
                    Bridging programmatic SEO, custom Next.js landing pages, and automated CRM webhooks to eliminate conversion leakage.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border hover:border-orange-500/30 transition-colors shadow-sm">
                  <h3 className="text-foreground font-bold text-sm sm:text-base mb-1">
                    The Mathematics of Scaling: From Zero to ₹15 Cr+ in Client Attribution
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">
                    Calculating true contribution margin, LTV-to-CAC ratios, and building sustainable retention funnels that compound over time.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Milestone Career Timeline: From Code to Scale */}
      <section className="py-24 bg-background relative border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5" />
              The Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4">
              Milestone Career Timeline
            </h2>
            <p className="text-muted-foreground text-base">
              The step-by-step evolution from self-taught software engineering to leading Arventa Ventures and scaling 500+ client growth campaigns.
            </p>
          </div>

          <div className="relative border-l-2 border-orange-500/30 ml-4 sm:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Glowing Checkpoint Marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-orange-500 group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 m-auto mt-0.5" />
                </div>

                {/* Year Label */}
                <div className="sm:absolute sm:-left-28 sm:top-0 sm:text-right">
                  <span className="text-xl sm:text-2xl font-black text-orange-500 tracking-tight">
                    {m.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-card border border-border group-hover:border-orange-500/40 transition-colors shadow-sm">
                  <div className="text-xs text-orange-500 font-semibold mb-1">{m.role}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Authentic Founder Spotlight: A Personal Letter from Jaydeb Jana */}
      <section className="py-24 bg-card/60 relative border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="rounded-3xl bg-card border-2 border-orange-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Authentic Real Photograph of Jaydeb Jana */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border-2 border-orange-500/40 shadow-2xl group">
                  <img 
                    src="/images/jaydeb-jana-portrait.webp" 
                    alt="Jaydeb Jana - Authentic Founder & CEO" 
                    className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Top Verified Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-orange-500/40 text-orange-400 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
                    Authentic Founder Photo
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white">
                    <div className="font-extrabold text-base text-white">Jaydeb Jana</div>
                    <div className="text-xs text-orange-400 font-semibold mb-1">Founder & Chief Executive Officer</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <Globe className="w-3 h-3 text-orange-400" />
                      <span>Contai, West Bengal, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Personal Story & Pledge */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Human Element & Authentic Roots
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 leading-tight">
                  Beyond The Numbers: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                    A Personal Letter from Jaydeb
                  </span>
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-foreground/80 dark:text-slate-300 font-light leading-relaxed mb-6">
                  <p>
                    Behind every algorithmic ad campaign, technical SEO graph, and lines of custom software code, there is a real human mission. I started this journey driven by pure curiosity and an obsession with software engineering and performance marketing.
                  </p>
                  <p>
                    Arventa Ventures wasn't born in a corporate boardroom with venture capital—it was built through relentless nights of coding, testing ad auctions, and personally guaranteeing results for clients who trusted me with their businesses.
                  </p>
                  <p>
                    Whether we are scaling an international D2C brand to 4.5x ROAS or ranking a local clinic #1 on Google, my personal pledge to you is simple: <strong className="text-foreground font-semibold">uncompromising transparency, mathematical rigor, and direct founder accountability.</strong>
                  </p>
                </div>

                {/* 3 Personal Principles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="text-orange-500 font-bold text-xs mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Direct Access
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">You work directly with executive strategy, no middle-manager telephone games.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="text-orange-500 font-bold text-xs mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Net ROAS Focus
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">Zero vanity metrics. Every rupee must contribute to real net margin.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border">
                    <div className="text-orange-500 font-bold text-xs mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Relentless Care
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">We treat your marketing budget and brand reputation as our own.</p>
                  </div>
                </div>

                {/* Founder Sign-off */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-foreground text-sm">Jaydeb Jana</div>
                    <div className="text-xs text-orange-500 font-medium">Founder & CEO, Arventa Ventures</div>
                  </div>
                  <Button 
                    className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs h-10 px-5 shadow-md shadow-orange-500/20"
                    asChild
                  >
                    <a href="#consultation">
                      Talk with Jaydeb <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Industry Certifications & Accreditations */}
      <section className="py-20 bg-card/40 relative border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3">
              Industry Certifications & Standards
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Verified technical credentials confirming compliance with global platform algorithms and engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-orange-500/40 transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-foreground font-bold text-base mb-1">{cert.title}</h3>
                  <div className="text-xs text-orange-500 font-medium mb-3">{cert.issuer} • {cert.year}</div>
                </div>
                <div className="text-xs text-muted-foreground pt-3 border-t border-border font-light">
                  {cert.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Direct Consultation Booking Section */}
      <section id="consultation" className="py-24 bg-background relative border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-card border border-orange-500/30 p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Direct Access Details */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
                  <Phone className="w-3.5 h-3.5" />
                  Direct Executive Line
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                  Consult Directly with Jaydeb Jana
                </h2>

                <p className="text-foreground/80 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Looking to scale your brand past ₹1 Cr+ or dominate local search rankings? Get an architectural growth audit tailored to your business model.
                </p>

                <div className="space-y-4 pt-4 border-t border-border text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-orange-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">CEO Email</div>
                      <a href="mailto:ceo@arventaventures.online" className="font-semibold text-foreground hover:text-orange-500">
                        ceo@arventaventures.online
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-emerald-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Direct WhatsApp</div>
                      <a 
                        href="https://wa.me/917872490719?text=Hi%20Jaydeb,%20I%20would%20like%20to%20discuss%20scaling%20our%20business%20with%20Arventa%20Ventures." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-emerald-500"
                      >
                        +91 7872490719
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-orange-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Turnaround Time</div>
                      <div className="font-semibold text-foreground">Within 2 to 4 Business Hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-7">
                {isConsultSubmitted ? (
                  <div className="p-8 rounded-2xl bg-card border border-emerald-500/40 text-center shadow-lg">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Consultation Request Received</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Thank you! Jaydeb Jana or an executive strategist will review your brand details and reach out within 2 to 4 business hours.
                    </p>
                    <a
                      href={`https://wa.me/917872490719?text=${encodeURIComponent(`*Executive Consultation Request - Arventa Ventures*\n*Name:* ${consultForm.name}\n*Company:* ${consultForm.brand}\n*Email:* ${consultForm.email}\n*Phone:* ${consultForm.phone}\n*Budget:* ${consultForm.budget}\n*Objective:* ${consultForm.goal}\n*Details:* ${consultForm.message || "Consultation requested."}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow-md"
                    >
                      Open WhatsApp Direct <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={consultForm.name}
                          onChange={(e) => setConsultForm({...consultForm, name: e.target.value})}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Company / Brand Name *</label>
                        <input
                          type="text"
                          required
                          value={consultForm.brand}
                          onChange={(e) => setConsultForm({...consultForm, brand: e.target.value})}
                          placeholder="e.g. Nova Lifestyle"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={consultForm.email}
                          onChange={(e) => setConsultForm({...consultForm, email: e.target.value})}
                          placeholder="rahul@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={consultForm.phone}
                          onChange={(e) => setConsultForm({...consultForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Monthly Ad Budget</label>
                        <select
                          value={consultForm.budget}
                          onChange={(e) => setConsultForm({...consultForm, budget: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        >
                          <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month</option>
                          <option value="₹50,000 - ₹1,50,000 / month">₹50,000 - ₹1,50,000 / month</option>
                          <option value="₹1,50,000 - ₹5,00,000 / month">₹1,50,000 - ₹5,00,000 / month</option>
                          <option value="₹5,00,000+ / month">₹5,00,000+ / month (Enterprise)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">Primary Growth Objective</label>
                        <select
                          value={consultForm.goal}
                          onChange={(e) => setConsultForm({...consultForm, goal: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                        >
                          <option value="Paid Ads Scaling (Meta / Google)">Paid Ads Scaling (Meta / Google)</option>
                          <option value="Google Maps 3-Pack & Local SEO">Google Maps 3-Pack & Local SEO</option>
                          <option value="Full-Stack Web Development & CRO">Full-Stack Web Development & CRO</option>
                          <option value="1-on-1 Executive Growth Audit">1-on-1 Executive Growth Audit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Current Bottlenecks & Targets</label>
                      <textarea
                        rows={3}
                        value={consultForm.message}
                        onChange={(e) => setConsultForm({...consultForm, message: e.target.value})}
                        placeholder="Tell Jaydeb about your current CPA, revenue targets, and current pain points..."
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:border-orange-500 shadow-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-base h-12 shadow-lg shadow-orange-500/20 text-center justify-center whitespace-normal px-4"
                    >
                      Submit Executive Consultation Request <Send className="ml-2 w-4 h-4 shrink-0" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Executive FAQs Accordion (Schema.org Verified) */}
      <section className="py-24 bg-card/40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Key questions about working directly with Jaydeb Jana and partnering with Arventa Ventures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-orange-500 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-foreground/80 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed border-t border-border pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Quote Section with Executive Avatar */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-background to-background opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Quote className="w-12 h-12 text-orange-500/40 mx-auto mb-8" />
          <h2 className="text-2xl sm:text-4xl font-light text-foreground leading-relaxed mb-10 italic">
            "Innovation isn't just about using modern tools; it's about fundamentally re-architecting the mathematical relationship between a brand and its audience."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 mb-4 shadow-xl shadow-orange-500/20">
              <img 
                src="/images/jaydeb-jana-portrait.webp" 
                alt="Jaydeb Jana - CEO Arventa Ventures" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <h3 className="text-foreground font-bold text-xl">Jaydeb Jana</h3>
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mt-1">Founder & CEO, Arventa Ventures</p>
          </div>
        </div>
      </section>
    </div>
  );
}
