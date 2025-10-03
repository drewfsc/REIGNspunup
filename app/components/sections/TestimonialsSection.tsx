'use client';

import { useEffect, useRef } from 'react';
import Section from '../Section';

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "R.E.I.G.N. helped us identify and eliminate bias we didn't even know existed. Our workforce diversity has increased 40% in just one year.",
      author: 'Sarah Chen',
      role: 'VP of People Operations',
      industry: 'Healthcare',
    },
    {
      quote: "Finally, a platform that doesn't just talk about equity—it delivers it. The predictive analytics have transformed our hiring process.",
      author: 'Marcus Williams',
      role: 'Chief Talent Officer',
      industry: 'Construction',
    },
    {
      quote: "The competency mapping feature alone paid for itself. We've reduced turnover by 35% and our promotion decisions are now data-driven and fair.",
      author: 'Emily Rodriguez',
      role: 'Director of HR',
      industry: 'Manufacturing',
    },
  ];

  return (
    <Section
      className="py-24"
      background={{
        gradient: 'bg-slate-900',
        texture: 'noise',
        parallaxOrbs: {
          positions: [
            { size: 'w-[500px] h-[500px]', position: 'top-0 left-1/4', color: 'bg-purple-600/20' },
            { size: 'w-[500px] h-[500px]', position: 'bottom-0 right-1/4', color: 'bg-blue-600/20' },
          ],
          opacity: 'opacity-20',
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            Organizations across Construction, Healthcare, and Manufacturing rely on R.E.I.G.N.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card entrance-element">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TestimonialCard({ quote, author, role, industry }: { quote: string; author: string; role: string; industry: string }) {
  return (
    <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-shadow border-2 border-slate-700/50 hover:border-purple-500/30">
      <div className="text-purple-400 text-4xl mb-4">"</div>
      <p className="text-gray-300 mb-6 leading-relaxed">{quote}</p>
      <div className="border-t border-slate-700 pt-4">
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-gray-400">{role}</p>
        <p className="text-sm text-purple-400 font-medium">{industry}</p>
      </div>
    </div>
  );
}

