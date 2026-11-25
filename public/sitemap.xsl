<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Arventa Ventures</title>
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
            padding: 24px 16px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
            border: 1px solid #334155;
            border-radius: 16px;
            padding: 32px 24px;
            margin-bottom: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
            pointer-events: none;
          }
          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(249, 115, 22, 0.12);
            border: 1px solid rgba(249, 115, 22, 0.3);
            color: #f97316;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 16px;
          }
          h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin-bottom: 12px;
          }
          p.lead {
            color: #94a3b8;
            font-size: 15px;
            max-width: 800px;
            margin-bottom: 18px;
          }
          .stats-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .stat-pill {
            background: #1e293b;
            border: 1px solid #334155;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            color: #cbd5e1;
          }
          .stat-pill strong {
            color: #f97316;
            font-weight: 700;
          }
          .nav-back {
            display: inline-block;
            margin-bottom: 16px;
            color: #f97316;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
          }
          .nav-back:hover {
            text-decoration: underline;
          }
          .table-wrapper {
            background: #0b1120;
            border: 1px solid #1e293b;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            text-align: left;
          }
          thead {
            background: #0f172a;
            border-bottom: 2px solid #334155;
          }
          th {
            padding: 14px 18px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #94a3b8;
          }
          tbody tr {
            border-bottom: 1px solid #1e293b;
            transition: background-color 0.15s ease;
          }
          tbody tr:hover {
            background-color: #131c31;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          td {
            padding: 14px 18px;
            vertical-align: middle;
          }
          td a {
            color: #38bdf8;
            text-decoration: none;
            word-break: break-all;
            transition: color 0.15s;
          }
          td a:hover {
            color: #f97316;
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 12px;
          }
          .priority-high {
            background: rgba(249, 115, 22, 0.2);
            color: #f97316;
            border: 1px solid rgba(249, 115, 22, 0.4);
          }
          .priority-normal {
            background: rgba(56, 189, 248, 0.15);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
          }
          .priority-low {
            background: rgba(148, 163, 184, 0.15);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }
          .changefreq-tag {
            color: #a7f3d0;
            font-weight: 500;
            font-size: 13px;
          }
          .date-tag {
            color: #94a3b8;
            font-size: 13px;
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
          }
          @media (max-width: 768px) {
            th:nth-child(3), td:nth-child(3),
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
              <span>★</span> Arventa Ventures • SEO Architecture
            </div>
            
            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <h1>XML Sitemap Index</h1>
                <p class="lead">
                  This master sitemap index organizes all crawlable endpoints for <strong>Arventa Ventures</strong> (<a href="https://arventaventures.online" style="color:#f97316; text-decoration:none;">arventaventures.online</a>). Engineered for Google Search Console, Bing Webmaster, and AI search engines with sub-second performance.
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Total Sub-Sitemaps: <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong>
                  </div>
                  <div class="stat-pill">
                    Primary Regional Hub: <strong>Contai &amp; Purba Medinipur (721401)</strong>
                  </div>
                  <div class="stat-pill">
                    Format: <strong>Standard XML / Schema 0.9</strong>
                  </div>
                </div>
              </xsl:when>
              <xsl:otherwise>
                <a href="/sitemap.xml" class="nav-back">&#8592; Back to Sitemap Index</a>
                <h1>XML Sitemap</h1>
                <p class="lead">
                  This sitemap contains verified URLs for <strong>Arventa Ventures</strong>, including multilingual hreflang alternatives and crawl priorities.
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Indexed URLs in this sitemap: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
                  </div>
                  <div class="stat-pill">
                    Domain: <strong>https://arventaventures.online</strong>
                  </div>
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <div class="table-wrapper">
            <xsl:choose>
              <!-- SITEMAP INDEX TABLE -->
              <xsl:when test="sitemap:sitemapindex">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 50px;">#</th>
                      <th>Sitemap URL</th>
                      <th style="width: 200px;">Category &amp; Coverage</th>
                      <th style="width: 180px;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                      <tr>
                        <td style="color:#64748b; font-weight:600;"><xsl:value-of select="position()"/></td>
                        <td>
                          <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="contains(sitemap:loc, 'sitemap-pages.xml')">
                              <span class="priority-badge priority-high">Core Company Pages</span>
                            </xsl:when>
                            <xsl:when test="contains(sitemap:loc, 'sitemap-services.xml')">
                              <span class="priority-badge priority-high">Engineering Services</span>
                            </xsl:when>
                            <xsl:when test="contains(sitemap:loc, 'sitemap-locations.xml')">
                              <span class="priority-badge priority-high">Contai &amp; City Hubs</span>
                            </xsl:when>
                            <xsl:when test="contains(sitemap:loc, 'sitemap-service-locations.xml')">
                              <span class="priority-badge priority-normal">Service-Location Matrix</span>
                            </xsl:when>
                            <xsl:when test="contains(sitemap:loc, 'sitemap-blogs.xml')">
                              <span class="priority-badge priority-normal">Articles &amp; Insights</span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="priority-badge priority-low">Knowledge Base</span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="date-tag"><xsl:value-of select="sitemap:lastmod"/></td>
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
                      <th>Page URL</th>
                      <th style="width: 130px;">Priority</th>
                      <th style="width: 150px;">Change Frequency</th>
                      <th style="width: 160px;">Last Modified</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <tr>
                        <td style="color:#64748b; font-weight:600;"><xsl:value-of select="position()"/></td>
                        <td>
                          <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="sitemap:priority &gt;= 0.9">
                              <span class="priority-badge priority-high"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:when>
                            <xsl:when test="sitemap:priority &gt;= 0.7">
                              <span class="priority-badge priority-normal"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="priority-badge priority-low"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td class="changefreq-tag"><xsl:value-of select="sitemap:changefreq"/></td>
                        <td class="date-tag"><xsl:value-of select="sitemap:lastmod"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <div class="footer-note">
            Generated automatically by <strong><a href="https://arventaventures.online">Arventa Ventures</a></strong> • High-Performance Digital Marketing, Web &amp; App Development
          </div>

        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
