import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Calculate dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function wrapUrlset(urlEntries) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries.join('')}
</urlset>
`;
}

async function generateSitemap() {
  console.log('Generating enterprise categorized XML Sitemaps with XSLT styling for arventaventures.online...');

  const DOMAIN = 'https://arventaventures.online';
  const TODAY = new Date().toISOString().split('T')[0];
  const publicDir = path.resolve(__dirname, '../public');

  // Import dynamic data from project files
  const { locationsByState } = await import('../src/data/locationsData.ts');
  const { servicesData, infoData } = await import('../src/data/pageContent.ts');
  const { blogPosts } = await import('../src/data/blogs.ts');

  const supportedLangs = [
    { code: 'en', param: '' },
    { code: 'bn', param: '?lang=bn' },
    { code: 'hi', param: '?lang=hi' },
    { code: 'te', param: '?lang=te' },
    { code: 'ta', param: '?lang=ta' },
    { code: 'mr', param: '?lang=mr' },
    { code: 'gu', param: '?lang=gu' },
  ];

  function buildHreflangTags(basePath) {
    const links = supportedLangs.map(l => {
      const fullUrl = escapeXml(`${DOMAIN}${basePath}${l.param}`);
      return `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${fullUrl}"/>`;
    });
    const defaultUrl = escapeXml(`${DOMAIN}${basePath}`);
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`);
    return links.join('\n');
  }

  // 1. Core Company Pages
  const mainPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.85', changefreq: 'weekly' },
    { path: '/ceo', priority: '0.85', changefreq: 'weekly' },
    { path: '/services', priority: '0.90', changefreq: 'weekly' },
    { path: '/portfolio', priority: '0.85', changefreq: 'weekly' },
    { path: '/industries', priority: '0.80', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog', priority: '0.90', changefreq: 'daily' },
    { path: '/faq', priority: '0.75', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.30', changefreq: 'yearly' },
    { path: '/terms', priority: '0.30', changefreq: 'yearly' },
    { path: '/contact', priority: '0.90', changefreq: 'weekly' },
  ];

  const pageUrls = mainPages.map(p => `
  <url>
    <loc>${DOMAIN}${p.path}</loc>
${buildHreflangTags(p.path)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

  fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), wrapUrlset(pageUrls), 'utf-8');

  // 2. Service Pages
  const serviceSlugs = Object.keys(servicesData);
  const serviceUrls = serviceSlugs.map(slug => {
    const path = `/services/${slug}`;
    return `
  <url>
    <loc>${DOMAIN}${path}</loc>
${buildHreflangTags(path)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>`;
  });

  fs.writeFileSync(path.join(publicDir, 'sitemap-services.xml'), wrapUrlset(serviceUrls), 'utf-8');

  // 3. Info Detail Pages
  const infoSlugs = Object.keys(infoData);
  const infoUrls = infoSlugs.map(slug => {
    const path = `/info/${slug}`;
    return `
  <url>
    <loc>${DOMAIN}${path}</loc>
${buildHreflangTags(path)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
  });

  fs.writeFileSync(path.join(publicDir, 'sitemap-info.xml'), wrapUrlset(infoUrls), 'utf-8');

  // 4. Blog Posts
  const blogUrls = blogPosts.map(post => {
    const path = `/blog/${post.id}`;
    return `
  <url>
    <loc>${DOMAIN}${path}</loc>
${buildHreflangTags(path)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
  });

  fs.writeFileSync(path.join(publicDir, 'sitemap-blogs.xml'), wrapUrlset(blogUrls), 'utf-8');

  // 5. City Hub Landing Pages (Contai & Kanthi top priority)
  const allCitiesSet = new Set(['contai', 'kanthi']);
  Object.values(locationsByState).forEach((cities) => {
    cities.forEach((city) => {
      const citySlug = city.toLowerCase().trim().replace(/\s+/g, '-');
      allCitiesSet.add(citySlug);
    });
  });

  const uniqueCitySlugs = Array.from(allCitiesSet).sort();

  const locationUrls = uniqueCitySlugs.map(citySlug => {
    const locPath = `/location/${citySlug}`;
    const isContaiOrKanthi = citySlug === 'contai' || citySlug === 'kanthi';
    return `
  <url>
    <loc>${DOMAIN}${locPath}</loc>
${buildHreflangTags(locPath)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${isContaiOrKanthi ? 'daily' : 'weekly'}</changefreq>
    <priority>${isContaiOrKanthi ? '0.95' : '0.85'}</priority>
  </url>`;
  });

  fs.writeFileSync(path.join(publicDir, 'sitemap-locations.xml'), wrapUrlset(locationUrls), 'utf-8');

  // 6. Service + Location Matrix
  const serviceLocationUrls = [];
  uniqueCitySlugs.forEach(citySlug => {
    const isContaiOrKanthi = citySlug === 'contai' || citySlug === 'kanthi';
    serviceSlugs.forEach(serviceSlug => {
      const srvLocPath = `/services/${serviceSlug}/in/${citySlug}`;
      serviceLocationUrls.push(`
  <url>
    <loc>${DOMAIN}${srvLocPath}</loc>
${buildHreflangTags(srvLocPath)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${isContaiOrKanthi ? 'daily' : 'weekly'}</changefreq>
    <priority>${isContaiOrKanthi ? '0.90' : '0.80'}</priority>
  </url>`);
    });
  });

  fs.writeFileSync(path.join(publicDir, 'sitemap-service-locations.xml'), wrapUrlset(serviceLocationUrls), 'utf-8');

  // Separate Contai & Kanthi URLs to prioritize at the very top of sitemap.xml
  const contaiUrls = [
    ...locationUrls.filter(u => u.includes('/location/contai') || u.includes('/location/kanthi')),
    ...serviceLocationUrls.filter(u => u.includes('/in/contai') || u.includes('/in/kanthi'))
  ];

  const otherLocationUrls = locationUrls.filter(u => !u.includes('/location/contai') && !u.includes('/location/kanthi'));
  const otherServiceLocationUrls = serviceLocationUrls.filter(u => !u.includes('/in/contai') && !u.includes('/in/kanthi'));

  // 7. Master Comprehensive Unified Sitemap (Ordered for Contai & Core Dominance)
  const masterUrls = [
    ...pageUrls,
    ...contaiUrls,
    ...serviceUrls,
    ...blogUrls,
    ...otherLocationUrls,
    ...otherServiceLocationUrls,
    ...infoUrls
  ];

  // 7. Complete Flat Unified Sitemap (All 2,953 URLs ordered for Contai & Core Dominance)
  fs.writeFileSync(path.join(publicDir, 'sitemap-all.xml'), wrapUrlset(masterUrls), 'utf-8');

  // 8. MASTER SITEMAP INDEX (https://arventaventures.online/sitemap.xml & sitemap-index.xml)
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-pages.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-services.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-locations.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-service-locations.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-blogs.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-info.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-all.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexContent, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndexContent, 'utf-8');

  console.log(`✅ Enterprise Unified & Indexed XML Sitemaps generated successfully!`);
  console.log(`- Master Sitemap Index: ${DOMAIN}/sitemap.xml (links 7 specialized sub-sitemaps)`);
  console.log(`- Sitemap Index Clone: ${DOMAIN}/sitemap-index.xml`);
  console.log(`- Complete Flat Sitemap: ${DOMAIN}/sitemap-all.xml (${masterUrls.length} URLs with Contai prioritized)`);
  console.log(`- Core Pages: ${pageUrls.length} URLs`);
  console.log(`- Services: ${serviceUrls.length} URLs`);
  console.log(`- City Locations: ${locationUrls.length} URLs`);
  console.log(`- Service Locations: ${serviceLocationUrls.length} URLs`);
  console.log(`- Blogs: ${blogUrls.length} URLs`);
  console.log(`- Interactive XSLT 1.0 Styling: ${DOMAIN}/sitemap.xsl`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
