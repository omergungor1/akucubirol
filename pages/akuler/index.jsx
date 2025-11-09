import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

export default function AkuModelleri() {
  const products = [
    {
      title: '60 Amper Akü',
      amper: '60',
      description: 'Küçük ve orta boy araçlar için ideal ekonomik akü çözümü. Şehir içi kullanıma uygundur.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Tüm markalar mevcut',
        'Kompakt araçlar için ideal',
      ],
      price: '2.500',
      slug: '60-amper',
    },
    {
      title: '72 Amper Akü',
      amper: '72',
      description: 'En popüler akü modeli, çoğu araç için uygun. Mükemmel performans ve uzun ömür.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Start-Stop teknolojisi',
        'En çok tercih edilen model',
      ],
      price: '3.000',
      slug: '72-amper',
    },
    {
      title: '90 Amper Akü',
      amper: '90',
      description: 'Büyük hacimli araçlar ve SUV\'lar için güçlü akü. Yüksek performans garantisi.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Yüksek performans',
        'SUV ve büyük araçlar için',
      ],
      price: '3.800',
      slug: '90-amper',
    },
    {
      title: '105 Amper Akü',
      amper: '105',
      description: 'Ticari araçlar ve minibüsler için güçlü ve dayanıklı akü çözümü.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Ticari araçlar için',
        'Uzun ömürlü yapı',
      ],
      price: '4.500',
      slug: '105-amper',
    },
    {
      title: '135 Amper Akü',
      amper: '135',
      description: 'Ağır ticari araçlar için yüksek kapasiteli profesyonel akü.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Ağır hizmet tipi',
        'Profesyonel kullanım',
      ],
      price: '5.800',
      slug: '135-amper',
    },
    {
      title: '180 Amper Akü',
      amper: '180',
      description: 'Kamyon ve ağır vasıta için extra güçlü akü. Endüstriyel seviye performans.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Kamyon ve ağır vasıta',
        'Endüstriyel kalite',
      ],
      price: '7.500',
      slug: '180-amper',
    },
    {
      title: '200 Amper Akü',
      amper: '200',
      description: 'Büyük kamyon ve iş makineleri için maksimum güç sağlayan akü.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'İş makineleri için',
        'Maksimum güç',
      ],
      price: '8.500',
      slug: '200-amper',
    },
    {
      title: '225 Amper Akü',
      amper: '225',
      description: 'Ağır iş makineleri ve büyük kamyonlar için ultra güçlü akü.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Ağır iş makineleri',
        'Ultra güçlü yapı',
      ],
      price: '9.800',
      slug: '225-amper',
    },
    {
      title: '240 Amper Akü',
      amper: '240',
      description: 'Endüstriyel araçlar ve özel uygulamalar için en güçlü akü modeli.',
      features: [
        '3 yıl garanti',
        'Ücretsiz yerinde montaj',
        'Endüstriyel kullanım',
        'En yüksek kapasite',
      ],
      price: '11.000',
      slug: '240-amper',
    },
  ];

  return (
    <Layout
      seo={{
        title: "Akü Modelleri ve Fiyatları — Akücü Birol | Bursa",
        description: "60A'den 240A'e kadar tüm akü modelleri. 3 yıl garantili, ücretsiz yerinde montaj. Orijinal markalar: İnci, Varta, Mutlu, Bosch. Hemen arayın: +90 533 771 76 16.",
        canonical: "/akuler",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Akü <span className="text-accent">Modelleri</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              60 amperden 240 ampere kadar tüm akü modellerimiz 3 yıl garantili ve 
              ücretsiz yerinde montaj ile hizmetinizde. Orijinal markalarla çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Filtre/Info Bar */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-textMuted text-sm">
              <span className="font-semibold text-textDark">{products.length} farklı model</span> akü bulunmaktadır
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="tel:+905337717616"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-semibold hover:bg-yellow-400 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Fiyat Bilgisi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Listesi */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Markalar */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-semibold text-2xl text-center text-textDark mb-6">
            Çalıştığımız Markalar
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['İnci Akü', 'Varta Akü', 'Mutlu Akü', 'Bosch Akü', 'Turbo Akü', 'Energy Akü', 'Mega DC Akü'].map((brand) => (
              <div key={brand} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9zM12 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm-3 1a1 1 0 012 0v4a1 1 0 11-2 0v-4zm6 0a1 1 0 012 0v4a1 1 0 11-2 0v-4z"/>
                  </svg>
                </div>
                <p className="font-medium text-sm text-primary">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Aracınıza Uygun Akü İçin Hemen Arayın
            </h2>
            <p className="text-gray-200 mb-6">
              Hangi akünün aracınıza uygun olduğundan emin değil misiniz? 
              Uzman ekibimiz size yardımcı olacaktır.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905337717616"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-primary font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-success text-white font-semibold text-lg hover:bg-green-500 transition-all hover:scale-105"
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

