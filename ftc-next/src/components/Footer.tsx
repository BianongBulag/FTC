import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '32px', color: 'var(--secondary)', marginBottom: '5px' }}>
          Feed the Curious
        </h2>
        <p className="tagline" style={{ color: 'white', opacity: 0.8 }}>
          Food &middot; Coffee &middot; Culture &middot; Stories
        </p>

        <ul className="footer-nav">
          <li><Link href="/ulam">Ulam</Link></li>
          <li><Link href="/kape-corner">Kape Corner</Link></li>
          <li><Link href="/food-trips">Food Trips</Link></li>
          <li><Link href="/about">About Me</Link></li>
        </ul>

        <div className="copyright">
          &copy; 2026 Feed the Curious by Adryenne. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
