import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../shared';

type Feature = { title: string; text: string; image: string; alt: string };
const apps: Record<'orka' | 'styrka' | 'varva', {
  name: string; title: string; description: string; heading: string; category: string;
  eyebrow: string; intro: string; operatingSystem: string; features: Feature[];
}> = {
  orka: {
    name: 'Orka',
    title: 'Orka — Planner for Classes, Tasks & Deadlines',
    description: 'Orka is a student planner for iPhone and iPad. Keep tasks, deadlines, exams and courses in one place, and see your class schedule beside your plan.',
    heading: 'Orka: your day, a little more together.',
    category: 'ProductivityApplication',
    eyebrow: 'CLASSES. TASKS. DEADLINES.',
    intro: 'Orka is a student planner for iPhone and iPad. Keep tasks, deadlines and exams in one planner, see your class schedule beside them, and get on with your day.',
    operatingSystem: 'iOS, iPadOS',
    features: [
      { title: 'See your classes and tasks together', text: 'The Today view brings your timeline and upcoming classes into one place. Check where you need to be and what is coming next.', image: 'orka-1', alt: 'Orka Today timeline showing classes and tasks' },
      { title: 'Turn a thought into a plan', text: 'Quick Add gives a task, event, deadline or exam a place to go. Processing happens on your device, and you review the details before adding them to your planner.', image: 'orka-2', alt: 'Orka Quick Add with details ready for review' },
      { title: 'Keep your plans easy to find', text: 'Review your plans in the Planner view. Orka is coming soon as a free download, with every colour kit and calendar connection included.', image: 'orka-3', alt: 'Orka Planner with Quick Capture' },
    ],
  },
  styrka: {
    name: 'Styrka',
    title: 'Styrka — Simple Gym & Workout Tracker for iOS',
    description: 'Track sets, reps and weights with Styrka for iOS. Build workout templates, review your progress and train offline, with optional iCloud sync.',
    heading: 'Styrka: less tapping, more lifting.',
    category: 'HealthApplication',
    eyebrow: 'SETS. REPS. PROGRESS.',
    intro: 'Styrka is a gym tracker for iOS that keeps workout logging simple. Record your sets, reps and weights, review your training, and get back to the next rep.',
    operatingSystem: 'iOS',
    features: [
      { title: 'Log workouts and review progress', text: 'Keep a record of your sets, reps and weights. Review your lifts to see how your training adds up over time.', image: 'styrka-1', alt: 'Styrka strength training progress tracking' },
      { title: 'Build a routine you can repeat', text: 'Reusable workout templates keep your exercises ready for the next session. Your workout calendar and history make past training easy to find.', image: 'styrka-4', alt: 'Styrka workout calendar and workout history' },
      { title: 'Train offline, sync when you choose', text: 'Log workouts without an internet connection. Optional iCloud sync keeps your training available across your own Apple devices.', image: 'styrka-3', alt: 'Styrka gym tracker interface' },
    ],
  },
  varva: {
    name: 'Varva',
    title: 'Varva — Sauna & Cold Practice Tracker for iPhone',
    description: 'Varva is a private iPhone app for a deliberate Heat, Cold and Contrast practice. Set a weekly goal, log sauna and cold sessions, and see how consistently you keep it.',
    heading: 'Varva: build a practice you can keep.',
    category: 'HealthApplication',
    eyebrow: 'HEAT. COLD. DISCIPLINE.',
    intro: 'Varva is a private iPhone app for people who keep a deliberate sauna and cold practice. Choose how many Heat, Cold and Contrast sessions you want each week, log what you actually did, and see how closely you kept to it.',
    operatingSystem: 'iOS',
    // TODO(Varva screenshots): add feature sections once App Store screenshots exist.
    features: [],
  },
};
// TODO(Orka and Varva App Store links): set these once each app is approved.
const storeUrls: Record<keyof typeof apps, string | null> = {
  orka: null,
  styrka: 'https://apps.apple.com/fi/app/styrka-gym-tracker/id6761281378',
  varva: null,
};
const supportPages = new Set(['orka', 'varva']);
const otherApps: Record<keyof typeof apps, { href: string; label: string }[]> = {
  orka: [{ href: '/styrka', label: 'Explore Styrka gym tracker' }],
  styrka: [{ href: '/orka', label: 'Explore Orka planner' }],
  varva: [
    { href: '/styrka', label: 'Explore Styrka gym tracker' },
    { href: '/orka', label: 'Explore Orka planner' },
  ],
};
const highlights: Partial<Record<keyof typeof apps, { title: string; text: string }[]>> = {
  orka: [
    { title: 'One planner', text: 'Tasks, deadlines and exams live together, so nothing important sits in a separate list.' },
    { title: 'Courses', text: 'Organise your work by course and see what each class needs from you.' },
    { title: 'Today view and widgets', text: 'See the day ahead at a glance in the app and on your Home Screen.' },
    { title: 'Your class schedule', text: 'Show your classes from Apple Calendar, Google Calendar or a school .ics calendar link.' },
    { title: 'Reminders', text: 'Set reminders for the items that matter, scheduled on your device.' },
    { title: 'Made for your whole schedule', text: 'Every colour kit, calendar connection and Find time together is included. Compare friends’ shared calendars to find room in your week.' },
  ],
  varva: [
    { title: 'A weekly practice', text: 'Choose a realistic number of Heat, Cold and Contrast sessions for each week. Plan a break of up to twelve weeks, and your practice resumes on its own.' },
    { title: 'Log when you finish', text: 'Duration, optional temperature in °C or °F, Heat rounds, Contrast phases and a reflection. Repeat your last session or start from a saved routine.' },
    { title: 'Discipline', text: 'See how closely you kept the practice you chose. Each practice counts equally and extra sessions never count above 100%.' },
    { title: 'Journal', text: 'Browse every session by month or year, filter by practice and search your own reflections.' },
    { title: 'Insights', text: 'A calm account of your last 28 days: returns to practice, active days, Heat and Cold time and your own words, with 4-week and 8-week Discipline.' },
    { title: 'Widgets and reminders', text: 'Keep this week’s progress on your Home Screen or Lock Screen, and choose gentle local reminders for the days that suit you.' },
  ],
};
const getApp = (product: string) => product === 'orka' || product === 'styrka' || product === 'varva' ? apps[product] : null;
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
  const key = product as keyof typeof apps;
  const storeUrl = storeUrls[key];
  const appHighlights = highlights[key];
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
        operatingSystem: app.operatingSystem,
        ...(storeUrl ? { downloadUrl: storeUrl } : {}),
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
      <main className={`app-page wrap app-page-${product}`} id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <nav className="app-breadcrumb" aria-label="Breadcrumb"><a href="/">Feji Studios</a><span aria-hidden="true"> / </span><span aria-current="page">{app.name}</span></nav>
        <div className="app-intro">
          <Image unoptimized src={`/images/${product}-icon.webp`} width={64} height={64} alt={`${app.name} app icon`} />
          <p className="eyebrow">{app.eyebrow}</p>
          <h1>{app.heading}</h1>
          <p>{app.intro}</p>
          {storeUrl
            ? <a className="pill dark" href={storeUrl} target="_blank" rel="noopener noreferrer">Download on the App Store ↗</a>
            : <p className="pill app-coming-soon">Coming soon to the App Store</p>}
        </div>
        {appHighlights && (
          <section className="app-highlights" aria-labelledby={`${product}-features`}>
            <h2 id={`${product}-features`}>What {app.name} does</h2>
            <ul>
              {appHighlights.map((item) => (
                <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>
              ))}
            </ul>
          </section>
        )}
        {app.features.length > 0 && (
          <div className="app-features">
            {app.features.map((feature) => (
              <section key={feature.title}>
                <div><h2>{feature.title}</h2><p>{feature.text}</p></div>
                <Image unoptimized src={`/images/${feature.image}.webp`} width={1206} height={2622} loading="lazy" alt={feature.alt} />
              </section>
            ))}
          </div>
        )}
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
        {product === 'varva' && (
          <section className="app-support app-google" aria-labelledby="varva-privacy">
            <h2 id="varva-privacy">Your record stays yours</h2>
            <ul>
              <li>Everything you log is stored on your iPhone. There is no account and no Feji Studios server.</li>
              <li>No ads, no analytics and no tracking. Varva doesn’t upload your sessions.</li>
              <li>Varva doesn’t sync. Save a complete backup or a CSV export whenever you want, and keep it where you choose.</li>
              <li>Discipline measures follow-through on the practice you chose. It isn’t a health, fitness or recovery score.</li>
              <li>A one-time purchase, with no subscription.</li>
            </ul>
            <p>Read the <a href="/varva/privacy">Varva Privacy Policy</a> for full details.</p>
          </section>
        )}
        <section className="app-support">
          <h2>Made by Feji Studios</h2>
          <p>{app.name} is built by independent developer Miki Piispanen. For questions or feedback, email <a href="mailto:hello@feji.fi">hello@feji.fi</a>.</p>
          <nav aria-label={`${app.name} information`}>
            <a href={`/${product}/privacy`}>{app.name} privacy policy</a>
            <a href={`/${product}/terms`}>{app.name} terms and conditions</a>
            {supportPages.has(product) && <a href={`/${product}/support`}>{app.name} support</a>}
            {otherApps[key].map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
