<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>
          <xsl:choose>
            <xsl:when test="//*[local-name()='sitemapindex']">XML Sitemap Index | Arventa Ventures</xsl:when>
            <xsl:otherwise>XML Sitemap | Arventa Ventures</xsl:otherwise>
          </xsl:choose>
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #020617;
            color: #e2e8f0;
            line-height: 1.6;
            padding: 32px 16px;
          }
          .container {
            max-width: 1240px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
            border: 1px solid #334155;
            border-radius: 16px;
            padding: 32px 28px;
            margin-bottom: 28px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
            pointer-events: none;
          }
          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(249, 115, 22, 0.15);
            border: 1px solid rgba(249, 115, 22, 0.4);
            color: #f97316;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 14px;
          }
          h1 {
            font-size: 28px;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.5px;
            margin-bottom: 8px;
          }
          p.lead {
            font-size: 15px;
            color: #94a3b8;
            max-width: 880px;
            margin-bottom: 18px;
          }
          p.lead a {
            color: #f97316;
            text-decoration: none;
            font-weight: 600;
          }
          p.lead a:hover {
            text-decoration: underline;
          }
          .nav-back {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #1e293b;
            color: #f8fafc;
            border: 1px solid #334155;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 16px;
            transition: all 0.2s;
          }
          .nav-back:hover {
            background: #f97316;
            border-color: #f97316;
            color: #ffffff;
          }
          .stats-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 14px;
          }
          .stat-pill {
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid #334155;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 13px;
            color: #cbd5e1;
          }
          .stat-pill strong {
            color: #f97316;
            font-weight: 700;
          }
          .quick-links-section {
            background: #0b1120;
            border: 1px solid #1e293b;
            border-radius: 14px;
            padding: 20px 24px;
            margin-bottom: 28px;
          }
          .quick-links-title {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #f97316;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .quick-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 10px;
          }
          .quick-card {
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 8px;
            padding: 10px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            transition: all 0.2s;
          }
          .quick-card:hover {
            border-color: #f97316;
            background: rgba(249, 115, 22, 0.08);
            transform: translateY(-1px);
          }
          .quick-card-title {
            font-size: 13px;
            font-weight: 600;
            color: #e2e8f0;
          }
          .quick-card-badge {
            font-size: 11px;
            padding: 2px 6px;
            border-radius: 4px;
            background: rgba(249, 115, 22, 0.2);
            color: #f97316;
            font-weight: 700;
          }
          .table-wrapper {
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            margin-bottom: 24px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          th {
            background: #1e293b;
            color: #cbd5e1;
            font-weight: 600;
            padding: 14px 18px;
            border-bottom: 1px solid #334155;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-size: 11px;
          }
          td {
            padding: 14px 18px;
            border-bottom: 1px solid #1e293b;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: rgba(30, 41, 59, 0.45);
          }
          td a {
            color: #38bdf8;
            text-decoration: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 13px;
            font-weight: 500;
            word-break: break-all;
            transition: color 0.15s;
          }
          td a:hover {
            color: #f97316;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 11px;
            letter-spacing: 0.3px;
          }
          .badge-orange {
            background: rgba(249, 115, 22, 0.2);
            color: #f97316;
            border: 1px solid rgba(249, 115, 22, 0.4);
          }
          .badge-blue {
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
          }
          .badge-green {
            background: rgba(52, 211, 153, 0.15);
            color: #34d399;
            border: 1px solid rgba(52, 211, 153, 0.3);
          }
          .badge-slate {
            background: rgba(148, 163, 184, 0.15);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }
          .changefreq-tag {
            color: #a7f3d0;
            font-weight: 500;
            font-size: 12px;
          }
          .date-tag {
            color: #94a3b8;
            font-size: 12px;
            font-variant-numeric: tabular-nums;
          }
          .footer-note {
            text-align: center;
            font-size: 13px;
            color: #64748b;
            margin-top: 24px;
            padding: 16px;
          }
          .footer-note a {
            color: #f97316;
            text-decoration: none;
            font-weight: 600;
          }
          @media (max-width: 768px) {
            th:nth-child(4), td:nth-child(4) {
              display: none;
            }
            h1 {
              font-size: 22px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <div class="header">
            <div class="brand-badge">
              <span>★</span> Arventa Ventures • Enterprise SEO Sitemap
            </div>
            
            <xsl:choose>
              <!-- SITEMAP INDEX HEADER -->
              <xsl:when test="//*[local-name()='sitemapindex']">
                <h1>Master XML Sitemap Index</h1>
                <p class="lead">
                  Welcome to the primary search index for <a href="https://arventaventures.online">Arventa Ventures</a>. This master index organizes <strong>2,953 crawlable endpoints</strong> into specialized high-performance sub-sitemaps for Google Search Console, Bing Webmaster, and AI crawlers (ChatGPT Search, Perplexity AI, Claude, and Gemini).
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Total Index Coverage: <strong>2,953 URLs</strong>
                  </div>
                  <div class="stat-pill">
                    Specialized Sub-Sitemaps: <strong><xsl:value-of select="count(//*[local-name()='sitemap'])"/></strong>
                  </div>
                  <div class="stat-pill">
                    Headquarters: <strong>Contai (Kanthi), Purba Medinipur, WB 721401</strong>
                  </div>
                  <div class="stat-pill">
                    Standard: <strong>Sitemaps.org XML Schema 0.9</strong>
                  </div>
                </div>
              </xsl:when>

              <!-- URLSET HEADER -->
              <xsl:otherwise>
                <a href="/sitemap.xml" class="nav-back">&#8592; Back to Master Sitemap Index</a>
                <h1>Verified XML Sitemap</h1>
                <p class="lead">
                  Verified endpoints for <a href="https://arventaventures.online">Arventa Ventures</a>. Includes crawl priority rankings, change frequencies, and multilingual hreflang alternatives (English, Bengali, Hindi, Telugu, Tamil, Marathi, Gujarati).
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Indexed URLs in this sitemap: <strong><xsl:value-of select="count(//*[local-name()='url'])"/></strong>
                  </div>
                  <div class="stat-pill">
                    Domain: <strong>https://arventaventures.online</strong>
                  </div>
                  <div class="stat-pill">
                    Primary Regional Hub: <strong>Contai &amp; Purba Medinipur (721401)</strong>
                  </div>
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <!-- FEATURED CONTAI & CORE PAGES QUICK GRID (ON INDEX VIEW) -->
          <xsl:if test="//*[local-name()='sitemapindex']">
            <div class="quick-links-section">
              <div class="quick-links-title">
                <span>⚡</span> Featured Core &amp; Contai (কাঁথি) Headquarters Pages
              </div>
              <div class="quick-links-grid">
                <a href="https://arventaventures.online/" class="quick-card">
                  <span class="quick-card-title">🏠 Homepage (Agency Portal)</span>
                  <span class="quick-card-badge">Priority 1.0</span>
                </a>
                <a href="https://arventaventures.online/location/contai" class="quick-card">
                  <span class="quick-card-title">📍 Contai (কাঁথি) HQ Hub</span>
                  <span class="quick-card-badge">Priority 0.95</span>
                </a>
                <a href="https://arventaventures.online/ceo" class="quick-card">
                  <span class="quick-card-title">👤 CEO &amp; Leadership (Jaydeb Jana)</span>
                  <span class="quick-card-badge">Priority 0.85</span>
                </a>
                <a href="https://arventaventures.online/services/web-development/in/contai" class="quick-card">
                  <span class="quick-card-title">💻 Web Development in Contai</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/services/app-development/in/contai" class="quick-card">
                  <span class="quick-card-title">📱 App Development in Contai</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/services/meta-ads/in/contai" class="quick-card">
                  <span class="quick-card-title">🎯 Meta Ads in Contai</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/services/seo/in/contai" class="quick-card">
                  <span class="quick-card-title">🔍 Local SEO Agency in Contai</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/portfolio" class="quick-card">
                  <span class="quick-card-title">💼 Case Studies &amp; Portfolio</span>
                  <span class="quick-card-badge">Priority 0.85</span>
                </a>
                <a href="https://arventaventures.online/pricing" class="quick-card">
                  <span class="quick-card-title">💰 Transparent Pricing Plans</span>
                  <span class="quick-card-badge">Priority 0.85</span>
                </a>
                <a href="https://arventaventures.online/blog" class="quick-card">
                  <span class="quick-card-title">✍️ Tech &amp; Marketing Insights</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/contact" class="quick-card">
                  <span class="quick-card-title">📞 Contact &amp; Contai Office</span>
                  <span class="quick-card-badge">Priority 0.90</span>
                </a>
                <a href="https://arventaventures.online/about" class="quick-card">
                  <span class="quick-card-title">ℹ️ About Arventa Ventures</span>
                  <span class="quick-card-badge">Priority 0.85</span>
                </a>
              </div>
            </div>
          </xsl:if>

          <div class="table-wrapper">
            <xsl:choose>
              <!-- SITEMAP INDEX TABLE -->
              <xsl:when test="//*[local-name()='sitemapindex']">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 50px;">#</th>
                      <th>Sitemap Resource</th>
                      <th style="width: 250px;">Category &amp; Coverage</th>
                      <th style="width: 160px;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="//*[local-name()='sitemap']">
                      <tr>
                        <td style="color:#64748b; font-weight:600;"><xsl:value-of select="position()"/></td>
                        <td>
                          <a href="{*[local-name()='loc']}"><xsl:value-of select="*[local-name()='loc']"/></a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-pages.xml')">
                              <span class="badge badge-orange">Core Pages (12 URLs)</span>
                            </xsl:when>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-services.xml')">
                              <span class="badge badge-orange">Flagship Services (4 URLs)</span>
                            </xsl:when>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-locations.xml')">
                              <span class="badge badge-orange">Contai &amp; Cities (578 Hubs)</span>
                            </xsl:when>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-service-locations.xml')">
                              <span class="badge badge-blue">Targeted Services (2,312 URLs)</span>
                            </xsl:when>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-blogs.xml')">
                              <span class="badge badge-green">Industry Articles (40 Posts)</span>
                            </xsl:when>
                            <xsl:when test="contains(*[local-name()='loc'], 'sitemap-info.xml')">
                              <span class="badge badge-slate">Knowledge Base (12 Topics)</span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="badge badge-orange">Unified Flat (2,953 URLs)</span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="date-tag"><xsl:value-of select="*[local-name()='lastmod']"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:when>

              <!-- URLSET TABLE -->
              <xsl:otherwise>
                <table>
                  <thead>
                    <tr>
                      <th style="width: 50px;">#</th>
                      <th>Verified Page URL</th>
                      <th style="width: 110px;">Priority</th>
                      <th style="width: 140px;">Change Frequency</th>
                      <th style="width: 150px;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="//*[local-name()='url']">
                      <tr>
                        <td style="color:#64748b; font-weight:600;"><xsl:value-of select="position()"/></td>
                        <td>
                          <a href="{*[local-name()='loc']}"><xsl:value-of select="*[local-name()='loc']"/></a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="*[local-name()='priority'] &gt;= 0.95">
                              <span class="badge badge-orange">⭐ <xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:when>
                            <xsl:when test="*[local-name()='priority'] &gt;= 0.85">
                              <span class="badge badge-orange"><xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:when>
                            <xsl:when test="*[local-name()='priority'] &gt;= 0.75">
                              <span class="badge badge-blue"><xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="badge badge-slate"><xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="changefreq-tag"><xsl:value-of select="*[local-name()='changefreq']"/></td>
                        <td class="date-tag"><xsl:value-of select="*[local-name()='lastmod']"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <div class="footer-note">
            Generated automatically by <strong><a href="https://arventaventures.online">Arventa Ventures</a></strong> • Headquarters: Contai (Kanthi), Purba Medinipur, West Bengal 721401 • Sub-second Edge Latency
          </div>

        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
