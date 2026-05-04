'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface PreviewCard {
  eyebrow: string
  title: string
  body: string
  icon: string
  accentText: string  // explicit Tailwind class so JIT picks it up
  accentBg: string
}

interface NavLink {
  href: string
  label: string
  preview?: PreviewCard
}

const links: NavLink[] = [
  {
    href: '/services',
    label: 'Services',
    preview: {
      eyebrow: 'Overview',
      title: 'All Four Solutions',
      body: 'AI University, TDI Intel, AI Consulting, and Trinity Yasha — the four ways Trinity Bridge helps organizations adopt AI with confidence.',
      icon: '📋',
      accentText: 'text-brand-muted',
      accentBg: 'bg-slate-100',
    },
  },
  {
    href: '/ai-university',
    label: 'AI University',
    preview: {
      eyebrow: 'AI University',
      title: 'Reskill Your Workforce',
      body: 'Industry-specific AI learning paths that take teams from AI-anxious to AI-capable. Built for regulated industries.',
      icon: '🎓',
      accentText: 'text-brand-blue',
      accentBg: 'bg-blue-50',
    },
  },
  {
    href: '/tdi-intel',
    label: 'TDI Intel',
    preview: {
      eyebrow: 'TDI Intel',
      title: 'Turn Data Into Decisions',
      body: 'Connect existing systems, surface actionable insights, deliver them to the right people. No data science team required.',
      icon: '📊',
      accentText: 'text-brand-green',
      accentBg: 'bg-emerald-50',
    },
  },
  {
    href: '/ai-consulting',
    label: 'AI Consulting',
    preview: {
      eyebrow: 'AI Consulting',
      title: 'AI Adoption Without the Guesswork',
      body: 'Hands-on consulting covering strategy, compliance, change management, and implementation — for organizations navigating AI responsibly.',
      icon: '🧭',
      accentText: 'text-brand-orange',
      accentBg: 'bg-orange-50',
    },
  },
  {
    href: '/yasha',
    label: 'Yasha (GEO + SEO)',
    preview: {
      eyebrow: 'GEO + SEO',
      title: 'Trinity Yasha — Promote Your Brand',
      body: 'Measure how your brand appears in ChatGPT, Claude, and Google. Auto-draft and publish content that closes the visibility gap.',
      icon: '🔍',
      accentText: 'text-brand-cyan',
      accentBg: 'bg-cyan-50',
    },
  },
  {
    href: '/blog',
    label: 'Blog',
    preview: {
      eyebrow: 'Insights',
      title: 'Field Notes',
      body: 'Writing on AI adoption, brand visibility, and what actually works for B2B services in regulated industries.',
      icon: '📝',
      accentText: 'text-brand-muted',
      accentBg: 'bg-slate-100',
    },
  },
  {
    href: '/about',
    label: 'About',
    preview: {
      eyebrow: 'About',
      title: 'Trinity Bridge Professional Services',
      body: 'An AI-operated boutique consulting firm helping mid-market organizations adopt AI responsibly and measurably.',
      icon: '🏛️',
      accentText: 'text-brand-muted',
      accentBg: 'bg-slate-100',
    },
  },
  {
    href: '/partners',
    label: 'Partners',
    preview: {
      eyebrow: 'Partners',
      title: 'QwickApps & KaaliDigital',
      body: 'Strategic technology and delivery partners — autonomous AI engineering, multi-agent SDLC, and enterprise-scale execution behind every Trinity Bridge engagement.',
      icon: '🤝',
      accentText: 'text-brand-orange',
      accentBg: 'bg-orange-50',
    },
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)
  const pathname = usePathname()

  const hoveredLink = links.find(l => l.href === hoveredHref)
  const showPanel = !!hoveredLink?.preview

  return (
    <>
      <header
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {/* py-3 + flex-wrap: when nav doesn't fit one row at tablet width, it wraps to a 2nd row instead of breaking individual items mid-word. Header height grows accordingly. */}
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 min-h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="Trinity Bridge PS" width={140} height={50} className="h-10 w-auto" />
          </Link>

          {/* Desktop + tablet nav (md+) — flex-wrap lets items flow to a second row when cramped; whitespace-nowrap keeps each item one piece. onMouseEnter on each Link drives the hover preview panel. */}
          <nav className="hidden md:flex flex-wrap items-center gap-x-5 gap-y-2 justify-end">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onMouseEnter={() => setHoveredHref(l.href)}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    active ? 'text-brand-blue' : 'text-brand-muted hover:text-brand-blue'
                  }`}
                >
                  {l.label}
                  {active && <span className="block h-0.5 bg-brand-blue rounded-full mt-0.5" />}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onMouseEnter={() => setHoveredHref(null)}
              className="btn-primary text-sm py-2 px-5 whitespace-nowrap"
            >
              Book a Call
            </Link>
            <a
              href="https://leads.trinitybps.com"
              onMouseEnter={() => setHoveredHref(null)}
              className="text-xs text-brand-muted hover:text-brand-blue transition-colors border border-gray-200 rounded-full py-1.5 px-3 whitespace-nowrap"
            >
              Team Login
            </a>
          </nav>

          {/* Mobile-only hamburger (phones < md). Tablet+ uses the wrap-friendly nav above. */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : 'mb-1'}`} />
            <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? 'opacity-0' : 'mb-1'}`} />
            <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile-only menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`text-sm font-medium ${pathname === l.href ? 'text-brand-blue' : 'text-brand-muted hover:text-brand-blue'}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm text-center">
              Book a Call
            </Link>
            <a
              href="https://leads.trinitybps.com"
              className="text-xs text-brand-muted hover:text-brand-blue transition-colors text-center"
            >
              Team Login →
            </a>
          </div>
        )}

        {/* Hover preview panel — desktop only, anchored below the nav (top-full so it adapts to wrapped nav height), full width */}
        {showPanel && hoveredLink?.preview && (
          <div className="hidden md:block absolute top-full inset-x-0 bg-white border-b border-gray-100 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <Link href={hoveredLink.href} className="flex items-start gap-5 group">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${hoveredLink.preview.accentBg} flex items-center justify-center text-2xl`}>
                  {hoveredLink.preview.icon}
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${hoveredLink.preview.accentText} mb-1`}>
                    {hoveredLink.preview.eyebrow}
                  </p>
                  <h3 className="text-lg font-bold text-brand-dark mb-1 group-hover:underline decoration-2 underline-offset-4">
                    {hoveredLink.preview.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed max-w-2xl">
                    {hoveredLink.preview.body}
                  </p>
                </div>
                <div className="flex-shrink-0 self-center text-brand-muted text-sm group-hover:text-brand-blue transition-colors">
                  Visit page →
                </div>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Dimming overlay for the rest of the page when preview panel is open */}
      {showPanel && (
        <div className="hidden md:block fixed inset-0 top-0 bg-black/15 z-40 pointer-events-none transition-opacity" />
      )}
    </>
  )
}
