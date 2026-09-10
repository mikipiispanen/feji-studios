import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../shared';
import { getDocument } from '../../legal-content';
type Props = { params: Promise<{ product: string; document: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product, document } = await params;
  const content = getDocument(product, document);
  if (!content) return { title: 'Page not found' };
  const name = product === 'orka' ? 'Orka' : 'Styrka';
  const title = `${name} ${content.title}`;
  return {
    title,
    description: content.intro,
    alternates: { canonical: `/${product}/${document}` },
    openGraph: { title, description: content.intro, url: `/${product}/${document}` },
    robots: content.draft ? { index: false, follow: true } : undefined,
  };
}
export default async function LegalPage({ params }: Props) {
  const { product, document } = await params;
  const content = getDocument(product, document);
  if (!content) notFound();
  const name = product === 'orka' ? 'Orka' : 'Styrka';
  return (
    <>
      <Header />
      <main className="legal wrap" id="main-content">
        <Link className="legal-back" href={`/#${product}`}>
          ← Back to {name}
        </Link>
        <p className="eyebrow">{name.toUpperCase()} / LEGAL</p>
        <h1>{content.title}</h1>
        {content.date && (
          <p className="legal-meta">Effective date: {content.date}</p>
        )}
        <p className="legal-intro">{content.intro}</p>
        {content.draft && (
          <aside className="draft-note">
            <strong>Draft — pending confirmation</strong>This document is not
            final. Orka’s complete{' '}
            {document === 'privacy' ? 'privacy policy' : 'terms'} will be
            published before launch.
          </aside>
        )}
        <div className="legal-body">
          <nav className="legal-toc" aria-label="On this page">
            {content.sections.map((s, i) => (
              <Link key={s.title} href={`#section-${i + 1}`}>
                {String(i + 1).padStart(2, '0')} · {s.title}
              </Link>
            ))}
          </nav>
          <div>
            {content.sections.map((s, i) => (
              <section
                className="legal-section"
                id={`section-${i + 1}`}
                key={s.title}
              >
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                {s.link && (
                  <Link className="text-link" href={s.link.url}>
                    {s.link.label} ↗
                  </Link>
                )}
              </section>
            ))}
            <Link
              className="text-link"
              href={`/${product}/${document === 'privacy' ? 'terms' : 'privacy'}`}
            >
              {`Read ${name} ${document === 'privacy' ? 'terms and conditions' : 'privacy policy'} ↗`}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
