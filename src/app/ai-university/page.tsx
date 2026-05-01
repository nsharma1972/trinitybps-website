import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI University — Trinity Bridge PS',
  description: 'Structured AI reskilling for regulated industries. Diagnostic-first learning paths that build real capability.',
}

const features = [
  {
    title: 'Diagnostic-First',
    body: 'Every learner starts with our AI Readiness Diagnostic, which maps current skills to gaps and builds a personalized learning path.',
  },
  {
    title: 'Industry-Specific Modules',
    body: 'Curriculum built for healthcare, finance, legal, and manufacturing — with compliance and regulatory context baked in.',
  },
  {
    title: 'Manager-Friendly Pace',
    body: 'Bite-sized modules designed for busy professionals. Learn in 20-minute sessions without disrupting daily operations.',
  },
  {
    title: 'Progress & Certification',
    body: 'Track team progress, measure skill growth, and issue verifiable certificates to recognize achievement.',
  },
]

export default function AIUniversity() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-blue-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">AI University</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Reskill Your <span className="text-brand-blue">Workforce</span> for the AI Era
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Turn AI anxiety into AI capability. Structured, industry-aware learning paths that build
          real skills — not just awareness.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn-primary">Get Started</Link>
          <Link href="/contact" className="btn-outline">Request a Demo</Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.title} className="border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-brand-dark mb-6">Built for Regulated Industries</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {['Healthcare', 'Financial Services', 'Legal', 'Manufacturing', 'Government'].map(i => (
              <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
                {i}
              </span>
            ))}
          </div>
          <p className="text-sm text-brand-muted max-w-xl leading-relaxed">
            In regulated environments, generic AI training isn't enough. Our curriculum is developed with
            compliance, data privacy, and audit requirements in mind — so your team learns to use AI
            responsibly within your industry's specific constraints.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to build an AI-capable team?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Schedule a call to see the platform and discuss a rollout plan for your organization.
          </p>
          <Link href="/contact"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
