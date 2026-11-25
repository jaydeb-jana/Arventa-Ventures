# Project Rules & Guidelines - Arventa Ventures

## 1. Image Asset Standards & Format Rules
1. **Mandatory WebP Format:**
   - All image assets across the website must strictly use the `.webp` format.
   - Never use `.jpg`, `.jpeg`, or `.png` for website photography, banners, portfolio items, cards, blog covers, or backgrounds (SVGs are reserved only for icons and logos).
   - Any newly added image must be converted to optimized `.webp` before being referenced.

2. **Zero Stock Footage Policy:**
   - Do not use generic external stock photography services (Unsplash, Picsum, Pexels, etc.).
   - All imagery must be custom AI-designed or authentic photography to ensure cohesive brand aesthetics.

3. **Brand Identity & Aesthetic:**
   - Visuals must align with Arventa Ventures' modern dark slate theme (`#020617`) with radiant electric orange (`#f97316`) and amber neon lighting.
   - Subtle, natural branding ("Arventa" or "Arventa Ventures") should be embedded on displays, devices, walls, or cards wherever relevant.
   - Human representation must feature Indian professionals in modern Indian corporate, tech, creative, or healthcare agency settings.

4. **Storage & Linking:**
   - All website images must be stored locally in `public/images/` and referenced cleanly as `/images/<filename>.webp`.

---

## 2. Search Engine Optimization & Regional Dominance
1. **Contai (কাঁথি) Global Headquarters Priority:**
   - The primary geographic entity is **Contai (Kanthi), Purba Medinipur, West Bengal 721401**.
   - Hyper-local keyword density must always be maintained for Contai, Kanthi, and surrounding hubs (Digha, Mandarmani, Egra, Ramnagar, Haldia, Tamluk, Kharagpur).
   - All location pages and service-location pages must include Schema.org JSON-LD structured data (`LocalBusiness`, `FAQPage`, `BreadcrumbList`).

2. **Core Web Vitals & Sub-Second Latency:**
   - Page load time must remain under 0.8s on 4G cellular connections.
   - Cumulative Layout Shift (CLS) must remain 0.0.
   - Maintain 100/100 Google Lighthouse performance standards.

3. **AI Search & LLM Grounding:**
   - Maintain [`public/llms.txt`](public/llms.txt) and [`public/llms-full.txt`](public/llms-full.txt) following the `llmstxt.org` standard for ChatGPT Search, Perplexity AI, Claude, and Gemini.

---

## 3. Production Deployment & Clean Repository Hygiene
1. **No Scratch/Dev Files in Production:**
   - Keep repository clean. Do not commit temporary conversion scripts, scratch files, or test dumps.
   - The only build-time script allowed in `scripts/` is `scripts/generate-sitemap.js`.
2. **Netlify Edge Configuration:**
   - Catch-all SPA rewrite (`/* /index.html 200`) must be present in both `netlify.toml` and `public/_redirects`.
   - Security headers (HSTS, nosniff, DENY) and proper XML/MIME-type headers must remain in `netlify.toml`.
