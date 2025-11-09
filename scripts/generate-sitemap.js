// Sitemap generation script
// Run: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://akucubirol.com';

// Statik sayfalar
const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/akuler', changefreq: 'weekly', priority: 0.9 },
  { url: '/hizmetler', changefreq: 'monthly', priority: 0.8 },
  { url: '/bolgeler', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.7 },
  { url: '/hakkimizda', changefreq: 'monthly', priority: 0.6 },
];

// Akü modelleri
const akuModels = [
  '60-amper', '72-amper', '90-amper', '105-amper',
  '135-amper', '180-amper', '200-amper', '225-amper', '240-amper'
];

// Bölgeler
const regions = [
  'nilufer', 'osmangazi', 'mudanya'
];

// Blog yazıları
const blogPosts = [
  'araba-akusu-degistirme-rehberi',
  'arac-akusu-biterse-ne-yapilir',
  'oto-aku-fiyatlari-2025',
  'en-iyi-araba-akuleri',
  'mobil-aku-servisi-avantajlari',
  '60-72-amper-aku-farklari',
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Statik sayfalar
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Akü modelleri
  akuModels.forEach(model => {
    sitemap += `  <url>
    <loc>${SITE_URL}/akuler/${model}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Bölgeler
  regions.forEach(region => {
    sitemap += `  <url>
    <loc>${SITE_URL}/bolgeler/${region}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Blog yazıları
  blogPosts.forEach(post => {
    sitemap += `  <url>
    <loc>${SITE_URL}/blog/${post}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  // Dosyaya yaz
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📊 Total URLs: ${staticPages.length + akuModels.length + regions.length + blogPosts.length}`);
}

// Run
generateSitemap();

