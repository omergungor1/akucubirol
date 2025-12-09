import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhoneCTA from './PhoneCTA';
import SEO from './SEO';

export default function Layout({ children, seo }) {
  return (
    <>
      {/* SEO Component */}
      <SEO {...seo} />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Phone CTA (Mobile) */}
      <PhoneCTA />
    </>
  );
}

