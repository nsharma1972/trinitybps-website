import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Trinity Bridge PS',
  description: 'Expert consulting in regulatory compliance, digital transformation, and cybersecurity for life sciences, MedTech, and regulated industries. WOSB certified.',
}

const coreCompetencies = [
  {
    title: 'Digital Transformation & IT Modernization',
    body: 'Implementing cloud solutions, data management strategies, and cybersecurity protocols that modernize operations without disrupting compliance.',
    href: '/digital-enablement',
    color: 'border-t-brand-cyan',
    label: 'text-brand-cyan',
  },
  {
    title: 'Regulatory Compliance & Validation',
    body: 'Expertise in FDA validation, GMP operational quality, and adherence to industry regulations — from strategy through audit readiness.',
    href: '/life-science-assessment',
    color: 'border-t-brand-green',
    label: 'text-brand-green',
  },
  {
    title: 'Cybersecurity',
    body: 'Comprehensive security programs for medical practices and regulated organizations — from asset management and risk assessment to incident response.',
    href: '/cybersecurity',
    color: 'border-t-brand-blue',
    label: 'text-brand-blue',
  },
  {
    title: 'Business Process Optimization',
    body: 'Streamlining workflows through CMMI and ITIL-based methodologies to enhance productivity, reduce cost, and improve quality outcomes.',
    href: '/ai-consulting',
    color: 'border-t-brand-orange',
    label: 'text-brand-orange',
  },
  {
    title: 'Project Management',
    body: 'Leading complex, cross-functional projects including supply chain digitization, system implementations, and ERP migrations.',
    href: '/contact',
    color: 'border-t-brand-cyan',
    label: 'text-brand-cyan',
  },
  {
    title: 'Market Strategy & Assessment',
    body: 'Comprehensive market research, stakeholder engagement strategies, and go-to-market support for organizations entering new markets.',
    href: '/contact',
    color: 'border-t-brand-green',
    label: 'text-brand-green',
  },
]

const servicePages = [
  {
    title: 'Digital Enablement & Compliance',
    body: '14 service areas — eQMS digitization, IT governance, data integrity, HIPAA/GDPR compliance, 483 remediation, and more.',
    href: '/digital-enablement',
    color: 'text-brand-cyan',
    border: 'border-t-brand-cyan',
  },
  {
    title: 'Cybersecurity Service',
    body: '10-point security program for medical and dental practices — asset management, risk assessment, IRP, employee training, and HIPAA compliance.',
    href: '/cybersecurity',
    color: 'text-brand-blue',
    border: 'border-t-brand-blue',
  },
  {
    title: 'Life Science Assessment',
    body: '17 assessment types covering digital transformation, regulatory compliance, GCP/GMP audits, vendor risk, and supply chain compliance.',
    href: '/life-science-assessment',
    color: 'text-brand-green',
    border: 'border-t-brand-green',
  },
  {
    title: 'AI Consulting',
    body: 'End-to-end AI adoption — readiness assessment, regulatory compliance review, change management, and implementation support.',
    href: '/ai-consulting',
    color: 'text-brand-orange',
    border: 'border-t-brand-orange',
  },
]

const differentiators = [
  {
    title: 'Deep Life Sciences Expertise',
    body: 'Over two decades of experience in life sciences compliance, digital transformation, and strategic advisory — across pharma, biotech, MedTech, and healthcare.',
  },
  {
    title: 'Big Four & Top-Tier Firm Background',
    body: 'Leadership team with extensive industry knowledge including experience at Deloitte, Grant Thornton, and FTI Consulting.',
  },
  {
    title: 'Tailored Solutions',
    body: 'Customized approaches that align with your specific regulatory and business needs — not generic frameworks applied off the shelf.',
  },
  {
    title: 'Proven Results',
    body: 'Track record of delivering projects that enhance operational efficiency, reduce costs, and drive business growth for federal, state, and commercial clients.',
  },
  {
    title: 'WOSB Certified',
    body: 'Certified as a Women-Owned Small Business (WOSB) — eligible for federal set-aside contracts and committed to diversity and inclusion.',
  },
]

const pastPerformance = [
  {
    title: 'Digital Transformation for MedTech Firm',
    result: '40% improvement in system uptime',
    body: 'Implemented cloud migration and cybersecurity enhancements for a MedTech client, resulting in a 40% improvement in system uptime and significantly reduced security exposure.',
  },
  {
    title: 'Regulatory Strategy Development',
    result: 'FDA submission support',
    body: 'Supported regulatory submissions with comprehensive toxicology and drug effectiveness reports — enabling a life sciences client to advance their FDA approval pathway.',
  },
  {
    title: 'Business Process Optimization',
    result: '25% reduction in operational costs',
    body: 'Achieved a 25% reduction in operational costs for a life sciences client through CMMI-based process improvements and workflow redesign.',
  },
  {
    title: 'IT Leadership & Stabilization',
    result: 'Long-term digital roadmap delivered',
    body: 'Stabilized IT operations and developed a long-term digital roadmap during a critical leadership transition — ensuring continuity and setting the foundation for growth.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Services</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
            WOSB Certified
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Regulatory Compliance, Digital Transformation & Cybersecurity
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Trinity Bridge Professional Services, LLC delivers innovative consulting solutions
          for life sciences, MedTech, and regulated industries — helping organizations drive
          efficiency, enhance compliance, and support mission-critical initiatives.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
          <Link href="#service-pages"
            className="inline-block border border-gray-200 text-brand-muted px-6 py-3 rounded-lg font-medium hover:border-brand-blue hover:text-brand-blue transition-colors text-sm">
            View All Services
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Core Competencies */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Core Competencies</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">What we do best</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreCompetencies.map(c => (
              <Link key={c.title} href={c.href}
                className={`group bg-white border border-gray-100 border-t-2 ${c.color} rounded-xl p-6 hover:shadow-md transition-all`}>
                <h3 className={`font-semibold mb-2 ${c.label}`}>{c.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pages */}
      <section id="service-pages" className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Service Areas</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-10">Detailed service offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicePages.map(s => (
            <Link key={s.title} href={s.href}
              className={`group border border-gray-100 border-t-2 ${s.border} rounded-xl p-6 bg-white hover:shadow-md transition-all`}>
              <h3 className={`font-semibold mb-2 ${s.color}`}>{s.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">{s.body}</p>
              <span className={`text-sm font-medium ${s.color} group-hover:underline`}>Explore service →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Why Choose Us</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">What sets us apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map(d => (
              <div key={d.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{d.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Past Performance</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-10">Proven results for federal, state, and commercial clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastPerformance.map(p => (
            <div key={p.title} className="border border-gray-100 rounded-xl p-6 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2">{p.result}</p>
              <h3 className="font-semibold text-brand-dark mb-2">{p.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Government Contracting callout */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-8 bg-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Government Contracting</p>
            <h2 className="text-lg font-semibold text-brand-dark mb-5">Registered & eligible for federal set-aside contracts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="text-xs text-brand-muted mb-1 uppercase tracking-wide font-semibold">UEI</p>
                <p className="font-mono text-brand-dark">UX6KC1L6ZMT3</p>
              </div>
              <div>
                <p className="text-xs text-brand-muted mb-1 uppercase tracking-wide font-semibold">CAGE Code</p>
                <p className="font-mono text-brand-dark">9YNH5</p>
              </div>
              <div>
                <p className="text-xs text-brand-muted mb-1 uppercase tracking-wide font-semibold">Certification</p>
                <p className="text-brand-dark">WOSB</p>
              </div>
              <div>
                <p className="text-xs text-brand-muted mb-1 uppercase tracking-wide font-semibold">Primary NAICS</p>
                <p className="text-brand-dark text-xs leading-relaxed">541512, 325412, 325414, 541330, 541511, 541611</p>
              </div>
            </div>
            <p className="text-sm text-brand-muted mt-5">
              Eligible for Women-Owned Small Business (WOSB) set-aside contracts
              at the federal and state level.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to work together?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Whether you are a commercial client or a government agency, we bring the expertise
            to deliver results that matter.
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
