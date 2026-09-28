import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment, type ReactNode } from 'react';
import { Header, Footer } from '../../shared';
import { getDocument, type LegalDocument } from '../../legal-content';
import OrkaSupport, { orkaSupportMetadata } from '../../orka-support';
type Props = { params: Promise<{ product: string; document: string }> };
const isOrkaSupport = (product: string, document: string) =>
  product === 'orka' && document === 'support';
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product, document } = await params;
  if (isOrkaSupport(product, document)) return orkaSupportMetadata;
  const content = getDocument(product, document);
  if (!content) return { title: 'Page not found' };
  const name = product === 'orka' ? 'Orka' : 'Styrka';
  const title = `${name} ${content.title}`;
  const description = `Read the ${content.title.toLowerCase()} for ${name}, ${product === 'orka' ? 'the student planner for tasks, deadlines, exams and classes' : 'the iOS gym tracker'}, by Feji Studios. ${document === 'privacy' ? 'Learn how the app handles your data.' : 'Learn about use of the app and your responsibilities.'}`;
  return {
    title,
    description,
    alternates: { canonical: `/${product}/${document}` },
    openGraph: { title, description, url: `/${product}/${document}` },
    twitter: { title, description },
    robots: content.draft ? { index: false, follow: true } : undefined,
  };
}
// Links each listed phrase in place so the section wording stays unchanged.
function SectionText({
  text,
  links = [],
}: {
  text: string;
  links?: LegalDocument['sections'][number]['inlineLinks'];
}) {
  const parts: ReactNode[] = [];
  let rest = text;
  for (const link of links) {
    const i = rest.indexOf(link.text);
    if (i === -1) continue;
    parts.push(rest.slice(0, i));
    parts.push(
      <a
        key={link.url}
        href={link.url}
        {...(link.url.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {link.text}
      </a>,
    );
    rest = rest.slice(i + link.text.length);
  }
  parts.push(rest);
  return (
    <p>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </p>
  );
}
export default async function LegalPage({ params }: Props) {
  const { product, document } = await params;
  if (isOrkaSupport(product, document)) return <OrkaSupport />;
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
        <h1>{content.heading ?? content.title}</h1>
        {content.date && (
          <p className="legal-meta">
            {content.dateLabel ?? 'Effective date:'} {content.date}
          </p>
        )}
        {content.intro && <p className="legal-intro">{content.intro}</p>}
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
                <SectionText text={s.text} links={s.inlineLinks} />
                {s.link && (
                  <a className="text-link" href={s.link.url}>
                    {s.link.label} ↗
                  </a>
                )}
              </section>
            ))}
            <nav className="legal-related" aria-label={`More about ${name}`}>
              <a
                className="text-link"
                href={`/${product}/${document === 'privacy' ? 'terms' : 'privacy'}`}
              >
                {`Read ${name} ${document === 'privacy' ? 'terms and conditions' : 'privacy policy'} ↗`}
              </a>
              {product === 'orka' && (
                <a className="text-link" href="/orka/support">
                  Orka support ↗
                </a>
              )}
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
