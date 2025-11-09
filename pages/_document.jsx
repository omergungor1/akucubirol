import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0D1B2A" />
      </Head>
      <body>
        {/* Skip to content link - Erişilebilirlik */}
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

