'use client';

import Section from '../Section';

export default function DemoSection() {
  return (
    <Section
      id="demo"
      className="py-24"
      background={{
        gradient: 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800',
        parallaxOrbs: {
          positions: [
            { size: 'w-[600px] h-[600px]', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', color: 'bg-violet-600/30' },
          ],
          opacity: 'opacity-20',
        },
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Workforce?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Schedule a personalized demo and see how R.E.I.G.N. can eliminate bias and empower growth in your organization.
        </p>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-12 border-2 border-purple-500/30">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
              alt="Team Collaboration"
              className="w-full h-64 object-cover rounded-xl mb-8 opacity-60"
            />
            <p className="text-lg text-gray-300">
              Get in touch with our team to book your demo. We'll walk you through the platform,
              answer your questions, and show you how R.E.I.G.N. can work for your specific needs.
            </p>
          </div>
          <a
            href="mailto:info@mindfulmeasuresinc.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/50 ripple-effect"
          >
            Contact Us for a Demo
          </a>
        </div>
      </div>
    </Section>
  );
}

