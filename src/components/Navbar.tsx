'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Ulam Stories', path: '/ulam' },
    { name: 'Kape Corner', path: '/kape-corner' },
    { name: 'Food Trips', path: '/food-trips' },
    { name: 'About Me', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/images/logo.png" alt="Feed the Curious Logo" width={46} height={46} className="brand-logo-img" />
          <div className="logo-text">Feed the Curious</div>
        </Link>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname.startsWith(link.path) ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
          {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
        </button>
      </div>
    </nav>
  );
}
