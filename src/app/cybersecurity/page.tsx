import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity Service — Trinity Bridge PS',
  description: 'Comprehensive cybersecurity solutions tailored for medical and dental practices — HIPAA compliance, risk assessments, incident response, and more.',
}

const services = [
  {
    step: '01',
    title: 'Asset Identification & Configuration Management',
    body: 'Identify and catalog all IT assets — hardware, software, network devices, data storage — and implement necessary security measures including antivirus, firewalls, and encryption.',
  },
  {
    step: '02',
    title: 'Security Risk Assessment',
    body: 'Conduct regular risk assessments to identify vulnerabilities and threats, then prioritize and implement risk mitigation strategies tailored to your practice.',
  },
  {
    step: '03',
    title: 'Security Policies & Procedures',
    body: 'Develop and enforce comprehensive security policies covering data protection, incident response, acceptable use, and remote access. Regularly updated to reflect current threats and regulatory changes.',
  },
  {
    step: '04',
    title: 'Physical & Network Security',
    body: 'Secure physical access to IT infrastructure and implement robust network security measures including firewalls, intrusion detection systems (IDS/IPS), and secure Wi-Fi.',
  },
  {
    step: '05',
    title: 'Employee Training & Awareness',
    body: 'Ongoing training sessions on cybersecurity best practices and a culture of security awareness among all staff — your first and most important line of defense.',
  },
  {
    step: '06',
    title: 'Incident Response Plan (IRP)',
    body: 'Develop and maintain a comprehensive incident response plan with regular drills — so your practice knows exactly what to do when an incident occurs.',
  },
  {
    step: '07',
    title: 'Regular Updates & Patch Management',
    body: 'Establish a patch management policy to keep all software current. Automate patch deployment to ensure consistency and eliminate gaps in protection.',
  },
  {
    step: '08',
    title: 'Third-Party Vendor Management',
    body: 'Assess and monitor third-party vendors for compliance with security standards. Include security requirements in vendor contracts to protect your full ecosystem.',
  },
  {
    step: '09',
    title: 'Continuous Monitoring & Review',
    body: 'Automated monitoring tools for real-time security analysis. Regular review and update of security measures to stay ahead of evolving threats.',
  },
  {
    step: '10',
    title: 'Backup & Restore',
    body: 'Comprehensive backup strategy with regularly tested restore procedures to ensure data integrity and fast recovery from any incident.',
  },
]

const whyUs = [
  {
    title: 'Healthcare-Specific Expertise',
    body: 'Extensive experience providing cybersecurity solutions specifically tailored for medical and dental practices — we understand your workflows, your data, and your regulatory obligations.',
  },
  {
    title: 'Comprehensive Approach',
    body: 'A full suite of services to manage and mitigate risks end-to-end, ensuring your practice remains secure and compliant — not just at a point in time.',
  },
  {
    title: 'Tailored Solutions',
    body: 'Services customized to meet the unique needs of your practice, aligned with HIPAA, GDPR, and any applicable state regulations.',
  },
  {
    title: 'Dedicated Support & Continuous Improvement',
    body: 'Ongoing support with continuously updated strategies to address emerging threats — we stay current so you can focus on patient care.',
  },
]

const addValue = [
  {
    title: 'Educational Workshops & Webinars',
    body: 'Learn about the latest cybersecurity threats, data protection best practices, and compliance requirements through our practitioner-led sessions.',
  },
  {
    title: 'Free Initial Consultation',
    body: 'Receive a complimentary cybersecurity assessment to identify vulnerabilities in your practice — no commitment required.',
  },
  {
    title: 'Event Sponsorships',
    body: 'Partner with us for your events and provide attendees with valuable educational materials on cybersecurity and HIPAA compliance.',
  },
]

export default function Cybersecurity() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-blue-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">Cybersecurity Service</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Protecting Your Practice with Comprehensive Cybersecurity
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Medical and dental practices are increasingly targeted by cybercriminals. We provide tailored
          cybersecurity solutions to safeguard patient data and ensure HIPAA compliance.
        </p>
        <Link href="/contact" className="btn-primary">Get a Free Assessment</Link>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Services */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Services</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">Our 10-Point Security Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(s => (
              <div key={s.step} className="bg-white border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-6">
                <p className="text-2xl font-light text-brand-blue mb-3">{s.step}</p>
                <h3 className="font-semibold text-brand-dark mb-2">{s.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Why Choose Us</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-10">What sets us apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyUs.map(w => (
            <div key={w.title} className="border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-dark mb-2">{w.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Add Value */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Getting Started</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">How We Add Value to Your Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {addValue.map(a => (
              <div key={a.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-blue rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{a.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Is your practice protected?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Start with a free cybersecurity assessment. We will identify your vulnerabilities and
            recommend a prioritized protection plan.
          </p>
          <Link href="/contact"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
