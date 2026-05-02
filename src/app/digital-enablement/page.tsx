import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Enablement & Compliance — Trinity Bridge PS',
  description: 'Digitization, quality management, compliance transformation, and enterprise risk services for regulated industries.',
}

const whatWeDo = [
  {
    title: 'Digitization & Automation for eQMS',
    body: 'Transform Quality Management Systems through cutting-edge digitization and automation — reducing manual effort and audit risk.',
  },
  {
    title: 'IT Quality Management System Development',
    body: 'Craft bespoke IT Quality Management Systems to meet regulatory requirements and organizational needs.',
  },
  {
    title: 'Digital Compliance Transformation',
    body: 'Guide organizations through transformative compliance journeys to meet industry standards — FDA, EMA, HIPAA, GDPR, and more.',
  },
  {
    title: 'IT General Controls, Privacy & Audits',
    body: 'Ensure robust IT governance through comprehensive controls, privacy measures, and audit readiness.',
  },
  {
    title: 'Enterprise Risk Management',
    body: 'Strategically identify, assess, and mitigate risks to optimize business performance and protect operations.',
  },
  {
    title: 'Data Integrity, Governance & Framework',
    body: 'End-to-end solutions for data integrity, robust governance, and sustainable data frameworks in regulated environments.',
  },
  {
    title: 'Information Security Assessment',
    body: 'Comprehensive assessments to identify and fortify against cybersecurity threats before they become regulatory findings.',
  },
  {
    title: 'HIPAA & GDPR Assessment and Compliance',
    body: 'Navigate complex healthcare and data protection regulations to achieve and maintain compliance.',
  },
  {
    title: '483 / Warning Letter / Audit Finding Remediation',
    body: 'Expertly address regulatory findings and audit issues with precision — developing corrective action plans that satisfy regulators.',
  },
  {
    title: 'IT Vendor Audit Support',
    body: 'Assist organizations in conducting thorough audits of IT vendors — ensuring your supply chain meets compliance requirements.',
  },
  {
    title: 'QMS / eQMS / GxP Audits',
    body: 'Conduct audits to ensure compliance and continuous improvement in quality management across GMP, GCP, and GLP environments.',
  },
  {
    title: 'Device Safety & Security Dashboard',
    body: 'Advanced dashboard development for real-time monitoring and management of device safety and security.',
  },
]

const focusAreas = [
  'Systems Selection & Implementation Planning',
  'IT Quality Operating Model Assessment',
  'Technology Risk Management Dashboard',
  'M&A Due Diligence',
  'Computer System Implementation & PMO',
  'Helpdesk and IT System Setup Support',
  'Interim Quality and IT Leadership',
]

const benefits = [
  { title: 'Built-in Compliance', body: 'Frameworks designed for regulated environments from day one — not retrofitted after the fact.' },
  { title: 'Reduced Risk', body: 'Proactive risk identification and mitigation before audits, not in response to findings.' },
  { title: 'Speed & Agility', body: 'Streamlined quality and compliance processes that accelerate, not block, your business.' },
  { title: 'Reduced Quality Issues', body: 'Systematic controls that catch problems early and prevent costly recalls or remediation.' },
]

export default function DigitalEnablement() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-cyan-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Digital Enablement & Compliance</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-4xl">
          Quality, Risk & Compliance for Regulated Industries
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Our comprehensive approach anticipates and meets industry needs — helping regulated organizations
          modernize quality systems, achieve compliance, and reduce operational risk.
        </p>
        <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* What We Do */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Services</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatWeDo.map(s => (
              <div key={s.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{s.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">We Focus On</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-8">Specialized Capabilities</h2>
        <div className="flex flex-wrap gap-3">
          {focusAreas.map(f => (
            <span key={f} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Key Benefits</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">How we make a difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{b.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Industries</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-6">Who We Serve</h2>
        <div className="flex flex-wrap gap-3">
          {['Pharmaceuticals', 'Biotechnology', 'Medical Devices', 'Healthcare', 'Clinical Research', 'Life Sciences'].map(i => (
            <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to simplify your compliance?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Let us assess your current state and identify the highest-leverage improvements.
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
