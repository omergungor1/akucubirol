import Layout from '../../components/Layout';
import Accordion from '../../components/Accordion';

// Akü verilerini merkezi bir yerde tanımla
const akuData = [
  {
    slug: '60-amper',
    title: '60 Amper Akü',
    amper: '60',
    description: 'Küçük ve orta boy araçlar için ideal ekonomik akü çözümü',
    longDescription: '60 amper akü, kompakt ve orta boy araçlar için mükemmel bir seçimdir. Şehir içi kullanımda yüksek performans sunar ve ekonomik bir çözümdür. Soğuk havada başlatma gücü ve uzun ömrü ile öne çıkar.',
    price: '2.500',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj hizmeti',
      'Tüm güvenilir markalar mevcut',
      'Kompakt araçlar için ideal boyut',
      'Düşük enerji tüketimi',
      'Soğuk hava performansı',
    ],
    specs: {
      voltage: '12V',
      capacity: '60Ah',
      cca: '540A',
      dimensions: '242 x 175 x 190 mm',
      weight: '15.5 kg',
    },
    suitableFor: [
      'Küçük binek araçlar',
      'Şehir içi kullanım araçları',
      'Kompakt otomobiller',
      'Hafif ticari araçlar',
    ],
  },
  {
    slug: '72-amper',
    title: '72 Amper Akü',
    amper: '72',
    description: 'En popüler akü modeli, çoğu araç için uygun',
    longDescription: '72 amper akü, Türkiye\'de en çok tercih edilen akü kapasitesidir. Orta ve büyük boy binek araçlar için mükemmel performans sunar. Start-Stop teknolojili versiyonları da mevcuttur.',
    price: '3.000',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Start-Stop teknolojisi opsiyonu',
      'En çok tercih edilen model',
      'Yüksek performans',
      'Uzun ömür garantisi',
    ],
    specs: {
      voltage: '12V',
      capacity: '72Ah',
      cca: '680A',
      dimensions: '278 x 175 x 190 mm',
      weight: '17.5 kg',
    },
    suitableFor: [
      'Orta boy binek araçlar',
      'Sedan otomobiller',
      'Çoğu günlük kullanım aracı',
      'Start-Stop sistemli araçlar',
    ],
  },
  {
    slug: '90-amper',
    title: '90 Amper Akü',
    amper: '90',
    description: 'Büyük hacimli araçlar ve SUV\'lar için güçlü akü',
    longDescription: '90 amper akü, SUV, 4x4 ve büyük hacimli araçlar için tasarlanmıştır. Yüksek enerji ihtiyacı olan araçlar için ideal bir seçimdir. Off-road kullanımlarda da güvenle tercih edilebilir.',
    price: '3.800',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Yüksek performans kapasitesi',
      'SUV ve büyük araçlar için',
      'Off-road kullanıma uygun',
      'Ekstra güç rezervi',
    ],
    specs: {
      voltage: '12V',
      capacity: '90Ah',
      cca: '800A',
      dimensions: '353 x 175 x 190 mm',
      weight: '22 kg',
    },
    suitableFor: [
      'SUV araçlar',
      '4x4 jeep araçlar',
      'Büyük binek otomobiller',
      'Pick-up araçlar',
    ],
  },
  {
    slug: '105-amper',
    title: '105 Amper Akü',
    amper: '105',
    description: 'Ticari araçlar ve minibüsler için güçlü ve dayanıklı akü',
    longDescription: '105 amper akü, ticari araçlar ve minibüsler için özel olarak tasarlanmış güçlü bir akü modelidir. Yoğun kullanım ve uzun mesafe yolculuklar için idealdir.',
    price: '4.500',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Ticari araçlar için özel',
      'Uzun ömürlü yapı',
      'Yoğun kullanıma dayanıklı',
      'Güçlü başlatma gücü',
    ],
    specs: {
      voltage: '12V',
      capacity: '105Ah',
      cca: '950A',
      dimensions: '353 x 175 x 190 mm',
      weight: '25 kg',
    },
    suitableFor: [
      'Minibüsler',
      'Hafif ticari araçlar',
      'Panel vanlar',
      'Yolcu taşıma araçları',
    ],
  },
  {
    slug: '135-amper',
    title: '135 Amper Akü',
    amper: '135',
    description: 'Ağır ticari araçlar için yüksek kapasiteli profesyonel akü',
    longDescription: '135 amper akü, ağır ticari araçlar ve büyük iş makineleri için tasarlanmış profesyonel seviye bir üründür. Ekstrem koşullarda bile güvenilir performans sunar.',
    price: '5.800',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Ağır hizmet tipi yapı',
      'Profesyonel kullanım',
      'Ekstrem dayanıklılık',
      'Endüstriyel kalite',
    ],
    specs: {
      voltage: '12V',
      capacity: '135Ah',
      cca: '1000A',
      dimensions: '513 x 189 x 223 mm',
      weight: '35 kg',
    },
    suitableFor: [
      'Ağır ticari araçlar',
      'Küçük kamyonlar',
      'Otobüsler',
      'İş makineleri',
    ],
  },
  {
    slug: '180-amper',
    title: '180 Amper Akü',
    amper: '180',
    description: 'Kamyon ve ağır vasıta için extra güçlü akü',
    longDescription: '180 amper akü, kamyonlar ve ağır vasıtalar için özel olarak üretilmiş maksimum güç sunan bir üründür. Uzun mesafe nakliye ve ağır yük taşımacılığı için idealdir.',
    price: '7.500',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Kamyon ve ağır vasıta',
      'Endüstriyel kalite',
      'Maksimum dayanıklılık',
      'Uzun mesafe uyumlu',
    ],
    specs: {
      voltage: '12V',
      capacity: '180Ah',
      cca: '1100A',
      dimensions: '513 x 223 x 223 mm',
      weight: '45 kg',
    },
    suitableFor: [
      'Kamyonlar',
      'Ağır vasıta araçlar',
      'Nakliye araçları',
      'Büyük otobüsler',
    ],
  },
  {
    slug: '200-amper',
    title: '200 Amper Akü',
    amper: '200',
    description: 'Büyük kamyon ve iş makineleri için maksimum güç',
    longDescription: '200 amper akü, büyük kamyonlar ve ağır iş makineleri için tasarlanmış en güçlü akü modellerinden biridir. Endüstriyel uygulamalarda üstün performans sağlar.',
    price: '8.500',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'İş makineleri için ideal',
      'Maksimum güç çıkışı',
      'Endüstriyel dayanıklılık',
      'Yoğun kullanım garantisi',
    ],
    specs: {
      voltage: '12V',
      capacity: '200Ah',
      cca: '1200A',
      dimensions: '518 x 240 x 242 mm',
      weight: '52 kg',
    },
    suitableFor: [
      'Büyük kamyonlar',
      'İş makineleri',
      'Ekskavatörler',
      'Yük taşıma araçları',
    ],
  },
  {
    slug: '225-amper',
    title: '225 Amper Akü',
    amper: '225',
    description: 'Ağır iş makineleri ve büyük kamyonlar için ultra güçlü akü',
    longDescription: '225 amper akü, ağır iş makineleri ve büyük kamyonlar için ultra güçlü bir çözümdür. Profesyonel inşaat ve madencilik sektörlerinde tercih edilir.',
    price: '9.800',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Ağır iş makineleri',
      'Ultra güçlü yapı',
      'Profesyonel seviye',
      'Maximum kapasite',
    ],
    specs: {
      voltage: '12V',
      capacity: '225Ah',
      cca: '1300A',
      dimensions: '518 x 240 x 242 mm',
      weight: '58 kg',
    },
    suitableFor: [
      'Ağır iş makineleri',
      'Büyük kamyonlar',
      'İnşaat makineleri',
      'Madencilik araçları',
    ],
  },
  {
    slug: '240-amper',
    title: '240 Amper Akü',
    amper: '240',
    description: 'Endüstriyel araçlar ve özel uygulamalar için en güçlü akü',
    longDescription: '240 amper akü, endüstriyel araçlar ve özel uygulamalar için tasarlanmış en yüksek kapasiteli akü modelimizdir. Ekstrem koşullarda dahi maksimum performans garantisi sunar.',
    price: '11.000',
    features: [
      '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
      'Ücretsiz yerinde montaj',
      'Endüstriyel kullanım',
      'En yüksek kapasite',
      'Özel uygulamalar',
      'Maksimum dayanıklılık',
    ],
    specs: {
      voltage: '12V',
      capacity: '240Ah',
      cca: '1400A',
      dimensions: '518 x 273 x 242 mm',
      weight: '65 kg',
    },
    suitableFor: [
      'Endüstriyel araçlar',
      'Özel uygulamalar',
      'Ağır madencilik araçları',
      'Deniz taşıtları',
    ],
  },
];

export default function AkuDetay({ aku }) {
  const faqItems = [
    {
      title: `${aku.amper} amper akü hangi araçlar için uygundur?`,
      content: `${aku.amper} amper akü şu araçlar için idealdir: ${aku.suitableFor.join(', ')}. Aracınızın akü kapasitesinden emin değilseniz bizimle iletişime geçebilirsiniz.`,
    },
    {
      title: 'Montaj nasıl yapılır?',
      content: 'Akü montajımız tamamen ücretsizdir ve aracınızın bulunduğu yerde gerçekleştirilir. Sipariş sonrası ortalama 30 dakika içinde yerinize ulaşıyoruz. Profesyonel ekibimiz eski aküyü söküp yeni aküyü monte eder ve test eder.',
    },
    {
      title: 'Garanti koşulları nelerdir?',
      content: '3 yıl tam garanti (Bazı akü modellerinde geçerli.) sunuyoruz. Garanti süresi içinde akünüzde herhangi bir sorun oluşması durumunda ücretsiz değişim yapılır. Garanti belgesi teslimat sırasında verilir.',
    },
    {
      title: 'Ödeme nasıl yapılır?',
      content: 'Nakit, kredi kartı ve banka kartı ile ödeme alıyoruz. Ödeme, akünüz yerinde monte edildikten sonra yapılır. Fatura ve garanti belgesi anında teslim edilir.',
    },
    {
      title: 'Eski akümü ne olur?',
      content: 'Eski akünüzü bizden alabilir veya biz çevre dostu bir şekilde geri dönüşüme gönderebiliriz. Eski akü için ek bir ücret talep etmiyoruz.',
    },
  ];

  return (
    <Layout
      seo={{
        title: `${aku.title} Fiyatları ve Özellikleri — Akücü Birol | Bursa`,
        description: `${aku.title} - ${aku.description}. 3 yıl garanti, ücretsiz yerinde montaj. ${aku.price}₺'den başlayan fiyatlarla. Hemen arayın: +90 533 771 76 16.`,
        canonical: `/akuler/${aku.slug}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": aku.title,
          "description": aku.description,
          "offers": {
            "@type": "Offer",
            "price": aku.price,
            "priceCurrency": "TRY",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Akücü Birol"
            }
          },
          "brand": {
            "@type": "Brand",
            "name": "Akücü Birol"
          }
        },
      }}
    >
      {/* Hero/Başlık */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <a href="/akuler" className="text-accent hover:text-yellow-400 transition-colors">
                ← Tüm Modeller
              </a>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {aku.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              {aku.longDescription}
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent text-accent">
                <span className="font-semibold">{aku.price}₺</span>
                <span className="text-sm">'den başlayan fiyatlarla</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stokta Mevcut</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sol Kolon - Detaylar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Özellikler */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Ürün Özellikleri
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aku.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-textDark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teknik Özellikler */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Teknik Özellikler
                </h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(aku.specs).map(([key, value]) => {
                    const labels = {
                      voltage: 'Voltaj',
                      capacity: 'Kapasite',
                      cca: 'Soğuk Çalıştırma Gücü',
                      dimensions: 'Boyutlar',
                      weight: 'Ağırlık',
                    };
                    return (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <dt className="font-medium text-textMuted">{labels[key]}:</dt>
                        <dd className="font-semibold text-textDark">{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>

              {/* Uygun Araçlar */}
              <div className="card">
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Hangi Araçlar İçin Uygun?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aku.suitableFor.map((vehicle, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-textDark">{vehicle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SSS */}
              <div>
                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  Sık Sorulan Sorular
                </h2>
                <Accordion items={faqItems} />
              </div>
            </div>

            {/* Sağ Kolon - Sipariş Formu */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24 space-y-6">
                <h3 className="font-heading font-semibold text-xl text-textDark">
                  Hemen Sipariş Verin
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-textMuted">Fiyat:</span>
                      <span className="font-bold text-2xl text-accent">{aku.price}₺</span>
                    </div>
                    <p className="text-xs text-textMuted">*Fiyatlar markaya göre değişebilir</p>
                  </div>

                  <div className="space-y-3">
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
                  </div>
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
                    <span>7/24 hizmet</span>
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
    </Layout>
  );
}

// Static Site Generation için paths
export async function getStaticPaths() {
  const paths = akuData.map((aku) => ({
    params: { slug: aku.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Static Site Generation için props
export async function getStaticProps({ params }) {
  const aku = akuData.find((item) => item.slug === params.slug);

  if (!aku) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      aku,
    },
  };
}

