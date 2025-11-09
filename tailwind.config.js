/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D1B2A',      // Derin deniz-mavi / kömür
        accent: '#FFB700',        // Akü sarısı - CTA ve vurgu
        success: '#1BCFB4',       // Canlı yeşil - WhatsApp
        background: '#F8FAFC',    // Açık arka plan
        surface: '#FFFFFF',       // Kart arka planı
        textDark: '#0B1220',      // Koyu metin
        textMuted: '#6B7280',     // Soluk metin
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

