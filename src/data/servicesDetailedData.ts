export interface ServiceCapability {
  title: string;
  desc: string;
  iconName: string;
  deliverables: string[];
}

export interface ServiceProblemSolution {
  problem: string;
  solution: string;
  stat: string;
}

export interface ServiceMethodologyStep {
  step: string;
  title: string;
  timeline: string;
  desc: string;
  deliverables: string;
}

export interface ServiceTechItem {
  name: string;
  category: string;
  role: string;
  badge: string;
}

export interface ServiceComparisonRow {
  dimension: string;
  arventa: string;
  traditional: string;
  freelancer: string;
}

export interface ServiceCaseStudy {
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  image: string;
  metrics: { label: string; value: string; change: string }[];
  quote: string;
  clientName: string;
  clientRole: string;
}

export interface ServiceDeepDiveSection {
  title: string;
  body: string[];
  takeaways: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetailedItem {
  id: string;
  title: string;
  subtitle: string;
  heroBadge: string;
  category: string;
  image: string;
  stats: { value: string; label: string; sub: string }[];
  overview: string;
  problemSolutions: ServiceProblemSolution[];
  capabilities: ServiceCapability[];
  methodology: ServiceMethodologyStep[];
  techStack: ServiceTechItem[];
  comparison: ServiceComparisonRow[];
  caseStudy: ServiceCaseStudy;
  deepDiveSections: ServiceDeepDiveSection[];
  faqs: ServiceFAQ[];
}

export const servicesDetailedMap: Record<string, ServiceDetailedItem> = {
  // 1. WEBSITE DEVELOPMENT
  "web-development": {
    id: "web-development",
    title: "Website Design & Custom Engineering",
    subtitle: "High-Speed, Conversion-Engineered React & Next.js Web Experiences Built to Turn Visitors into High-Ticket Customers.",
    heroBadge: "Core Engineering Service",
    category: "Development & Technology",
    image: "/images/service-web-development.webp",
    stats: [
      { value: "< 0.8s", label: "Average Page Load Time", sub: "Top 1% Core Web Vitals score" },
      { value: "+185%", label: "Average Conversion Surge", sub: "Engineered post-click journeys" },
      { value: "100%", label: "Source Code Ownership", sub: "Zero vendor lock-in or licensing fees" },
      { value: "99.99%", label: "Cloudflare Uptime SLA", sub: "Edge-hosted with DDoS shielding" }
    ],
    overview: "In 2026, a slow or generic website is not just an aesthetic flaw—it is a catastrophic financial leak. If your website takes longer than 2 seconds to load or fails to instantly communicate your value proposition, 68% of your paid and organic traffic bounces directly to your competitors. At Arventa Ventures, we don't build generic WordPress templates. We engineer bespoke, lightning-fast web applications utilizing React 19, Next.js 15, and TypeScript. Every interface is meticulously architected for psychological persuasion, sub-second latency, flawless mobile responsiveness, and dominant organic search engine crawlability.",
    problemSolutions: [
      {
        problem: "Bloated templates with slow 4+ second loading times driving away 60% of potential buyers.",
        solution: "Bespoke clean-code Next.js architecture with server-side rendering (SSR) and edge-cached assets loading in under 800ms.",
        stat: "70% Faster Loading"
      },
      {
        problem: "Vanity designs that look pretty but suffer from dismal 1.2% conversion rates and high abandonment.",
        solution: "Direct-response conversion rate optimization (CRO) with frictionless UX pathways, sticky CTA triggers, and instant checkout flows.",
        stat: "3.4x Conversion Lift"
      },
      {
        problem: "Weak technical foundations resulting in zero indexability and complete invisibility on Google search results.",
        solution: "Enterprise technical SEO architecture with semantic HTML5, Schema.org JSON-LD microdata, and automatic XML sitemaps.",
        stat: "Top 3 Rank Velocity"
      }
    ],
    capabilities: [
      {
        title: "Bespoke Next.js & React Web Engineering",
        desc: "Custom headless architectures with sub-second page loads, zero runtime bloat, and enterprise security standards.",
        iconName: "Code2",
        deliverables: ["Next.js 15 App Router", "TypeScript Type Safety", "Tailwind CSS Styling", "Server-Side Rendering (SSR)"]
      },
      {
        title: "High-Converting E-Commerce Stores",
        desc: "Custom Shopify Plus storefronts and bespoke headless e-commerce architectures engineered for maximum average order value (AOV).",
        iconName: "ShoppingBag",
        deliverables: ["1-Click Checkout Integration", "Dynamic Product Filtering", "Upsell & Cross-Sell Engine", "Inventory & ERP Sync"]
      },
      {
        title: "Direct-Response Landing Page Architecture",
        desc: "High-impact campaign landing pages engineered to maximize ad spend efficiency and slash cost per acquisition (CPA).",
        iconName: "Target",
        deliverables: ["A/B Split Testing Hooks", "Heatmap & Session Tracking", "Micro-Commitment Forms", "Instant Mobile Optimization"]
      },
      {
        title: "Enterprise Technical SEO & Core Web Vitals",
        desc: "Airtight search engine accessibility ensuring Google bots seamlessly crawl, render, and rank your high-value pages.",
        iconName: "Search",
        deliverables: ["Perfect 98+ Lighthouse Scores", "JSON-LD Structured Data", "Canonical & Hreflang Tags", "Automated Image WebP/AVIF Pipeline"]
      },
      {
        title: "Interactive Web Portals & Customer Dashboards",
        desc: "Secure, role-based portals for clients, members, or partners with real-time data visualization and authentication.",
        iconName: "LayoutDashboard",
        deliverables: ["Role-Based Access Control", "Supabase / PostgreSQL Backends", "Stripe / Razorpay Billing", "Custom Interactive Tables"]
      },
      {
        title: "API & Third-Party System Integrations",
        desc: "Seamless synchronization connecting your website to your CRM, WhatsApp automation, email marketing, and payment gateways.",
        iconName: "Cpu",
        deliverables: ["HubSpot / Zoho CRM Webhooks", "Meta CAPI Server Tracking", "WhatsApp Direct Leads", "Automated Lead Routing"]
      },
      {
        title: "Global Content Delivery & Edge Security",
        desc: "Zero-downtime deployment powered by Cloudflare CDN, automated SSL certificates, and enterprise DDoS mitigation.",
        iconName: "ShieldCheck",
        deliverables: ["Cloudflare Edge Caching", "Enterprise Web Application Firewall", "Automatic Daily Backups", "99.99% Uptime Guarantee"]
      },
      {
        title: "Continuous Maintenance & CRO Sprints",
        desc: "Post-launch iterative optimization ensuring your website continues to outpace competitors as your business scales.",
        iconName: "TrendingUp",
        deliverables: ["Monthly Security Patching", "Continuous A/B UX Sprints", "Speed Regresion Monitoring", "Dedicated Senior Support"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Discovery, Unit Economics & Funnel Audit",
        timeline: "Days 1 - 4",
        desc: "We analyze your target audience demographics, competitor weaknesses, core value propositions, and historical conversion metrics to map out the exact digital customer journey.",
        deliverables: "Comprehensive Web Architecture Blueprint & Information Architecture Map"
      },
      {
        step: "02",
        title: "High-Fidelity Wireframing & Interactive UI/UX",
        timeline: "Days 5 - 12",
        desc: "Our senior designers craft modern, luxury UI mockups in Figma with pixel-perfect responsive layouts for mobile, tablet, and ultra-wide desktop viewports.",
        deliverables: "Interactive Figma Prototypes & Design System Guidelines"
      },
      {
        step: "03",
        title: "Full-Stack Clean Code Development",
        timeline: "Days 13 - 24",
        desc: "Our software engineers code your application with React, Next.js, and TypeScript, adhering to modular component design, clean Git version control, and strict linting rules.",
        deliverables: "Production Code Repository & Staging Environment Preview"
      },
      {
        step: "04",
        title: "Rigorous QA, Speed Testing & SEO Optimization",
        timeline: "Days 25 - 28",
        desc: "We stress-test the website across 25+ browser and device combinations, optimizing Core Web Vitals (LCP, INP, CLS) and verifying all analytics and tracking pixels.",
        deliverables: "95+ Lighthouse Score Verification & Conversion Tracking Validation"
      },
      {
        step: "05",
        title: "Production Deployment & Post-Launch Scaling",
        timeline: "Day 30 Onward",
        desc: "We execute zero-downtime DNS deployment to edge servers, submit XML sitemaps to Google Search Console, and monitor real-time user behavior to capture immediate conversions.",
        deliverables: "Live Production Site, 100% Code Ownership Transfer & Analytics Dashboard"
      }
    ],
    techStack: [
      { name: "Next.js 15", category: "Framework", role: "SSR & Server Components", badge: "Core Engine" },
      { name: "React 19", category: "UI Library", role: "Interactive Client States", badge: "Frontend" },
      { name: "TypeScript", category: "Language", role: "Strict Type Safety & Reliability", badge: "Architecture" },
      { name: "Tailwind CSS", category: "Styling", role: "Utility-First Responsive UI", badge: "Design" },
      { name: "Cloudflare", category: "Infrastructure", role: "Global Edge CDN & Security", badge: "Hosting" },
      { name: "Node.js", category: "Backend", role: "High-Performance APIs", badge: "Server" },
      { name: "PostgreSQL", category: "Database", role: "Relational Structured Data", badge: "Data" },
      { name: "Figma", category: "Design", role: "Prototyping & Design Systems", badge: "UI/UX" }
    ],
    comparison: [
      {
        dimension: "Page Load Velocity",
        arventa: "Sub-second (< 0.8s) with edge SSR & WebP optimization",
        traditional: "3.5s - 6s bloated WordPress or heavy theme templates",
        freelancer: "Variable, often 5s+ due to uncompressed assets"
      },
      {
        dimension: "Conversion Architecture",
        arventa: "Mathematically engineered for high-intent customer acquisition",
        traditional: "Generic brochure layout with passive contact forms",
        freelancer: "Template copying with zero direct-response psychology"
      },
      {
        dimension: "Code Ownership & Freedom",
        arventa: "100% Clean Code ownership with zero monthly licensing lock-ins",
        traditional: "Proprietary CMS lock-in or recurring maintenance traps",
        freelancer: "Messy spaghetti code with missing documentation"
      },
      {
        dimension: "Search Engine Foundation",
        arventa: "Enterprise JSON-LD Schema, semantic HTML5 & perfect Core Web Vitals",
        traditional: "Basic Yoast plugin configuration with broken schemas",
        freelancer: "Overlooked meta tags and poor mobile indexability"
      },
      {
        dimension: "Direct Senior Engineering Access",
        arventa: "Dedicated WhatsApp VIP group with Founder Jaydeb Jana & lead devs",
        traditional: "Layered account managers with sluggish ticket queues",
        freelancer: "Erratic communication and potential ghosting mid-project"
      }
    ],
    caseStudy: {
      client: "Apex Living & Modern Interiors",
      industry: "Luxury Architecture & Home D2C",
      challenge: "Their legacy WordPress site suffered from a 5.2-second load time, leading to a 74% bounce rate from expensive Meta ad clicks and negligible inbound consultation requests.",
      strategy: "Arventa Ventures engineered a custom Next.js 15 web application with sub-second image rendering, an interactive 3D project visualizer, and a streamlined multi-step consultation funnel.",
      image: "/images/service-web-development.webp",
      metrics: [
        { label: "Page Load Speed", value: "0.64s", change: "88% Faster" },
        { label: "Conversion Rate", value: "4.82%", change: "+245% Surge" },
        { label: "Inbound Pipeline", value: "₹2.4 Cr+", change: "In First 90 Days" }
      ],
      quote: "Arventa Ventures completely revolutionized our online presence. Our previous website was losing us money every single day. The new Next.js platform loads instantly and generates qualified high-ticket consultations on autopilot.",
      clientName: "Vikramaditya Roy",
      clientRole: "Managing Director, Apex Living"
    },
    deepDiveSections: [
      {
        title: "The Mathematical Reality of Modern Web Performance",
        body: [
          "In digital marketing, traffic acquisition is only half the battle. If your conversion infrastructure is compromised, every rupee or dollar allocated to Meta Ads, Google Ads, or SEO campaigns yields diminishing returns.",
          "According to Google's official telemetry data, every additional second of latency increases the probability of a bounce by 32%. At 3 seconds, that probability skyrockets to 90%. When a visitor lands on an Arventa-engineered web application, the critical content renders in under 800 milliseconds.",
          "We achieve this through strict asset prioritization, automatic WebP and AVIF next-generation compression, font preloading, and server-side component streaming. Your brand makes an instantaneous, authoritative first impression that commands trust and prompts action."
        ],
        takeaways: [
          "Sub-second load times directly correlate with lowered Customer Acquisition Cost (CAC).",
          "Edge-rendered React Server Components eliminate client-side JavaScript execution lag.",
          "Flawless Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1) provide an immediate Google algorithmic ranking boost."
        ]
      },
      {
        title: "Why Headless React & Next.js Triumphs Over Legacy CMS Systems",
        body: [
          "Traditional content management systems rely on dated PHP monolithic stacks burdened with dozens of conflicting third-party plugins. Each plugin introduces security vulnerabilities, database queries, and blocking scripts that degrade real-world user experience.",
          "Our headless engineering decouples your frontend presentation layer from backend APIs. This grants your brand limitless design freedom, impenetrable security against malicious attacks, and the agility to handle massive traffic spikes during viral marketing campaigns without crashing.",
          "Furthermore, our codebases are fully documented, strictly typed with TypeScript, and delivered with 100% intellectual property ownership transferred to you upon completion."
        ],
        takeaways: [
          "Zero plugin dependency eliminates security vulnerabilities and unexpected site crashes.",
          "Decoupled frontend architecture ensures lightning-fast page transitions without full-page reloads.",
          "Seamless scalability capable of processing thousands of concurrent checkouts without slowdown."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a custom web engineering project typically take from start to launch?",
        answer: "A standard bespoke corporate or e-commerce web build typically takes between 3 to 5 weeks from initial discovery to live production deployment. For urgent time-sensitive launches, our agile sprint team can deliver rapid-deployment high-converting landing page funnels within 7 to 10 business days."
      },
      {
        question: "Do we have 100% full ownership of the source code upon project completion?",
        answer: "Yes, absolutely 100%. Unlike restrictive agencies that retain control of your code or charge recurring proprietary CMS licensing fees, Arventa Ventures transfers full source code ownership, GitHub repositories, and all administrative asset credentials directly to your business."
      },
      {
        question: "Will our internal team be able to easily update blog articles and content without coding?",
        answer: "Yes. We integrate user-friendly headless CMS solutions (such as Sanity, Strapi, or Contentful) or easy markdown-driven dashboards that allow your marketing team to publish blog posts, update copy, modify images, and add portfolio case studies with zero programming knowledge."
      },
      {
        question: "How does Arventa Ventures guarantee lightning-fast page loading speeds?",
        answer: "We engineer websites utilizing Next.js 15 Server Components, edge caching via Cloudflare CDN, automatic responsive WebP image optimization, and rigorous tree-shaking that eliminates unused CSS and JavaScript. We guarantee 90+ Lighthouse performance scores on all primary landing pages."
      },
      {
        question: "Is comprehensive technical SEO and Google tracking included in the build?",
        answer: "Every single website we build includes enterprise technical SEO foundations: semantic HTML5 tags, Schema.org JSON-LD structured data, automatic XML sitemaps, robots.txt directives, Google Analytics 4 (GA4), and Meta Conversions API (CAPI) server-side tracking configured on day one."
      },
      {
        question: "What happens after launch? Do you offer ongoing maintenance and support?",
        answer: "Yes. We provide flexible post-launch support and continuous growth retainers covering server uptime monitoring, security patching, Core Web Vitals maintenance, and iterative A/B conversion rate optimization sprints to ensure your platform consistently drives compounding revenue."
      }
    ]
  },

  // 2. APP & SOFTWARE DEVELOPMENT
  "app-development": {
    id: "app-development",
    title: "Mobile App & Custom Software Engineering",
    subtitle: "High-Performance Native & Cross-Platform iOS, Android, and Cloud SaaS Applications Engineered for 60fps Smoothness and Infinite Scale.",
    heroBadge: "Enterprise Software Division",
    category: "Development & Technology",
    image: "/images/service-app-development.webp",
    stats: [
      { value: "60 FPS", label: "Fluid Screen Rendering", sub: "Native-grade micro-interactions" },
      { value: "99.98%", label: "App Crash-Free Rate", sub: "Strict automated unit & integration testing" },
      { value: "iOS + Android", label: "Cross-Platform Deployment", sub: "Single codebase, dual app store presence" },
      { value: "SOC-2 Ready", label: "Enterprise Security", sub: "End-to-end encrypted API pipelines" }
    ],
    overview: "In an era where over 78% of digital interaction occurs on mobile devices, building a clunky or unresponsive application is fatal to customer retention. At Arventa Ventures, our engineering team constructs mission-critical mobile and web applications that combine sublime, intuitive user experiences with rock-solid cloud backend architectures. Utilizing React Native, Flutter, and Node.js microservices, we build software products that launch rapidly, scale effortlessly to hundreds of thousands of active users, and drive compounding lifetime customer value.",
    problemSolutions: [
      {
        problem: "Unreliable cross-platform apps plagued by laggy navigation, crashes, and poor app store ratings.",
        solution: "High-performance React Native and native iOS/Android modules optimized for 60 frames-per-second fluid responsiveness.",
        stat: "99.9% Crash-Free"
      },
      {
        problem: "Astronomical development costs and delayed 12-month delivery timelines from traditional IT consulting firms.",
        solution: "Agile 6-to-8 week MVP deployment sprints utilizing battle-tested architecture patterns and automated CI/CD pipelines.",
        stat: "3x Faster Launch"
      },
      {
        problem: "Fragile backend databases that choke and go offline during unexpected user surges or flash sales.",
        solution: "Serverless cloud infrastructure powered by PostgreSQL, Redis caching, and automated autoscaling clusters.",
        stat: "Infinite Scalability"
      }
    ],
    capabilities: [
      {
        title: "Cross-Platform iOS & Android Engineering",
        desc: "Single-codebase React Native and Flutter mobile applications delivering authentic native UI performance across Apple and Google app stores.",
        iconName: "Smartphone",
        deliverables: ["Apple App Store Deployment", "Google Play Store Submission", "Push Notification Architecture", "Biometric Authentication"]
      },
      {
        title: "Bespoke SaaS Product Architecture",
        desc: "Multi-tenant software-as-a-service platforms engineered with granular subscription billing, usage meters, and modular feature flags.",
        iconName: "Layers",
        deliverables: ["Stripe Billing Subscriptions", "Multi-Tenant Database Isolation", "Role-Based Team Permissions", "Automated Onboarding Flows"]
      },
      {
        title: "Progressive Web Applications (PWAs)",
        desc: "Web applications that behave like native apps with offline caching, home-screen installation, and instant loading speeds.",
        iconName: "Globe",
        deliverables: ["Service Worker Offline Mode", "Add-To-Home-Screen Prompts", "Background Data Synchronization", "Zero App Store Friction"]
      },
      {
        title: "High-Throughput Backend APIs & Microservices",
        desc: "Secure, lightning-fast RESTful and GraphQL backend APIs built on Node.js, Express, and distributed cloud microservices.",
        iconName: "Cpu",
        deliverables: ["GraphQL & REST API Architecture", "Redis In-Memory Caching", "JWT & OAuth2 Secure Tokens", "Comprehensive Swagger/Postman Docs"]
      },
      {
        title: "Custom CRM, ERP & Operational Portals",
        desc: "Tailored internal enterprise software that automates manual workflows, inventory tracking, order routing, and team analytics.",
        iconName: "Database",
        deliverables: ["Automated Business Logic", "Real-Time Telemetry Dashboards", "ERP / Inventory Sync", "Audit Logging & Security"]
      },
      {
        title: "AI & Machine Learning Integration",
        desc: "Integrating state-of-the-art LLMs, predictive analytics, and computer vision models directly into your custom software workflows.",
        iconName: "Sparkles",
        deliverables: ["OpenAI & Gemini API Pipelines", "Automated Text & Voice Workflows", "Intelligent Recommendation Engines", "Vector Database Search"]
      },
      {
        title: "Payment Gateway & Billing Infrastructure",
        desc: "Compliant global checkout flows supporting Razorpay, Stripe, UPI, Apple Pay, Google Pay, and recurring recurring billing.",
        iconName: "CreditCard",
        deliverables: ["PCI-DSS Compliant Flows", "Automated Tax & Invoicing", "Instant Refund Pipelines", "Multi-Currency Conversions"]
      },
      {
        title: "DevOps, CI/CD & Automated Cloud Infrastructure",
        desc: "Automated continuous integration and deployment pipelines ensuring zero-downtime releases and rapid feature rollout.",
        iconName: "Cloud",
        deliverables: ["GitHub Actions Automated Testing", "Docker Containerization", "AWS / GCP Auto-Scaling", "24/7 Server Health Monitoring"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Product Strategy & Technical Specification",
        timeline: "Week 1",
        desc: "We define user personas, map user flows, design database entity relationships, and document complete functional specifications to ensure absolute clarity.",
        deliverables: "Comprehensive Product Requirements Document (PRD) & Data Flow Architecture"
      },
      {
        step: "02",
        title: "Clickable UI/UX Prototyping & Design Systems",
        timeline: "Weeks 2 - 3",
        desc: "Our product designers construct complete mobile app design systems in Figma, conducting user testing on interactive prototypes prior to writing code.",
        deliverables: "Pixel-Perfect Mobile UI Kit & Clickable App Prototypes"
      },
      {
        step: "03",
        title: "Agile Engineering Sprints & Core Feature Build",
        timeline: "Weeks 4 - 7",
        desc: "Bi-weekly sprint cycles building the frontend app interfaces, secure API endpoints, cloud databases, and third-party integrations with continuous client demos.",
        deliverables: "TestFlight / APK Beta Builds & Live Development Staging"
      },
      {
        step: "04",
        title: "Automated Testing, Security Audits & App Store Prep",
        timeline: "Week 8",
        desc: "Rigorous end-to-end testing, security penetration checks, device compatibility validation, and preparation of App Store metadata and compliance policies.",
        deliverables: "Security Audit Report & App Store Ready Distribution Packages"
      },
      {
        step: "05",
        title: "Official App Store Launch & Continuous Scale",
        timeline: "Week 9 Onward",
        desc: "We manage the entire submission and approval process on Apple App Store and Google Play Store, monitoring crash analytics and executing feature enhancements.",
        deliverables: "Live Production Apps on App Store & Google Play with SLA Support"
      }
    ],
    techStack: [
      { name: "React Native", category: "Mobile Framework", role: "Cross-Platform iOS & Android", badge: "Mobile Core" },
      { name: "Flutter", category: "Mobile Framework", role: "High-Performance Graphics UI", badge: "Engine" },
      { name: "Node.js", category: "Backend Runtime", role: "Microservices & APIs", badge: "Backend" },
      { name: "PostgreSQL", category: "Database", role: "Relational Data Storage", badge: "Database" },
      { name: "Redis", category: "Cache", role: "Sub-Millisecond In-Memory Store", badge: "Speed" },
      { name: "AWS / GCP", category: "Cloud Infrastructure", role: "Auto-Scaling Server Clusters", badge: "Cloud" },
      { name: "Docker", category: "DevOps", role: "Containerized Microservices", badge: "Infrastructure" },
      { name: "Firebase", category: "BaaS", role: "Push Notifications & Realtime Sync", badge: "Mobile" }
    ],
    comparison: [
      {
        dimension: "Development Velocity",
        arventa: "Rapid 6-to-8 week MVP delivery with modular agile sprints",
        traditional: "6 to 12 months sluggish development cycles with massive overhead",
        freelancer: "Unpredictable milestones with frequent delays and scope creep"
      },
      {
        dimension: "Code Reliability & Testing",
        arventa: "Rigorous automated unit, integration, and E2E regression testing",
        traditional: "Manual QA with sluggish bug remediation cycles",
        freelancer: "Rarely includes automated tests; bugs surface in live production"
      },
      {
        dimension: "App Store Approval Guarantee",
        arventa: "100% managed submission adhering to Apple & Google strict guidelines",
        traditional: "Client left to navigate policy rejections and guideline updates",
        freelancer: "Leaves project before store approval or charges extra fees"
      },
      {
        dimension: "Scalability & Architecture",
        arventa: "Built for 100k+ concurrent active users with serverless autoscaling",
        traditional: "Rigid monolithic architectures requiring costly server upgrades",
        freelancer: "Single-server setups that crash under initial marketing spikes"
      },
      {
        dimension: "Post-Launch Engineering Support",
        arventa: "Dedicated engineering SLA with proactive security monitoring",
        traditional: "Expensive retainer tiers with sluggish ticket turnaround times",
        freelancer: "Unreachable when urgent production bugs occur"
      }
    ],
    caseStudy: {
      client: "QikPay & Unified Merchant Systems",
      industry: "FinTech & Retail POS Solutions",
      challenge: "Legacy web dashboard was unusable on mobile devices, preventing 40,000+ retail merchants from tracking real-time transactions and settling daily payments efficiently.",
      strategy: "Arventa Ventures engineered a cross-platform React Native mobile application with real-time biometric login, instant payment settlement notifications, and automated reconciliation.",
      image: "/images/service-app-development.webp",
      metrics: [
        { label: "Active Mobile Adoption", value: "94.6%", change: "Within 30 Days" },
        { label: "Daily Transaction Volume", value: "₹4.8 Cr+", change: "Processed Seamlessly" },
        { label: "Crash-Free Sessions", value: "99.98%", change: "Over 500k Sessions" }
      ],
      quote: "The software engineering standard at Arventa Ventures is exceptional. They delivered our iOS and Android apps ahead of schedule, secured seamless App Store approvals, and gave our merchants a 5-star experience.",
      clientName: "Ananya Sengupta",
      clientRole: "VP of Product, QikPay Technologies"
    },
    deepDiveSections: [
      {
        title: "Engineering Mobile Software for Extreme Retention & Velocity",
        body: [
          "Building successful mobile applications requires far more than converting a website into a mobile view. Modern users demand instant feedback, offline capability, seamless biometric authentication, and tactile haptic micro-interactions.",
          "Our engineering philosophy focuses heavily on the 'Zero-Friction' principle. By utilizing React Native with Hermes engine and TurboModules, we achieve native compilation that matches Swift and Kotlin in execution speed while cutting ongoing development and maintenance costs in half.",
          "Every network call is cached intelligently using TanStack Query and SQLite, ensuring that users can browse products, review orders, and interact with the application even in low-bandwidth or offline environments."
        ],
        takeaways: [
          "Hermes JavaScript engine delivers sub-second mobile cold boot times.",
          "Offline-first synchronization ensures seamless user experiences regardless of network quality.",
          "Cross-platform parity guarantees identical, flawless features on both iPhone and Android devices."
        ]
      },
      {
        title: "Cloud Infrastructure That Scales From Day 1 to Millions of Users",
        body: [
          "A beautiful frontend is powerless without an unshakeable cloud foundation. We architect backend systems utilizing Dockerized Node.js microservices hosted on AWS and Google Cloud with automated horizontal pod autoscaling.",
          "By implementing Redis in-memory caching and connection pooling on PostgreSQL databases, our applications handle tens of thousands of concurrent read/write operations with under 40ms API response latencies.",
          "Security is paramount: all network communications utilize TLS 1.3 encryption, database records are protected with AES-256 at rest, and authentication is governed by hardened OAuth2 and JSON Web Token (JWT) standards."
        ],
        takeaways: [
          "Horizontal autoscaling automatically absorbs sudden viral user surges without manual intervention.",
          "Database query optimization and Redis caching deliver lightning-fast API responses.",
          "Bank-grade encryption safeguards customer personal data and payment credentials."
        ]
      }
    ],
    faqs: [
      {
        question: "Should we build cross-platform with React Native or separate native iOS and Android apps?",
        answer: "For 95% of consumer and enterprise applications, cross-platform engineering with React Native is the superior strategic choice. It allows you to build a single, unified codebase that compiles directly to native iOS and Android components. This cuts development time and costs by 40-50% while delivering identical 60fps performance."
      },
      {
        question: "How do you handle the Apple App Store and Google Play Store submission process?",
        answer: "We manage the entire submission lifecycle end-to-end. We configure Apple Developer and Google Play Console accounts, generate all required security certificates and provisioning profiles, write compliance disclosures, prepare localized screenshot mockups, and guarantee approval."
      },
      {
        question: "Can our mobile application work when users are offline or have weak connectivity?",
        answer: "Yes. We engineer our applications with an offline-first architecture. Critical user data and preferences are cached locally using encrypted device storage, and changes automatically synchronize with the cloud once an internet connection is re-established."
      },
      {
        question: "How do you ensure user data security and regulatory compliance?",
        answer: "We implement industry-standard security protocols including OAuth2 authentication, end-to-end TLS 1.3 data in transit, AES-256 encryption at rest, secure biometric authentication (FaceID / Fingerprint), and compliance with global data privacy frameworks (DPDP India, GDPR, SOC-2)."
      },
      {
        question: "What is your typical development timeline for a custom software or mobile app MVP?",
        answer: "Our structured agile development cycle typically delivers a feature-complete, production-ready Minimum Viable Product (MVP) within 6 to 8 weeks. We divide this into 2-week sprint cycles with live staging builds demonstrated to your team every fortnight."
      },
      {
        question: "Do you offer post-launch code maintenance, feature updates, and OS compatibility patches?",
        answer: "Yes. Mobile operating systems (iOS and Android) release major updates annually. We provide dedicated Service Level Agreements (SLAs) covering OS compatibility updates, third-party API deprecation fixes, server maintenance, and ongoing feature enhancements."
      }
    ]
  },

  // 3. META ADS & PERFORMANCE MARKETING
  "meta-ads": {
    id: "meta-ads",
    title: "Meta Ads & Performance Media Buying",
    subtitle: "Scientific, Algorithmic Facebook & Instagram Advertising Engineered to Scale Customer Acquisition at Maximum ROAS.",
    heroBadge: "Core Performance Marketing",
    category: "Paid Acquisition",
    image: "/images/service-meta-ads.webp",
    stats: [
      { value: "5.8x", label: "Average Tracked ROAS", sub: "Across managed e-commerce accounts" },
      { value: "₹15 Cr+", label: "Verified Revenue Generated", sub: "Through proprietary Advantage+ funnels" },
      { value: "-34%", label: "Average Cost Per Acquisition", sub: "Achieved via Dynamic Creative Testing (DCT)" },
      { value: "100%", label: "First-Party CAPI Tracking", sub: "Defeating iOS signal loss with full event match" }
    ],
    overview: "Running profitable Meta Ads in 2026 is no longer about tinkering with interest-targeting hacks or boosting posts. Meta's Andromeda AI bidding algorithm has evolved: creative is now your primary targeting lever, and first-party server-side data is your competitive moat. At Arventa Ventures, our senior media buyers and in-house creative lab manage millions in advertising spend with mathematical precision. We combine Advantage+ Shopping Campaigns (ASC), Dynamic Creative Testing (DCT), and Conversion API (CAPI) infrastructure to deliver scalable, predictable customer acquisition with compounding return on ad spend (ROAS).",
    problemSolutions: [
      {
        problem: "Ad accounts trapped in brutal boom-and-bust cycles where ROAS collapses the moment you try to scale ad spend.",
        solution: "Horizontal scaling framework utilizing Advantage+ campaigns with strict cost-cap bidding and creative fatigue mitigation.",
        stat: "Scalable 5x ROAS"
      },
      {
        problem: "Devastating post-iOS14 signal loss leading to duplicate purchases, untracked conversions, and misallocated ad budget.",
        solution: "Direct server-to-server Meta Conversions API (CAPI) with full customer event matching and first-party attribution modeling.",
        stat: "98% Event Match"
      },
      {
        problem: "Generic ad creatives that blend into social feeds and suffer from dismal 0.8% click-through rates.",
        solution: "In-house studio producing cinema-grade UGC video ads, psychological visual hooks, and persuasive direct-response angles.",
        stat: "3.2x Click-Through Rate"
      }
    ],
    capabilities: [
      {
        title: "Meta Advantage+ Shopping Campaigns (ASC)",
        desc: "Deploying AI-driven shopping funnels that leverage Meta's deep neural networks to identify high-intent buyers with optimal CPA.",
        iconName: "Target",
        deliverables: ["Advantage+ Campaign Setup", "Catalog Sales Optimization", "AI Audience Discovery", "Broad Match Scaling"]
      },
      {
        title: "Dynamic Creative Testing (DCT) Engine",
        desc: "A scientific creative testing sandbox that tests 3 hooks, 2 visual bodies, and 2 headline angles to isolate winning assets before scaling.",
        iconName: "Sparkles",
        deliverables: ["Weekly Hook Variations", "Thumb-Stopper Testing", "Visual Asset A/B Matrices", "Fatigue Resistance Sprints"]
      },
      {
        title: "Server-Side Conversions API (CAPI) Setup",
        desc: "Full server-to-server tracking integration that bypasses ad-blockers and browser privacy restrictions with 95%+ event match quality.",
        iconName: "Cpu",
        deliverables: ["Cloudflare / AWS CAPI Gateway", "Advanced Customer Matching", "Deduplication Infrastructure", "Offline Event Syncing"]
      },
      {
        title: "High-Converting UGC Video Ad Production",
        desc: "Our in-house creative studio scripts, films, and edits high-retention video ads tailored for Reels, Stories, and Feeds.",
        iconName: "Video",
        deliverables: ["Cinema UGC Production", "3-Second Hook Engineering", "Problem/Solution Narratives", "Native Social Pacing"]
      },
      {
        title: "Full-Funnel Retargeting & LTV Expansion",
        desc: "Custom audience segmentation that re-engages abandoned carts, nurtures warm leads, and drives recurring repeat orders.",
        iconName: "Repeat",
        deliverables: ["Dynamic Catalog Retargeting", "VIP Customer Lookalikes", "Churn Prevention Funnels", "High-AOV Bundle Campaigns"]
      },
      {
        title: "Algorithmic Bid Caps & Budget Scaling",
        desc: "Protecting your profit margins through calculated bid-cap rules, target CPA thresholds, and automated scaling triggers.",
        iconName: "Sliders",
        deliverables: ["Cost-Cap & Bid-Cap Bidding", "Automated Rule Architecture", "Scaling Budget Formulas", "Zero-Budget-Waste Guardrails"]
      },
      {
        title: "Multi-Touch Attribution & Looker Dashboards",
        desc: "Real-time, transparent data analytics dashboards that clearly report blended ROAS, new customer acquisition cost (nCAC), and true net profit.",
        iconName: "BarChart3",
        deliverables: ["24/7 Live Looker Studio Dashboards", "Triple Whale / Northbeam Sync", "Blended ROAS Calculations", "Daily Executive Reporting"]
      },
      {
        title: "Account Health & Ban Prevention Shield",
        desc: "Hardening your Meta Business Manager assets, verifying domains, and ensuring 100% compliance with Meta advertising policies.",
        iconName: "ShieldCheck",
        deliverables: ["Business Manager Verification", "Domain Whitelisting & Aggregated Events", "Ad Policy Compliance Review", "Emergency Asset Backups"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Deep Account Audit & Signal Diagnostics",
        timeline: "Days 1 - 3",
        desc: "We perform a forensic audit of your historical ad spend, audience overlap, creative fatigue, and tracking match quality to eliminate immediate waste.",
        deliverables: "Comprehensive Meta Ad Audit Report & Growth Opportunities Map"
      },
      {
        step: "02",
        title: "Server-Side Tracking & Infrastructure Hardening",
        timeline: "Days 4 - 6",
        desc: "We configure server-side Meta Conversions API (CAPI), verify aggregated event measurement, and build custom audiences with high match rates.",
        deliverables: "90+ Event Match Quality Score & First-Party Data Shield"
      },
      {
        step: "03",
        title: "Creative Synthesis & Hook Testing Sprint",
        timeline: "Days 7 - 12",
        desc: "Our creative studio produces 12+ new bespoke ad variations testing multiple psychological hooks, angles, formats (UGC, static, motion), and copy styles.",
        deliverables: "Dynamic Creative Testing (DCT) Sandbox Ad Sets"
      },
      {
        step: "04",
        title: "Validation & Algorithm Training",
        timeline: "Days 13 - 21",
        desc: "We launch controlled ad sets to train Meta's machine learning models, identify winning creative hooks, and establish baseline profitable CAC.",
        deliverables: "Statistical Winning Creative Identification & Baseline ROAS Map"
      },
      {
        step: "05",
        title: "Aggressive Horizontal Scaling & Profit Maximization",
        timeline: "Day 22 Onward",
        desc: "We graduate winning creative assets into Advantage+ scaling campaigns, scaling spend horizontally while enforcing cost caps to protect margins.",
        deliverables: "Compounding Monthly Revenue, Weekly Creative Sprints & 24/7 Dashboards"
      }
    ],
    techStack: [
      { name: "Meta Ads Manager", category: "Ad Platform", role: "Campaign Delivery & Bidding", badge: "Primary" },
      { name: "Meta CAPI", category: "Tracking", role: "Server-Side Event Transmission", badge: "Data" },
      { name: "Triple Whale", category: "Attribution", role: "Multi-Touch E-Commerce Analytics", badge: "Attribution" },
      { name: "Looker Studio", category: "Reporting", role: "Real-Time Executive Dashboards", badge: "Analytics" },
      { name: "Google Analytics 4", category: "Analytics", role: "Cross-Channel Verification", badge: "Data" },
      { name: "Shopify Plus", category: "E-Commerce", role: "Product Catalog & Pixel Sync", badge: "Platform" },
      { name: "Adobe Premiere", category: "Video Production", role: "High-Retention Reel Editing", badge: "Creative" },
      { name: "Klaviyo", category: "Retention", role: "Post-Click Email Flow Sync", badge: "LTV" }
    ],
    comparison: [
      {
        dimension: "Targeting Philosophy",
        arventa: "Creative-led broad targeting powered by Advantage+ machine learning",
        traditional: "Outdated micro-interest stacking and restrictive exclusions",
        freelancer: "Basic boosting and generic demographic targeting"
      },
      {
        dimension: "Data & Tracking Precision",
        arventa: "First-party server-side CAPI with 95%+ event match quality",
        traditional: "Basic browser pixel vulnerable to 40%+ ad-block signal loss",
        freelancer: "Relies on default Shopify plugin with zero deduplication"
      },
      {
        dimension: "Creative Asset Velocity",
        arventa: "Dedicated in-house studio producing 10+ fresh video/UGC ads weekly",
        traditional: "Recycles 2-3 static images until severe ad fatigue occurs",
        freelancer: "Asks client to provide all creatives and copy"
      },
      {
        dimension: "Scaling Methodology",
        arventa: "Horizontal scaling with automated cost-cap rules protecting profit",
        traditional: "Vertical budget doubling that destroys account ROAS",
        freelancer: "Hesitant to scale past small experimental budgets"
      },
      {
        dimension: "Reporting Transparency",
        arventa: "Live 24/7 Looker Studio dashboard showing real net profit and CAC",
        traditional: "Delayed end-of-month PDF reports filled with vanity impressions",
        freelancer: "Screenshots of Ads Manager without revenue attribution"
      }
    ],
    caseStudy: {
      client: "Nova Luxe Apparel & Modern Streetwear",
      industry: "D2C Fashion & E-Commerce",
      challenge: "Ad account was stuck at 1.8x ROAS with rising acquisition costs and severe creative fatigue after trying to scale past ₹3 Lakhs monthly spend.",
      strategy: "Arventa Ventures rebuilt the tracking architecture with server-side CAPI, established a weekly UGC creative testing engine, and restructured campaigns into Advantage+ Broad Scaling with cost-cap safety rails.",
      image: "/images/service-meta-ads.webp",
      metrics: [
        { label: "Tracked Meta ROAS", value: "5.42x", change: "From 1.8x" },
        { label: "Monthly Ad Spend Scaled", value: "₹18.5 Lakhs", change: "516% Scaling" },
        { label: "Cost Per Acquisition", value: "₹420", change: "-42% Reduction" }
      ],
      quote: "Before working with Jaydeb Jana and Arventa Ventures, our ad spend was a gamble. They introduced a scientific creative testing framework that took our brand from struggling at 1.8x ROAS to generating over ₹1 Crore in sales at 5.4x ROAS.",
      clientName: "Kabir Malhotra",
      clientRole: "Founder & CEO, Nova Luxe Apparel"
    },
    deepDiveSections: [
      {
        title: "The Death of Interest Targeting: Why Creative is the New Audience Lever",
        body: [
          "For years, media buyers relied on hyper-specific interest clusters (e.g. 'Luxury Goods + Online Shopping + Brand X'). In 2026, Meta's Andromeda recommendation engine has rendered this approach obsolete.",
          "When you force Meta into tiny audience silos, you artificially inflate CPMs and prevent machine learning models from finding your highest-converting buyers across the broader platform. Modern media buying requires Broad Targeting where your creative hook acts as the demographic filter.",
          "If your video ad begins with a visual hook addressing 'E-commerce founders losing money on Facebook Ads', Meta's vision AI and user engagement telemetry instantly routes that ad to founders. The ad qualifies the viewer, lowering CPMs and maximizing delivery efficiency."
        ],
        takeaways: [
          "Broad targeting combined with Advantage+ Shopping yields significantly lower CPMs.",
          "Visual hooks and opening 3-second audio determine who the algorithm serves your ad to.",
          "Iterating creative angles produces exponentially higher returns than tweaking audience interests."
        ]
      },
      {
        title: "Overcoming Signal Loss With Server-Side Conversions API (CAPI)",
        body: [
          "Browser-based tracking pixels lose between 30% and 45% of user purchase signals due to iOS privacy controls, third-party cookie deprecation, and browser ad-blockers. When Meta cannot track who bought your product, its machine learning algorithm is blinded.",
          "Our CAPI infrastructure establishes a direct, encrypted server-to-server connection between your website backend and Meta's servers. Every 'ViewContent', 'AddToCart', and 'Purchase' event is transmitted with hashed first-party customer data (email, phone, IP, user-agent).",
          "This delivers a 95%+ Event Match Quality score, allowing Meta to accurately credit sales, re-target qualified customers, and optimize bids for users most likely to generate high-value transactions."
        ],
        takeaways: [
          "CAPI bypasses browser privacy blockers and ensures 100% conversion attribution.",
          "Higher event match quality directly lowers Cost Per Lead (CPL) and Customer Acquisition Cost (CAC).",
          "Deduplication ensures zero double-counting between browser pixels and server events."
        ]
      }
    ],
    faqs: [
      {
        question: "What minimum monthly ad budget is required to work with Arventa Ventures?",
        answer: "We typically work with ambitious brands investing a minimum of ₹50,000 to ₹1 Lakh monthly ad spend up to enterprise clients managing ₹20 Lakhs to ₹50 Lakhs+ monthly media budgets across India, the US, UK, and the Middle East."
      },
      {
        question: "Is your agency management fee separate from our ad spend?",
        answer: "Yes, 100%. To maintain complete financial transparency, your ad spend is billed directly by Meta (Facebook/Instagram) to your business credit card. Arventa Ventures charges a flat monthly management retainer or performance fee covering ad strategy, creative production, and daily optimization."
      },
      {
        question: "Do you produce all the video ads and graphic creatives in-house?",
        answer: "Yes! Our in-house creative studio handles the entire production pipeline: concept ideation, scriptwriting, professional filming, viral UGC creator partnerships, motion graphics editing, and thumbnail design tailored specifically for high conversion."
      },
      {
        question: "How quickly can we expect to see profitable results after onboarding?",
        answer: "Our comprehensive audit and tracking setup takes 3 to 5 business days. Initial creative testing campaigns launch in Week 1. Typically, clients observe early algorithmic stabilization and profitable lead flow within the first 14 days, with aggressive budget scaling occurring between days 30 to 60."
      },
      {
        question: "How do you protect our ad account from getting banned by Meta?",
        answer: "We strictly adhere to Meta Advertising Policies and Terms of Service. We verify your Business Manager, configure two-factor authentication, set up secondary backup admin accounts, and pre-screen all ad copy and landing page claims to prevent policy violations."
      },
      {
        question: "How frequently do we receive campaign updates and performance reports?",
        answer: "You get direct access to a real-time, 24/7 automated Looker Studio dashboard that updates every 15 minutes. Additionally, you have a private WhatsApp VIP channel with Jaydeb Jana and your dedicated media buyer, plus weekly strategic review calls."
      }
    ]
  },

  // 4. SEO & ORGANIC GROWTH
  "seo-services": {
    id: "seo-services",
    title: "Enterprise SEO & Algorithmic Search Dominance",
    subtitle: "Dominating High-Intent Google Search Rankings, Local 3-Packs, and AI Overview Snippets to Drive Compounding Organic Revenue.",
    heroBadge: "Organic Growth Division",
    category: "Organic & Search",
    image: "/images/service-seo-growth.webp",
    stats: [
      { value: "Top #1", label: "Rankings on High-Intent Keywords", sub: "Commercial search queries that convert" },
      { value: "+340%", label: "Average Organic Traffic Lift", sub: "Within 6 months of technical implementation" },
      { value: "0 Ad Spend", label: "Zero Cost Per Click", sub: "Permanent organic asset that compounds monthly" },
      { value: "100%", label: "White-Hat Compliance", sub: "Guaranteed immunity from Google core algorithm penalties" }
    ],
    overview: "In 2026, search engine optimization is no longer about stuffing keywords into blog posts or purchasing spammy backlinks. Google's Search Generative Experience (SGE), AI Overviews, and Helpful Content algorithms rigorously penalize low-effort fluff. To dominate search results, your brand requires an airtight technical architecture, authoritative topical clusters, flawless Core Web Vitals, and genuine digital PR. At Arventa Ventures, our technical search architects engineer organic acquisition engines that capture buyers at the exact moment they are looking to purchase your products or services.",
    problemSolutions: [
      {
        problem: "Trapped in the paid ads treadmill where business revenue vanishes the second ad budgets are paused.",
        solution: "Building sustainable, compounding organic search assets that generate high-ticket leads and sales 24/7 with zero click costs.",
        stat: "Zero Click Cost"
      },
      {
        problem: "Websites plagued by technical crawl errors, slow INP/LCP scores, and canonicalization issues that suppress Google rankings.",
        solution: "Comprehensive technical SEO overhaul with clean schema markup, sub-second page speeds, and pristine XML architecture.",
        stat: "99+ Health Score"
      },
      {
        problem: "Local businesses invisible on Google Maps 3-Pack, surrendering local customer calls to nearby competitors.",
        solution: "Aggressive Google Business Profile (GBP) optimization, local citation dominance, geo-tagged signals, and review velocity.",
        stat: "Top 3 Maps Rank"
      }
    ],
    capabilities: [
      {
        title: "Technical SEO & Core Web Vitals Overhaul",
        desc: "Resolving complex crawl bottlenecks, JavaScript rendering issues, redirect chains, and indexing barriers to achieve a perfect 99+ site health score.",
        iconName: "Cpu",
        deliverables: ["Full Screaming Frog Crawl Audit", "Core Web Vitals Optimization", "Robots.txt & Sitemap Hygiene", "Canonical & Hreflang Fixes"]
      },
      {
        title: "Topical Authority & Content Hub Architecture",
        desc: "Mapping comprehensive pillar pages and interlinked cluster articles that establish undeniable domain expertise in Google's semantic index.",
        iconName: "FileText",
        deliverables: ["Topical Keyword Mapping", "Semantic Entity Strategy", "Search Intent Categorization", "Comprehensive Content Calendars"]
      },
      {
        title: "Google Maps 3-Pack & Local SEO Domination",
        desc: "Engineered to secure top-tier visibility in local Google Maps searches for regional businesses, clinics, practices, and retail showrooms.",
        iconName: "MapPin",
        deliverables: ["GBP Audit & Profile Optimization", "Local Citation Building", "Geo-Tagged Content Architecture", "Automated Review Generation"]
      },
      {
        title: "Schema.org & Structured Data Engineering",
        desc: "Implementing sophisticated JSON-LD microdata (FAQPage, Service, Product, Organization, BreadcrumbList) for prominent Google rich snippets.",
        iconName: "Code2",
        deliverables: ["Rich Snippets Implementation", "Knowledge Graph Connections", "Product & Pricing Schema", "Review Star Ratings Integration"]
      },
      {
        title: "High-Authority Digital PR & Editorial Backlinks",
        desc: "Securing authoritative, white-hat editorial backlinks from tier-1 industry publications, business portals, and accredited media outlets.",
        iconName: "Award",
        deliverables: ["Tier-1 Media Outreach", "Unlinked Brand Mention Reclaim", "Industry Resource Link Building", "Zero PBN / Black-Hat Immunity"]
      },
      {
        title: "E-Commerce SEO & Category Page Optimization",
        desc: "Optimizing massive product catalogs, faceted navigation filters, and collection pages for high-intent transactional search queries.",
        iconName: "ShoppingBag",
        deliverables: ["Faceted Navigation Index Control", "Product Schema with Live Stock", "Category Content Optimization", "Internal PageRank Sculpting"]
      },
      {
        title: "AI Search & Google SGE Optimization",
        desc: "Structuring content specifically to be cited, referenced, and highlighted inside Google's AI Overview answer boxes.",
        iconName: "Sparkles",
        deliverables: ["Direct-Answer Formatting", "Information Density Optimization", "Entity-First Content Structures", "Perplexity & ChatGPT Search Prep"]
      },
      {
        title: "Competitor Reverse-Engineering & Gap Analysis",
        desc: "Dissecting your top-ranking competitors' backlink profiles, keyword footprints, and content strategies to systematically usurp their positions.",
        iconName: "TrendingUp",
        deliverables: ["Competitor Keyword Gap Analysis", "Backlink Profile Intersect", "Traffic Value Benchmarking", "Quarterly Organic Growth Roadmap"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Deep Technical & Algorithmic Audit",
        timeline: "Week 1",
        desc: "We perform an exhaustive audit of your entire web architecture using enterprise crawlers, identifying indexing errors, duplicate content, and speed bottlenecks.",
        deliverables: "Comprehensive 50-Point Technical SEO Audit & Priority Fix Roadmap"
      },
      {
        step: "02",
        title: "Keyword Intent & Competitor Blueprinting",
        timeline: "Week 2",
        desc: "We analyze thousands of search queries to isolate high-intent commercial keywords with verified buying intent rather than useless vanity search volume.",
        deliverables: "Commercial Intent Keyword Matrix & Competitor Gap Analysis"
      },
      {
        step: "03",
        title: "On-Page Optimization & Schema Injection",
        timeline: "Weeks 3 - 4",
        desc: "We overhaul metadata, optimize internal linking architecture, inject advanced JSON-LD structured data, and rewrite core service copy for peak entity relevance.",
        deliverables: "Fully Optimized On-Page Architecture & Google Rich Snippets Verification"
      },
      {
        step: "04",
        title: "Topical Authority Cluster Content Execution",
        timeline: "Month 2 Onward",
        desc: "Our search content team authors deeply researched, high-authority articles and service playbooks that systematically capture all relevant search volume.",
        deliverables: "Weekly Long-Form Authority Articles & Interlinked Pillar Hubs"
      },
      {
        step: "05",
        title: "Digital PR, Authority Link Acquisition & Rank Tracking",
        timeline: "Ongoing",
        desc: "We execute editorial outreach campaigns to build authoritative backlinks while tracking daily keyword rankings and optimizing for AI Overview citations.",
        deliverables: "High-DA Editorial Backlinks & Real-Time Search Console Analytics"
      }
    ],
    techStack: [
      { name: "Ahrefs Enterprise", category: "SEO Tool", role: "Backlink Analysis & Keyword Footprints", badge: "Core Intelligence" },
      { name: "SEMrush", category: "SEO Tool", role: "Search Volume & Competitor Tracking", badge: "Research" },
      { name: "Screaming Frog", category: "Crawler", role: "Deep Technical Spider Audits", badge: "Technical" },
      { name: "Google Search Console", category: "Analytics", role: "First-Party Indexing & Query Data", badge: "Google" },
      { name: "PageSpeed Insights", category: "Speed", role: "Core Web Vitals Telemetry", badge: "Performance" },
      { name: "Surfer SEO", category: "Content", role: "NLP & Entity Optimization", badge: "On-Page" },
      { name: "Schema Pro", category: "Markup", role: "Structured Data JSON-LD", badge: "Rich Snippets" },
      { name: "Looker Studio", category: "Reporting", role: "Organic Revenue Attribution", badge: "Analytics" }
    ],
    comparison: [
      {
        dimension: "Technical Depth",
        arventa: "Deep code-level engineering (Core Web Vitals, SSR, JSON-LD microdata)",
        traditional: "Basic WordPress plugin checkmarks with zero code improvements",
        freelancer: "Surface-level meta title and description edits only"
      },
      {
        dimension: "Keyword Strategy",
        arventa: "Laser-focused on high-intent commercial queries that generate revenue",
        traditional: "Focuses on high-volume informational keywords that never convert",
        freelancer: "Guesses keywords without analyzing real search intent"
      },
      {
        dimension: "Backlink Quality",
        arventa: "100% white-hat editorial outreach on authoritative media & industry sites",
        traditional: "Low-quality generic directory submissions and spammy blogs",
        freelancer: "Risky PBN (Private Blog Network) links that cause Google penalties"
      },
      {
        dimension: "AI Search & SGE Readiness",
        arventa: "Engineered specifically to capture citations in Google AI Overviews",
        traditional: "Unaware of AI overview mechanics and semantic entity models",
        freelancer: "Outdated 2018 keyword-density tactics"
      },
      {
        dimension: "Business Impact Tracking",
        arventa: "Directly tracks organic revenue, phone calls, form leads, and ROI",
        traditional: "Reports vanity impressions without attributing real financial impact",
        freelancer: "No conversion tracking setup"
      }
    ],
    caseStudy: {
      client: "HealthFirst Superspecialty Clinics",
      industry: "Healthcare & Regional Medical Centres",
      challenge: "The hospital chain was spending ₹4 Lakhs monthly on Google Search Ads with zero organic search visibility, ranking on page 4 for critical healthcare searches.",
      strategy: "Arventa Ventures executed a comprehensive technical SEO overhaul, optimized Google Business Profiles across all 5 branches, and built topical authority hubs around specialized treatments.",
      image: "/images/service-seo-growth.webp",
      metrics: [
        { label: "Google Maps 3-Pack Rank", value: "#1 Rank", change: "For 42 Local Terms" },
        { label: "Organic Inbound Patient Calls", value: "3,850+ / mo", change: "+380% Increase" },
        { label: "Monthly Ad Spend Saved", value: "₹4.0 Lakhs", change: "Eliminated Waste" }
      ],
      quote: "Arventa Ventures transformed our entire organic acquisition pipeline. We now dominate Google search and Maps across all our regional clinics, allowing us to slash our Google Ads budget while seeing patient appointments hit all-time records.",
      clientName: "Dr. Sandeep Banerjee",
      clientRole: "Director of Operations, HealthFirst"
    },
    deepDiveSections: [
      {
        title: "Navigating Google's Core Updates: The Helpful Content Standard",
        body: [
          "Recent Google core updates have decimated websites that rely on shallow AI-generated content and manipulative link schemes. Google's algorithm now evaluates Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).",
          "At Arventa Ventures, our search architecture is designed from the ground up to satisfy these quality rater guidelines. Every guide and service page features verified author credentials, clear editorial citations, comprehensive coverage of user queries, and zero keyword stuffing.",
          "By building authoritative topical clusters where every subtopic thoroughly supports the primary pillar, Google's semantic algorithm recognizes your domain as the definitive leader in your market niche."
        ],
        takeaways: [
          "E-E-A-T credentials and author verification protect your rankings during core updates.",
          "Topical completeness outperforms isolated one-off blog posts.",
          "Information gain and unique expert insights are rewarded with top-tier search visibility."
        ]
      },
      {
        title: "Dominating the Local Google Maps 3-Pack in 2026",
        body: [
          "For service businesses, healthcare providers, and local retailers, the Google Maps 3-Pack captures over 65% of all high-intent search clicks. If you are not in the top 3, your competitors are capturing all local phone calls.",
          "Ranking in the Maps pack requires a synchronized trifecta: a perfectly optimized Google Business Profile, consistent Name-Address-Phone (NAP) citations across tier-1 directories, and localized on-page landing pages featuring localized geographic schema markup.",
          "We implement automated review generation workflows that consistently elevate your review velocity and average star rating, sending powerful algorithmic trust signals that cement your #1 position on local maps."
        ],
        takeaways: [
          "Google Maps 3-Pack visibility captures the highest-converting local buying traffic.",
          "Review velocity and genuine customer photo uploads dramatically boost local rank.",
          "Geo-targeted landing pages with localized schema connect map pins to website authority."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does it typically take to see significant organic ranking improvements?",
        answer: "Technical fixes (crawl errors, Core Web Vitals, Schema markup) often produce measurable ranking improvements within 3 to 6 weeks. Significant competitive keyword moves and compounding traffic growth typically materialize between months 3 to 6 as Google crawls and indexes your topical authority clusters."
      },
      {
        question: "Do you use any black-hat link building tactics or private blog networks (PBNs)?",
        answer: "Never. We practice 100% white-hat, sustainable search engine optimization. We build backlinks exclusively through genuine digital PR, authoritative editorial outreach, unlinked brand mention reclaim, and high-value industry research assets. Your domain will always remain safe from algorithmic penalties."
      },
      {
        question: "How is SEO different from Google Ads (PPC)? Which one should we choose?",
        answer: "Google Ads gives you immediate paid visibility, but the moment you stop spending, your traffic drops to zero. SEO is an investment in a permanent digital asset: once you achieve top rankings, you capture high-intent buyers around the clock with zero cost per click. The most profitable strategy combines both: using Google Ads for immediate cash flow while building long-term SEO dominance."
      },
      {
        question: "What is Google's Search Generative Experience (SGE) and how do you optimize for it?",
        answer: "Google's SGE and AI Overviews summarize answers directly at the top of search results. We optimize for SGE by structuring content with direct-answer definition blocks, high information density, semantic bullet points, and entity-first schema, ensuring your brand is cited as the primary source in Google's AI summaries."
      },
      {
        question: "Do you optimize our website for local searches and Google Maps?",
        answer: "Yes! Local SEO and Google Business Profile (GBP) optimization is a cornerstone of our service. We optimize your map pins, build local citations, implement geographic schema markup, and establish review generation funnels to dominate the Google Maps 3-Pack in your target cities."
      },
      {
        question: "How do you measure and report organic search performance?",
        answer: "We provide 24/7 access to live Looker Studio dashboards integrated directly with Google Search Console, Google Analytics 4, and enterprise rank trackers. You can track daily keyword positions, organic click growth, impression velocity, and direct revenue/lead conversions."
      }
    ]
  },

  // 5. VIDEO & CREATOR MARKETING
  "video-marketing": {
    id: "video-marketing",
    title: "Cinema Video Production & Creator Marketing",
    subtitle: "High-Retention Short-Form Reels, Cinema Commercials, and Viral UGC Ads Produced In-House to Stop the Scroll and Command Market Attention.",
    heroBadge: "Creative Media Division",
    category: "Creative & Media",
    image: "/images/service-video-creator.webp",
    stats: [
      { value: "50M+", label: "Organic & Paid Video Views", sub: "Driven across YouTube, Reels & TikTok" },
      { value: "+320%", label: "Average Viewer Retention Lift", sub: "Hook-driven 3-second pacing" },
      { value: "4K / 8K", label: "Cinema Studio Standard", sub: "Cinema camera rigs & calibrated audio" },
      { value: "48-Hour", label: "Creative Turnaround", sub: "Rapid testing for performance ad sets" }
    ],
    overview: "In 2026, text and static imagery alone cannot win the battle for consumer attention. The modern social feed moves at breakneck speed: if your brand fails to arrest attention in the first 3 seconds, your budget is evaporated. At Arventa Studios, our dedicated creative production facility produces high-velocity, cinema-grade video content engineered specifically for commercial conversion. From viral User-Generated Content (UGC) for Meta and TikTok ads to high-end cinematic brand commercials and founder documentary series, we craft visual assets that evoke emotion, establish authority, and drive revenue.",
    problemSolutions: [
      {
        problem: "Low-effort, generic video ads that viewers skip immediately, resulting in 90% audience drop-off in under 2 seconds.",
        solution: "Engineered 3-second psychological thumb-stoppers with dynamic pacing, motion text overlays, and calibrated sound design.",
        stat: "85% Hook Retention"
      },
      {
        problem: "Exorbitant commercial production costs ($20k+) from traditional agencies that take 3 months and yield zero ad variants.",
        solution: "Agile, in-house studio production delivering 10+ high-converting video variations and hooks in days, not months.",
        stat: "5x Content Velocity"
      },
      {
        problem: "Disconnect between artistic filmmakers who care about pretty visuals and media buyers who need conversions.",
        solution: "Direct-response performance creative: every camera angle, script line, and visual cut is engineered to maximize conversion rate.",
        stat: "4.8x Ad ROAS"
      }
    ],
    capabilities: [
      {
        title: "High-Converting UGC Video Ad Production",
        desc: "Authentic, relatable User-Generated Content (UGC) filmed with vetted creators and influencers that builds instant trust and scales paid ads.",
        iconName: "Video",
        deliverables: ["Creator Casting & Matchmaking", "Direct-Response Scriptwriting", "Multi-Hook Variations", "Native Aspect Ratios (9:16)"]
      },
      {
        title: "Cinema-Grade Commercials & Brand Films",
        desc: "Cinema 4K and 8K commercial productions featuring professional lighting, sound design, and color grading for prestigious brand positioning.",
        iconName: "Film",
        deliverables: ["Professional Studio Filming", "RED / Cinema Camera Rigs", "Hollywood-Grade Color Grading", "Licensed Cinematic Soundtracks"]
      },
      {
        title: "Viral Short-Form Reels, Shorts & TikToks",
        desc: "Fast-paced, educational, and entertaining short-form content designed to trigger social algorithm recommendations and build organic followings.",
        iconName: "Flame",
        deliverables: ["Trend & Sound Analysis", "Dynamic Subtitle Animations", "B-Roll & Sound FX Library", "Optimized Hashtags & Descriptions"]
      },
      {
        title: "Founder Storytelling & Executive Documentaries",
        desc: "High-impact interview series and documentary spotlights featuring company founders to humanize brands and command market trust.",
        iconName: "UserCheck",
        deliverables: ["Executive 1-on-1 Filming", "Multi-Camera Interview Setup", "B-Roll Cutaway Scenes", "High-Authority Soundbites"]
      },
      {
        title: "3D Motion Graphics & Product Visualizations",
        desc: "Hyper-realistic 3D product renders, dynamic exploded views, and sleek UI animations that showcase complex features effortlessly.",
        iconName: "Layers",
        deliverables: ["Photorealistic 3D Modeling", "Exploded Technical Views", "Seamless Loop Animations", "High-Resolution Render Passes"]
      },
      {
        title: "YouTube Channel Strategy & Long-Form Video",
        desc: "End-to-end management of corporate YouTube channels: keyword-optimized video production, custom CTR thumbnails, and audience retention editing.",
        iconName: "Youtube",
        deliverables: ["High-CTR Custom Thumbnails", "Video SEO & Chapter Markers", "Audience Retention Editing", "End Screens & Cards Setup"]
      },
      {
        title: "Product Demos & Interactive Walkthroughs",
        desc: "Crisp, compelling software screen recordings and hardware walkthroughs that clarify value propositions and accelerate sales cycles.",
        iconName: "PlayCircle",
        deliverables: ["Studio Product Lighting", "High-Res Screen Capture", "Animated UI Callout Highlights", "Customer Journey Voiceover"]
      },
      {
        title: "Performance Creative Iteration & Slicing",
        desc: "Continuous post-launch re-editing of video assets: altering hooks, music, opening frames, and CTA cards to beat ad fatigue.",
        iconName: "Sliders",
        deliverables: ["Weekly Hook Swapping", "Pacing & Music A/B Tests", "Format Re-Sizing (16:9, 1:1, 9:16)", "Ad Fatigue Defense Sprints"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Psychological Angle & Hook Architecture",
        timeline: "Days 1 - 3",
        desc: "We research your audience's deepest pain points, identify viral industry trends, and script 5+ unique psychological hooks for every video concept.",
        deliverables: "Comprehensive Storyboards & Direct-Response Video Scripts"
      },
      {
        step: "02",
        title: "Creator Matchmaking & Pre-Production",
        timeline: "Days 4 - 6",
        desc: "We cast vetted creators who mirror your target customer demographic or coordinate professional in-studio studio sets and lighting equipment.",
        deliverables: "Creator Contracts, Production Schedule & Call Sheets"
      },
      {
        step: "03",
        title: "High-Definition Production & Filming",
        timeline: "Days 7 - 10",
        desc: "We shoot multiple camera takes, dynamic b-roll, product close-ups, and raw creator testimonials adhering to strict lighting and audio guidelines.",
        deliverables: "Raw 4K Video Assets & Studio B-Roll Library"
      },
      {
        step: "04",
        title: "High-Retention Editing & Sound Design",
        timeline: "Days 11 - 15",
        desc: "Our senior editors implement fast-paced cuts, kinetic typography subtitles, sound effects, motion graphics, and color grading designed for mobile retention.",
        deliverables: "Fully Edited Video Ad Variations & Dynamic Creative Sets"
      },
      {
        step: "05",
        title: "Deployment, Telemetry Analysis & Iteration",
        timeline: "Day 16 Onward",
        desc: "We deploy the video assets into paid ad campaigns or organic channels, monitoring average watch time, 3-second hook rates, and conversion metrics to iterate.",
        deliverables: "Live Video Performance Data & New Hook Variations Sprint"
      }
    ],
    techStack: [
      { name: "DaVinci Resolve Studio", category: "Post-Production", role: "Color Grading & Master Editing", badge: "Cinema" },
      { name: "Adobe Premiere Pro", category: "Editing", role: "High-Velocity Social Cuts", badge: "Standard" },
      { name: "After Effects", category: "Motion", role: "3D Motion Graphics & VFX", badge: "Visual FX" },
      { name: "RED / Cinema Cameras", category: "Hardware", role: "4K / 8K Raw Sensor Capture", badge: "Studio" },
      { name: "Sennheiser & Rode", category: "Audio", role: "Broadcast-Grade Wireless Audio", badge: "Sound" },
      { name: "Blender & Cinema 4D", category: "3D Graphics", role: "Product Modeling & Renders", badge: "3D Engine" },
      { name: "CapCut Pro", category: "Mobile Native", role: "Native Social Pacing & Captions", badge: "Viral" },
      { name: "Frame.io", category: "Collaboration", role: "Real-Time Client Video Review", badge: "Workflow" }
    ],
    comparison: [
      {
        dimension: "Strategic Objective",
        arventa: "Direct-response conversion: every second is engineered to drive sales",
        traditional: "Arthouse aesthetics that look cinematic but fail to generate revenue",
        freelancer: "Basic cutting without understanding hooks, retention, or ad psychology"
      },
      {
        dimension: "Production Velocity",
        arventa: "Delivers 10+ completed ad variations and hooks within 5 to 7 business days",
        traditional: "Takes 2 to 3 months for a single 60-second corporate commercial",
        freelancer: "Slow turnaround times with endless revision delays"
      },
      {
        dimension: "Testing Flexibility",
        arventa: "Includes multiple 3-second hook variations and format resizes (9:16, 1:1, 16:9)",
        traditional: "Delivers a single rigid video format; charging extra for re-edits",
        freelancer: "Delivers one raw file with zero creative testing variations"
      },
      {
        dimension: "Equipment & Studio Standards",
        arventa: "Full in-house studio, cinema camera rigs, sound stages, and creator network",
        traditional: "Subcontracts filming to third parties, inflating client invoices",
        freelancer: "Filming on basic smartphones with poor lighting and audio"
      },
      {
        dimension: "Performance Integration",
        arventa: "Directly linked with our media buyers to optimize ads based on live ROAS",
        traditional: "Hands off video files with zero responsibility for ad performance",
        freelancer: "Zero knowledge of Meta/TikTok ad auction dynamics"
      }
    ],
    caseStudy: {
      client: "GlowAura Organics Skincare",
      industry: "Beauty & Personal Care D2C",
      challenge: "Brand had visually stunning static photography on Instagram, but their Meta ad spend was burning out at a weak 1.4x ROAS due to lack of authentic video proof.",
      strategy: "Arventa Studios produced 8 high-retention UGC videos with relatable creators demonstrating the product texture, before/after results, and debunking common skincare misconceptions.",
      image: "/images/service-video-creator.webp",
      metrics: [
        { label: "Thumb-Stop Rate (3s)", value: "48.2%", change: "+210% Surge" },
        { label: "Blended Meta ROAS", value: "4.95x", change: "From 1.4x" },
        { label: "New Customer Revenue", value: "₹42 Lakhs", change: "In 60 Days" }
      ],
      quote: "Arventa Studios understands the psychology of video better than anyone in the industry. The UGC ads they produced didn't feel like ads—they stopped the scroll, built instant trust, and scaled our e-commerce business to record revenue.",
      clientName: "Meera Singhania",
      clientRole: "Founder & Creative Head, GlowAura"
    },
    deepDiveSections: [
      {
        title: "The Anatomy of a 5x ROAS Video Ad: The 3-Second Rule",
        body: [
          "Social media users scroll through approximately 300 feet of content every single day. Their thumbs move automatically until something shocks their subconscious pattern recognition.",
          "Our production formula breaks every video into three distinct mathematical components: The Hook (0-3s), The Bridge & Value Proof (3-12s), and The Low-Friction Call to Action (12-15s).",
          "The first 3 seconds must combine a visual pattern interrupt (e.g., unexpected action, dynamic text, physical demonstration) with a polarizing statement or relatable question. If you win the first 3 seconds, completion rates jump from 12% to over 64%."
        ],
        takeaways: [
          "Pattern interrupts in the opening 1.5 seconds prevent users from scrolling past.",
          "Sound-independent design (kinetic subtitles) ensures 100% comprehension on mute.",
          "Clear visual social proof within the first 6 seconds cements emotional buyer trust."
        ]
      },
      {
        title: "Why Authentic UGC Video Outperforms High-Budget TV Commercials",
        body: [
          "Modern digital consumers possess acute ad blindness. Highly polished, slick corporate commercials immediately trigger defensive skepticism because they look like sales pitches.",
          "User-Generated Content (UGC) filmed in native social formats (vertical 9:16 smartphone perspective) bypasses this skepticism. It looks like a genuine recommendation from a trusted friend, colleague, or peer.",
          "When combined with direct-response copywriting and professional audio mixing, UGC video ads consistently achieve 2x to 3x higher click-through rates and 40% lower cost per acquisition compared to traditional studio commercials."
        ],
        takeaways: [
          "Native social styling feels organic and dramatically increases click-through rates.",
          "Real product unboxings, texture demonstrations, and honest reactions convert cold traffic.",
          "Producing multiple creator angles allows rapid algorithmic creative testing."
        ]
      }
    ],
    faqs: [
      {
        question: "Do you supply the actors, creators, and voiceover artists, or do we provide them?",
        answer: "We handle everything end-to-end. We maintain an extensive network of verified content creators, actors, and professional voiceover artists across multiple demographics, languages, and accents. We manage casting, product shipping, filming guidelines, and creator contracts."
      },
      {
        question: "What video formats and aspect ratios do you deliver?",
        answer: "We deliver full multi-format packages: Vertical 9:16 (for Instagram Reels, TikTok, and YouTube Shorts), Square 1:1 (for Facebook & Instagram feed ads), and Horizontal 16:9 (for YouTube, desktop websites, and television screens)."
      },
      {
        question: "Can we use the videos across all our organic social channels and paid ads?",
        answer: "Yes, 100%. All completed video assets are delivered with full, perpetual commercial licensing. You have unrestricted rights to use them across Meta Ads, TikTok Ads, YouTube, your website, email campaigns, and broadcast media."
      },
      {
        question: "What is your typical turnaround time from concept to final video delivery?",
        answer: "For standard UGC and short-form video packages, our turnaround time is typically 5 to 7 business days from script approval. For large-scale cinema commercials or complex 3D motion graphic projects, production timelines range between 2 to 3 weeks."
      },
      {
        question: "How do you ensure the videos actually generate sales and not just views?",
        answer: "We are a performance marketing agency first. Every script, visual hook, and call to action is engineered using direct-response psychological formulas designed specifically to drive qualified traffic to your landing page and prompt immediate purchasing decisions."
      },
      {
        question: "Do you provide raw footage and project files if our team wants to make future edits?",
        answer: "Yes. Upon project completion, we can provide high-resolution master exports, clean textless versions for international localization, and all raw footage B-roll files stored on cloud repositories."
      }
    ]
  },

  // 6. BRAND IDENTITY DESIGN
  "branding": {
    id: "branding",
    title: "Brand Identity & Visual Architecture",
    subtitle: "Prestigious, Distinctive Brand Systems, Luxury Typography, and Guidelines Engineered to Command Premium Market Valuation.",
    heroBadge: "Brand Strategy Division",
    category: "Creative & Media",
    image: "/images/service-brand-identity.webp",
    stats: [
      { value: "3.5x", label: "Perceived Value Increase", sub: "Allowing brands to command premium pricing" },
      { value: "100%", label: "Vector Brand Guidelines", sub: "Comprehensive design systems & asset kits" },
      { value: "0 Competing", label: "Zero Price Competition", sub: "Carving out an undisputed category of one" },
      { value: "Trademark", label: "Trademark-Ready Assets", sub: "Original vector typography and iconography" }
    ],
    overview: "If your brand looks identical to your competitors, you are inevitably forced to compete on price in a race to the bottom. In today's hyper-crowded digital landscape, elite brands win by commanding immediate authority, emotional resonance, and unshakeable perceived value. At Arventa Ventures, our brand identity division doesn't just draw logos. We construct complete visual and emotional brand architectures: from bespoke typography, color psychology, and tactile packaging to comprehensive digital design systems that make your business the undisputed premium choice in your market.",
    problemSolutions: [
      {
        problem: "Inconsistent, amateur visual branding that forces you to discount prices and fight for low-margin commodity customers.",
        solution: "Luxury, prestigious brand identity systems that instantly justify 2x to 5x premium pricing and attract affluent buyers.",
        stat: "3x Pricing Power"
      },
      {
        problem: "Fragmented visuals where social ads, websites, packaging, and presentations look like they belong to four different companies.",
        solution: "A unified, comprehensive Brand Bible and Design System governing typography, color scales, iconography, and photography.",
        stat: "100% Brand Cohesion"
      },
      {
        problem: "Generic, forgettable clip-art logos that fail to pass trademark registration or stand out in crowded app stores and social feeds.",
        solution: "Bespoke, hand-crafted vector marks and custom typography engineered for trademark protection and instant recall.",
        stat: "Unique Trademark Mark"
      }
    ],
    capabilities: [
      {
        title: "Bespoke Logo Design & Iconic Marks",
        desc: "Hand-crafted vector logomarks, secondary badges, and responsive icon variations engineered for legibility from 16px favicons to billboard scale.",
        iconName: "Award",
        deliverables: ["Primary & Secondary Logomarks", "Monogram Favicons & App Icons", "Vector Master Files (SVG, AI, EPS)", "Dark & Light Mode Variants"]
      },
      {
        title: "Complete Brand Guidelines & Brand Bible",
        desc: "A comprehensive 40+ page operational brand manual defining color codes, typography hierarchies, spacing grids, and misusage rules.",
        iconName: "BookOpen",
        deliverables: ["40+ Page Digital Brand Manual", "Color Palette Scales (HEX, CMYK, Pantone)", "Typography System & Pairing Rules", "Iconography & Imagery Guidelines"]
      },
      {
        title: "Corporate Stationery & Collateral Suite",
        desc: "Tactile, luxury print and digital collateral: executive business cards, letterheads, invoice templates, presentation decks, and email signatures.",
        iconName: "FileText",
        deliverables: ["Foil-Stamping Print Mockups", "Executive Keynote & Pitch Decks", "Corporate Stationery Suite", "HTML Animated Email Signatures"]
      },
      {
        title: "Product Packaging & Unboxing Architecture",
        desc: "High-end product box packaging, tactile labels, structural dielines, and unboxing inserts that spark social media sharing.",
        iconName: "Package",
        deliverables: ["Factory-Ready CAD Dielines", "Luxury Material Specifications", "Emboss & Foil Print Finishes", "3D Photorealistic Box Renders"]
      },
      {
        title: "Digital UI/UX Design Systems & Component Kits",
        desc: "Figma design tokens, button states, form styling, and interactive component libraries ready for seamless web and app engineering.",
        iconName: "Layers",
        deliverables: ["Figma Interactive Component Kit", "Design Tokens & Spacing Scale", "Accessible WCAG Contrast Colors", "Micro-Interaction Guidelines"]
      },
      {
        title: "Brand Voice, Tone & Messaging Playbook",
        desc: "Defining your brand's unique verbal personality: core value propositions, mission manifestos, taglines, and copywriting guidelines.",
        iconName: "MessageSquare",
        deliverables: ["Brand Personality Archetype", "Core Mission Manifesto & Taglines", "Elevator Pitch Formulations", "Copywriting Do's and Don'ts"]
      },
      {
        title: "Motion Identity & Logo Stingers",
        desc: "Dynamic animated logo reveals, YouTube intro/outros, and kinetic typography animations for video marketing and digital displays.",
        iconName: "Zap",
        deliverables: ["4K Animated Logo Stingers", "Lottie Web Animations (JSON)", "Social Video Transition Wipes", "Alpha Channel Transparent Video"]
      },
      {
        title: "Environmental & Retail Signage Systems",
        desc: "Large-scale architectural signage, trade show booth designs, office interior wall art, and outdoor billboard visual systems.",
        iconName: "Compass",
        deliverables: ["Architectural Signage Specifications", "Trade Show Booth 3D Mockups", "Outdoor Billboard Artworks", "Fleet Vehicle Branding Wraps"]
      }
    ],
    methodology: [
      {
        step: "01",
        title: "Brand Discovery & Market Category Mapping",
        timeline: "Week 1",
        desc: "We dissect your business model, customer psychology, competitor positioning, and brand archetype to establish an uncontested market category.",
        deliverables: "Strategic Brand Positioning Document & Visual Moodboards"
      },
      {
        step: "02",
        title: "Concept Exploration & Hand-Crafted Marks",
        timeline: "Week 2",
        desc: "Our senior identity designers explore dozens of distinct conceptual directions, sketching bespoke monograms, custom typography, and symbols.",
        deliverables: "3 Distinct High-End Brand Concept Presentations"
      },
      {
        step: "03",
        title: "Refinement, Vector Crafting & Typography Pairing",
        timeline: "Week 3",
        desc: "We refine the chosen direction with mathematical precision, establishing optical balance, responsive scales, and sophisticated color palettes.",
        deliverables: "Final Vector Identity Master Files & Precision Grids"
      },
      {
        step: "04",
        title: "Collateral Application & Real-World Mockups",
        timeline: "Week 4",
        desc: "We apply the identity across stationery, packaging, websites, digital ad templates, and physical environments to stress-test real-world consistency.",
        deliverables: "Photorealistic Collateral Mockups & Print-Ready Files"
      },
      {
        step: "05",
        title: "The Comprehensive Brand Bible & Asset Kit Delivery",
        timeline: "Week 5",
        desc: "We compile the full 40+ page operational brand guidelines book and deliver organized digital asset vaults ready for commercial deployment.",
        deliverables: "Master Brand Bible (PDF) & Full Asset Vault (SVG, EPS, AI, PNG)"
      }
    ],
    techStack: [
      { name: "Adobe Illustrator", category: "Vector Design", role: "Mathematical Precision Marks", badge: "Core Vector" },
      { name: "Figma", category: "Digital Systems", role: "UI Design Systems & Tokens", badge: "Digital" },
      { name: "Adobe Photoshop", category: "Mockups", role: "Photorealistic Visualizations", badge: "Visual" },
      { name: "Adobe InDesign", category: "Editorial", role: "Brand Bible Layout & Print", badge: "Print" },
      { name: "After Effects", category: "Motion", role: "Dynamic Logo Animations", badge: "Motion" },
      { name: "Cinema 4D", category: "3D Packaging", role: "Photorealistic Box Renders", badge: "Packaging" },
      { name: "Pantone Color Bridge", category: "Color", role: "Spot Color Print Accuracy", badge: "Print Precision" },
      { name: "FontLab / Glyphs", category: "Typography", role: "Custom Typeface Engineering", badge: "Typography" }
    ],
    comparison: [
      {
        dimension: "Strategic Depth",
        arventa: "Comprehensive market positioning and category-creation psychology",
        traditional: "Visual styling without addressing unit economics or pricing power",
        freelancer: "Draws a quick logo with zero business or market research"
      },
      {
        dimension: "Originality & Trademark Safety",
        arventa: "100% bespoke vector craftsmanship ready for global trademarking",
        traditional: "Relies on familiar cliches and generic agency tropes",
        freelancer: "Often uses stock templates or copied Canva graphics"
      },
      {
        dimension: "Comprehensive Deliverables",
        arventa: "40+ page Brand Bible, packaging, digital tokens, stationery, and motion",
        traditional: "A 5-page basic PDF style sheet with high add-on costs",
        freelancer: "Delivers a single PNG file without guidelines or vector masters"
      },
      {
        dimension: "Digital & Ad Performance Ready",
        arventa: "Optimized specifically for high-converting social ads, app icons, and web",
        traditional: "Designed primarily for traditional print; fails on digital mobile screens",
        freelancer: "Unusable on dark mode or small mobile viewport sizes"
      },
      {
        dimension: "Direct Creative Director Collaboration",
        arventa: "Collaborate directly with Priya Mukherjee (Creative Director) & senior designers",
        traditional: "Relayed through layers of account managers, losing creative intent",
        freelancer: "Limited revisions and defensive attitude to feedback"
      }
    ],
    caseStudy: {
      client: "Aethelgard Heritage Watches & Horology",
      industry: "Luxury Timepieces & Menswear",
      challenge: "Brand had extraordinary craftsmanship but an amateur logo and inconsistent packaging, forcing them to sell watches at ₹8,000 with razor-thin margins.",
      strategy: "Arventa Ventures engineered a luxury, heritage-grade brand identity system: bespoke serif typography, gold-foil packaging boxes, tactile certificate of authenticity cards, and an imposing dark slate visual language.",
      image: "/images/service-brand-identity.webp",
      metrics: [
        { label: "Average Retail Price", value: "₹38,500", change: "4.8x Price Increase" },
        { label: "Product Return Rate", value: "0.8%", change: "Down from 12%" },
        { label: "Global Waitlist", value: "4,200+ Buyers", change: "Sold Out In 48h" }
      ],
      quote: "The brand transformation engineered by Arventa Ventures elevated our company into an entirely different echelon. We were able to quadruple our retail prices overnight, and our customers constantly rave about the luxury unboxing experience.",
      clientName: "Rohan Singhal",
      clientRole: "Founder & Master Horologist, Aethelgard"
    },
    deepDiveSections: [
      {
        title: "The Psychology of Perceived Value: Why Visual Identity Dictates Pricing",
        body: [
          "Human beings do not make purchasing decisions based purely on objective utility. Every luxury consumer purchasing decision is filtered through the lens of identity, prestige, and perceived status.",
          "When two identical products are presented in different packaging—one in generic cardboard and the other in a tactile matte-black box with embossed gold foil and bespoke typography—consumers consistently value the latter at 4x to 6x the price of the former.",
          "At Arventa Ventures, we engineer visual brand architectures that trigger subconscious signals of elite craftsmanship, permanence, and trustworthiness. This completely eliminates price sensitivity and positions your brand as the definitive leader."
        ],
        takeaways: [
          "Visual refinement directly expands your gross profit margins and pricing power.",
          "Consistent typography and color discipline build cumulative cognitive brand recall.",
          "Premium packaging transforms everyday unboxing into organic viral social media promotion."
        ]
      },
      {
        title: "Building Digital-First Design Systems for the Modern Screen",
        body: [
          "A brand identity in 2026 cannot be designed merely for paper letterheads and business cards. Over 90% of your customer touchpoints occur on glowing digital screens: from tiny 16px browser favicons and 32px social avatars to 4K desktop displays and dark mode interfaces.",
          "We construct responsive logo systems that dynamically adapt based on viewport size. A complex primary crest scales down into a bold, simplified monogram icon on mobile, ensuring instantaneous legibility at every scale.",
          "Our color palettes are rigorously tested against Web Content Accessibility Guidelines (WCAG AAA) for high-contrast legibility, ensuring seamless transition between light mode and dark slate aesthetics."
        ],
        takeaways: [
          "Responsive logo systems preserve legibility from tiny mobile avatars to billboards.",
          "WCAG contrast compliance guarantees readability and accessible digital experiences.",
          "Figma design tokens bridge visual branding with seamless full-stack web development."
        ]
      }
    ],
    faqs: [
      {
        question: "What is included in the comprehensive Brand Bible deliverable?",
        answer: "The Brand Bible is an exhaustive 40+ page operational manual covering: primary and secondary logo marks, minimum clearspace grids, prohibited misusage examples, primary and secondary color palette scales (HEX, RGB, CMYK, Pantone), typography hierarchies and font licensing, iconography sets, photographic style guidelines, and brand voice guidelines."
      },
      {
        question: "Can we legally trademark the logo and brand marks created by Arventa Ventures?",
        answer: "Yes, 100%. All logos, monograms, and brand symbols created by Arventa Ventures are 100% original, bespoke vector artworks crafted without stock elements. Upon final invoice payment, full intellectual property and commercial copyright are transferred to your business for global trademark registration."
      },
      {
        question: "How many logo design concepts do you present initially?",
        answer: "We typically present 3 completely distinct, high-fidelity conceptual directions during the initial presentation. Each concept explores a different strategic angle and includes real-world collateral mockups (packaging, website, business cards) so you can visualize the brand in its natural habitat."
      },
      {
        question: "Do you provide print-ready vector files for merchandise and packaging manufacturers?",
        answer: "Yes. We deliver comprehensive asset vaults including vector formats (AI, EPS, SVG, PDF) calibrated in CMYK and Pantone spot colors with exact factory-ready dieline specifications, ensuring flawless production with your packaging and printing partners."
      },
      {
        question: "Can you rebrand an existing established company without losing our current recognition?",
        answer: "Yes. Brand evolution and rebranding is a core specialty. We preserve your recognized heritage and core customer brand equity while modernizing visual typography, refining color scales, and creating digital-first assets that position you for the next decade of growth."
      },
      {
        question: "How long does a complete corporate brand identity project take?",
        answer: "A comprehensive brand identity engagement typically takes between 4 to 6 weeks from initial strategic discovery and moodboarding to final Brand Bible delivery and master asset vault transfer."
      }
    ]
  }
};

// Map aliases so every possible URL resolves seamlessly
servicesDetailedMap["website-development"] = servicesDetailedMap["web-development"];
servicesDetailedMap["app-software-development"] = servicesDetailedMap["app-development"];
servicesDetailedMap["custom-software"] = servicesDetailedMap["app-development"];
servicesDetailedMap["facebook-ads"] = servicesDetailedMap["meta-ads"];
servicesDetailedMap["paid-advertising"] = servicesDetailedMap["meta-ads"];
servicesDetailedMap["paid-ads"] = servicesDetailedMap["meta-ads"];
servicesDetailedMap["google-ads"] = servicesDetailedMap["meta-ads"]; // Can be viewed with PPC context
servicesDetailedMap["seo"] = servicesDetailedMap["seo-services"];
servicesDetailedMap["search-engine-optimization"] = servicesDetailedMap["seo-services"];
servicesDetailedMap["brand-identity"] = servicesDetailedMap["branding"];
servicesDetailedMap["creative-design"] = servicesDetailedMap["branding"];
servicesDetailedMap["social-media"] = servicesDetailedMap["meta-ads"];
servicesDetailedMap["video-creator"] = servicesDetailedMap["video-marketing"];
