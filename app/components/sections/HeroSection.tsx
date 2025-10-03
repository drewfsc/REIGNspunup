'use client';

import Section from '../Section';

export default function HeroSection() {
  return (
    <Section
      className="min-h-screen flex items-center justify-center"
      background={{
        gradient: 'bg-slate-950',
        image: {
          src: '/rod-long.jpg',
          overlay: 'bg-gradient-to-br from-slate-950/85 via-purple-950/80 to-slate-900/85',
        },
        parallaxOrbs: {
          positions: [
            { size: 'w-96 h-96', position: '-top-48 -left-48', color: 'bg-purple-500/20', blur: 'blur-3xl animate-pulse-slow' },
            { size: 'w-96 h-96', position: '-bottom-48 -right-48', color: 'bg-blue-500/20', blur: 'blur-3xl animate-pulse-slow' },
            { size: 'w-96 h-96', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', color: 'bg-violet-500/10', blur: 'blur-3xl animate-pulse-slow' },
          ],
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
            Introducing R.E.I.G.N.
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          Eliminate Bias.
          <br />
          <span className="text-gradient-bg gradient-text animate-gradient bg-clip-text text-transparent">
            Empower Growth.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          R.E.I.G.N. is the next-generation platform for bias-free hiring and workforce development.
          Transform your organization with data-driven insights rooted in I/O psychology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demo"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/50 ripple-effect"
          >
            Book a Demo
          </a>
          <a
            href="#signup"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white/20 hover:border-white/40 transform hover:scale-105 active:scale-95"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </Section>
  );
}

