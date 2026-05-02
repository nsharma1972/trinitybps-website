export const metadata = {
  title: 'Terms of Service — Trinity Bridge',
  description: 'The terms governing your use of Trinity Bridge products and services.',
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-3">Terms of Service</h1>
        <p className="text-sm text-brand-muted">
          Last updated: 2 May 2026 · Effective: 2 May 2026
        </p>
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900">
          These terms govern use of Trinity Bridge products. For commercial
          contracts or questions, contact{' '}
          <a href="mailto:support@trinitybps.com" className="underline">
            support@trinitybps.com
          </a>.
        </div>
      </header>

      <section className="prose prose-slate max-w-none text-sm text-brand-dark space-y-4">
        <h2 className="text-lg font-semibold mt-6 mb-2">1. Agreement</h2>
        <p>
          By creating an account, subscribing to a paid plan, or otherwise
          using Trinity Bridge products (&ldquo;Services&rdquo;), you agree to
          these Terms of Service. If you do not agree, do not use the Services.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">2. Account</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You must be at least 18 years old.</li>
          <li>You are responsible for keeping your credentials secure.</li>
          <li>You are responsible for all activity under your account.</li>
          <li>One person per account, unless you purchase a multi-user plan.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">3. Subscriptions and billing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Paid plans renew monthly or annually based on the plan you select.
          </li>
          <li>
            Payments are processed by Stripe. You authorize us to charge your
            payment method for the recurring fee until you cancel.
          </li>
          <li>
            You may cancel at any time. Cancellation takes effect at the end
            of your current billing period; you retain access until then.
          </li>
          <li>
            Refunds for partial periods are issued at our discretion.
            Cancellation alone does not generate an automatic refund.
          </li>
          <li>
            We may change pricing with at least 30 days&apos; notice. Existing
            subscribers keep the prior price for the duration of their current
            term.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use the Services for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to other tenants&apos; data</li>
          <li>
            Reverse-engineer, decompile, or scrape the Services beyond
            documented APIs
          </li>
          <li>
            Submit competitor brand names you do not have a legitimate business
            interest in tracking
          </li>
          <li>
            Use the Services to harass, defame, or violate third-party rights
          </li>
          <li>Resell or redistribute the Services without a written agreement</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">5. Your content</h2>
        <p>
          You retain ownership of brand information, queries, and any content
          you upload. By using the Services, you grant Trinity Bridge a limited
          license to process this content solely to deliver the Services to
          you. We do not claim ownership of your content and do not use it to
          train models.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">6. AI-generated content</h2>
        <p>
          The Services include AI-generated outputs (measurement responses,
          content drafts, suggested queries). These are produced by third-party
          large language models and are provided as-is. You are responsible
          for reviewing AI-generated content before publishing or relying on
          it. Trinity Bridge does not guarantee the accuracy, completeness,
          or appropriateness of AI outputs.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">7. Service availability</h2>
        <p>
          We aim for high availability but do not guarantee uninterrupted
          service. Scheduled maintenance, third-party provider outages, or
          unforeseen events may cause downtime. We are not liable for losses
          arising from such interruptions.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">8. Termination</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You may close your account at any time via account settings.</li>
          <li>
            We may suspend or terminate accounts that violate these terms,
            with notice where reasonable.
          </li>
          <li>
            Upon termination, your access ends and we delete your workspace
            data per our Privacy Policy retention schedule.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">9. Disclaimer of warranties</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; without warranties of
          any kind. We disclaim all warranties, express or implied, including
          merchantability, fitness for a particular purpose, and
          non-infringement, to the fullest extent permitted by law.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">10. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Trinity Bridge&apos;s total
          liability arising out of or related to the Services shall not exceed
          the fees you paid us in the 12 months preceding the claim. We are
          not liable for indirect, incidental, consequential, or punitive
          damages, including lost profits or data loss.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">11. Indemnification</h2>
        <p>
          You agree to indemnify and hold Trinity Bridge harmless from claims
          arising out of your use of the Services in violation of these terms
          or applicable law.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">12. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New Hampshire,
          USA, without regard to conflict-of-law principles. Disputes shall
          be resolved in the courts of Hillsborough County, New Hampshire,
          unless otherwise required by mandatory consumer-protection law.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">13. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will
          be notified by email to the address on file at least 30 days before
          they take effect. Continued use of the Services after the change
          constitutes acceptance.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">14. Contact</h2>
        <p>
          Questions about these Terms:{' '}
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
