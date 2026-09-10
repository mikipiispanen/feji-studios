import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import { Header, Footer } from './shared';
import Motion from './motion';
import Sticker from './sticker';
import Character from './character';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div id="top" />
        <section className="hero wrap" data-expression="wink">
          <div className="hero-art" aria-hidden="true">
            <span className="glass-chip chip-one">
              <Character />
            </span>
            <span className="little-note">keep it simple</span>
            <span className="glass-chip chip-two">
              <Image
                unoptimized
                src="/images/styrka-icon.webp"
                alt=""
                width="84"
                height="84"
              />
            </span>
          </div>
          <p className="eyebrow hero-enter">
            INDEPENDENT DEVELOPER. SIMPLE APPS.
          </p>
          <h1 className="hero-enter">
            Simple apps.
            <br />
            For real <em>life.</em>
          </h1>
          <p className="hero-description hero-enter">
            I build apps that are easy to use.
            <br />
            Fewer distractions. More time for what matters.
          </p>
          <Link className="pill hero-enter" href="#apps">
            Meet the apps <ArrowDown size={17} />
          </Link>
          <div className="hero-bottom">
            <span>Designed & built by Miki Piispanen</span>
            <span>
              Scroll to explore <ArrowDown size={13} />
            </span>
          </div>
        </section>
        <section className="work wrap" id="apps">
          <div className="section-label">
            <span>LESS CLUTTER. MORE PURPOSE.</span>
            <span>01 — 02</span>
          </div>
          <article
            className="product orka reveal"
            id="orka"
            data-expression="happy"
          >
            <div className="product-copy">
              <div className="product-name">
                <Image
                  unoptimized
                  src="/images/orka-icon.webp"
                  alt="Orka app icon"
                  width="54"
                  height="54"
                />
                <span>Orka</span>
              </div>
              <span className="status">
                <i /> OUT NOW · FREE TO DOWNLOAD
              </span>
              <h2>
                A clearer head.
                <br />A calmer day.
              </h2>
              <p>
                Classes, tasks, and deadlines in one place. A simple planner
                that makes it easier to get on with your day.
              </p>
              <Link className="pill dark" href="#orka-story">
                A closer look <ArrowUpRight size={18} />
              </Link>
              <div className="product-category">
                YOUR DAY, A LITTLE MORE TOGETHER.
              </div>
            </div>
            <div className="product-visual orka-visual">
              <div className="glass-orbit" />
              <Sticker className="peek-character" initial="happy" />
              <div className="phone phone-back">
                <Image
                  unoptimized
                  src="/images/orka-3.webp"
                  alt="Orka Planner with Quick Capture"
                  width="1206"
                  height="2622"
                  loading="lazy"
                />
              </div>
              <div className="phone phone-front">
                <Image
                  unoptimized
                  src="/images/orka-1.webp"
                  alt="Orka Today timeline and upcoming classes"
                  width="1206"
                  height="2622"
                  loading="lazy"
                />
              </div>
              <span className="visual-note">everything in one place ↗</span>
            </div>
          </article>
          <div id="orka-story" className="story">
            <div className="story-heading reveal">
              <Sticker className="story-sticker" initial="wondering" />
              <h2>
                Big day?
                <br />
                <em>Small steps.</em>
              </h2>
              <p>
                See what’s next.
                <br />
                Add a task. Get on with your day.
              </p>
            </div>
            <div className="story-layout">
              <div className="story-device">
                <div className="phone">
                  <Image
                    unoptimized
                    id="story-screen"
                    src="/images/orka-1.webp"
                    alt="Orka Today view"
                    width="1206"
                    height="2622"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="story-steps">
                <section
                  className="story-step"
                  data-screen="1"
                  data-expression="happy"
                >
                  <span className="step-number">01 / SEE YOUR DAY</span>
                  <h3>Start with today.</h3>
                  <p>
                    Your timeline and upcoming classes, together in one calm
                    view. See where you need to be, and what’s coming next.
                  </p>
                  <Image
                    unoptimized
                    className="mobile-screen"
                    src="/images/orka-1.webp"
                    alt="Today's classes in Orka"
                    width="1206"
                    height="2622"
                    loading="lazy"
                  />
                </section>
                <section
                  className="story-step"
                  data-screen="2"
                  data-expression="wondering"
                >
                  <span className="step-number">
                    02 / GET IT OUT OF YOUR HEAD
                  </span>
                  <h3>
                    A thought.
                    <br />
                    Then a plan.
                  </h3>
                  <p>
                    Quick Add gives that task, event, deadline, or exam a place
                    to go. Review the details before adding it to your planner.
                  </p>
                  <Image
                    unoptimized
                    className="mobile-screen"
                    src="/images/orka-2.webp"
                    alt="Orka Quick Add review"
                    width="1206"
                    height="2622"
                    loading="lazy"
                  />
                </section>
                <section
                  className="story-step"
                  data-screen="3"
                  data-expression="wink"
                >
                  <span className="step-number">03 / FIND YOUR SPACE</span>
                  <h3>
                    All together.
                    <br />
                    Easy to find.
                  </h3>
                  <p>
                    Keep your plans in one place, so you can get back to the day
                    in front of you.
                  </p>
                  <Link className="text-link" href="/orka/privacy">
                    Orka privacy <ArrowUpRight size={15} />
                  </Link>
                  <Image
                    unoptimized
                    className="mobile-screen"
                    src="/images/orka-3.webp"
                    alt="Orka Planner"
                    width="1206"
                    height="2622"
                    loading="lazy"
                  />
                </section>
              </div>
            </div>
          </div>
          <article
            className="product styrka reveal"
            id="styrka"
            data-expression="cool"
          >
            <div className="product-copy">
              <div className="product-name">
                <Image
                  unoptimized
                  className="styrka-icon"
                  src="/images/styrka-icon.webp"
                  alt="Styrka app icon"
                  width={48}
                  height={48}
                />
                <span>Styrka</span>
              </div>
              <span className="status">
                <i /> AVAILABLE FOR IOS
              </span>
              <h2>
                Less tapping.
                <br />
                More lifting.
              </h2>
              <p>
                Log your sets. See your progress. Get back to the next rep. Gym
                tracking that stays out of your way.
              </p>
              <Link
                className="pill light"
                href="https://apps.apple.com/fi/app/styrka-gym-tracker/id6761281378"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store <ArrowUpRight size={18} />
              </Link>
              <div className="product-category">
                YOUR EFFORT. YOUR PROGRESS.
              </div>
            </div>
            <div className="product-visual styrka-visual">
              <div className="dark-orbit" />
              <div className="phone phone-back">
                <Image
                  unoptimized
                  src="/images/styrka-1.webp"
                  alt="Styrka progress tracking"
                  width="1206"
                  height="2622"
                  loading="lazy"
                />
              </div>
              <div className="phone phone-front">
                <Image
                  unoptimized
                  src="/images/styrka-4.webp"
                  alt="Styrka workout calendar and workout history"
                  width="1206"
                  height="2622"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
          <div className="styrka-reach reveal" aria-label="Styrka milestones">
            <p>A small app, finding its people.</p>
            <div>
              <strong>100+</strong>
              <span>countries with Styrka users</span>
            </div>
            <div>
              <strong>#1</strong>
              <span>
                Top Paid Health &amp; Fitness
                <br />
                in multiple countries
              </span>
            </div>
          </div>
          <div className="styrka-details reveal">
            <div>
              <span>01</span>
              <h3>Just you and your training.</h3>
              <p>
                Sets, reps, weights, and reusable workout templates. The
                essentials, ready when you are.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Progress you can see.</h3>
              <p>
                Review your lifts and see how your training adds up over time.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Go offline. Keep going.</h3>
              <p>
                Track without an internet connection, with iCloud sync across
                your Apple devices.
              </p>
            </div>
          </div>
        </section>
        <section
          className="about wrap reveal"
          id="about"
          data-expression="happy"
        >
          <div className="about-character">
            <Sticker initial="cool" />
            <span>
              one developer,
              <br />
              a clear focus.
            </span>
          </div>
          <p className="eyebrow">THE DEVELOPER BEHIND FEJI STUDIOS</p>
          <h2>
            Simple by design.
            <br />
            <em>Useful every day.</em>
          </h2>
          <p>
            I’m Miki, the independent developer behind Feji Studios. I design
            and build apps around a simple idea: the things you use every day
            should be easy to use. With Styrka and Orka, I focus on clear
            interfaces, efficient workflows, and only the features that help.
          </p>
          <Link className="text-link" href="mailto:fejistudios@gmail.com">
            Say hello <MoveUpRight size={19} />
          </Link>
        </section>
        <section
          className="contact wrap reveal"
          id="contact"
          data-expression="wink"
        >
          <span className="eyebrow">
            QUESTIONS, FEEDBACK, OR AN OPPORTUNITY?
          </span>
          <Link href="mailto:fejistudios@gmail.com">
            Let’s talk.
            <ArrowUpRight />
          </Link>
          <p>fejistudios@gmail.com</p>
        </section>
      </main>
      <Footer />
      <Motion />
    </>
  );
}
