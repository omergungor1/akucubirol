import React from 'react';
import Head from 'next/head';

export default function SEO({
  title = "Akücü Birol — Akü Satışı & 7/24 Yerinde Montaj | Bursa",
  description = "Akücü Birol: Bursa ve çevresine garantili akü satışı, anında yerinde montaj ve 7/24 hizmet. Hemen arayın: +90 533 771 76 16.",
  canonical,
  ogImage = "/images/hero.jpg",
  ogType = "website",
  jsonLd,
  noindex = false
}) {
  const siteUrl = "https://akucubirol.com"; // Production URL
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Akücü Birol",
    "image": fullOgImage,
    "description": description,
    "telephone": "+905337717616",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bursa",
      "addressRegion": "Bursa",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.1886",
      "longitude": "29.0611"
    },
    "url": siteUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bursa"
      },
      {
        "@type": "City",
        "name": "Nilüfer"
      },
      {
        "@type": "City",
        "name": "Osmangazi"
      },
      {
        "@type": "City",
        "name": "Mudanya"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Akü Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yerinde Akü Montajı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Akü Satışı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "7/24 Mobil Akü Servisi"
          }
        }
      ]
    }
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Akücü Birol" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Turkish" />

      {/* Contact Info */}
      <meta name="contact" content="+905337717616" />
      <meta name="author" content="Akücü Birol" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}

