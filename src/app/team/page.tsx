import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team — Trinity Bridge PS',
  description: 'Meet the leadership team at Trinity Bridge PS — practitioners with decades of experience in life sciences, technology, and AI.',
}

const advisors = [
  {
    name: 'Ali Faruqi',
    role: 'Strategic Advisor',
    bio: 'Ali brings extensive experience in enterprise technology strategy and digital transformation across regulated industries. He advises Trinity Bridge PS on product direction and go-to-market strategy.',
  },
  {
    name: 'Siddhartha Jain',
    role: 'Strategic Advisor',
    bio: 'Siddhartha has deep expertise in data architecture and analytics platforms. He advises Trinity Bridge PS on data intelligence capabilities and enterprise AI implementation.',
  },
]

const credentials = [
  'IIT Roorkee, B.Tech.',
  'Boston University, M.S.',
  'CMMI Lead Appraiser',
  'Six Sigma Black Belt',
  'PRINCE2 Certified',
  'ITIL Certified',
  'Marquis Who\'s Who in America',
]

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Our Team</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-4xl">
          Practitioners who've lived the problems we solve
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-5">
          We bring decades of hands-on experience in life sciences, technology, and AI — not just frameworks and slides.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-semibold">WOSB Certified</span>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-brand-muted font-semibold">Deloitte Alumni</span>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-brand-muted font-semibold">Grant Thornton Alumni</span>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-brand-muted font-semibold">FTI Consulting Alumni</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Founder */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-8">Founder &amp; CEO</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-brand-dark mb-1">Narendra Sharma</h2>
            <p className="text-brand-blue text-sm font-medium mb-5">Founder &amp; Chief Executive Officer</p>

            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Narendra Sharma is the Founder and CEO of Trinity Bridge Professional Services, LLC, with over
                29 years of experience spanning life sciences, technology delivery, and enterprise AI adoption.
                His career has been defined by helping complex, regulated organizations modernize their operations
                without compromising compliance or quality.
              </p>
              <p>
                Before founding Trinity Bridge PS, Narendra led large-scale digital transformation and process
                improvement programs across pharmaceutical, biotech, medical device, and healthcare organizations.
                He has worked with both Fortune 500 companies and growth-stage firms navigating regulatory
                transitions, ERP implementations, and AI readiness assessments.
              </p>
              <p>
                Narendra holds a B.Tech. from IIT Roorkee and an M.S. from Boston University. He is a
                CMMI Lead Appraiser, a Six Sigma Black Belt, PRINCE2 and ITIL certified, and has been
                recognized in Marquis Who's Who in America for his contributions to the technology and
                life sciences industries.
              </p>
              <p>
                His career includes leadership roles at firms including Deloitte, Grant Thornton, and
                FTI Consulting — giving him firsthand experience with the standards and expectations of
                the most sophisticated clients in the industry.
              </p>
              <p>
                He founded Trinity Bridge PS with a single conviction: that the organizations most in need of
                AI — regulated industries operating under strict compliance, quality, and safety mandates —
                deserve purpose-built tools and experienced partners, not generic platforms retrofitted
                for their use cases. Trinity Bridge PS is certified as a Women-Owned Small Business (WOSB)
                and certified Women-Owned Small Business (WOSB).
              </p>
            </div>
          </div>

          <div>
            <div className="border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-6 bg-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Credentials</p>
              <ul className="space-y-2">
                {credentials.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-brand-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-brand-muted leading-snug">29+ years in life sciences, technology, and AI adoption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Advisory Board</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">Strategic advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map(a => (
              <div key={a.name} className="bg-white border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-0.5">{a.name}</h3>
                <p className="text-brand-cyan text-xs font-medium uppercase tracking-wide mb-3">{a.role}</p>
                <p className="text-sm text-brand-muted leading-relaxed">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Work with us</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Schedule a conversation with Narendra directly to discuss your AI adoption challenges.
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
