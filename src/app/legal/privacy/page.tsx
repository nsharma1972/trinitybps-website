export const metadata = {
  title: 'Privacy Policy — Trinity Bridge',
  description: 'How Trinity Bridge collects, uses, and protects your data across our products and services.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-3">Privacy Policy</h1>
        <p className="text-sm text-brand-muted">
          Last updated: 2 May 2026 · Effective: 2 May 2026
        </p>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900">
          This policy is the current operational version. For the legally binding
          form or questions about your data, contact{' '}
          <a href="mailto:privacy@trinitybps.com" className="underline">
            privacy@trinitybps.com
          </a>.
        </div>
      </header>

      <section className="prose prose-slate max-w-none text-sm text-brand-dark space-y-4">
        <h2 className="text-lg font-semibold mt-6 mb-2">1. Who we are</h2>
        <p>
          Trinity Bridge Professional Services LLC (&ldquo;Trinity Bridge&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and the
          following products: Trinity AI University, TDI Intel, AI Consulting,
          and Trinity Yasha (AI + Search visibility platform).
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">2. What we collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Account information:</strong> email address, display name,
            and (for paid customers) billing details collected by our payment
            processor (Stripe).
          </li>
          <li>
            <strong>Configuration data you provide:</strong> brand names,
            competitor names, search queries you want tracked, and any
            descriptions or website URLs you enter.
          </li>
          <li>
            <strong>Measurement data:</strong> publicly-available LLM responses
            (ChatGPT, Perplexity, etc.) and search engine results pages (Google
            via SerpAPI) for the queries you configure. These are your
            measurement records and stay associated with your workspace.
          </li>
          <li>
            <strong>Usage data:</strong> IP address, browser type, pages visited,
            timestamps. Standard server-log data retained for security and
            debugging purposes.
          </li>
          <li>
            <strong>Communications:</strong> emails you send to support, contact
            form submissions, scheduled-call notes.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">3. How we use your data</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To deliver the products and services you signed up for.</li>
          <li>To process payments and send transactional notifications.</li>
          <li>To improve our products (in aggregate, never identifiable).</li>
          <li>To respond to support requests.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your data. We do not share your
          configuration or measurement data with third parties for marketing.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">4. Sub-processors we share data with</h2>
        <p>To deliver the platform, we share limited data with:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Supabase</strong> — authentication and identity management
          </li>
          <li>
            <strong>Stripe</strong> — payment processing (billing data only)
          </li>
          <li>
            <strong>OpenAI</strong> — LLM responses for measurement (we send
            your search queries; we do not send your account data)
          </li>
          <li>
            <strong>Perplexity</strong> — LLM responses for measurement
          </li>
          <li>
            <strong>SerpAPI</strong> — Google search results for measurement
          </li>
          <li>
            <strong>Cloud hosting providers</strong> — Oracle Cloud Infrastructure
            and IONOS for application hosting
          </li>
        </ul>
        <p>
          Each sub-processor operates under their own privacy policy and
          security commitments.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">5. How long we keep your data</h2>
        <p>
          Active accounts: we keep your data as long as your account is open.
          Cancelled accounts: we delete your workspace data within 30 days of
          cancellation, except where we are required to retain records for tax
          or legal compliance (typically up to 7 years for billing records).
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">6. Your rights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access — request a copy of the data we hold about you</li>
          <li>Rectification — correct inaccurate data</li>
          <li>Erasure — request deletion of your account and associated data</li>
          <li>Portability — receive your data in a machine-readable format</li>
          <li>Objection — object to processing for specific purposes</li>
        </ul>
        <p>
          To exercise any of these rights, email{' '}
          <a href="mailto:privacy@trinitybps.com" className="text-brand-cyan hover:underline">
            privacy@trinitybps.com
          </a>
          . We respond within 30 days.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">7. Cookies</h2>
        <p>
          We use essential cookies for authentication (Supabase session) and
          billing (Stripe). We do not use advertising or third-party analytics
          tracking cookies on the platform itself. The marketing site may use
          standard analytics for aggregated traffic measurement.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">8. Security</h2>
        <p>
          Data is encrypted in transit (TLS 1.2+) and at rest. Authentication
          tokens are short-lived. Database connections use credential rotation.
          We do not store payment card data — Stripe handles that exclusively.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">9. International transfers</h2>
        <p>
          Trinity Bridge operates from the United States. By using our services,
          you acknowledge that your data may be processed in the United States.
          Where required, we use standard contractual clauses with sub-processors
          located outside the US.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">10. Children</h2>
        <p>
          Our services are not directed to individuals under 18. If we learn
          that we have inadvertently collected data from a minor, we will
          delete it promptly.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">11. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          notified by email to the address on file. Continued use of the
          services after the change constitutes acceptance.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">12. Contact</h2>
        <p>
          Privacy questions:{' '}
          <a href="mailto:privacy@trinitybps.com" className="text-brand-cyan hover:underline">
            privacy@trinitybps.com
          </a>
          <br />
          General support:{' '}
          <a href="mailto:support@trinitybps.com" className="text-brand-cyan hover:underline">
            support@trinitybps.com
          </a>
          <br />
          Mailing: Trinity Bridge Professional Services LLC, Nashua, NH, USA
        </p>
      </section>
    </main>
  )
}
