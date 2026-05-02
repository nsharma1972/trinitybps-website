import { NextRequest, NextResponse } from 'next/server'

// Server-side only — OPENAI_API_KEY must be set in CapRover env vars.
// Falls back to a friendly "temporarily unavailable" message if missing
// so the chat doesn't crash the whole site.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const SYSTEM_PROMPT = `You are the Trinity Bridge assistant — a helpful AI agent on the trinitybps.com website. You answer visitor questions about Trinity Bridge Professional Services and its four products.

About Trinity Bridge Professional Services:
- An AI-operated boutique consulting firm based in the United States
- Helps mid-market organizations adopt AI responsibly, especially in regulated industries (life sciences, financial services, legal, healthcare)
- Founded by Narendra Sharma

The four products:
1. **AI University** (/ai-university) — Industry-specific AI learning paths to reskill workforces from AI-anxious to AI-capable. Built for regulated industries.
2. **TDI Intel** (/tdi-intel) — Data intelligence layer that connects existing systems and surfaces actionable insights. No data science team required.
3. **AI Consulting** (/ai-consulting) — Hands-on consulting covering strategy, compliance, change management, and implementation.
4. **Trinity Yasha (GEO + SEO)** (/yasha) — Generative Engine Optimization + Search Engine Optimization platform. Measures how a brand appears in ChatGPT, Claude, and Google, then auto-drafts and publishes content to close the visibility gap. Pricing: Starter $99/mo, Pro $499/mo, Enterprise custom.

Tone: warm, knowledgeable, concise. Aim for 2-4 sentence answers. Use markdown sparingly (just bold for emphasis).

Rules:
- If the visitor asks something specific (pricing details, timeline, regulatory specifics, custom requirements, demo) — give a brief useful answer AND suggest they book a call at /contact for a real conversation.
- If asked about competitors or comparisons, be honest and helpful, not salesy. Trinity Bridge's differentiation is being AI-operated (efficient, modern), boutique-focused (mid-market not enterprise), and regulated-industry-aware.
- If asked something off-topic (current events, jokes, code help, etc.) — politely redirect to Trinity Bridge topics.
- If asked about something you don't know (specific case studies you weren't told about, internal team details), say so and suggest the visitor reach out via /contact.
- Never invent statistics, customer names, or specific outcomes you weren't given.
- Keep answers focused on what the visitor needs to make a decision about engaging with Trinity Bridge.`

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({
      role: 'assistant',
      content: "Our chat assistant is temporarily unavailable. Please [book a call](/contact) and we'll get back to you within one business day.",
    })
  }

  let body: { messages?: ChatMessage[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const messages = body.messages
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30) {
    return NextResponse.json({ error: 'invalid_messages' }, { status: 400 })
  }

  // Trim each message to a sane length to prevent prompt-stuffing.
  const userMessages: ChatMessage[] = messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map((m) => ({
      role: m.role,
      content: String(m.content ?? '').slice(0, 2000),
    }))

  const openaiBody = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...userMessages],
    temperature: 0.6,
    max_tokens: 400,
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(openaiBody),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      console.error('openai_error', res.status, errText.slice(0, 200))
      return NextResponse.json({
        role: 'assistant',
        content: "I'm having trouble responding right now. Please [book a call](/contact) and we'll respond within one business day.",
      })
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }
    const reply = data.choices?.[0]?.message?.content?.trim()
    if (!reply) {
      return NextResponse.json({
        role: 'assistant',
        content: "Sorry, I didn't catch that. Could you rephrase?",
      })
    }
    return NextResponse.json({ role: 'assistant', content: reply })
  } catch (err) {
    console.error('chat_route_error', String(err))
    return NextResponse.json({
      role: 'assistant',
      content: "I'm having trouble responding right now. Please [book a call](/contact).",
    })
  }
}
