import React from 'react'

export default function ContactSection() {
    return (
        <div className="flex-grow flex items-center justify-center py-20 md:py-24 px-4">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-transparent bg-clip-text">
              Let's Start the Conversation
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your growth story. The best way to reach me is directly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/80">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/6588227111"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-8 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-2xl transition-all duration-300"
              >
                <h2 className="font-heading font-bold text-2xl mb-2">WhatsApp</h2>
                <p className="text-slate-600 mb-4">For the quickest response, send me a message.</p>
                <p className="font-semibold text-emerald-600">+65 8822 7111</p>
              </a>
              <a
                href="mailto:gary@mcr.ae"
                className="block text-center p-8 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 rounded-2xl transition-all duration-300"
              >
                <h2 className="font-heading font-bold text-2xl mb-2">Email</h2>
                <p className="text-slate-600 mb-4">For more detailed inquiries, feel free to email me.</p>
                <p className="font-semibold text-sky-600">gary@mcr.ae</p>
              </a>
            </div>
            <div className="text-center mt-8 pt-6 border-t border-slate-200">
              <h3 className="font-heading font-bold text-xl mb-2">Connect on LinkedIn</h3>
              <p className="text-slate-600 mb-4">Follow my professional journey and connect with my network.</p>
              <a
                href="https://www.linkedin.com/in/garymcrae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border border-slate-300 hover:bg-slate-100 transition-colors text-slate-800 font-bold px-6 py-3 rounded-full"
              >
                View My Profile
              </a>
            </div>
          </div>
          <p className="text-center text-slate-500 mt-8 text-sm">Based in Singapore | I typically respond within one business day.</p>
        </div>
      </div>
    )
}