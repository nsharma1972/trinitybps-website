'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/ai-university', label: 'AI University' },
  { href: '/tdi-intel', label: 'TDI Intel' },
  { href: '/ai-consulting', label: 'AI Consulting' },
  { href: '/yasha', label: 'Yasha (GEO + SEO)' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.png" alt="Trinity Bridge PS" width={140} height={50} className="h-10 w-auto" />
        </Link>

        {/* Desktop nav — hidden until lg breakpoint (1024px+) so tablets get the hamburger; prevents the cramped wrap we saw on iPad */}
        <nav className="hidden lg:flex items-center gap-6 flex-shrink-0">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link key={l.href} href={l.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  active ? 'text-brand-blue' : 'text-brand-muted hover:text-brand-blue'
                }`}>
                {l.label}
                {active && <span className="block h-0.5 bg-brand-blue rounded-full mt-0.5" />}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary text-sm py-2 px-5 whitespace-nowrap">
            Book a Call
          </Link>
          <a
            href="https://leads.trinitybps.com"
            className="text-xs text-brand-muted hover:text-brand-blue transition-colors border border-gray-200 rounded-full py-1.5 px-3 whitespace-nowrap"
          >
            Team Login
          </a>
        </nav>

        {/* Mobile / tablet toggle (now active up through md) */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : 'mb-1'}`} />
          <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? 'opacity-0' : 'mb-1'}`} />
          <div className={`w-5 h-0.5 bg-brand-dark transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile + tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
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
    </header>
  )
}
