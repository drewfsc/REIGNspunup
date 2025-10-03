'use client';

import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// Replace with your actual Mailchimp URL
const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";

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
              <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#demo" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all">
                Book A Demo!
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 parallax">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/rod-long.jpg)',
              backgroundAttachment: 'fixed',
              transform: 'scale(1.1)'
            }}
          ></div>
          {/* Heavy dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-purple-950/80 to-slate-900/85"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-[400px] h-[400px] top-1/2 left-1/4 -translate-y-1/2 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] top-1/2 right-1/4 -translate-y-1/2 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 mb-3">85%</div>
              <div className="text-lg text-gray-300 font-medium">Reduction in hiring bias</div>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/20 text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-3">3x</div>
              <div className="text-lg text-gray-300 font-medium">Faster talent identification</div>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-violet-500/30 hover:border-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/20 text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 mb-3">92%</div>
              <div className="text-lg text-gray-300 font-medium">Employee satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900 bg-texture-grid relative overflow-hidden" id="features">
        {/* Parallax background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute w-[500px] h-[500px] bottom-0 left-0 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Everything You Need to Build a Fair, High-Performing Workforce
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              R.E.I.G.N.'s powerful tools work together to track, analyze, and grow your team without bias, 
              from the first clock-in to the next promotion.
            </p>
          </div>

          {/* Main Feature Showcases */}
          <div className="space-y-24 mb-24">
            {/* Time & Attendance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-semibold mb-4 border border-purple-500/30">
                  Time & Attendance
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white">
                  User-Friendly Interface Turns Clock-Ins Into Insights
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Employee time punches become actionable intelligence. Track attendance, manage schedules, 
                  and analyze workforce patterns—all from a beautiful, intuitive interface.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-xl">✓</span>
                    <span>Granulated time punches with offline mode</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-xl">✓</span>
                    <span>Skill-based scheduling and project assignments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-xl">✓</span>
                    <span>PTO, vacation, and shift switch requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 text-xl">✓</span>
                    <span>One-click payroll export</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-3xl overflow-hidden backdrop-blur-sm border border-purple-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* AI Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square bg-gradient-to-br from-blue-900/40 to-violet-900/40 rounded-3xl overflow-hidden backdrop-blur-sm border border-blue-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
                    alt="AI Technology"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30">
                  AI-Powered Intelligence
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white">
                  Built-In AI Tools You've Never Seen Before
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Harness the power of advanced AI models (GPT, Gemini, Grok) for reasoning, analytics, 
                  simulations, and custom reporting that transforms how you manage your workforce.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                    <span>Advanced reasoning for complex workforce decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                    <span>Team builder and performance simulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                    <span>Skill-based labor estimating and project planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                    <span>Custom reporting and trend identification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Employer Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full text-violet-300 text-sm font-semibold mb-4 border border-violet-500/30">
                  Command Center
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white">
                  Customizable, Fully Interactive Employer Dashboards
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Your entire operation at a glance. Track trends, communicate with teams, manage projects, 
                  and make data-driven decisions from one powerful interface.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-3 text-xl">✓</span>
                    <span>Track workforce trends and performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-3 text-xl">✓</span>
                    <span>Direct team communication and announcements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-3 text-xl">✓</span>
                    <span>Project performance monitoring and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-400 mr-3 text-xl">✓</span>
                    <span>Skill-based scheduling and assignments</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-violet-900/40 to-purple-900/40 rounded-3xl overflow-hidden backdrop-blur-sm border border-violet-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                    alt="Business Dashboard"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time Resume - Hero Feature */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 rounded-3xl p-12 lg:p-16 text-white mb-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80" 
                alt="Technology Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 border border-white/20">
                First of Its Kind
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                The "Real-Time Resume"
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Unlike a traditional resume that's static and outdated the moment it's printed, 
                the Real-Time Resume lives in the cloud and is continuously updated with every verified time punch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left">
                  <h4 className="text-xl font-bold mb-3 text-purple-300">For Employers</h4>
                  <p className="text-gray-300">
                    Confident, bias-free decisions about hiring, promotions, and project assignments. 
                    Data you can trust. Proof of potential that can't be inflated or overlooked.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left">
                  <h4 className="text-xl font-bold mb-3 text-blue-300">For Employees</h4>
                  <p className="text-gray-300">
                    Recognition they can see, share, and take with them anywhere in their career. 
                    Skills, hours, projects, badges, and growth milestones—all verified and portable.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Skills tracking</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Hours worked</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Completed projects</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Earned badges</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Growth milestones</span>
              </div>
            </div>
          </div>

          {/* 40+ Features Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              See All 40+ Advantages In Action
            </h3>
            <p className="text-lg text-gray-300">
              Comprehensive tools across every aspect of workforce management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Time & Attendance */}
            <FeatureCategoryCard
              category="Time & Attendance"
              color="purple"
              features={[
                "Granulated Time Punches",
                "Payroll Export",
                "Time Card Management",
                "Skill Based Scheduling",
                "Offline Mode",
                "PTO & Shift Requests"
              ]}
            />

            {/* Project Management */}
            <FeatureCategoryCard
              category="Project Management"
              color="blue"
              features={[
                "Lost Production Monitor",
                "Customized Reporting",
                "Performance Monitoring",
                "Labor Estimating",
                "Trend Identifier",
                "Distribution Monitoring"
              ]}
            />

            {/* Human Resources */}
            <FeatureCategoryCard
              category="Human Resources"
              color="violet"
              features={[
                "DEI Monitoring & Compliance",
                "Team Builder & Simulator",
                "Employee Comparisons",
                "Team Comparison Tool",
                "Metric Based Promotions",
                "Document Maintenance"
              ]}
            />

            {/* Employee Engagement */}
            <FeatureCategoryCard
              category="Employee Engagement"
              color="pink"
              features={[
                "Company Social Feed",
                "Recognition Badging",
                "Challenges & Goals",
                "Skill Progress Tracking",
                "Employer Value Tracker",
                "Real-Time Resume"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-950 bg-texture-dots relative no-scroll" id="pricing">
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-[600px] h-[600px] top-1/4 -left-48 bg-violet-600/30 rounded-full blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] bottom-1/4 -right-48 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Simple, Fair Pricing for a Simple, Fair Process
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your team
            </p>
          </div>

          <div className="flex flex-nowrap gap-8 max-w-7xl mx-auto justify-center overflow-visible pb-4 pt-8 px-2">

            {/* Get Started */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-slate-600/30 hover:border-blue-500/60 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Started</h3>
                <div className="text-sm text-gray-400 font-semibold mb-4">Small Teams</div>
                <div className="text-5xl font-bold text-white mb-2">$49</div>
                <div className="text-gray-400">per user/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Up to 25 users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Core time & attendance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Basic reporting & analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              <a
                href="#demo"
                className="block w-full px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold text-center transition-all active:scale-95 ripple-effect"
              >
                Book a Demo
              </a>
            </div>

            {/* Go Pro */}
            <div className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-purple-400 relative md:scale-105 md:hover:scale-110 hover:-translate-y-1">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Go Pro</h3>
                <div className="text-sm text-purple-200 font-semibold mb-4">Growing Teams</div>
                <div className="text-5xl font-bold text-white mb-2">$89</div>
                <div className="text-purple-100">per user/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-white">Up to 100 users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-white">Full AI-powered features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-white">Real-Time Resume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-white">Advanced analytics & DEI tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-white">Priority phone support</span>
                </li>
              </ul>
              <a
                href="#demo"
                className="block w-full px-6 py-3 bg-white hover:bg-gray-100 text-purple-600 rounded-lg font-semibold text-center transition-all transform hover:scale-105 active:scale-95 ripple-effect"
              >
                Book a Demo
              </a>
            </div>

            {/* Scale */}
            <div className="flex-shrink-0 w-80 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 border-2 border-violet-500/30 hover:border-violet-500/60 hover:-translate-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
                <div className="text-sm text-gray-400 font-semibold mb-4">Enterprise</div>
                <div className="text-5xl font-bold text-white mb-2">$149</div>
                <div className="text-gray-400">per user/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Custom integrations & API access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-3 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">On-premise deployment options</span>
                </li>
              </ul>
              <a
                href="#demo"
                className="block w-full px-6 py-3 bg-white hover:bg-gray-100 text-purple-600 rounded-lg font-semibold text-center transition-all transform hover:scale-105 active:scale-95 ripple-effect"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Scroll indicator for mobile */}
          <div className="text-center mt-8 md:hidden">
            <p className="text-sm text-gray-400 animate-pulse">← Swipe to see all plans →</p>
          </div>
        </div> 
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 bg-texture-noise relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-[500px] h-[500px] top-0 left-1/4 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute w-[500px] h-[500px] bottom-0 right-1/4 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              Organizations across Construction, Healthcare, and Manufacturing rely on R.E.I.G.N.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="R.E.I.G.N. helped us identify and eliminate bias we didn't even know existed. Our workforce diversity has increased 40% in just one year."
              author="Sarah Chen"
              role="VP of People Operations"
              industry="Healthcare"
            />
            <TestimonialCard
              quote="Finally, a platform that doesn't just talk about equity—it delivers it. The predictive analytics have transformed our hiring process."
              author="Marcus Williams"
              role="Chief Talent Officer"
              industry="Construction"
            />
            <TestimonialCard
              quote="The competency mapping feature alone paid for itself. We've reduced turnover by 35% and our promotion decisions are now data-driven and fair."
              author="Emily Rodriguez"
              role="Director of HR"
              industry="Manufacturing"
            />
          </div>
        </div>
      </section>

      {/* CTA / Signup Section */}
      <section className="py-24 bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950 text-white relative overflow-hidden" id="signup">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Early Access Program
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to shape the future of unbiased workforce intelligence. 
              Join our Early Access Program and start building a fairer, more productive workplace today.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <MailchimpForm />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden" id="demo">
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/logo.png" 
                alt="R.E.I.G.N. Logo" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm">
                Building equitable workplaces through science and technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#demo" className="hover:text-white transition">Book a Demo</a></li>
                <li><a href="#signup" className="hover:text-white transition">Early Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="mailto:info@mindfulmeasuresinc.com" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Mindful Measures Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCategoryCard({ category, color, features }: { category: string; color: string; features: string[] }) {
  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    pink: 'from-pink-500 to-pink-600',
  };

  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.purple;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border-2 border-slate-700/50 hover:border-purple-500/30">
      <div className={`bg-gradient-to-r ${gradientClass} text-white px-4 py-2 rounded-lg text-center font-bold mb-6`}>
        {category}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-300">
            <span className="text-green-400 mr-2 flex-shrink-0 mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
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

