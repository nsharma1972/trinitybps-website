import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Life Science Assessment — Trinity Bridge PS',
  description: 'Industry-leading assessment consulting for biotechnology, pharmaceuticals, medical devices, and healthcare — digital transformation, regulatory compliance, and risk management.',
}

const digitalAssessments = [
  {
    title: 'Digital Transformation Strategy Assessment',
    body: 'Evaluate the current state of digital transformation within your organization, including strategies for implementing digital solutions like AI, IoT, and cloud computing.',
  },
  {
    title: 'Cybersecurity & Data Privacy Assessment',
    body: 'Ensure digital systems are secure, data privacy is maintained, and compliance with HIPAA and GDPR is achieved — especially for patient data.',
  },
  {
    title: 'Digital Health Compliance Assessment',
    body: 'Evaluate compliance with regulatory standards specific to digital health products, including software as a medical device (SaMD) and health apps.',
  },
  {
    title: 'IT Infrastructure & System Integration Assessment',
    body: 'Assess IT infrastructure for scalability, reliability, and efficiency, and evaluate the integration of various systems and software across your organization.',
  },
  {
    title: 'Data Management & Analytics Assessment',
    body: 'Review processes for data collection, storage, management, and analysis — including the use of big data and analytics tools in decision-making.',
  },
  {
    title: 'Cloud Computing Assessment',
    body: 'Evaluate the adoption and utilization of cloud services, focusing on scalability, cost-effectiveness, and data security in regulated environments.',
  },
  {
    title: 'User Experience & Digital Adoption Assessment',
    body: 'Assess how users interact with digital tools and platforms, and evaluate the adoption rate and effectiveness of digital solutions across your workforce.',
  },
  {
    title: 'Technology & Innovation Assessment',
    body: 'Evaluate new healthcare technologies — digital health solutions, medical devices, and emerging therapies — understanding potential impact, adoption barriers, and integration into existing systems.',
  },
  {
    title: 'Digital Maturity Assessment',
    body: 'A comprehensive evaluation of your organization\'s level of digital development and ability to leverage technology across strategy, culture, processes, and technology.',
  },
  {
    title: 'Digital Compliance & Cybersecurity Assessment',
    body: 'Scrutinize incorporation of new healthcare technologies — decipher prospective influence, identify adoption barriers, and strategize seamless integration while ensuring regulatory compliance.',
  },
]

const riskAssessments = [
  {
    title: 'Regulatory Compliance Assessment',
    body: 'Evaluate adherence to applicable laws and regulations including FDA, EMA, and other regional authorities — covering regulatory strategies, submissions, and communication compliance.',
  },
  {
    title: 'Risk Management Framework Assessment',
    body: 'Analyze the effectiveness of your risk management framework — identifying, evaluating, and prioritizing risks and assessing risk mitigation strategies.',
  },
  {
    title: 'Data Privacy & Security Compliance Assessment',
    body: 'Ensure compliance with HIPAA, GDPR, and other data protection laws while assessing cybersecurity measures to protect sensitive health and patient data.',
  },
  {
    title: 'GCP & GMP Compliance Audits',
    body: 'Conduct audits to ensure adherence to Good Clinical Practice and Good Manufacturing Practice standards — critical for clinical trials and manufacturing processes.',
  },
  {
    title: 'Third-Party & Vendor Risk Assessment',
    body: 'Evaluate the risks associated with third-party vendors and suppliers, including their compliance with industry standards and impact on your organization\'s risk profile.',
  },
  {
    title: 'Quality System Compliance Assessment',
    body: 'Assess compliance with quality system regulations (QSR) — crucial for ensuring product quality and safety throughout the product lifecycle.',
  },
  {
    title: 'Supply Chain Compliance Assessment',
    body: 'Evaluate the compliance of supply chain processes — sourcing, manufacturing, distribution, and logistics — with regulatory and industry standards.',
  },
]

export default function LifeScienceAssessment() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-green-50/60 to-white pointer-events-none" />
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">Life Science Assessment</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark leading-tight tracking-tight mb-5 max-w-2xl">
          Empowering Life Sciences Success
        </h1>
        <p className="text-lg text-brand-muted max-w-xl leading-relaxed mb-8">
          Cost-effective, industry-leading assessment consulting for biotechnology, pharmaceuticals,
          medical devices, and healthcare — from digital transformation to regulatory compliance.
        </p>
        <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>

      {/* Intro */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Our Approach</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-5">Built for the pace of life sciences</h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            In the rapidly evolving life sciences landscape, staying ahead is not optional. Our assessment
            consulting services are specifically tailored to empower your business — whether you are in
            biotechnology, pharmaceuticals, medical devices, or healthcare services.
          </p>
          <p className="text-brand-muted leading-relaxed">
            We offer a comprehensive suite of assessments that address every critical aspect of your journey
            from concept to market: digital transformation, regulatory compliance, risk management, and
            quality systems.
          </p>
        </div>
      </section>

      {/* Digital Assessments */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Digital</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-10">Digital Transformation Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {digitalAssessments.map(a => (
              <div key={a.title} className="bg-white border border-gray-100 border-t-2 border-t-brand-green rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark mb-2">{a.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Compliance Assessments */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Risk & Compliance</p>
        <h2 className="text-xl font-semibold text-brand-dark mb-10">Regulatory & Risk Assessments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {riskAssessments.map(a => (
            <div key={a.title} className="border border-gray-100 border-t-2 border-t-brand-green rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-brand-dark mb-2">{a.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-light px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">Industries</p>
          <h2 className="text-xl font-semibold text-brand-dark mb-6">Who We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {['Biotechnology', 'Pharmaceuticals', 'Medical Devices', 'Healthcare Services', 'Clinical Research Organizations', 'Digital Health'].map(i => (
              <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-brand-muted font-medium shadow-sm">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to assess your readiness?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Our assessments give you a clear picture of where you stand and a prioritized path forward.
          </p>
          <Link href="/contact"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
