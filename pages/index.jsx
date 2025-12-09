import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BrandCarousel from '../components/BrandCarousel';
import ProductCard from '../components/ProductCard';
import RegionList from '../components/RegionList';

export default function Home({ featuredProducts, features, testimonials }) {
  // Icon mapping
  const iconMap = {
    clock: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    location: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    money: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    lightning: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  };

  // JSON-LD Schema for Google Ads optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Akücü Birol - Acil Oto Akü Servisi",
    "image": "https://akucubirol.com/logo.png",
    "description": "Acil oto akü servisi, garantili akü yerinde değişim. Nilüfer, Osmangazi ve Mudanya'da mobil akü servisi. 7/24 oto akü servisi, kapıda akü değişimi. Hemen ara: 0533 771 76 16.",
    "telephone": "+905337717616",
    "email": "info@akucubirol.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bağlarbaşı, 1. Hürriyet Cd. No:156 D:c",
      "addressLocality": "Osmangazi",
      "addressRegion": "Bursa",
      "postalCode": "16160",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.23176547146991",
      "longitude": "28.984605376616667"
    },
    "url": "https://akucubirol.com",
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
      "name": "Acil Oto Akü Servisi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acil Oto Akü Servis Telefonu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garantili Akü Yerinde Değişim"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "7/24 Oto Akü Servisi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kapıda Akü Değişimi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ücretsiz Garantili Akü Montajı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oto Akü Yol Yardım"
          }
        }
      ]
    }
  };

  return (
    <Layout
      seo={{
        title: "Acil Oto Akü Servis Telefonu — Garantili Akü, Ücretsiz Montaj, Ücretsiz Mobil Servis,Yerinde Değişim | Akücü Birol",
        description: "Nilüfer, Osmangazi ve Mudanya'da mobil akü servisi! Ücretsiz montaj fırsatı. Akücü Birol: Garantili akü, ücretsiz montaj, ücretsiz mobil servis, yerinde değişim! 7/24 oto akü servisi. Hemen ara: 0533 771 76 16.",
        canonical: "/",
        jsonLd: jsonLd,
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Acil Oto Akü Servisi - Google Ads Optimized */}
      <section className="py-12 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-accent/20">
              <div className="text-center mb-6">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-textDark mb-3">
                  Acil Oto Akü Servis Telefonu — Hızlı Akü Değişimi
                </h2>
                <p className="text-lg text-textMuted">
                  <strong className="text-accent">Bursa Oto Akü Servis Telefonu:</strong> Nilüfer, Osmangazi ve Mudanya'da mobil akü servisi! Ücretsiz montaj fırsatı.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-textDark mb-1">Garantili Akü, Yerinde Değişim</h3>
                    <p className="text-sm text-textMuted">3 Yıl Garantili Akü ile güvenli alışveriş</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-textDark mb-1">Kapıda Akü Değişimi</h3>
                    <p className="text-sm text-textMuted">Ücretsiz Garantili Akü Montajı</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-textDark mb-1">7/24 Oto Akü Servisi</h3>
                    <p className="text-sm text-textMuted">Gece gündüz kesintisiz hizmet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-textDark mb-1">Oto Akü Yol Yardım</h3>
                    <p className="text-sm text-textMuted">En Yakın Akü Servisi</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+905337717616"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Acil Oto Akü Servis Telefonu
                </a>
                <a
                  href="/fiyat-al"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hemen Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Akü Modelleri */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-textDark mb-4">
              Popüler <span className="text-accent">Akü Modelleri</span>
            </h2>
            <p className="text-lg text-textMuted">
              En çok tercih edilen akü modelleri ve uygun fiyatlarla hizmetinizdeyiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/akuler"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Tüm Akü Modellerini Görüntüle
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Neden Biz - Google Ads Optimized */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Neden <span className="text-accent">Akücü Birol?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              <strong>Mudanya Mobil Akü Servisi</strong> ve <strong>Acil Akü Değişimi</strong> ile yanınızdayız
            </p>
            <p className="text-base text-gray-300">
              Yılların deneyimi ve güvenilir hizmet anlayışımızla <strong>en yakın akü servisi</strong> olarak hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-textDark mb-4">
              Müşteri <span className="text-accent">Yorumları</span>
            </h2>
            <p className="text-lg text-textMuted">
              Binlerce müşterimizin memnuniyeti bizim en büyük motivasyonumuz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                {/* Yıldızlar */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Yorum */}
                <p className="text-textMuted mb-4 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Müşteri Bilgisi */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-semibold text-accent text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-textDark">{testimonial.name}</p>
                    <p className="text-sm text-textMuted">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <RegionList />

      {/* CTA Section - Google Ads Optimized */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Yılların Tecrübesiyle Birol Akü! Mobil Servis, Ücretsiz Montaj, Garantili Aküler
            </h2>
            <p className="text-lg text-primary/90 mb-6 font-semibold">
              Mudanya'da güvenilir akü servisi! Yerinde değişim, uygun fiyat, hızlı hizmet.
            </p>
            <p className="text-base text-primary/80 mb-8">
              <strong>Akücü Birol:</strong> Kapıda akü değişimi, ücretsiz servis ve hızlı montaj!
              <strong> Aküde kampanyalı fiyat</strong> ile <strong>3 yıl garantili akü</strong> fırsatı.
              <strong> Hızlı akü değişimi</strong> ve <strong>yerinde akü değişimi</strong> hizmetimizle yanınızdayız.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">7/24</div>
                <div className="text-sm text-primary/90">Oto Akü Servisi</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">3 Yıl</div>
                <div className="text-sm text-primary/90">Garantili Akü</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">15 Dk</div>
                <div className="text-sm text-primary/90">Hızlı Ulaşım</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905337717616"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bursa Oto Akü Servis Telefonu
              </a>

              <a
                href="/fiyat-al"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg border-2 border-white hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hemen Fiyat Al —
              </a>

              <a
                href="https://wa.me/905337717616"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-success text-white font-semibold text-lg border-2 border-success hover:bg-green-500 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredProducts = [
    {
      title: '60 Amper Akü',
      amper: '60',
      description: 'Küçük ve orta boy araçlar için ideal ekonomik akü çözümü',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Tüm markalar mevcut',
      ],
      price: '2.500',
      slug: '60-amper',
    },
    {
      title: '72 Amper Akü',
      amper: '72',
      description: 'En popüler akü modeli, çoğu araç için uygun',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Start-Stop teknolojisi',
      ],
      price: '3.000',
      slug: '72-amper',
    },
    {
      title: '90 Amper Akü',
      amper: '90',
      description: 'Büyük hacimli araçlar ve SUV\'lar için güçlü akü',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Yüksek performans',
      ],
      price: '3.800',
      slug: '90-amper',
    },
  ];

  const features = [
    {
      icon: 'clock',
      title: '7/24 Hizmet',
      description: 'Gece gündüz demeden her an yanınızdayız. Acil durumlarda hemen arayın.',
    },
    {
      icon: 'shield',
      title: '3 Yıl Garanti',
      description: 'Bazı akü modellerinde 3 yıl garantili. Orijinal ürün güvencesiyle hizmet.',
    },
    {
      icon: 'location',
      title: 'Yerinde Montaj',
      description: 'Nerede olursanız olun, akünüz aracınızın bulunduğu yerde değiştirilir.',
    },
    {
      icon: 'money',
      title: 'Uygun Fiyat',
      description: 'Piyasanın en uygun fiyatları ile kaliteli akü hizmeti sunuyoruz.',
    },
    {
      icon: 'lightning',
      title: 'Hızlı Servis',
      description: 'Aradığınız anda harekete geçiyoruz. Ortalama 15 dakikada yanınızdayız.',
    },
    {
      icon: 'badge',
      title: 'Orijinal Ürün',
      description: 'Sadece orijinal ve güvenilir marka aküler ile çalışıyoruz.',
    },
  ];

  const testimonials = [
    {
      name: 'Mehmet Y.',
      location: 'Nilüfer, Bursa',
      rating: 5,
      comment: 'Gece yarısı aracım çalışmadı, hemen aradım ve 20 dakikada geldiler. Çok memnun kaldım, herkese tavsiye ederim.',
    },
    {
      name: 'Ayşe K.',
      location: 'Osmangazi, Bursa',
      rating: 5,
      comment: 'Fiyatları diğer akücülere göre gayet uygun. Kapımın önünde montaj yapıldı, çok kolay oldu.',
    },
    {
      name: 'Ahmet D.',
      location: 'Mudanya, Bursa',
      rating: 5,
      comment: 'Sabah arabam marş basmadı, aradım çabucak geldiler. Güler yüzlü esnaf, çok memnun kaldım.',
    },
  ];

  return {
    props: {
      featuredProducts,
      features,
      testimonials,
    },
    // Tamamen SSG - build zamanında render edilir, CDN'den serve edilir
    // revalidate eklenmediği için tamamen statik kalır
  };
}

