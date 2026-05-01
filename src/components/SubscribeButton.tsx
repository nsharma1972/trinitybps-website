'use client'

import { useState } from 'react'

interface Props {
  plan: 'starter' | 'pro'
  // Optional override; defaults to env var or production URL
  apiBase?: string
}

const DEFAULT_API_BASE =
  process.env.NEXT_PUBLIC_GEO_CONTROL_URL ||
  'https://geo-control-prod.apps.trinitybps.com'

export default function SubscribeButton({ plan, apiBase = DEFAULT_API_BASE }: Props) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || busy) return
    setBusy(true)
    setErrorMsg(null)
    try {
      const res = await fetch(`${apiBase}/v1/billing/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          email: email.trim(),
          ...(name.trim() ? { name: name.trim() } : {}),
        }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok || !data.url) {
        setErrorMsg(data.error ?? 'Could not start checkout — please try again or use the Contact form.')
        setBusy(false)
        return
      }
      // Hand off to Stripe — full page redirect
      window.location.href = data.url
    } catch {
      setErrorMsg('Network error — please try again or use the Contact form.')
      setBusy(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-5 bg-brand-cyan text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        Subscribe — ${plan === 'starter' ? '99' : '499'}/mo
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4" onClick={() => !busy && setOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            <h3 className="text-lg font-bold text-brand-dark mb-2">
              Subscribe to Yasha {plan === 'starter' ? 'Starter' : 'Pro'}
            </h3>
            <p className="text-sm text-brand-muted mb-5">
              Enter your email to continue to secure checkout. We&apos;ll create your account and redirect you to Stripe.
            </p>

            <form onSubmit={submit} className="space-y-3">
              <label className="block">
                <span className="text-xs font-medium text-brand-muted">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  disabled={busy}
                  placeholder="you@company.com"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan disabled:opacity-50"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-brand-muted">Workspace name (optional)</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={busy}
                  placeholder="Acme Inc"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan disabled:opacity-50"
                />
              </label>

              {errorMsg && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded p-2">
                  {errorMsg}
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={busy}
                  className="flex-1 text-sm font-medium text-brand-muted px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={busy || !email.trim()}
                  className="flex-1 text-sm font-semibold text-white bg-brand-cyan px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {busy ? 'Loading…' : 'Continue to checkout'}
                </button>
              </div>

              <p className="text-[10px] text-brand-muted text-center pt-2">
                Powered by Stripe · We never see your card details
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
