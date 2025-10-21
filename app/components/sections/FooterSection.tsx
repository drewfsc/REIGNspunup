'use client';

import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="R.E.I.G.N. Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm">Building equitable workplaces through science and technology.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition">
                  Book a Demo
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:text-white transition">
                  Early Access
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@mindfulmeasuresinc.com" className="hover:text-white transition">
                  Email Us
                </a>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white transition">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mindful Measures Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

