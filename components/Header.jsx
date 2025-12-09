import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü açıldığında scroll'u engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Akü Modelleri', href: '/akuler' },
    { name: 'Hizmetlerimiz', href: '/hizmetler' },
    { name: 'Bölgelerimiz', href: '/bolgeler' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-primary'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center">
                <div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-accent/90 p-1.5 group-hover:scale-110 group-hover:bg-accent transition-all">
                  <Image
                    src="/logo.png"
                    alt="Akücü Birol Logo"
                    fill
                    sizes="(max-width: 1024px) 32px, 40px"
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <div className="ml-2">
                  <span className="block text-white font-heading font-bold text-lg lg:text-xl leading-tight">
                    Akücü Birol
                  </span>
                  <span className="hidden sm:block text-accent text-xs font-medium">
                    7/24 Yerinde Montaj
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Ana navigasyon">
              {navigation.map((item) => {
                const isActive = router.pathname === item.href ||
                  (item.href !== '/' && router.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-white hover:text-accent hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+905337717616"
                aria-label="Telefon ile arayın"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-yellow-400 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0533 771 76 16</span>
              </a>

              <a
                href="https://wa.me/905337717616"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geçin"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-success text-white hover:bg-green-500 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Mobile CTA + Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:+905337717616"
                aria-label="Telefon ile arayın"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-primary hover:bg-yellow-400 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menüyü aç"
                aria-expanded={isMenuOpen}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <nav
          className={`absolute top-16 right-0 bottom-0 w-64 bg-primary shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          aria-label="Mobil navigasyon menüsü"
        >
          <div className="flex flex-col h-full py-6 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = router.pathname === item.href ||
                (item.href !== '/' && router.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-3 text-base font-medium transition-colors border-l-4 ${isActive
                    ? 'text-accent border-accent bg-accent/10'
                    : 'text-white border-transparent hover:border-accent hover:text-accent hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* WhatsApp Button in Mobile Menu */}
            <div className="mt-auto px-6 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/905337717616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-success text-white font-semibold hover:bg-green-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

