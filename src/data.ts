export const services = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Build a loyal community and drive engagement across all major platforms with data-driven social strategies.",
    icon: "Share2",
    features: [
      "Content Creation",
      "Community Management",
      "Growth Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "facebook-ads",
    title: "Facebook & Instagram Ads",
    description:
      "High-converting paid social campaigns designed to maximize ROI and scale your customer acquisition.",
    icon: "Target",
    features: [
      "Audience Targeting",
      "Creative A/B Testing",
      "Retargeting Funnels",
      "ROAS Optimization",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC)",
    description:
      "Capture high-intent search traffic and turn clicks into loyal customers with optimized search campaigns.",
    icon: "Search",
    features: [
      "Keyword Research",
      "Ad Copywriting",
      "Bid Management",
      "Conversion Tracking",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Dominate search rankings and drive sustainable organic traffic to your website over the long term.",
    icon: "TrendingUp",
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "Link Building",
      "Local SEO",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description:
      "Compelling storytelling and valuable content that educates your audience and builds brand authority.",
    icon: "PenTool",
    features: [
      "Blog Strategy",
      "Copywriting",
      "Whitepapers",
      "Email Newsletters",
    ],
  },
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "Craft a memorable and impactful brand image that resonates with your target audience and stands out.",
    icon: "Award",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Voice",
    ],
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "Eye-catching visuals and premium marketing collateral designed to capture attention and communicate value.",
    icon: "Image",
    features: [
      "Ad Creatives",
      "Social Graphics",
      "Marketing Materials",
      "UI/UX Design",
    ],
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    description:
      "Engaging video content for social media, YouTube, and ads that tell your story dynamically.",
    icon: "Video",
    features: [
      "Short-form Reels/TikToks",
      "Brand Films",
      "YouTube Strategy",
      "Video Ads",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description:
      "Automated email flows and newsletters that nurture leads and drive repeat purchases.",
    icon: "Mail",
    features: [
      "Campaign Strategy",
      "Automation Flows",
      "List Segmentation",
      "A/B Testing",
    ],
  },
  {
    id: "influencer-marketing",
    title: "Influencer & Creator Marketing",
    description:
      "We have strong, personal relationships with a vast network of top content creators. We collaborate with them to craft authentic, personalized advertising campaigns that seamlessly integrate with their content, genuinely connect with your target audience, and powerfully amplify your brand's message.",
    icon: "Users",
    features: [
      "Creator Outreach & Matchmaking",
      "Personalized Campaign Strategy",
      "Content Collaboration",
      "Performance & ROI Tracking",
    ],
  },
  {
    id: "web-development",
    title: "Website Design & Development",
    description:
      "Modern, ultra-fast, and conversion-engineered websites built with React, Next.js, and TypeScript. Optimized for sub-second page loads, seamless mobile responsiveness, and high organic search rankings.",
    icon: "Code2",
    features: [
      "Custom React & Next.js Websites",
      "High-Converting Landing Pages",
      "E-Commerce Stores (Shopify / Custom)",
      "Core Web Vitals & Speed Optimization",
    ],
  },
  {
    id: "app-development",
    title: "Mobile & Web Application Development",
    description:
      "Scalable native and cross-platform mobile apps for iOS and Android, plus progressive web applications (PWAs) engineered for smooth 60fps performance and intuitive user experiences.",
    icon: "Smartphone",
    features: [
      "iOS & Android Mobile Apps",
      "React Native & Flutter Engineering",
      "Modern Product UI/UX Architecture",
      "Cloud Database & Secure API Sync",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software & Tech Solutions",
    description:
      "Bespoke enterprise software, custom internal tools, CRM/ERP workflows, automated API pipelines, and AI integrations designed to scale your operations and drive efficiency.",
    icon: "Cpu",
    features: [
      "Bespoke Enterprise Software",
      "API Integrations & Cloud Webhooks",
      "AI Workflows & Business Automation",
      "Scalable Cloud Backend Architecture",
    ],
  },
];

export interface PortfolioMetric {
  label: string;
  value: string;
  before?: string;
  after?: string;
  growth?: string;
}

export interface PortfolioItem {
  id: number;
  client: string;
  tagline: string;
  category: string;
  service: string;
  description: string;
  metrics: string[];
  detailedMetrics: PortfolioMetric[];
  deliverables: string[];
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  duration: string;
  year: string;
  featured?: boolean;
  socialLink: string;
  image: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    client: "Urban Brew Café",
    tagline: "Hyper-Local Gastronomy Footfall Surge",
    category: "Hospitality & Local",
    service: "Social Media & Local SEO",
    description:
      "Revamped their Instagram presence and optimized local search, resulting in a 40% increase in foot traffic within 3 months.",
    metrics: ["+40% Foot Traffic", "15k New Followers", "2.5x Engagement Rate"],
    detailedMetrics: [
      { label: "Foot Traffic Growth", value: "+40%", before: "85 guests/day", after: "120+ guests/day", growth: "+41%" },
      { label: "Local Followers", value: "15,200+", before: "1,200", after: "16,400", growth: "+1,266%" },
      { label: "Google Maps Actions", value: "3.4x", before: "450/mo", after: "1,530/mo", growth: "+240%" },
    ],
    deliverables: ["Hyper-Local SEO", "High-Appetite Video Reels", "Google Business Profile", "Micro-Influencer Tastings"],
    challenge:
      "Urban Brew Café struggled to maintain steady foot-traffic during weekdays and faced aggressive competition from commercial coffee chains in the metropolitan area.",
    solution:
      "Engineered a localized visual content engine pairing drool-worthy short-form coffee reels with geo-targeted Meta ad radius drops and automated 5-star Google review acquisition.",
    results:
      "Achieved a 40% surge in weekday foot-traffic, over 15k targeted local followers, and packed weekend table waitlists within 90 days.",
    techStack: ["Meta Ads Manager", "Google Maps Platform", "CapCut Pro", "Local Rank Tracker"],
    duration: "3 Months",
    year: "2025 - 2026",
    socialLink: "https://instagram.com/urbanbrewcafe_sample",
    image: "/images/portfolio-urbanbrew.webp",
    testimonial: {
      quote: "Arventa Ventures made our café the go-to weekend hangout in the district. Our weekday morning traffic jumped 40% within just two months!",
      author: "Karan Patel",
      role: "Co-Founder, Urban Brew",
      rating: 5,
    },
  },
  {
    id: 2,
    client: "Nova Fashion Studio",
    tagline: "D2C E-Commerce High-ROAS Performance Scale",
    category: "eCommerce & D2C",
    service: "Facebook & Instagram Ads",
    description:
      "Scaled their online sales through targeted ad funnels, achieving a 4.5x Return on Ad Spend during the holiday season.",
    metrics: ["4.5x ROAS", "+120% Online Sales", "Reduced CPA by 30%"],
    detailedMetrics: [
      { label: "Blended Ad ROAS", value: "4.52x", before: "1.45x", after: "4.52x", growth: "+211%" },
      { label: "Monthly Online Sales", value: "+120%", before: "₹4.8L/mo", after: "₹10.6L/mo", growth: "+120%" },
      { label: "Customer Acquisition Cost", value: "-30%", before: "₹640", after: "₹448", growth: "-30%" },
    ],
    deliverables: ["Advantage+ Shopping Campaigns", "UGC Video Ad Pipeline", "Dynamic Catalog Retargeting", "Klaviyo VIP Email Flows"],
    challenge:
      "Nova Fashion was burning ad capital on generic carousel ads with an unsustainable 1.45x ROAS and rising customer acquisition costs during Q3.",
    solution:
      "Built a systematic creative testing framework featuring fast-paced try-on hauls, problem-solution hooks, and high-converting collection landers with multi-tiered retargeting.",
    results:
      "Scaled monthly ad spend profitably by 3x while elevating blended ROAS to 4.5x, generating over ₹10 Lakhs in additional monthly gross revenue.",
    techStack: ["Meta Advantage+ Ads", "Shopify Plus", "Klaviyo", "Triple Whale", "Canva Pro"],
    duration: "6 Months",
    year: "2025 - 2026",
    featured: true,
    socialLink: "https://facebook.com/novafashion_sample",
    image: "/images/portfolio-novafashion.webp",
    testimonial: {
      quote: "We went from breaking even on Meta ads to generating over 4.5x consistent return. Arventa's creative team is simply on another level.",
      author: "Ananya Sen",
      role: "Creative Director, Nova Fashion",
      rating: 5,
    },
  },
  {
    id: 3,
    client: "Apex Fitness Club",
    tagline: "High-Ticket Membership Acquisition Engine",
    category: "Local Business",
    service: "Lead Generation",
    description:
      "Implemented a robust lead generation campaign using Meta ads, resulting in a record-breaking month for new gym memberships.",
    metrics: ["300+ New Leads", "15% Conversion Rate", "Sold out classes"],
    detailedMetrics: [
      { label: "Qualified Walk-in Leads", value: "320+", before: "25/mo", after: "320/mo", growth: "+1,180%" },
      { label: "Lead-to-Member Conversion", value: "15.4%", before: "4.2%", after: "15.4%", growth: "+266%" },
      { label: "Annual Memberships Closed", value: "+85", before: "12/mo", after: "97/mo", growth: "+708%" },
    ],
    deliverables: ["High-Converting Quiz Funnel", "WhatsApp Automated Lead Routing", "Transformation Video Ads", "Geo-Fenced Meta Ads"],
    challenge:
      "Stagnant gym membership growth and high lead drop-off rates due to delayed sales follow-ups and uninspired generic gym imagery.",
    solution:
      "Implemented a 3-question fitness goal interactive quiz linked to instant automated WhatsApp consultation scheduling, supported by transformation video ads.",
    results:
      "Delivered 300+ pre-qualified local leads in 30 days with a 15.4% close rate, completely filling all morning and evening personal training slots.",
    techStack: ["Meta Instant Forms", "WhatsApp Cloud API", "Zapier Automation", "HubSpot CRM"],
    duration: "2 Months",
    year: "2025",
    socialLink: "https://instagram.com/apexfitness_sample",
    image: "/images/portfolio-apexfitness.webp",
    testimonial: {
      quote: "Our front desk was overwhelmed with genuine walk-ins within two weeks. We closed 85 annual memberships in a single month!",
      author: "Vikram Malhotra",
      role: "Managing Director, Apex Fitness",
      rating: 5,
    },
  },
  {
    id: 4,
    client: "Bloom Beauty Lounge",
    tagline: "Luxury Aesthetic Overhaul & Viral Bookings",
    category: "Beauty & Lifestyle",
    service: "Brand Identity & Social",
    description:
      "Complete visual rebranding and aesthetic social media overhaul, positioning them as the premium choice in their city.",
    metrics: [
      "+200% Profile Visits",
      "Fully Booked Schedules",
      "Brand Recognition",
    ],
    detailedMetrics: [
      { label: "Profile Visits Growth", value: "+210%", before: "2.1k/mo", after: "6.5k/mo", growth: "+210%" },
      { label: "Viral Reel Impressions", value: "2.8M+", before: "15k/mo", after: "2.8M/mo", growth: "+18,500%" },
      { label: "Average Client Spend", value: "+45%", before: "₹1,200", after: "₹1,740", growth: "+45%" },
    ],
    deliverables: ["Brand Identity System", "Cinematic Treatment Reels", "Micro-Influencer Gifting Matrix", "Instagram DM Booking Flow"],
    challenge:
      "Premium salon service struggling to justify luxury price points with outdated visual branding and inconsistent social posting.",
    solution:
      "Executed an editorial rebrand with dark slate & champagne gold aesthetics, high-end treatment ASMR reels, and seamless Instagram DM appointment booking.",
    results:
      "Elevated brand prestige across the city, resulting in a 200% increase in profile discovery, 2.8M video views, and 100% booked VIP weekend slots.",
    techStack: ["Figma Rebranding", "Adobe Premiere Pro", "ManyChat IG Automation", "Meta Suite"],
    duration: "4 Months",
    year: "2025 - 2026",
    socialLink: "https://instagram.com/bloombeauty_sample",
    image: "/images/portfolio-bloombeauty.webp",
    testimonial: {
      quote: "The branding Arventa designed for us gave us immediate luxury credibility. Our clients constantly compliment our aesthetic!",
      author: "Pooja Banerjee",
      role: "Founder, Bloom Beauty",
      rating: 5,
    },
  },
  {
    id: 5,
    client: "Zenith Properties",
    tagline: "Luxury High-Net-Worth Real Estate Acquisition",
    category: "Real Estate",
    service: "Google Ads & SEO",
    description:
      "Dominated search results for luxury real estate queries, driving high-net-worth leads directly to their agents.",
    metrics: ["#1 Search Ranking", "50+ Qualified Leads/mo", "Lowered CPL"],
    detailedMetrics: [
      { label: "Gross Property Value Sold", value: "₹95+ Cr", before: "₹15 Cr/qtr", after: "₹95 Cr/qtr", growth: "+533%" },
      { label: "Verified HNWI Inquiries", value: "52/mo", before: "8/mo", after: "52/mo", growth: "+550%" },
      { label: "Cost Per Qualified Buyer", value: "-42%", before: "₹4,200", after: "₹2,430", growth: "-42%" },
    ],
    deliverables: ["Google High-Intent Search Ads", "Virtual Tour Landing Pages", "Two-Step Lead Verification", "Lead Scoring CRM Integration"],
    challenge:
      "High volume of unqualified, budget-constrained inquiries wasting sales agents' time on luxury penthouse and villa developments.",
    solution:
      "Architected a high-intent Google Search funnel with strict negative keyword filters and a two-step income-bracket qualification form.",
    results:
      "Generated 50+ verified high-net-worth buyer leads each month, accelerating inventory closure to over ₹95 Crores in 6 months.",
    techStack: ["Google Ads Engine", "Salesforce CRM", "Next.js Custom Landers", "Hotjar Heatmaps"],
    duration: "6 Months",
    year: "2025 - 2026",
    socialLink: "https://facebook.com/zenithprops_sample",
    image: "/images/portfolio-skylinerealty.webp",
    testimonial: {
      quote: "We stopped wasting time with casual browsers. The leads coming from Arventa have genuine capital and closed our top penthouses.",
      author: "Rajesh Singhania",
      role: "VP Sales, Zenith Properties",
      rating: 5,
    },
  },
  {
    id: 6,
    client: "Elite Dental Care",
    tagline: "Hyper-Local Search Dominance & Clinical Trust",
    category: "Healthcare & Clinics",
    service: "Google Maps & Local Search SEO",
    description:
      "By overhauling their Google Business Profile, building hyper-local landing pages, and running targeted search ads, we completely filled their schedule in 45 days.",
    metrics: ["#1 Search Rank", "+150 Patients/Mo", "+280% Calls"],
    detailedMetrics: [
      { label: "Google 3-Pack Rank", value: "#1", before: "Rank #14", after: "Rank #1 across 18 keywords", growth: "Top Position" },
      { label: "New Monthly Patients", value: "+150", before: "30 patients", after: "180+ patients", growth: "+500%" },
      { label: "Direct Phone Calls", value: "+280%", before: "45 calls/mo", after: "171 calls/mo", growth: "+280%" },
    ],
    deliverables: ["Google Business Profile Overhaul", "Local Schema & Citations", "Automated Patient Reviews", "Targeted Dental Search Ads"],
    challenge:
      "The clinic was virtually invisible on Google Maps searches outside a 500-meter radius, losing hundreds of high-value patient inquiries to neighboring clinics.",
    solution:
      "Completely overhauled their GBP entity citations, added geotagged patient treatment photos, deployed a 5-star SMS review automation, and launched high-intent search ads.",
    results:
      "Clinched the #1 position on Google Maps across the metropolitan area and booked 150+ new high-margin dental implant and ortho patients in 45 days.",
    techStack: ["Google Search Console", "Google Business Profile", "SEMrush Local", "Twilio SMS API"],
    duration: "3 Months",
    year: "2025 - 2026",
    featured: true,
    socialLink: "https://google.com/maps",
    image: "/images/casestudy-clinic.webp",
    testimonial: {
      quote: "Arventa took our clinic from being buried on page 2 to ranking #1 for cosmetic dentistry. Our appointment book is full 3 weeks in advance.",
      author: "Dr. Sameer Roy",
      role: "Chief Dental Surgeon, Elite Dental",
      rating: 5,
    },
  },
  {
    id: 7,
    client: "Creator Rahul",
    tagline: "Algorithmic Audience Acceleration & YouTube Scale",
    category: "Creator & Media",
    service: "Video Marketing & Strategy",
    description:
      "Strategic YouTube and Shorts planning that helped a lifestyle creator break through the algorithm and reach 1M subscribers.",
    metrics: ["1M+ Subscribers", "50M+ Monthly Views", "High Brand Deals"],
    detailedMetrics: [
      { label: "Subscriber Milestone", value: "1.05M", before: "120k", after: "1.05M", growth: "+775%" },
      { label: "Monthly Video Views", value: "52M+", before: "3.5M", after: "52M+", growth: "+1,385%" },
      { label: "Sponsorship Rates", value: "3.2x", before: "₹1.5L/deal", after: "₹4.8L/deal", growth: "+220%" },
    ],
    deliverables: ["CTR Thumbnail Testing Matrix", "Pacing & Retention Scripting", "YouTube Shorts Syndication", "Sponsorship Pitch Deck"],
    challenge:
      "Plateaued subscriber count and low click-through rates despite high production quality and frequent uploads.",
    solution:
      "Revamped thumbnail title testing matrix, restructured the first 8 seconds of video intros, and built an automated shorts syndication pipeline.",
    results:
      "Exploded past the 1,000,000 subscriber mark within 7 months, generating 50M+ monthly impressions and 3.2x higher brand sponsorship rates.",
    techStack: ["TubeBuddy A/B Testing", "DaVinci Resolve", "VidIQ Pro", "Canva Team"],
    duration: "7 Months",
    year: "2025 - 2026",
    socialLink: "https://youtube.com/@creatorrahul_sample",
    image: "/images/video-marketing.webp",
    testimonial: {
      quote: "Arventa's data-driven packaging turned my YouTube channel from a struggling hobby into a 7-figure media business.",
      author: "Rahul Varma",
      role: "Content Creator, Rahul Studios",
      rating: 5,
    },
  },
  {
    id: 8,
    client: "Fresh Basket Mart",
    tagline: "Hyper-Local Quick Commerce App Installs",
    category: "Retail & Delivery",
    service: "App Install Campaigns",
    description:
      "Drove local grocery app installations through hyper-targeted Meta ads, significantly increasing daily active users.",
    metrics: ["50k+ App Installs", "Top 10 in Category", "High Retention"],
    detailedMetrics: [
      { label: "Total App Installs", value: "54,000+", before: "2,500", after: "54,000+", growth: "+2,060%" },
      { label: "Cost Per First Order (CAC)", value: "₹142", before: "₹380", after: "₹142", growth: "-62%" },
      { label: "30-Day Repeat Order Rate", value: "68%", before: "31%", after: "68%", growth: "+119%" },
    ],
    deliverables: ["App Install Meta & Google UAC Ads", "Hyper-Local Radius Targeting", "First-Order Incentive Landers", "Automated Push Journeys"],
    challenge:
      "Local grocery delivery startup faced high app install churn and exorbitant CPIs competing against national aggregator giants.",
    solution:
      "Implemented hyper-local pin-code targeted video ads emphasizing 15-minute farm-fresh delivery with an irresistible first-basket welcome offer.",
    results:
      "Drove over 54,000 app installs at just ₹14 per install, establishing market leadership in 6 suburban sectors.",
    techStack: ["Google App Campaigns (UAC)", "Meta App Installs", "Branch.io Attribution", "CleverTap Push"],
    duration: "5 Months",
    year: "2025",
    socialLink: "https://facebook.com/freshbasket_sample",
    image: "/images/portfolio-freshharvest.webp",
    testimonial: {
      quote: "Arventa cut our customer acquisition cost in half while tripling daily active orders. They know hyper-local growth inside and out.",
      author: "Sourav Ghosh",
      role: "Head of Operations, Fresh Basket",
      rating: 5,
    },
  },
  {
    id: 9,
    client: "TechNest Solutions",
    tagline: "B2B SaaS Account-Based Pipeline Generation",
    category: "B2B & Enterprise",
    service: "LinkedIn Marketing",
    description:
      "Established thought leadership and generated high-ticket B2B leads through targeted LinkedIn outreach and content.",
    metrics: [
      "$2M Pipeline Generated",
      "20+ Enterprise Demos",
      "Industry Authority",
    ],
    detailedMetrics: [
      { label: "Enterprise Pipeline", value: "$2.1M+", before: "$300k", after: "$2.1M+", growth: "+600%" },
      { label: "C-Level Demos Booked", value: "24/qtr", before: "3/qtr", after: "24/qtr", growth: "+700%" },
      { label: "Account Engagement Rate", value: "32%", before: "6%", after: "32%", growth: "+433%" },
    ],
    deliverables: ["Executive Thought Leadership", "LinkedIn Sponsored InMail", "B2B Whitepaper Funnel", "Cold Outbound Playbooks"],
    challenge:
      "B2B SaaS product struggled to reach CTOs and VP of Engineering buyers through conventional cold emails and generic search ads.",
    solution:
      "Positioned the CEO as an industry authority on LinkedIn, paired with hyper-targeted Account-Based Marketing (ABM) ads targeting 250 ideal enterprise accounts.",
    results:
      "Booked 24 enterprise demos with Fortune 500 decision-makers and generated over $2.1M in qualified enterprise pipeline.",
    techStack: ["LinkedIn Campaign Manager", "HubSpot ABM", "Clay Data Enrichment", "Clearbit"],
    duration: "6 Months",
    year: "2025 - 2026",
    socialLink: "https://linkedin.com/company/technest_sample",
    image: "/images/portfolio-zenithtech.webp",
    testimonial: {
      quote: "Arventa solved our hardest problem: getting on the calendar of enterprise CTOs. The pipeline they built is our primary revenue driver.",
      author: "Arjun Nambiar",
      role: "CEO, TechNest Solutions",
      rating: 5,
    },
  },
  {
    id: 10,
    client: "Aaradhya Heritage Handlooms",
    tagline: "Ethnic Artisanal D2C E-Commerce Transformation",
    category: "eCommerce & D2C",
    service: "Meta Advantage+ Scaling & WhatsApp Funnel",
    description:
      "Engineered an omnichannel D2C scaling campaign for artisanal silk sarees, generating ₹1.42 Crores during the festive season at a 5.2x ROAS.",
    metrics: ["5.2x Peak ROAS", "+185% D2C Orders", "₹1.4 Cr In 60 Days"],
    detailedMetrics: [
      { label: "Festive Season ROAS", value: "5.2x", before: "1.8x", after: "5.2x", growth: "+188%" },
      { label: "Gross D2C Revenue", value: "₹1.42 Cr", before: "₹28L", after: "₹1.42 Cr", growth: "+407%" },
      { label: "Average Order Value", value: "+38%", before: "₹2,100", after: "₹2,900", growth: "+38%" },
    ],
    deliverables: ["Artisan Storytelling Video Ads", "Festival Catalog Scaling", "Cart Abandonment WhatsApp Flow", "Shopify Speed Optimization"],
    challenge:
      "Traditional artisanal silk brand unable to break outside physical exhibitions into scalable nationwide online D2C sales.",
    solution:
      "Captured authentic weaver craftsmanship on 4K video, targeted festive shoppers across Tier 1 & 2 cities with Meta Advantage+, and recovered 24% of dropped carts via WhatsApp.",
    results:
      "Generated ₹1.42 Crores in revenue over a 60-day festive campaign at an astounding 5.2x return on ad spend.",
    techStack: ["Shopify Plus", "Meta Advantage+ Ads", "WhatsApp Business Cloud", "Google Analytics 4"],
    duration: "2 Months",
    year: "2025 - 2026",
    socialLink: "https://instagram.com/aaradhya_handlooms_sample",
    image: "/images/casestudy-apparel.webp",
    testimonial: {
      quote: "Arventa took our family's handloom heritage and built an e-commerce powerhouse. 5.2x ROAS during Diwali changed our business trajectory.",
      author: "Meenakshi Das",
      role: "Founder, Aaradhya Handlooms",
      rating: 5,
    },
  },
];

export const pricing = [
  {
    id: "starter-boost",
    name: "Starter Boost",
    badge: "Special Offer",
    originalPrice: "₹10,500",
    price: "₹7,999",
    period: "/month",
    description: "Perfect for emerging brands looking to establish a strong presence on social media with consistent content and targeted ads.",
    videosCount: "4 Videos",
    videosNote: "Pre-shot footage or AI generated",
    postersCount: "8 Posters",
    adsManagement: "Unlimited Meta Ads Management",
    platforms: "Facebook + Instagram",
    features: [
      "4 Videos (Pre-shot / AI Generated)",
      "8 Custom High-Converting Posters",
      "Unlimited Meta Ads Management",
      "Platforms: Facebook + Instagram",
      "Targeted Audience Setup & Pixel Tracking",
      "Regular Post & Story Scheduling",
      "Dedicated Client Support",
    ],
    cta: "Choose Starter Boost",
    popular: false,
  },
  {
    id: "growth-pro",
    name: "Growth Pro",
    badge: "Most Popular",
    originalPrice: "₹15,500",
    price: "₹12,999",
    period: "/month",
    description: "Accelerate your customer acquisition across Meta and YouTube with aggressive video marketing and retargeting funnels.",
    videosCount: "8 Videos",
    videosNote: "Pre-shot footage or AI generated",
    postersCount: "15 Posters",
    adsManagement: "Unlimited Meta Ads Management",
    platforms: "Facebook + Instagram + YouTube",
    features: [
      "8 Videos (Pre-shot / AI Generated)",
      "15 Custom High-Converting Posters",
      "Unlimited Meta Ads Management",
      "Platforms: Facebook + Instagram + YouTube",
      "Full-Funnel Ad Retargeting & Lookalikes",
      "High-Converting Ad Copywriting & Creatives",
      "Priority Weekly Strategy & Support",
    ],
    cta: "Choose Growth Pro",
    popular: true,
  },
  {
    id: "business-dominance",
    name: "Business Dominance",
    badge: "Best Value",
    originalPrice: "₹18,500",
    price: "₹14,999",
    period: "/month",
    description: "Total market domination with multi-platform coverage, YouTube distribution, and Google My Business local search optimization.",
    videosCount: "10 Videos",
    videosNote: "Pre-shot footage or AI generated",
    postersCount: "20 Posters",
    adsManagement: "Unlimited Meta Ads Management",
    platforms: "Facebook + Instagram + YouTube + GMB",
    features: [
      "10 Videos (Pre-shot / AI Generated)",
      "20 Custom High-Converting Posters",
      "Unlimited Meta Ads Management",
      "Platforms: Facebook + Instagram + YouTube + GMB",
      "Google My Business (GMB) Local SEO Optimization",
      "Complete Omnichannel Customer Acquisition",
      "24/7 VIP Priority Growth Manager Support",
    ],
    cta: "Choose Business Dominance",
    popular: false,
  },
];

export const faqData = [
  {
    question: "What makes Arventa Ventures different from other agencies?",
    answer:
      "We don't believe in one-size-fits-all solutions. Our strategies are bespoke, data-driven, and focused entirely on ROI. We act as an extension of your team, providing transparent reporting and proactive growth strategies.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary depending on the service. Paid advertising (Google/Meta Ads) can generate leads within days. Organic strategies like SEO and Content Marketing typically take 3-6 months to show significant momentum.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with businesses of all sizes, from ambitious startups ready to scale to established corporate brands looking to dominate their market share. We have specific strategies tailored to different growth stages.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We define clear KPIs (Key Performance Indicators) with you before starting any campaign. Success is measured by tangible business outcomes: leads generated, Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and overall revenue growth.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "While we recommend a minimum 3-month commitment to allow strategies to gain traction (especially for SEO), we offer flexible engagement models. We want you to stay with us because of the results we deliver, not because you're locked in.",
  },
];

export { blogPosts, type BlogPost, type BlogAuthor, type BlogFAQ } from "./data/blogs";
