/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Görsel optimizasyonu
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performans optimizasyonları
  compress: true,

  // i18n yapılandırması (Türkçe)
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
  },

  // Security headers ve CDN cache
  async headers() {
    return [
      {
        // Ana sayfa için CDN cache (SSG)
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // SSG sayfalar için CDN cache
        source: '/:path(hakkimizda|hizmetler|iletisim|bolgeler)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // Tüm sayfalar için genel headers
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

