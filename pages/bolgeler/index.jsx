import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Bolgeler({ regions }) {

  return (
    <Layout
      seo={{
        title: "Hizmet Bölgelerimiz — Bursa Geneli Mobil Akü Servisi | Akücü Birol",
        description: "Nilüfer, Osmangazi, Mudanya'da 7/24 mobil akü servisi. Ücretsiz yerinde montaj. Hemen arayın: +90 533 771 76 16.",
        canonical: "/bolgeler",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Hizmet Bölgelerimiz
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Bursa'nın her noktasına 7/24 mobil akü servisi ile ulaşıyoruz.
              Nerede olursanız olun, bir telefon kadar yakınız.
            </p>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Bilgi */}
      <section className="py-8 bg-accent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold text-lg">
              🚗 Ortalama 15 dakikada adresinize ulaşıyoruz • Ücretsiz yerinde montaj • 3 yıl garanti (Bazı modeller)
            </p>
          </div>
        </div>
      </section>

      {/* Bölge Listesi */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.slug}
                className="card group hover:border-accent h-full flex flex-col"
              >
                <Link
                  href={`/bolgeler/${region.slug}`}
                  className="flex-1 flex flex-col"
                >
                  {/* İkon ve Başlık */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <svg
                        className="w-7 h-7 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-2xl text-textDark mb-2 group-hover:text-accent transition-colors">
                        {region.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-textMuted">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{region.neighborhoods} mahalle</span>
                      </div>
                    </div>
                  </div>

                  {/* Açıklama */}
                  <p className="text-textMuted mb-4 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Popüler Mahalleler */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-textDark mb-2">Popüler mahalleler:</p>
                    <div className="flex flex-wrap gap-2">
                      {region.popular.slice(0, 3).map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-background text-xs text-textDark"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  <Link
                    href={`/bolgeler/${region.slug}`}
                    className="text-sm text-accent font-medium group-hover:text-yellow-600 transition-colors"
                  >
                    Detaylı Bilgi →
                  </Link>
                  <a
                    href="tel:+905337717616"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent text-primary text-sm font-semibold hover:bg-yellow-400 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Ara
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Özellikleri */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center text-textDark mb-12">
              Tüm Bölgelerde Aynı Kaliteli Hizmet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Hızlı Ulaşım',
                  description: 'Ortalama 15 dakikada adresinize ulaşıyoruz',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: '3 Yıl Garanti',
                  description: 'Tüm akülerimizde tam garanti kapsamı (3 yıl garanti bazı modellerde geçerli.)',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  title: 'Yerinde Montaj',
                  description: 'Aracınızın bulunduğu yerde ücretsiz montaj',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  title: '7/24 Hizmet',
                  description: 'Gece gündüz kesintisiz mobil servis',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-textDark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-textMuted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Bölgeniz Listede Yok mu?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Bursa ve çevre ilçelerde hizmet veriyoruz. Bölgenizi sormak için hemen arayın!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905337717616"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-primary font-bold text-lg shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0533 771 76 16
              </a>

              <a
                href="https://wa.me/905337717616"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-success text-white font-semibold text-lg hover:bg-green-500 hover:scale-105 transition-all"
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
  const regions = [
    {
      name: 'Nilüfer',
      slug: 'nilufer',
      description: 'Nilüfer ilçesi ve tüm mahallelerine 7/24 hızlı akü servisi. Ücretsiz yerinde montaj.',
      neighborhoods: 12,
      popular: ['Beşevler', 'Görükle', 'Özlüce', 'Ertuğrul', 'Konak'],
    },
    {
      name: 'Osmangazi',
      slug: 'osmangazi',
      description: 'Osmangazi bölgesine anında yerinde akü montajı ve mobil servis hizmeti.',
      neighborhoods: 18,
      popular: ['Çekirge', 'Heykel', 'Soğanlı', 'Hamitler', 'Panayır'],
    },
    {
      name: 'Mudanya',
      slug: 'mudanya',
      description: 'Mudanya ve sahil kesiminde mobil akü hizmeti. Deneyimli ekip, hızlı servis.',
      neighborhoods: 8,
      popular: ['Merkez', 'Güzelyalı', 'Altıntaş', 'Mütareke', 'Zeytlinlik'],
    }
  ];

  return {
    props: {
      regions,
    },
    // Tamamen statik - sadece build zamanında render edilir
  };
}

