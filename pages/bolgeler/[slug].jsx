import Layout from '../../components/Layout';
import Link from 'next/link';

const regionsData = [
  {
    slug: 'nilufer',
    name: 'Nilüfer',
    description: 'Nilüfer ilçesi Bursa\'nın modern ve gelişmiş bölgelerinden biridir. Tüm mahallelerine hızlı akü servisi sunuyoruz.',
    neighborhoods: [
      'Ataevler', 'Beşevler', 'Ertuğrul', 'Fethiye', 'Görükle',
      'Konak', 'Özlüce', 'Çamlıca', 'Yüzüncüyıl', 'Altınşehir',
      'Balat', 'Kayapa'
    ],
    serviceHighlights: [
      '15 dakikada yerinde akü değişimi',
      'Ücretsiz akü kontrolü ve test',
      'Tüm marka araçlara uyumlu akü',
      'Eski akü geri alımı garantili',
    ],
  },
  {
    slug: 'osmangazi',
    name: 'Osmangazi',
    description: 'Bursa\'nın merkez ilçesi Osmangazi\'de 7/24 mobil akü servisi ile hizmetinizdeyiz.',
    neighborhoods: [
      'Çekirge', 'Heykel', 'Soğanlı', 'Hamitler', 'Panayır',
      'Demirtaş', 'Doğanbey', 'Emek', 'Güneşli', 'Karabalıçeşme',
      'Odunluk', 'Ortapazar', 'Papçiftliği', 'Piremir', 'Şirinevler',
      'Teferrüç', 'Üçevler', 'Yunuseli'
    ],
    serviceHighlights: [
      'Acil yol yardımı 7/24',
      '3 yıl garantili markalar',
      'Nakit ve kart ile ödeme',
      'Profesyonel montaj ekibi',
    ],
  },
  {
    slug: 'yildirim',
    name: 'Yıldırım',
    description: 'Yıldırım ilçesinde garantili akü satış ve profesyonel montaj hizmeti sunuyoruz.',
    neighborhoods: [
      'Millet', 'Esenevler', 'Yıldırım', 'Yenişehir', 'İhsaniye',
      'Arabayatağı', 'Davutdede', 'Gazi Kemal', 'Hacıvat', 'İsmetpaşa',
      'Mollaarap', 'Selimiye', 'Siteler', 'Yavuz Selim', 'Yeşil'
    ],
    serviceHighlights: [
      'Start-Stop araçlara özel akü',
      'Ağır vasıta akü stokları',
      'Araç elektrik sistem kontrolü',
      'Anında servis garantisi',
    ],
  },
  {
    slug: 'mudanya',
    name: 'Mudanya',
    description: 'Mudanya ve sahil kesiminde deneyimli ekibimizle mobil akü hizmeti veriyoruz.',
    neighborhoods: [
      'Merkez', 'Güzelyalı', 'Altıntaş', 'Mütareke', 'Zeytlinlik',
      'Balabancık', 'Bağlarbaşı', 'Esence'
    ],
    serviceHighlights: [
      'Garantili ve dayanıklı aküler',
      'Nakit ve kart ile ödeme',
      'Profesyonel montaj ekibi',
      '7/24 hizmet',
    ],
  }
];

export default function BolgeDetay({ region }) {
  return (
    <Layout
      seo={{
        title: `${region.name} Akü Servisi — Yerinde Montaj | Akücü Birol`,
        description: `${region.name} bölgesinde 7/24 mobil akü servisi. Tüm mahallelere ücretsiz yerinde montaj. Hemen arayın: +90 533 771 76 16.`,
        canonical: `/bolgeler/${region.slug}`,
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/bolgeler" className="text-accent hover:text-yellow-400 transition-colors">
                ← Tüm Bölgeler
              </Link>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {region.name} Akü Servisi
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              {region.description}
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="inline-flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>7/24 Hizmet</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ücretsiz Montaj</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{region.neighborhoods.length} Mahalle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Kolon */}
            <div className="lg:col-span-2 space-y-8">
              {/* Mahalleler */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Hizmet Verdiğimiz Mahalleler
                </h2>
                <p className="text-textMuted mb-6">
                  {region.name} ilçesindeki tüm mahallelere 7/24 mobil akü servisi sunuyoruz.
                  Aşağıdaki mahalleler başta olmak üzere tüm bölgeye hizmet vermekteyiz.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {region.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-textDark">{region.name} {neighborhood} Akü Servisi</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bölgeye Özel Hizmetler */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  {region.name} Bölgesine Özel Hizmetler
                </h2>
                <ul className="space-y-4">
                  {region.serviceHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-textDark">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Neden Biz */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Neden Akücü Birol?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Hızlı Ulaşım', value: '~15 dakika' },
                    { label: 'Garanti Süresi', value: '3 yıl (Bazı modeller)' },
                    { label: 'Çalışma Saati', value: '7/24' },
                    { label: 'Ödeme', value: 'Nakit/Kart' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <span className="text-textMuted">{item.label}:</span>
                      <span className="font-semibold text-accent">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ Kolon - CTA */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24 space-y-6">
                <h3 className="font-heading font-semibold text-xl text-textDark">
                  Hemen Sipariş Verin
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+905337717616"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-accent text-primary font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hemen Ara
                  </a>

                  <a
                    href="https://wa.me/905337717616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-success text-white font-semibold text-lg hover:bg-green-500 transition-all hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>

                  <Link
                    href="/akuler"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    Akü Modelleri
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-3 text-sm text-textMuted">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ücretsiz yerinde montaj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>3 yıl tam garanti (Bazı akü modellerinde geçerli.)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Orijinal ürün garantisi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Bölgeler */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-semibold text-2xl text-center text-textDark mb-8">
            Diğer Hizmet Bölgelerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {regionsData
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/bolgeler/${r.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background text-textDark hover:bg-accent hover:text-primary font-medium transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {r.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = regionsData.map((region) => ({
    params: { slug: region.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const region = regionsData.find((r) => r.slug === params.slug);

  if (!region) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      region,
    },
  };
}

