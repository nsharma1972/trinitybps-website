import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Trinity Bridge PS',
  description: 'Book a free consultation with Trinity Bridge PS.',
}

export default function Contact() {
  return (
    <>
      <section className="px-6 pt-20 pb-10 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-3">Get in Touch</p>
        <h1 className="text-4xl font-semibold text-brand-dark tracking-tight mb-4">Let's Talk</h1>
        <p className="text-lg text-brand-muted max-w-lg leading-relaxed">
          Tell us a bit about your organization and what you're trying to accomplish.
          We'll be in touch within one business day.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactForm />

        {/* Contact info */}
        <div className="flex flex-col gap-8 pt-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Email</p>
            <a href="mailto:hello@trinitybps.com" className="text-brand-blue hover:underline text-sm">
              hello@trinitybps.com
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Phone</p>
            <a href="tel:+16035212140" className="text-brand-blue hover:underline text-sm">
              +1 (603) 521-2140
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Location</p>
            <p className="text-sm text-brand-muted">4 Horizon Circle<br />Nashua, NH 03064</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">Response Time</p>
            <p className="text-sm text-brand-muted">Within one business day</p>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Our Solutions</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <div>
                  <span className="text-brand-blue font-medium">AI University</span>
                  <span className="text-brand-muted"> — Workforce reskilling</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-green mt-1.5 shrink-0" />
                <div>
                  <span className="text-brand-green font-medium">TDI Intel</span>
                  <span className="text-brand-muted"> — Data intelligence</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                <div>
                  <span className="text-brand-orange font-medium">AI Consulting</span>
                  <span className="text-brand-muted"> — Strategy &amp; implementation</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
