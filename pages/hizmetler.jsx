import Layout from '../components/Layout';

export default function Hizmetler() {
  const services = [
    {
      id: 'yerinde-montaj',
      title: 'Yerinde Akü Montajı',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Nerede olursanız olun, akünüz aracınızın bulunduğu yerde profesyonel ekibimiz tarafından değiştirilir.',
      features: [
        '7/24 hızlı servis',
        'Ortalama 30 dakikada adresinizde',
        'Profesyonel montaj ekibi',
        'Tüm araç tiplerine uygun',
        'Eski akü geri alımı',
        'Ücretsiz kontrol ve test',
      ],
    },
    {
      id: 'mobil-servis',
      title: 'Mobil Akü Servisi',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Aküsü biten araçlar için anında yol yardımı. Aracınız nerede kalırsa kalsın yanınızdayız.',
      features: [
        'Acil durum müdahalesi',
        'Takviye kablosu ile start',
        'Yerinde akü değişimi',
        'Şarj ve test hizmeti',
        'Bursa geneli hizmet',
        'Hızlı çözüm garantisi',
      ],
    },
    {
      id: 'start-stop',
      title: 'Start-Stop Aküler',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Start-Stop teknolojili araçlar için özel olarak üretilmiş yüksek performanslı aküler.',
      features: [
        'AGM ve EFB teknolojisi',
        'Yüksek döngü ömrü',
        'Hızlı şarj kabiliyeti',
        'Orijinal ekipman kalitesi',
        'Tüm markalar mevcut',
        'Uzun garanti süresi',
      ],
    },
    {
      id: 'agir-vasita',
      title: 'Ağır Vasıta Aküleri',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: 'Kamyon, otobüs, iş makineleri ve ağır vasıtalar için özel güçlendirilmiş aküler.',
      features: [
        'Yüksek kapasiteli modeller',
        'Endüstriyel dayanıklılık',
        'Ağır çalışma koşullarına uygun',
        '180A - 240A arası',
        'Profesyonel montaj',
        'Ticari araç garantisi',
      ],
    },
  ];

  return (
    <Layout
      seo={{
        title: "Hizmetlerimiz — Mobil Akü Servisi & Yerinde Montaj | Akücü Birol",
        description: "7/24 mobil akü servisi, yerinde montaj, Start-Stop aküler ve ağır vasıta aküleri. Bursa genelinde hızlı ve güvenilir hizmet. Hemen arayın: +90 533 771 76 16.",
        canonical: "/hizmetler",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Profesyonel ekibimiz ve kaliteli hizmet anlayışımızla 7/24 yanınızdayız. 
              Garantili akü satışı ve yerinde montaj hizmetleriyle hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* İkon ve Başlık */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-accent/10 text-accent mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-textDark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-textMuted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="tel:+905337717616"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-yellow-400 transition-all hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hemen Arayın
                  </a>
                </div>

                {/* Özellikler */}
                <div className="flex-1">
                  <div className="card">
                    <h3 className="font-heading font-semibold text-xl text-textDark mb-4">
                      Özellikler
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-textDark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-textDark mb-4">
              Neden Akücü Birol?
            </h2>
            <p className="text-lg text-textMuted">
              Yılların deneyimi ve müşteri memnuniyeti odaklı hizmet anlayışımızla fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '7/24',
                label: 'Kesintisiz Hizmet',
                description: 'Gece gündüz her an yanınızdayız',
              },
              {
                number: '3 Yıl',
                label: 'Garanti',
                description: 'Tüm akülerimizde tam garanti',
              },
              {
                number: '30 Dk',
                label: 'Hızlı Servis',
                description: 'Ortalama varış süresi',
              },
              {
                number: '%100',
                label: 'Orijinal Ürün',
                description: 'Garantili güvenilir markalar',
              },
            ].map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="font-heading font-semibold text-lg text-textDark mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-textMuted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Hemen Hizmet Alın!
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              Bursa'nın her noktasına 7/24 mobil akü servisi. Bir telefon kadar yakınız.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905337717616"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all"
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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

