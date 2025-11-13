import Layout from '../components/Layout';

export default function AkuYolYardim() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Akücü Birol - Akü Yol Yardım",
        "image": "https://akucubirol.com/logo.png",
        "description": "Yolda kaldınız mı? Akü yol yardım hizmeti ile hızlı çözüm. Nilüfer, Osmangazi, Mudanya'da mobil akü servisi. Hemen ara: 0533 771 76 16.",
        "telephone": "+905337717616",
        "email": "info@akucubirol.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bağlarbaşı, 1. Hürriyet Cd. No:156 D:c",
            "addressLocality": "Osmangazi",
            "addressRegion": "Bursa",
            "postalCode": "16160",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.23176547146991",
            "longitude": "28.984605376616667"
        },
        "url": "https://akucubirol.com/aku-yol-yardim",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Akü Yol Yardım Hizmeti",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Yolda Akü Değişimi"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobil Akü Yol Yardım"
                    }
                }
            ]
        }
    };

    return (
        <Layout
            seo={{
                title: "Akü Yol Yardım – Yolda Kaldınız mı? Hızlı Çözüm | Akücü Birol",
                description: "Yolda kaldınız, aracınız çalışmıyor mu? Akü yol yardım hizmeti ile 15 dakikada yanınızdayız. Nilüfer, Osmangazi, Mudanya'da mobil akü servisi. Hemen ara: 0533 771 76 16.",
                canonical: "/aku-yol-yardim",
                jsonLd: jsonLd,
            }}
        >
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                            Akü Yol Yardım – Yolda Kaldınız mı? Hızlı Çözüm
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                            Yolda kaldınız, aracınız çalışmıyor mu?
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                            <strong className="text-accent">Akü Yol Yardım Birol</strong>, yolda kaldığınızda hemen yanınızdayız. Nilüfer, Osmangazi ve Mudanya genelinde <strong>mobil akü yol yardım hizmeti</strong> veriyoruz. Aracınızın bulunduğu yere geliyoruz, <strong>akünüzü değiştiriyoruz</strong>. <strong>Ücretsiz montaj</strong> ve <strong>garantili aküler</strong> ile hizmet veriyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a
                                href="tel:+905337717616"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl bg-accent text-primary font-bold text-base sm:text-lg shadow-2xl hover:bg-yellow-400 hover:scale-105 transition-all duration-200 active:scale-95"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="hidden sm:inline">Yolda Kaldıysanız Hemen Ara — </span>
                                <span>0533 771 76 16</span>
                            </a>
                            <a
                                href="https://wa.me/905337717616"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl bg-success text-white font-semibold text-base sm:text-lg shadow-xl hover:bg-green-500 hover:scale-105 transition-all duration-200 active:scale-95"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span className="hidden sm:inline">WhatsApp — </span>
                                <span>0533 771 76 16</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Öne Çıkan Bilgi */}
            <section className="py-8 bg-accent">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-primary font-semibold text-lg">
                            🚗 Yolda kaldınız mı? Hemen ara! • ⚡ 15 dakikada yanınızdayız • ✅ Ücretsiz montaj • 🔋 Garantili aküler
                        </p>
                    </div>
                </div>
            </section>

            {/* Ana İçerik */}
            <section className="py-16 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Sol Kolon */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hizmet Açıklaması */}
                            <div className="card">
                                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                                    Akü Yol Yardım ile Yolda Kaldığınızda Yanınızdayız
                                </h2>
                                <div className="space-y-4 text-textMuted leading-relaxed">
                                    <p>
                                        <strong className="text-textDark">Akü yol yardım</strong> hizmetimiz ile yolda kaldığınızda, aracınız çalışmadığında hemen yanınızdayız. <strong className="text-textDark">Yolda akü değişimi</strong> ve <strong>mobil akü yol yardım</strong> hizmeti ile Nilüfer, Osmangazi ve Mudanya bölgelerinde hizmet veriyoruz.
                                    </p>
                                    <p>
                                        <strong className="text-textDark">Yolda kaldınız</strong> durumunda hemen arayın, ortalama <strong>15 dakika içinde</strong> bulunduğunuz yere ulaşıyoruz. <strong>Yerinde akü değişimi</strong> ve <strong>ücretsiz akü montajı</strong> ile aracınızı çekiciye yüklemeye gerek yok. Bulunduğunuz yerde akünüzü değiştiriyoruz.
                                    </p>
                                    <p>
                                        Tüm akü markaları stoklarımızda mevcuttur. <strong className="text-textDark">İnci Akü</strong>, <strong>Varta Akü</strong>, <strong>Mutlu Akü</strong>, <strong>Bosch Akü</strong> ve diğer tüm markalar için <strong>oto akü fiyatları</strong> hakkında bilgi alabilirsiniz. Tüm akülerimiz <strong>garantili</strong> ve bazı modellerde <strong>3 yıl garanti</strong> sunuyoruz.
                                    </p>
                                </div>
                            </div>

                            {/* Hizmet Özellikleri */}
                            <div className="card">
                                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                                    Akü Yol Yardım Özellikleri
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { icon: '🚗', title: 'Yolda Akü Değişimi', desc: 'Yolda kaldığınızda hemen yanınızdayız' },
                                        { icon: '⚡', title: '15 Dakikada Yanınızda', desc: 'Ortalama 15 dakikada bulunduğunuz yere ulaşıyoruz' },
                                        { icon: '✅', title: 'Ücretsiz Montaj', desc: 'Montaj ücreti yok' },
                                        { icon: '🔋', title: 'Garantili Aküler', desc: 'Tüm aküler garantili' },
                                        { icon: '📞', title: '7/24 Hizmet', desc: 'Gece gündüz kesintisiz' },
                                        { icon: '🛡️', title: 'Güvenilir Hizmet', desc: 'Yılların tecrübesi' },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                                            <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                                            <div>
                                                <h3 className="font-semibold text-textDark mb-1">{feature.title}</h3>
                                                <p className="text-sm text-textMuted">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Güven Unsurları */}
                            <div className="card">
                                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                                    Neden Akü Yol Yardım Birol?
                                </h2>
                                <ul className="space-y-3">
                                    {[
                                        'Yolda kaldığınızda hızlı müdahale',
                                        'Size en yakın servisimizi hemen yönlendiriyoruz',
                                        'Ortalama 15 dakikada bulunduğunuz yere ulaşım',
                                        'Ücretsiz yerinde akü montajı',
                                        'Tüm aküler garantili',
                                        'Tüm akü markaları stoklarımızda',
                                        'Orijinal ve yeni üretim aküler',
                                        'Profesyonel ve deneyimli ekip',
                                        'Gece gündüz kesintisiz hizmet'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-textDark">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* İletişim */}
                            <div className="card">
                                <h2 className="font-heading font-semibold text-2xl text-textDark mb-6">
                                    İletişim ve Adres Bilgileri
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold text-textDark mb-1">Telefon</h3>
                                                <a href="tel:+905337717616" className="text-accent hover:text-yellow-600 font-medium">
                                                    0533 771 76 16
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold text-textDark mb-1">WhatsApp</h3>
                                                <a href="https://wa.me/905337717616" target="_blank" rel="noopener noreferrer" className="text-success hover:text-green-600 font-medium">
                                                    0533 771 76 16
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold text-textDark mb-1">E-posta</h3>
                                                <a href="mailto:info@akucubirol.com" className="text-primary hover:text-blue-700 font-medium">
                                                    info@akucubirol.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-semibold text-textDark mb-1">Adres</h3>
                                                <p className="text-textMuted">
                                                    Bağlarbaşı, 1. Hürriyet Cd. No:156 D:c<br />
                                                    16160 Osmangazi/Bursa
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-textDark mb-4">Konum</h3>
                                        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.9791651696623!2d28.984605376616667!3d40.23176547146991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15673c93c6df%3A0x3de57414968365b9!2zQUvDnEPDnCBCxLBST0wgQkHEnkxBUkJBxZ5J!5e0!3m2!1str!2str!4v1763011331703!5m2!1str!2str"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Akücü Birol Konum"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Kolon - CTA */}
                        <div className="lg:col-span-1">
                            <div className="card sticky top-24 space-y-6">
                                <h3 className="font-heading font-semibold text-xl text-textDark">
                                    Hemen Bilgi Alın
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
                                        <span>Tüm aküler garantili</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Yolda hızlı müdahale</span>
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

