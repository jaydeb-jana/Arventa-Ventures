<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
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
            max-width: 1280px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
            border: 1px solid #334155;
            border-radius: 16px;
            padding: 28px 24px;
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
            background: rgba(249, 115, 22, 0.15);
            border: 1px solid rgba(249, 115, 22, 0.4);
            color: #f97316;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 600;
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
            max-width: 860px;
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
          .stats-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 14px;
          }
          .stat-pill {
            background: rgba(15, 23, 42, 0.8);
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
          .controls-bar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
            background: #0b1120;
            border: 1px solid #1e293b;
            padding: 14px 18px;
            border-radius: 12px;
          }
          .search-box {
            flex: 1;
            min-width: 260px;
          }
          .search-box input {
            width: 100%;
            background: #020617;
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 10px 14px;
            color: #f8fafc;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s;
          }
          .search-box input:focus {
            border-color: #f97316;
          }
          .filter-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .chip-btn {
            background: #1e293b;
            color: #94a3b8;
            border: 1px solid #334155;
            border-radius: 6px;
            padding: 6px 12px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.15s ease;
          }
          .chip-btn:hover, .chip-btn.active {
            background: #f97316;
            color: #ffffff;
            border-color: #f97316;
          }
          .table-wrapper {
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
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
            padding: 14px 16px;
            border-bottom: 1px solid #334155;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-size: 11px;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #1e293b;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: rgba(30, 41, 59, 0.5);
          }
          td a {
            color: #38bdf8;
            text-decoration: none;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12.5px;
            word-break: break-all;
            transition: color 0.15s;
          }
          td a:hover {
            color: #f97316;
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 11px;
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
              <span>★</span> Arventa Ventures • Enterprise XML Sitemap
            </div>
            
            <xsl:choose>
              <xsl:when test="//*[local-name()='sitemapindex']">
                <h1>XML Sitemap Index</h1>
                <p class="lead">
                  Master index for <a href="https://arventaventures.online">Arventa Ventures</a>. Engineered for Google Search Console, Bing Webmaster, and AI Crawlers (ChatGPT Search, Perplexity, Gemini, Claude).
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Specialized Sub-Sitemaps: <strong><xsl:value-of select="count(//*[local-name()='sitemap'])"/></strong>
                  </div>
                  <div class="stat-pill">
                    Primary Regional Hub: <strong>Contai &amp; Purba Medinipur (721401)</strong>
                  </div>
                  <div class="stat-pill">
                    Protocol: <strong>XML Schema 0.9</strong>
                  </div>
                </div>
              </xsl:when>
              <xsl:otherwise>
                <h1>Arventa Ventures XML Sitemap</h1>
                <p class="lead">
                  Verified URLs for <a href="https://arventaventures.online">Arventa Ventures</a>, including Contai (কাঁথি) priority hubs, digital marketing, web &amp; app development services, and rich articles.
                </p>
                <div class="stats-bar">
                  <div class="stat-pill">
                    Total Indexed URLs: <strong id="totalUrlsCount"><xsl:value-of select="count(//*[local-name()='url'])"/></strong>
                  </div>
                  <div class="stat-pill">
                    Showing: <strong id="visibleCount"><xsl:value-of select="count(//*[local-name()='url'])"/></strong>
                  </div>
                  <div class="stat-pill">
                    Primary Regional Hub: <strong>Contai &amp; Purba Medinipur (721401)</strong>
                  </div>
                </div>
              </xsl:otherwise>
            </xsl:choose>
          </div>

          <div class="controls-bar">
            <div class="search-box">
              <input type="text" id="sitemapFilter" placeholder="Instant Search URL or Keyword (e.g. contai, web-development, app, ceo, blog)..." onkeyup="filterSitemap()" />
            </div>
            <div class="filter-chips">
              <button class="chip-btn active" onclick="setQuickFilter('')">All</button>
              <button class="chip-btn" onclick="setQuickFilter('contai')">Contai (কাঁথি)</button>
              <button class="chip-btn" onclick="setQuickFilter('/services/')">Services</button>
              <button class="chip-btn" onclick="setQuickFilter('/location/')">Locations</button>
              <button class="chip-btn" onclick="setQuickFilter('/blog/')">Blogs</button>
            </div>
          </div>

          <div class="table-wrapper">
            <xsl:choose>
              <!-- SITEMAP INDEX -->
              <xsl:when test="//*[local-name()='sitemapindex']">
                <table id="sitemapTable">
                  <thead>
                    <tr>
                      <th style="width: 50px;">#</th>
                      <th>Sitemap URL</th>
                      <th style="width: 220px;">Category</th>
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
                          <span class="priority-badge priority-high">Sub-Sitemap</span>
                        </td>
                        <td class="date-tag"><xsl:value-of select="*[local-name()='lastmod']"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:when>

              <!-- URLSET -->
              <xsl:otherwise>
                <table id="sitemapTable">
                  <thead>
                    <tr>
                      <th style="width: 50px;">#</th>
                      <th>Page URL</th>
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
                            <xsl:when test="*[local-name()='priority'] &gt;= 0.9">
                              <span class="priority-badge priority-high"><xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:when>
                            <xsl:when test="*[local-name()='priority'] &gt;= 0.7">
                              <span class="priority-badge priority-normal"><xsl:value-of select="*[local-name()='priority']"/></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="priority-badge priority-low"><xsl:value-of select="*[local-name()='priority']"/></span>
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
            Generated automatically by <strong><a href="https://arventaventures.online">Arventa Ventures</a></strong> • Headquarters: Contai (Kanthi), Purba Medinipur, West Bengal 721401
          </div>

        </div>

        <script type="text/javascript">
          function filterSitemap() {
            var input = document.getElementById('sitemapFilter');
            var filter = input.value.toLowerCase().trim();
            var table = document.getElementById('sitemapTable');
            if (!table) return;
            var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            var visible = 0;
            for (var i = 0; i &lt; rows.length; i++) {
              var text = rows[i].textContent || rows[i].innerText;
              if (text.toLowerCase().indexOf(filter) &gt; -1) {
                rows[i].style.display = '';
                visible++;
              } else {
                rows[i].style.display = 'none';
              }
            }
            var countEl = document.getElementById('visibleCount');
            if (countEl) countEl.innerText = visible;
          }

          function setQuickFilter(keyword) {
            var input = document.getElementById('sitemapFilter');
            input.value = keyword;
            var buttons = document.querySelectorAll('.chip-btn');
            buttons.forEach(function(btn) { btn.classList.remove('active'); });
            if (event &amp;&amp; event.target) {
              event.target.classList.add('active');
            }
            filterSitemap();
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
