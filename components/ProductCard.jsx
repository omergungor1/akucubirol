import Link from 'next/link';

export default function ProductCard({ title, amper, description, features, price, slug }) {
  return (
    <div className="card group hover:border hover:border-accent transition-all">
      {/* Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
          {amper} Amper
        </span>
        {price && (
          <span className="text-sm text-textMuted">
            <span className="font-semibold text-primary">{price}₺</span>
            <span className="text-xs"> 'den başlayan fiyatlarla</span>
          </span>
        )}
      </div>

      {/* Akü İkonu */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
          <svg 
            className="w-12 h-12 text-primary group-hover:text-accent transition-colors" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9zM12 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm-3 1a1 1 0 012 0v4a1 1 0 11-2 0v-4zm6 0a1 1 0 012 0v4a1 1 0 11-2 0v-4z"/>
          </svg>
        </div>
      </div>

      {/* Başlık */}
      <h3 className="font-heading font-semibold text-xl text-textDark mb-2 text-center group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* Açıklama */}
      {description && (
        <p className="text-sm text-textMuted text-center mb-4 line-clamp-2">
          {description}
        </p>
      )}

      {/* Özellikler */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-textDark">
              <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Butonları */}
      <div className="flex flex-col gap-3 mt-auto">
        <a
          href="tel:+905337717616"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-primary font-semibold text-sm hover:bg-yellow-400 transition-all hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Ara — Ücretsiz Montaj
        </a>

        {slug && (
          <Link
            href={`/akuler/${slug}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-all"
          >
            Detaylı Bilgi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

