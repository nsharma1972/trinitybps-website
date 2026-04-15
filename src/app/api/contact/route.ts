import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_TO_EMAIL ?? 'hello@trinitybps.com'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, interest, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const interestLabel: Record<string, string> = {
    'ai-university': 'AI University',
    'tdi-intel': 'TDI Intel',
    'ai-consulting': 'AI Consulting',
    'all': 'All Solutions',
  }

  try {
    await resend.emails.send({
      from: 'Trinity Bridge PS <noreply@trinitybps.com>',
      to: TO,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${interest ? `<p><strong>Area of interest:</strong> ${interestLabel[interest] ?? interest}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
