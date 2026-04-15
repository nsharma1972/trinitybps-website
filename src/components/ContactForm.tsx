'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-brand-dark">Message sent</h3>
        <p className="text-sm text-brand-muted leading-relaxed">
          Thanks for reaching out. We'll be in touch within one business day.
        </p>
        <button onClick={() => setState('idle')} className="text-sm text-brand-blue hover:underline mt-2">
          Send another message
        </button>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1" htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1" htmlFor="email">Work Email</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1" htmlFor="company">Company</label>
        <input id="company" name="company" type="text" className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1" htmlFor="interest">Area of Interest</label>
        <select id="interest" name="interest" className={`${inputClass} bg-white`}>
          <option value="">Select one…</option>
          <option value="ai-university">AI University</option>
          <option value="tdi-intel">TDI Intel</option>
          <option value="ai-consulting">AI Consulting</option>
          <option value="all">All Solutions</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className={`${inputClass} resize-none`} />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:hello@trinitybps.com" className="underline">hello@trinitybps.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
