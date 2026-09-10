'use client';
import { useEffect } from 'react';
export default function Motion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');

    const reveals = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            reveals.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      if (!preference.matches) el.classList.add('will-reveal');
      reveals.observe(el);
    });
    const screens: Record<string, string> = {
      '1': 'Orka Today view',
      '2': 'Orka Quick Add review',
      '3': 'Orka Planner',
    };
    const stories = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !preference.matches &&
            window.innerWidth > 700
          ) {
            const n = (entry.target as HTMLElement).dataset.screen;
            const img = document.getElementById(
              'story-screen',
            ) as HTMLImageElement | null;
            if (img && n) {
              img.src = `/images/orka-${n}.webp`;
              img.alt = screens[n];
              img.animate(
                [
                  { opacity: 0.3, transform: 'translateY(8px)' },
                  { opacity: 1, transform: 'translateY(0)' },
                ],
                { duration: 450, easing: 'ease-out' },
              );
            }
          }
        }),
      { rootMargin: '-30% 0px -35% 0px' },
    );
    document
      .querySelectorAll('.story-step')
      .forEach((el) => stories.observe(el));
    const expressionSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-expression]'),
    );
    let lastFace = '';
    const updateFace = () => {
      if (preference.matches) return;
      const line = window.innerHeight * 0.55;
      let face = 'wink';
      for (const section of expressionSections) {
        if (section.getBoundingClientRect().top <= line)
          face = section.dataset.expression || face;
      }
      if (face !== lastFace) {
        document.documentElement.dataset.face = face;
        lastFace = face;
      }
    };
    updateFace();
    const stickers = Array.from(
      document.querySelectorAll<HTMLElement>('[data-sticker]'),
    );
    const steps = Array.from(
      document.querySelectorAll<HTMLElement>('.story-step'),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.site-header nav a[href^="/#"]',
      ),
    );
    const sectionLinks = navLinks.map((link) => ({
      link,
      section: document.getElementById(link.hash.slice(1)),
    }));
    const updateFeedback = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(
          maxScroll > 0
            ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
            : 0,
        ),
      );
      let active: HTMLAnchorElement | undefined;
      for (const item of sectionLinks)
        if (
          item.section &&
          item.section.getBoundingClientRect().top < window.innerHeight * 0.45
        )
          active = item.link;
      for (const link of navLinks) {
        if (link === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
      for (const step of steps) {
        const rect = step.getBoundingClientRect();
        step.classList.toggle(
          'is-reading',
          rect.top < window.innerHeight * 0.6 &&
            rect.bottom > window.innerHeight * 0.4,
        );
      }
      for (const sticker of stickers) {
        const rect = sticker.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) continue;
        if (preference.matches) {
          sticker.dataset.mood = sticker.dataset.initial;
          sticker.style.removeProperty('--sticker-turn');
          sticker.style.removeProperty('--sticker-lift');
          continue;
        }
        const phase = Math.min(
          1,
          Math.max(0, 1 - rect.top / window.innerHeight),
        );
        sticker.dataset.mood =
          phase < 0.35
            ? sticker.dataset.initial
            : phase < 0.72
              ? 'wink'
              : 'happy';
        sticker.style.setProperty('--sticker-turn', `${(phase - 0.5) * 12}deg`);
        sticker.style.setProperty('--sticker-lift', `${(phase - 0.5) * -12}px`);
      }
    };
    updateFeedback();
    let frame = 0;
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          '--hero-drift',
          `${Math.min(window.scrollY * 0.065, 35)}px`,
        );
        updateFace();
        updateFeedback();
        frame = 0;
      });
    };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    preference.addEventListener('change', scroll);
    const resize = new ResizeObserver(scroll);
    resize.observe(document.body);
    return () => {
      delete document.documentElement.dataset.face;
      reveals.disconnect();
      stories.disconnect();
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      preference.removeEventListener('change', scroll);
      resize.disconnect();
      document.documentElement.style.removeProperty('--scroll-progress');
      navLinks.forEach((link) => link.removeAttribute('aria-current'));
      cancelAnimationFrame(frame);
      document
        .querySelectorAll('.will-reveal')
        .forEach((el) => el.classList.remove('will-reveal'));
    };
  }, []);
  return null;
}
