import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Trinity Bridge PS',
  description: 'Trinity Bridge Professional Services, LLC helps life sciences and regulated industries adopt AI with education, data intelligence, and hands-on consulting.',
}

const values = [
  {
    title: 'Regulated-First',
    body: 'We started in industries where "move fast and break things" is not an option. Every product and engagement is built around compliance, auditability, and responsible AI use.',
  },
  {
    title: 'Outcomes Over Outputs',
    body: "We measure success by what changes in your organization — not by reports delivered or hours billed. If the adoption doesn't stick, we haven't done our job.",
  },
  {
    title: 'Honest About Limits',
    body: "AI is not a silver bullet. We tell clients what AI can and can't do for their specific situation, and we help them avoid costly mistakes before they happen.",
  },
]

const stats = [
  { value: '29+', label: 'Years of industry experience' },
  { value: '40%', label: 'Uptime improvement — MedTech client' },
  { value: '25%', label: 'Cost reduction — life sciences client' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-4xl">
          We bridge the gap between AI potential and real-world results
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-5">
          Trinity Bridge Professional Services, LLC was founded to help life sciences and regulated
          organizations adopt AI with confidence — where getting it wrong is not an option.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-semibold">WOSB Certified</span>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-brand-muted font-semibold">Life Sciences & MedTech</span>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-brand-muted font-semibold">Federal & Commercial</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Mission */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Our Mission</p>
          <h2 className="text-2xl font-semibold text-brand-dark mb-5 leading-snug">
            Make AI adoption accessible, responsible, and measurable for every regulated organization
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Life sciences companies — pharma, biotech, medical device, and healthcare — operate under the strictest
            compliance and quality mandates in any industry. Yet AI has the potential to transform clinical
            development, regulatory affairs, quality assurance, and commercial operations in ways that genuinely
            save lives and reduce costs.
          </p>
          <p className="text-brand-muted leading-relaxed">
            Trinity Bridge PS was built to close that gap. Founded by a practitioner with 29 years of experience
            in the industry, we bring purpose-built tools and real-world expertise — not generic AI platforms
            retrofitted for regulated use cases.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map(s => (
            <div key={s.value} className="text-center border border-gray-100 rounded-xl p-6 bg-white">
              <p className="text-3xl font-semibold text-brand-blue mb-1">{s.value}</p>
              <p className="text-xs text-brand-muted leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Our Values</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">What We Offer</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-8">Three ways to move forward</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { color: 'text-brand-blue', border: 'border-t-brand-blue', title: 'AI University', href: '/ai-university', body: 'Structured reskilling for your workforce — diagnostic-first, industry-specific, certification-ready.' },
            { color: 'text-brand-green', border: 'border-t-brand-green', title: 'TDI Intel', href: '/tdi-intel', body: 'Unify your data, surface AI-powered insights, and equip every level of your organization to act on them.' },
            { color: 'text-brand-orange', border: 'border-t-brand-orange', title: 'AI Consulting', href: '/ai-consulting', body: 'Expert guidance from strategy through go-live — with compliance, change management, and outcome measurement built in.' },
          ].map(p => (
            <Link key={p.title} href={p.href}
              className={`group border border-gray-100 border-t-2 ${p.border} rounded-xl p-6 bg-white hover:shadow-md transition-all`}>
              <h3 className={`font-semibold mb-2 ${p.color}`}>{p.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">{p.body}</p>
              <span className={`text-sm font-medium ${p.color} group-hover:underline`}>Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Team callout */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Leadership</p>
            <h3 className="text-lg font-semibold text-brand-dark mb-2">Meet the people behind the work</h3>
            <p className="text-sm text-brand-muted max-w-md">
              Narendra Sharma founded Trinity Bridge PS after 29 years in life sciences and enterprise technology.
              Learn about our leadership team and advisory board.
            </p>
          </div>
          <Link href="/team"
            className="shrink-0 inline-block border border-brand-cyan text-brand-cyan px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-cyan hover:text-white transition-colors">
            Meet Our Team
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to work together?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Tell us where you are and where you want to go. We'll help you figure out the right path.
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
