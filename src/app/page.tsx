import Link from 'next/link'

const products = [
  {
    textColor: 'text-brand-blue',
    borderTop: 'border-t-brand-blue',
    dotColor: 'bg-brand-blue',
    icon: '🎓',
    title: 'AI University',
    tagline: 'Reskill Your Workforce',
    description:
      'Structured, industry-specific AI learning paths that take your team from AI-anxious to AI-capable — built for regulated industries where precision matters.',
    href: '/ai-university',
  },
  {
    textColor: 'text-brand-green',
    borderTop: 'border-t-brand-green',
    dotColor: 'bg-brand-green',
    icon: '📊',
    title: 'TDI Intel',
    tagline: 'Turn Data Into Decisions',
    description:
      'A unified intelligence layer that connects your existing systems, surfaces actionable insights, and puts the right information in front of the right people.',
    href: '/tdi-intel',
  },
  {
    textColor: 'text-brand-orange',
    borderTop: 'border-t-brand-orange',
    dotColor: 'bg-brand-orange',
    icon: '🧭',
    title: 'AI Consulting',
    tagline: 'Adopt AI Without the Guesswork',
    description:
      'Hands-on consulting for organizations navigating AI responsibly — covering strategy, compliance, change management, and implementation.',
    href: '/ai-consulting',
  },
  {
    textColor: 'text-brand-cyan',
    borderTop: 'border-t-brand-cyan',
    dotColor: 'bg-brand-cyan',
    icon: '🔍',
    title: 'Trinity Yasha',
    tagline: 'Promote Your Brand — GEO + SEO',
    description:
      'Generative Engine Optimization (GEO) and Search Engine Optimization (SEO) in one platform. Measure how your brand appears in ChatGPT, Claude, and Google — then auto-draft and publish content that promotes you into the gaps.',
    href: '/yasha',
  },
]

const industries = ['Healthcare', 'Financial Services', 'Legal', 'Manufacturing', 'Government']

const differentiators = [
  {
    icon: '🏛️',
    title: 'Built for Regulated Industries',
    body: 'Everything we do accounts for HIPAA, SOC 2, GDPR, and industry-specific compliance — not as an afterthought, but as a foundation.',
  },
  {
    icon: '🤝',
    title: 'Hands-On, Not Advisory',
    body: 'We work alongside your team through implementation, not just hand you a report. We stay until the outcomes are real.',
  },
  {
    icon: '🔗',
    title: 'End-to-End Coverage',
    body: 'Education, data intelligence, and consulting under one roof — so your AI adoption strategy stays coherent from day one.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-36 max-w-5xl mx-auto text-center">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/40 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.07),transparent_60%)] pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-5">
          AI Adoption · Education · Intelligence · Visibility
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight mb-7">
          Bridging Intelligence,<br className="hidden md:block" /> Transformation &amp; Growth
        </h1>
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Trinity Bridge PS helps organizations in regulated industries adopt AI with confidence —
          through workforce development, data intelligence, strategic consulting, and AI/search visibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
          <Link href="/#solutions" className="btn-outline">Explore Our Solutions</Link>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="px-6 pb-28 max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 text-center">Our Solutions</p>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-12 tracking-tight">Four products. One mission.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link key={p.title} href={p.href}
              className={`group border border-gray-100 border-t-2 ${p.borderTop} rounded-xl p-7 hover:shadow-md transition-all duration-200 flex flex-col bg-white`}>
              <span className="text-2xl mb-4">{p.icon}</span>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${p.textColor}`}>
                {p.tagline}
              </p>
              <h2 className="text-xl font-semibold text-brand-dark mb-3">{p.title}</h2>
              <p className="text-sm text-brand-muted leading-relaxed flex-1">{p.description}</p>
              <span className={`mt-5 text-sm font-medium ${p.textColor} group-hover:underline`}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why TrinityBPS */}
      <section className="bg-brand-light px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Why Us</p>
            <h2 className="text-2xl font-semibold text-brand-dark">What makes us different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => (
              <div key={d.title} className="text-center">
                <span className="text-3xl block mb-4">{d.icon}</span>
                <h3 className="font-semibold text-brand-dark mb-2">{d.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-6">
          Industries We Serve
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map(i => (
            <span key={i}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to move forward with AI?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Let's talk about where your organization is today and where you want to go. No jargon, no pressure.
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
