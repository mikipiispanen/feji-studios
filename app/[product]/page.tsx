import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../shared';

const apps = {
  orka: {
    name: 'Orka',
    title: 'Orka — Planner for Classes, Tasks & Deadlines',
    description: 'Orka is a student planner for iPhone and iPad. Keep tasks, deadlines, exams and courses in one place, and see your class schedule beside your plan.',
    heading: 'Orka: your day, a little more together.',
    category: 'ProductivityApplication',
    intro: 'Orka is a student planner for iPhone and iPad. Keep tasks, deadlines and exams in one planner, see your class schedule beside them, and get on with your day.',
    features: [
      { title: 'See your classes and tasks together', text: 'The Today view brings your timeline and upcoming classes into one place. Check where you need to be and what is coming next.', image: 'orka-1', alt: 'Orka Today timeline showing classes and tasks' },
      { title: 'Turn a thought into a plan', text: 'Quick Add gives a task, event, deadline or exam a place to go. Processing happens on your device, and you review the details before adding them to your planner.', image: 'orka-2', alt: 'Orka Quick Add with details ready for review' },
      { title: 'Keep your plans easy to find', text: 'Review your plans in the Planner view. Orka is coming soon as a free download, with an optional one-time Premium purchase.', image: 'orka-3', alt: 'Orka Planner with Quick Capture' },
    ],
  },
  styrka: {
    name: 'Styrka',
    title: 'Styrka — Simple Gym & Workout Tracker for iOS',
    description: 'Track sets, reps and weights with Styrka for iOS. Build workout templates, review your progress and train offline, with optional iCloud sync.',
    heading: 'Styrka: less tapping, more lifting.',
    category: 'HealthApplication',
    intro: 'Styrka is a gym tracker for iOS that keeps workout logging simple. Record your sets, reps and weights, review your training, and get back to the next rep.',
    features: [
      { title: 'Log workouts and review progress', text: 'Keep a record of your sets, reps and weights. Review your lifts to see how your training adds up over time.', image: 'styrka-1', alt: 'Styrka strength training progress tracking' },
      { title: 'Build a routine you can repeat', text: 'Reusable workout templates keep your exercises ready for the next session. Your workout calendar and history make past training easy to find.', image: 'styrka-4', alt: 'Styrka workout calendar and workout history' },
      { title: 'Train offline, sync when you choose', text: 'Log workouts without an internet connection. Optional iCloud sync keeps your training available across your own Apple devices.', image: 'styrka-3', alt: 'Styrka gym tracker interface' },
    ],
  },
};
const storeUrl = 'https://apps.apple.com/fi/app/styrka-gym-tracker/id6761281378';
// TODO(Orka App Store link): set this to Orka's App Store URL once the app is approved.
const orkaStoreUrl: string | null = null;
const orkaHighlights = [
  { title: 'One planner', text: 'Tasks, deadlines and exams live together, so nothing important sits in a separate list.' },
  { title: 'Courses', text: 'Organise your work by course and see what each class needs from you.' },
  { title: 'Today view and widgets', text: 'See the day ahead at a glance in the app and on your Home Screen.' },
  { title: 'Your class schedule', text: 'Show your classes from Apple Calendar, Google Calendar or a school .ics calendar link.' },
  { title: 'Reminders', text: 'Set reminders for the items that matter, scheduled on your device.' },
  { title: 'Optional Premium', text: 'A one-time purchase adds more colour kits, more connected calendars and Find time together, which shows gaps in friends’ shared calendars.' },
];
const getApp = (product: string) => product === 'orka' || product === 'styrka' ? apps[product] : null;
type Props = { params: Promise<{ product: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const app = getApp(product);
  if (!app) return { title: 'Page not found', robots: { index: false } };
  return {
    title: app.title,
    description: app.description,
    alternates: { canonical: `/${product}` },
    openGraph: { title: app.title, description: app.description, url: `/${product}`, type: 'website' },
    twitter: { title: app.title, description: app.description },
  };
}

export default async function ProductPage({ params }: Props) {
  const { product } = await params;
  const app = getApp(product);
  if (!app) notFound();
  const url = `https://feji.fi/${product}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication', '@id': `${url}#app`,
        name: app.name, url, description: app.description,
        applicationCategory: app.category,
        image: `https://feji.fi/images/${product}-icon.webp`,
        author: { '@id': 'https://feji.fi/#organization' },
        ...(product === 'styrka' ? { operatingSystem: 'iOS', downloadUrl: storeUrl } : { operatingSystem: 'iOS, iPadOS', ...(orkaStoreUrl ? { downloadUrl: orkaStoreUrl } : {}) }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Feji Studios', item: 'https://feji.fi/' },
          { '@type': 'ListItem', position: 2, name: app.name, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <Header />
      <main className="app-page wrap" id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <nav className="app-breadcrumb" aria-label="Breadcrumb"><a href="/">Feji Studios</a><span aria-hidden="true"> / </span><span aria-current="page">{app.name}</span></nav>
        <div className="app-intro">
          <Image unoptimized src={`/images/${product}-icon.webp`} width={64} height={64} alt={`${app.name} app icon`} />
          <p className="eyebrow">{product === 'orka' ? 'CLASSES. TASKS. DEADLINES.' : 'SETS. REPS. PROGRESS.'}</p>
          <h1>{app.heading}</h1>
          <p>{app.intro}</p>
          {product === 'styrka'
            ? <a className="pill dark" href={storeUrl} target="_blank" rel="noopener noreferrer">Download on the App Store ↗</a>
            : orkaStoreUrl
              ? <a className="pill dark" href={orkaStoreUrl} target="_blank" rel="noopener noreferrer">Download on the App Store ↗</a>
              : <p className="pill app-coming-soon">Coming soon to the App Store</p>}
        </div>
        {product === 'orka' && (
          <section className="app-highlights" aria-labelledby="orka-features">
            <h2 id="orka-features">What Orka does</h2>
            <ul>
              {orkaHighlights.map((item) => (
                <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>
              ))}
            </ul>
          </section>
        )}
        <div className="app-features">
          {app.features.map((feature) => (
            <section key={feature.title}>
              <div><h2>{feature.title}</h2><p>{feature.text}</p></div>
              <Image unoptimized src={`/images/${feature.image}.webp`} width={1206} height={2622} loading="lazy" alt={feature.alt} />
            </section>
          ))}
        </div>
        {product === 'orka' && (
          <section className="app-support app-google" aria-labelledby="orka-google">
            <h2 id="orka-google">How Orka uses Google Calendar</h2>
            <ul>
              <li>Connecting Google Calendar is optional, and access is read-only.</li>
              <li>Orka uses it only to show the calendars and events you select, inside the app and its widgets.</li>
              <li>Data goes directly between your device and Google. It never reaches Feji Studios servers.</li>
              <li>Your Google data is not used for advertising, not sold and not passed to anyone else.</li>
              <li>You can disconnect at any time in the app, or revoke access in your Google Account.</li>
            </ul>
            <p>Read the <a href="/orka/privacy">Orka Privacy Policy</a> for full details.</p>
          </section>
        )}
        <section className="app-support">
          <h2>Made by Feji Studios</h2>
          <p>{app.name} is built by independent developer Miki Piispanen. For questions or feedback, email <a href="mailto:hello@feji.fi">hello@feji.fi</a>.</p>
          <nav aria-label={`${app.name} information`}>
            <a href={`/${product}/privacy`}>{app.name} privacy policy</a>
            <a href={`/${product}/terms`}>{app.name} terms and conditions</a>
            {product === 'orka' && <a href="/orka/support">Orka support</a>}
            <a href={product === 'orka' ? '/styrka' : '/orka'}>Explore {product === 'orka' ? 'Styrka gym tracker' : 'Orka planner'}</a>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
