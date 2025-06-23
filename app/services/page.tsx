import Link from 'next/link';


export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      <div className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-8 pb-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-transparent bg-clip-text">
              My Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              I provide the exact expertise you need, right when you need it. Here's a look at how we can work together to achieve your goals.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-16 mb-16 shadow-sm border border-slate-200/80">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-start">
              <div className="flex flex-col">
                <h3 className="font-heading text-3xl font-bold mb-4">Fractional CMO Leadership</h3>
                <p className="text-slate-600 mb-6">Get C-level strategic thinking without the full-time overhead. I'll act as your integrated marketing leader to steer the ship and drive results.</p>
                <ul className="space-y-3 text-slate-700 list-none">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Go-to-Market Strategy & Execution
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Marketing Budgeting & Financial Modeling
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    C-Suite & Board-Level Reporting
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Team Leadership, Hiring & Structure
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-3xl font-bold mb-4">Tech, Data & Automation</h3>
                <p className="text-slate-600 mb-6">We'll build a data-driven marketing engine, turning your tech stack into a revenue-generating asset and insights into action.</p>
                <ul className="space-y-3 text-slate-700 list-none">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Martech Stack Audit & Implementation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Marketing Automation & Nurturing
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Analytics, Dashboards & Performance Tracking
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SEO/SEM Strategy & Oversight
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-12">
                <h3 className="font-heading text-3xl font-bold mb-4">Future-Ready Branding</h3>
                <p className="text-slate-600 mb-6">Craft a brand that not only stands out today but is built for tomorrow. We'll define your story and make sure the market hears it.</p>
                <ul className="space-y-3 text-slate-700 list-none">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand Positioning & Messaging Workshops
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Content Marketing & Thought Leadership Strategy
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive Landscape Analysis
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Creative Direction & Agency Management
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-12">
                <h3 className="font-heading text-3xl font-bold mb-4">Team Mentoring & Enablement</h3>
                <p className="text-slate-600 mb-6">The best strategies are executed by empowered teams. I'll work to upskill your marketers and build a high-performance culture.</p>
                <ul className="space-y-3 text-slate-700 list-none">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Customized Team Training & Workshops
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Developing Marketing Career Frameworks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    1-on-1 Coaching for Marketing Leads
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Improving Cross-Functional Workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-16 mb-16 shadow-sm border border-slate-200/80">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Our Path to Partnership</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">A straightforward process designed for clarity and results.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left relative">
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-slate-200" style={{ zIndex: 1 }}></div>
              <div className="relative bg-slate-50 p-6 rounded-xl border border-slate-200 z-10">
                <div className="font-heading text-cyan-500 font-extrabold text-2xl mb-2">01</div>
                <h4 className="font-bold mb-2">Discovery Call</h4>
                <p className="text-sm text-slate-600">A free 30-min chat to understand your goals and see if we're a good fit.</p>
              </div>
              <div className="relative bg-slate-50 p-6 rounded-xl border border-slate-200 z-10">
                <div className="font-heading text-cyan-500 font-extrabold text-2xl mb-2">02</div>
                <h4 className="font-bold mb-2">Growth Audit</h4>
                <p className="text-sm text-slate-600">A deep dive into your marketing, culminating in a clear proposal.</p>
              </div>
              <div className="relative bg-slate-50 p-6 rounded-xl border border-slate-200 z-10">
                <div className="font-heading text-cyan-500 font-extrabold text-2xl mb-2">03</div>
                <h4 className="font-bold mb-2">Kick-Off</h4>
                <p className="text-sm text-slate-600">We integrate with your team and establish our roadmap for the first 90 days.</p>
              </div>
              <div className="relative bg-slate-50 p-6 rounded-xl border border-slate-200 z-10">
                <div className="font-heading text-cyan-500 font-extrabold text-2xl mb-2">04</div>
                <h4 className="font-bold mb-2">Execution</h4>
                <p className="text-sm text-slate-600">We get to work, with regular reporting to track progress and adapt.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Flexible Engagement Models</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">Choose the level of partnership that's right for your business stage.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              <div className="bg-white border-t-4 border-cyan-400 p-8 rounded-xl flex flex-col shadow-sm">
                <h3 className="font-heading text-xl font-bold mb-2">Strategic Advisor</h3>
                <p className="text-slate-600 mb-6 flex-grow">High-level guidance for your leadership team. Perfect for strategic planning and board-level advice.</p>
                <Link
                  href="/contact"
                  className="mt-auto w-full text-center bg-white border border-slate-300 hover:bg-slate-100 transition-colors text-slate-800 font-bold px-6 py-3 rounded-full"
                >
                  Enquire Now
                </Link>
              </div>
              <div className="bg-violet-600 text-white p-8 rounded-xl flex flex-col shadow-2xl shadow-violet-200 transform md:scale-105">
                <h3 className="font-heading text-xl font-bold mb-2">Fractional CMO</h3>
                <p className="text-violet-200 mb-6 flex-grow">Your dedicated, part-time marketing leader. We'll build, manage, and execute your entire marketing strategy.</p>
                <Link
                  href="/contact"
                  className="mt-auto w-full text-center bg-white hover:bg-violet-100 transition-colors text-violet-700 font-bold px-6 py-3 rounded-full"
                >
                  Let's Talk
                </Link>
              </div>
              <div className="bg-white border-t-4 border-fuchsia-400 p-8 rounded-xl flex flex-col shadow-sm">
                <h3 className="font-heading text-xl font-bold mb-2">Project Sprint</h3>
                <p className="text-slate-600 mb-6 flex-grow">Need to launch a new product, run an audit, or build a specific campaign? Let's tackle it with a focused project.</p>
                <Link
                  href="/contact"
                  className="mt-auto w-full text-center bg-white border border-slate-300 hover:bg-slate-100 transition-colors text-slate-800 font-bold px-6 py-3 rounded-full"
                >
                  Scope a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
} 