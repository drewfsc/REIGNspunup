'use client';

import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Section from '../Section';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || '';

export default function SignupSection() {
  return (
    <Section
      id="signup"
      className="py-24 text-white"
      background={{
        gradient: 'bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Early Access Program</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to shape the future of unbiased workforce intelligence.
            Join our Early Access Program and start building a fairer, more productive workplace today.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <MailchimpForm />
        </div>
      </div>
    </Section>
  );
}

function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }: { subscribe: (data: any) => void; status: string | null; message: string | Error | null }) => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              subscribe({ EMAIL: email, FNAME: name, COMPANY: company });
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed ripple-effect"
            >
              {status === 'sending' ? 'Subscribing...' : 'Get Early Access'}
            </button>
          </form>

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
              <p dangerouslySetInnerHTML={{ __html: message as string }} />
            </div>
          )}

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
              <p>Success! Check your email to confirm your subscription.</p>
            </div>
          )}
        </div>
      )}
    />
  );
}

