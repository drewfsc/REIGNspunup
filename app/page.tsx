'use client';

import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  AIShowcaseSection,
  AILogosSection,
  JourneySection,
  ScreenshotsSection,
  PricingSection,
  TestimonialsSection,
  SignupSection,
  DemoSection,
  FooterSection,
} from './components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="R.E.I.G.N. Logo"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-light text-white tracking-wide">R.E.I.G.N</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-white transition">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">
                Pricing
              </a>
              <a
                href="#demo"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all"
              >
                Book A Demo!
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AIShowcaseSection />
      <AILogosSection />
      <JourneySection />
      {/* <ScreenshotsSection /> */}
      {/* <PricingSection /> */}
      <TestimonialsSection />
      <SignupSection />
      <DemoSection />
      <FooterSection />
    </main>
  );
}
