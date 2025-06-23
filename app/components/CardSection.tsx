import React from 'react';

const services = [
    {
        title: "Fractional CMO Leadership",
        description: "Get C-level strategic thinking without the full-time overhead.",
    },
    {
        title: "Tech, Data & Automation",
        description: "Turn raw data into actionable insights that drive real business growth.",
    },
    {
        title: "Future-Ready Branding",
        description: "Develop a compelling brand story that resonates with your audience.",
    },
    {
        title: "Team Mentoring",
        description: "Empower your in-house team to build a high-performance culture.",
    },
];

export default function CardSection() {
    return (
        <section id="services-cards" className="py-28 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold mb-4 text-slate-900">
                    A Leader, a Builder, a Partner.
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                    I provide the exact expertise you need, right when you need it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="text-lg font-bold mb-2 text-slate-900">
                                {service.title}
                            </h3>
                            <p className="text-slate-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="/services"
                        className="inline-block rounded-full w-1/5 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-5 text-white font-semibold shadow-lg hover:shadow-xl transition  hover:-translate-y-1"
                    >
                        Explore All Services
                    </a>
                </div>
            </div>
        </section>
    );
}
