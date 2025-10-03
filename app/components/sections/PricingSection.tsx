'use client';

import Section from '../Section';

export default function PricingSection() {
  const pricingTiers = [
    {
      name: 'Get Started',
      subtitle: 'Small Teams',
      price: '$49',
      period: 'per user/month',
      features: [
        'Up to 25 users',
        'Core time & attendance',
        'Basic reporting & analytics',
        'Email support',
      ],
      cta: 'Book a Demo',
      ctaLink: '#demo',
      colors: {
        border: 'border-slate-600/30 hover:border-blue-500/60',
        shadow: 'hover:shadow-blue-500/20',
        checkmark: 'text-blue-400',
        button: 'bg-white hover:bg-gray-100 text-gray-900',
      },
    },
    {
      name: 'Go Pro',
      subtitle: 'Growing Teams',
      price: '$89',
      period: 'per user/month',
      popular: true,
      features: [
        'Up to 100 users',
        'Full AI-powered features',
        'Real-Time Resume',
        'Advanced analytics & DEI tracking',
        'Priority phone support',
      ],
      cta: 'Book a Demo',
      ctaLink: '#demo',
      colors: {
        border: 'border-purple-400',
        checkmark: 'text-yellow-300',
        button: 'bg-white hover:bg-gray-100 text-purple-600',
      },
      scale: true,
    },
    {
      name: 'Scale',
      subtitle: 'Enterprise',
      price: '$149',
      period: 'per user/month',
      features: [
        'Unlimited users',
        'Custom integrations & API access',
        'Dedicated account manager',
        'On-premise deployment options',
      ],
      cta: 'Contact Sales',
      ctaLink: '#demo',
      colors: {
        border: 'border-violet-500/30 hover:border-violet-500/60',
        shadow: 'hover:shadow-violet-500/20',
        checkmark: 'text-violet-400',
        button: 'bg-white hover:bg-gray-100 text-purple-600',
      },
    },
  ];

  return (
    <Section
      id="pricing"
      className="py-24"
      background={{
        gradient: 'bg-slate-950',
        texture: 'dots',
        parallaxOrbs: {
          positions: [
            { size: 'w-[600px] h-[600px]', position: 'top-1/4 -left-48', color: 'bg-violet-600/30' },
            { size: 'w-[600px] h-[600px]', position: 'bottom-1/4 -right-48', color: 'bg-blue-600/30' },
          ],
          opacity: 'opacity-20',
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, Fair Pricing for a Simple, Fair Process
          </h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your team</p>
        </div>

        <div className="flex flex-nowrap gap-8 max-w-7xl mx-auto justify-center overflow-visible pb-4 pt-8 px-2">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 rounded-2xl p-8 shadow-lg hover:shadow-2xl ${tier.colors.shadow || ''} transition-all duration-300 border-2 ${tier.colors.border} hover:-translate-y-1 relative ${
                tier.scale ? 'bg-gradient-to-br from-purple-600 to-blue-600 md:scale-105 md:hover:scale-110' : 'bg-slate-800/50 backdrop-blur-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${tier.scale ? 'text-white' : 'text-white'}`}>{tier.name}</h3>
                <div className={`text-sm font-semibold mb-4 ${tier.scale ? 'text-purple-200' : 'text-gray-400'}`}>
                  {tier.subtitle}
                </div>
                <div className={`text-5xl font-bold mb-2 ${tier.scale ? 'text-white' : 'text-white'}`}>{tier.price}</div>
                <div className={tier.scale ? 'text-purple-100' : 'text-gray-400'}>{tier.period}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`${tier.colors.checkmark} mr-3 text-xl flex-shrink-0`}>✓</span>
                    <span className={tier.scale ? 'text-white' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaLink}
                className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all transform hover:scale-105 active:scale-95 ripple-effect ${tier.colors.button}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Scroll indicator for mobile */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-sm text-gray-400 animate-pulse">← Swipe to see all plans →</p>
        </div>
      </div>
    </Section>
  );
}

