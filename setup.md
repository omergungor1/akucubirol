Bu dosya gerekli setup kurulumlarını listeleyen setur dosyamız. Tüm dosayayı oku, yazılı tüm maddeleri tamamla. Sırayla git, çapraz görevler yapma. Her bir görevi bitirince yenisine geç. Sırayla tümünü bitir. 

**İstediğim çıktı:** Next.js (JavaScript, *Typescript kullanılmayacak*), TailwindCSS ile hazırlanmış, mobil-first, tamamen statik (SSG) renderlenen, Vercel üzerinde deploy edilip CDN ile servis edilecek bir akü satışı + yerinde montaj hizmeti sitesi için tam proje şablonu, bileşenler, sayfalar, SEO metinleri, meta şablonları, erişilebilir HTML/Tailwind sınıfları, performans optimizasyon önerileri ve Google Ads uyumluluk rehberi. Cursor’dan hem **kod örnekleri** (JSX + CSS sınıfları), hem **sayfa metinleri (SEO optimizasyonlu)**, hem **dosya/dizin yapısı**, hem **deploy ve build ayarları** üretmesini istiyorum. Tüm sayfalar build (npm run build / next build) sırasında statik üretilmelidir (getStaticProps / getStaticPaths kullanımı). Proje Vercel için optimize edilmeli.

**İşletme bilgileri (zorunlu):**

* İşletme adı: **Akücü Birol**
* Slogan (örnek): **Akü satışı ve 7-24 yerinde akü montajı**
* Telefon (Türkiye): **+90 533 771 76 16**
* WhatsApp link: **[https://wa.me/905337717616](https://wa.me/905337717616)**
* Önemli CTA metinleri (kullanılacak): “Hemen Ara”, “Bilgi İçin Ara”, “Akün Gelsin — Ücretsiz Yerinde Montaj”, “WhatsApp’tan Mesaj At”

**Temel UX / İş hedefi:**

* Amaç: Siteyi ziyaret edenleri *telefon araması* yapmaya yönlendirmek; telefon görünürlüğü her yerde olmalı. Mobil kullanıcının bir tıkla arayabilmesi asıl hedef.
* Tüm sayfalarda üstte ve altta sabit (sticky) telefon & WhatsApp CTA butonları.
* CTA’lar göz alıcı, erişilebilir, kontrastlı ve büyük dokunma hedefli olmalı.
* Google Ads için uyumluluk: açılış sayfası düşük latency, hızlı yüklenme, içerik-ad eşleşmesi (ad copy ile sayfa başlığı/descriptions uyumlu), GCLID ve UTM parametreleri ile çalışmaya uygun. Pop-up kullanılmayacak ya da Google Ads’le çakışmayacak şekilde yapılandırılacak.

**Performans hedefleri:**

* Lighthouse (Mobile) hedef: > 90 (kritik: First Contentful Paint hızlı, Largest Contentful Paint < 1.2s ideal).
* Tüm sayfalar SSG; client-side JS minimal, yalnızca interaktif bileşenler (brand-carousel, hamburger menu) için lazy-load edilecek.
* next/image kullanılacak, resimler build-time optimize edilecek, SVG logo inline olacak.
* Preconnect / preload font & critical assets; CDN cache policy için Vercel önerilerine uyulacak.

**Renk paleti (hex) — uygun ve kontrastlı:**

* Primary (koyu/marka): `#0D1B2A` (derin deniz-mavi / kömür)
* Accent (enerji/battery): `#FFB700` (akü sarısı — CTA ve vurgu)
* Success/secondary: `#1BCFB4` (canlı yeşil — küçük aksanlar / WhatsApp)
* Background / light: `#F8FAFC`
* Surface / card: `#FFFFFF`
* Text (dark): `#0B1220`
* Muted text: `#6B7280`
  (Contrast kontrolü yapılmış, CTA sarısı koyu zeminde beyaz metin veya koyu metin ile kullanılacak; erişilebilirlik önerilerine dikkat edilecek.)

**Tipografi:**

* Başlıklar: `Poppins` (Google Fonts) — font-display: swap
* Gövde metin: `Inter` (Google Fonts)
* Preconnect: fonts.gstatic & fonts.googleapis için preconnect ekle

**Genel sayfalar (şablon) — her biri SEO için optimize edilecek:**

1. `/` — Ana Sayfa (Hero: büyük telefon CTA, 1-2 satırlık güçlü slogan, akü modelleri carousel, hizmet bölgeleri, neden bizi seçmelisiniz, müşteri yorumları, hızlı iletişim formu (isteğe bağlı), footer)
2. `/akuler` — Akü Modelleri (kısa SEO metin + liste + her modele detay sayfasına link)
3. `/akuler/[slug]` — Her akü modeli için statik sayfa (60 amper, 72, 90, 105, 135, 180, 200, 225, 240, vs.) — getStaticPaths ile üretilecek
4. `/hizmetler` — Hizmetler: Yerinde montaj, Aracınıza özel akü seçimi, Start-Stop aküler, Ağır Vasıta aküleri
5. `/bolgeler` — Akü Servis Bölgelerimiz (Nilüfer, Osmangazi, Mudanya + ilçelerdeki büyük mahalle listeleri). Her bölge için SEO uyumlu içerik + bölge sayfası `/bolgeler/nilufer` vs.
6. `/iletisim` — İletişim — tıklanabilir telefon & WhatsApp, açık adres, çalışma saatleri, Google Maps embed (lazy-loaded)
7. `/hakkimizda` — Kısa işletme hikayesi, güven & garanti (örnek: garanti süreleri)
8. `/sitemap.xml` & `/robots.txt` — otomatik jenerasyon
9. 404 sayfası — SEO dostu, hızlı geri dönüş CTA’ları

**Header & Footer detayları:**

* Header: logo (SVG inline) sol, menu (hamburger mobile), sağda **tel: link** ve **WhatsApp** butonları; sticky header mobilde küçülmüş ama telefon butonu hep görünür.
* Hero: büyük H1 (SEO uyumlu örnek: “Bursa’da Garantili Akü Satışı ve 7/24 Yerinde Akü Montajı — Akücü Birol”), alt metin, büyük arama CTA (tel: link), küçük WP buton, kısa liste: “60A | 72A | 90A | 105A”.
* Brand list: yatay sonsuz scroll (infinite horizontal scroll) — markalar: Varta, Inci, Mutlu, Exide, Tudor, vs. (isimler örnek; placeholder markalar). Bu bölüm CSS-only ya da hafif JS ile yapılacak; erişilebilir olmalı (aria-labels).
* Footer: logo, akü modellerine SEO linkleri (her biri kendi sayfasına), hizmet bölgeleri linkleri, iletişim, çalışma saatleri, sosyal medya, küçük schema & copyright. Footer’da site map linkleri olmalı.

**CTA yerleşimi (mutlaka olacaklar):**

* Header (üst çubuk): sabit “Hemen Ara” (tel:) ve WhatsApp
* Hero alanında büyük “Hemen Ara — +90 533 771 76 16”
* Her kart/ürün altında “Ara — Ücretsiz Montaj”
* Sticky bottom bar (mobil) — 1: Telefon (büyük ikon), 2: WhatsApp (ikon)
* Footer’da tekrar telefon ve kısa iletişim formu

**SEO ve meta bilgileri:**

* Dinamik meta title şablonu: `{pageTitle} — Akücü Birol | Bursa & Çevresi`
* Meta description: 150–155 karakter aralığında, anahtar kelimeler: akü satışı, yerinde akü montajı, Bursa akü servisi, 7-24 akü değişimi.
* Her ürün/bölge sayfası için unique title + description.
* Open Graph & Twitter Card: og:title, og:description, og:image (hero image), twitter:card = summary_large_image
* Canonical tag her sayfada.
* Structured Data: `LocalBusiness` (schema.org) JSON-LD içeriği site genelinde — name, telephone, address, openingHours, geo (opsiyonel), priceRange, serviceOffered array. Ayrıca product schema for akü models.
* H1 sadece bir tane sayfada; H2/H3 hiyerarşik kullanılacak.
* İçerik uzunluğu: bölge & ürün sayfalarında en az 300–600 kelime SEO dostu paragraf; ana sayfada 400+ kelime doğal akış.

**Google Ads uyumluluğu & dönüşüm takibi:**

* Landing sayfalar ile reklam kopyası eşleştirilecek (ad group’a uygun başlık & description).
* GCLID destek: form/CTA varsa hidden field ile GCLID capture (isteğe bağlı).
* Telefon dönüşümleri: tıklanabilir tel: linkleri kullan; öner: call-tracking entegrasyonu varsa (dynamic number insertion) destekle.
* Sayfa CTA’ları hızlı ve doğrudan; pop-up / interstitial kullanılmasın.
* Google Ads kalite puanı için sayfa hız, alaka ve mobile uyum vurgulanacak.

**Erişilebilirlik (a11y):**

* Tüm butonlar keyboard-focusable, aria-labels ile.
* Renk kontrastı WCAG AA uyumlu.
* Görseller alt metinleri doldurulacak.
* Skip-to-content link.

**Teknik & Next.js yapı talimatları:**

* Next.js (app/ veya pages/ tercihini belirt; öneri: **pages/** directory kullan, daha basit SSG için)
* Tüm sayfalar `getStaticProps` / `getStaticPaths` ile build-time oluşturulsun.
* next.config.js: images.dangerouslyAllowSVG? yerine SVG inline; domain listesi belirtilecek.
* Tailwind: mobile-first utility sınıfları; tailwind.config.js’te renk paleti ekle.
* Minimal client JS: hamburger ve marka-carousel için küçük vanilla JS veya useEffect ile lazy import.
* next/image ile optimize edilmiş görseller; responsive srcset.
* Preconnect & preload Google Fonts, critical CSS inline (kritik stiller minimal).
* HTTP cache headers: Vercel default + immutable eklenmesi; CDN cache-control önerisi.
* Sitemap generation: `next-sitemap` veya build-time script, robots.txt oluştur.
* Analytics: GA4 / Google Tag Manager snippet (noscript fallback), privacy-friendly (consent not required for basic pageview if user not in Europe? kullanıcının kararına bırak).
* Build commands ve Vercel optimize ai: `next build` `next export`? Not: next export oluşturulan site statik olacak fakat next/image dynamic optimizations not available. Öneri: **SSG (getStaticProps) + next/image ile Vercel Image Optimization kullanılacak** (dynamic edge). İsteğe göre `next export` kullanılmadan Vercel static hosting ile CDN serve.

**Dosya/dizin önerisi (çıktı olarak verilsin):**

```
/components
  /Header.jsx
  /Footer.jsx
  /Hero.jsx
  /PhoneCTA.jsx (sticky)
  /BrandCarousel.jsx
  /ProductCard.jsx
  /RegionList.jsx
  /Accordion.jsx (SSG-friendly)
  /SEO.jsx (meta tags + JSON-LD)
  /Layout.jsx
/pages
  index.jsx
  /akuler
    index.jsx
    [slug].jsx
  /hizmetler.jsx
  /bolgeler
    index.jsx
    [slug].jsx
  /iletisim.jsx
  /hakkimizda.jsx
  _app.jsx
  _document.jsx
/public
  /images
    hero.jpg
    logos/*.svg
/styles
  globals.css (tailwind imports)
tailwind.config.js
next.config.js
package.json
sitemap-generation-script.js
robots.txt
README.md (deploy to Vercel instructions)
```

**İçerik / metin örnekleri (doğrudan kullan):**

* Ana Sayfa H1: `Bursa’da Garantili Akü Satışı ve 7/24 Yerinde Akü Montajı — Akücü Birol`
* Hero altı kısa: `Hemen arayın — yerinde değişim ve montaj ile aracınıza yeni akü gelsin. +90 533 771 76 16`
* Meta title (ana sayfa): `Akücü Birol — Akü Satışı & 7/24 Yerinde Montaj | Bursa`
* Meta description (ana sayfa): `Akücü Birol: Bursa ve çevresine garantili akü satışı, anında yerinde montaj ve 7/24 hizmet. Hemen arayın: +90 533 771 76 16.`

**Örnek telefon link (HTML):**

```html
<a href="tel:+905337717616" aria-label="Akücü Birol arayın" class="inline-flex items-center px-4 py-3 rounded-lg bg-yellow-500 text-black font-semibold">Hemen Ara — +90 533 771 76 16</a>

<a href="https://wa.me/905337717616" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile mesaj at" class="inline-flex items-center px-3 py-2 rounded-lg border">WhatsApp</a>
```

**Ek istekler (Cursor’dan beklediğim çıktı formatı):**

1. Tam bir **README.md**: kurulum (npm i), development (npm run dev), build (npm run build), vercel deploy adımları, SEO checklist, Google Ads checklist.
2. Örnek `Header.jsx`, `Hero.jsx`, `Footer.jsx` bileşenlerinin **tam JSX kodu (JS, no TS)** ile verilmesi; Tailwind sınıfları kullanılacak.
3. `SEO.jsx` bileşeni: meta tags + Open Graph + JSON-LD LocalBusiness örneği (Akücü Birol verileri ile).
4. `tailwind.config.js` örneği ve `postcss.config.js`.
5. `next.config.js` örneği (image domains / output / reactStrictMode false/true gibi açıklamalar).
6. Sitemap & robots script örneği.
7. Örnek bir `akuler/[slug].jsx` sayfası: SSG ile nasıl üretileceği gösterilsin; örnek veri (60-amper, 72-amper) ile statik generation.
8. Minimal client JS parçaları (hamburger, sticky CTA) — mümkünse vanilla js veya küçük React useState kullanımı.
9. Google Ads için açılış sayfası test checklist’i (ad-copy eşleme, telefon CTA testi, mobil görünürlük, hız testi vb.).
10. 5 adet farklı Hero/CTA varyasyonunda kısa reklam başlıkları (Google Ads uyumlu: 30 karakter, açıklama 90 karakter) üret.
11. Şu akü markalarına yer ver: İnci Akü, Varta Akü, Mutlu Akü, Bosch Akü, Turbo Akü, Energy Akü, Mega DC Akü
12. 3 yıl garantili aküler, Garantili akü, Kapıda montaj, Yerinde montaj, Mobil akü servisi gibi hook cümlelere yer verelim.

**Blog kısmı ekleyelim:**
- Seo açısından katkı sağlayacak blog içerikleri yazacağımız bir blog sayfası da ekleyelim. Veri tabanı olmayacak kod seviyesinde blogları ekleyeceğiz. Sen başlangıç için şu blogları kendin hazırla ve tıklama alabilecek 5-10 adet blog yaz.
Konu Listesi: 
- araba aküsü değiştirme
- araç aküsü biterse
- yiğit aku
- oto akü
- oto akü fiyatları
- en iyi araba aküleri
- bosch araba aküsü
- 72 amper araba aküsü
- mobil akü servisi
- 60 amper araba akü fiyatları
- 72 amper araba akü fiyatları
