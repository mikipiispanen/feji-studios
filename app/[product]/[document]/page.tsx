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
  const description = `Read the ${content.title.toLowerCase()} for ${name}, ${product === 'orka' ? 'the classes, tasks and deadlines planner' : 'the iOS gym tracker'}, by Feji Studios. ${document === 'privacy' ? 'Learn how the app handles your data.' : 'Learn about use of the app and your responsibilities.'}`;
  return {
    title,
    description,
    alternates: { canonical: `/${product}/${document}` },
    openGraph: { title, description, url: `/${product}/${document}` },
    twitter: { title, description },
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
        <a className="legal-back" href={`/${product}`}>
          ← Back to {name}
        </a>
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
              <a key={s.title} href={`#section-${i + 1}`}>
                {String(i + 1).padStart(2, '0')} · {s.title}
              </a>
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
                  <a className="text-link" href={s.link.url}>
                    {s.link.label} ↗
                  </a>
                )}
              </section>
            ))}
            <a
              className="text-link"
              href={`/${product}/${document === 'privacy' ? 'terms' : 'privacy'}`}
            >
              {`Read ${name} ${document === 'privacy' ? 'terms and conditions' : 'privacy policy'} ↗`}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
