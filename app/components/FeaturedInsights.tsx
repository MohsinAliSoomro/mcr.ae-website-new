'use client';

import Image from 'next/image';

const insights = [
    {
        title: "Managing Up Is Not Leadership: Why Senior Managers Must Lead Down",
        description: "Managing up destroys teams. Real leaders empower downward, building...",
        imageUrl: "/1.jpeg", // Replace with your real path
    },
    {
        title: "Rethinking Leadership in Singapore's High-Performance Culture",
        description: "Singapore's hustle culture burns out leaders. Strategic clarity—not more...",
        imageUrl: "/2.jpeg",
    },
];

export default function FeaturedInsights() {
    return (
        <section className="bg-white rounded-xl mt-20 shadow-sm p-6 md:p-10 max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="font-heading text-4xl font-bold text-gray-800">Featured Insights</h2>
                <p className="text-sm md:text-base text-gray-500 mt-2">
                    Highlighted articles chosen to inform and empower your next strategic move.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {insights.map((insight, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden shadow-md group"
                    >
                        <Image
                            src={insight.imageUrl}
                            alt={insight.title}
                            width={600}
                            height={700}
                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent text-white">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 leading-tight">
                                {insight.title}
                            </h3>
                            <p className="text-sm mb-4">{insight.description}</p>
                            <button className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-xl transition hover:-translate-y-[1px] shadow-sm">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
