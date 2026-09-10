import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://feji-studios.savory-acorn-1273.chatgpt.site'),
  title: {
    default: 'Feji Studios — Simple apps. For real life.',
    template: '%s — Feji Studios',
  },
  description:
    'Meet Orka and Styrka. Simple, efficient apps by independent developer Miki Piispanen.',
  openGraph: {
    title: 'Feji Studios — Simple apps. For real life.',
    description:
      'Simple, efficient apps by independent developer Miki Piispanen.',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
