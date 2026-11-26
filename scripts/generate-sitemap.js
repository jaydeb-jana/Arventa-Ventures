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
  console.log('Generating standard XML Sitemap for arventaventures.online (Only real existing pages)...');

  const DOMAIN = 'https://arventaventures.online';
  const TODAY = new Date().toISOString().split('T')[0];
  const publicDir = path.resolve(__dirname, '../public');

  // Import real project data
  const { blogPosts } = await import('../src/data/blogs.ts');
  const { infoData } = await import('../src/data/pageContent.ts');
  const { topLocationsMap } = await import('../src/data/topLocationsDetailedData.ts');

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

  function createUrlEntry(urlPath, priority = '0.80', changefreq = 'weekly') {
    return `
  <url>
    <loc>${DOMAIN}${urlPath}</loc>
${buildHreflangTags(urlPath)}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  // 1. Real Core Company Pages (12)
  const mainPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.85', changefreq: 'weekly' },
    { path: '/ceo', priority: '0.85', changefreq: 'weekly' },
    { path: '/services', priority: '0.90', changefreq: 'weekly' },
    { path: '/portfolio', priority: '0.85', changefreq: 'weekly' },
    { path: '/industries', priority: '0.80', changefreq: 'monthly' },
    { path: '/pricing', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog', priority: '0.90', changefreq: 'daily' },
    { path: '/contact', priority: '0.90', changefreq: 'weekly' },
    { path: '/faq', priority: '0.75', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.30', changefreq: 'yearly' },
    { path: '/terms', priority: '0.30', changefreq: 'yearly' },
  ];
  const pageEntries = mainPages.map(p => createUrlEntry(p.path, p.priority, p.changefreq));

  // 2. Real Core Services (6)
  const coreServices = [
    '/services/web-development',
    '/services/app-development',
    '/services/meta-ads',
    '/services/seo-services',
    '/services/video-marketing',
    '/services/branding',
  ];
  const serviceEntries = coreServices.map(path => createUrlEntry(path, '0.90', 'weekly'));

  // 3. Real Location Hubs (11 - Contai Priority 0.95)
  const realLocations = Object.keys(topLocationsMap);
  const locationEntries = realLocations.map(citySlug => {
    const isContaiOrKanthi = citySlug === 'contai' || citySlug === 'kanthi';
    return createUrlEntry(
      `/location/${citySlug}`,
      isContaiOrKanthi ? '0.95' : '0.85',
      isContaiOrKanthi ? 'daily' : 'weekly'
    );
  });

  // 4. Real Contai Localized Service Pages (5)
  const contaiServices = [
    '/services/web-development/in/contai',
    '/services/app-development/in/contai',
    '/services/seo-services/in/contai',
    '/services/meta-ads/in/contai',
    '/services/video-marketing/in/contai',
  ];
  const contaiServiceEntries = contaiServices.map(path => createUrlEntry(path, '0.90', 'daily'));

  // 5. Real Info Detail Pages (7)
  const realInfoSlugs = Object.keys(infoData);
  const infoEntries = realInfoSlugs.map(slug => createUrlEntry(`/info/${slug}`, '0.80', 'weekly'));

  // 6. Real Blog Posts (40)
  const blogEntries = blogPosts.map(post => createUrlEntry(`/blog/${post.id}`, '0.85', 'weekly'));

  // Combine ONLY currently existing real URLs
  const allRealUrls = [
    ...pageEntries,
    ...locationEntries.filter((_, idx) => realLocations[idx] === 'contai' || realLocations[idx] === 'kanthi'),
    ...contaiServiceEntries,
    ...serviceEntries,
    ...locationEntries.filter((_, idx) => realLocations[idx] !== 'contai' && realLocations[idx] !== 'kanthi'),
    ...blogEntries,
    ...infoEntries,
  ];

  // Write single standard sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), wrapUrlset(allRealUrls), 'utf-8');

  // Clean up legacy multi-sitemap dummy files that are no longer needed
  const legacyFiles = [
    'sitemap-all.xml',
    'sitemap-index.xml',
    'sitemap-locations.xml',
    'sitemap-service-locations.xml',
    'sitemap-pages.xml',
    'sitemap-services.xml',
    'sitemap-blogs.xml',
    'sitemap-info.xml'
  ];

  legacyFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🧹 Removed legacy dummy file: ${file}`);
    }
  });

  console.log(`✅ Standard XML Sitemap generated successfully!`);
  console.log(`- Total Real Verified URLs: ${allRealUrls.length}`);
  console.log(`- File: ${DOMAIN}/sitemap.xml`);
  console.log(`- Clean Standard Styling: ${DOMAIN}/sitemap.xsl`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
