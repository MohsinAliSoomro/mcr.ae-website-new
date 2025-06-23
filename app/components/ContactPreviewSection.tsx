import React from 'react'

export default function ContactPreviewSection() {
    return (
        <section id="contact-preview" className="py-24 px-4 bg-gray-900 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Ready to start the conversation?</h2>
                <p className="text-lg text-slate-400 mb-10">No forms, no friction. Just reach out and let's see how I can help.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                    <a href="https://wa.me/6588227111" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-x-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 transition text-slate-900 font-bold rounded-full shadow-lg text-lg transform hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.001 4.999a9.85 9.85 0 0 0-13.93 13.93L4 20l1.072-1.072a9.85 9.85 0 0 0 13.929-13.93zM7.5 17.5c-.32-.23-.62-.5-.88-.79l-.2-.25c-.56-.63-1-1.39-1.28-2.22-.04-.12-.06-.24-.08-.37-.02-.13-.04-.26-.05-.39-.01-.13-.01-.26-.01-.39v-.1c0-.3.02-.6.06-.9.08-.6.25-1.19.51-1.75.26-.57.6-1.1.99-1.58.52-.64 1.15-1.19 1.85-1.63.17-.11.35-.2.53-.29.35-.18.72-.32 1.1-.42.18-.05.37-.09.56-.12.38-.07.76-.1 1.15-.1.13 0 .26 0 .39.01s.26.02.39.04c.13.01.26.03.39.05.13.02.26.04.38.07.25.06.5.14.73.24.24.1.47.23.68.37.22.14.42.3.61.47s.36.36.52.55c.32.4.6.83.82 1.29.23.46.39.95.49 1.45.05.25.08.5.09.75.01.25.01.5 0 .74-.01.24-.04.48-.08.71-.08.48-.24.95-.47 1.39-.23.44-.54.85-.9 1.22-.37.37-.8.68-1.28.93s-1.01.42-1.58.53c-.28.05-.57.08-.86.1-.29.01-.58.01-.87.01-.3 0-.59-.02-.88-.06a4.2 4.2 0 0 1-.84-.21 3.5 3.5 0 0 1-.78-.35c-.13-.07-.26-.14-.38-.22z" /></svg>
                        WhatsApp Me
                    </a>
                    <a href="mailto:gary@mcr.ae" className="w-full sm:w-auto flex items-center justify-center gap-x-3 px-8 py-4 bg-fuchsia-500 hover:bg-fuchsia-400 transition text-slate-900 font-bold rounded-full shadow-lg text-lg transform hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    )
}
