# Akücü Birol - Bursa Akü Servisi Web Sitesi

Modern, SEO-optimize, statik Next.js web sitesi. Bursa ve çevresinde 7/24 mobil akü servisi ve yerinde montaj hizmeti sunan Akücü Birol için geliştirilmiştir.

## 🚀 Özellikler

- ✅ **Next.js 16** (Pages Router)
- ✅ **Tailwind CSS 4** ile modern tasarım
- ✅ **Tamamen JavaScript** (TypeScript yok)
- ✅ **SSG (Static Site Generation)** ile ultra hızlı
- ✅ **SEO optimize** (Meta tags, JSON-LD, Sitemap)
- ✅ **Mobil-first** responsive tasarım
- ✅ **PWA desteği** (Manifest)
- ✅ **WCAG AA** erişilebilirlik standartları
- ✅ **Google Ads** uyumlu
- ✅ **7/24 CTA butonları** her sayfada
- ✅ **Blog sistemi** SEO dostu içeriklerle

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i test et
npm start

# Sitemap oluştur
node scripts/generate-sitemap.js
```

## 📂 Proje Yapısı

```
akucu-birol/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.jsx      # Header + navigasyon
│   ├── Footer.jsx      # Footer
│   ├── Hero.jsx        # Ana sayfa hero
│   ├── PhoneCTA.jsx    # Sticky telefon CTA (mobil)
│   ├── BrandCarousel.jsx # Marka carousel
│   ├── ProductCard.jsx # Ürün kartı
│   ├── RegionList.jsx  # Bölge listesi
│   ├── Accordion.jsx   # SSS accordion
│   ├── SEO.jsx         # SEO meta tags + JSON-LD
│   └── Layout.jsx      # Ana layout wrapper
│
├── pages/              # Next.js sayfaları (SSG)
│   ├── index.jsx       # Ana sayfa
│   ├── _app.jsx        # App wrapper
│   ├── _document.jsx   # HTML document
│   ├── 404.jsx         # 404 sayfası
│   ├── akuler/
│   │   ├── index.jsx   # Akü modelleri listesi
│   │   └── [slug].jsx  # Dinamik akü detay sayfası
│   ├── blog/
│   │   ├── index.jsx   # Blog listesi
│   │   └── [slug].jsx  # Dinamik blog yazısı
│   ├── bolgeler/
│   │   ├── index.jsx   # Bölge listesi
│   │   └── [slug].jsx  # Dinamik bölge sayfası
│   ├── hizmetler.jsx   # Hizmetler
│   ├── iletisim.jsx    # İletişim
│   └── hakkimizda.jsx  # Hakkımızda
│
├── data/               # Statik veri
│   └── blogPosts.js    # Blog içerikleri
│
├── public/             # Statik dosyalar
│   ├── robots.txt      # SEO robots
│   ├── manifest.json   # PWA manifest
│   └── sitemap.xml     # XML sitemap
│
├── scripts/
│   └── generate-sitemap.js # Sitemap generator
│
├── styles/
│   └── globals.css     # Global + Tailwind CSS
│
├── tailwind.config.js  # Tailwind yapılandırması
├── next.config.js      # Next.js yapılandırması
└── package.json        # Dependencies
```

## 🎨 Renk Paleti

```javascript
{
  primary: '#0D1B2A',    // Koyu mavi (marka rengi)
  accent: '#FFB700',     // Akü sarısı (CTA)
  success: '#1BCFB4',    // Yeşil (WhatsApp)
  background: '#F8FAFC', // Açık arka plan
  surface: '#FFFFFF',    // Kart arka planı
  textDark: '#0B1220',   // Koyu metin
  textMuted: '#6B7280',  // Soluk metin
}
```

## 📱 Sayfalar ve Rotalar

### Ana Sayfalar
- `/` - Ana sayfa (Hero, özellikler, akü modelleri, yorumlar)
- `/akuler` - Tüm akü modelleri (60A - 240A)
- `/akuler/[slug]` - Akü detay sayfaları (SSG)
- `/hizmetler` - Hizmetlerimiz
- `/bolgeler` - Hizmet bölgeleri
- `/bolgeler/[slug]` - Bölge detay sayfaları (SSG)
- `/blog` - Blog yazıları listesi
- `/blog/[slug]` - Blog yazısı detay (SSG)
- `/iletisim` - İletişim sayfası
- `/hakkimizda` - Hakkımızda

### Akü Modelleri (Dinamik SSG)
- 60 Amper, 72 Amper, 90 Amper, 105 Amper
- 135 Amper, 180 Amper, 200 Amper, 225 Amper, 240 Amper

### Hizmet Bölgeleri (Dinamik SSG)
- Nilüfer, Osmangazi, Yıldırım
- Mudanya, Gemlik, Gürsu

### Blog Yazıları (6 adet SEO uyumlu)
- Araba Aküsü Değiştirme Rehberi
- Araç Aküsü Biterse Ne Yapılır?
- Oto Akü Fiyatları 2024
- En İyi Araba Aküleri
- Mobil Akü Servisi Avantajları
- 60 vs 72 Amper Akü Farkları

## 🔧 Yapılandırma

### Tailwind CSS
`tailwind.config.js` - Özel renk paleti, font ailesi

### Next.js
`next.config.js` - Image optimization, i18n (tr), security headers

### SEO
- Meta tags her sayfada
- JSON-LD LocalBusiness schema
- Open Graph + Twitter Card
- Canonical URL'ler
- Sitemap.xml otomatik
- robots.txt

## 🚢 Vercel'de Deploy

### 1. GitHub'a Push
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo>
git push -u origin main
```

### 2. Vercel'e Bağla
1. https://vercel.com/new adresine git
2. GitHub repository'sini import et
3. Framework: **Next.js** seç
4. Build Command: `npm run build`
5. Output Directory: `.next`
6. Environment Variables: (gerekirse ekle)
7. **Deploy** butonuna tıkla

### 3. Domain Ayarları
1. Vercel Dashboard > Settings > Domains
2. Custom domain ekle: `akucubirol.com`
3. DNS kayıtlarını güncelle (Vercel talimatları)

## ⚡ Performans Optimizasyonları

- ✅ **Static Generation**: Tüm sayfalar build-time'da oluşturulur
- ✅ **Image Optimization**: next/image ile otomatik
- ✅ **Font Optimization**: Google Fonts preconnect
- ✅ **Code Splitting**: Otomatik route-based
- ✅ **CSS Purging**: Tailwind ile kullanılmayan CSS temizlenir
- ✅ **Lazy Loading**: Bileşenler lazy load
- ✅ **Minimal JS**: Client-side JS minimum

### Lighthouse Hedefleri
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📊 SEO Checklist

### On-Page SEO ✅
- [x] Unique title tags (her sayfa)
- [x] Meta descriptions (150-155 karakter)
- [x] H1 her sayfada (sadece bir tane)
- [x] H2-H6 hiyerarşi
- [x] Alt text tüm görsellerde
- [x] Internal linking
- [x] Canonical URLs
- [x] Mobile-friendly

### Technical SEO ✅
- [x] Sitemap.xml
- [x] robots.txt
- [x] JSON-LD structured data
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Fast page load (SSG)
- [x] HTTPS (Vercel otomatik)
- [x] No 404 errors

### Content SEO ✅
- [x] Keyword research yapılmış
- [x] Long-form content (blog yazıları)
- [x] Local SEO (Bursa, ilçeler)
- [x] Schema markup (LocalBusiness)

## 📱 Google Ads Uyumluluk

### Landing Page Optimizasyonu
- ✅ Fast loading (<2s)
- ✅ Mobile responsive
- ✅ Clear CTA butonları (telefon, WhatsApp)
- ✅ Relevant content (ad copy ile eşleşen)
- ✅ No intrusive pop-ups
- ✅ Easy navigation

### CTA Yerleşimi
- Header: Telefon + WhatsApp
- Hero: Büyük telefon CTA
- Sticky bottom bar (mobil)
- Her sayfa footer
- Ürün kartları

### Tracking (Eklenebilir)
```javascript
// Google Analytics 4
// Google Tag Manager
// Google Ads Conversion Tracking
// Call Tracking (opsiyonel)
```

### Ad Copy ile Eşleşme
Her sayfa için özelleştirilmiş:
- Başlık etiketleri
- Meta açıklamalar
- H1 başlıklar
- İçerik yapısı

## 🎯 Google Ads Kampanya Önerileri

### Ad Groups
1. **Marka Aküler** (Varta, Mutlu, Bosch, İnci)
2. **Amper Bazlı** (60A, 72A, 90A akü)
3. **Lokasyon** (Bursa akü servisi, Nilüfer akü)
4. **Hizmet** (Yerinde akü montajı, mobil akü)
5. **Acil** (Akü bitti, acil akü servisi)

### Ad Extensions
- **Call Extension**: +90 533 771 76 16
- **Location Extension**: Bursa, Türkiye
- **Sitelink Extensions**: 
  - Akü Modelleri
  - Hizmet Bölgeleri
  - Hemen Ara
  - WhatsApp
- **Callout Extensions**:
  - 7/24 Hizmet
  - Ücretsiz Montaj
  - 3 Yıl Garanti

### Landing Pages
- Genel: `/`
- Akü modelleri: `/akuler`
- Bölge: `/bolgeler/nilufer`
- Acil: `/hizmetler`

## 🛠️ Bakım ve Güncelleme

### İçerik Güncellemeleri
```bash
# Blog yazısı ekle
# 1. data/blogPosts.js içine yeni içerik ekle
# 2. scripts/generate-sitemap.js güncelle
# 3. Sitemap'i yeniden oluştur
node scripts/generate-sitemap.js

# Deploy
git add .
git commit -m "Add new blog post"
git push
```

### Akü Modeli Ekle
```bash
# 1. pages/akuler/[slug].jsx'deki akuData array'ine ekle
# 2. Sitemap güncelle
# 3. Deploy
```

## 📞 İletişim Bilgileri

- **Telefon**: +90 533 771 76 16
- **WhatsApp**: https://wa.me/905337717616
- **Hizmet Bölgesi**: Bursa ve çevresi
- **Çalışma Saatleri**: 7/24

## 📝 Lisans

Bu proje Akücü Birol için özel olarak geliştirilmiştir.

---

**Geliştirici Notları**:
- TypeScript kullanılmamıştır (müşteri talebi)
- Tüm sayfalar SSG ile statik
- Vercel için optimize
- SEO-first yaklaşım
- Mobile-first tasarım
- Accessibility (WCAG AA)
- No database required (statik içerik)

**Son Güncelleme**: Kasım 2024
