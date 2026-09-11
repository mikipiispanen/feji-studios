import Character from './character';
import { ArrowUpRight } from 'lucide-react';
export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Feji Studios home">
          <Character compact />
          <span className="wordmark-text">
            feji<span>studios</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#apps">Apps</a>
          <a href="/#about">About</a>
          <a className="nav-contact" href="mailto:hello@feji.fi">
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <a className="wordmark" href="/">
          feji<span>studios</span>
        </a>
        <p>Simple apps. Built with purpose.</p>
        <a href="/#top" className="back-top">
          Back to top ↑
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Feji Studios</span>
        <div>
          <a href="/styrka">Styrka</a>
          <a href="/styrka/privacy">Privacy</a>
          <a href="/styrka/terms">Terms</a>
        </div>
        <div>
          <a href="/orka">Orka</a>
          <a href="/orka/privacy">Privacy</a>
          <a href="/orka/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
