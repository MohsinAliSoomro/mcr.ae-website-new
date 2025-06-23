import React from 'react'

export default function PartnerSection() {
    return (
        <section id="why" className="py-24 px-4 bg-slate-50 text-slate-800">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">Your Partner in Growth</h2>
                    <p className="text-lg text-slate-600 mb-8">I don't just advise—I integrate, build, and execute. My approach is hands-on, ensuring that strategy translates directly into action and results.</p>
                    <ul className="space-y-5 text-lg">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div><strong className="font-semibold text-slate-900">Thinker & Doer:</strong> I thrive on both high-level strategy and rolling up my sleeves to get the job done. You get a leader who can build the roadmap and help pave the way.</div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div><strong className="font-semibold text-slate-900">Asia-Focused Experience:</strong> With over a decade of building brands across the region, I understand the cultural and market nuances needed to succeed in Asia.</div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div><strong className="font-semibold text-slate-900">Simplicity & Action:</strong> I believe in cutting through the noise. We'll focus on what matters, make clear decisions, and execute with speed and honesty. No fluff.</div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dtrox8oam/image/upload/v1749199787/Gary_McRae_oj3azc.png"
                        loading="lazy"
                        alt="Gary McRae, Fractional CMO"
                        className="rounded-2xl shadow-2xl w-full max-w-sm h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
