import Link from 'next/link';
import Character from './character';
import { ArrowUpRight } from 'lucide-react';
export function Header() {
  return (
    <>
      <Link className="skip-link" href="#main-content">
        Skip to content
      </Link>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Feji Studios home">
          <Character compact />
          <span className="wordmark-text">
            feji<span>studios</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#apps">Apps</Link>
          <Link href="/#about">About</Link>
          <Link className="nav-contact" href="mailto:hello@feji.fi">
            Say hello <ArrowUpRight size={15} />
          </Link>
        </nav>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          feji<span>studios</span>
        </Link>
        <p>Simple apps. Built with purpose.</p>
        <Link href="/#top" className="back-top">
          Back to top ↑
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Feji Studios</span>
        <div>
          <span>Styrka</span>
          <Link href="/styrka/privacy">Privacy</Link>
          <Link href="/styrka/terms">Terms</Link>
        </div>
        <div>
          <span>Orka</span>
          <Link href="/orka/privacy">Privacy</Link>
          <Link href="/orka/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
