import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout
      seo={{
        title: "Sayfa Bulunamadı — Akücü Birol",
        description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya akü modellerimize göz atın.",
        noindex: true,
      }}
    >
      <section className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 İkonu */}
            <div className="mb-8">
              <svg
                className="w-32 h-32 mx-auto text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Başlık */}
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-4">
              404
            </h1>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-textDark mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-lg text-textMuted mb-8">
              Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>

            {/* Hızlı Linkler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link
                href="/"
                className="card group hover:border-accent cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-textDark group-hover:text-accent transition-colors">
                      Ana Sayfa
                    </div>
                    <div className="text-sm text-textMuted">
                      Başlangıç sayfası
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/akuler"
                className="card group hover:border-accent cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9zM12 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm-3 1a1 1 0 012 0v4a1 1 0 11-2 0v-4zm6 0a1 1 0 012 0v4a1 1 0 11-2 0v-4z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-textDark group-hover:text-accent transition-colors">
                      Akü Modelleri
                    </div>
                    <div className="text-sm text-textMuted">
                      Tüm modeller
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/hizmetler"
                className="card group hover:border-accent cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-textDark group-hover:text-accent transition-colors">
                      Hizmetler
                    </div>
                    <div className="text-sm text-textMuted">
                      Sunduğumuz hizmetler
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="/iletisim"
                className="card group hover:border-accent cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-textDark group-hover:text-accent transition-colors">
                      İletişim
                    </div>
                    <div className="text-sm text-textMuted">
                      Bize ulaşın
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="card bg-accent border-none">
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                Yardıma mı İhtiyacınız Var?
              </h3>
              <p className="text-primary/80 mb-6">
                Aradığınızı bulamadıysanız hemen bizi arayın, size yardımcı olalım!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+905337717616"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0533 771 76 16
                </a>

                <a
                  href="https://wa.me/905337717616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-success text-white font-semibold hover:bg-green-500 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
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

