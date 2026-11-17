import type { Metadata } from 'next';
import { Header, Footer } from './shared';

const title = 'BanBan Support';
const description =
  'Get help with BanBan by Feji Studios: create an online party, join with a six-digit PIN, reconnect, understand reveal modes or play on one phone.';
export const banbanSupportMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/banban/support' },
  openGraph: { title, description, url: '/banban/support' },
  twitter: { title, description },
};

const faq = [
  {
    question: 'How do I create an online party?',
    answer: (
      <p>
        Open <strong>Play › Split Decision › Host a Party</strong>, choose a
        nickname and tap <strong>Create Party</strong>. Share the six-digit PIN
        with your friends. Each player joins from their own phone, and the host
        starts when everyone is ready. Online games need 3 to 8 players and an
        internet connection.
      </p>
    ),
  },
  {
    question: 'How do I join with a PIN? Do I need an account?',
    answer: (
      <p>
        Choose <strong>Join Party</strong> in Split Decision, enter the host’s
        six-digit PIN and pick a nickname. There are no accounts or passwords.
        If you cannot join, check the PIN with the host and make sure the party
        is still open and has room for you. Keep the PIN within your group.
      </p>
    ),
  },
  {
    question: 'What happens if I lose my connection?',
    answer: (
      <p>
        BanBan tries to reconnect and keeps credentials on your phone so it can
        restore your seat while the party and seat are still available. Check
        your connection and return to the app. A guest away for more than
        3 minutes can lose their seat, and a host away for more than 5 minutes
        can cause the room to close. Rooms also close after 30 minutes without
        activity or 6 hours in total. Rejoining and recovering progress are
        not guaranteed after a room closes or expires; start a new party if
        needed.
      </p>
    ),
  },
  {
    question: 'What is the difference between Mystery Reveal and Open Reveal?',
    answer: (
      <p>
        <strong>Open Reveal</strong> shows who picked each side, with players’
        predictions and points when enabled. <strong>Mystery Reveal</strong> shows group
        totals without directly displaying individual ballots with names;
        individual predictions stay hidden. Mystery is not a guarantee of
        anonymity: totals, scores or a small group can still give someone
        clues about a choice.
      </p>
    ),
  },
  {
    question: 'How is One Phone mode different from online play?',
    answer: (
      <p>
        In <strong>One Phone</strong> mode, everyone passes the same phone
        around. The game stays on that phone and does not need the online
        service. In an online party, everyone uses their own phone and the
        server keeps the party in sync over the internet. Online parties use
        temporary room records rather than accounts or a permanent game
        history.
      </p>
    ),
  },
  {
    question: 'Multiplayer is temporarily unavailable. What can we do?',
    answer: (
      <p>
        Check that your phones have an internet connection, then try again
        later. During the TestFlight beta, online parties use a staging service
        that may be paused or reset while testing. If an old party no longer
        opens, create a new one when the service is available. You can still
        play <strong>One Phone</strong> mode together.
      </p>
    ),
  },
  {
    question: 'How do I report a problem or share an idea?',
    answer: (
      <p>
        Email <a href="mailto:hello@feji.fi">hello@feji.fi</a> with what happened,
        your BanBan version, iOS version and whether you were playing online or
        on one phone. For a connection problem, the approximate time and any
        error message help. TestFlight testers can also send feedback through
        TestFlight. Remove private information from screenshots and never
        include a secret reconnection token. Ideas and suggestions are welcome.
      </p>
    ),
  },
];

export default function BanBanSupport() {
  return (
    <>
      <Header />
      <main className="legal wrap" id="main-content">
        <a className="legal-back" href="/">
          ← Back to Feji Studios
        </a>
        <p className="eyebrow">BANBAN / SUPPORT</p>
        <h1>BanBan Support</h1>
        <p className="legal-intro">
          Party not going to plan? Questions or feedback? Email{' '}
          <a className="support-email" href="mailto:hello@feji.fi">
            hello@feji.fi
          </a>{' '}
          and Feji Studios will help. Send only the details needed to explain
          the issue.
        </p>
        <div className="support-body">
          <h2 className="support-heading">Frequently asked questions</h2>
          {faq.map((item) => (
            <section className="legal-section" key={item.question}>
              <h3>{item.question}</h3>
              {item.answer}
            </section>
          ))}
          <nav className="legal-related" aria-label="BanBan legal information">
            <a className="text-link" href="/banban/privacy">
              BanBan Privacy Policy ↗
            </a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
