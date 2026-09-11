import type { Metadata } from 'next';
import './globals.css';
const description =
  'Discover Orka, a planner for classes, tasks and deadlines, and Styrka, an iOS gym tracker for sets, reps and progress. Built by Miki Piispanen at Feji Studios.';
export const metadata: Metadata = {
  metadataBase: new URL('https://feji.fi'),
  title: {
    default: 'Feji Studios — Orka Planner & Styrka Gym Tracker',
    template: '%s — Feji Studios',
  },
  description,
  authors: [{ name: 'Miki Piispanen', url: 'https://feji.fi/#about' }],
  openGraph: {
    title: 'Feji Studios — Orka Planner & Styrka Gym Tracker',
    description,
    url: '/',
    siteName: 'Feji Studios',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feji Studios — Orka Planner & Styrka Gym Tracker',
    description,
  },
  icons: { icon: '/favicon.svg' },
};
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://feji.fi/#organization',
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
