import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
    return (
        <div className="py-20 md:py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-transparent bg-clip-text">
                        Beyond Consulting: Your Fractional CMO Partner
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        I'm a thinker and a doer, bridging the gap between high-level strategy and hands-on execution.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-sm border border-slate-200/80">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="md:col-span-1">
                            <Image
                                src="https://res.cloudinary.com/dtrox8oam/image/upload/v1749199787/Gary_McRae_oj3azc.png"
                                alt="Gary McRae, Fractional CMO"
                                width={500}
                                height={500}
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="font-heading text-3xl font-bold mb-4">An Integrated Leadership Approach</h2>
                            <p className="text-slate-600 mb-4">
                                For over a decade in Singapore, I have partnered with organizations to navigate complex marketing challenges. My global experience is rooted in sectors where trust and precision are paramount, including <strong className="font-semibold text-slate-700">government</strong>, <strong className="font-semibold text-slate-700">professional services</strong>, <strong className="font-semibold text-slate-700">insurance</strong>, and <strong className="font-semibold text-slate-700">wealth management</strong>. This background has given me a 360-degree view of what it takes to build and scale enduring brands.
                            </p>
                            <p className="text-slate-600 mb-4">
                                I created this practice to be a different kind of consultant—one who is as focused on execution as they are on strategy. My approach is to move beyond the theoretical and become a true, hands-on partner. This philosophy also led me to found <a href="https://www.theclaritypractice.asia" target="_blank" rel="noopener noreferrer" className="text-violet-600 font-semibold hover:underline">The Clarity Practice</a>, a firm dedicated to bringing strategic executive and corporate coaching to leaders.
                            </p>
                            <p className="text-slate-600">
                                The partnership I offer is simple: brilliant strategy, relentless execution, and a clear path to growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">My Core Philosophy</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">These are the principles that guide every client engagement.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center mb-24">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80">
                        <h3 className="font-heading text-xl font-bold mb-2">Thinker & Doer</h3>
                        <p className="text-slate-600">I build the roadmap and help pave the way. Strategy is nothing without execution, and I am deeply involved in both.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80">
                        <h3 className="font-heading text-xl font-bold mb-2">Clarity & Action</h3>
                        <p className="text-slate-600">I cut through the noise to focus on what matters. We will make clear decisions and execute with speed and purpose.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80">
                        <h3 className="font-heading text-xl font-bold mb-2">An Honest Partner</h3>
                        <p className="text-slate-600">You will always get transparent communication and radical honesty. No fluff, no jargon—just a clear path forward.</p>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Certifications & Accreditations</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">A commitment to professional standards and continuous learning.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 mb-24 shadow-sm border border-slate-200/80">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        <Image
                            src="https://res.cloudinary.com/dtrox8oam/image/upload/v1749266704/AI_Ethics_Governance_Singapore_gj40qi.png"
                            alt="Certified AI Ethics and Governance Professional (CAIG)"
                            width={96}
                            height={96}
                            className="h-24 object-contain"
                        />
                        <Image
                            src="https://res.cloudinary.com/dtrox8oam/image/upload/v1749266382/Gary_McRae_SMNE_Accreditation_gbgfcr.jpg"
                            alt="AASBC Accredited Small Business Consultant"
                            width={96}
                            height={96}
                            className="h-24 object-contain"
                        />
                    </div>
                </div>

                <div className="text-center bg-white p-12 rounded-3xl border border-slate-200/80">
                    <h2 className="font-heading text-3xl font-extrabold mb-4">Let's build something great together.</h2>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8">
                        If my approach resonates with you, I'd love to hear about the challenges and opportunities your business is facing.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Link
                            href="/services"
                            className="inline-block bg-white border border-slate-300 hover:bg-slate-100 transition-colors text-slate-800 font-bold px-8 py-3 rounded-full"
                        >
                            Explore My Services
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block bg-violet-600 hover:bg-violet-700 transition-colors text-white font-bold px-8 py-3 rounded-full"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
