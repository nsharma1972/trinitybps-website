import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners — Trinity Bridge PS',
  description: 'Trinity Bridge PS partners with QwickApps and KaaliDigital for autonomous AI engineering, governed multi-agent SDLC delivery, and enterprise-grade implementation.',
}

type Partner = {
  id: string
  name: string
  eyebrow: string
  tagline: string
  about: string
  badges: string[]
  capabilities: { title: string; body: string }[]
  principal: { name: string; role: string; background: string }
  accent: 'orange' | 'blue'
}

const partners: Partner[] = [
  {
    id: 'qwickapps',
    name: 'QwickApps',
    eyebrow: 'Strategic Technology Partner',
    tagline: 'Autonomous AI engineering platform',
    about:
      'QwickApps is Trinity Bridge’s strategic technology partner for governed multi-agent delivery. Their flagship platform — QwickForge — runs across 47 repositories with 8 specialized agent roles, taking work from chat through requirements, design, code, review, test, and release with phase-gated human approvals. When a Trinity Bridge engagement requires building, not just advising, this is the substrate we already operate on every day.',
    badges: ['47 repos in production', '8 agent roles', '10x AI cost reduction'],
    capabilities: [
      {
        title: 'Multi-agent SDLC orchestration',
        body: 'Eight specialized roles — Engineering Manager, Architect, Team Lead, Coder, Reviewer, DevOps, Tech Writer, QE — each routed to the right model tier with cost tracked per task.',
      },
      {
        title: 'MCP capability layer',
        body: 'A centralized Model Context Protocol aggregator exposing projects, semantic memory (Qdrant), encrypted secrets, knowledge base, and audit journal as first-class tools any agent can call.',
      },
      {
        title: 'Cost-aware model routing',
        body: 'LiteLLM gateway with free → cheap → standard → premium tiering. Reduced AI-assisted development cost from $750+/month to a fixed $100/month per seat.',
      },
      {
        title: 'Audit-grade governance',
        body: 'Every agent decision, model selection, approval, and remediation logged with timestamps, costs, and rationale — the auditability regulated industries require before deploying AI.',
      },
    ],
    principal: {
      name: 'Raajkumar Subramaniam',
      role: 'Founder & Agentic AI Architect',
      background: '20+ years architecting production software at Google, Bank of America, Brightcove, and Cisco. Currently also a Cybersecurity / AI Instructor for CDW Corporation, training U.S. federal teams.',
    },
    accent: 'orange',
  },
  {
    id: 'kaalidigital',
    name: 'KaaliDigital',
    eyebrow: 'Strategic Delivery Partner',
    tagline: 'Enterprise engineering & AI-native platforms',
    about:
      'KaaliDigital is Trinity Bridge’s strategic delivery partner — leading strategic engagements, delivery oversight, and technology execution for clients who need scalable, secure, and cost-effective digital solutions. Their leadership has shipped mission-critical platforms at Procore Technologies, SS&C Eze, and Dell EMC, and operates CaseKaizen, an AI-native workflow automation platform built for regulated environments.',
    badges: ['15+ years experience', 'CaseKaizen platform', 'Procore · SS&C · Dell EMC'],
    capabilities: [
      {
        title: 'AI-native workflow automation',
        body: 'CaseKaizen — multi-tenant SaaS platform automating complex, high-volume workflows using LLMs and modern data pipelines, purpose-built for compliance-sensitive environments.',
      },
      {
        title: 'Cloud architecture at scale',
        body: 'Cloud-native, distributed systems experience across AWS and Azure — service decomposition, event-driven architectures, and operational patterns proven under enterprise load.',
      },
      {
        title: 'Legacy modernization',
        body: 'Track record modernizing mission-critical legacy systems incrementally — improving performance, reliability, and operational efficiency without disrupting the business.',
      },
      {
        title: 'Compliance-first delivery',
        body: 'Engineering practice built around the standards regulated and government clients require — secure delivery, compliance documentation, audit trails, and reliability as first-class concerns.',
      },
    ],
    principal: {
      name: 'Narender Aeron',
      role: 'Founder & CTO, CaseKaizen · President, KaaliDigital',
      background: '15+ years in engineering leadership at Procore Technologies, SS&C Eze, and Dell EMC. Holds an MBA from Boston University and an M.S. in Computer Science.',
    },
    accent: 'blue',
  },
]

const accentClasses = {
  orange: {
    border: 'border-t-brand-orange',
    text: 'text-brand-orange',
    bg: 'bg-brand-orange/10',
    dot: 'bg-brand-orange',
  },
  blue: {
    border: 'border-t-brand-blue',
    text: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    dot: 'bg-brand-blue',
  },
} as const

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Partners</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-4xl">
          Engineering depth, delivered through trusted partnerships
        </h1>
        <p className="text-lg text-brand-muted max-w-2xl leading-relaxed">
          Trinity Bridge PS partners with specialized firms whose engineering depth complements our consulting
          practice — so clients get one accountable relationship with the right expertise behind every deliverable.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Partner profiles */}
      {partners.map((p, idx) => {
        const a = accentClasses[p.accent]
        return (
          <section
            key={p.id}
            id={p.id}
            className={`px-6 py-16 scroll-mt-20 ${idx % 2 === 1 ? 'bg-brand-light' : ''}`}
          >
            <div className="max-w-5xl mx-auto">
              <p className={`text-xs font-semibold uppercase tracking-widest ${a.text} mb-3`}>{p.eyebrow}</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-semibold text-brand-dark mb-1">{p.name}</h2>
                  <p className={`text-sm font-medium ${a.text}`}>{p.tagline}</p>
                </div>
                <div className="shrink-0 flex flex-wrap gap-2">
                  {p.badges.map(b => (
                    <span key={b} className={`text-xs px-3 py-1 rounded-full ${a.bg} ${a.text} font-semibold`}>{b}</span>
                  ))}
                </div>
              </div>

              <p className="text-brand-muted leading-relaxed max-w-3xl mb-10">{p.about}</p>

              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Highlighted capabilities</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {p.capabilities.map(c => (
                  <div key={c.title} className={`border border-gray-100 border-t-2 ${a.border} rounded-xl p-6 bg-white`}>
                    <h3 className="font-semibold text-brand-dark mb-2 flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-2 shrink-0`} />
                      {c.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>

              <div className={`border border-gray-100 border-t-2 ${a.border} rounded-xl p-6 bg-white`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Principal</p>
                <p className="text-base font-semibold text-brand-dark">{p.principal.name}</p>
                <p className={`text-sm font-medium ${a.text} mb-3`}>{p.principal.role}</p>
                <p className="text-sm text-brand-muted leading-relaxed max-w-3xl">{p.principal.background}</p>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Need consulting and engineering in the same room?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Trinity Bridge advises. Our partners build. Talk to us about engagements that need both.
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
