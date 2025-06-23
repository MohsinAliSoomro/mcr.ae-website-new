import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <header className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl w-full">
                <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                    Ready to Unlock Your Next Level of Growth?
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                    I'm Gary. I help businesses in Singapore and Asia break through with Fractional CMO leadership, digital know-how, and hands-on partnership.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-cyan-400 hover:bg-fuchsia-500 transition-all duration-300 ease-in-out text-slate-900 font-bold px-10 py-4 rounded-full text-lg shadow-2xl transform hover:scale-105"
                >
                    Let's Build Momentum
                </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <a href="#services-cards" aria-label="Scroll down">
                    <div className="w-8 h-12 border-2 border-slate-200/50 rounded-full flex justify-center items-start p-1">
                        <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </header>
    )
}
