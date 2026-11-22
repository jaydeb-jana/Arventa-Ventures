export interface LocationDetailedItem {
  id: string;
  name: string;
  bengaliName: string;
  district: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  isGlobalHq: boolean;
  pinCodes: string[];
  keyNeighborhoods: string[];
  stats: { value: string; label: string; sub: string }[];
  marketProblem: string;
  marketSolution: string;
  targetIndustries: { name: string; desc: string; lift: string }[];
  caseStudy: {
    client: string;
    sector: string;
    challenge: string;
    strategy: string;
    results: { value: string; label: string }[];
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  deliverables: { title: string; desc: string }[];
  comparison: { feature: string; arventa: string; localFreelancer: string; traditionalAgency: string }[];
  seoArticle: {
    title: string;
    sections: { heading: string; content: string }[];
  };
  faqs: { q: string; a: string }[];
  officeAddress?: string;
  gmbLink?: string;
  commercialZones?: {
    id: string;
    name: string;
    bengaliZone: string;
    subtitle: string;
    desc: string;
    funnel: string;
    lift: string;
    keywords: string[];
  }[];
  visualShowcase?: {
    title: string;
    subtitle: string;
    image: string;
    desc: string;
    tag: string;
  }[];
  clientTestimonials?: {
    name: string;
    company: string;
    location: string;
    quote: string;
    rating: number;
    result: string;
    image?: string;
  }[];
  roadmapPhases?: {
    phase: string;
    title: string;
    timeline: string;
    desc: string;
    deliverables: string[];
  }[];
}

export const topLocationsMap: Record<string, LocationDetailedItem> = {
  // ==========================================
  // 1. CONTAI (GLOBAL HEADQUARTERS)
  // ==========================================
  "contai": {
    id: "contai",
    name: "Contai",
    bengaliName: "কাঁথি",
    district: "Purba Medinipur",
    badge: "Global Headquarters & Executive Hub",
    heroTitle: "The Premier Digital Marketing & Web Development Agency in Contai",
    heroSubtitle: "Headquartered right here in Contai, West Bengal at Chapatala More. We engineer sub-second React websites, algorithmic Meta Ads, and top Google rankings that turn local residents across Purba Medinipur into loyal, paying customers.",
    heroImage: "/images/contai-arventa-headquarters.webp",
    isGlobalHq: true,
    pinCodes: ["721401", "721442", "721455", "721422", "721444", "721424"],
    keyNeighborhoods: [
      "Chapatala More (Global HQ)",
      "Contai Supermarket & Bada Bazar",
      "Contai Central Bus Stand & Station Road",
      "Contai Bypass Road & Egra Highway",
      "Junput Coastal Road & Beach Belt",
      "Digha Coastal Tourism Corridor",
      "Kishorenagar & Subhas Pally",
      "Hospital More & Diagnostic Corridor",
      "Prabhat Kumar (PK) College Zone",
      "Henria & Marishda Commercial Junction",
      "Ramnagar & Tajpur Commercial Link",
      "Khejuri & Nandigram Trade Highway"
    ],
    stats: [
      { value: "₹5.4 Cr+", label: "Regional Client Revenue", sub: "Purba Medinipur ecosystem" },
      { value: "160+", label: "Local Campaigns & Builds", sub: "Retail, clinics, agro & resorts" },
      { value: "0.62s", label: "Average Mobile Load Time", sub: "Top 1% Core Web Vitals" },
      { value: "99.2%", label: "Local Client Retention", sub: "Direct founder accountability" }
    ],
    marketProblem: "For decades, ambitious business owners in Contai (কাঁথি) have been held back by outdated marketing methods—spending thousands on static flex hoardings, paper newspaper inserts, or hiring local graphic editors who simply click the 'Boost Post' button on Facebook with zero tracking. These outdated tactics generate vanity likes from fake profiles while burning marketing capital with zero measurable walk-in customers or telephone leads.",
    marketSolution: "Arventa Ventures brings Silicon Valley-grade software engineering and algorithmic performance marketing directly to our home city of Contai. Founded by Jaydeb Jana and operating from our Global Headquarters at Chapatala More, we deploy full-funnel customer acquisition engines: sub-second React 19 web applications, server-to-server Conversions API (CAPI) ad tracking, and local Google Maps SEO that consistently ranks our Contai clients at the very top of Google when buyers search for local products and services.",
    targetIndustries: [
      {
        name: "Specialized Healthcare, Diagnostics & Clinics",
        desc: "Automated doctor appointment scheduling and patient acquisition funnels serving Hospital More, Contai Sub-divisional medical zone, and surrounding rural towns.",
        lift: "+440% Verified Bookings"
      },
      {
        name: "Retail Showrooms, Jewelry & Fashion",
        desc: "Footfall-generating Meta video ads and VIP WhatsApp catalog commerce for premium showrooms around Contai Supermarket, Bada Bazar, and Bypass Road.",
        lift: "+320% Festive Footfall"
      },
      {
        name: "Coastal Tourism, Resorts & Boutique Hotels",
        desc: "Commission-free direct booking engines for luxury resorts and hotels across Mandarmani, Digha, Tajpur, and Junput coastal beach corridor.",
        lift: "5.4x Direct ROAS"
      },
      {
        name: "Aqua-Farming, Seafood & Agro-Processing Exports",
        desc: "B2B digital product catalogs and international export lead generation for Purba Medinipur's high-volume prawn/shrimp culture and agro processors.",
        lift: "+380% B2B RFQs"
      },
      {
        name: "Education, Board & Competitive Coaching Institutes",
        desc: "Student enrollment funnels targeting JEE, NEET, and board exam aspirants across Contai, Egra, Ramnagar, and Khejuri.",
        lift: "+290% Admissions"
      },
      {
        name: "Real Estate, Commercial Complexes & Building Supply",
        desc: "High-ticket buyer acquisition funnels for new residential apartments and commercial complexes along Contai Bypass and Junput Road.",
        lift: "₹14 Cr Sales Pipeline"
      }
    ],
    caseStudy: {
      client: "Medinipur Coastal Retail & Diagnostics Hub",
      sector: "Healthcare & Regional Diagnostic Center",
      challenge: "A leading regional diagnostic and multi-specialty polyclinic in Contai near Hospital More was suffering from 40% patient drop-off to Kolkata facilities due to a lack of digital booking and poor local Google visibility.",
      strategy: "Arventa Ventures engineered a sub-0.6s Next.js patient portal with instant WhatsApp appointment confirmations, optimized their Google Business Profile for 15 medical search keywords, and launched geotargeted Meta video ads featuring verified doctors.",
      results: [
        { value: "+460%", label: "Direct Online Consultations" },
        { value: "-54%", label: "Patient Acquisition Cost" },
        { value: "4.9 ★", label: "Google Review Rating (380+ Reviews)" }
      ],
      quote: "Having Arventa Ventures' global headquarters right here in Contai at Chapatala More gave us direct daily access to Jaydeb Jana. Their software speed and localized Meta ads doubled our patient volume within 90 days.",
      author: "Dr. P. K. Sasmal",
      role: "Managing Director, Contai Health Hub",
      image: "/images/contai-commercial-growth.webp"
    },
    deliverables: [
      {
        title: "Bespoke Next.js & React 19 Web Engineering",
        desc: "Sub-second load times (<0.7s) on 4G cellular across Contai, Egra, and Purba Medinipur with zero layout shift and 100/100 Google Lighthouse scores."
      },
      {
        title: "Contai Local Google Maps #1 Ranking Dominance",
        desc: "Forensic Google Business Profile optimization, localized citation structures, and schema markup ensuring you rank in the top 3 on Google Maps."
      },
      {
        title: "Server-Side Meta Conversions API (CAPI) Tracking",
        desc: "Direct server-to-server event dispatching that completely bypasses iOS tracking blockers and ad blockers with a 9.2+ Event Match Quality score."
      },
      {
        title: "High-Hook Video Ads in Conversational Bengali & English",
        desc: "Scripted, shot, and edited with in-house 4K cinema cameras, tailored to local consumer psychology to stop social scrollers within 2 seconds."
      },
      {
        title: "Click-to-WhatsApp Automated Sales & Appointment Routing",
        desc: "Seamless WhatsApp CRM integration that routes interested Contai buyers directly to your sales team with automated instant responses."
      },
      {
        title: "100% Commercial Intellectual Property Transfer",
        desc: "You retain full, unconditional legal ownership of all web source code, graphic assets, ad account data, and creative files with zero lock-in retainers."
      }
    ],
    comparison: [
      {
        feature: "Physical Headquarters",
        arventa: "Global HQ at Chapatala More, Contai (Direct walk-in access)",
        localFreelancer: "Remote freelancer working without registered company",
        traditionalAgency: "Distant Kolkata agency with zero local Contai presence"
      },
      {
        feature: "Web Development Stack",
        arventa: "Sub-0.7s Custom React 19 / Next.js on Global Edge CDN",
        localFreelancer: "Outdated, cracked WordPress templates that load in 4+ seconds",
        traditionalAgency: "Bloated legacy PHP CMS with ongoing maintenance headaches"
      },
      {
        feature: "Ad Tracking Standard",
        arventa: "Server-Side CAPI + First-Party Data Attribution",
        localFreelancer: "Basic Facebook 'Boost Post' with zero conversion tracking",
        traditionalAgency: "Browser cookies that lose up to 45% of customer signals"
      },
      {
        feature: "Creative Production",
        arventa: "In-House 4K Cinema Gear + High-Hook Video Scripts",
        localFreelancer: "Generic Canva templates seen on hundreds of pages",
        traditionalAgency: "Stock footage that fails to build authentic local trust"
      },
      {
        feature: "Leadership Access",
        arventa: "Direct Founder Jaydeb Jana Strategy Oversight",
        localFreelancer: "Single individual prone to delays and unresponsiveness",
        traditionalAgency: "Junior account executive reading generic status sheets"
      },
      {
        feature: "Core Success Metric",
        arventa: "Net Cash Revenue, In-Store Walk-ins & Low CAC",
        localFreelancer: "Vanity likes and comments",
        traditionalAgency: "Arbitrary impression counts"
      }
    ],
    seoArticle: {
      title: "The Comprehensive Playbook for Digital Market Domination in Contai (কাঁথি)",
      sections: [
        {
          heading: "1. The Economic Awakening of Contai and the Purba Medinipur Coastal Belt",
          content: "Contai (কাঁথি) has rapidly transformed from a traditional subdivisional town into one of West Bengal's most vibrant commercial and economic epicenters. Situated as the critical trade hub connecting Digha, Mandarmani, Shankarpur, and Tajpur with the broader Medinipur and Kharagpur industrial corridors, Contai experiences millions of rupees in daily retail, healthcare, real estate, and hospitality turnover. However, while consumer purchasing power has shifted dramatically onto mobile devices, over 85% of local businesses remain invisible on search engines and social media."
        },
        {
          heading: "2. The Flaw of the 'Boost Post' Trap vs Mathematical Meta Ads",
          content: "Most local business owners in Contai attempt digital marketing by hiring a neighborhood graphic designer who creates a static flyer and clicks the 'Boost' button on Facebook or Instagram. This sends traffic to arbitrary audiences with no conversion tracking, no custom audience exclusions, and no clear sales funnel. Arventa Ventures approaches advertising as a mathematical discipline: utilizing Meta's Advantage+ machine learning, first-party customer lists, dynamic creative testing (DCT), and server-to-server Conversions API (CAPI) streaming from edge servers. This ensures that every rupee of ad spend is held strictly accountable to client net revenue."
        },
        {
          heading: "3. Dominating Local Google Maps Across Contai's Key Commercial Zones",
          content: "When a family in Contai searches for 'best jewelry showroom in Contai', 'top pediatric doctor near me', or 'luxury resort in Mandarmani', Google prioritizes the Local 3-Pack on Google Maps. Arventa Ventures engineers comprehensive local SEO citation networks, verifies NAP (Name, Address, Phone) consistency across 50+ business directories, optimizes Google Business Profiles (GMB), and embeds semantic schema markup to ensure our clients consistently capture the #1 position on Google Maps."
        },
        {
          heading: "4. Why Sub-Second React Web Speed Outperforms Outdated WordPress Sites",
          content: "Across Purba Medinipur, mobile users access the internet primarily through cellular 4G and 5G connections. Every 100 milliseconds of delay in mobile page loading causes approximately 7% of prospective customers to abandon the site. While traditional local agencies deliver bloated, plugin-heavy WordPress websites that take 4 to 6 seconds to render, Arventa Ventures engineers custom headless React 19 and Next.js platforms cached globally on Cloudflare edge networks, ensuring instantaneous sub-0.7 second page loads."
        },
        {
          heading: "5. Automated WhatsApp Sales Funnels for Contai Retailers & Clinics",
          content: "In South Bengal, WhatsApp is not merely a messaging app—it is the primary channel of commercial transaction. Arventa Ventures integrates automated Click-to-WhatsApp funnels that capture prospective buyers directly from Instagram Reels and Google Search, immediately engaging them with automated catalog browsing, appointment scheduling, and direct sales team routing."
        },
        {
          heading: "6. Hyper-Targeted Micro-Geofencing Across Chapatala More, Bada Bazar & Bypass Road",
          content: "Rather than blasting generic ads across the entire state of West Bengal, Arventa Ventures deploys precision polygon geofencing. We isolate high-net-worth neighborhoods in Contai—such as Kishorenagar, Subhas Pally, Hospital More, and the residential enclaves along Contai Bypass Road—ensuring your advertising budget is only spent on affluent households and verified local decision-makers."
        },
        {
          heading: "7. The Power of Authentic Conversational Bengali Video Creative in Purba Medinipur",
          content: "Stock photos and generic English Canva templates fail to build genuine consumer trust in Contai. Arventa Ventures operates its own 4K cinema studio at Chapatala More. We script and film authentic, cinematic video reels in conversational Bengali that immediately stop social scrollers within the first 2 seconds, addressing local cultural hooks and establishing unbeatable brand authority."
        },
        {
          heading: "8. Direct Founder Access: Why Local Contai Businesses Choose Arventa Over Distant Kolkata Agencies",
          content: "Distant Kolkata agencies treat Contai clients as minor secondary accounts, handing your project off to junior interns who have never visited Purba Medinipur. At Arventa Ventures, our Global Headquarters is physically based in Contai at Chapatala More. Founder Jaydeb Jana personally reviews your growth strategy, and our executive team is directly available for face-to-face meetings right here in town."
        }
      ]
    },
    officeAddress: "Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721401",
    gmbLink: "https://share.google/9g673CLWFHS9j6tb9",
    commercialZones: [
      {
        id: "chapatala-more",
        name: "Chapatala More & Purba Gopinathpur",
        bengaliZone: "ছাতাপাতলা মোড় ও পূর্ব গোপীনাথপুর",
        subtitle: "Global Headquarters & Tech Leadership Hub",
        desc: "The nerve center of Arventa Ventures. Houses our enterprise software development lab, 4K video studio, and client war room serving regional corporate leaders.",
        funnel: "Full-Funnel Enterprise Growth Architecture & Headless Web Applications",
        lift: "+420% Client Revenue Surge",
        keywords: ["Chapatala More Contai", "Purba Gopinathpur", "Arventa HQ Contai", "Best Tech Agency Medinipur"]
      },
      {
        id: "contai-supermarket",
        name: "Contai Supermarket & Bada Bazar",
        bengaliZone: "কাঁথি সুপারমার্কেট ও বড় বাজার",
        subtitle: "High-Volume Retail, Jewelry & Textile Core",
        desc: "Contai's highest-density retail epicenter. Millions in daily cash turnover across gold jewelry showrooms, bridal fashion outlets, electronics, and wholesale FMCG.",
        funnel: "Hyper-Local Meta Video Ads + Click-to-WhatsApp Festive Footfall Catalogs",
        lift: "3.8x Store Footfall Lift",
        keywords: ["Contai Supermarket", "Bada Bazar Contai", "Jewelry showroom Contai", "Retail footfall marketing"]
      },
      {
        id: "central-bus-stand",
        name: "Central Bus Stand & Railway Station Corridor",
        bengaliZone: "সেন্ট্রাল বাস স্ট্যান্ড ও স্টেশন রোড",
        subtitle: "Transit Commerce, Logistics & Commuter Retail",
        desc: "The regional transportation artery linking Digha, Kharagpur, and Howrah. High footfall for quick-service food, hotels, transit clinics, and travel agencies.",
        funnel: "Google Maps Local 3-Pack SEO + Mobile Fast-Click Call Ads",
        lift: "+280% Walk-in Leads",
        keywords: ["Contai Bus Stand", "Contai Railway Link", "Station Road Contai", "Local transit business"]
      },
      {
        id: "contai-bypass",
        name: "Contai Bypass Road & Egra Highway Link",
        bengaliZone: "কাঁথি বাইপাস রোড ও এগরা লিঙ্ক",
        subtitle: "Automobile Showrooms, Real Estate & Luxury Venues",
        desc: "Sprawling commercial expansions featuring two-wheeler/four-wheeler dealerships, modern residential building complexes, banquet halls, and construction supply.",
        funnel: "High-Ticket Lead Generation Funnels + Drone/Video Architecture Tours",
        lift: "₹18 Cr+ Deal Pipeline",
        keywords: ["Contai Bypass Road", "Egra Highway", "Apartments in Contai", "Auto dealerships Contai"]
      },
      {
        id: "junput-mandarmani",
        name: "Junput Coastal Belt & Mandarmani-Digha Gateway",
        bengaliZone: "জুনপুট কোস্টাল রোড ও মন্দারমণি সংযোগ",
        subtitle: "Coastal Tourism, Luxury Resorts & Marine Aquaculture",
        desc: "World-famous beach resort destinations and India's top brackish-water prawn export hatcheries requiring international B2B digital catalogs and commission-free booking engines.",
        funnel: "Direct Commission-Free Hotel Booking Portals + Global Export B2B Lead Funnels",
        lift: "5.8x Direct Booking ROAS",
        keywords: ["Mandarmani Resort Booking", "Junput Beach Resort", "Digha Coastal Tourism", "Shrimp Aquaculture Contai"]
      },
      {
        id: "hospital-more",
        name: "Hospital More & Sub-Divisional Healthcare Corridor",
        bengaliZone: "হসপিটাল মোড় ও মেডিকেল জোন",
        subtitle: "Super-Specialty Clinics, Diagnostic Labs & Pharmacies",
        desc: "The critical healthcare hub for over 1.2 million citizens across Contai Sub-division. High-intent patient searches for specialized doctors and diagnostics.",
        funnel: "Instant WhatsApp Doctor Booking Portals + Google Local Search #1 Rankings",
        lift: "+490% Verified Appointments",
        keywords: ["Hospital More Contai", "Doctor clinic Contai", "Diagnostic center Contai", "Healthcare SEO"]
      },
      {
        id: "pk-college",
        name: "Prabhat Kumar (PK) College & Education Hub",
        bengaliZone: "প্রভাত কুমার কলেজ ও এডুকেশন করিডোর",
        subtitle: "Competitive Coaching, Colleges & Youth Academies",
        desc: "Home to thousands of undergraduate and competitive exam students (NEET, JEE, WBJEE, Banking) looking for top-tier coaching institutions and student housing.",
        funnel: "Instagram Reels Student Acquisition Funnels + Digital Entrance Registrations",
        lift: "+340% Batch Enrollments",
        keywords: ["PK College Contai", "NEET coaching Contai", "Coaching institute Contai", "Student enrollment funnels"]
      },
      {
        id: "henria-marishda",
        name: "Marishda, Henria & Ramnagar Trade Gateways",
        bengaliZone: "মারিশদা, হেনরিয়া ও রামনগর ট্রেড করিডোর",
        subtitle: "Agro-Feed Wholesale, Cold Storage & Regional Supply",
        desc: "Thriving agricultural and cold-storage distribution centers supplying fish, cashews, betel vine, and fertilizers to Kolkata and Pan-India markets.",
        funnel: "B2B WhatsApp Commerce Catalogues + Google Performance Max Trade Campaigns",
        lift: "+260% Trade Volume",
        keywords: ["Henria market", "Marishda cold storage", "Ramnagar trade", "Purba Medinipur wholesale"]
      }
    ],
    visualShowcase: [
      {
        title: "Tech Development & 4K Video Creative Studio",
        subtitle: "Global Headquarters • Chapatala More, Contai",
        image: "/images/contai-arventa-studio.webp",
        desc: "Inside our state-of-the-art studio at Chapatala More, our software developers build sub-second React platforms while creative directors film high-hook cinema video ads in Bengali and English.",
        tag: "In-House Infrastructure"
      },
      {
        title: "Executive Business Growth Consultation Boardroom",
        subtitle: "Founder Jaydeb Jana Strategy Session",
        image: "/images/contai-executive-consultation.webp",
        desc: "Founder Jaydeb Jana works directly with regional business owners in Contai, reviewing live revenue telemetry, Google Maps rank metrics, and Meta Ads performance.",
        tag: "Founder Accountability"
      },
      {
        title: "War Room & Real-Time Analytics Command Center",
        subtitle: "Regional Operations & Telemetry Monitoring",
        image: "/images/contai-command-center.webp",
        desc: "Our performance marketing analysts monitor live ad spend, server-side Conversions API signals, and customer lead routing across West Bengal 24 hours a day.",
        tag: "Live Performance Control"
      }
    ],
    clientTestimonials: [
      {
        name: "Subrata Maity",
        company: "Maity Jewellers & Bridal Collection",
        location: "Contai Supermarket, Bada Bazar",
        quote: "Before working with Arventa Ventures, we spent money on Facebook boost buttons with zero in-store footfall. Arventa produced high-quality Bengali video ads showcasing our bridal gold collection and set up WhatsApp appointments. During Dhanteras and wedding season, our showroom footfall jumped by 340%!",
        rating: 5,
        result: "+340% Festive Footfall Lift",
        image: "/images/contai-commercial-growth.webp"
      },
      {
        name: "Dr. P. K. Sasmal",
        company: "Medinipur Coastal Diagnostic & Surgical Center",
        location: "Hospital More, Contai",
        quote: "Our diagnostic lab was losing patients who traveled all the way to Kolkata. Jaydeb Jana and the Arventa team built us a lightning-fast online booking portal and ranked us #1 on Google Maps. We now get 45+ verified doctor bookings every single day directly through WhatsApp.",
        rating: 5,
        result: "+460% Patient Appointment Surge",
        image: "/images/contai-executive-consultation.webp"
      },
      {
        name: "Anupam Bhowmik",
        company: "Bayview Coastal Sands Luxury Resort",
        location: "Mandarmani & Contai Coastal Link",
        quote: "OTA travel portals like MakeMyTrip were charging us 22% commissions on every room booking. Arventa built a custom direct booking engine and ran high-ROAS Meta video campaigns targeting families in Kolkata and Howrah. We generated 5.6x ROAS and filled our weekend occupancy completely commission-free.",
        rating: 5,
        result: "5.6x Direct Booking ROAS",
        image: "/images/contai-arventa-studio.webp"
      },
      {
        name: "Tanmoy Mondal",
        company: "Bengal Aqua Feeds & Marine Exports",
        location: "Junput Road & Coastal Industrial Belt",
        quote: "Exporting black tiger and vannamei shrimp requires global buyers to trust our quality. Arventa built an international-grade digital export catalog and ran B2B lead campaigns that generated verified trade inquiries from Vietnam, UAE, and Pan-India distributors.",
        rating: 5,
        result: "+380% Verified B2B Trade RFQs",
        image: "/images/contai-command-center.webp"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 01",
        title: "Forensic Local Audit & Google Maps #1 Domination",
        timeline: "Days 1 – 15",
        desc: "We perform a forensic audit of your Contai market competitors, claim and optimize your Google Business Profile (GMB) with verified NAP citations, and deploy a sub-second custom React web application.",
        deliverables: [
          "100% Google Business Profile Optimization with Geotagged Media",
          "50+ Verified Local Directory & Map Citations across West Bengal",
          "Sub-0.7s Headless React 19 / Next.js Web Deployment",
          "Semantic LocalBusiness JSON-LD Schema Architecture"
        ]
      },
      {
        phase: "Phase 02",
        title: "4K Video Creative Production & Server-Side CAPI Ads",
        timeline: "Days 16 – 45",
        desc: "Our Contai video studio shoots on-location cinema commercial reels in natural Bengali & English. We activate Meta Advantage+ algorithmic ad campaigns powered by server-side Conversions API.",
        deliverables: [
          "4K Cinema Shoot On-Location at your Contai Facility",
          "High-Hook Bengali & English Social Ad Creatives",
          "Meta Conversions API (CAPI) Integration (9.2+ EMQ Score)",
          "Click-to-WhatsApp Instant Lead Routing Automation"
        ]
      },
      {
        phase: "Phase 03",
        title: "Aggressive Regional Scaling & Profit Compounding",
        timeline: "Days 46 – 90",
        desc: "With proven unit economics in Contai, we expand your advertising radius across Purba Medinipur, Paschim Medinipur, and Greater Kolkata, retargeting warm audiences to maximize net cash profit.",
        deliverables: [
          "Dynamic Product Remarketing & VIP Audience Exclusions",
          "Lookalike Audiences built from your Highest-Value Customers",
          "Real-Time 24/7 Looker Studio Executive Dashboard",
          "Dedicated Weekly Founder Review with Jaydeb Jana"
        ]
      }
    ],
    faqs: [
      {
        q: "Where is Arventa Ventures' office located in Contai?",
        a: "Our Global Headquarters is located at Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721401. We welcome business owners, founders, and corporate directors to visit our headquarters by appointment or connect directly with our founder Jaydeb Jana."
      },
      {
        q: "How does Arventa Ventures differ from other local computer centers or freelancers in Contai?",
        a: "Unlike freelance graphic editors who only design static banners, Arventa Ventures is an enterprise full-funnel digital growth agency. We combine Silicon Valley-grade React/Next.js software development, server-side Meta Conversions API tracking, professional 4K cinema video production, and local Google Maps SEO, with direct founder accountability on client profit."
      },
      {
        q: "Can you help our Contai showroom or clinic rank #1 on Google Maps?",
        a: "Yes. Google Maps SEO is one of our primary core competencies. We conduct forensic citation audits, optimize your Google Business Profile (GMB) with authentic geotagged imagery, structure semantic schema markup, and deploy review generation systems to rank you in the top 3 on Google for high-intent searches in Contai."
      },
      {
        q: "Do you produce marketing videos and commercials in Contai?",
        a: "Yes! We have an in-house video production team equipped with Sony FX cinema cameras, gimbal stabilizers, professional lighting, and audio equipment. We script, shoot on-location in Contai, edit, and color-grade high-retention video commercials built specifically for Instagram Reels, YouTube Shorts, and Meta Ads."
      },
      {
        q: "Can you create ad campaigns in conversational Bengali as well as English?",
        a: "Absolutely. Local consumer trust in Purba Medinipur is built through authentic language. We script high-hook ad copy and voiceovers in natural, conversational Bengali that resonates deeply with residents across Contai, Egra, Digha, and Medinipur, alongside crisp English for premium corporate branding."
      },
      {
        q: "How fast can my business launch campaigns with Arventa Ventures in Contai?",
        a: "Following our initial forensic strategy audit and onboarding kickoff, paid Meta ad campaigns and WhatsApp lead funnels go live within 7 business days. High-speed custom website and software development projects are delivered in rapid 2 to 3-week agile sprints."
      },
      {
        q: "What ad budget do you recommend for local businesses in Contai?",
        a: "For local retail showrooms, medical clinics, and professional services in Contai, we typically recommend an initial monthly advertising budget between ₹25,000 to ₹75,000+. For coastal resorts in Digha/Mandarmani or B2B exporters, we recommend ₹1,00,000+ monthly to unlock aggressive scaling."
      },
      {
        q: "How do I schedule an in-person meeting at your Contai headquarters?",
        a: "You can book a strategy call directly through our website or message our founder Jaydeb Jana directly on WhatsApp at +91 7872490719. We will arrange a dedicated briefing at our Chapatala More headquarters."
      }
    ]
  },
  // 2. KOLKATA (CAPITAL FINANCIAL & D2C CORE)
  // ==========================================
  "kolkata": {
    id: "kolkata",
    name: "Kolkata",
    bengaliName: "কলকাতা",
    district: "Kolkata Metropolitan",
    badge: "Capital Financial & Corporate Core",
    heroTitle: "Enterprise Digital Marketing & Full-Stack Web Development in Kolkata",
    heroSubtitle: "Scaling Kolkata's most ambitious D2C brands, corporate enterprises, healthcare chains, and luxury real estate developers with mathematical performance marketing and sub-second React web apps.",
    heroImage: "/images/service-enterprise-warroom.webp",
    isGlobalHq: false,
    pinCodes: ["700001", "700016", "700019", "700029", "700032", "700064", "700091"],
    keyNeighborhoods: [
      "Park Street", "Camac Street", "Sector V (Salt Lake)", "Alipore", 
      "Ballygunge", "Gariahat", "Rajarhat", "New Alipore"
    ],
    stats: [
      { value: "₹9.4 Cr+", label: "Kolkata Tracked Revenue", sub: "D2C & enterprise funnels" },
      { value: "220+", label: "City Campaigns Deployed", sub: "Fashion, clinics & real estate" },
      { value: "0.58s", label: "Average First Contentful Paint", sub: "Cloudflare edge CDN" },
      { value: "5.6x", label: "Average Blended ROAS", sub: "Scalable Meta Advantage+" }
    ],
    marketProblem: "Kolkata brands are trapped by traditional legacy agencies that bill heavy retainers, outsource design to junior freelancers, and report vanity impressions while customer acquisition costs skyrocket.",
    marketSolution: "Arventa Ventures delivers mathematical accountability: server-side CAPI tracking, rapid creative testing sprints, and sub-second Next.js web applications engineered to convert high-ticket Kolkata consumers.",
    targetIndustries: [
      { name: "D2C Apparel, Jewelry & Lifestyle", desc: "Scaling Kolkata fashion and jewelry brands nationally with high-hook Reels and Advantage+ Meta campaigns.", lift: "+320% Revenue" },
      { name: "Luxury Real Estate & Developments", desc: "4K drone video tours, high-net-worth lead generation, and automated WhatsApp site-visit booking.", lift: "₹18 Cr Pipeline" },
      { name: "Multi-Specialty Healthcare & Clinics", desc: "HIPAA-compliant patient acquisition funnels across Alipore, Park Street, and Salt Lake.", lift: "550+ Leads/mo" },
      { name: "B2B Manufacturing & Logistics", desc: "High-intent search keyword dominance and custom enterprise demo booking applications.", lift: "+280% Qualified RFQs" }
    ],
    caseStudy: {
      client: "Aura Heritage Handcrafted Apparel",
      sector: "D2C Fashion & Ecommerce",
      challenge: "A prestigious Kolkata saree and ethnic wear label was suffering from a 4.8-second load time on WooCommerce and an unprofitable 1.4x ROAS on Meta ads.",
      strategy: "Re-engineered their online store into a headless Next.js frontend with sub-0.7s load time, deployed server-side CAPI, and produced 20+ viral vertical video ads.",
      results: [
        { value: "5.8x", label: "Blended Meta ROAS" },
        { value: "₹42L/mo", label: "Monthly Tracked Revenue" },
        { value: "-44%", label: "Checkout Drop-off Rate" }
      ],
      quote: "Arventa Ventures completely revolutionized our brand economics. Within 90 days, our online orders in Kolkata and across India multiplied fivefold.",
      author: "Rituparna Sengupta",
      role: "Creative Director & Founder",
      image: "/images/casestudy-apparel.webp"
    },
    deliverables: [
      { title: "Headless Next.js 19 Storefronts", desc: "Sub-second ecommerce architectures engineered for maximum checkout conversion." },
      { title: "Algorithmic Meta Advantage+ Scaling", desc: "High-volume ad account management generating scalable, predictable return on ad spend." },
      { title: "Enterprise Google Search & SEO Dominance", desc: "Forensic topic clustering capturing Kolkata's highest commercial intent search queries." },
      { title: "Cinematic In-Studio Video Production", desc: "Full-service commercial shooting with high-hook pacing designed for Instagram Reels." },
      { title: "Server-to-Server Attribution (CAPI)", desc: "Passing verified purchase events directly to Meta and Google for 9.2+ match quality." },
      { title: "Real-Time Executive Telemetry Dashboard", desc: "24/7 Looker Studio reporting tracking exact profit margins and blended CAC." }
    ],
    comparison: [
      { feature: "Attribution Standard", arventa: "Server-Side CAPI + First-Party UTMs", localFreelancer: "Basic Google Analytics 4", traditionalAgency: "Third-party cookies that misreport by 40%" },
      { feature: "Tech Infrastructure", arventa: "Sub-0.8s Next.js on Edge CDN", localFreelancer: "Bloated Elementor WordPress", traditionalAgency: "Heavy monolithic PHP templates" },
      { feature: "Creative Production", arventa: "In-House 4K Cinema Gear + 30+ Hooks/mo", localFreelancer: "Static Canva graphics", traditionalAgency: "Recycled generic stock photos" },
      { feature: "Success Metric", arventa: "Net Margin & Contribution Profit", localFreelancer: "Hours billed", traditionalAgency: "Vanity impressions and clicks" }
    ],
    seoArticle: {
      title: "How Kolkata's Leading Enterprises Are Winning the Digital Customer Acquisition War",
      sections: [
        {
          heading: "The Collapse of Vanity Metric Agency Retainers",
          content: "In Kolkata's competitive commercial landscape, brands can no longer afford to spend lakh after lakh on agencies that celebrate 'reach' and 'impressions' while store registers remain empty. Modern customer acquisition requires mathematical rigor: analyzing payback periods, optimizing Contribution Margin 3, and defending CAC against algorithmic ad auction inflation."
        },
        {
          heading: "Why Speed and Attribution Dictate Kolkata Ad Profitability",
          content: "With mobile users in Kolkata browsing on high-speed 5G, any website that takes longer than 1 second to load suffers an immediate 40%+ drop in conversion rate. By merging senior React software engineering with server-side ad attribution, Arventa Ventures provides Kolkata brands with an unassailable unfair advantage over competitors."
        }
      ]
    },
    faqs: [
      { q: "Can Arventa Ventures handle large-scale enterprise ad spends in Kolkata?", a: "Yes. We manage high-budget performance marketing campaigns spending up to ₹10L+ monthly, utilizing automated bid rules, dynamic creative testing, and horizontal scaling strategies." },
      { q: "Do you offer in-person strategy consultations for Kolkata corporate clients?", a: "Yes. Our executive leadership frequently meets with corporate founders and marketing directors across Park Street, Salt Lake Sector V, and Alipore for high-level growth briefings." },
      { q: "How do you optimize Google rankings for Kolkata local searches?", a: "We build localized semantic schema networks, earn high-DR local citations, optimize Google Business Profiles for Kolkata pin codes, and deploy deep local content topic clusters." },
      { q: "What is your pricing model for Kolkata businesses?", a: "We offer clear, milestone-driven project sprints for web development and transparent monthly performance retainers for ongoing growth marketing, with zero hidden markups." }
    ]
  },

  // ==========================================
  // 3. NEW TOWN (IT, SAAS & TECH HUB)
  // ==========================================
  "new-town": {
    id: "new-town",
    name: "New Town",
    bengaliName: "নিউ টাউন",
    district: "North 24 Parganas / Kolkata",
    badge: "IT, SaaS & AI Innovation Capital",
    heroTitle: "SaaS Growth Marketing & High-Performance Software Development in New Town",
    heroSubtitle: "Empowering New Town's software companies, AI startups, fintech platforms, and enterprise IT firms with product-led growth, sub-second web applications, and B2B pipeline acceleration.",
    heroImage: "/images/portfolio-zenithtech.webp",
    isGlobalHq: false,
    pinCodes: ["700156", "700135", "700160", "700157"],
    keyNeighborhoods: [
      "Action Area I", "Action Area II", "Action Area III", "Eco Park Financial Hub",
      "Silicon Valley Bengal", "Candor TechSpace", "Ecospace Business Park"
    ],
    stats: [
      { value: "₹3.8 Cr+", label: "SaaS Pipeline Generated", sub: "Enterprise software clients" },
      { value: "0.48s", label: "Web Application Latency", sub: "Next.js App Router" },
      { value: "+210%", label: "Inbound Demo Request Surge", sub: "B2B search & landing page CRO" },
      { value: "99.98%", label: "Uptime SLA Guarantee", sub: "Enterprise cloud hosting" }
    ],
    marketProblem: "Tech and SaaS companies in New Town build sophisticated software but struggle with product positioning, customer acquisition funnels, and slow marketing websites that fail to convert enterprise decision-makers.",
    marketSolution: "Arventa Ventures pairs senior full-stack React and Python developers with elite B2B growth marketers. We engineer frictionless demo booking funnels, programmatic SEO comparison pages, and hyper-targeted ad funnels.",
    targetIndustries: [
      { name: "B2B SaaS & Cloud Platforms", desc: "Capturing enterprise software buyers through comparison SEO clusters and automated demo scheduling.", lift: "3.4x Pipeline" },
      { name: "AI & Deep Tech Startups", desc: "High-authority positioning, investor-ready pitch decks, and developer community acquisition funnels.", lift: "+190% MQLs" },
      { name: "Corporate Co-Working & Real Estate", desc: "High-intent lead generation for premium office spaces and smart commercial developments.", lift: "85% Occupancy" },
      { name: "Fintech & Financial Software", desc: "SOC-2 compliant secure landing page architectures and bank-grade conversion tracking.", lift: "-38% CAC" }
    ],
    caseStudy: {
      client: "CloudMatrix Logistics Platform",
      sector: "B2B Enterprise SaaS",
      challenge: "A New Town-based supply chain software startup was burning ₹3L monthly on generic LinkedIn and Google ads with a disappointing 1.2% demo conversion rate.",
      strategy: "Rebuilt their marketing platform in Next.js with sub-0.5s response time, launched competitor comparison landing pages, and implemented automated HubSpot CRM routing.",
      results: [
        { value: "3.8x", label: "Qualified Demo Surge" },
        { value: "₹2.1 Cr", label: "New Pipeline Created" },
        { value: "-46%", label: "Cost Per Qualified Demo" }
      ],
      quote: "Arventa Ventures understands the technical nuances of SaaS that traditional advertising agencies can't even grasp. Their technical execution was flawless.",
      author: "Abir Mukherjee",
      role: "Chief Technology Officer, CloudMatrix",
      image: "/images/service-growth-telemetry.webp"
    },
    deliverables: [
      { title: "React 19 & Next.js SaaS Web Apps", desc: "High-security frontend architectures engineered for instantaneous global response." },
      { title: "B2B Programmatic Comparison SEO", desc: "Ranking #1 for high-intent 'alternative to [competitor]' and commercial software searches." },
      { title: "Full-Funnel HubSpot & CRM Webhooks", desc: "Passing server-side lead intelligence and conversion tokens directly into sales pipelines." },
      { title: "High-Converting Interactive Demo Funnels", desc: "Interactive product sandboxes and frictionless calendar scheduling workflows." },
      { title: "Technical Whitepaper & Authority Design", desc: "Engineering-grade typography and UI graphics that command high enterprise contract values." },
      { title: "Bank-Grade SSL & DDoS Edge Security", desc: "Cloudflare Enterprise security policies safeguarding your application from threats." }
    ],
    comparison: [
      { feature: "Technical Depth", arventa: "Full-Stack Senior Software Engineers", localFreelancer: "Basic visual template builder", traditionalAgency: "Graphic designers pretending to understand tech" },
      { feature: "B2B Funnel Strategy", arventa: "Product-Led Growth + Server CRM Webhooks", localFreelancer: "Generic contact form with no routing", traditionalAgency: "Email newsletter blasts" },
      { feature: "Load Speed", arventa: "Sub-0.5s LCP on Cloudflare Edge", localFreelancer: "3.8s on shared budget hosting", traditionalAgency: "4.5s on unoptimized WordPress" },
      { feature: "Attribution", arventa: "First-Party Data + Offline Conversion API", localFreelancer: "None configured", traditionalAgency: "Browser cookies only" }
    ],
    seoArticle: {
      title: "Product-Led Growth & Modern Acquisition for New Town Tech Companies",
      sections: [
        {
          heading: "The Fatal Mistake of Treating B2B SaaS Like Consumer Products",
          content: "In New Town's burgeoning tech hub, many startups make the expensive mistake of running generic brand awareness campaigns. Enterprise software decision-makers do not buy from billboards; they buy when technical documentation is pristine, security certifications are verifiable, and web applications demonstrate flawless sub-second performance."
        },
        {
          heading: "Capturing High-Intent Software Buyers in Action Areas I, II, and III",
          content: "By engineering comparison topic clusters and programmatic landing pages targeting exact software procurement keywords, Arventa Ventures captures in-market IT leaders at the exact moment they are looking to replace legacy vendors."
        }
      ]
    },
    faqs: [
      { q: "Can Arventa Ventures integrate with our existing Next.js codebase or API backend?", a: "Yes. Our team consists of senior software engineers fluent in React 19, Next.js, Node.js, Python, PostgreSQL, and GraphQL. We can build custom frontends or integrate directly with your existing infrastructure." },
      { q: "How do you generate B2B software leads in New Town?", a: "We combine technical SEO topic clusters targeting commercial investigation keywords with precision Google Search Ads and automated interactive demo booking funnels." },
      { q: "Do you assist with SOC-2 compliance and security auditing?", a: "Yes. We implement strict Content Security Policies, TLS 1.3 encryption, secure HTTP headers, and Cloudflare WAF configurations to ensure your web architecture passes enterprise security audits." },
      { q: "Where can we meet your engineering leadership in New Town?", a: "Our senior leadership regularly hosts product strategy sprints at Candor TechSpace and EcoSpace Business Park in Action Area II." }
    ]
  },

  // ==========================================
  // 4. SILIGURI (NORTH BENGAL GATEWAY)
  // ==========================================
  "siliguri": {
    id: "siliguri",
    name: "Siliguri",
    bengaliName: "শিলিগুড়ি",
    district: "Darjeeling / Jalpaiguri",
    badge: "Gateway to North Bengal & Tourism",
    heroTitle: "High-Growth Digital Marketing & Web Development in Siliguri",
    heroSubtitle: "Connecting North Bengal's leading hotels, tea estates, FMCG distributors, healthcare centers, and regional businesses with high-converting digital acquisition funnels.",
    heroImage: "/images/portfolio-skylinerealty.webp",
    isGlobalHq: false,
    pinCodes: ["734001", "734005", "734003", "734008", "734010"],
    keyNeighborhoods: [
      "Sevoke Road", "Hill Cart Road", "Matigara", "Pradhan Nagar", 
      "Hakim Para", "Khalpara Commercial Hub", "Vega Circle Corridor"
    ],
    stats: [
      { value: "₹3.4 Cr+", label: "Regional Client Revenue", sub: "North Bengal businesses" },
      { value: "115+", label: "Local Campaigns Launched", sub: "Hotels, clinics & retail" },
      { value: "4.8x", label: "Average Direct Hotel ROAS", sub: "Commission-free bookings" },
      { value: "0.64s", label: "Sub-Second Mobile Speeds", sub: "High 4G/5G mobile conversion" }
    ],
    marketProblem: "Siliguri hospitality and retail brands lose massive profits to third-party travel aggregators (OTAs) taking 25% commissions, while local healthcare and trade centers struggle with non-existent online visibility.",
    marketSolution: "Arventa Ventures builds direct booking engines, Google Maps local ranking dominance, and precision Meta advertising that captures domestic tourists and regional buyers directly.",
    targetIndustries: [
      { name: "Hotels, Resorts & Tourism", desc: "Cutting OTA commissions with direct commission-free booking engines and cinematic drone video ads.", lift: "+410% Direct Bookings" },
      { name: "Specialty Healthcare & Nursing Homes", desc: "Patient acquisition funnels serving Siliguri, Sikkim, Bhutan, and North Bengal districts.", lift: "420+ Inquiries/mo" },
      { name: "Tea Estates & Wholesale Distribution", desc: "B2B ecommerce platforms and national export lead generation for premium Darjeeling and Dooars tea.", lift: "3.2x B2B Volume" },
      { name: "Commercial Retail & Automobile Showrooms", desc: "Local geotargeted Meta Ads on Sevoke Road generating direct showroom test-drive bookings.", lift: "+260% Footfall" }
    ],
    caseStudy: {
      client: "Himalayan Foothills Luxury Resort",
      sector: "Hospitality & Tourism",
      challenge: "A premium resort near Siliguri was paying 28% commissions to MakeMyTrip and Booking.com while suffering from empty rooms during weekday shoulder seasons.",
      strategy: "Deployed a sub-second Next.js direct booking engine, high-hook Instagram video commercials targeting Kolkata travelers, and Google Search intent ads.",
      results: [
        { value: "72%", label: "Direct Bookings Share" },
        { value: "5.2x", label: "Blended Advertising ROAS" },
        { value: "₹18L+", label: "Saved in OTA Commissions" }
      ],
      quote: "Arventa Ventures rescued our resort from OTA dependency. Today, over 70% of our luxury suites are booked directly through the website they engineered.",
      author: "Karma Tshering",
      role: "Managing Director, Foothills Retreat",
      image: "/images/portfolio-urbanbrew.webp"
    },
    deliverables: [
      { title: "Direct Hotel & Tour Booking Engines", desc: "Frictionless Razorpay/Stripe checkout saving tens of thousands in commission fees." },
      { title: "Sevoke Road & North Bengal Local SEO", desc: "Dominating Google Maps 'near me' queries for hotels, clinics, and showrooms." },
      { title: "Cinematic 4K Drone & Commercial Video", desc: "Capturing scenic visual hooks that stop travelers scrolling on Instagram and YouTube." },
      { title: "Automated WhatsApp Room & Service Booking", desc: "Instant customer service chatbot answering traveler inquiries 24 hours a day." },
      { title: "High-Speed React Mobile Web Apps", desc: "Engineered to load in under 0.8s even on remote mountain cellular connections." },
      { title: "Cross-Border Bhutan & Nepal Lead Funnels", desc: "Targeting high-net-worth medical and commercial clients across regional borders." }
    ],
    comparison: [
      { feature: "Tourism Strategy", arventa: "Direct commission-free booking engines", localFreelancer: "Generic WordPress gallery", traditionalAgency: "Reliance on third-party OTAs" },
      { feature: "Regional Focus", arventa: "Deep understanding of North Bengal & Sikkim", localFreelancer: "Limited technical capabilities", traditionalAgency: "Treats Siliguri as an afterthought" },
      { feature: "Video Production", arventa: "In-house 4K cinema cameras and drone gear", localFreelancer: "Smartphone video clips", traditionalAgency: "Generic stock footage" },
      { feature: "Attribution", arventa: "Full server-side CAPI tracking", localFreelancer: "None", traditionalAgency: "Flawed browser cookies" }
    ],
    seoArticle: {
      title: "Dominating Direct Bookings & Regional Commerce in Siliguri",
      sections: [
        {
          heading: "Breaking Free from Online Travel Agency (OTA) Monopolies",
          content: "Siliguri's strategic geography as the gateway to Darjeeling, Sikkim, and Bhutan makes it one of Eastern India's most vibrant hospitality corridors. However, resort owners routinely surrender 20% to 30% of their top-line revenue to aggregators. By deploying sub-second direct booking platforms paired with high-hook social media campaigns, hoteliers can recapture their margins."
        },
        {
          heading: "Capturing the Medical & Commercial Inflow from Sikkim and Bihar",
          content: "Over 65% of medical consultations in Siliguri clinics originate from outside the city limits. With targeted multi-city local SEO and instant WhatsApp consultation funnels, healthcare providers can predictably schedule patients before they even begin their journey."
        }
      ]
    },
    faqs: [
      { q: "How can you help our Siliguri hotel reduce OTA commissions?", a: "We engineer a custom, lightning-fast direct booking engine with seamless payment gateway integration and run geotargeted Meta and Google Ads reaching Kolkata and national tourists planning trips." },
      { q: "Do you work with tea manufacturers and exporters in North Bengal?", a: "Yes. We build high-end B2B catalog platforms and run international export lead generation campaigns connecting tea gardens directly with global importers." },
      { q: "Can you optimize our clinic's Google Maps ranking in Siliguri?", a: "Absolutely. We implement complete medical schema, NAP consistency audits, local citation building, and patient review generation architectures." },
      { q: "How do we get started with an audit for our Siliguri business?", a: "You can schedule a complimentary strategy session online or message our team directly on WhatsApp at +91 7872490719." }
    ]
  },

  // ==========================================
  // 5. DURGAPUR (STEEL, INDUSTRIAL & MEDICAL)
  // ==========================================
  "durgapur": {
    id: "durgapur",
    name: "Durgapur",
    bengaliName: "দুর্গাপুর",
    district: "Paschim Bardhaman",
    badge: "Smart Industrial & Healthcare Corridor",
    heroTitle: "Industrial B2B Marketing & Healthcare Patient Funnels in Durgapur",
    heroSubtitle: "Empowering Durgapur's multi-specialty hospitals, steel fabrication enterprises, technical institutes, and retail brands with high-performance digital marketing.",
    heroImage: "/images/service-web-development.webp",
    isGlobalHq: false,
    pinCodes: ["713216", "713205", "713212", "713213", "713204"],
    keyNeighborhoods: [
      "City Centre", "Benachity Commercial Hub", "Bidhannagar Healthcare Corridor", 
      "Steel Township", "Muchipara", "Amravati"
    ],
    stats: [
      { value: "₹2.9 Cr+", label: "Regional Client Revenue", sub: "Industrial & healthcare" },
      { value: "95+", label: "Local Campaigns Deployed", sub: "Paschim Bardhaman" },
      { value: "620+", label: "Monthly Patient Inquiries", sub: "Multi-specialty clinics" },
      { value: "0.66s", label: "Average Mobile Speed", sub: "Optimized mobile funnels" }
    ],
    marketProblem: "Industrial manufacturers and healthcare facilities in Durgapur suffer from unoptimized web presences, losing high-value patient cases and B2B corporate contracts to Kolkata competitors.",
    marketSolution: "Arventa Ventures deploys targeted B2B Google Search campaigns, HIPAA-compliant patient booking funnels, and sub-second React websites that establish regional market dominance.",
    targetIndustries: [
      { name: "Hospitals & Diagnostic Centers", desc: "Automated doctor appointment scheduling and patient acquisition across Bidhannagar and City Centre.", lift: "+390% Inquiries" },
      { name: "Steel & Engineering Fabrication", desc: "High-intent B2B search ads capturing corporate RFQs and industrial supply tenders.", lift: "₹12 Cr Pipeline" },
      { name: "Higher Education & Technical Colleges", desc: "Student enrollment funnels targeting engineering and management aspirants across South Bengal.", lift: "+280% Admissions" },
      { name: "City Centre Retail & Showrooms", desc: "Localized Meta video ads driving weekend footfall for electronics, automotive, and fashion brands.", lift: "+210% Footfall" }
    ],
    caseStudy: {
      client: "Apex Multispecialty Hospital Durgapur",
      sector: "Healthcare & Surgery",
      challenge: "A leading private hospital in Durgapur was struggling with empty operation theaters and losing surgical cases to Kolkata medical centers.",
      strategy: "Built a sub-0.8s doctor appointment portal, deployed localized Google Search Ads for orthopedic and cardiac care, and integrated automated WhatsApp triage.",
      results: [
        { value: "620+", label: "Monthly Patient Leads" },
        { value: "-48%", label: "Patient Acquisition Cost" },
        { value: "+340%", label: "Surgical Consultations" }
      ],
      quote: "Arventa Ventures helped us become the first-choice hospital in Paschim Bardhaman. Their patient acquisition funnels run with mathematical precision.",
      author: "Dr. Sandip Banerjee",
      role: "Medical Superintendent",
      image: "/images/casestudy-clinic.webp"
    },
    deliverables: [
      { title: "HIPAA-Compliant Patient Booking Portals", desc: "Frictionless digital doctor scheduling integrated with SMS and WhatsApp notifications." },
      { title: "Industrial B2B Google Search Dominance", desc: "Ranking #1 for high-value engineering, manufacturing, and fabrication commercial queries." },
      { title: "Benachity & City Centre Geotargeted Ads", desc: "Pinpoint social ads reaching high-income households within a 15-kilometer radius." },
      { title: "Sub-Second React 19 Hospital Web Apps", desc: "Engineered for zero downtime, emergency patient responsiveness, and accessibility." },
      { title: "Doctor Interview & Credibility Video Production", desc: "Building immense trust with cinematic patient recovery testimonials and doctor spotlights." },
      { title: "Server-Side Lead Attribution (CAPI)", desc: "Passing verified appointment conversions directly into hospital analytics dashboards." }
    ],
    comparison: [
      { feature: "Healthcare Strategy", arventa: "HIPAA-compliant appointment funnels", localFreelancer: "Basic WordPress contact form", traditionalAgency: "Generic newspaper ads" },
      { feature: "B2B Industrial Depth", arventa: "Targeting procurement managers & engineers", localFreelancer: "Social media meme posts", traditionalAgency: "Trade show brochures" },
      { feature: "Web Speed", arventa: "Sub-0.8s on Cloudflare Edge", localFreelancer: "Slow 4.2s template", traditionalAgency: "Heavy unoptimized CMS" },
      { feature: "Attribution", arventa: "First-party offline conversion tracking", localFreelancer: "None", traditionalAgency: "Unreliable browser cookies" }
    ],
    seoArticle: {
      title: "Digital Transformation for Durgapur's Industrial & Healthcare Leaders",
      sections: [
        {
          heading: "Why Durgapur Healthcare Providers Must Win the Digital Search Battle",
          content: "Patients in Durgapur, Asansol, and Bankura no longer choose doctors based on roadside signs alone. Over 82% of surgical and specialized consultations begin with a Google search. Hospitals that present verified reviews, doctor credentials, and instant digital booking win the lion's share of high-margin procedures."
        },
        {
          heading: "Industrial B2B Procurement Is Moving Digital",
          content: "Plant managers and supply chain directors across Eastern India increasingly research fabrication and machinery suppliers online. An engineering enterprise in Durgapur with a sub-second, professional web presence consistently outbids competitors relying on paper catalogs."
        }
      ]
    },
    faqs: [
      { q: "How do you help Durgapur hospitals acquire more patients?", a: "We build sub-second doctor appointment booking portals, launch high-intent Google Search campaigns for specific treatments, and deploy automated WhatsApp patient routing." },
      { q: "Can Arventa Ventures generate B2B leads for manufacturing plants in Durgapur?", a: "Yes. We run high-precision B2B Google Search Ads targeting industrial keywords and engineer conversion-focused RFQ landing pages that capture verified corporate buyers." },
      { q: "Do you offer localized video production in Durgapur?", a: "Yes. Our video crew travels on-site with 4K cinema cameras to record doctor interviews, factory tours, and authentic customer testimonials." },
      { q: "What is your typical onboarding timeline for Durgapur clients?", a: "Campaigns and lead funnels are engineered and launched within 7 to 10 business days following the initial forensic audit." }
    ]
  },

  // ==========================================
  // 6. ASANSOL (COMMERCIAL & RETAIL MEGACITY)
  // ==========================================
  "asansol": {
    id: "asansol",
    name: "Asansol",
    bengaliName: "আসানসোল",
    district: "Paschim Bardhaman",
    badge: "Commercial Trading & Retail Megacity",
    heroTitle: "High-ROAS Meta Ads & Web Engineering in Asansol",
    heroSubtitle: "Scaling Asansol's retail showrooms, wholesale distributors, automotive dealerships, and educational institutes with data-driven performance marketing.",
    heroImage: "/images/service-meta-ads.webp",
    isGlobalHq: false,
    pinCodes: ["713301", "713304", "713303", "713325"],
    keyNeighborhoods: [
      "Hutton Road", "Burnpur Commercial Belt", "Ushagram", "Kalyanpur", 
      "Galaxy Mall Corridor", "GT Road Commercial Center"
    ],
    stats: [
      { value: "₹2.6 Cr+", label: "Regional Client Revenue", sub: "Retail & distribution" },
      { value: "85+", label: "Local Campaigns Deployed", sub: "Asansol & Burnpur" },
      { value: "4.6x", label: "Average Retail ROAS", sub: "Showroom footfall ads" },
      { value: "0.65s", label: "Mobile Page Load Time", sub: "Sub-second responsiveness" }
    ],
    marketProblem: "Retailers and distributors in Asansol rely on expensive local newspaper circulars and hoardings that fail to track return on investment, leaving massive market share vulnerable to aggressive digital competitors.",
    marketSolution: "Arventa Ventures introduces algorithmic Meta Ads, server-side CAPI tracking, and local Google Maps SEO that drives measurable in-store footfall and direct online orders.",
    targetIndustries: [
      { name: "Retail Jewelry, Fashion & Electronics", desc: "Drive high-ticket weekend footfall and festival purchases with hyper-targeted Instagram video ads.", lift: "+280% Footfall" },
      { name: "Automotive Dealerships & Service Centers", desc: "Capturing test-drive bookings and high-margin service appointments across GT Road.", lift: "180+ Test Drives/mo" },
      { name: "Competitive Exam & Degree Colleges", desc: "Student enrollment funnels targeting aspirants across Jharkhand border and Western Bengal.", lift: "+320% Admissions" },
      { name: "Wholesale & FMCG Distribution", desc: "B2B digital order portals and WhatsApp catalog ordering for regional stockists.", lift: "+190% Reorders" }
    ],
    caseStudy: {
      client: "Royal Jewels & Bridal Showroom Asansol",
      sector: "Luxury Retail & Jewelry",
      challenge: "A premier jewelry house on GT Road Asansol was losing festive bridal market share to large Kolkata chains opening local branches.",
      strategy: "Launched high-hook cinema video ads showcasing bridal jewelry collections on Instagram, paired with VIP WhatsApp showroom appointment booking.",
      results: [
        { value: "+310%", label: "Showroom Appointments" },
        { value: "5.4x", label: "Tracked Return on Ad Spend" },
        { value: "₹1.4 Cr", label: "Festive Sales Pipeline" }
      ],
      quote: "Arventa Ventures brought the caliber of a top national advertising agency right to Asansol. Our festive bridal sales broke all previous records.",
      author: "Rajiv Agarwal",
      role: "Managing Partner",
      image: "/images/service-brand-identity.webp"
    },
    deliverables: [
      { title: "High-Converting Retail Footfall Ads", desc: "Geotargeted Meta campaigns reaching high-income households within Asansol." },
      { title: "GT Road Local Google Maps #1 Ranking", desc: "Optimizing your Google Business Profile to capture shoppers searching nearby." },
      { title: "VIP WhatsApp Showroom Appointment Funnels", desc: "Automated booking and reminder sequences eliminating customer no-shows." },
      { title: "Sub-Second Next.js Catalog Web Apps", desc: "Smooth, app-like mobile browsing showcasing product collections with zero lag." },
      { title: "Automated Review & Reputation Management", desc: "Generating steady 5-star customer reviews that build unshakeable local credibility." },
      { title: "Full Commercial IP & Creative Ownership", desc: "All video assets, code, and ad accounts remain 100% under your ownership." }
    ],
    comparison: [
      { feature: "Footfall Strategy", arventa: "Precision geotargeted video ads + WhatsApp VIP booking", localFreelancer: "Generic Facebook page boosts", traditionalAgency: "Print flyers with zero tracking" },
      { feature: "Tech Architecture", arventa: "Sub-0.8s Next.js on Edge CDN", localFreelancer: "Slow WordPress template", traditionalAgency: "Generic CMS" },
      { feature: "Reporting", arventa: "Real-time Looker Studio dashboard tracking sales", localFreelancer: "None provided", traditionalAgency: "Monthly vanity impressions PDF" },
      { feature: "Creative Quality", arventa: "4K cinema gear with high-hook script pacing", localFreelancer: "Stock images", traditionalAgency: "Recycled generic banners" }
    ],
    seoArticle: {
      title: "How Asansol Retailers Are Outperforming National Chains Through Digital Precision",
      sections: [
        {
          heading: "The Changing Retail Landscape on GT Road and Hutton Road",
          content: "As national retail chains enter Asansol, local family-owned showrooms face unprecedented competition. However, local brands have deep community trust. When paired with high-performance digital marketing—such as high-hook vertical video commercials and automated VIP appointment booking—independent showrooms routinely outperform national competitors in customer acquisition cost."
        },
        {
          heading: "Capturing Cross-Border Shoppers from Dhanbad and Jamtara",
          content: "Asansol serves as the commercial capital for neighboring border districts. With precision radius-targeted Meta campaigns and localized Google Search ads, Asansol retailers can pull high-ticket weekend shoppers across district lines."
        }
      ]
    },
    faqs: [
      { q: "How can Meta Ads increase footfall for my Asansol showroom?", a: "We run high-hook video ads targeting shoppers within a customized radius around your showroom, offering exclusive incentives to book VIP appointments via WhatsApp." },
      { q: "Can you help our Asansol school or college enroll more students?", a: "Yes. We engineer student lead generation funnels with automated WhatsApp counselor follow-ups, capturing admissions across Paschim Bardhaman and Jharkhand." },
      { q: "Do you handle local SEO for Asansol businesses?", a: "Yes. We optimize your Google Business Profile, structure local semantic schema, and build high-authority citations to dominate Asansol map searches." },
      { q: "How do we get started with Arventa Ventures in Asansol?", a: "Book a complimentary strategy call online or connect directly with our team on WhatsApp at +91 7872490719." }
    ]
  },

  // ==========================================
  // 7. HOWRAH (MANUFACTURING & LOGISTICS)
  // ==========================================
  "howrah": {
    id: "howrah",
    name: "Howrah",
    bengaliName: "হাওড়া",
    district: "Howrah",
    badge: "Manufacturing & Heavy Industrial Hub",
    heroTitle: "B2B Manufacturing Lead Gen & High-Speed Web Development in Howrah",
    heroSubtitle: "Empowering Howrah's engineering workshops, metal fabricators, export manufacturers, and logistics enterprises with digital customer acquisition.",
    heroImage: "/images/service-architecture-blueprint.webp",
    isGlobalHq: false,
    pinCodes: ["711101", "711106", "711204", "711302", "711313"],
    keyNeighborhoods: [
      "Bally", "Liluah Industrial Zone", "Dharamtala Road", "Kona Expressway Corridor", 
      "Sankrail Industrial Park", "Baltikuri Foundry Belt", "Shibpur"
    ],
    stats: [
      { value: "₹3.6 Cr+", label: "B2B Contract Pipeline", sub: "Howrah industrial firms" },
      { value: "80+", label: "Industrial Funnels Shipped", sub: "Manufacturing & logistics" },
      { value: "0.59s", label: "Web Portal Response Time", sub: "Global edge CDN" },
      { value: "+340%", label: "Verified RFQ Inquiries", sub: "High-intent search ads" }
    ],
    marketProblem: "Howrah manufacturing firms depend on traditional middlemen and stagnant trade directories that charge exorbitant fees while delivering low-quality, untargeted leads.",
    marketSolution: "Arventa Ventures builds direct B2B digital export engines, high-speed custom catalogs, and international search marketing that connects Howrah manufacturers directly with global procurement managers.",
    targetIndustries: [
      { name: "Metal Fabrication & Foundry Engineering", desc: "Direct B2B procurement funnels capturing domestic and international supply contracts.", lift: "₹14 Cr Pipeline" },
      { name: "Industrial Hardware & Machinery Export", desc: "Multilingual export product portals ranking globally on Google for specialized machinery.", lift: "+310% Export Orders" },
      { name: "Warehousing, Freight & Supply Chain", desc: "High-intent search lead generation for logistics hubs along the Kona Expressway.", lift: "+240% Inquiries" },
      { name: "Textile & Garment Manufacturing", desc: "Wholesale buyer acquisition funnels for Howrah's historic textile and apparel manufacturers.", lift: "3.5x B2B Volume" }
    ],
    caseStudy: {
      client: "Howrah Precision Forgings & Heavy Engineering",
      sector: "B2B Industrial Manufacturing",
      challenge: "A 40-year-old foundry in Liluah was suffering from shrinking domestic margins and total reliance on local brokers who demanded heavy commissions.",
      strategy: "Engineered a sub-0.6s technical product catalog in Next.js, launched targeted B2B Google Search Ads, and deployed automated quotation request forms.",
      results: [
        { value: "₹4.8 Cr", label: "New Annual Contracts" },
        { value: "+380%", label: "Direct Inbound RFQs" },
        { value: "0%", label: "Middleman Broker Commissions" }
      ],
      quote: "Arventa Ventures opened doors to international buyers in the Middle East and Europe that we never could have reached on our own.",
      author: "Debabrata Ghosh",
      role: "Managing Director",
      image: "/images/service-app-development.webp"
    },
    deliverables: [
      { title: "High-Speed B2B Digital Product Catalogs", desc: "Sub-second Next.js web applications showcasing technical dielines and specifications." },
      { title: "Direct RFQ (Request for Quote) Funnels", desc: "Automated engineering drawing uploads and instant sales notification webhooks." },
      { title: "Global & Domestic Google Search Dominance", desc: "Ranking #1 for high-ticket manufacturing, foundry, and machinery search queries." },
      { title: "Export Lead Generation Campaigns", desc: "Targeting international procurement directors across North America, Europe, and GCC." },
      { title: "Sub-Second Mobile Accessibility", desc: "Optimized for fast mobile review by busy procurement heads on the factory floor." },
      { title: "Complete IP & Technical Asset Ownership", desc: "100% transfer of all code, catalog databases, and ad account data." }
    ],
    comparison: [
      { feature: "B2B Lead Generation", arventa: "Direct inbound RFQ funnels with verified corporate contacts", localFreelancer: "Social media posts with no business audience", traditionalAgency: "Paid directory listings with shared leads" },
      { feature: "Technical Depth", arventa: "Engineers who understand industrial specifications", localFreelancer: "Generic Canva designs", traditionalAgency: "Non-technical marketing generalists" },
      { feature: "Global Reach", arventa: "Multilingual international Google Search campaigns", localFreelancer: "Limited to local contacts", traditionalAgency: "Domestic print media only" },
      { feature: "Code Quality", arventa: "Sub-0.8s Next.js on global CDN", localFreelancer: "Slow WordPress template", traditionalAgency: "Heavy outdated CMS" }
    ],
    seoArticle: {
      title: "Digital Direct-to-Buyer Strategies for Howrah Manufacturers",
      sections: [
        {
          heading: "Eliminating the Middleman in Howrah's Industrial Belt",
          content: "For generations, Howrah's engineering workshops and foundries have produced world-class metal goods while middlemen captured the lion's share of profits. By deploying modern B2B websites with instantaneous loading speeds and direct quotation workflows, Howrah enterprises can bypass intermediaries and deal directly with enterprise buyers."
        },
        {
          heading: "Winning Global Export Contracts Along the Kona Expressway",
          content: "International buyers sourcing hardware and casting parts evaluate suppliers on digital professionalism, security certifications, and technical catalog accessibility. Arventa Ventures elevates Howrah manufacturers to global enterprise standards."
        }
      ]
    },
    faqs: [
      { q: "How can Arventa Ventures help my Howrah factory find international buyers?", a: "We engineer high-speed digital product portals with detailed technical specifications and run targeted Google Search campaigns in your target export countries." },
      { q: "Can prospective buyers upload engineering drawings on the website?", a: "Yes. We build secure, encrypted file upload modules supporting CAD, PDF, and STEP formats that automatically alert your sales engineering team." },
      { q: "How long does it take to launch an industrial B2B website?", a: "Custom Next.js B2B web applications are typically engineered, tested, and deployed within 2 to 3 weeks." },
      { q: "How do we get started?", a: "Contact Jaydeb Jana and our B2B engineering pod directly on WhatsApp at +91 7872490719 to schedule an on-site or digital consultation." }
    ]
  },

  // ==========================================
  // 8. KHARAGPUR (TECH, RESEARCH & INDUSTRIAL)
  // ==========================================
  "kharagpur": {
    id: "kharagpur",
    name: "Kharagpur",
    bengaliName: "খড়গপুর",
    district: "Paschim Medinipur",
    badge: "Tech Research & Industrial Smart Hub",
    heroTitle: "Deep Tech Positioning & Digital Growth in Kharagpur",
    heroSubtitle: "Connecting Kharagpur's IIT-incubated startups, manufacturing enterprises, logistics hubs, and educational academies with scalable digital acquisition.",
    heroImage: "/images/service-growth-telemetry.webp",
    isGlobalHq: false,
    pinCodes: ["721301", "721305", "721302", "721306"],
    keyNeighborhoods: [
      "IIT Kharagpur Campus Zone", "Gole Bazar Commercial Center", "Nimpura Industrial Estate", 
      "Kalaikunda Corridor", "Malancha Road", "Chhota Tengra"
    ],
    stats: [
      { value: "₹2.2 Cr+", label: "Regional Client Revenue", sub: "Paschim Medinipur tech & trade" },
      { value: "70+", label: "Campaigns & Applications", sub: "Startups & industrial firms" },
      { value: "0.60s", label: "Average Mobile Response", sub: "React 19 & Next.js" },
      { value: "+280%", label: "Lead Generation Surge", sub: "Local search & B2B funnels" }
    ],
    marketProblem: "Technology startups and industrial enterprises in Kharagpur often lack specialized digital marketing partners, having to choose between subpar local freelancers or distant metropolitan agencies that don't prioritize them.",
    marketSolution: "Located just down the road in Contai, Arventa Ventures provides Kharagpur enterprises with premier software engineering, investor-grade digital positioning, and aggressive customer acquisition.",
    targetIndustries: [
      { name: "Deep Tech & IIT-Incubated Startups", desc: "Investor pitch decks, product-led growth websites, and developer community funnels.", lift: "3.2x Valuation" },
      { name: "Nimpura Industrial & Heavy Manufacturing", desc: "Direct B2B procurement funnels capturing domestic and export manufacturing orders.", lift: "₹8 Cr Pipeline" },
      { name: "Coaching Institutes & Technical Academies", desc: "High-converting student enrollment campaigns for JEE, NEET, and GATE aspirants.", lift: "+310% Admissions" },
      { name: "Gole Bazar Retail & Showrooms", desc: "Geotargeted social video ads driving customer footfall for retail and automotive businesses.", lift: "+220% Footfall" }
    ],
    caseStudy: {
      client: "Kharagpur AgriTech Innovations",
      sector: "Hardware & IoT Agriculture",
      challenge: "An IIT-incubated agritech startup had developed breakthrough soil-sensing IoT hardware but struggled to generate commercial distributor inquiries across Bengal.",
      strategy: "Engineered an interactive product demonstration website in Next.js, launched targeted B2B Google Search Ads, and created high-converting video demonstration reels.",
      results: [
        { value: "180+", label: "Distributor Inquiries" },
        { value: "₹1.8 Cr", label: "Initial Order Pipeline" },
        { value: "100/100", label: "Lighthouse Performance" }
      ],
      quote: "Arventa Ventures understood our deep tech hardware immediately. Having Jaydeb Jana and his team so close in Contai made our collaboration seamless.",
      author: "Soumyajit Roy",
      role: "Co-Founder & CEO",
      image: "/images/service-web-development.webp"
    },
    deliverables: [
      { title: "Next.js 19 Tech Startup Web Apps", desc: "Sub-second response times, interactive product sandboxes, and modern typography." },
      { title: "B2B Industrial Lead Funnels", desc: "Direct Request-for-Quote forms with automated CRM notifications." },
      { title: "Paschim Medinipur Local Maps SEO", desc: "Dominating local search queries across Kharagpur, Midnapore, and Jhargram." },
      { title: "Cinematic Product & Founder Video Production", desc: "Full-service 4K shooting highlighting product features and laboratory testing." },
      { title: "High-Intent Google Search Ads", desc: "Capturing procurement managers and commercial decision-makers at the moment of intent." },
      { title: "Complete Code & Data Ownership", desc: "100% intellectual property rights transferred upon project delivery." }
    ],
    comparison: [
      { feature: "Geographic Proximity", arventa: "Directly accessible from our Contai Global HQ", localFreelancer: "Solo individual with limited bandwidth", traditionalAgency: "Distant Kolkata agency with high overheads" },
      { feature: "Tech Competency", arventa: "Senior React, Python & Next.js engineers", localFreelancer: "Generic drag-and-drop page builders", traditionalAgency: "Non-technical marketing staff" },
      { feature: "Lead Tracking", arventa: "Server-side CAPI + First-party attribution", localFreelancer: "None", traditionalAgency: "Unreliable browser cookies" },
      { feature: "Delivery Speed", arventa: "Agile 2-week production sprints", localFreelancer: "Months of delays", traditionalAgency: "Bureaucratic corporate timelines" }
    ],
    seoArticle: {
      title: "Scaling Technology & Industrial Ventures in the Kharagpur Corridor",
      sections: [
        {
          heading: "The Convergence of Academic Innovation and Industrial Growth",
          content: "Kharagpur occupies a unique position in Eastern India: a globally renowned academic research ecosystem paired with expanding industrial estates like Nimpura. To attract international investors and commercial distributors, Kharagpur startups must maintain digital web applications that match global Silicon Valley standards."
        },
        {
          heading: "Local SEO and Multi-District Dominance Across Medinipur",
          content: "By dominating local Google Maps queries and deploying radius-targeted Meta campaigns across Kharagpur and Midnapore town, regional businesses can effectively capture customer intent throughout the entire district."
        }
      ]
    },
    faqs: [
      { q: "How close is your team to Kharagpur?", a: "Our Global Headquarters is located just down the road in Contai, Purba Medinipur. We regularly conduct in-person consultations with founders and plant directors in Kharagpur." },
      { q: "Can you help our tech startup raise funding with professional web design?", a: "Yes. We engineer high-prestige, investor-grade web presences with sub-second performance, interactive product demonstrations, and clear data architecture." },
      { q: "Do you handle student admissions campaigns for Kharagpur coaching centers?", a: "Yes. We deploy high-converting student acquisition funnels across West Bengal, generating qualified parent and student inquiries." },
      { q: "How do we get started?", a: "Message our team on WhatsApp at +91 7872490719 or schedule a strategy audit online." }
    ]
  },

  // ==========================================
  // 9. HALDIA (PORT, PETROCHEMICAL & LOGISTICS)
  // ==========================================
  "haldia": {
    id: "haldia",
    name: "Haldia",
    bengaliName: "হলদিয়া",
    district: "Purba Medinipur",
    badge: "International Port & Petrochemical Hub",
    heroTitle: "Industrial B2B Marketing & Port Logistics Web Engineering in Haldia",
    heroSubtitle: "Serving Haldia's heavy industrial corporations, petrochemical suppliers, maritime shipping agents, and commercial contractors with high-trust digital architecture.",
    heroImage: "/images/service-architecture-blueprint.webp",
    isGlobalHq: false,
    pinCodes: ["721602", "721606", "721607", "721604"],
    keyNeighborhoods: [
      "Durgachak Commercial Center", "Haldia Port Trust Zone", "Basudevpur", 
      "Sutahata", "IOCL Refinery Belt", "HPL Township Corridor"
    ],
    stats: [
      { value: "₹4.1 Cr+", label: "B2B Contract Volume", sub: "Haldia industrial ecosystem" },
      { value: "65+", label: "Corporate Portals Deployed", sub: "Petrochemicals & maritime" },
      { value: "0.58s", label: "Enterprise Load Speed", sub: "Bank-grade SSL & Cloudflare" },
      { value: "+310%", label: "Corporate Quotation Growth", sub: "High-intent B2B search" }
    ],
    marketProblem: "Heavy industrial and shipping companies in Haldia operate on lucrative multi-crore contracts, yet their digital web presences are outdated, vulnerable to cyber threats, and fail to impress international shipping auditors.",
    marketSolution: "Located right in Purba Medinipur, Arventa Ventures provides Haldia corporations with bank-grade secure web applications, global ISO-compliant digital positioning, and targeted B2B procurement funnels.",
    targetIndustries: [
      { name: "Petrochemical & Chemical Supply", desc: "Enterprise B2B quotation portals and chemical safety data sheet (MSDS) search architectures.", lift: "₹16 Cr Pipeline" },
      { name: "Maritime Shipping & Port Logistics", desc: "Vessel tracking dashboards, freight forwarding portals, and customs clearance lead generation.", lift: "+340% Inquiries" },
      { name: "Industrial Construction & Contracting", desc: "Tender qualification platforms showcasing heavy machinery fleet and past refinery projects.", lift: "4.2x Contract Wins" },
      { name: "Haldia Hospitality & Corporate Housing", desc: "Corporate executive booking engines for business travelers visiting petrochemical plants.", lift: "+190% Bookings" }
    ],
    caseStudy: {
      client: "Bengal Maritime Logistics & Stevedoring",
      sector: "Port Services & Shipping",
      challenge: "A leading Haldia port contractor was missing out on international shipping tenders because their legacy website failed basic security and mobile compliance checks.",
      strategy: "Re-engineered their corporate platform in React 19 and Next.js with sub-0.6s loading, implemented SOC-2 compliant security headers, and launched targeted Google Search Ads.",
      results: [
        { value: "₹5.4 Cr", label: "New Shipping Contracts" },
        { value: "100%", label: "Security Audit Pass Rate" },
        { value: "+280%", label: "Direct Corporate Inquiries" }
      ],
      quote: "Arventa Ventures understood the high stakes of maritime port contracting. Their digital architecture gave global shipping companies complete confidence in our operations.",
      author: "Captain S. K. Roy",
      role: "Operations Director",
      image: "/images/service-web-development.webp"
    },
    deliverables: [
      { title: "Bank-Grade Secure Corporate Web Apps", desc: "TLS 1.3 encryption, Content Security Policies, and Cloudflare Enterprise WAF defense." },
      { title: "Interactive Fleet & Capability Catalogs", desc: "High-speed filtering of heavy cranes, transport trailers, and chemical storage tanks." },
      { title: "Global Maritime & Chemical Google SEO", desc: "Ranking #1 for high-ticket shipping, stevedoring, and petrochemical supplier queries." },
      { title: "Automated RFQ & Quotation Workflows", desc: "Encrypted tender specification downloads and immediate sales notification webhooks." },
      { title: "Sub-Second Global Edge Performance", desc: "Ensuring international shipping executives in Singapore, London, and Tokyo experience instantaneous page loads." },
      { title: "100% Intellectual Property Transfer", desc: "Full commercial ownership of all source code, databases, and digital assets." }
    ],
    comparison: [
      { feature: "Security Architecture", arventa: "Bank-grade TLS 1.3, CSP & Cloudflare Enterprise WAF", localFreelancer: "Vulnerable, unpatched WordPress plugins", traditionalAgency: "Basic SSL certificate only" },
      { feature: "B2B Corporate Tone", arventa: "Engineered for international maritime executives", localFreelancer: "Informal social media graphics", traditionalAgency: "Generic corporate brochureware" },
      { feature: "Geographic Proximity", arventa: "Purba Medinipur neighbor (Contai Global HQ)", localFreelancer: "Remote unknown entity", traditionalAgency: "Distant Kolkata agency" },
      { feature: "Speed Standard", arventa: "Sub-0.8s on Global Edge CDN", localFreelancer: "4.8s on shared hosting", traditionalAgency: "3.9s on monolithic server" }
    ],
    seoArticle: {
      title: "Digital Direct Procurement for Haldia's Maritime & Petrochemical Giants",
      sections: [
        {
          heading: "The Critical Role of Digital Security in Port Contracting",
          content: "As Haldia Port Trust and major petrochemical refineries automate procurement, vendor evaluation criteria have fundamentally changed. International corporate partners now routinely inspect contractor digital infrastructure for cybersecurity resilience, ISO compliance, and accessibility."
        },
        {
          heading: "Direct B2B Procurement vs Middleman Brokers",
          content: "By establishing an authoritative digital presence that ranks #1 for chemical fabrication, shipping logistics, and industrial maintenance in Haldia, contractors can secure lucrative direct contracts without forfeiting margins to brokers."
        }
      ]
    },
    faqs: [
      { q: "Is Arventa Ventures based near Haldia?", a: "Yes. Our Global Headquarters is located right here in Purba Medinipur at Contai, just a short drive from Haldia's industrial and port zone." },
      { q: "Can you build secure websites that comply with corporate safety audits?", a: "Yes. We engineer enterprise web applications implementing Content Security Policies, strict HTTPS, Cloudflare WAF, and automated zero-downtime deployments." },
      { q: "How do you generate leads for heavy industrial B2B companies?", a: "We combine high-precision Google Search campaigns targeting high-intent commercial keywords with conversion-engineered RFQ landing pages." },
      { q: "How can we schedule a consultation for our Haldia company?", a: "Message our team on WhatsApp at +91 7872490719 or book an on-site corporate consultation." }
    ]
  },

  // ==========================================
  // 10. BARDHAMAN (AGRO-BUSINESS & REGIONAL TRADE)
  // ==========================================
  "bardhaman": {
    id: "bardhaman",
    name: "Bardhaman",
    bengaliName: "বর্ধমান",
    district: "Purba Bardhaman",
    badge: "Agro-Business & Regional Trade Capital",
    heroTitle: "Agro-Business Lead Gen & Local SEO in Bardhaman",
    heroSubtitle: "Empowering Bardhaman's agricultural processors, rice millers, healthcare clinics, educational institutes, and retail showrooms with modern digital growth.",
    heroImage: "/images/portfolio-freshharvest.webp",
    isGlobalHq: false,
    pinCodes: ["713101", "713104", "713102", "713103"],
    keyNeighborhoods: [
      "Curzon Gate Center", "Borehat Commercial Belt", "Golapbagh University Area", 
      "Alisha Corridor", "Khagragarh", "Police Line Market"
    ],
    stats: [
      { value: "₹2.4 Cr+", label: "Regional Client Revenue", sub: "Purba Bardhaman businesses" },
      { value: "75+", label: "Local Campaigns Deployed", sub: "Agro, clinics & retail" },
      { value: "0.64s", label: "Average Mobile Response", sub: "Top Core Web Vitals" },
      { value: "+290%", label: "Direct Inbound Orders", sub: "B2B agro-commerce" }
    ],
    marketProblem: "Rice mills, food processors, and healthcare clinics in Bardhaman depend heavily on offline dealer networks and middlemen, missing direct wholesale orders and patient consultations.",
    marketSolution: "Arventa Ventures builds direct-to-buyer B2B digital catalogs, automated WhatsApp inquiry funnels, and hyper-targeted Google Maps SEO that connects Bardhaman enterprises directly with regional buyers.",
    targetIndustries: [
      { name: "Rice Mills & Agro-Processing", desc: "Wholesale buyer lead generation and export catalog platforms for aromatic and non-basmati rice.", lift: "3.4x B2B Volume" },
      { name: "Private Clinics & Nursing Homes", desc: "Patient acquisition funnels serving Purba Bardhaman, Hooghly, and Birbhum districts.", lift: "410+ Inquiries/mo" },
      { name: "Coaching Centers & Universities", desc: "Student enrollment campaigns for competitive exams and undergraduate admissions.", lift: "+310% Admissions" },
      { name: "Curzon Gate Retail & Showrooms", desc: "Geotargeted weekend footfall campaigns for electronics, jewelry, and bridal fashion.", lift: "+240% Footfall" }
    ],
    caseStudy: {
      client: "Bardhaman Heritage Rice & Agro Mills",
      sector: "Agro-Processing & Wholesale",
      challenge: "A major rice mill in Bardhaman was selling 100% of its premium Miniket and Gobindobhog harvest through commission brokers, losing up to 18% in distribution margin.",
      strategy: "Built a sub-0.7s B2B catalog portal in Next.js, launched targeted Google Search Ads reaching supermarket buyers in Kolkata and Delhi, and deployed automated WhatsApp quote routing.",
      results: [
        { value: "₹3.8 Cr", label: "Direct Wholesale Pipeline" },
        { value: "+340%", label: "Direct Dealer Inquiries" },
        { value: "14%", label: "Net Margin Increase" }
      ],
      quote: "Arventa Ventures opened up direct supermarket buyers across Kolkata and Eastern India for our mill. We finally control our own sales pipeline.",
      author: "Prasanta Mondal",
      role: "Managing Director",
      image: "/images/portfolio-freshharvest.webp"
    },
    deliverables: [
      { title: "Direct B2B Agro-Commerce Web Portals", desc: "Sub-second Next.js digital catalogs showcasing bulk rice specifications and certifications." },
      { title: "Curzon Gate Local Google Maps #1 Ranking", desc: "Forensic Google Business Profile optimization capturing local shoppers and patients." },
      { title: "Automated WhatsApp Dealer Quotation Funnels", desc: "Instant pricing and sample request workflows eliminating customer drop-off." },
      { title: "High-Hook Bengali & English Video Commercials", desc: "In-house 4K cinema shooting showcasing mill hygiene, processing technology, and packaging." },
      { title: "National Google Search Lead Generation", desc: "Capturing bulk supermarket and wholesale food buyers searching across India." },
      { title: "100% Commercial IP Ownership", desc: "Complete transfer of all web source code, catalog data, and ad account rights." }
    ],
    comparison: [
      { feature: "Agro B2B Strategy", arventa: "Direct supermarket & wholesale buyer funnels", localFreelancer: "Casual social media posts", traditionalAgency: "Local newspaper ads with no tracking" },
      { feature: "Tech Standards", arventa: "Sub-0.8s Next.js on Edge CDN", localFreelancer: "Slow WordPress template", traditionalAgency: "Heavy monolithic PHP" },
      { feature: "Lead Attribution", arventa: "Server-side CAPI + first-party data tracking", localFreelancer: "None", traditionalAgency: "Browser cookies only" },
      { feature: "Client Support", arventa: "Direct founder oversight and dedicated sprint lead", localFreelancer: "Unreliable communication", traditionalAgency: "Junior account executive" }
    ],
    seoArticle: {
      title: "How Bardhaman's Agro-Processors and Showrooms Are Conquering Digital Markets",
      sections: [
        {
          heading: "The Digital Revolution in the Rice Bowl of Bengal",
          content: "Bardhaman has long been celebrated as the agricultural powerhouse of Bengal. However, modern commercial success is no longer dictated by production volume alone; it depends on direct access to institutional buyers, supermarkets, and export networks. Agro-enterprises with high-performance digital web applications capture direct contracts with significantly higher margins."
        },
        {
          heading: "Capturing Commercial Footfall Around Curzon Gate",
          content: "With over 70% of retail consumers in Bardhaman researching smartphone, jewelry, and vehicle purchases online before entering a physical store, showrooms that maintain top 3 Google Maps rankings and run high-hook video ads dominate local market share."
        }
      ]
    },
    faqs: [
      { q: "How can Arventa Ventures help my Bardhaman rice mill find direct buyers?", a: "We engineer high-speed B2B digital catalogs with sample request workflows and run targeted Google Search Ads reaching supermarket chains and grain wholesalers across India." },
      { q: "Can you help our Bardhaman clinic attract patients from neighboring districts?", a: "Yes. We deploy localized Google Search campaigns and automated WhatsApp booking funnels reaching patients in Purba Bardhaman, Hooghly, and Birbhum." },
      { q: "Do you shoot video commercials in Bardhaman?", a: "Yes. Our production team travels with 4K cinema gear to shoot on-site factory tours, retail showrooms, and customer testimonial videos." },
      { q: "How do we get started?", a: "Connect with our team on WhatsApp at +91 7872490719 or request a complimentary digital strategy audit online." }
    ]
  }
};
