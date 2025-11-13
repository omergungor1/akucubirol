import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Google Maps iframe'inden gelen cross-origin hatalarını filtrele
    const originalConsoleError = console.error;

    console.error = (...args) => {
      // Google Maps iframe'inden gelen SecurityError'ları filtrele
      const errorMessage = args.join(' ');
      if (
        errorMessage.includes('SecurityError') &&
        (errorMessage.includes('cross-origin') ||
          errorMessage.includes('Blocked a frame') ||
          errorMessage.includes('Failed to read a named property'))
      ) {
        // Bu hatayı görmezden gel (Google Maps iframe'inden gelen zararsız hata)
        return;
      }
      // Diğer hataları normal şekilde logla
      originalConsoleError.apply(console, args);
    };

    // Cleanup: Orijinal console.error'u geri yükle
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return <Component {...pageProps} />;
}

