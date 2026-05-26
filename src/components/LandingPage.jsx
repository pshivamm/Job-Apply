import React, { useState } from 'react';
import ApplyImg from '../assets/images/apply-now.jpg'

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
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-12 w-full bg-white  border-b border-border">
        <div className="logo">
          <span
            onClick={() => onNavigate('landing')}
            className="font-display text-3xl font-semibold text-primary tracking-tight cursor-pointer"
          >
            MailApply
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-label-md text-base font-medium text-blue-900 active hover:text-primary active:text-primary transition-colors" href="/">Home</a>
          <a className="font-label-md text-base font-medium text-blue-900 hover:text-primary transition-colors" href="#features">Features</a>
          <a className="font-label-md text-base font-medium text-blue-900 hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <a className="font-label-md text-base font-medium text-blue-900 hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="font-label-md text-sm border border-blue-500 bg-blue-100 hover:bg-primary px-6 py-2.5 rounded-lg font-semibold text-blue-800 hover:text-white transition-colors transition"
          >
            Login
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-primary text-white font-label-md text-sm font-semibold px-6 py-2.5 rounded-lg hover:shadow-lg hover:bg-primary-container transition-all active:scale-95 transition"
          >
            Get Started
          </button>
        </div>
      </header> 

      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-12 rounded-b-3xl overflow-hidden bg-gradient-to-b from-[#fff] to-[#4d85fc]">
          <div className="max-w-[1440px] mx-auto space-y-10">
            <div className="flex items-start justify-between gap-10">
              <div className="lft">
                <h1 className="font-display mb-3 text-3xl sm:text-4xl md:text-5xl leading-[1.2] font-semibold tracking-tight text-blue-900">
                  Send Job Applications Faster with <span className="italic text-blue-700">Smart Templates</span>
                </h1>
                <p className="font-body-lg ms-1 text-base md:text-lg text-text-muted leading-relaxed">
                  Create reusable job application templates, manage applications, and send professional emails in seconds. Stop wasting time on repetitive tasks.
                </p>
              </div>

              <div className="flex flex-wrap justify-stretch items-stretch gap-4 mt-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-primary text-white font-label-md text-base font-semibold px-6 py-3 rounded-xl hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2"
                >
                  Get Started Free
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-white  text-blue-900 font-label-md text-base font-semibold px-6 py-3 rounded-xl hover:bg-surface-container-low transition-all"
                >
                  View Demo
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-12 relative rounded-3xl overflow-hidden h-85 p-3">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-10"></div>
              <img src={ApplyImg} alt="banner-img" class="rounded-2xl w-full h-full object-cover object-top" />
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-18 px-6 lg:px-8 bg-white" id="features">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 space-y-4">
              <h2 className="font-display capitalize text-2xl sm:text-4xl mb-2 font-semibold tracking-tight text-blue-900">Everything you need to land your <span className="italic text-blue-700">dream job</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid-cards p-12 bg-blue-100 rounded-3xl">
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
        <section className="py-18 px-6 lg:px-8 bg-blue-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 space-y-4">
              <h2 className="font-display capitalize text-2xl sm:text-4xl mb-2 font-semibold tracking-tight text-blue-900">From Application to Offer in <span className="italic text-blue-700"> 3 Steps</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="relative flex flex-col items-center text-center group rounded-2xl p-12 border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center font-display text-lg font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">1</div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-blue-900">Connect &amp; Create</h3>
                  <p className="text-text-muted text-base leading-relaxed">Import your resume and sync your email. Create personalized templates with our smart editor.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center group rounded-2xl p-12 border-border bg-white">
                <div className="w-12 h-12 rounded-xl bg-blue-200 text-blue-600 flex items-center justify-center font-display text-lg font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-display text-xl font-semibold text-blue-900">Track &amp; Apply</h3>
                  <p className="text-text-muted text-base leading-relaxed">Use our browser extension to apply to jobs. We automatically track every detail in your CRM.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center group rounded-2xl p-12 border-border bg-white">
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
        <section className="py-18 px-6 lg:px-8 bg-white" id="pricing">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-display capitalize text-2xl sm:text-4xl mb-2 font-semibold tracking-tight text-blue-900">Simple, Transparent <span className="italic text-blue-700">Pricing</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Choose the plan that fits your career goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Free Tier */}
              <div className="p-8 md:p-10 rounded-2xl border border-blue-200 bg-blue-100 hover:border-primary/30 hover:shadow-xl transition-all flex flex-col">
                <div className="mb-10">
                  <h3 className="font-display text-2xl font-bold mb-2 text-blue-900">Basic</h3>
                  <p className="text-text-muted text-sm">Perfect for testing the waters.</p>
                </div>
                <div className="mb-10 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-blue-900">$0</span>
                  <span className="text-text-muted font-label-md text-sm font-medium">/forever</span>
                </div>
                <ul className="space-y-5 mb-12 flex-1">
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
                  className="w-full py-4 rounded-xl border-1 border-blue-500 text-blue-900 font-label-md text-sm bg-white font-bold hover:bg-surface-container-low hover:border-primary transition-all"
                >
                  Get Started Free
                </button>
              </div>

              {/* Pro Tier */}
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-white pro-card-glow relative overflow-hidden flex flex-col group">
                <div className="absolute top-0 right-0 bg-blue-500 backdrop-blur-md text-white px-6 py-3 font-label-sm text-xs font-bold uppercase tracking-wider rounded-bl-3xl">Most Popular</div>
                <div className="mb-10">
                  <h3 className="font-display text-2xl font-bold mb-2">Pro Plan</h3>
                  <p className="text-white/80 text-sm">The ultimate job hunting accelerator.</p>
                </div>
                <div className="mb-10 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">$19</span>
                  <span className="text-white/80 font-label-md text-sm font-medium">/month</span>
                </div>
                <ul className="space-y-5 mb-12 flex-1">
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
                  className="w-full py-4 rounded-xl bg-white text-primary font-label-md text-sm font-semibold shadow-xl hover:shadow-white/20 transition-all active:scale-95"
                >
                  Go Pro Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-18 px-6 lg:px-8 bg-blue-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 space-y-4">
              <h2 className="font-display capitalize text-2xl sm:text-4xl mb-2 font-semibold tracking-tight text-blue-900">What Our <span className="italic text-blue-700">Clients Says</span></h2>
              <p className="text-text-muted text-base sm:text-lg">Powerful tools designed for the modern job seeker to automate the repetitive parts of applying.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section className="py-18 px-6 lg:px-8 bg-white" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display capitalize text-2xl sm:text-4xl mb-2 font-semibold tracking-tight text-blue-900">Frequently Asked <span className="italic text-blue-700">Questions</span></h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group border border-blue-200 rounded-2xl p-4 md:p-6 bg-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
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
        <section className="py-18 px-6 lg:px-8">
          <div className="w-full bg-primary text-white rounded-3xl p-12">
            <h2 className="font-display capitalize text-center text-2xl mb-3 sm:text-3xl md:text-4xl font-bold leading-tight">Ready to accelerate <span className="italic text-blue-300">your career</span> ?</h2>
            <p className="text-white/80 text-center font-body sm:text-base">Join 10,000+ professionals who have already supercharged their job search with MailApply.</p>
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => onNavigate('dashboard')}
                className="bg-white text-primary font-display font-semibold px-6 py-3 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Create Free Account
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 pb-5 px-6 lg:px-12 bg-on-surface text-slate-400">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-slate-800 pb-16">
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="font-display text-2xl font-black text-white tracking-tighter">MailApply</span>
            <p className="font-body text-sm leading-relaxed">The smarter way to manage your job applications and reach recruiters.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-sm">Product</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-xs font-medium" href="#features">Features</a>
                <a className="hover:text-white transition-colors text-xs font-medium" href="#pricing">Pricing</a>
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">Extension</a>
              </nav>
            </div>
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-sm">Company</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">About Us</a>
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">Careers</a>
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">Contact</a>
              </nav>
            </div>
            <div className="space-y-4">
              <p className="font-display font-bold text-white text-sm">Legal</p>
              <nav className="flex flex-col gap-3">
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors text-xs font-medium" href="#">Terms of Service</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2026 MailApply Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Status</a>
            <a className="hover:text-white" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
