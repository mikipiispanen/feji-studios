import type { Metadata } from 'next';
import './globals.css';
const description =
  'Meet Orka and Styrka. Simple, efficient apps by independent developer Miki Piispanen.';
export const metadata: Metadata = {
  metadataBase: new URL('https://feji.fi'),
  title: {
    default: 'Feji Studios — Simple apps. For real life.',
    template: '%s — Feji Studios',
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Feji Studios — Simple apps. For real life.',
    description,
    url: '/',
    siteName: 'Feji Studios',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feji Studios — Simple apps. For real life.',
    description,
  },
  icons: { icon: '/favicon.svg' },
};
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Feji Studios',
  url: 'https://feji.fi',
  email: 'hello@feji.fi',
  founder: { '@type': 'Person', name: 'Miki Piispanen' },
  logo: 'https://feji.fi/favicon.svg',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
