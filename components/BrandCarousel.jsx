export default function BrandCarousel() {
  const brands = [
    'İnci Akü',
    'Varta Akü',
    'Mutlu Akü',
    'Bosch Akü',
    'Turbo Akü',
    'Energy Akü',
    'Mega DC Akü',
  ];

  // Sonsuz scroll için listeyi iki kez tekrarla
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="container-custom mb-6">
        <h2 className="text-center font-heading font-semibold text-2xl text-textDark">
          Güvenilir Markalar
        </h2>
        <p className="text-center text-textMuted mt-2">
          Orijinal ve garantili akü markaları ile hizmetinizdeyiz
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex animate-infinite-scroll hover:pause" aria-label="Akü markaları">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8"
              style={{ minWidth: '140px' }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/5 mb-2">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 446.271 446.27"
                    aria-hidden="true"
                  >
                    <path d="M439.124,81.16h-68.511V59.424c0-3.946-3.199-7.146-7.146-7.146h-48.999c-3.946,0-7.146,3.199-7.146,7.146V81.16H138.947V59.424c0-3.946-3.199-7.146-7.146-7.146H82.802c-3.946,0-7.146,3.199-7.146,7.146V81.16H7.146C3.2,81.16,0,84.359,0,88.306v45.614c0,3.946,3.199,7.146,7.146,7.146h23.201h385.577h23.201c3.945,0,7.146-3.199,7.146-7.146V88.306C446.27,84.36,443.07,81.16,439.124,81.16z" />
                    <path d="M30.346,384.723c0,5.119,4.149,9.27,9.268,9.27h367.041c5.119,0,9.269-4.15,9.269-9.27V165.404H30.346V384.723z M179.262,290.014l21.716-69.401c0.373-1.192,1.478-2.004,2.727-2.004h33.864c0.914,0,1.771,0.438,2.311,1.177c0.538,0.738,0.689,1.691,0.406,2.561l-13.221,40.839h37.217c1.047,0,2.008,0.572,2.51,1.49c0.5,0.918,0.459,2.035-0.107,2.914l-49.719,77.149c-0.538,0.835-1.453,1.31-2.402,1.31c-0.343,0-0.689-0.062-1.025-0.19c-1.263-0.485-2.012-1.793-1.793-3.129l8.028-49.005H181.99c-0.909,0-1.764-0.434-2.302-1.166C179.148,291.826,178.99,290.881,179.262,290.014z" />
                  </svg>
                </div>
                <p className="font-semibold text-primary text-xs sm:text-sm whitespace-nowrap">
                  {brand}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradyan fade efekti */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Ek bilgi */}
      <div className="container-custom mt-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-textMuted">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Orijinal Ürün</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>3 Yıl Garanti</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Ücretsiz Montaj</span>
          </div>
        </div>
      </div>
    </section>
  );
}

