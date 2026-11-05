import type { Metadata } from 'next';
import { Header, Footer } from './shared';

const title = 'Varva Support';
const description =
  'Get help with Varva, the Heat, Cold and Contrast practice tracker by Feji Studios. Set your weekly practice, back up your record, move to a new iPhone and add widgets.';
export const varvaSupportMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/varva/support' },
  openGraph: { title, description, url: '/varva/support' },
  twitter: { title, description },
};

const faq = [
  {
    question: 'How do I set or change my weekly practice?',
    answer: (
      <p>
        Choose it when you first open Varva, then change it from Today or in
        <strong> Settings › Weekly practice</strong>. Set how many Heat, Cold
        and Contrast sessions you want to keep each week. After your first week,
        a change starts on the following Monday, so each week is measured
        against the goal you set for it.
      </p>
    ),
  },
  {
    question: 'What is Discipline?',
    answer: (
      <p>
        Discipline is how closely the week’s sessions match the weekly practice
        you chose. Each practice counts equally, and extra sessions never count
        above 100%. It measures follow-through. It isn’t a health, fitness or
        recovery score.
      </p>
    ),
  },
  {
    question: 'How do I log, repeat, edit or delete a session?',
    answer: (
      <p>
        Log a session from Today when you finish. You can repeat your last
        session or start from a saved routine, and Varva always shows the
        details for review before saving. To change a session, open it in the
        <strong> Journal</strong> and choose <strong>Edit</strong> or
        <strong> Delete Session</strong>.
      </p>
    ),
  },
  {
    question: 'Can I take a break from my weekly goals?',
    answer: (
      <p>
        Yes. In <strong>Settings › Plan a break</strong>, choose 1 to 12 weeks.
        The break begins next Monday, weeks without goals have no Discipline
        score, and your current practice resumes automatically afterwards. Your
        journal stays open throughout. To change or end a planned break, edit
        your weekly practice.
      </p>
    ),
  },
  {
    question: 'How do reminders work?',
    answer: (
      <p>
        Turn them on in <strong>Settings › Practice reminders</strong> and
        choose the days and time that suit you. Reminders are local
        notifications, scheduled for the next eight weeks and refreshed whenever
        you open Varva. They pause during weeks without goals. If you haven’t
        opened Varva for eight weeks, they stop until you open it again. If no
        reminders arrive, check that notifications are allowed for Varva in iOS
        Settings.
      </p>
    ),
  },
  {
    question: 'How do I add the Varva widget?',
    answer: (
      <p>
        Add it like any other widget: touch and hold your Home Screen or Lock
        Screen, choose to edit or customise it, then add Varva’s
        <strong> Weekly Practice</strong> widget. It shows this week’s
        Discipline, your progress and what remains.
      </p>
    ),
  },
  {
    question: 'How do I back up my record or move it to a new iPhone?',
    answer: (
      <p>
        Varva doesn’t sync, so keep your own backup. Open
        <strong> Settings › Backups &amp; export</strong>, tap
        <strong> Save backup</strong> and save the file somewhere you trust,
        such as iCloud Drive or a computer. On the new iPhone, install Varva,
        open <strong>Settings › Backups &amp; export</strong>, tap
        <strong> Restore a backup</strong> and choose the file. You’ll see what
        it contains before it replaces the history on that iPhone.
      </p>
    ),
  },
  {
    question: 'Can I open my sessions in a spreadsheet?',
    answer: (
      <p>
        Yes. <strong>Settings › Backups &amp; export › Export sessions as
        CSV</strong> creates a file you can open in Numbers, Excel or Google
        Sheets. Contrast phases appear as separate rows with the same session
        ID. CSV files are for reading; use a complete backup to restore.
      </p>
    ),
  },
  {
    question: 'Does Varva sync with iCloud or Apple Health?',
    answer: (
      <p>
        No. Varva keeps your record on your iPhone and doesn’t connect to Apple
        Health or sync between devices. Use a complete backup to keep a copy or
        to move to another iPhone.
      </p>
    ),
  },
  {
    question: 'Varva says it couldn’t open my saved data. What should I do?',
    answer: (
      <p>
        Varva never deletes your record to recover from an error. Close Varva
        and open it again; if that doesn’t help, restart your iPhone. If the
        message stays, email us before deleting or reinstalling the app,
        because deleting Varva removes its data from your iPhone.
      </p>
    ),
  },
];

export default function VarvaSupport() {
  return (
    <>
      <Header />
      <main className="legal wrap" id="main-content">
        <a className="legal-back" href="/varva">
          ← Back to Varva
        </a>
        <p className="eyebrow">VARVA / SUPPORT</p>
        <h1>Varva Support</h1>
        <p className="legal-intro">
          Questions, problems or feedback? Email{' '}
          <a className="support-email" href="mailto:hello@feji.fi">
            hello@feji.fi
          </a>{' '}
          and Feji Studios will get back to you. Please don’t send reflections
          or backup files unless your question needs them.
        </p>
        <div className="support-body">
          <h2 className="support-heading">Frequently asked questions</h2>
          {faq.map((item) => (
            <section className="legal-section" key={item.question}>
              <h3>{item.question}</h3>
              {item.answer}
            </section>
          ))}
          <nav className="legal-related" aria-label="Varva legal information">
            <a className="text-link" href="/varva/privacy">
              Varva Privacy Policy ↗
            </a>
            <a className="text-link" href="/varva/terms">
              Varva Terms &amp; Conditions ↗
            </a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
