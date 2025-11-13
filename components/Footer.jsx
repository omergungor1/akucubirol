import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const akuModelleri = [
    { name: '60 Amper Akü', slug: '60-amper' },
    { name: '72 Amper Akü', slug: '72-amper' },
    { name: '90 Amper Akü', slug: '90-amper' },
    { name: '105 Amper Akü', slug: '105-amper' },
    { name: '135 Amper Akü', slug: '135-amper' },
  ];

  const hizmetler = [
    { name: 'Yerinde Montaj', href: '/hizmetler#yerinde-montaj' },
    { name: 'Mobil Akü Servisi', href: '/hizmetler#mobil-servis' },
    { name: 'Start-Stop Aküler', href: '/hizmetler#start-stop' },
    { name: 'Ağır Vasıta Aküleri', href: '/hizmetler#agir-vasita' },
  ];

  const bolgeler = [
    { name: 'Nilüfer', slug: 'nilufer' },
    { name: 'Osmangazi', slug: 'osmangazi' },
    { name: 'Mudanya', slug: 'mudanya' },
    { name: 'Yıldırım', slug: 'yildirim' },
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-20 lg:pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo ve İletişim */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <div className="relative w-10 h-10 rounded-lg bg-accent/90 p-1.5 group-hover:scale-110 group-hover:bg-accent transition-all flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Akücü Birol Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block font-heading font-bold text-xl">Akücü Birol</span>
                <span className="block text-accent text-xs">7/24 Yerinde Montaj</span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed">
              Bursa ve çevresine garantili akü satışı ve yerinde montaj hizmeti.
              3 yıl garantili aküler ile güvenli sürüş.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+905337717616"
                className="flex items-center gap-2 text-accent hover:text-yellow-400 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +90 533 771 76 16
              </a>

              <p className="text-sm text-gray-400">
                7/24 Hizmet
              </p>
            </div>
          </div>

          {/* Akü Modelleri */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-accent">
              Akü Modelleri
            </h3>
            <ul className="space-y-2">
              {akuModelleri.map((model) => (
                <li key={model.slug}>
                  <Link
                    href={`/akuler/${model.slug}`}
                    className="text-sm text-gray-300 hover:text-accent transition-colors"
                  >
                    {model.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/akuler"
                  className="text-sm text-accent hover:text-yellow-400 font-medium transition-colors"
                >
                  Tüm Modeller →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-accent">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2">
              {hizmetler.map((hizmet) => (
                <li key={hizmet.href}>
                  <Link
                    href={hizmet.href}
                    className="text-sm text-gray-300 hover:text-accent transition-colors"
                  >
                    {hizmet.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-heading font-semibold text-sm mb-3 text-white">
                Hizmet Bölgeleri
              </h4>
              <ul className="space-y-2">
                {bolgeler.map((bolge) => (
                  <li key={bolge.slug}>
                    <Link
                      href={`/bolgeler/${bolge.slug}`}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {bolge.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-accent">
              Kurumsal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="mt-6">
              <h4 className="font-heading font-semibold text-sm mb-3 text-white">
                Bizi Takip Edin
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/905337717616"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-success text-white hover:bg-green-500 transition-all hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Akücü Birol. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Bursa Akü Servisi</span>
              <span>•</span>
              <span>7/24 Hizmet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

