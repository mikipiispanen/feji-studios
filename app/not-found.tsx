import Link from 'next/link';
import { Header, Footer } from './shared';
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found" id="main-content">
        <p className="eyebrow">404 — A LITTLE LOST?</p>
        <h1>Let’s head home.</h1>
        <p>That page isn’t here. My apps are just a click away.</p>
        <Link className="pill dark" href="/">
          Back to Feji Studios ↗
        </Link>
      </main>
      <Footer />
    </>
  );
}
