import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-1 md:col-span-2">
          <Image src="/logo.png" alt="Trinity Bridge PS" width={130} height={46} className="h-9 w-auto mb-3" />
          <p className="text-sm text-brand-muted leading-relaxed max-w-xs mb-3">
            Bridging the gap between AI potential and real-world results — through education, data intelligence, and hands-on consulting.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs px-2 py-1 rounded bg-brand-blue/10 text-brand-blue font-semibold">WOSB Certified</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/trinitybps" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-brand-muted hover:text-brand-blue transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Solutions</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/ai-university" className="text-brand-muted hover:text-brand-blue transition-colors">AI University</Link></li>
            <li><Link href="/tdi-intel" className="text-brand-muted hover:text-brand-blue transition-colors">TDI Intel</Link></li>
            <li><Link href="/ai-consulting" className="text-brand-muted hover:text-brand-blue transition-colors">AI Consulting</Link></li>
            <li><Link href="/yasha" className="text-brand-muted hover:text-brand-blue transition-colors">Trinity Yasha (GEO + SEO)</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/digital-enablement" className="text-brand-muted hover:text-brand-blue transition-colors">Digital Enablement</Link></li>
            <li><Link href="/cybersecurity" className="text-brand-muted hover:text-brand-blue transition-colors">Cybersecurity</Link></li>
            <li><Link href="/life-science-assessment" className="text-brand-muted hover:text-brand-blue transition-colors">Life Science Assessment</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-brand-muted hover:text-brand-blue transition-colors">About</Link></li>
            <li><Link href="/team" className="text-brand-muted hover:text-brand-blue transition-colors">Our Team</Link></li>
            <li><Link href="/contact" className="text-brand-muted hover:text-brand-blue transition-colors">Contact Us</Link></li>
            <li>
              <a href="mailto:hello@trinitybps.com" className="text-brand-muted hover:text-brand-blue transition-colors">
                hello@trinitybps.com
              </a>
            </li>
            <li className="text-brand-muted">Nashua, NH</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Trinity Bridge PS. All rights reserved.</p>
        <p className="text-xs text-brand-muted">WOSB Certified · Regulated industries · AI adoption</p>
      </div>
    </footer>
  )
}
