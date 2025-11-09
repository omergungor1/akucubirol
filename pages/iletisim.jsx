import Layout from '../components/Layout';

export default function Iletisim() {
  return (
    <Layout
      seo={{
        title: "İletişim — Akücü Birol | Bursa Mobil Akü Servisi",
        description: "Akücü Birol ile iletişime geçin. Telefon: +90 533 771 76 16. Bursa genelinde 7/24 mobil akü servisi ve yerinde montaj hizmeti.",
        canonical: "/iletisim",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              7/24 hizmet için hemen bizi arayın. Bursa'nın her noktasına
              mobil akü servisi ile yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve CTA */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol: İletişim Kartları */}
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                Hemen Ulaşın
              </h2>

              {/* Telefon */}
              <div className="card group hover:border-accent">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-textDark mb-2">
                      Telefon
                    </h3>
                    <a
                      href="tel:+905337717616"
                      className="text-accent hover:text-yellow-600 font-semibold text-xl block mb-1 transition-colors"
                    >
                      +90 533 771 76 16
                    </a>
                    <p className="text-sm text-textMuted">
                      7/24 Hizmet • Hemen Arayın
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card group hover:border-success">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <svg className="w-7 h-7 text-success" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-textDark mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/905337717616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success hover:text-green-600 font-semibold text-lg block mb-1 transition-colors"
                    >
                      Mesaj Gönder
                    </a>
                    <p className="text-sm text-textMuted">
                      Hızlı İletişim • Anında Yanıt
                    </p>
                  </div>
                </div>
              </div>

              {/* Adres */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-textDark mb-2">
                      Adres
                    </h3>
                    <p className="text-textDark mb-1">
                      Bağlarbaşı, 1. Hürriyet Cd. No:156 D:c
                    </p>
                    <p className="text-sm text-textMuted">
                      16160 Osmangazi/Bursa
                    </p>
                    <p className="text-xs text-textMuted mt-2">
                      Hizmet Bölgesi: Nilüfer • Osmangazi • Mudanya
                    </p>
                  </div>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-textDark mb-2">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-textDark font-semibold mb-1">
                      7 Gün 24 Saat
                    </p>
                    <p className="text-sm text-textMuted">
                      Hafta içi, hafta sonu ve resmi tatillerde kesintisiz hizmet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: CTA ve Özellikler */}
            <div className="space-y-6">
              <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                Hemen Sipariş Verin
              </h2>

              {/* CTA Kartı */}
              <div className="card bg-gradient-to-br from-accent to-yellow-400 border-none">
                <div className="text-center py-8">
                  <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                    Acil Akü İhtiyacınız mı Var?
                  </h3>
                  <p className="text-primary/80 mb-6">
                    Hemen arayın, 15 dakika içinde yanınızdayız!
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+905337717616"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all"
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
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-success text-white font-semibold text-lg hover:bg-green-500 hover:scale-105 transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp ile Yaz
                    </a>
                  </div>
                </div>
              </div>

              {/* Avantajlar */}
              <div className="card">
                <h3 className="font-heading font-semibold text-xl text-textDark mb-4">
                  Neden Bizi Tercih Etmelisiniz?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Ücretsiz yerinde montaj',
                    '3 yıl tam garanti (Bazı akü modellerinde geçerli.)',
                    'Hızlı teslimat (ortalama 15 dakika)',
                    'Orijinal markalar',
                    'Uygun fiyatlar',
                    'Profesyonel ekip',
                    'Eski akü geri alımı',
                    'Nakit ve kart ile ödeme',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-textDark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harita Bölümü (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-semibold text-2xl text-center text-textDark mb-8">
            Hizmet Bölgelerimiz
          </h2>
          <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 text-center">
            <svg className="w-24 h-24 mx-auto text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 className="font-heading font-semibold text-xl text-textDark mb-2">
              Bursa Genelinde Hizmetinizdeyiz
            </h3>
            <p className="text-textMuted mb-4">
              Nilüfer, Osmangazi, Mudanya ve çevre ilçelerde
              7/24 mobil akü servisi
            </p>
            <a
              href="/bolgeler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-yellow-400 transition-all hover:scale-105"
            >
              Tüm Bölgeleri Görüntüle
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

