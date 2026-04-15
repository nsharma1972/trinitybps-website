import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TDI Intel — Trinity Bridge PS',
  description: 'A unified data intelligence layer that connects your systems and surfaces actionable insights — without a data science team.',
}

const features = [
  {
    title: 'Unified Data Layer',
    body: 'Connect your existing tools and databases into a single intelligence layer — no data migration, no rip-and-replace.',
  },
  {
    title: 'AI-Powered Insights',
    body: 'Surface anomalies, trends, and opportunities automatically. Get plain-language summaries instead of raw dashboards.',
  },
  {
    title: 'Pre-Built Connectors',
    body: 'Ready-made integrations with common enterprise systems so you start seeing value in days, not months.',
  },
  {
    title: 'Executive Dashboards',
    body: 'Role-appropriate views for every level of your organization — from operational teams to the C-suite.',
  },
]

export default function TDIIntel() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-green-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">TDI Intel</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Turn Your Data Into Decisions
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Your organization already has the data. TDI Intel connects it, interprets it, and puts
          the right insights in front of the right people — without requiring a data science team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn-primary">Request a Demo</Link>
          <Link href="/contact" className="btn-outline">Talk to Us</Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-10">What TDI Intel Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.title} className="border border-gray-100 border-t-2 border-t-brand-green rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value prop */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: 'Days', label: 'to first insight, not months' },
            { stat: 'Zero', label: 'data science team required' },
            { stat: '100%', label: 'built on your existing systems' },
          ].map(s => (
            <div key={s.stat} className="py-6">
              <p className="text-4xl font-semibold text-brand-green mb-2">{s.stat}</p>
              <p className="text-sm text-brand-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">See TDI Intel in action</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            We'll walk through your current data landscape and show you what's possible in 30 minutes.
          </p>
          <Link href="/contact"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
