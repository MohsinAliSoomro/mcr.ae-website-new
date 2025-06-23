"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ✅ FIRST NAV: show only if NOT in hidden list */}
            {pathname === '/' && (
                <nav id="main-nav" className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                    <div
                        id="nav-content"
                        className={`${isScrolled ? 'nav-scrolled' : 'nav-initial'
                            } glass-card font-heading font-bold px-6 py-3 rounded-full flex justify-around items-center text-sm`}
                    >                <Link href="/services" className="nav-link transition-colors duration-300">Services</Link>
                        <Link href="/about" className="cursor-pointer nav-link transition-colors duration-300">About</Link>
                        <Link href="/contact" className="cursor-pointer nav-link transition-colors duration-300">Contact</Link>
                        <Link href="/blog" className="cursor-pointer nav-link transition-colors duration-300">Blog</Link>
                    </div>
                </nav>
            )}

            {/* ✅ SECOND NAV: show on ALL pages EXCEPT home */}
            {pathname !== '/' && (
                <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-lg border-b border-slate-200">
                    <nav className="glass-card font-heading font-bold mx-auto flex max-w-6xl items-center justify-between py-5">
                        {/* Logo or site name */}
                        <Link href="/" className="cursor-pointer font-heading font-bold text-xl text-slate-800">
                            Gary McRae
                        </Link>

                        {/* Nav links */}
                        <ul className="flex gap-6 ">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`cursor-pointer text-md  transition-colors ${pathname === item.href
                                            ? 'text-purple-600'
                                            : 'text-slate-600 hover:text-purple-600'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            )}
        </>

    )
}
