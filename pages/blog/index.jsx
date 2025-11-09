import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      slug: 'araba-akusu-degistirme-rehberi',
      title: 'Araba Aküsü Değiştirme: Kapsamlı Rehber',
      excerpt: 'Araba aküsünü nasıl değiştireceğinizi, nelere dikkat etmeniz gerektiğini ve profesyonel montajın avantajlarını öğrenin.',
      date: '2024-01-15',
      category: 'Rehber',
      readTime: '5 dakika',
    },
    {
      slug: 'arac-akusu-biterse-ne-yapilir',
      title: 'Araç Aküsü Biterse Ne Yapılır? 7 Pratik Çözüm',
      excerpt: 'Aracınızın aküsü yolda bittiyse paniklemein! İşte yapmanız gerekenler ve acil çözüm yöntemleri.',
      date: '2024-01-12',
      category: 'Sorun Çözme',
      readTime: '4 dakika',
    },
    {
      slug: 'oto-aku-fiyatlari-2024',
      title: 'Oto Akü Fiyatları 2024: Güncel Liste ve Karşılaştırma',
      excerpt: '2024 yılı oto akü fiyatları, marka karşılaştırmaları ve en uygun fiyatlı modeller hakkında bilgi edinin.',
      date: '2024-01-10',
      category: 'Fiyatlandırma',
      readTime: '6 dakika',
    },
    {
      slug: 'en-iyi-araba-akuleri',
      title: 'En İyi Araba Aküleri: Marka ve Model Önerileri',
      excerpt: 'Piyasadaki en kaliteli ve güvenilir akü markalarını, özelliklerini ve hangi araç tipine uygun olduklarını keşfedin.',
      date: '2024-01-08',
      category: 'İnceleme',
      readTime: '7 dakika',
    },
    {
      slug: 'mobil-aku-servisi-avantajlari',
      title: 'Mobil Akü Servisi: Avantajları ve Kullanım Rehberi',
      excerpt: 'Yerinde akü değişimi hizmeti nedir, nasıl çalışır ve neden tercih edilmelidir? Tüm detaylar bu yazıda.',
      date: '2024-01-05',
      category: 'Hizmetler',
      readTime: '5 dakika',
    },
    {
      slug: '60-72-amper-aku-farklari',
      title: '60 ve 72 Amper Akü Arasındaki Farklar',
      excerpt: 'Aracınız için 60 amper mi 72 amper akü mü almalısınız? Kapasiteleri, fiyatları ve kullanım alanları karşılaştırması.',
      date: '2024-01-03',
      category: 'Rehber',
      readTime: '4 dakika',
    },
  ];

  return (
    <Layout
      seo={{
        title: "Blog — Akü Hakkında Her Şey | Akücü Birol",
        description: "Araba aküsü değişimi, akü fiyatları, bakım ve onarım ipuçları. Akü hakkında merak ettikleriniz ve daha fazlası blog yazılarımızda.",
        canonical: "/blog",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Araç aküsü hakkında bilmeniz gereken her şey: bakım ipuçları, 
              satın alma rehberleri ve uzman tavsiyeleri
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card group hover:border-accent cursor-pointer h-full flex flex-col"
                >
                  {/* Kategori ve Okuma Süresi */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-textMuted flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h2 className="font-heading font-semibold text-xl text-textDark mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  {/* Özet */}
                  <p className="text-textMuted leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Alt Bilgi */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-textMuted">
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-sm text-accent font-medium group-hover:text-yellow-600 transition-colors flex items-center gap-1">
                      Devamını Oku
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-textDark mb-4">
              Akü İhtiyacınız mı Var?
            </h2>
            <p className="text-lg text-textMuted mb-8">
              3 yıl garantili aküler ve ücretsiz yerinde montaj hizmeti için hemen arayın
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905337717616"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-primary font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0533 771 76 16
              </a>

              <Link
                href="/akuler"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Akü Modelleri
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

