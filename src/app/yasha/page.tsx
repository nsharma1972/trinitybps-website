import Link from 'next/link'
import type { Metadata } from 'next'
import SubscribeButton from '@/components/SubscribeButton'

export const metadata: Metadata = {
  title: 'Trinity Yasha — GEO + SEO Promotion Platform',
  description:
    'Generative Engine Optimization (GEO) + Search Engine Optimization (SEO) in one platform. Measure how your brand appears in ChatGPT, Claude, and Google — then auto-generate and publish content that promotes you across both surfaces.',
}

const features = [
  {
    title: 'GEO — Generative Engine Optimization',
    body: 'Track how often, where, and at what rank your brand is mentioned in answers from ChatGPT, Claude, Perplexity, and Gemini. Share of voice, mention rate, citation count — refreshed weekly. The newer half of being found.',
  },
  {
    title: 'SEO — Search Engine Optimization',
    body: 'Google rank position, AI Overview presence, Featured Snippet, People Also Ask, video carousel — every paid plan includes full SERP measurement on every cycle. Same dashboard, same brand, same week.',
  },
  {
    title: 'Promotion — AI-Drafted Content',
    body: 'For every query where AI Overview appears but your brand doesn\'t, or where you rank below page one, Yasha drafts the content needed to close the gap. Drafts use your real measurement data as context, so the copy is grounded, not generic.',
  },
  {
    title: 'Promotion — One-Click Publish',
    body: 'Webhook delivery to your CMS, blog, LinkedIn, or syndication partner. The system tracks delivery, captures the response, and the next weekly cycle measures whether the gap closed. The promotion loop runs continuously.',
  },
]

export default function Yasha() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-cyan-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Trinity Yasha — GEO + SEO Promotion</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5 max-w-4xl">
          Promote Your <span className="text-brand-cyan">Brand</span> Across AI <em className="text-brand-cyan not-italic">and</em> Search
        </h1>
        <p className="text-lg text-brand-muted max-w-2xl leading-relaxed mb-4">
          Generative Engine Optimization (GEO) and Search Engine Optimization (SEO) — together,
          in one platform. Yasha measures how your brand shows up in ChatGPT, Claude, Gemini,
          and Google, then drafts and publishes the content that promotes you into the gaps.
        </p>
        <p className="text-sm text-brand-muted max-w-xl leading-relaxed mb-8">
          Your buyers are asking AI before they ask Google. If you're absent from AI answers,
          you're invisible — even when you rank well on the search side. GEO closes that gap.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn-primary">Request a Demo</Link>
          <Link href="/contact" className="btn-outline">Talk to Us</Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-2">What Yasha Does</h2>
        <p className="text-sm text-brand-muted mb-10 max-w-2xl">
          Two measurement surfaces (GEO + SEO), two promotion mechanisms (drafted content,
          one-click publish) — one closed loop running every week.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.title} className="border border-gray-100 border-t-2 border-t-brand-cyan rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The loop, visualized */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-brand-dark mb-2 text-center">The promotion loop</h2>
          <p className="text-sm text-brand-muted text-center mb-6 max-w-xl mx-auto">
            Measure → diagnose → draft → publish → re-measure. The same loop runs against both GEO and SEO surfaces every week.
          </p>
          <ol className="space-y-3 text-sm text-brand-muted">
            <li className="bg-white border border-gray-100 rounded-lg p-4">
              <span className="font-semibold text-brand-dark">1. Measure.</span> Every week,
              Yasha samples your tracked queries across the major LLMs and pulls Google SERP
              data. You get a weekly briefing showing exactly where you appear and where you don't.
            </li>
            <li className="bg-white border border-gray-100 rounded-lg p-4">
              <span className="font-semibold text-brand-dark">2. Diagnose.</span> The briefing
              identifies high-leverage gaps: queries where AI Overview appears but your brand
              doesn't, queries where competitors outrank you, branded queries with weak coverage.
            </li>
            <li className="bg-white border border-gray-100 rounded-lg p-4">
              <span className="font-semibold text-brand-dark">3. Draft.</span> Stage 4 generates
              an AI-optimized content draft per gap query — using your real measurement data as
              context. You review, approve, or edit.
            </li>
            <li className="bg-white border border-gray-100 rounded-lg p-4">
              <span className="font-semibold text-brand-dark">4. Publish.</span> One click sends
              the draft to your CMS, blog, or syndication channel via webhook. The system tracks
              delivery and result.
            </li>
            <li className="bg-white border border-gray-100 rounded-lg p-4">
              <span className="font-semibold text-brand-dark">5. Re-measure.</span> Next week's
              cycle shows whether the gap closed. The loop runs continuously.
            </li>
          </ol>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-10 text-center">Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {([
            {
              name: 'Starter',
              price: '$99/mo',
              limits: ['Up to 10 brands', '50 queries per brand', '5 measurement cycles / mo', '5 content drafts / mo', '5 placements / mo', 'OpenAI + Perplexity'],
              cta: 'starter' as const,
            },
            {
              name: 'Pro',
              price: '$499/mo',
              limits: ['Up to 25 brands', '200 queries per brand', 'Up to 31 cycles / mo', '25 content drafts / mo', '25 placements / mo', 'OpenAI, Perplexity, Anthropic, Google'],
              featured: true,
              cta: 'pro' as const,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              limits: ['Unlimited brands', 'Unlimited queries', 'Unlimited cycles', 'Unlimited content', 'Unlimited placements', 'All providers + custom integrations'],
              cta: 'contact' as const,
            },
          ]).map(p => (
            <div
              key={p.name}
              className={`border rounded-xl p-6 bg-white flex flex-col ${p.featured ? 'border-brand-cyan border-2 shadow-md' : 'border-gray-100'}`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2">{p.name}</p>
              <p className="text-3xl font-semibold text-brand-dark mb-4">{p.price}</p>
              <ul className="space-y-2 text-sm text-brand-muted flex-1">
                {p.limits.map(l => <li key={l}>• {l}</li>)}
              </ul>
              {p.cta === 'contact' ? (
                <Link
                  href="/contact"
                  className="w-full mt-5 bg-brand-dark text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity text-center block"
                >
                  Contact us
                </Link>
              ) : (
                <SubscribeButton plan={p.cta} />
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-brand-muted text-center mt-6">
          Free measurement tier available for evaluation — contact us to set up your account.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">See Yasha in action on your own brand</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Tell us your domain and a handful of queries. We'll show you what your AI and search
            visibility looks like today — usually in under 24 hours.
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
