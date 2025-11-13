import Layout from '../components/Layout';

export default function Hakkimizda() {
  return (
    <Layout
      seo={{
        title: "Hakkımızda — Akücü Birol | Bursa'nın Güvenilir Akü Servisi",
        description: "Akücü Birol, yılların deneyimi ile Bursa'da güvenilir akü satışı ve yerinde montaj hizmeti sunmaktadır. 3 yıl garanti, orijinal ürünler ve profesyonel hizmet.",
        canonical: "/hakkimizda",
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Bursa'nın güvenilir akü servisi olarak, yılların deneyimi ve
              müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="font-heading font-bold text-3xl text-textDark">
                  Hikayemiz
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-textDark leading-relaxed mb-4">
                  <strong>Akücü Birol</strong> olarak, Bursa ve çevresinde yıllardır kaliteli
                  akü satışı ve profesyonel montaj hizmeti sunuyoruz. İşimize olan tutkumuz
                  ve müşterilerimizin memnuniyetini her şeyin üstünde tutma prensibimiz ile
                  sektörde güvenilir bir isim haline geldik.
                </p>

                <p className="text-textDark leading-relaxed mb-4">
                  Deneyimli ekibimiz ve geniş ürün yelpazemiz ile her türlü araç için uygun
                  akü çözümleri sunuyoruz. Küçük binek araçlardan ağır vasıta kamyonlara,
                  kompakt otomobillerden iş makinelerine kadar geniş bir yelpazede hizmet
                  veriyoruz.
                </p>

                <p className="text-textDark leading-relaxed">
                  7/24 kesintisiz hizmet anlayışımız ile gece gündüz demeden müşterilerimizin
                  yanındayız. Yerinde montaj hizmetimiz sayesinde aracınızın bulunduğu her
                  noktaya ulaşıyor ve sorunlarınızı hızlıca çözüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl text-textDark mb-4">
                Değerlerimiz
              </h2>
              <p className="text-lg text-textMuted">
                İşimizi yaparken bizi yönlendiren temel prensipler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Güvenilirlik',
                  description: 'Müşterilerimize her zaman orijinal ve garantili ürünler sunuyoruz. Sözümüz ve hizmetimiz arkasında duruyoruz.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Hız ve Verimlilik',
                  description: 'Müşterilerimizin zamanına değer veriyor, hızlı ve etkili çözümler sunuyoruz. Ortalama 15 dakikada adresinize ulaşıyoruz.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Müşteri Memnuniyeti',
                  description: 'Her müşterimize özel ilgi gösteriyor, ihtiyaçlarına en uygun çözümleri sunuyoruz. Memnuniyetiniz bizim önceliğimizdir.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Kalite',
                  description: 'Sadece güvenilir ve orijinal marka aküler ile çalışıyoruz. Kaliteden asla taviz vermiyoruz.',
                },
              ].map((value, index) => (
                <div key={index} className="card group hover:border-accent">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-textDark mb-2">
                        {value.title}
                      </h3>
                      <p className="text-textMuted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl mb-4">
                Rakamlarla Akücü Birol
              </h2>
              <p className="text-lg text-gray-200">
                Başarımızı gösteren bazı önemli rakamlar
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '7/24', label: 'Kesintisiz Hizmet' },
                { number: '3 Yıl', label: 'Garanti Süresi' },
                { number: '15 Dk', label: 'Ortalama Varış' },
                { number: '%100', label: 'Orijinal Ürün' },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garanti ve Hizmet Politikası */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Garanti */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-textDark">
                    Garanti Politikamız
                  </h3>
                </div>
                <ul className="space-y-2 text-textMuted">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>3 yıl tam garanti(Bazı akü modellerinde geçerli.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Garanti kapsamında ücretsiz değişim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Orijinal ürün garantisi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Resmi garanti belgesi</span>
                  </li>
                </ul>
              </div>

              {/* Hizmet Politikası */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-textDark">
                    Hizmet Anlayışımız
                  </h3>
                </div>
                <ul className="space-y-2 text-textMuted">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Müşteri memnuniyeti odaklı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Hızlı ve profesyonel servis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>Uygun ve şeffaf fiyatlandırma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span>7/24 kesintisiz destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Güvenilir Hizmet İçin Bizi Arayın
            </h2>
            <p className="text-lg text-primary/80 mb-8">
              3 yıl garantili aküler ve profesyonel montaj hizmeti için hemen iletişime geçin
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
                href="/iletisim"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all"
              >
                İletişim Sayfası
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    // Tamamen statik - sadece build zamanında render edilir
  };
}

