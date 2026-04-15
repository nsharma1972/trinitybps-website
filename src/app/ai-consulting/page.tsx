import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting — Trinity Bridge PS',
  description: 'Hands-on AI adoption consulting for regulated industries. Strategy, compliance, change management, and implementation.',
}

const services = [
  {
    title: 'AI Readiness Assessment',
    body: 'We evaluate your current state — people, processes, and data — and produce a clear, prioritized roadmap for AI adoption.',
  },
  {
    title: 'Regulatory Compliance Review',
    body: 'We ensure your AI initiatives meet the requirements of HIPAA, SOC 2, GDPR, and industry-specific regulations before you go live.',
  },
  {
    title: 'Change Management',
    body: 'Technology is only 20% of adoption. We work with your leadership and teams to build the organizational readiness that makes AI stick.',
  },
  {
    title: 'Implementation Support',
    body: 'From vendor selection to go-live, we stay hands-on through implementation and measure outcomes against your original goals.',
  },
]

const process = [
  { step: '01', title: 'Assess', body: 'Understand where you are today.' },
  { step: '02', title: 'Roadmap', body: 'Define a realistic, prioritized plan.' },
  { step: '03', title: 'Implement', body: 'Execute with expert guidance.' },
  { step: '04', title: 'Measure', body: 'Track outcomes and optimize.' },
]

export default function AIConsulting() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-orange-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">AI Consulting</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          AI Adoption Without the Guesswork
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          We work alongside your leadership to navigate the real complexity of AI adoption — regulatory,
          technical, and cultural — so your investment delivers measurable results.
        </p>
        <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Process */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-10">Our Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {process.map(p => (
            <div key={p.step} className="border border-gray-100 border-t-2 border-t-brand-orange rounded-xl p-5 bg-white">
              <p className="text-2xl font-light text-brand-orange mb-3">{p.step}</p>
              <p className="font-semibold text-brand-dark text-sm mb-1">{p.title}</p>
              <p className="text-xs text-brand-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-brand-dark mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(s => (
              <div key={s.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-orange rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{s.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-6">Industries We Serve</h2>
        <div className="flex flex-wrap gap-3">
          {['Healthcare', 'Financial Services', 'Legal', 'Manufacturing', 'Government'].map(i => (
            <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Let's talk about your AI roadmap</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            A 30-minute conversation is all it takes to understand where you stand and what's possible.
          </p>
          <Link href="/contact"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
