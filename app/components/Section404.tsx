"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Section404() {
    useEffect(() => {
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;
        let animationFrameId: number;

        const animateCursor = () => {
            if (cursorDot && cursorRing) {
                cursorDot.style.left = `${dotX}px`;
                cursorDot.style.top = `${dotY}px`;
                ringX += (dotX - ringX) * 0.2;
                ringY += (dotY - ringY) * 0.2;
                cursorRing.style.left = `${ringX}px`;
                cursorRing.style.top = `${ringY}px`;
                animationFrameId = requestAnimationFrame(animateCursor);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            dotX = e.clientX;
            dotY = e.clientY;
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animateCursor);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing?.classList.add('cursor-interactive'));
            el.addEventListener('mouseleave', () => cursorRing?.classList.remove('cursor-interactive'));
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="min-h-screen w-full text-slate-200 flex flex-col bg-gradient-to-br from-indigo-950 via-sky-500 to-pink-400 cursor-none font-[Inter]">
            <div id="cursor-dot" className="fixed z-[9999] w-2 h-2 bg-orange-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div id="cursor-ring" className="fixed z-[9999] w-10 h-10 border-2 border-lime-400 rounded-full pointer-events-none transition-all duration-200 -translate-x-1/2 -translate-y-1/2"></div>

            <main className="flex-grow flex items-center justify-center text-center p-4">
                <div className="relative z-10 max-w-2xl w-full">
                    <h1 className="text-8xl md:text-9xl font-extrabold mb-4 text-white/80 font-[Plus Jakarta Sans] drop-shadow-md">404</h1>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white font-[Plus Jakarta Sans] drop-shadow-md">
                        Oops! Lost in the Cosmos?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-10 font-light drop-shadow">
                        The page you're looking for seems to have drifted off into another galaxy. Let's get you back on course.
                    </p>
                    <Link href="/" className="inline-block bg-cyan-400 hover:bg-fuchsia-500 transition-all duration-300 ease-in-out text-slate-900 font-bold px-10 py-4 rounded-full text-lg shadow-2xl transform hover:scale-105">
                        Return to Homepage
                    </Link>
                </div>
            </main>

            <footer className="bg-transparent text-slate-400 py-12 px-4 text-sm text-center border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Gary McRae. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
