'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_GREETING: Message = {
  role: 'assistant',
  content:
    "Hi — I'm the Trinity Bridge assistant. I can answer questions about AI University, TDI Intel, AI Consulting, or Yasha (our GEO + SEO platform). What brought you here?",
}

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll the message list as new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, busy])

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || busy) return

    const userMsg: Message = { role: 'user', content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setBusy(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.filter((m) => m.role === 'user' || m.role === 'assistant'),
        }),
      })
      const data = (await res.json()) as { content?: string }
      const reply: Message = {
        role: 'assistant',
        content:
          data.content ??
          "Sorry, something went wrong. Please [book a call](/contact) for a real conversation.",
      }
      setMessages((prev) => [...prev, reply])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting. Please [book a call](/contact) and we'll get back to you within one business day.",
        },
      ])
    } finally {
      setBusy(false)
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  // Light markdown rendering for [text](url) links so the assistant can route
  // visitors to /contact, /yasha, etc. We deliberately don't run a full
  // markdown parser — keeps the bundle small + reduces XSS surface.
  function renderContent(text: string) {
    const parts: Array<string | { text: string; href: string }> = []
    const re = /\[([^\]]+)\]\(([^)]+)\)/g
    let lastIndex = 0
    let match
    while ((match = re.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
      parts.push({ text: match[1], href: match[2] })
      lastIndex = re.lastIndex
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex))
    return parts.map((p, i) =>
      typeof p === 'string' ? (
        <span key={i}>{p}</span>
      ) : (
        <a
          key={i}
          href={p.href}
          className="text-brand-cyan hover:underline font-medium"
          target={p.href.startsWith('http') ? '_blank' : undefined}
          rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {p.text}
        </a>
      ),
    )
  }

  return (
    <>
      {/* Floating bubble — bottom right, always visible */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-brand-cyan text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100 bg-brand-dark text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-sm font-bold">
              TB
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">Trinity Bridge Assistant</p>
              <p className="text-xs text-slate-400 leading-tight">AI-powered · usually responds in seconds</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-brand-blue text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 text-brand-dark rounded-bl-sm'
                  }`}
                >
                  {renderContent(m.content)}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-2">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-brand-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                disabled={busy}
                placeholder="Ask anything…"
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={busy || !input.trim()}
                className="px-4 py-2 text-sm font-medium text-white bg-brand-cyan rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-brand-muted mt-2 text-center">
              Powered by AI · responses may be inaccurate · for important questions <a href="/contact" className="text-brand-cyan hover:underline">book a call</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
