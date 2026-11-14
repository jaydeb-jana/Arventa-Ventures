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

async function generateSitemap() {
  console.log('Generating comprehensive multilingual sitemap.xml for arventaventures.online...');

  const DOMAIN = 'https://arventaventures.online';
  const TODAY = new Date().toISOString().split('T')[0];

  // Import dynamic data from project files
  const { locationsByState } = await import('../src/data/locationsData.ts');
  const { servicesData, infoData } = await import('../src/data/pageContent.ts');
  const { blogPosts } = await import('../src/data/blogs.ts');

  const urls = [];

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

  // 1. Static Main Pages
  const mainPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'weekly' },
    { path: '/ceo', priority: '0.7', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/locations', priority: '0.9', changefreq: 'daily' },
    { path: '/portfolio', priority: '0.85', changefreq: 'weekly' },
    { path: '/industries', priority: '0.8', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/faq', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' },
    { path: '/contact', priority: '0.85', changefreq: 'monthly' },
  ];

  mainPages.forEach((p) => {
    const hrefTags = buildHreflangTags(p.path);
    urls.push(`
  <url>
    <loc>${DOMAIN}${p.path}</loc>
${hrefTags}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);
  });

  // 2. Service Pages
  const serviceSlugs = Object.keys(servicesData);
  serviceSlugs.forEach((slug) => {
    const path = `/services/${slug}`;
    const hrefTags = buildHreflangTags(path);
    urls.push(`
  <url>
    <loc>${DOMAIN}${path}</loc>
${hrefTags}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
  });

  // 3. Info Detail Pages
  const infoSlugs = Object.keys(infoData);
  infoSlugs.forEach((slug) => {
    const path = `/info/${slug}`;
    const hrefTags = buildHreflangTags(path);
    urls.push(`
  <url>
    <loc>${DOMAIN}${path}</loc>
${hrefTags}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // 4. Blog Posts
  blogPosts.forEach((post) => {
    const path = `/blog/${post.id}`;
    const hrefTags = buildHreflangTags(path);
    urls.push(`
  <url>
    <loc>${DOMAIN}${path}</loc>
${hrefTags}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  // 5. All Cities & Location Landing Pages with Multilingual XHTML tags
  const allCitiesSet = new Set();
  Object.values(locationsByState).forEach((cities) => {
    cities.forEach((city) => {
      const citySlug = city.toLowerCase().trim().replace(/\s+/g, '-');
      allCitiesSet.add(citySlug);
    });
  });

  const uniqueCitySlugs = Array.from(allCitiesSet).sort();

  uniqueCitySlugs.forEach((citySlug) => {
    const locPath = `/location/${citySlug}`;
    const locHreflangs = buildHreflangTags(locPath);

    // General location page with hreflangs
    urls.push(`
  <url>
    <loc>${DOMAIN}${locPath}</loc>
${locHreflangs}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);

    // Service + Location combinations with hreflangs
    serviceSlugs.forEach((serviceSlug) => {
      const srvLocPath = `/services/${serviceSlug}/in/${citySlug}`;
      const srvHreflangs = buildHreflangTags(srvLocPath);

      urls.push(`
  <url>
    <loc>${DOMAIN}${srvLocPath}</loc>
${srvHreflangs}
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`);
    });
  });

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('')}
</urlset>
`;

  const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicPath, xmlContent, 'utf-8');

  console.log(`✅ Successfully generated sitemap.xml with ${urls.length} total URLs and multilingual hreflang attributes!`);
  console.log(`Saved to: ${publicPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
