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
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
              style={{ minWidth: '200px' }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-3">
                  <svg 
                    className="w-8 h-8 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9zM12 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm-3 1a1 1 0 012 0v4a1 1 0 11-2 0v-4zm6 0a1 1 0 012 0v4a1 1 0 11-2 0v-4z"/>
                  </svg>
                </div>
                <p className="font-semibold text-primary text-sm whitespace-nowrap">
                  {brand}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradyan fade efekti */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
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

