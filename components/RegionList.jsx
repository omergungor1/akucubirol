import React from 'react';
import Link from 'next/link';

export default function RegionList() {
  const regions = [
    {
      name: 'Nilüfer',
      slug: 'nilufer',
      description: 'Nilüfer ilçesi ve tüm mahallelerine hızlı akü servisi',
      neighborhoods: 12,
    },
    {
      name: 'Osmangazi',
      slug: 'osmangazi',
      description: 'Osmangazi bölgesine 7/24 yerinde akü montajı',
      neighborhoods: 18,
    },
    {
      name: 'Mudanya',
      slug: 'mudanya',
      description: 'Mudanya ve sahil kesiminde mobil akü hizmeti',
      neighborhoods: 8,
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        {/* Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-textDark mb-4">
            Hizmet Verdiğimiz <span className="text-accent">Bölgeler</span>
          </h2>
          <p className="text-lg text-textMuted">
            Bursa'nın her noktasına 7/24 mobil akü servisi ile hizmetinizdeyiz
          </p>
        </div>

        {/* Bölge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/bolgeler/${region.slug}`}
              className="card group hover:border hover:border-accent cursor-pointer"
            >
              {/* İkon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-xl text-textDark mb-2 group-hover:text-accent transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-sm text-textMuted mb-3">
                    {region.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-textMuted">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{region.neighborhoods} mahalle</span>
                  </div>
                </div>

                <svg
                  className="w-5 h-5 text-textMuted group-hover:text-accent group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-textMuted mb-4">
            Listelenen bölgeler dışında da hizmet veriyoruz. Detaylı bilgi için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+905337717616"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-yellow-400 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              En Yakın Servis
            </a>

            <Link
              href="/bolgeler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
            >
              Tüm Bölgeler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

