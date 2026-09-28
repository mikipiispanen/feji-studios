import type { Metadata } from 'next';
import { Header, Footer } from './shared';

const title = 'Orka Support';
const description =
  'Get help with Orka, the student planner by Feji Studios. Connect calendars, restore Premium, disconnect Google Calendar and learn how iCloud sync works.';
export const orkaSupportMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/orka/support' },
  openGraph: { title, description, url: '/orka/support' },
  twitter: { title, description },
};

const faq = [
  {
    question: 'How do I connect Apple Calendar, Google Calendar or a school calendar?',
    answer: (
      <p>
        In Orka, open <strong>Settings › Calendar</strong>. From there you can
        allow access to Apple Calendar, connect Google Calendar with read-only
        access, or add a school calendar using its .ics link. Orka then
        shows the calendars you select beside your plan and in widgets.
      </p>
    ),
  },
  {
    question: 'How do I restore my Premium purchase?',
    answer: (
      <p>
        Open <strong>Premium</strong> in Orka and tap{' '}
        <strong>Restore Purchases</strong>. Make sure you are signed in with the
        same Apple Account you used to buy Premium.
      </p>
    ),
  },
  {
    question: 'How do I disconnect Google Calendar?',
    answer: (
      <p>
        In Orka, go to <strong>Connected calendars › Disconnect Google
        Calendar</strong>. This clears Orka’s local copy of your Google events
        and your Google sign-in on that device. You can also revoke access
        from your Google Account at{' '}
        <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener noreferrer">
          myaccount.google.com
        </a>{' '}
        › Security › Third-party connections.
      </p>
    ),
  },
  {
    question: 'How does iCloud sync work?',
    answer: (
      <p>
        When you are signed in to iCloud, your items and courses sync between
        your devices through your own private iCloud account. Feji Studios
        cannot access this data. App preferences and calendar choices stay on
        the device where you set them.
      </p>
    ),
  },
];

export default function OrkaSupport() {
  return (
    <>
      <Header />
      <main className="legal wrap" id="main-content">
        <a className="legal-back" href="/orka">
          ← Back to Orka
        </a>
        <p className="eyebrow">ORKA / SUPPORT</p>
        <h1>Orka Support</h1>
        <p className="legal-intro">
          Questions, problems or feedback? Email{' '}
          <a className="support-email" href="mailto:hello@feji.fi">
            hello@feji.fi
          </a>{' '}
          and Feji Studios will get back to you. Please don’t include private
          planner content unless your question needs it.
        </p>
        <div className="support-body">
          <h2 className="support-heading">Frequently asked questions</h2>
          {faq.map((item) => (
            <section className="legal-section" key={item.question}>
              <h3>{item.question}</h3>
              {item.answer}
            </section>
          ))}
          <nav className="legal-related" aria-label="Orka legal information">
            <a className="text-link" href="/orka/privacy">
              Orka Privacy Policy ↗
            </a>
            <a className="text-link" href="/orka/terms">
              Orka Terms &amp; Conditions ↗
            </a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
