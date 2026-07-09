'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  return (
    <div className="contact-form-shell">
      {!sent ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-row">
            <input
              type="text"
              required
              aria-label="Full name"
              placeholder="Full name"
              value={form.name}
              onChange={(event) => handleChange('name', event.target.value)}
            />
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Email address"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
            />
          </div>
          <input
            type="text"
            aria-label="Subject"
            placeholder="Subject (e.g. membership, tour, classes)"
            value={form.subject}
            onChange={(event) => handleChange('subject', event.target.value)}
          />
          <textarea
            required
            rows={5}
            aria-label="Your message"
            placeholder="Your message"
            value={form.message}
            onChange={(event) => handleChange('message', event.target.value)}
          />
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
      ) : (
        <div className="contact-success">
          <div className="success-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Message sent</h3>
          <p>Thanks — we&apos;ll be in touch within one working day.</p>
        </div>
      )}
    </div>
  )
}
