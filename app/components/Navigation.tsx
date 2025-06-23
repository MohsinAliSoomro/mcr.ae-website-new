'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="main-nav" className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div
        id="nav-content"
        className={`${
          isScrolled ? 'nav-scrolled' : 'nav-initial'
        } glass-card font-heading font-bold px-6 py-3 rounded-full flex justify-around items-center text-sm`}
      >
        <Link href="/services" className="nav-link transition-colors duration-300 text-white">
          Services
        </Link>
        <Link href="/about" className="nav-link transition-colors duration-300 text-white">
          About
        </Link>
        <Link href="/contact" className="nav-link transition-colors duration-300 text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
} 