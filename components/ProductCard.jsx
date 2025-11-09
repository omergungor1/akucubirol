import Link from 'next/link';

export default function ProductCard({ title, amper, description, features, price, slug }) {
  return (
    <div className="card group hover:border hover:border-accent transition-all">
      {/* Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
          {amper} Amper
        </span>
      </div>

      {/* Akü İkonu */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
          <svg
            className="w-12 h-12 text-primary group-hover:text-accent transition-colors"
            fill="currentColor"
            viewBox="0 0 446.271 446.27"
            aria-hidden="true"
          >
            <path d="M439.124,81.16h-68.511V59.424c0-3.946-3.199-7.146-7.146-7.146h-48.999c-3.946,0-7.146,3.199-7.146,7.146V81.16H138.947V59.424c0-3.946-3.199-7.146-7.146-7.146H82.802c-3.946,0-7.146,3.199-7.146,7.146V81.16H7.146C3.2,81.16,0,84.359,0,88.306v45.614c0,3.946,3.199,7.146,7.146,7.146h23.201h385.577h23.201c3.945,0,7.146-3.199,7.146-7.146V88.306C446.27,84.36,443.07,81.16,439.124,81.16z" />
            <path d="M30.346,384.723c0,5.119,4.149,9.27,9.268,9.27h367.041c5.119,0,9.269-4.15,9.269-9.27V165.404H30.346V384.723z M179.262,290.014l21.716-69.401c0.373-1.192,1.478-2.004,2.727-2.004h33.864c0.914,0,1.771,0.438,2.311,1.177c0.538,0.738,0.689,1.691,0.406,2.561l-13.221,40.839h37.217c1.047,0,2.008,0.572,2.51,1.49c0.5,0.918,0.459,2.035-0.107,2.914l-49.719,77.149c-0.538,0.835-1.453,1.31-2.402,1.31c-0.343,0-0.689-0.062-1.025-0.19c-1.263-0.485-2.012-1.793-1.793-3.129l8.028-49.005H181.99c-0.909,0-1.764-0.434-2.302-1.166C179.148,291.826,178.99,290.881,179.262,290.014z" />
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

