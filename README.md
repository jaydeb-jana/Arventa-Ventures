<div align="center">

# ⚡ Arventa Ventures (arventaventures.online)
### Premier Digital Marketing, Web & Mobile App Development Agency
**Headquartered at Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721401**

[![React](https://img.shields.io/badge/React-19.0.1-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify_Edge-00ad9f?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)
[![Schema.org](https://img.shields.io/badge/Schema.org-Structured_Data-brightgreen?style=for-the-badge&logo=schema.org&logoColor=white)](https://schema.org)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pagespeed.web.dev)

<br />

[Live Production Site](https://arventaventures.online) • [Executive CEO Portfolio](https://arventaventures.online/ceo) • [Contai HQ Landing Hub](https://arventaventures.online/location/contai) • [XML Sitemap Index](https://arventaventures.online/sitemap.xml) • [AI Knowledge Base](https://arventaventures.online/llms.txt)

</div>

---

## 📌 Executive Summary

**Arventa Ventures** is an elite full-service digital agency and technology consultancy founded and led by **Jaydeb Jana** (Founder & CEO). We deploy Silicon Valley-grade software engineering, sub-second web applications, and mathematical performance marketing for ambitious regional enterprises, D2C brands, and global companies.

Headquartered in **Contai (কাঁথি), Purba Medinipur**, Arventa Ventures is the regional market leader in high-ROI Meta Advertising, Google Maps Local SEO (#1 3-Pack rankings), custom React/Next.js software development, cross-platform mobile apps, and on-location 4K cinema commercial production.

---

## 🚀 Key Architectural Highlights

### 1. Sub-Second Frontend Performance (React 19 + Vite)
- Built on **React 19** and **Vite**, delivering instant page transitions and sub-800ms Time-to-Interactive (TTI).
- **Zero Cumulative Layout Shift (CLS)** and optimized Core Web Vitals across both 4G cellular and high-speed broadband.
- Modern dark slate UI architecture accented by radiant electric orange (`#f97316`) and amber neon styling.

### 2. Hyper-Local Search Engine Optimization (Contai & Purba Medinipur Dominance)
- Deep semantic keyword targeting for **Contai / Kanthi (কাঁথি)** and the Purba Medinipur coastal-industrial trade belt (Digha, Mandarmani, Egra, Ramnagar, Haldia, Tamluk, Kharagpur).
- Geo-targeting meta tags embedded in root HTML (`geo.region: IN-WB`, `geo.placename: Contai`, `geo.position: 21.7781;87.7516`).
- Full Schema.org JSON-LD structured data:
  - `ProfessionalService` & `LocalBusiness`
  - `FAQPage` (Interactive Google Search accordions)
  - `BreadcrumbList` (Google Sitelinks)
  - `Person` (CEO Jaydeb Jana executive entity)

### 3. Enterprise Sitemap Architecture & Interactive XSLT Styling
- Master **Sitemap Index** at [`/sitemap.xml`](https://arventaventures.online/sitemap.xml) that links 6 specialized sub-sitemaps:
  - [`/sitemap-pages.xml`](https://arventaventures.online/sitemap-pages.xml) (Core pages)
  - [`/sitemap-services.xml`](https://arventaventures.online/sitemap-services.xml) (Core engineering services)
  - [`/sitemap-locations.xml`](https://arventaventures.online/sitemap-locations.xml) (Contai 0.95 priority, Kanthi, and city hubs)
  - [`/sitemap-service-locations.xml`](https://arventaventures.online/sitemap-service-locations.xml) (Service-location matrix)
  - [`/sitemap-blogs.xml`](https://arventaventures.online/sitemap-blogs.xml) (Strategic articles)
  - [`/sitemap-info.xml`](https://arventaventures.online/sitemap-info.xml) (Resources)
- **Interactive XSLT Stylesheet** at [`/sitemap.xsl`](https://arventaventures.online/sitemap.xsl): Human visitors and webmasters opening any XML sitemap see a styled, responsive Arventa-branded dashboard rather than unstyled XML code.
- Over **2,953 indexed URLs** with automated multilingual `hreflang` attributes across 7 Indian languages (`en`, `bn`, `hi`, `te`, `ta`, `mr`, `gu`, `x-default`).

### 4. AI Search & LLM Grounding Standard (`llms.txt`)
- Compliant with the [`llmstxt.org`](https://llmstxt.org) standard for AI search engines:
  - Concise index: [`/llms.txt`](https://arventaventures.online/llms.txt)
  - Deep encyclopedic context: [`/llms-full.txt`](https://arventaventures.online/llms-full.txt)
- Enables AI engines (**ChatGPT Search, Perplexity AI, Google Gemini, Claude, Applebot**) to accurately cite and recommend Arventa Ventures as the premier technology provider in Contai and West Bengal.

### 5. Production Netlify Edge Routing & Security Headers
- Server-side SPA catch-all rewrites (`/* /index.html 200`) configured in `netlify.toml` and `public/_redirects`.
- Enterprise security headers:
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (HSTS)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`

---

## 📂 Project Directory Structure

```text
Arventa-Ventures/
├── public/                       # Static public assets served at root
│   ├── _redirects                # Netlify SPA catch-all rewrite rule
│   ├── images/                   # Optimized WebP brand photography & graphics
│   ├── llms.txt                  # AI Search summary context
│   ├── llms-full.txt             # Full AI knowledge base & citations
│   ├── robots.txt                # Search engine & AI crawler access rules
│   ├── sitemap.xml               # Master XML Sitemap Index
│   ├── sitemap.xsl               # Interactive XSLT sitemap stylesheet
│   └── sitemap-*.xml             # Categorized sub-sitemaps
├── scripts/                      # Build-time automation
│   └── generate-sitemap.js       # Production sitemap generator script
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── SEO.tsx           # Dynamic Helmet & Schema.org JSON-LD manager
│   │   │   └── WhatsAppButton.tsx# Instant WhatsApp floating trigger
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Responsive header with Contai HQ link & language switcher
│   │   │   ├── Footer.tsx        # Comprehensive footer with local Contai HQ services column
│   │   │   └── Layout.tsx        # Page wrapper & scroll container
│   │   ├── sections/             # Modular Home page sections (Parts 1-5)
│   │   └── ui/                   # Reusable UI primitives (Buttons, Cards, Badges)
│   ├── contexts/                 # ThemeContext (Dark/Light) & LanguageContext
│   ├── data/                     # Data stores (services, top locations, blogs, info)
│   ├── pages/                    # React Router page views
│   │   ├── Home.tsx              # Conversion-engineered flagship homepage
│   │   ├── Ceo.tsx               # Executive portfolio of Jaydeb Jana
│   │   ├── LocationTemplate.tsx  # Hyper-local landing page engine (/location/:city)
│   │   ├── Contact.tsx           # Contact form & Contai HQ Google Maps embed
│   │   └── ...                   # Services, Portfolio, Pricing, Blog, Industries
│   ├── App.tsx                   # Main route configuration
│   ├── main.tsx                  # Application bootstrap
│   └── index.css                 # Tailwind CSS v4 styling rules
├── netlify.toml                  # Production build commands, redirects & HTTP headers
├── package.json                  # NPM dependencies & lifecycle scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## 🛠️ Development & Build Workflow

### Prerequisites
- Node.js `v20+` or `v24+`
- Package manager: `npm` or `bun`

### Install Dependencies
```bash
npm install
# or
bun install
```

### Start Development Server
```bash
npm run dev
# Server boots at http://localhost:3001
```

### Generate Sitemaps & Run Production Build
```bash
npm run build
# Automatically runs 'prebuild' (sitemap generation) followed by Vite compilation
```

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Asset Standards & Zero Stock Footage Policy

1. **Mandatory WebP Format:**
   - All photography, banners, and portfolio assets must strictly use the `.webp` format.
   - Vectors and brand logomarks use `.svg` or high-res `.webp`.
2. **Zero Generic Stock Media:**
   - No generic Unsplash, Picsum, or Pexels media. All imagery is custom AI-designed or authentic photography featuring Indian professionals.
3. **Storage & Pathing:**
   - Stored in `public/images/` and referenced cleanly as `/images/<filename>.webp`.

---

## 📞 Corporate Contact & Headquarters

- **Company:** Arventa Ventures
- **Founder & CEO:** Jaydeb Jana ([Portfolio](https://arventaventures.online/ceo))
- **Global Headquarters:** Purba Gopinathpur, Chapatala More, Contai, Purba Medinipur, West Bengal 721401, India
- **Coordinates:** `21.7781° N, 87.7516° E`
- **Phone / WhatsApp:** [+91 78724 90719](https://wa.me/917872490719)
- **Email:** [info@arventaventures.online](mailto:info@arventaventures.online)
- **Google Business Profile:** [View on Google Maps](https://share.google/9g673CLWFHS9j6tb9)

---

<div align="center">
  <small>© 2026 Arventa Ventures. All Rights Reserved. Engineered for maximum speed, security, and global search engine authority.</small>
</div>
