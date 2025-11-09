import Layout from '../../components/Layout';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost({ post, relatedPosts }) {
  // Markdown benzeri içeriği parse etme (basit versiyon)
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentParagraph = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h1 key={index} className="font-heading font-bold text-3xl md:text-4xl text-textDark mb-6 mt-8">{trimmed.substring(2)}</h1>);
      } else if (trimmed.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={index} className="font-heading font-semibold text-2xl text-textDark mb-4 mt-8">{trimmed.substring(3)}</h2>);
      } else if (trimmed.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={index} className="font-heading font-semibold text-xl text-textDark mb-3 mt-6">{trimmed.substring(4)}</h3>);
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<p key={index} className="font-semibold text-textDark mb-2">{trimmed.replace(/\*\*/g, '')}</p>);
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(
          <li key={index} className="flex items-start gap-2 mb-2">
            <span className="text-accent mt-1">•</span>
            <span>{trimmed.substring(2)}</span>
          </li>
        );
      } else if (trimmed === '') {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed text-textDark">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(trimmed);
      }
    });

    if (currentParagraph.length > 0) {
      elements.push(<p key="last-p" className="mb-6 leading-relaxed text-textDark">{currentParagraph.join(' ')}</p>);
    }

    return elements;
  };

  return (
    <Layout
      seo={{
        title: `${post.title} — Akücü Birol Blog`,
        description: post.excerpt,
        canonical: `/blog/${post.slug}`,
      }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-accent hover:text-yellow-400 transition-colors">
                ← Tüm Yazılar
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent text-accent text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-sm text-gray-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
              <span className="text-sm text-gray-300">
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="card">
                <div className="text-textDark">
                  {renderContent(post.content)}
                </div>
              </div>
            </article>

            {/* CTA */}
            <div className="card bg-gradient-to-br from-accent to-yellow-400 border-none mt-12">
              <div className="text-center py-8">
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  Akü İhtiyacınız mı Var?
                </h3>
                <p className="text-primary/80 mb-6">
                  3 yıl garantili aküler ve ücretsiz yerinde montaj için hemen arayın!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+905337717616"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:bg-primary/90 hover:scale-105 transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0533 771 76 16
                  </a>

                  <a
                    href="https://wa.me/905337717616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-success text-white font-semibold text-lg hover:bg-green-500 hover:scale-105 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* İlgili Yazılar */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="font-heading font-semibold text-2xl text-textDark mb-6">
                  İlgili Yazılar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="card group hover:border-accent cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-textMuted">{relatedPost.readTime}</span>
                      </div>
                      <h4 className="font-heading font-semibold text-lg text-textDark mb-2 group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-textMuted line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // İlgili yazılar (aynı kategoriden, en fazla 2 tane)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}

