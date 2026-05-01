import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trinity Yasha — Be Found by AI and Search',
  description:
    'Measure how your brand appears in ChatGPT, Claude, and Google. Auto-generate optimized content that closes the gap. AI visibility and SEO in one platform.',
}

const features = [
  {
    title: 'AI Visibility Measurement',
    body: 'Track how often — and where — your brand is mentioned in answers from ChatGPT, Claude, Perplexity, and Gemini. Share of voice, mention rate, and average rank, refreshed weekly.',
  },
  {
    title: 'Search Visibility (SEO)',
    body: 'Google rank position, AI Overview presence, Featured Snippet appearance, and People Also Ask coverage — every paid plan includes SERP measurement on every cycle.',
  },
  {
    title: 'AI-Optimized Content Drafts',
    body: 'For each query where you should appear but don\'t, Yasha drafts a piece designed for AI Overview inclusion. Built on real measurement data from your own brand.',
  },
  {
    title: 'One-Click Publish',
    body: 'Webhook delivery to your CMS, blog, or social distribution. Stage 5 closes the loop — measure the gap, generate the fix, ship it, re-measure.',
  },
]

export default function Yasha() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-cyan-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Trinity Yasha</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Be Found by AI and Search
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Your buyers are asking ChatGPT, Claude, and Gemini before they ask Google.
          Yasha measures how your brand appears across both surfaces — then drafts and
          publishes the content that closes the gap.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn-primary">Request a Demo</Link>
          <Link href="/contact" className="btn-outline">Talk to Us</Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-brand-dark mb-10">What Yasha Does</h2>
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
          <h2 className="text-xl font-semibold text-brand-dark mb-6 text-center">The closed loop</h2>
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
          {[
            {
              name: 'Starter',
              price: '$99/mo',
              limits: ['Up to 10 brands', '50 queries per brand', '5 measurement cycles / mo', '5 content drafts / mo', '5 placements / mo', 'OpenAI + Perplexity'],
              accent: 'brand-cyan',
            },
            {
              name: 'Pro',
              price: '$499/mo',
              limits: ['Up to 25 brands', '200 queries per brand', 'Up to 31 cycles / mo', '25 content drafts / mo', '25 placements / mo', 'OpenAI, Perplexity, Anthropic, Google'],
              accent: 'brand-cyan',
              featured: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              limits: ['Unlimited brands', 'Unlimited queries', 'Unlimited cycles', 'Unlimited content', 'Unlimited placements', 'All providers + custom integrations'],
              accent: 'brand-cyan',
            },
          ].map(p => (
            <div
              key={p.name}
              className={`border rounded-xl p-6 bg-white ${p.featured ? 'border-brand-cyan border-2 shadow-md' : 'border-gray-100'}`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-2">{p.name}</p>
              <p className="text-3xl font-semibold text-brand-dark mb-4">{p.price}</p>
              <ul className="space-y-2 text-sm text-brand-muted">
                {p.limits.map(l => <li key={l}>• {l}</li>)}
              </ul>
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
