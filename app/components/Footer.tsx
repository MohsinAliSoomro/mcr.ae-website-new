'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const footerItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blog' },
  { href: '/fractional-cmo', label: 'What is a Fractional CMO?' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const pathname = usePathname();

  // useEffect(() => {
  //   document.getElementById('year')!.textContent = new Date().getFullYear().toString();
  // }, []);

  return (
    <footer className={`${pathname === '/' ? ' bg-gray-900 text-slate-400' : 'bg-white text-slate-500'}`}>
      {/* <footer className={`bg-gray-900 text-slate-400`}> */}
      <div className="max-w-6xl mx-auto py-12 px-1">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <img src="https://res.cloudinary.com/dtrox8oam/image/upload/v1749199442/Gary%20McRae%20Fractional%20CMO%20Singapore.jpg" alt="Gary McRae Logo" className="h-16 rounded-lg border-2 border-white/10 shadow-lg" />
            </Link>
          </div>
          <div className="text-center md:text-right font-semibold">
            {footerItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 ${pathname === item.href
                  ? 'text-purple-600'
                  : 'transition-colors hover:text-cyan-400'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={`mt-8 pt-8 ${pathname === '/' ? 'border-t border-white/10' : 'border-t border-slate-200'} flex flex-col sm:flex-row-reverse justify-between items-center text-sm`}>
          <p>&copy; {new Date().getFullYear()} Gary McRae. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/garymcrae/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 