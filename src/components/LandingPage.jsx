import React, { useState } from 'react';
import ApplyImg from '../assets/images/apply-now.jpg';
import AppLogo from '../assets/images/Logo.png';
import AppLogo2 from '../assets/images/Logo1.png';
import { FaSquareBehance, FaLinkedin, FaEnvelopeOpenText } from "react-icons/fa6";

export default function LandingPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "How does the AI tailoring work?",
      answer: "Our engine analyzes the job description you're applying to and identifies key skills and keywords. It then suggests modifications to your base template to highlight your most relevant experiences automatically."
    },
    {
      question: "Can I use my own email provider?",
      answer: "Yes! MailApply integrates directly with Gmail and Outlook through secure OAuth. This allows you to send emails from your own address so they land in the recipient's primary inbox rather than promotions."
    },
    {
      question: "Is there a limit on templates?",
      answer: "Basic users can save up to 5 templates. Pro users have no limits on the number of templates they can create and manage, perfect for targeting multiple roles."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-blue-900 font-body antialiased">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:py-2 py-3 lg:px-12 w-full bg-white  border-b border-border">
        <div className="logo">
          <a
            onClick={() => onNavigate('landing')}
            className="font-display text-3xl font-semibold text-primary tracking-tight cursor-pointer"
          >
            <img src={AppLogo} alt="logo" className='w-full md:h-18 h-16' />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-label-md text-base font-medium text-blue-600 active hover:text-primary active:text-primary transition-colors" href="/">Home</a>
          <a className="font-label-md text-base font-medium text-blue-600 hover:text-primary transition-colors" href="#features">Features</a>
          <a className="font-label-md text-base font-medium text-blue-600 hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <a className="font-label-md text-base font-medium text-blue-600 hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center md:gap-3 gap-2">
          <button
            onClick={() => onNavigate('dashboard')}
            className="font-label-md text-sm border border-blue-500 bg-blue-100 hover:bg-primary md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-semibold text-blue-800 hover:text-white transition-colors transition"
          >
            Login
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-primary text-white font-label-md text-sm font-semibold md:px-6 px-4 md:py-2.5 py-2 rounded-lg hover:shadow-lg hover:bg-primary-container transition-all active:scale-95 transition"
          >
            Get Started
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-12 px-6 lg:px-12 md:rounded-b-3xl rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#fff] to-[#4d85fc]">
          <div className="max-w-[1440px] mx-auto space-y-10">
            <div className="flex items-start justify-between md:flex-row flex-col md:gap-10 gap-4">
              <div className="lft">
                <h1 className="font-display mb-3 text-3xl sm:text-4xl md:text-5xl leading-[1.2] font-semibold tracking-tight text-black">
                  Send Job Applications Faster with <span className="italic text-blue-600">Smart Templates</span>
                </h1>
                <p className="font-body-lg md:ms-1 text-base md:text-lg text-text-muted leading-relaxed">
                  Create reusable job application templates, manage applications, and send professional emails in seconds. Stop wasting time on repetitive tasks.
                </p>
              </div>

              <div className="flex md:flex-wrap justify-stretch items-stretch md:gap-4 gap-2 mt-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-primary text-white font-label-md text-sm md:text-base font-semibold md:px-6 px-5 md:py-3 py-2 md:rounded-xl rounded-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2"
                >
                  Get Started Free
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-white  text-blue-900 font-label-md text-sm md:text-base font-semibold md:px-6 px-5 md:py-3 py-2 md:rounded-xl rounded-lg hover:bg-surface-container-low transition-all"
                >
                  View Demo
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="md:mt-12 mt-8 relative md:rounded-3xl rounded-2xl overflow-hidden md:h-85 h-65 p-3">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-10"></div>
              <img src={ApplyImg} alt="banner-img" class="rounded-2xl w-full h-full object-cover object-top" />
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-14 px-6 lg:px-8 bg-white" id="features">
          <div className="max-w-[1440px] mx-auto">
            <div className="md:mb-12 mb-8 space-y-3 md:space-y-4">
              <h2 className="font-display capitalize text-3xl sm:text-4xl mb-2 font-semibold tracking-tight text-black">Everything you need to land your <span className="italic text-blue-600">dream job</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid-cards p-6 md:p-12 bg-blue-100 md:rounded-3xl rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                {/* Feature Card 1 */}
                <div className="md:col-span-8 bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-5">
                    <span className="material-symbols-outlined text-[28px]">auto_awesome</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-blue-900 mb-1">Smart Automation</h3>
                  <p className="text-text-muted text-base leading-relaxed">Our AI-powered engine helps you tailor your cover letters and emails to specific job descriptions in seconds, maintaining a personal touch while saving hours of manual work.</p>
                </div>

                {/* Feature Card 2 */}
                <div className="md:col-span-4 bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-secondary/10 text-secondary flex items-center justify-center rounded-2xl mb-5">
                    <span className="material-symbols-outlined text-[28px]">description</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-blue-900 mb-1">Template Library</h3>
                  <p className="text-text-muted text-base leading-relaxed">Access a curated collection of high-converting application templates for different industries.</p>
                </div>

                {/* Feature Card 3 */}
                <div className="md:col-span-4 bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-success/10 text-success flex items-center justify-center rounded-2xl mb-5">
                    <span className="material-symbols-outlined text-[28px]">analytics</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-blue-900 mb-1">Real-time Analytics</h3>
                  <p className="text-text-muted text-base leading-relaxed">Track open rates, link clicks, and response times for every application you send.</p>
                </div>

                {/* Feature Card 4 */}
                <div className="md:col-span-8 bg-white p-8 md:p-10 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-tertiary-fixed text-tertiary flex items-center justify-center rounded-2xl mb-5">
                    <span className="material-symbols-outlined text-[28px]">group</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-blue-900 mb-1">CRM for Job Hunting</h3>
                  <p className="text-text-muted text-base leading-relaxed">Manage all your contacts, recruiters, and follow-ups in one centralized, searchable database. Never miss a lead again.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-14 px-6 lg:px-8 bg-blue-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="md:mb-12 mb-8 space-y-3 md:space-y-4">
              <h2 className="font-display capitalize text-3xl sm:text-4xl mb-2 font-semibold tracking-tight text-black">From Application to Offer in <span className="italic text-blue-600"> 3 Steps</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
              <div className="relative flex flex-col items-center text-center group rounded-2xl md:p-12 p-8 border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center font-display text-lg font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">1</div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-blue-900">Connect &amp; Create</h3>
                  <p className="text-text-muted text-base leading-relaxed">Import your resume and sync your email. Create personalized templates with our smart editor.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center group rounded-2xl md:p-12 p-8 border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center font-display text-lg font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-blue-900">Track &amp; Apply</h3>
                  <p className="text-text-muted text-base leading-relaxed">Use our browser extension to apply to jobs. We automatically track every detail in your CRM.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center group rounded-2xl md:p-12 p-8 border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center font-display text-lg font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-blue-900">Automate Follow-ups</h3>
                  <p className="text-text-muted text-base leading-relaxed">Set automated reminders or sequences to follow up with recruiters who haven't responded yet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-14 px-6 lg:px-8 bg-white" id="pricing">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center md:mb-12 mb-8 space-y-4">
              <h2 className="font-display capitalize text-3xl sm:text-4xl mb-2 font-semibold tracking-tight text-black">Simple, Transparent <span className="italic text-blue-600">Pricing</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Choose the plan that fits your career goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 max-w-4xl mx-auto">
              {/* Free Tier */}
              <div className="p-8 md:p-10 md:rounded-2xl rounded-xl border border-blue-200 bg-blue-100 hover:border-primary/30 hover:shadow-xl transition-all flex flex-col">
                <div className="md:mb-10 mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2 text-blue-900">Basic</h3>
                  <p className="text-text-muted text-sm">Perfect for testing the waters.</p>
                </div>
                <div className="md:mb-10 mb-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-blue-900">$0</span>
                  <span className="text-text-muted font-label-md text-sm font-medium">/forever</span>
                </div>
                <ul className="space-y-5 md:mb-12 mb-8 flex-1">
                  <li className="flex items-center gap-3 font-body text-base text-blue-900">
                    <span className="material-symbols-outlined text-primary text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    10 Applications / month
                  </li>
                  <li className="flex items-center gap-3 font-body text-base text-blue-900">
                    <span className="material-symbols-outlined text-primary text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    5 Custom templates
                  </li>
                  <li className="flex items-center gap-3 font-body text-base text-blue-900">
                    <span className="material-symbols-outlined text-primary text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Basic CRM tracking
                  </li>
                </ul>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="w-full md:py-4 py-3 md:rounded-xl rounded-lg border-1 border-blue-500 text-blue-900 font-label-md text-sm bg-white font-bold hover:bg-surface-container-low hover:border-primary transition-all"
                >
                  Get Started Free
                </button>
              </div>

              {/* Pro Tier */}
              <div className="p-8 md:p-10 md:rounded-2xl rounded-xl bg-gradient-to-br from-primary via-primary to-secondary text-white pro-card-glow relative overflow-hidden flex flex-col group">
                <div className="absolute top-0 right-0 bg-blue-500 backdrop-blur-md text-white px-6 py-3 font-label-sm text-xs font-bold uppercase tracking-wider rounded-bl-3xl">Most Popular</div>
                <div className="md:mb-10 mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">Pro Plan</h3>
                  <p className="text-white/80 text-sm">The ultimate job hunting accelerator.</p>
                </div>
                <div className="md:mb-10 mb-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">$19</span>
                  <span className="text-white/80 font-label-md text-sm font-medium">/month</span>
                </div>
                <ul className="space-y-5 md:mb-12 mb-8 flex-1">
                  <li className="flex items-center gap-3 font-body text-base">
                    <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Unlimited Applications
                  </li>
                  <li className="flex items-center gap-3 font-body text-base">
                    <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Unlimited Templates
                  </li>
                  <li className="flex items-center gap-3 font-body text-base">
                    <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Advanced AI Tailoring
                  </li>
                  <li className="flex items-center gap-3 font-body text-base">
                    <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Priority 24/7 Support
                  </li>
                </ul>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="w-full md:py-4 py-3 md:rounded-xl rounded-lg bg-white text-primary font-label-md text-sm font-semibold shadow-xl hover:shadow-white/20 transition-all active:scale-95"
                >
                  Go Pro Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 px-6 lg:px-8 bg-blue-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="md:mb-12 mb-8 space-y-3 md:space-y-4">
              <h2 className="font-display capitalize text-3xl sm:text-4xl mb-2 font-semibold tracking-tight text-black">What Our <span className="italic text-blue-600">Clients Says</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
              <div className="p-8 md:p-10 bg-white rounded-2xl hover:shadow-lg transition">
                <div className="flex gap-0.5 text-[#F59E0B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body text-base md:text-lg leading-relaxed mb-8 text-blue-900/90">"MailApply helped me land 3 interviews in my first week. The tracking feature is a game changer for staying organized."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-sm bg-primary/20 flex items-center justify-center text-primary font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-blue-900">Sarah Jenkins</p>
                    <p className="text-text-muted text-xs">Product Designer @ Meta</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-2xl hover:shadow-lg transition">
                <div className="flex gap-0.5 text-[#F59E0B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body text-base md:text-lg leading-relaxed mb-8 text-blue-900/90">"I used to spend 4 hours a day applying. Now it takes me 30 minutes with the smart templates. Highly recommended."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-sm bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    DC
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-blue-900">David Chen</p>
                    <p className="text-text-muted text-xs">Full Stack @ Stripe</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-2xl hover:shadow-lg transition">
                <div className="flex gap-0.5 text-[#F59E0B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body text-base md:text-lg leading-relaxed mb-8 text-blue-900/90">"The follow-up automation is brilliant. Recruiters actually reply because the emails feel personal and timely."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-sm bg-tertiary/20 flex items-center justify-center text-tertiary font-bold">
                    ER
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-blue-900">Elena Rodriguez</p>
                    <p className="text-text-muted text-xs">Growth Marketing @ Vercel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-14 px-6 lg:px-8 bg-white" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center md:mb-12 mb-8">
              <h2 className="font-display capitalize text-3xl sm:text-4xl mb-2 font-semibold tracking-tight text-black">Frequently Asked <span className="italic text-blue-600">Questions</span></h2>
            </div>
            <div className="md:space-y-4 space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group border border-blue-200 md:rounded-2xl rounded-xl p-4 md:p-6 bg-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-display text-base md:text-lg font-semibold text-blue-900"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                      expand_more
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="mt-4 text-text-muted font-body text-base md:text-base leading-relaxed transition-all duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 px-6 lg:px-8">
          <div className="w-full bg-primary text-white md:rounded-3xl rounded-2xl md:p-12 p-8">
            <h2 className="font-display capitalize text-center text-2xl mb-3 sm:text-3xl md:text-4xl font-bold leading-tight">Ready to accelerate <span className="italic text-blue-300">your career</span> ?</h2>
            <p className="text-white/80 text-center font-body sm:text-base">Join 10,000+ professionals who have already supercharged their job search with MailApply.</p>
            <div className="flex justify-center gap-4 md:mt-10 mt-8">
              <button
                onClick={() => onNavigate('dashboard')}
                className="bg-white text-primary font-display font-semibold px-6 md:py-3 py-2 md:rounded-xl rounded-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Create Free Account
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 pb-5 px-6 lg:px-12 text-slate-400">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:gap-12 gap-10 border-b border-slate-800 md:pb-16 pb-8">
          <div className="flex flex-col gap-4 max-w-xs">
            <a
              onClick={() => onNavigate('landing')}
              className="font-display text-3xl font-semibold text-primary tracking-tight cursor-pointer"
            >
              <img src={AppLogo2} alt="logo" className='md:h-15 h-13' />
            </a>
            <p className="font-body text-sm leading-relaxed">The smarter way to manage your job applications and reach recruiters.</p>
            <div className="flex gap-3 md:mt-3 mt-2">
              <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors" href="#">
                <FaEnvelopeOpenText />
              </a>
              <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors" href="#">
                <FaSquareBehance />
              </a>
              <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors" href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-16 gap-8 md:w-1/2 w-full">
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-base uppercase">Product</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-sm font-medium" href="#features">Features</a>
                <a className="hover:text-white transition-colors text-sm font-medium" href="#pricing">Pricing</a>
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">Extension</a>
              </nav>
            </div>
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-base uppercase">Company</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">About Us</a>
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">Careers</a>
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">Contact</a>
              </nav>
            </div>
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-base uppercase">Legal</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-5 flex flex-col md:flex-row justify-between items-center md:gap-4 gap-3 text-xs font-medium">
          <p className="text-sm">© 2026 MailApply Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white text-sm" href="#">Status</a>
            <a className="hover:text-white text-sm" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
